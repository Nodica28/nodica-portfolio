import Image from "next/image";
import badgeImage from "@/app/assets/images/badge.png";
import iconadImage from "@/app/assets/images/iconad.png";
import trulyhomeImage from "@/app/assets/images/trulyhome.png";
import zaptimeImage from "@/app/assets/images/zaptime.png";
import { iconMap, brandColors } from "@/app/assets/iconExporter";
import Reveal from "@/components/ui/Reveal";

const featured = [
    {
        title: "TrulyHome",
        role: "Full-stack engineer · web + native mobile",
        blurb: "Custom kitchen and cabinet installs were coordinated across customers, installation partners, the internal team, and the production facility with no single source of truth. I built an end-to-end operations platform on Next.js and Supabase: a seven-stage production pipeline, role-based dashboards, real-time milestone photos and threaded messaging, ODFL freight tracking with electronic bill-of-lading, and damage reporting — shipped as a web app and native iOS/Android via Capacitor.",
        impact: "One real-time, auditable view from quote to delivery for every stakeholder, replacing scattered calls and spreadsheets.",
        image: trulyhomeImage,
        tags: ["SaaS", "Operations", "Logistics", "Real-time", "Mobile", "AI"],
        icon: [
            "claude",
            "next",
            "react",
            "typescript",
            "tailwind",
            "supabase",
            "postgresql",
            "reactquery",
            "openai",
            "capacitor",
            "aws",
            "sentry",
            "docker",
            "vercel",
        ],
        liveUrl: "https://www.trulyhomecabinets.app",
        githubUrl: "#",
    },
    {
        title: "Zaptime",
        role: "Full-stack · desktop (Electron)",
        blurb: "Knowledge workers had no easy, private way to see where their time actually goes across apps and devices — and raw activity logs are noise, not insight. I built a cross-device desktop app that captures activity through an embedded ActivityWatch engine, syncs via Supabase with real-time WebSocket updates and offline support, and adds an AI chatbot that auto-categorizes activity with editable rules and GitHub OAuth.",
        impact: "Turns passive activity data into a clear, categorized picture of the day — synced securely across a user's devices.",
        image: zaptimeImage,
        tags: ["Desktop App", "Time Tracking", "Productivity", "AI", "Cross-Device"],
        icon: [
            "claude",
            "electron",
            "javascript",
            "tailwind",
            "supabase",
            "postgresql",
            "firebase",
            "openai",
            "cloudflare",
            "node",
        ],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Badge",
        role: "Full-stack software engineer · Badge AI",
        blurb: "Sales reps juggle scattered tools to capture leads and prove engagement, losing prospects between the handshake and the follow-up. I architected and shipped the Badge profile experience in React and TypeScript — AI-powered digital profiles with QR connect, instant lead capture, and real-time analytics — backed by React Query / Zustand state, OAuth and magic-link auth, Stripe, and Drizzle migrations.",
        impact: "A rep's entire sales toolkit in one shareable profile that captures leads instantly and tracks engagement live.",
        image: badgeImage,
        tags: ["Sales", "CRM", "Lead Generation", "AI", "Analytics"],
        icon: [
            "react",
            "typescript",
            "vite",
            "tailwind",
            "shadcn",
            "node",
            "express",
            "postgresql",
            "drizzle",
            "openai",
            "stripe",
            "reactquery",
            "sentry",
        ],
        liveUrl: "https://withbadge.ai",
        githubUrl: "#",
    },
    {
        title: "Iconad Learning with AI",
        role: "Full-stack engineer",
        blurb: "Generic learning content ignores how each child actually learns, so engagement and outcomes suffer. I built an AI learning platform on Next.js, Node, and MongoDB that analyzes a child's traits, interests, and learning style to recommend tailored materials, with OpenAI-powered assistance woven through the experience.",
        impact: "Personalizes each child's learning path instead of a one-size-fits-all curriculum.",
        image: iconadImage,
        tags: ["AI", "Education", "Portal", "Full Stack", "Agent"],
        icon: [
            "next",
            "react",
            "typescript",
            "tailwind",
            "shadcn",
            "javascript",
            "openai",
            "node",
            "mongodb",
            "aws",
        ],
        liveUrl: "https://iconad-learning-ai.vercel.app",
        githubUrl: "https://github.com/Nodica28/iconad-learning-ai",
    },
];

