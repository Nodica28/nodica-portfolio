"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import nodicaIcon from "@/app/assets/images/nodica_icon.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className=" flex gap-1 text-xl font-bold text-gray-900 dark:text-white hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-all duration-300"
                        >
                            <Image
                                src={nodicaIcon}
                                alt="Nodica"
                                width={32}
                                height={32}
                            />
                            Nodica
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/#works"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-all duration-300"
                        >
                            Works
                        </Link>
                        <Link
                            href="/#techstack"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-all duration-300"
                        >
                            Tech Stack
                        </Link>
                        <Link
                            href="/#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-all duration-300"
                        >
                            About
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center">
                        <a
                            href="/pdf/Nicdao-Justine_Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold py-3 px-8 bg-[var(--primary)] rounded-lg transition hover:bg-gray-100 dark:hover:bg-[var(--tertiary)] hover:transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                    xmlns="http://www.w3.org/2000/svg"
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
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div
                className={`md:hidden transition-all duration-300 ease-linear ${
                    isMenuOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 text-center">
                    <Link
                        href="/#works"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Works
                    </Link>
                    <Link
                        href="/#techstack"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tech Stack
                    </Link>
                    <Link
                        href="/#about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/#contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <a
                        href="/pdf/Nicdao-Justine_Resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[var(--primary)] font-bold dark:text-[var(--primary)] mt-2 py-3 px-8 border border-[var(--primary)] rounded-lg transition hover:bg-gray-100 dark:hover:bg-[var(--primary)] hover:text-[var(--primary)] dark:hover:text-white hover:transition-all"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
