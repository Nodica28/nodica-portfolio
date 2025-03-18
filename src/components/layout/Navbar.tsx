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
                            className=" flex gap-1 text-xl font-bold text-gray-900 dark:text-white hover:text-[var(--primary)] dark:hover:text-[var(--secondary)]"
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
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)]"
                        >
                            Works
                        </Link>
                        <Link
                            href="/#techstack"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)]"
                        >
                            Tech Stack
                        </Link>
                        <Link
                            href="/#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)]"
                        >
                            About
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--secondary)]"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-[var(--primary)] font-bold dark:text-[var(--primary)] py-3 px-8 border border-[var(--primary)] rounded-lg transition hover:bg-gray-100 dark:hover:bg-[var(--primary)] hover:text-[var(--primary)] dark:hover:text-white hover:transition-all"
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
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
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
                        <Link
                            href="/#about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/#skills"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </Link>
                        <Link
                            href="/#projects"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/#contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
