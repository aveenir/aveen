# Design

A one-page summary of what the site looks like and why. The full specification is
[`docs/design-system.md`](docs/design-system.md); the evidence is
[`docs/visual-analysis.md`](docs/visual-analysis.md). See it live at `/styleguide/`.

## The idea: "Aveen's Sketchbook"

The site is a web version of Aveen's PDF portfolio, not a generic portfolio template.
Every piece of chrome is taken from her own pages:

| From the PDF                                              | On the site                                                                               |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Sage paper with fine grain                                | Page background with an SVG noise layer                                                   |
| A horizontal split at about 52% of every page             | The "horizon": sections change from light to deep sage at that line, and titles sit on it |
| Faceless line character (chef, runner, detective, dancer) | One character per chapter                                                                 |
| Typewriter titles with a chalk underline                  | `SectionTitle`: ink word + chalk accent word + drawn underline                            |
| Dot-leader table of contents                              | `TocNav`, the main navigation                                                             |
| Orange curly braces grouping lists                        | `Brace`                                                                                   |
| Torn mint labels and page-number tab                      | `PaperLabel`                                                                              |
| One orange prop per illustration                          | Orange is the single accent, used for decoration only                                     |

## Colors

Sampled from the PDF pages (see TD-005).

| Token        | Hex       | Use                                             |
| ------------ | --------- | ----------------------------------------------- |
| paper        | `#a9b4a3` | default background                              |
| paper deep   | `#919c8c` | below the horizon                               |
| paper raised | `#b1bfa8` | cards                                           |
| chalk        | `#d2e3c8` | display accents and underlines, never body text |
| label        | `#e6efe0` | paper labels                                    |
| accent       | `#ee8d4a` | braces, props, decoration                       |
| accent text  | `#a84f12` | the only orange allowed for text                |
| ink          | `#252822` | text and line art                               |
| ink soft     | `#3a3f37` | secondary text                                  |
| night        | `#0f1110` | dark gallery band                               |

All text pairs meet WCAG 4.5:1; `pnpm tokens:contrast` enforces it.

## Type

Two families, nothing else.

| Role | Family |
|---|---|
| Latin (titles, labels, body) | Radio Newsman |
| Persian (titles and body) | A Rooznameh |

These are the exact fonts from the PDF, supplied by the owner. Each has one weight,
so there is no bold: hierarchy comes from size, color and the chalk underline.
Persian is never letter-spaced.

## Motion

Quiet and hand-made: authored SVG lines (brace, underline) draw themselves when they
scroll into view, content fades up once. With "reduce motion" enabled everything is
shown in its final state.

## Rules that do not bend

- Colors, sizes and durations come from `src/styles/tokens.css` only.
- Orange and chalk never carry body text.
- Layout uses logical properties so Persian (RTL) and English (LTR) share one stylesheet.
- Touch targets are at least 44px; focus is always visible.
- Client work keeps its own colors; the site chrome around it stays neutral.

## What is still a compromise

Artwork is cropped from the PDF, so characters carry a baked background and cannot be
animated stroke by stroke. Fonts and colors are approximations. All of it is listed in
[`docs/tech-debt.md`](docs/tech-debt.md).
