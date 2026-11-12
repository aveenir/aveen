# Architecture

## Stack

| Layer | Choice | Decision |
|---|---|---|
| Framework | Astro 7 (static output), TypeScript strict | `decisions/0001` |
| Styling | Plain CSS, design tokens as custom properties, scoped component styles | `decisions/0002` |
| i18n | Astro i18n routing: `fa` default at `/`, `en` at `/en/` | `decisions/0003` |
| Agent skills | `ui-ux-pro-max`, `caveman` vendored in `.claude/skills/` | `decisions/0004` |
| Assets | Interim crops from the PDF, optimized by `astro:assets` | `decisions/0005` |
| Fonts | Radio Newsman + A Rooznameh, self-hosted from `src/assets/fonts/` | `design-system.md` §3 |
| Motion | CSS transitions, scroll-driven CSS animation, one `IntersectionObserver` | `decisions/0006` |
| Package manager | pnpm, Node ≥ 22 | |

## Request flow

There is no server. `pnpm build` renders every route to HTML in `dist/`.
Client JavaScript is limited to `src/motion/`: `in-view.ts` (reveal observer) and
`lightbox.ts` (enlarged view on a native `<dialog>`). Everything works without it.

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

## Content model

Content collections, validated with Zod in `src/content.config.ts`. Every text field
is an object `{ fa, en }`, so both locales live in one file and cannot drift apart.

```
src/content/projects/<slug>.yaml   category (stationery | social | identity), order,
                                   title, kind, body, palette[], images[{src, alt, wide}]
src/content/illustrations.yaml     list of {id, order, surface, alt, image, wide,
                                   band (paper | night)}
```

Data that is not a collection lives in TypeScript:

```
src/site.ts            contact details (email, phone), the only place they are written
src/data/chapters.ts   chapter order, routes and labels (drives TOC, page tab, "next chapter")
src/data/resume.ts     biography and résumé for the About page
```

Routes: `/work/<category>/` (one page per category, generated from `categories`),
`/illustrations/`, `/about/`, `/contact/`, plus the same under `/en/`. See
`content-guide.md`.

## Deployment

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH` from the environment
(`.env.example`). Locally both are unset.

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. It takes both values from `actions/configure-pages`, so the same code serves
`https://aveenir.github.io/aveen/` or a custom domain without edits. One-time setup in
the repository: Settings → Pages → Source: **GitHub Actions**.

To reproduce the Pages build locally:

```
SITE_URL=https://aveenir.github.io BASE_PATH=/aveen pnpm build && pnpm preview
```

## Quality gates

| Gate | Command | Status |
|---|---|---|
| Types + Astro diagnostics + build | `pnpm build` | active |
| Token contrast | `pnpm tokens:contrast` | active |
| Visual regression, axe, Lighthouse | — | Phase 6 (TD-009) |
