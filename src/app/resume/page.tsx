import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
    title: "Justine A. Nicdao — Résumé",
    description:
        "Résumé of Justine A. Nicdao, Full Stack Software Engineer.",
};

const PDF_PATH = "/pdf/Nicdao-Justine_Resume-Professional.pdf";

const CONTACT: { label: string; href?: string }[] = [
    { label: "Pampanga, Philippines" },
    { label: "+63 976 008 9587", href: "tel:+639760089587" },
    {
        label: "justine.anicdao@gmail.com",
        href: "mailto:justine.anicdao@gmail.com",
    },
    {
        label: "nodica-portfolio.vercel.app",
        href: "https://nodica-portfolio.vercel.app",
    },
];

const SKILLS: { group: string; items: string[] }[] = [
    { group: "Languages", items: ["JavaScript", "Python", "Java", "HTML", "CSS"] },
    {
        group: "Frameworks & Libraries",
        items: ["NextJS", "ReactJS", "NodeJS", "ExpressJS", "TailwindCSS", "MaterialUI"],
    },
    { group: "Databases", items: ["MongoDB", "Supabase", "NeonDB"] },
    { group: "Tools & Platforms", items: ["OpenAI", "AWS", "Webflow", "Elementor"] },
];

const EXPERIENCE: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
}[] = [
    {
        role: "Full Stack Software Engineer",
        company: "Switch",
        period: "June 2025 – January 2026",
        bullets: [
            "Built responsive, accessible UIs with Next.js 15 (App Router), React/TypeScript, TailwindCSS, and Shadcn/UI—turning designs into reusable, consistent components.",
            "Designed a secure, multi-tenant backend on Supabase with RLS, RESTful APIs, validation, and RBAC; integrated Plaid for bank data and a resilient EmailService with provider fallbacks; managed secrets via Infisical.",
            "Delivered AI-powered transaction categorization with human review and auditability; improved performance using Suspense, code splitting, and dynamic imports.",
            "Drove quality and reliability by refactoring large files into clean modules, adding comprehensive tests and monitoring, fixing bugs, and improving developer experience.",
        ],
    },
    {
        role: "Full Stack Software Engineer",
        company: "Badge AI",
        period: "April 2025 – January 2026",
        bullets: [
            "Architected and shipped the Badge Profile UI with TypeScript React (Vite), Wouter, Tailwind, and Shadcn/Radix—implementing profile sections, modals, QR previews, and fully responsive layouts.",
            "Built robust data/state layers using React Query and Zustand, added ProtectedRoute access control, and integrated OAuth/magic-link authentication with organization/role flows.",
            "Delivered AI and media features: headshot generation and chat, secure image uploads with DB-backed storage, and banner/branding tools—optimized via lazy-loading, code-splitting, and image best practices.",
            "Implemented backend routes and infra (profiles, chat, leads, settings), Stripe sandbox, and Drizzle migrations; improved quality with Jest/RTL tests, bug fixes, and performance tuning.",
        ],
    },
    {
        role: "Lead Full Stack Software Engineer",
        company: "NarrativeTech",
        period: "July 2023 – July 2025",
        bullets: [
            "Led the development and technical delivery of NarrativeTech platforms, taking ownership of architecture, implementation, and day-to-day execution across multiple client projects.",
            "Built and maintained full-stack applications using Next.js, Node.js, PostgreSQL, and Tailwind CSS, turning wireframes and product requirements into scalable, production-ready features.",
            "Implemented OpenAI agents and API integrations for document analysis and intelligent user assistance, improving workflow efficiency and overall user experience.",
            "Delivered a government portal from scratch and managed multiple subprojects in parallel, addressing client feedback, security requirements, and ongoing platform improvements while collaborating closely with UI/UX designers.",
        ],
    },
    {
        role: "Frontend Software Engineer",
        company: "Ariolas Tech",
        period: "July 2024 – February 2025",
        bullets: [
            "Developed responsive front-end applications with Next.js, React, and Tailwind CSS, transforming wireframes and design specifications into intuitive, user-friendly interfaces.",
            "Implemented AI technologies across multiple projects, delivering innovative solutions that enhanced product capabilities and improved user experience.",
            "Built robust backend systems using Supabase, and Infisical for secure environment management, creating scalable and maintainable application architecture.",
            "Led continuous codebase improvements by resolving bugs, optimizing performance, and implementing modern development practices to ensure high-quality deliverables.",
        ],
    },
    {
        role: "Full Stack Software Engineer",
        company: "Unexus Solutions",
        period: "May 2023 – September 2023",
        bullets: [
            "Developed and maintained medical-related web portals using React for responsive interfaces, MongoDB for data storage, and Strapi as a headless CMS. Implemented Docker containerization for consistent deployment, and ElasticUI for intuitive interfaces.",
            "Managed front-end development and resolved back-end configuration issues. Collaborated with team members to accelerate tasks and incorporate diverse perspectives on encountered issues.",
        ],
    },
];

