# 0006 — CSS-only motion, GSAP removed

- Status: accepted; closes TD-010
- Context: GSAP was installed in Phase 0 for scroll-linked and sequenced motion. Once
  the shell, home and chapter pages were built, every pattern the design calls for
  was covered without it: fade-up and line drawing via `src/motion/in-view.ts`, the
  cover "lift" via a CSS `clip-path` transition, the page-tab progress bar via
  `animation-timeline: scroll()` inside `@supports`.
- Decision: Remove `gsap`. Motion is CSS plus one small `IntersectionObserver`.
  Browsers without scroll-driven animations simply show no progress bar.
- Consequences: no animation library in the bundle; client JavaScript stays at two
  small modules (`in-view.ts`, `lightbox.ts`). If a future pattern genuinely needs a
  timeline (for example a stroke-by-stroke character once vector originals exist,
  TD-002), reintroduce GSAP in a new ADR.
