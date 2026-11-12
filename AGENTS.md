# AGENTS.md

Single source of truth for every AI agent and developer working in this repo.
`CLAUDE.md` only imports this file. Keep this file short; details live in `docs/`.

## What this is

Portfolio website of Aveen Iranmanesh (graphic designer, illustrator).
Static site, local-first, later deployed to GitHub Pages.
Design direction: **"Aveen's Sketchbook"** — sage paper, a horizon band, a faceless
line character, typewriter type, one orange accent. See `docs/design-system.md`.

## Language policy (hard rule)

- **English**: all code, comments, identifiers, file names, commit messages, docs, ADRs.
- **Persian and English**: the presentation layer only — page copy, content
  collections, UI strings in `src/i18n/`, alt text, meta descriptions.
- Persian is the default locale (`/`), English lives under `/en/`. Every user-facing
  string must exist in both locales.

## Commands

| Task                   | Command                                                                  |
| ---------------------- | ------------------------------------------------------------------------ |
| Install                | `pnpm install`                                                           |
| Dev server             | `pnpm dev` (<http://localhost:4321>)                                     |
| Type and content check | `pnpm check`                                                             |
| Production build       | `pnpm build`                                                             |
| Token contrast audit   | `pnpm tokens:contrast`                                                   |
| Design guidance lookup | `pnpm ui:search "<query>" --domain <style\|ux\|typography\|color\|gsap>` |

A change is done only when `pnpm build` and `pnpm tokens:contrast` both pass.

## Mandatory skills (project-scoped, in `.claude/skills/`)

1. **ui-ux-pro-max** — consult before any change that affects how something looks,
   moves or is interacted with. Run `pnpm ui:search` with one dominant intent and
   2–5 terms. Its `--design-system` auto-pick is generic (Swiss minimal + blue) and
   is **overridden** by `docs/design-system.md`; use it for rules and checklists
   (`references/quick-reference.md`, `references/pro-rules.md`), not for palette.
   Record what was adopted or rejected in the relevant ADR or PR description.
2. **caveman** — default voice for agent status, reports and review notes in this
   repo: answer first, no ceremony, payload verbatim. Use `caveman-commit` for
   commit messages and `caveman-compress` for agent-only memory files.
   Caveman never applies to user-facing site copy or to files in `docs/`
   (those stay full, clear English).

Skills are vendored copies, not global installs. Do not install them globally,
and do not add hooks to `~/.claude`. Versions: `docs/decisions/0004-project-scoped-skills.md`.

## Non-negotiable design rules

- Colors, spacing, radii, durations and easings come **only** from
  `src/styles/tokens.css`. No raw hex or px magic numbers in components.
- Use CSS logical properties (`margin-inline`, `inset-inline-start`, `text-align: start`).
  Never `left`/`right` for layout. The site must be correct in `dir="rtl"` and `dir="ltr"`.
- Orange (`--color-accent`) is decoration and interaction only. It never carries body text.
- Mint-on-sage is display type only (large headings). Readable text uses `--color-ink`.
- Text contrast ≥ 4.5:1, visible focus ring, touch targets ≥ 44×44px.
- Every animation has a `prefers-reduced-motion` static end state. Content is
  visible without JavaScript.
- Never letter-space Persian text. Persian copy uses ZWNJ, Persian digits and «» quotes.
- Local images go through `astro:assets` (`<Image />` / `<Picture />`), never raw `<img>`.

## Where things live

```
src/styles/tokens.css   design tokens (single source)
src/styles/global.css   reset, base typography, paper texture, horizon band
src/i18n/               UI strings and locale helpers (ui.ts)
src/content/            content collections (projects, illustrations) per locale
src/components/         reusable Astro components
src/layouts/            page shells
src/motion/             motion helpers, one file per pattern
src/assets/             images imported by components and content
reference/              source material, never shipped (PDF portfolio)
docs/                   design system, architecture, content guide, ADRs, tech debt
```

## Working agreements

- Read `docs/tech-debt.md` before touching assets, fonts or colors: several values
  are interim because the only source so far is a flattened PDF.
- New architectural decision → new numbered file in `docs/decisions/`.
- New debt → new `TD-xxx` row in `docs/tech-debt.md`, referenced from the code with
  a `// TD-xxx` comment.
- Do not publish, push or create a remote repository unless the owner asks.
