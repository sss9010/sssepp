# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # static export to ./out (required for GitHub Pages)
npm run lint       # ESLint
```

## Architecture

Single-page Next.js 15 app (App Router) deployed as a **fully static export** to GitHub Pages.

```
src/
  app/
    layout.tsx        # root layout: fonts, ThemeProvider, Navbar, Footer
    page.tsx          # composes all section components in order
    globals.css       # Tailwind directives + custom utilities (section-heading, section-label)
  components/
    Navbar.tsx        # sticky + blur-on-scroll; active section via IntersectionObserver
    Hero.tsx          # landing — name, tagline, CTA buttons
    About.tsx         # bio, research interests, skills, top-3 education
    Research.tsx      # project cards with status badges
    Publications.tsx  # filterable publication list
    CVSection.tsx     # timeline (education + experience) + awards
    Footer.tsx        # social links
    AnimatedSection.tsx  # Framer Motion scroll-reveal wrapper (client)
    ThemeProvider.tsx    # next-themes wrapper (client)
    ThemeToggle.tsx      # sun/moon button (client)
  data/
    content.ts        # ALL site content (personal info, publications, research, CV)
public/
  cv_sepp.pdf         # downloadable CV
  .nojekyll           # prevents GitHub Pages Jekyll processing
.github/workflows/
  deploy.yml          # CI: npm ci → next build → upload ./out → deploy-pages
```

## Key constraints

- **Static export**: `next.config.ts` has `output: "export"`. No server components that fetch data, no API routes.
- **Images**: `unoptimized: true` — Next.js image optimization requires a server.
- **basePath**: Commented out in `next.config.ts`. Uncomment and set to `/repo-name` if deploying to a GitHub project page (`username.github.io/repo-name`) rather than a user page (`username.github.io`).

## Adding content

All content lives in `src/data/content.ts`. To add a publication, push to the `publications` array. To add a research project, push to `researchProjects`. No component changes needed.

## Design system

- **Accent color**: emerald-600 (`#16a34a`) — defined as `accent.*` in `tailwind.config.ts`
- **Dark mode**: Tailwind `class` strategy via `next-themes`
- **Animations**: Framer Motion `useInView` in `AnimatedSection` (once, fires when 60px into viewport)
- **Typography**: Inter via `next/font/google` exposed as `--font-inter`

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically. Enable Pages in repo Settings → Pages → Source: GitHub Actions.
