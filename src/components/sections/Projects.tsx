import Image from "next/image";
import saupImage from "@/app/assets/images/saup.png";
import iconadImage from "@/app/assets/images/iconad.png";
import designerImage from "@/app/assets/images/escotoaizel.png";
import weatheryImage from "@/app/assets/images/weathery.png";
import badgeImage from "@/app/assets/images/badge.png";
import { iconMap } from "@/app/assets/iconExporter";

const Projects = () => {
    const projects = [
        {
            title: "Badge",
            description:
                "Your entire sales toolkit in one shareable profile. Badge creates AI-powered digital profiles that capture leads instantly and track engagement in real-time. Turn every interaction into a sales opportunity with customizable profiles (e.g. withbadge.ai/yourname), QR codes for connecting, lead notifications, and real-time analytics on profile views and prospect activity.",
            image: badgeImage,
            tags: [
                "Sales",
                "CRM",
                "Lead Generation",
                "AI",
                "Digital Profile",
                "Analytics",
            ],
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
                "cursor",
                "stripe",
                "reactquery",
                "sentry",
                "zod",
                "prettier",
                "eslint",
                "git",
                "github",
                "vscode",
            ],
            liveUrl: "https://withbadge.ai",
            githubUrl: "#",
        },
        {
            title: "Iconad Learning with AI",
            description:
                "Iconad Learning is an innovative educational platform that leverages artificial intelligence to provide personalized learning experiences for children. The platform analyzes a child's unique traits, interests, and learning style to recommend tailored educational materials that optimize their learning journey.",
            image: iconadImage,
            tags: [
                "AI",
                "Portal",
                "Education",
                "Learning",
                "Agent",
                "Full Stack",
            ],
            icon: [
                "next",
                "react",
                "tailwind",
                "shadcn",
                "css",
                "javascript",
                "typescript",
                "openai",
                "cursor",
                "node",
                "mongodb",
                "aws",
                "prettier",
                "eslint",
                "git",
                "trello",
                "github",
                "vite",
                "vscode",
            ],
            liveUrl: "https://iconad-learning-ai.vercel.app",
            githubUrl: "https://github.com/Nodica28/iconad-learning-ai",
        },
        {
            title: "SAUP Portal HAU",
            description:
                "Developing this project required us to use the Mongodb Database wherein we fetch our data to be listed. The MERN tech stack is also utilized in order for this database to be funcional. ",
            image: saupImage,
            tags: ["Portal", "University", "CMS", "Outreach"],
            icon: [
                "react",
                "tailwind",
                "css",
                "javascript",
                "axios",
                "node",
                "express",
                "mongodb",
                "prettier",
                "eslint",
                "git",
                "jira",
                "sourcetree",
                "postman",
                "github",
                "vscode",
            ],
            liveUrl: "https://saup-portal-hau.onrender.com",
            githubUrl: "https://github.com/Capstone-SAUP/SAUP-Portal",
        },
        {
            title: "Weathery",
            description:
                "A weather application that provides real-time weather data, forecasts, and interactive maps. Uses geolocation and third-party weather APIs.",
            image: weatheryImage,
            tags: ["Weather", "API", "Tracking", "Forecast"],
            icon: [
                "nextjs",
                "shadcn",
                "tailwind",
                "css",
                "typescript",
                "javascript",
                "node",
                "prettier",
                "eslint",
                "cursor",
                "git",
                "github",
                "vscode",
            ],
            liveUrl: "https://weathery-pi.vercel.app/",
            githubUrl: "https://github.com/Nodica28/Weathery",
        },
        {
            title: "UI/UX Designer Portfolio",
            description:
                "A portfolio website for a UI/UX designer showcasing their work, skills, UI and social media graphic designs. The site includes a projects section where the designer showcases their expertise in UI/UX design. The portfolio consists of a single page that is responsive with a minimalistic and modern design.",
            image: designerImage,
            tags: ["Portfolio", "UI/UX", "Single Page", "Responsive"],
            icon: [
                "react",
                "tailwind",
                "mui",
                "css",
                "node",
                "git",
                "cursor",
                "prettier",
                "eslint",
                "vite",
                "vscode",
            ],
            liveUrl: "https://escotoaizel.vercel.app",
            githubUrl: "https://github.com/escotoaizel/design.azl",
        },
    ];

    return (
        <section id="works" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "fill" }}
                                    placeholder="blur"
                                    blurDataURL={project.image.src}
                                />
                            </div>

                            <div className="p-6 pb-10 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 border border-[var(--secondary)] text-[var(--secondary)] rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.icon?.map((icon, iconIndex) => {
                                        // Get the icon component from our mapping
                                        const iconKey = icon.toLowerCase();
                                        const IconComponent =
                                            iconMap[
                                                iconKey as keyof typeof iconMap
                                            ];

                                        return IconComponent ? (
                                            <div
                                                key={iconIndex}
                                                className="relative group"
                                            >
                                                <IconComponent
                                                    size={20}
                                                    color="#FFB9B9"
                                                    className="transition-transform duration-300 hover:scale-125"
                                                />
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-600 text-white text-md rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                                    {icon
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        icon.slice(1)}
                                                </span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    {project.description}
                                </p>

                                <div className="flex space-x-4 mt-auto">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    {project.githubUrl &&
                                        project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Nodica28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                        See More on GitHub
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
