import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600"],
});

const siteUrl = "https://nodica-portfolio.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Justine Nicdao — Full-Stack Software Engineer",
        template: "%s · Justine Nicdao",
    },
    description:
        "Justine Nicdao is a full-stack software engineer who ships production web and mobile products end to end — Next.js & TypeScript front-ends, Supabase/Postgres back-ends, and practical AI features.",
    keywords: [
        "Justine Nicdao",
        "Full-Stack Software Engineer",
        "Next.js Developer",
        "React Developer",
        "TypeScript",
        "Supabase",
        "Node.js",
        "AI Engineer",
        "Philippines",
        "Software Engineer Portfolio",
    ],
    authors: [{ name: "Justine Nicdao", url: siteUrl }],
    creator: "Justine Nicdao",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: "Justine Nicdao",
        title: "Justine Nicdao — Full-Stack Software Engineer",
        description:
            "Ships production web and mobile products end to end — Next.js front-ends, Supabase back-ends, and practical AI.",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Justine Nicdao — Full-Stack Software Engineer",
        description:
            "Ships production web and mobile products end to end — Next.js front-ends, Supabase back-ends, and practical AI.",
    },
    robots: { index: true, follow: true },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Justine Nicdao",
    url: siteUrl,
    jobTitle: "Full-Stack Software Engineer",
    email: "mailto:justine.anicdao@gmail.com",
    address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
    },
    sameAs: [
        "https://github.com/Nodica28",
        "https://www.linkedin.com/in/justine-nicdao/",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <Navbar />
                <div className="min-h-screen pt-16">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
