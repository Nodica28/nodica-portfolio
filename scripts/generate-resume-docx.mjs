// Generates an editable Word (.docx) version of the professional résumé.
//
//   npm run resume:docx
//
// NOTE: the canonical résumé content also lives in src/app/resume/page.tsx.
// Re-running this script OVERWRITES the .docx, including any manual edits you
// made in Word — only re-run it after changing the content below.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    BorderStyle,
    Table,
    TableRow,
    TableCell,
    WidthType,
    LevelFormat,
    ExternalHyperlink,
    TabStopType,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.resolve(
    __dirname,
    "../public/pdf/Nicdao-Justine_Resume-Professional.docx"
);

/* ----- palette (mirrors the /resume page) ----- */
const NAVY = "1F3A5F";
const INK = "1F2937";
const HEADING_INK = "111827";
const BODY = "374151";
const MUTED = "6B7280";
const SUBTLE = "4B5563";
const FAINT = "CBD5E1";
const RULE = "CDCED7";

/* A4 (11906 DXA wide) minus 14mm (≈794 DXA) left/right margins */
const CONTENT_WIDTH = 10318;

/* ----- content (identical to the PDF / web résumé) ----- */
const CONTACT = [
    { text: "Pampanga, Philippines" },
    { text: "+63 976 008 9587" },
    { text: "justine.anicdao@gmail.com", link: "mailto:justine.anicdao@gmail.com" },
    { text: "nodica-portfolio.vercel.app", link: "https://nodica-portfolio.vercel.app" },
];

const SKILLS = [
    { group: "Languages", items: ["JavaScript", "Python", "Java", "HTML", "CSS"] },
    {
        group: "Frameworks & Libraries",
        items: ["NextJS", "ReactJS", "NodeJS", "ExpressJS", "TailwindCSS", "MaterialUI"],
    },
    { group: "Databases", items: ["MongoDB", "Supabase", "NeonDB"] },
    { group: "Tools & Platforms", items: ["OpenAI", "AWS", "Webflow", "Elementor"] },
];

const EXPERIENCE = [
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

const EDUCATION = [
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

const CERTIFICATIONS = [
    { title: "Civil Service Professional Examination Passer", year: "2022" },
    { title: "Multimedia Arts 2020 (Graphic and Web Design Workshop)", year: "2020" },
    { title: "NCII Technical Drafting", year: "2020" },
];

/* ----- helpers ----- */
const NONE = { style: BorderStyle.NONE, size: 0, color: "auto" };
const NO_BORDERS = {
    top: NONE,
    bottom: NONE,
    left: NONE,
    right: NONE,
    insideHorizontal: NONE,
    insideVertical: NONE,
};
const rightTab = [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }];

const sectionHeader = (text) =>
    new Paragraph({
        spacing: { before: 240, after: 110 },
        keepNext: true,
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 3 },
        },
        children: [
            new TextRun({
                text,
                bold: true,
                size: 22,
                color: NAVY,
                allCaps: true,
                characterSpacing: 32,
            }),
        ],
    });

const contactChildren = [];
CONTACT.forEach((c, i) => {
    if (i > 0) {
        contactChildren.push(
            new TextRun({ text: "   ·   ", color: FAINT, size: 19 })
        );
    }
    const run = new TextRun({ text: c.text, color: SUBTLE, size: 19 });
    contactChildren.push(
        c.link ? new ExternalHyperlink({ link: c.link, children: [run] }) : run
    );
});

const skillsTable = new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [2300, 8018],
    borders: NO_BORDERS,
    rows: SKILLS.map(
        (g) =>
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 2300, type: WidthType.DXA },
                        borders: NO_BORDERS,
                        margins: { top: 30, bottom: 30, left: 0, right: 80 },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: g.group,
                                        bold: true,
                                        size: 20,
                                        color: HEADING_INK,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 8018, type: WidthType.DXA },
                        borders: NO_BORDERS,
                        margins: { top: 30, bottom: 30, left: 0, right: 0 },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: g.items.join("   ·   "),
                                        size: 20,
                                        color: BODY,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
    ),
});

const experienceBlocks = (job) => [
    new Paragraph({
        spacing: { before: 180, after: 0 },
        keepNext: true,
        tabStops: rightTab,
        children: [
            new TextRun({ text: job.role, bold: true, size: 23, color: HEADING_INK }),
            new TextRun({ text: `\t${job.period}`, size: 19, color: MUTED }),
        ],
    }),
    new Paragraph({
        spacing: { before: 0, after: 80 },
        keepNext: true,
        children: [
            new TextRun({ text: job.company, bold: true, size: 20, color: NAVY }),
        ],
    }),
    ...job.bullets.map(
        (b) =>
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                spacing: { after: 50 },
                children: [new TextRun({ text: b, size: 20, color: BODY })],
            })
    ),
];

const educationBlocks = (e) => [
    new Paragraph({
        spacing: { before: 150, after: 0 },
        keepNext: true,
        tabStops: rightTab,
        children: [
            new TextRun({ text: e.degree, bold: true, size: 21, color: HEADING_INK }),
            new TextRun({ text: `\t${e.period}`, size: 19, color: MUTED }),
        ],
    }),
    new Paragraph({
        spacing: { before: 0, after: 30 },
        children: [
            new TextRun({ text: e.school, bold: true, size: 20, color: NAVY }),
        ],
    }),
];

const certBlocks = (c) => [
    new Paragraph({
        spacing: { after: 60 },
        tabStops: rightTab,
        children: [
            new TextRun({ text: c.title, size: 20, color: INK }),
            new TextRun({ text: `\t${c.year}`, size: 19, color: MUTED }),
        ],
    }),
];

/* ----- document ----- */
const doc = new Document({
    styles: {
        default: { document: { run: { font: "Calibri", size: 20, color: BODY } } },
    },
    numbering: {
        config: [
            {
                reference: "bullets",
                levels: [
                    {
                        level: 0,
                        format: LevelFormat.BULLET,
                        text: "•",
                        alignment: AlignmentType.LEFT,
                        style: {
                            run: { color: "9CA3AF" },
                            paragraph: { indent: { left: 360, hanging: 180 } },
                        },
                    },
                ],
            },
        ],
    },
    sections: [
        {
            properties: {
                page: {
                    size: { width: 11906, height: 16838 },
                    margin: { top: 794, right: 794, bottom: 794, left: 794 },
                },
            },
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 30 },
                    children: [
                        new TextRun({
                            text: "Justine A. Nicdao",
                            bold: true,
                            size: 44,
                            color: NAVY,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 120 },
                    children: [
                        new TextRun({
                            text: "Full Stack Software Engineer",
                            size: 20,
                            color: MUTED,
                            allCaps: true,
                            characterSpacing: 40,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 40 },
                    border: {
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 18,
                            color: NAVY,
                            space: 8,
                        },
                    },
                    children: contactChildren,
                }),
                sectionHeader("Technical Skills"),
                skillsTable,
                sectionHeader("Professional Experience"),
                ...EXPERIENCE.flatMap(experienceBlocks),
                sectionHeader("Education"),
                ...EDUCATION.flatMap(educationBlocks),
                sectionHeader("Certifications"),
                ...CERTIFICATIONS.flatMap(certBlocks),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(OUT_PATH, buf);
    console.log(`✓ Resume DOCX written to ${OUT_PATH}`);
});
