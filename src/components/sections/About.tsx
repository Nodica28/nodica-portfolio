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

                <div className="max-w-3xl mx-auto">
                    <div>
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

                        {/* CTA Button */}
                        <a
                            href="/pdf/Nicdao-Justine_Resume-Professional.pdf"
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
                </div>
            </div>
        </section>
    );
};

export default About;
