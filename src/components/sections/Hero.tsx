"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

const Hero = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const roles = [
        "Full-Stack Software Engineer",
        "Reactjs Developer",
        "Nextjs Developer",
        "AI Engineer",
        "CMS Architect",
        "Webflow Specialist",
        "WordPress Elementor Expert",
    ];

    const [currentRole, setCurrentRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [delta, setDelta] = useState(200);

    const typingSpeed = 75;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    const tick = useCallback(() => {
        const fullRole = roles[roleIndex];

        if (isDeleting) {
            // Deleting text
            setCurrentRole((prevRole) =>
                fullRole.substring(0, prevRole.length - 1)
            );
            setDelta(deletingSpeed);
        } else {
            // Typing text
            setCurrentRole((prevRole) =>
                fullRole.substring(0, prevRole.length + 1)
            );
            setDelta(typingSpeed);
        }

        // If completed typing the full role
        if (!isDeleting && currentRole === fullRole) {
            setIsDeleting(true);
            setDelta(pauseTime); // Pause before deleting
        }
        // If deleted the entire role
        else if (isDeleting && currentRole === "") {
            setIsDeleting(false);
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
            setDelta(typingSpeed);
        }
    }, [
        currentRole,
        isDeleting,
        roleIndex,
        roles,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [tick, delta]);

    return (
        <>
            <section
                id="homepage-background"
                className="relative py-20 sm:py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[116px]">
                    <div className="gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                <span className="block">
                                    I don&apos;t just code, <br />I{" "}
                                    <span className="text-[var(--secondary)]">
                                        &lt;commit&gt;
                                    </span>{" "}
                                    as a
                                </span>
                                <span className="block mt-[61px] text-4xl text-[var(--secondary)] dark:text-[var(--secondary)]">
                                    {currentRole}
                                    <span className="animate-blink">|</span>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
                    <Link
                        href="/#works"
                        className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                    >
                        <span className="text-sm mb-2">See my works</span>
                        <svg
                            className="w-6 h-6 animate-bounce hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-100"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.29377 12.7063C7.6844 13.0969 8.31877 13.0969 8.7094 12.7063L14.7094 6.70627C15.1 6.31565 15.1 5.68127 14.7094 5.29065C14.3188 4.90002 13.6844 4.90002 13.2938 5.29065L8.00002 10.5844L2.70627 5.29377C2.31565 4.90315 1.68127 4.90315 1.29065 5.29377C0.900024 5.6844 0.900024 6.31877 1.29065 6.7094L7.29065 12.7094L7.29377 12.7063Z"
                                fill="#F7F7F7"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
                strategy="beforeInteractive"
            />
            <Script id="script">
                {`VANTA.BIRDS({
                el: "#homepage-background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x101828,
                color1: 0xff8282,
                birdSize: 0.90,
                wingSpan: 40.00,
                speedLimit: 3.00,
                separation: 70.00,
                cohesion: 100.00,
                quantity: 3.00
                });`}
            </Script>
        </>
    );
};

export default Hero;
