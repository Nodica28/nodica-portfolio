import Image from "next/image";
import aboutImage from "@/app/assets/images/about_image.png";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Web Developer & Designer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Hello, I&apos;m Justine, a Full-Stack Software
                            Engineer specializing in the <strong>MERN</strong>{" "}
                            stack (MongoDB, ExpressJS, ReactJS, NodeJS). I build
                            secure, user-friendly web applications with React,
                            MaterialUI, and NodeJS.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I also have expertise in <strong>Webflow</strong>{" "}
                            and <strong>WordPress</strong> with{" "}
                            <strong>Elementor</strong>, creating responsive and
                            visually engaging websites designed for efficiency
                            and ease of use.
                        </p>

                        {/* Experience Metrics */}
                        <div className="flex justify-between mb-20 max-w-md">
                            <div className="text-center">
                                <p className="text-xl font-bold text-[var(--primary)] dark:text-[var(--secondary)]">
                                    04+
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Years
                                    <br />
                                    work experience
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-bold text-[var(--primary)] dark:text-[var(--secondary)]">
                                    20+
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Projects
                                    <br />
                                    completed
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-bold text-[var(--primary)] dark:text-[var(--secondary)]">
                                    07+
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Web
                                    <br />
                                    frameworks
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="/pdf/Nicdao-Justine_Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] font-medium rounded-lg transition-colors duration-300"
                        >
                            Download Resume
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                ></path>
                            </svg>
                        </a>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md h-80 sm:h-96 overflow-hidden">
                            <Image
                                src={aboutImage}
                                alt="About Me"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
