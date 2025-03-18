"use client";
import { useState } from "react";
import { iconMap } from "../../app/assets/iconExporter";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const TechStack = () => {
    const [expandedSections, setExpandedSections] = useState({
        frontend: true,
        backend: false,
        others: false,
    });

    const toggleSection = (section: "frontend" | "backend" | "others") => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const skillCategories = [
        {
            id: "frontend",
            title: "Frontend",
            years: "More than 2 years",
            icon: "curly",
            skills: [
                {
                    name: "React",
                    icon: "react",
                },
                {
                    name: "NextJS",
                    icon: "next",
                },
                {
                    name: "TailwindCSS",
                    icon: "tailwind",
                },
                {
                    name: "HTML",
                    icon: "html",
                },
                {
                    name: "CSS",
                    icon: "css",
                },
                {
                    name: "MaterialUI",
                    icon: "mui",
                },
                {
                    name: "ShadcnUI",
                    icon: "shadcn",
                },
                {
                    name: "Java",
                    icon: "java",
                },
                {
                    name: "JavaScript",
                    icon: "javascript",
                },
                {
                    name: "TypeScript",
                    icon: "typescript",
                },
                {
                    name: "Lucide",
                    icon: "lucide",
                },
                {
                    name: "ESLint",
                    icon: "eslint",
                },
                {
                    name: "Prettier",
                    icon: "prettier",
                },
                {
                    name: "Svelte",
                    icon: "svelte",
                },
                {
                    name: "Elementor",
                    icon: "elementor",
                },
                {
                    name: "Wordpress",
                    icon: "wordpress",
                },
                {
                    name: "Webflow",
                    icon: "webflow",
                },
            ],
        },
        {
            id: "backend",
            title: "Backend",
            years: "More than 2 years",
            icon: "code",
            skills: [
                {
                    name: "Node.js",
                    icon: "node",
                },
                {
                    name: "Express",
                    icon: "express",
                },
                {
                    name: "NextJS",
                    icon: "next",
                },
                {
                    name: "MongoDB",
                    icon: "mongodb",
                },
                {
                    name: "Python",
                    icon: "python",
                },
                {
                    name: "Axios",
                    icon: "axios",
                },
                {
                    name: "REST API",
                    icon: "restapi",
                },
                {
                    name: "MySQL",
                    icon: "mysql",
                },
                {
                    name: "Docker",
                    icon: "docker",
                },
                {
                    name: "Strapi",
                    icon: "strapi",
                },
                {
                    name: "Prisma",
                    icon: "prisma",
                },
                {
                    name: "Supabase",
                    icon: "supabase",
                },
            ],
        },
        {
            id: "others",
            title: "Others",
            years: "More than 3 years",
            icon: "pc",
            skills: [
                {
                    name: "OpenAI",
                    icon: "openai",
                },
                {
                    name: "Cursor",
                    icon: "cursorwhite",
                },
                {
                    name: "Jira",
                    icon: "jira",
                },
                {
                    name: "Trello",
                    icon: "trello",
                },
                {
                    name: "SourceTree",
                    icon: "sourcetree",
                },
                {
                    name: "Git",
                    icon: "git",
                },
                {
                    name: "GitHub",
                    icon: "github",
                },
                {
                    name: "GitLab",
                    icon: "gitlab",
                },
                {
                    name: "AWS",
                    icon: "aws",
                },
                {
                    name: "Postman",
                    icon: "postman",
                },
                {
                    name: "VSCode",
                    icon: "vscode",
                },
                {
                    name: "Vite",
                    icon: "vites",
                },
                {
                    name: "Vercel",
                    icon: "vercel",
                },
                {
                    name: "Cloudflare",
                    icon: "cloudflare",
                },
                {
                    name: "Heroku",
                    icon: "heroku",
                },
                {
                    name: "Adobe Premiere Pro",
                    icon: "premiere",
                },
                {
                    name: "Adobe Photoshop",
                    icon: "photoshop",
                },
                {
                    name: "Adobe After Effects",
                    icon: "aftereffects",
                },
            ],
        },
    ];

    return (
        <section id="techstack" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                    <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                        >
                            <div
                                className="flex items-center justify-between p-4 cursor-pointer"
                                onClick={() =>
                                    toggleSection(
                                        category.id as
                                            | "frontend"
                                            | "backend"
                                            | "others"
                                    )
                                }
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">
                                        {/* Simplified icon rendering */}
                                        {(() => {
                                            const iconKey =
                                                category.icon.toLowerCase();
                                            const IconComponent =
                                                iconMap[
                                                    iconKey as keyof typeof iconMap
                                                ];
                                            return (
                                                IconComponent && (
                                                    <IconComponent
                                                        size={40}
                                                        color="var(--secondary)"
                                                    />
                                                )
                                            );
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--secondary)]">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {category.years}
                                        </p>
                                    </div>
                                </div>
                                <div className="transition-transform duration-300">
                                    {expandedSections[
                                        category.id as keyof typeof expandedSections
                                    ] ? (
                                        <FaChevronUp
                                            color="var(--secondary)"
                                            size={20}
                                        />
                                    ) : (
                                        <FaChevronDown
                                            color="var(--secondary)"
                                            size={20}
                                        />
                                    )}
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedSections[
                                        category.id as keyof typeof expandedSections
                                    ]
                                        ? "max-h-[1000px] opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="p-6 border-t border-gray-700 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                                    {category.skills.map((skill, index) => {
                                        // Simplified skill icon rendering
                                        const iconKey =
                                            skill.icon.toLowerCase();
                                        const IconComponent =
                                            iconMap[
                                                iconKey as keyof typeof iconMap
                                            ];

                                        return IconComponent ? (
                                            <div
                                                key={`${category.id}-${skill.name}-${index}`}
                                                className="flex flex-col items-center justify-center"
                                            >
                                                <IconComponent
                                                    size={40}
                                                    color="white"
                                                />
                                                <span className="text-gray-300 text-sm text-center">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
