# Content guide

How to add or change what the site says and shows. Structure for projects and
illustrations lands in Phase 4; this guide already fixes the rules.

## Languages

- Every user-facing string exists in Persian (`fa`, default) and English (`en`).
- UI strings: `src/i18n/ui.ts`. Add the key to **both** locale objects; the type check
  fails otherwise.
- Persian: ZWNJ where required (`می‌شود`, `شبکه‌های`), Persian `ی`/`ک`, Persian digits
  in running text (use `localizeDigits` for generated numbers), «» for quotes, no
  letter-spacing, no em dashes. Tone: warm, direct, first person where Aveen speaks.
- English: sentence case, plain words. English copy is unreviewed for now (TD-006).
- Brand and client names keep their original spelling in both locales.

## Images

- Put source images in `src/assets/` and render them with `<Image />` or `<Picture />`
  from `astro:assets`. Always write real `alt` text in the page's language; decorative
  images get `alt=""`.
- Give `widths` and `sizes` for anything wider than a thumbnail.
- Current images are PDF crops in `src/assets/pdf/` (TD-001, TD-003). To recreate or
  add a crop, see `reference/README.md`. When originals arrive, place them under
  `src/assets/work/<project>/` and delete the matching crop.

## Adding a project (from Phase 4)

1. Create `src/content/projects/<slug>/fa.md` and `en.md`.
2. Fill the frontmatter defined in `src/content.config.ts` (title, client, year,
   category, palette, cover, images).
3. Run `pnpm build`. Invalid or missing fields fail the build.

## Contact details

Email and phone are both shown on the site (owner decision). Keep them in one place
(`src/i18n/ui.ts` or a `site.ts` constant in Phase 5), never scattered through pages.