const EDUCATION: { degree: string; school: string; period: string }[] = [
    {
        degree: "Bachelor of Science in Information Technology, Major in Web Development",
        school: "Holy Angel University",
        period: "2019 – 2023",
    },
    {
        degree: "Technical Vocational Livelihood, Specialization in Technical Drafting",
        school: "Angeles City National Trade School",
        period: "2017 – 2019",
    },
];

const CERTIFICATIONS: { title: string; year: string }[] = [
    { title: "Civil Service Professional Examination Passer", year: "2022" },
    { title: "Multimedia Arts 2020 (Graphic and Web Design Workshop)", year: "2020" },
    { title: "NCII Technical Drafting", year: "2020" },
];

const SectionTitle = ({ children }: { children: string }) => (
    <h2 className="mb-3 border-b border-[#1f3a5f]/25 pb-1 text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#1f3a5f]">
        {children}
    </h2>
);

const ResumePage = () => {
    return (
        <main className="resume-screen -mt-16 min-h-screen">
            {/* Action bar — screen only, never printed */}
            <div className="mx-auto mb-4 flex max-w-[820px] items-center justify-end gap-3 print:hidden">
                <a
                    href={PDF_PATH}
                    download
                    className="inline-flex items-center gap-2 rounded-md bg-[#1f3a5f] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#16293f]"
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Download PDF
                </a>
                <PrintButton />
            </div>

            <article className="resume-paper">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-[28px] font-bold tracking-tight text-[#1f3a5f]">
                        Justine A. Nicdao
                    </h1>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#6b7280]">
                        Full Stack Software Engineer
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11.5px] text-[#4b5563]">
                        {CONTACT.map((c, i) => (
                            <span key={c.label} className="flex items-center gap-x-2">
                                {i > 0 && (
                                    <span className="text-[#cbd5e1]">·</span>
                                )}
                                {c.href ? (
                                    <a
                                        href={c.href}
                                        className="transition-colors hover:text-[#1f3a5f]"
                                    >
                                        {c.label}
                                    </a>
                                ) : (
                                    <span>{c.label}</span>
                                )}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="mt-4 border-b-2 border-[#1f3a5f]" />

                {/* Technical Skills */}
                <section className="mt-5">
                    <SectionTitle>Technical Skills</SectionTitle>
                    <div className="space-y-1.5">
                        {SKILLS.map((g) => (
                            <div
                                key={g.group}
                                className="flex gap-3 text-[12px]"
                            >
                                <span className="w-[152px] shrink-0 font-semibold text-[#111827]">
                                    {g.group}
                                </span>
                                <span className="text-[#374151]">
                                    {g.items.join("  ·  ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Professional Experience */}
                <section className="mt-5">
                    <SectionTitle>Professional Experience</SectionTitle>
                    <div className="space-y-4">
                        {EXPERIENCE.map((job) => (
                            <div
                                key={`${job.company}-${job.role}`}
                                className="resume-entry"
                            >
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-[14px] font-bold text-[#111827]">
                                        {job.role}
                                    </h3>
                                    <span className="shrink-0 text-[11.5px] font-medium text-[#6b7280]">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="mb-1.5 text-[12.5px] font-semibold text-[#1f3a5f]">
                                    {job.company}
                                </p>
                                <ul className="list-disc space-y-1 pl-4 marker:text-[#9ca3af]">
                                    {job.bullets.map((b, i) => (
                                        <li
                                            key={i}
                                            className="text-[12px] leading-[1.5] text-[#374151]"
                                        >
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mt-5">
                    <SectionTitle>Education</SectionTitle>
                    <div className="space-y-2.5">
                        {EDUCATION.map((e) => (
                            <div key={e.school} className="resume-entry">
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-[13px] font-bold text-[#111827]">
                                        {e.degree}
                                    </h3>
                                    <span className="shrink-0 text-[11.5px] font-medium text-[#6b7280]">
                                        {e.period}
                                    </span>
                                </div>
                                <p className="text-[12px] font-semibold text-[#1f3a5f]">
                                    {e.school}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="mt-5">
                    <SectionTitle>Certifications</SectionTitle>
                    <div className="space-y-1.5">
                        {CERTIFICATIONS.map((c) => (
                            <div
                                key={c.title}
                                className="flex items-baseline justify-between gap-4"
                            >
                                <span className="text-[12.5px] text-[#111827]">
                                    {c.title}
                                </span>
                                <span className="shrink-0 text-[11.5px] font-medium text-[#6b7280]">
                                    {c.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
};

export default ResumePage;
