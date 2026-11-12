# 0001 — Astro static site

- Status: accepted
- Context: A portfolio with heavy imagery, two locales, no backend, to be hosted on
  GitHub Pages later and maintained mostly by AI agents.
- Decision: Astro with static output and TypeScript strict. Pages are `.astro`
  components; no UI framework (React/Vue) unless a component truly needs client state.
- Consequences: near-zero client JS, built-in image optimization and i18n routing,
  content collections with schema validation. Interactive pieces are written as small
  vanilla modules in `src/motion/`.
- Alternatives: Next.js static export (heavier runtime, React everywhere), plain
  HTML/CSS (no image pipeline, no content schema), Eleventy (weaker TypeScript and
  asset story).
