import Link from "next/link";
import VantaBackground from "./VantaBackground";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-[var(--border)]"
            style={{ backgroundColor: "#0b0e17" }}
        >
            <VantaBackground />

            <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
                <p
                    className="eyebrow reveal"
                    style={{ animationDelay: "60ms", color: "#9aa3b8" }}
                >
                    Justine Nicdao — Full-stack software engineer
                </p>

                <h1
                    className="display reveal mt-7 max-w-4xl text-balance"
                    style={{
                        animationDelay: "140ms",
                        fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
                        lineHeight: 1.04,
                        color: "#f4f6f9",
                    }}
                >
                    I design, build, and ship —{" "}
                    <span style={{ color: "#9db2fb" }}>
                        end&nbsp;to&nbsp;end.
                    </span>
                </h1>

                <p
                    className="reveal mt-7 max-w-xl text-lg leading-relaxed"
                    style={{ color: "#c3c7d1", animationDelay: "220ms" }}
                >
                    From polished Next.js interfaces to Supabase &amp; Postgres
                    back-ends and practical AI features — I take web and mobile
                    products from first commit to production.
                </p>

                <div
                    className="reveal mt-10 flex flex-wrap items-center gap-3"
                    style={{ animationDelay: "300ms" }}
                >
                    <Link
                        href="/#works"
                        className="group inline-flex items-center gap-2 rounded-lg bg-[#3a5cd6] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#4a6ae0]"
                    >
                        View work
                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                    <Link
                        href="/resume"
                        className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3 text-sm font-medium text-white/90 transition-colors duration-300 hover:bg-white/10"
                    >
                        Résumé
                    </Link>
                </div>

                <div
                    className="reveal mt-12 flex items-center gap-2.5"
                    style={{ animationDelay: "380ms" }}
                >
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                            style={{ background: "#8aa1f7" }}
                        />
                        <span
                            className="relative inline-flex h-2 w-2 rounded-full"
                            style={{ background: "#8aa1f7" }}
                        />
                    </span>
                    <span
                        className="eyebrow"
                        style={{ letterSpacing: "0.14em", color: "#9aa3b8" }}
                    >
                        Open to senior &amp; freelance roles
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
