import Reveal from "@/components/ui/Reveal";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 sm:py-28"
            style={{ background: "var(--bg)" }}
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                    <Reveal>
                        <p className="eyebrow">About</p>
                        <h2
                            className="display mt-3 text-4xl sm:text-5xl"
                            style={{ color: "var(--text)" }}
                        >
                            Who I am
                        </h2>
                    </Reveal>

                    <Reveal delay={120}>
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--muted)" }}
                        >
                            Hello, I&apos;m Justine, a Full-Stack Software
                            Engineer. I build on what I call the{" "}
                            <strong style={{ color: "var(--text)" }}>
                                SNAP
                            </strong>{" "}
                            stack —{" "}
                            <strong style={{ color: "var(--text)" }}>
                                Supabase
                            </strong>
                            ,{" "}
                            <strong style={{ color: "var(--text)" }}>
                                Next.js
                            </strong>
                            ,{" "}
                            <strong style={{ color: "var(--text)" }}>
                                App Router
                            </strong>
                            , and{" "}
                            <strong style={{ color: "var(--text)" }}>
                                Postgres
                            </strong>{" "}
                            — pairing Next.js server components and server
                            actions with a Supabase back-end, and React,
                            Tailwind, and shadcn/ui on the front end. I ship
                            secure, accessible, production-ready applications end
                            to end on Node.js.
                        </p>
                        <p
                            className="mt-5 text-lg leading-relaxed"
                            style={{ color: "var(--muted)" }}
                        >
                            I also have expertise in{" "}
                            <strong style={{ color: "var(--text)" }}>
                                Webflow
                            </strong>{" "}
                            and{" "}
                            <strong style={{ color: "var(--text)" }}>
                                WordPress
                            </strong>{" "}
                            with{" "}
                            <strong style={{ color: "var(--text)" }}>
                                Elementor
                            </strong>
                            , creating responsive and visually engaging websites
                            designed for efficiency and ease of use.
                        </p>

                        <a
                            href="/pdf/Nicdao-Justine_Resume-Professional.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--on-accent)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
                        >
                            Download résumé
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
