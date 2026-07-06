import type { MetadataRoute } from "next";

const base = "https://nodica-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${base}/resume`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];
}
