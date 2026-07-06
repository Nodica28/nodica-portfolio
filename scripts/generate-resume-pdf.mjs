// Exports the print-optimized /resume page to a PDF using headless Chrome.
//
// The /resume page is the single source of truth; this keeps the downloadable
// PDF in sync with it. Run the app first, then this script:
//
//   1. npm run build && npm run start   (or: npm run dev)
//   2. npm run resume:pdf
//
// Override the URL with RESUME_URL if the app runs on a different port.

import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.resolve(
    __dirname,
    "../public/pdf/Nicdao-Justine_Resume-Professional.pdf"
);
const RESUME_URL = process.env.RESUME_URL ?? "http://localhost:3000/resume";

const run = async () => {
    const browser = await puppeteer.launch({ headless: true });
    try {
        const page = await browser.newPage();
        await page.goto(RESUME_URL, {
            waitUntil: "networkidle0",
            timeout: 60_000,
        });
        // Apply the @media print rules and wait for the Gilroy webfont.
        await page.emulateMediaType("print");
        await page.evaluateHandle("document.fonts.ready");
        await page.pdf({
            path: OUT_PATH,
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true, // honor @page { size: A4; margin: 14mm }
        });
        console.log(`✓ Resume PDF written to ${OUT_PATH}`);
    } finally {
        await browser.close();
    }
};

run().catch((err) => {
    console.error("Failed to generate resume PDF:", err);
    process.exit(1);
});
