# 0002 — Plain CSS with design tokens

- Status: accepted
- Context: The design is bespoke (paper, horizon, hand-drawn strokes) and must work in
  RTL and LTR. Utility frameworks pull toward a generic look and need RTL variants.
- Decision: CSS custom properties in `src/styles/tokens.css` as the only source of
  values; global primitives in `global.css`; component styles scoped in `.astro` files;
  CSS logical properties everywhere.
- Consequences: no build-time CSS dependency, small output, one file for an agent to
  read to learn the visual language. Discipline is enforced by `AGENTS.md` rules and
  `pnpm tokens:contrast` rather than by a framework.
- Alternatives: Tailwind CSS (fast, but class noise and theme config duplicate the
  tokens), CSS-in-JS (needs a client runtime).
