# Architecture

## Stack

| Layer | Choice | Decision |
|---|---|---|
| Framework | Astro 7 (static output), TypeScript strict | `decisions/0001` |
| Styling | Plain CSS, design tokens as custom properties, scoped component styles | `decisions/0002` |
| i18n | Astro i18n routing: `fa` default at `/`, `en` at `/en/` | `decisions/0003` |
| Agent skills | `ui-ux-pro-max`, `caveman` vendored in `.claude/skills/` | `decisions/0004` |
| Assets | Interim crops from the PDF, optimized by `astro:assets` | `decisions/0005` |
| Fonts | Self-hosted via Fontsource | `design-system.md` §3 |
| Motion | CSS transitions + `IntersectionObserver`; GSAP reserved for Phase 2/3 | `tech-debt.md` TD-010 |
| Package manager | pnpm, Node ≥ 22 | |

## Request flow

There is no server. `pnpm build` renders every route to HTML in `dist/`.
Client JavaScript is limited to `src/motion/` (currently one observer, under 1 kB).

```
src/pages/*.astro            route files: pick a locale, render a page component
  └─ src/components/*Page.astro   page bodies shared by both locales
       └─ src/layouts/BaseLayout.astro   <html lang dir>, fonts, global CSS, SVG defs
            └─ src/styles/global.css → tokens.css
```

A route exists twice: `src/pages/<route>.astro` (fa) and `src/pages/en/<route>.astro`.
Both are three-line files that pass `locale` to a shared page component, so layout and
logic are never duplicated.

## i18n

- `src/i18n/ui.ts` holds UI strings, `useTranslations(locale)`, `localePath(path, locale)`
  and `localizeDigits`. The `satisfies` check keeps both locales structurally aligned;
  a missing key is a type error.
- Always build internal links with `localePath()`; it applies `BASE_URL` and the locale
  prefix.
- `<html lang dir>` comes from the layout. Mixed-language runs set their own `lang`
  (and `dir` when they are blocks).

## Content model (Phase 4)

Content collections under `src/content/`, validated with Zod in `src/content.config.ts`:

```
projects/<slug>/fa.md, en.md     client: title, client, year, category
                                 (stationery | social | identity), palette[], cover, images[]
illustrations/<slug>/fa.md, en.md  title, medium, surface (t-shirt, tote, …), image
```

Not created yet. See `content-guide.md`.

## Deployment (Phase 7, not active)

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH` from the environment
(`.env.example`). For a GitHub Pages project site:

```
SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>  pnpm build
```

No workflow file is committed yet and nothing is published. Internal links and assets
already respect `BASE_URL`, so no code change is needed to deploy under a sub-path.

## Quality gates

| Gate | Command | Status |
|---|---|---|
| Types + Astro diagnostics + build | `pnpm build` | active |
| Token contrast | `pnpm tokens:contrast` | active |
| Visual regression, axe, Lighthouse | — | Phase 6 (TD-009) |
