"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import nodicaIcon from "@/app/assets/images/nodica_icon.png";

const links = [
    { href: "/#works", label: "Work" },
    { href: "/#techstack", label: "Stack" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Hide global chrome on the standalone, print-optimized résumé page.
    if (pathname === "/resume") {
        return null;
    }

    return (
        <nav
            className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
            style={{
                backgroundColor:
                    "color-mix(in srgb, var(--bg) 82%, transparent)",
                borderColor: "var(--border)",
            }}
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
                    >
                        <Image
                            src={nodicaIcon}
                            alt="Nodica"
                            width={28}
                            height={28}
                        />
                        Nodica
                    </Link>

                    {/* Desktop: links + CTA grouped on the right */}
                    <div className="hidden items-center gap-8 md:flex">
                        <div className="flex items-center gap-7 text-sm">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/resume"
                            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--on-accent)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
                        >
                            Résumé
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-[var(--muted)] transition-colors hover:text-[var(--text)] focus:outline-none md:hidden"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isMenuOpen ? (
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-linear md:hidden ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div
                    className="space-y-1 border-t px-4 pb-4 pt-3"
                    style={{
                        backgroundColor: "var(--bg)",
                        borderColor: "var(--border)",
                    }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block rounded-md px-3 py-2.5 text-base text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/resume"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-2 block rounded-lg bg-[var(--accent)] px-3 py-2.5 text-center text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
                    >
                        Résumé
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
