# Content guide

How to add or change what the site says and shows.

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

## Adding a project

One YAML file per project in `src/content/projects/<slug>.yaml`. Every text field
holds both locales:

```yaml
category: identity          # stationery | social | identity: the chapter it appears in
order: 4                    # position inside the chapter
title: { fa: دقیق, en: Daghigh }
kind: { fa: لوگوی, en: Logo }   # the chalk word of the heading
body:
  fa: |
    پاراگراف اول.

    پاراگراف دوم.           # paragraphs are separated by a blank line
  en: |
    First paragraph.
palette: ['#F2F5EC', '#0D1B1C'] # optional, uppercase hex
images:
  - src: ../../assets/pdf/identity-daghigh-logos.jpg   # path relative to the YAML file
    alt: { fa: …, en: … }
    wide: true              # optional: spans the full row
```

Run `pnpm build`. A missing locale, a bad hex, an unknown category or a missing image
fails the build. A new category also needs an entry in `categories`
(`src/content.config.ts`), in `src/data/chapters.ts` and a cover in
`src/components/WorkPage.astro`.

## Adding an illustration

Append an item to `src/content/illustrations.yaml` with a unique `id`, `order`,
`surface`, `alt`, `image` (relative to `src/content/`), optional `wide`, and
`band: night` to place it on the dark band.

## Résumé and biography

`src/data/resume.ts`. Persian dates are Solar Hijri as the owner wrote them; English
uses Gregorian years (TD-014).

## Contact details

Email and phone are both shown on the site (owner decision). They are written once,
in `src/site.ts`; header, footer and contact page read them from there.
