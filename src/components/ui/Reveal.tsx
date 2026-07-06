"use client";

import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type ReactNode,
} from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** Stagger delay in milliseconds, applied once the element scrolls into view. */
    delay?: number;
    style?: CSSProperties;
};

// Reveals its children with a subtle fade-up the first time they scroll into
// view. Honors prefers-reduced-motion (shows immediately, no motion).
const Reveal = ({
    children,
    className = "",
    delay = 0,
    style,
}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(true);
            return;
        }

        let timer: ReturnType<typeof setTimeout>;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.disconnect();
                    timer = setTimeout(() => setShown(true), delay);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`reveal-scroll${shown ? " is-visible" : ""}${
                className ? ` ${className}` : ""
            }`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Reveal;
