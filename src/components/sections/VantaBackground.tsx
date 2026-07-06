"use client";

import { useEffect, useRef } from "react";

// The installed three@0.174 is not compatible with vanta@0.5.24, so we load the
// same proven CDN builds the original used (three r134 + vanta birds) on the
// client, after hydration — no render-blocking, and skipped for reduced motion.
const THREE_SRC =
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_SRC =
    "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js";

const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const el = document.createElement("script");
        el.src = src;
        el.async = true;
        el.onload = () => resolve();
        el.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(el);
    });

type VantaEffect = { destroy: () => void };

const VantaBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<VantaEffect | null>(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let cancelled = false;

        const start = async () => {
            try {
                await loadScript(THREE_SRC);
                await loadScript(VANTA_SRC);
            } catch {
                return;
            }
            if (cancelled || !containerRef.current || effectRef.current) return;

            const vanta = (
                window as unknown as {
                    VANTA?: {
                        BIRDS: (opts: Record<string, unknown>) => VantaEffect;
                    };
                }
            ).VANTA;
            if (!vanta) return;

            effectRef.current = vanta.BIRDS({
                el: containerRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                backgroundColor: 0x0b0e17,
                color1: 0x8aa1f7,
                color2: 0x2f54c8,
                birdSize: 0.9,
                wingSpan: 40.0,
                speedLimit: 3.0,
                separation: 70.0,
                cohesion: 100.0,
                quantity: 3.0,
            });
        };

        start();

        return () => {
            cancelled = true;
            effectRef.current?.destroy();
            effectRef.current = null;
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />
    );
};

export default VantaBackground;
