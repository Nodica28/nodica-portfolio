# Portfolio Rebrand — Design Spec

**Date:** 2026-06-27
**Project:** `nodica-portfolio` (Next.js 15.2.8, React 19, TypeScript, Tailwind v4)
**Owner:** Justine Nicdao

## Context

The portfolio reads junior/templatey against 2026 market standards (researched): a gimmicky
hero, 7 projects (several student/clone) with no impact narrative, a kitchen-sink skills list,
a friendly coral palette, a font mismatch (Geist loaded, Gilroy applied), a heavy Vanta/three.js
birds animation (performance anti-signal), and thin SEO/meta. Goal: a **significant rebrand** to
a mature, professional, senior-level portfolio that serves **both** recruiters and freelance
clients.

**Standards driving the design** (from web research): fewer/deeper projects with
problem→role→action→**measurable impact**; impact over feature lists; clean, minimal, fast
(animation/3s-load is an anti-signal); clear value-prop hero + one CTA; curated skills; real
SEO/meta and personal branding.

## Approved decisions

- **Depth:** significant rebrand (new identity + structure + impact content), still a single-page Next.js site.
- **Visual:** restrained neutral base + **one accent: Indigo**.
- **Audience:** both recruiters and clients (primary "hire / work with me" CTA, impact-focused).
- **Projects:** curate to **4 featured** (TrulyHome, Zaptime, Badge, Iconad) as deep impact write-ups; the other **3** (Weathery, SAUP Portal, UI/UX Designer portfolio) become a compact **"More work"** list with links.

## Design system

### Color tokens (replace coral vars in `globals.css`)
Proposed palette (refinable during build); semantic tokens, deliberate light + dark:

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FFFFFF` | `#0B0C0E` |
| `--surface` | `#F7F7F5` | `#14161A` |
| `--text` | `#16181D` | `#ECEDEE` |
| `--muted` | `#5B5F66` | `#9AA0A6` |
| `--border` | `#E6E6E2` | `#23262B` |
| `--accent` (indigo) | `#2F54C8` | `#7B96F5` |
| `--accent-hover` | `#243F9B` | `#9AB0F8` |
| `--accent-soft` (chip bg) | `#EAEEFB` | `#1B2440` |

Dark mode becomes an explicit class/scheme, not a raw `prefers-color-scheme` inversion. Fix the
`@theme inline` block (missing semicolons) and map tokens to Tailwind v4 `--color-*`.

### Typography
- Standardize on **Geist Sans** (UI/body) + **Geist Mono** (small labels/eyebrows) — already
  installed via `next/font`, performance-optimal, no layout shift. Make `--font-sans` actually
  resolve to the loaded font (today `globals.css` forces Gilroy while `layout.tsx` loads Geist).
- Remove the Gilroy `@font-face` + body override, OR retain Gilroy **only** for the "Nodica"
  wordmark. Establish a type scale (display / h1 / h2 / h3 / body / small) and consistent
  weights (two weights).
- "Nodica" stays as the brandmark/logo; content leads with the person — **Justine Nicdao**.

### Spacing, layout, motion
- 4/8-based spacing scale; consistent section rhythm (`~py-24`); `max-w-6xl` container.
- Motion: subtle fade/translate-on-scroll (IntersectionObserver or CSS) + clean hover/focus
  states; honor `prefers-reduced-motion`. **Keep the Vanta birds** in the Hero (user request),
  recolored to indigo and loaded lazily via a client component (no `beforeInteractive`
  blocking; skipped under reduced-motion).

## Information architecture (single page, smooth scroll)

1. **Hero** — `Justine Nicdao`, title, a one-line value proposition ("I build _<X>_ for _<Y>_"),
   primary CTA (*View work*) + secondary (*Resume*), and a small "Open to senior roles & freelance"
   badge. Clean, fast; no birds/typing gimmick (a single restrained accent treatment is fine).
2. **Selected Work** — 4 featured as **alternating impact rows**: screenshot, role, curated stack
   chips, and a **Problem → Action → Impact** narrative with metrics, plus Live/Repo links
   (private repos stay hidden, per prior task). Below: **"More work"** = compact list of the other
   3 with one-line + links.
3. **About** — concise, outcome-focused: who you are, experience signal (Switch, Badge AI,
   NarrativeTech, Ariolas Tech, Unexus from résumé), how you work. Keep lean; Download Résumé CTA.
4. **Capabilities** — curated and grouped (e.g., Core / Regular / Tooling). Drop the kitchen-sink
   list and the Adobe apps. No giant collapsible dump.
5. **Contact** — clear "work with me / hire me" CTA, email, GitHub/LinkedIn, availability line.

(Testimonials/social-proof: optional, add later if the user supplies quotes.)

## File-level changes

- `src/app/globals.css` — new tokens, fixed `@theme`, type scale, motion + reduced-motion utils.
- `src/app/layout.tsx` — standardize fonts; full `Metadata` (title template, description,
  keywords, authors, `metadataBase`, Open Graph + Twitter card + OG image, icons); set lang/theme.
- `src/components/sections/Hero.tsx` — rebuilt as a dark hero band with light-on-dark text; the
  Vanta birds are kept (recolored to indigo) via a new client `VantaBackground.tsx`.
- `src/components/sections/Projects.tsx` → **Selected Work**: featured rows + "More work" list;
  add per-project `role`, `impact`/`metrics` fields; keep existing icon map usage.
- `src/components/sections/TechStack.tsx` → **Capabilities**: curate + regroup.
- `src/components/sections/About.tsx` — tighten copy (value prop + experience signal).
- `src/components/sections/Contact.tsx` — CTA + availability (already de-cluttered).
- `src/components/layout/Navbar.tsx`, `Footer.tsx` — restyle to new tokens; Footer gets socials.
- `package.json` — keep `three` + `vanta` deps (Hero birds).
- **New:** `public` OG image + favicon/icons; `src/app/sitemap.ts`, `src/app/robots.ts`; JSON-LD
  `Person` (script in layout or a component).

## Accessibility & performance
- Focus-visible rings, contrast AA, fix `aria-expanded` on the mobile menu, semantic landmarks,
  meaningful `alt`, `prefers-reduced-motion`. Drop heavy 3D libs; keep images optimized via
  `next/image`.

## Content needed from Justine
- Real **metrics/outcomes** per featured project (users, scale, performance, revenue, team size).
  I'll draft strong Problem→Action→Impact narratives and mark `[metric?]` where your numbers
  would make them senior-grade. The value-prop line and availability text also need your confirm.

## Phasing
1. **Design system & shell** — `globals.css` tokens/type/motion, `layout.tsx` fonts + SEO,
   Navbar/Footer restyle, remove vanta/three.
2. **Hero** rebuild.
3. **Selected Work** — featured impact rows + "More work" list (metrics as placeholders).
4. **Capabilities** (curate) + **About** refine + **Contact**.
5. **SEO assets** (OG image, icons, sitemap/robots, JSON-LD) + a11y + responsive + perf + build.

## Verification
- `npm run build` clean (note: stop the dev server first — it locks `.next` on Windows).
- Manual: responsive (mobile/tablet/desktop), light + dark, `prefers-reduced-motion`, keyboard
  focus order, all links/CTAs, no console errors, fonts load without flash, OG/meta via view-source.
- Visual pass against the spec per section.
