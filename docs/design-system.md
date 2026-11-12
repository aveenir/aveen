# Design system — "Aveen's Sketchbook"

The site is not a portfolio template with Aveen's work dropped in. It is her PDF
sketchbook, continued in the browser. Every rule below is derived from that PDF
(`docs/visual-analysis.md`). Live reference: `pnpm dev` → `/styleguide/`.

Source of truth for values: `src/styles/tokens.css`. This document explains intent.

## 1. Principles

1. **Two layers.** Aveen's own voice (paper, line character, typewriter, orange) frames
   the site. Client work keeps its own palette and is shown as prints lying on that paper.
2. **One horizon.** Every full-width band is light paper above, deep paper below, with a
   hard edge at `--horizon` (52%). Headings sit on or near that edge.
3. **One line, one accent.** Charcoal line for drawing and text. Orange for emphasis and
   interaction only. No second accent, no gradients, no glass, no drop-shadow glow.
4. **Hand-placed, not sloppy.** Small rotations (`--tilt`), rough stroke edges
   (`#crayon` filter), torn-paper chips. Alignment, spacing and contrast stay strict.
5. **The character guides.** The faceless line figure (circle head) appears once per
   chapter with a prop that names the chapter. It is never decoration without a role.

## 2. Color

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#a9b4a3` | page background above the horizon |
| `--color-paper-deep` | `#919c8c` | below the horizon, alternate sections |
| `--color-paper-raised` | `#b1bfa8` | cards, filled shapes |
| `--color-chalk` | `#d2e3c8` | display type, underline rules, page tab |
| `--color-label` | `#e6efe0` | paper chips |
| `--color-accent` | `#ee8d4a` | brace, link underline, button fill, hover |
| `--color-accent-text` | `#a84f12` | accent-colored text on labels only |
| `--color-ink` | `#252822` | all readable text, line work, borders, focus ring |
| `--color-night` | `#0f1110` | dark gallery section |

Rules:

- **Chalk on paper is 1.6–2.1:1.** It is display-only: large typewriter headings that are
  decorative or duplicated by an ink heading/label. Never body text, never the only
  carrier of meaning.
- **Orange on paper is 1.1:1.** Strokes and fills only. Orange text is allowed on the
  night background (7.7:1) and as `--color-accent-text` on labels (4.7:1).
- Client palettes appear only inside project content (images, swatch dots). They never
  restyle the site chrome.
- `pnpm tokens:contrast` enforces every text/background pair. Add a pair there when you
  introduce a new combination.

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Latin (display, labels and body) | Radio Newsman | typewriter; `--tracking-typewriter` allowed; `size-adjust: 86%` |
| Persian (display and body) | A Rooznameh | `size-adjust: 112%`; never letter-spaced |

Both are the fonts used in the PDF, supplied by the owner and self-hosted from
`src/assets/fonts/` via `src/styles/fonts.css`. Each has **one weight only**:
`font-synthesis: none` is set on `body`, so never request bold or italic; build
hierarchy with size, color and the chalk underline instead. A Rooznameh draws
`ک` and `ی` in its own (Arabic-looking) way; that is the font's design, not an
encoding error.

Two families only. Do not add a third without an ADR.

- Classes: `.display`, `.heading`, `.typewriter`, `.prose` in `global.css`. They switch
  family by `:lang()`, so set `lang` correctly on mixed-language runs.
- Never letter-space Persian. Persian copy uses ZWNJ, Persian digits (`localizeDigits`)
  and «» quotes.
- Both fonts are self-hosted from `src/assets/fonts/`; the owner confirmed both are free to redistribute. Single weight and TTF format are tracked as TD-004.

## 4. Signature elements

| Element | Component / class | Source in PDF |
|---|---|---|
| Horizon band | `.horizon`, `.on-deep` | every page |
| Paper grain | `body::before` SVG noise, `--texture-opacity` | every page |
| Orange brace | `Brace.astro` | p.3, p.4 |
| Chalk underline heading | `SectionTitle.astro` (`accent` = chalk word) | p.6, p.10–16 |
| Typewriter table of contents | `TocNav.astro` (primary navigation) | p.4 |
| Paper chip | `PaperLabel.astro` (page number, SKETCH, IDEA) | p.5–25, p.14–16 |
| Print-on-desk card | `.card` pattern in `styleguide.astro` (to be extracted in Phase 4) | p.14–16 |
| Night section | `.night` pattern | p.22 |

## 5. Motion

- **Meaning first:** lines draw (`[data-draw]`), prints settle (`[data-reveal]`), labels
  nudge on hover. Nothing bounces, nothing loops.
- Durations: `--dur-fast` 160ms (hover/focus), `--dur-base` 320ms (reveal),
  `--dur-draw` 1100ms (strokes). Easing: `--ease-out`, `--ease-draw`.
- Reveal offset is 12px (reads as a fade, not a slide).
- The default state is the finished state. JS adds `.js` to `<html>`; only then are
  elements hidden before entering the viewport. `prefers-reduced-motion` shows the end
  state immediately.
- `[data-draw]` needs `pathLength="1"` and must **not** use
  `vector-effect: non-scaling-stroke` (it breaks the dash math).

## 6. Layout

- `.wrap`: max `--page-max` (78rem) with `--page-gutter`. Prose max `--measure` (62ch).
- Mobile-first. Check 375, 768, 1024, 1440. No horizontal scroll.
- Logical properties only. Directional art (brace, hover nudge) mirrors under `[dir=rtl]`.
- Touch targets ≥ `--tap-min` (44px). Focus ring: 3px ink, 3px offset.

## 7. Guidance from UI UX Pro Max

Queried during planning and Phase 1 (`pnpm ui:search`):

- **Adopted:** style "Anti-Polish / Raw Aesthetic" (hand-drawn elements, scanned-paper
  texture, small random rotation, sketch reveal; RTL level: full). Priority rules 1–7:
  contrast 4.5:1, visible focus, 44px targets, reserved image space, semantic tokens,
  reduced-motion end states, small scroll-reveal offsets, no-JS visible content.
  Astro stack rules: `<Image />`/`<Picture />` for local images.
- **Rejected:** the `--design-system` auto-recommendation (Minimalism & Swiss, monochrome
  + blue `#2563EB`, Kalam/Patrick Hand, "Hero + Features + CTA" landing pattern). It is a
  generic product-site answer and contradicts the portfolio's own identity.
- **Adapted:** the style's "no smooth transitions" note. Reveals stay short and eased so
  the site feels calm; jitter is limited to static stroke roughness.

## 8. Do / Don't

| Do | Don't |
|---|---|
| Put new values in `tokens.css` first | Hard-code hex, px or ms in a component |
| Pair a chalk display word with an ink heading | Use chalk or orange for paragraphs |
| Let client images bring their own color | Tint site chrome with a client palette |
| Mirror directional art in RTL | Use `left`/`right`/`margin-left` |
| Keep one character appearance per chapter | Scatter the character as filler |
