# Veritas Legal

A fast, secure and fully responsive law-firm website built from the **Veritas Law Firm** Figma design, with React, Vite and Tailwind CSS. It includes the designed home page plus seven inner pages, subtle motion throughout, and production-grade security headers.

**Live site:** _see the website link in this repository's About section_

![React](https://img.shields.io/badge/React-19-149eca) ![Vite](https://img.shields.io/badge/Vite-8-646cff) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![License: MIT](https://img.shields.io/badge/License-MIT-green)

## Features

- **Pixel-faithful home page** built from the Figma frames (1366, 1440, 1920 and 2576 px breakpoints), using the original design imagery.
- **Seven consistent inner pages**: Our Firm, Practice Areas, Our Attorneys, Insights (with article pages), Careers, Contact and a 404. Every page shares the same hero frame, typography, cards and spacing, and uses its own unique photography (no image appears twice).
- **Nucleo icons** throughout (core outline + social glyphs), the same set swapped into the Figma file.
- **Motion with purpose**: word-by-word hero reveal, parallax hero and footer wordmark, scroll-triggered fade/stagger, animated counters, circular-wipe menu, accordion and filter transitions. Everything honours `prefers-reduced-motion`.
- **Mobile-first and touch-aware**: layouts reflow from 320 px up. Tailwind v4 only applies `hover:` styles on devices that can actually hover, so phones never get stuck hover states. Content that is revealed on hover on desktop (such as attorney bios) is always visible on touch screens, and testimonials become a swipeable carousel.
- **Accessible**: semantic landmarks, skip link, focus-visible rings, focus-trapped menu dialog with Escape to close, labelled form fields with inline errors, `aria-live` status messages.
- **Hardened by default**: strict CSP and isolation headers, validated and rate-limited contact API, no trackers or third-party requests. See [SECURITY.md](SECURITY.md).

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 19, React Router 7 (lazy-loaded routes) |
| Styling | Tailwind CSS 4 with design tokens in `src/index.css` |
| Motion | Framer Motion |
| Font | Inter Variable, self-hosted via `@fontsource-variable/inter` |
| Build | Vite 8 |
| Hosting | Vercel (static site + one serverless function) |

## Project structure

```
veritas-legal/
├── api/
│   └── contact.js            # Serverless form endpoint (validation, rate limit, origin check)
├── public/                   # favicon, robots.txt, sitemap.xml
├── scripts/
│   ├── optimize-images.mjs   # PNG → WebP for design exports
│   └── sync-vercel-headers.mjs
├── src/
│   ├── assets/
│   │   ├── home/             # Imagery exported from the Figma design
│   │   └── pages/            # Unique photography for inner pages
│   ├── components/
│   │   ├── icons/            # Nucleo icon components
│   │   ├── HeroFrame.jsx     # Shared rounded hero + menu button
│   │   ├── PageHero.jsx      # Inner-page hero with breadcrumb
│   │   ├── Menu.jsx          # Full-screen navigation dialog
│   │   ├── ContactSection.jsx, PricingSection.jsx, CtaBand.jsx, Footer.jsx, …
│   │   └── ui.jsx            # Reveal, Stagger, buttons, badges, counters
│   ├── data/                 # Site copy: practice areas, attorneys, posts, jobs, plans
│   ├── lib/                  # Form validation + API client, helpers
│   ├── pages/                # Route components
│   ├── App.jsx               # Routes, scroll management, reduced-motion config
│   └── main.jsx
├── security-headers.js       # Single source of truth for HTTP security headers
├── vercel.json               # Generated from security-headers.js
└── vite.config.js
```

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Verify headers are in sync, then build to `dist/` |
| `npm run preview` | Serve the production build **with the production CSP**, a good final check |
| `npm run lint` | Lint with oxlint |
| `npm run sync:headers` | Regenerate `vercel.json` after editing `security-headers.js` |
| `npm run audit:prod` | Audit runtime dependencies |

## Contact form delivery

`/api/contact` validates every submission. To actually receive them, set `CONTACT_WEBHOOK_URL` (an HTTPS endpoint) in your Vercel project's environment variables. See [`.env.example`](.env.example). Without it, valid submissions are accepted and discarded.

## Deployment

The site deploys to Vercel with zero configuration beyond `vercel.json`:

```bash
npx vercel --prod
```

## Credits

- Design: Veritas Law Firm (Figma) by Seeam Ahmod
- Icons: [Nucleo](https://nucleoapp.com)
- Inner-page photography: [Unsplash](https://unsplash.com) (Unsplash License)

## License

[MIT](LICENSE) © 2026 Seeam Ahmod