const more = [
    {
        title: "Weathery",
        blurb: "A weather app with real-time data, forecasts, and interactive maps using geolocation and third-party APIs.",
        liveUrl: "https://weathery-pi.vercel.app/",
        githubUrl: "https://github.com/Nodica28/Weathery",
    },
    {
        title: "SAUP Portal HAU",
        blurb: "A university outreach CMS and portal built on the MERN stack for a capstone project.",
        liveUrl: "https://saup-portal-hau.onrender.com",
        githubUrl: "https://github.com/Capstone-SAUP/SAUP-Portal",
    },
    {
        title: "UI/UX Designer Portfolio",
        blurb: "A minimal, responsive single-page portfolio built for a UI/UX designer.",
        liveUrl: "https://escotoaizel.vercel.app",
        githubUrl: "https://github.com/escotoaizel/design.azl",
    },
];

const TechIcons = ({ icons }: { icons: string[] }) => (
    <div
        className="mt-6 flex flex-wrap gap-3"
        style={{ color: "var(--text)" }}
    >
        {icons.map((icon) => {
            const key = icon.toLowerCase();
            const IconComponent = iconMap[key as keyof typeof iconMap];
            if (!IconComponent) return null;
            const label = icon.charAt(0).toUpperCase() + icon.slice(1);
            return (
                <IconComponent
                    key={icon}
                    size={20}
                    color={brandColors[key]}
                    title={label}
                    className="transition-transform duration-300 hover:scale-125"
                />
            );
        })}
    </div>
);

const Projects = () => {
    return (
        <section
            id="works"
            className="py-24 sm:py-28"
            style={{ background: "var(--bg)" }}
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <Reveal className="max-w-2xl">
                    <p className="eyebrow">Selected work</p>
                    <h2
                        className="display mt-3 text-4xl sm:text-5xl"
                        style={{ color: "var(--text)" }}
                    >
                        Things I&apos;ve shipped
                    </h2>
                    <p
                        className="mt-4 text-lg leading-relaxed"
                        style={{ color: "var(--muted)" }}
                    >
                        A few products I&apos;ve taken from first commit to
                        production.
                    </p>
                </Reveal>

                <div className="mt-16 space-y-24 sm:mt-20">
                    {featured.map((project, index) => (
                        <Reveal
                            key={project.title}
                            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                        >
                            <div
                                className={index % 2 === 1 ? "lg:order-2" : ""}
                            >
                                <div
                                    className="relative aspect-[16/10] overflow-hidden rounded-xl border"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} interface`}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        placeholder="blur"
                                        blurDataURL={project.image.src}
                                        className="transition-transform duration-500 hover:scale-[1.03]"
                                    />
                                </div>
                            </div>

                            <div
                                className={index % 2 === 1 ? "lg:order-1" : ""}
                            >
                                <p className="eyebrow">
                                    {String(index + 1).padStart(2, "0")} ·{" "}
                                    {project.role}
                                </p>
                                <h3
                                    className="display mt-3 text-2xl sm:text-3xl"
                                    style={{ color: "var(--text)" }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="mt-4 leading-relaxed"
                                    style={{ color: "var(--muted)" }}
                                >
                                    {project.blurb}
                                </p>
                                <p
                                    className="mt-4 leading-relaxed"
                                    style={{ color: "var(--text)" }}
                                >
                                    <span
                                        className="font-medium"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        Impact —{" "}
                                    </span>
                                    {project.impact}
                                </p>

                                <TechIcons icons={project.icon} />

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border px-3 py-1 text-xs"
                                            style={{
                                                borderColor: "var(--border)",
                                                color: "var(--muted)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    {project.liveUrl &&
                                        project.liveUrl !== "#" && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--on-accent)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
                                            >
                                                Live demo
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
                                            </a>
                                        )}
                                    {project.githubUrl &&
                                        project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-[var(--surface)]"
                                                style={{
                                                    borderColor:
                                                        "var(--border)",
                                                    color: "var(--text)",
                                                }}
                                            >
                                                Code
                                            </a>
                                        )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-28">
                    <p className="eyebrow">More work</p>
                    <div className="mt-6">
                        {more.map((project) => (
                            <div
                                key={project.title}
                                className="flex flex-col gap-2 border-t py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                                style={{ borderColor: "var(--border)" }}
                            >
                                <div className="max-w-xl">
                                    <h4
                                        className="text-lg font-medium"
                                        style={{ color: "var(--text)" }}
                                    >
                                        {project.title}
                                    </h4>
                                    <p
                                        className="mt-1 text-sm leading-relaxed"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        {project.blurb}
                                    </p>
                                </div>
                                <div className="flex shrink-0 gap-5 text-sm">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors duration-300 hover:text-[var(--accent)]"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        Live ↗
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors duration-300 hover:text-[var(--accent)]"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        Code ↗
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Projects;
