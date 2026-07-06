import { iconMap, brandColors } from "@/app/assets/iconExporter";
import Reveal from "@/components/ui/Reveal";

const groups = [
    {
        label: "Core",
        note: "Daily drivers",
        skills: [
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "next" },
            { name: "Node.js", icon: "node" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Supabase", icon: "supabase" },
            { name: "PostgreSQL", icon: "postgresql" },
        ],
    },
    {
        label: "Also work with",
        note: "Comfortable across projects",
        skills: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Express", icon: "express" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "React Query", icon: "reactquery" },
            { name: "Zod", icon: "zod" },
            { name: "Prisma", icon: "prisma" },
            { name: "Drizzle", icon: "drizzle" },
            { name: "Python", icon: "python" },
            { name: "Docker", icon: "docker" },
            { name: "Shadcn UI", icon: "shadcn" },
        ],
    },
    {
        label: "Tools & platforms",
        note: "How I ship",
        skills: [
            { name: "Claude", icon: "claude" },
            { name: "OpenAI", icon: "openai" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Vercel", icon: "vercel" },
            { name: "Cloudflare", icon: "cloudflare" },
            { name: "Stripe", icon: "stripe" },
            { name: "Sentry", icon: "sentry" },
            { name: "AWS", icon: "aws" },
        ],
    },
];

const TechStack = () => {
    return (
        <section
            id="techstack"
            className="py-24 sm:py-28"
            style={{ background: "var(--surface)" }}
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <Reveal className="max-w-2xl">
                    <p className="eyebrow">Capabilities</p>
                    <h2
                        className="display mt-3 text-4xl sm:text-5xl"
                        style={{ color: "var(--text)" }}
                    >
                        The stack I build with
                    </h2>
                    <p
                        className="mt-4 text-lg leading-relaxed"
                        style={{ color: "var(--muted)" }}
                    >
                        A focused toolkit for taking products from idea to
                        production — not an exhaustive list.
                    </p>
                </Reveal>

                <div className="mt-14 space-y-2">
                    {groups.map((group, groupIndex) => (
                        <Reveal
                            key={group.label}
                            delay={groupIndex * 80}
                            className="grid gap-5 border-t py-8 lg:grid-cols-[220px_1fr] lg:gap-10"
                            style={{ borderColor: "var(--border)" }}
                        >
                            <div>
                                <p
                                    className="eyebrow"
                                    style={{ color: "var(--text)" }}
                                >
                                    {group.label}
                                </p>
                                <p
                                    className="mt-1.5 text-sm"
                                    style={{ color: "var(--muted)" }}
                                >
                                    {group.note}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => {
                                    const key = skill.icon.toLowerCase();
                                    const IconComponent =
                                        iconMap[key as keyof typeof iconMap];
                                    return (
                                        <span
                                            key={skill.name}
                                            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm"
                                            style={{
                                                borderColor: "var(--border)",
                                                background: "var(--bg)",
                                                color: "var(--text)",
                                            }}
                                        >
                                            {IconComponent && (
                                                <IconComponent
                                                    size={16}
                                                    color={brandColors[key]}
                                                />
                                            )}
                                            {skill.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
