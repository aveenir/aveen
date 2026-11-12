# 0005 — Interim assets cropped from the portfolio PDF

- Status: accepted as interim (owner decision); tracked as TD-001, TD-002, TD-003
- Context: The only source material is a 26-page PDF whose pages are flattened
  1920×1080 images. Originals will come later.
- Decision: Keep the PDF in `reference/portfolio-pdf/`, render pages on demand, and
  store hand-picked crops in `src/assets/pdf/`. Treat every file there as replaceable.
  Site chrome that must be crisp or animated (brace, underline, grain, horizon) is
  authored in SVG/CSS instead of cropped.
- Consequences: work is unblocked; image quality and character animation are limited
  until originals arrive. Nothing outside `src/assets/pdf/` may depend on crop
  dimensions or baked-in backgrounds.
