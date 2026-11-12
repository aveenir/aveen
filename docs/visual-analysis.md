# Visual analysis of the source portfolio

Source: `reference/portfolio-pdf/aveen-iranmanesh.pdf` (26 pages, 16:9).
This analysis is the evidence behind `design-system.md`.

## Structure of the PDF

| Pages | Chapter | Character |
|---|---|---|
| 1 | Cover: "Aveen's Portfolio", apron reads "Aveen cooked!" | chef lifting an orange cloche |
| 2 | About (Persian bio, portrait) | seated figure sketching, orange papers flying |
| 3 | Résumé: experience, skills, software, languages, interests, education | — (orange braces) |
| 4 | Table of contents | detective with magnifier, chalk question marks |
| 5–6 | Stationery: IranWebLife | runner carrying envelope and notebook |
| 7–12 | Social media: IranWebLife, ParsHava, Tanserlock, ForeverIran | seated figure with orange phone |
| 13–16 | Logo & identity: Daghigh, Norbu Group, Faradid Sanat Ghadir | dancer holding a pen-tool nib |
| 17–25 | Illustrations on products (shirts, hoodies, totes, cards, mugs, …) | figure drawing an orange line |
| 26 | Contact | handshake with a sprout, orange nails |

## Aveen's own layer

- **Palette:** muted sage paper in two values, pale mint "chalk", charcoal line, one
  orange accent. Measured values are in `design-system.md` §2 (sampled, TD-005).
- **Texture:** fine paper grain over everything; chips and tabs have torn edges.
- **Composition:** a horizontal split at ≈52% of the page height on nearly every page.
  Chapter titles straddle it. Character on one side, title on the other, generous
  empty paper.
- **Line:** uniform charcoal stroke, slightly rough, closed simple shapes, a plain circle
  for the head, no face. Motion ticks in chalk around the figure.
- **Type:** distressed typewriter slab for Latin titles (often in chalk), quoted project
  names with a chalk underline (`"Daghigh Logo"`), dot-leader table of contents,
  page number on a mint tab bottom-left. Persian body in a traditional naskh with
  kashida justification; Persian name plate in a heavy display face.
- **Accent grammar:** orange appears as braces grouping lists, as one filled prop per
  illustration (cloche, envelope, phone, shoes, nails), and once as a title color on the
  only dark page (p.22).
- **Tone:** playful and warm. The bio states the intent: bridge technology and human
  feeling, give everyday things new meaning.

## Client-work layer

| Project | Palette | Character |
|---|---|---|
| IranWebLife | navy, gold, off-white | editorial line illustration, storytelling stationery |
| ParsHava | blues, white | photo collage, chemistry motifs |
| Tanserlock | yellow, black, charcoal | geometric triangles, 3D/AI imagery |
| ForeverIran | soft pinks, greens, browns | product photomontage |
| Daghigh | `#F2F5EC`, `#B6A86B`, `#0D1B1C` | faceted monogram, sketch → idea → mark |
| Norbu Group | `#F1F1F0`, `#BBB77A`, `#0D1B1C`, `#2A2A65` | interlocking blocks |
| Faradid Sanat Ghadir | `#F9F4F4`, `#5BA39D`, `#7DCBC3`, `#0F1915` | soft-gradient "F" |

Logo pages share a fixed anatomy worth keeping on the web: swatch chips with hex codes,
a "SKETCH" sheet, an "IDEA" equation, light and dark lockups, mockups.

## Personal illustration layer

Continuous-line ink figures, dense hatching, flat saturated red/blue/yellow fills,
shown on physical products. Rawer and more emotional than the client work; it benefits
from more space and, in places, a dark ground.

## Implications for the site

1. Reuse the horizon, grain, brace, chalk underline, page tab and dot-leader TOC as the
   site's chrome.
2. Keep chrome neutral around client work; expose each project's swatches as data.
3. Give the illustration gallery larger images, fewer words and an optional night band.
4. Chalk and orange cannot carry body text on sage (contrast 1.1–2.1:1); see
   `design-system.md` §2.
