# Level 2 Home EV Chargers

A small static directory of home Level 2 EVSE units. Built with [Astro](https://astro.build) so it can publish to GitHub Pages.

Live URL (after Pages is enabled): [https://bmoney-tesla-keys.github.io/level2-chargers](https://bmoney-tesla-keys.github.io/level2-chargers)

## What this is

Each charger is a Markdown file in `src/content/chargers/`. Pages cite manufacturer documents and independent reviews. We do not invent specs, prices, ratings, or traffic.

- Directory: `/`
- Charger pages: `/chargers/[slug]/`
- How we review: `/about/`

## Commands

Node.js 22+ is required.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

GitHub Pages uses `base: '/level2-chargers'`. Local links go through `withBase()` in `src/lib/paths.ts`.

## Adding a charger page

1. Create `src/content/chargers/<slug>.md` using the frontmatter schema in `src/content.config.ts`.
2. Cite the manufacturer plus at least two independent sources when they exist.
3. Leave `approxPriceUsd` as `null` unless a cited source states a price you are willing to stand behind.
4. Set `buyUrl` to the manufacturer product page until an affiliate program is approved. Keep `affiliateDisclosure: false` until a page actually contains affiliate links.
5. Add a line to `LOG.md` and, if needed, update `SEED.md`.

## Deploy

This repo is configured for GitHub Pages at `https://bmoney-tesla-keys.github.io/level2-chargers`. A workflow lives in `.github/workflows/deploy.yml`. Enabling Pages on the repository and pushing to `main` is a separate step (not done in the first scaffold).
