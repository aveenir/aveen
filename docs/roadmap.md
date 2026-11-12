# Roadmap

Status legend: done · gate (needs owner approval) · next · later.

| Phase | Scope | Depends on | Exit criteria | Status |
|---|---|---|---|---|
| 0. Foundation | Astro project, project-scoped skills, `AGENTS.md`, docs skeleton, PDF extraction | — | `pnpm dev` and `pnpm build` work; skills discoverable in `.claude/skills/` | done |
| 1. Design system | Tokens, fonts, paper grain, horizon, brace, section title, TOC nav, labels, style tile | 0 | `/styleguide/` renders in both directions; `pnpm tokens:contrast` passes | done |
| 2. Shell and motion | Site header/footer, TOC navigation behavior, page-number tab as scroll progress, view transitions, motion presets | 1 | Keyboard-complete navigation; reduced-motion static states; no horizontal scroll at 375 | done |
| 3. Home | Hero (cloche reveal), intro, chapter list | 2 | Correct at 375/768/1024/1440 in fa and en | done |
| 4. Work | Content collections + schema, project template, 7 client projects in three categories | 2 | Adding a project = adding one YAML file; build fails on invalid data | done |
| 5. Illustrations, About, Contact | Gallery with enlarged view, résumé, handshake contact page (email + phone) | 4 | Lazy images with reserved space, CLS < 0.1 | done |
| 6. QA | UI UX Pro Max pre-delivery checklist, Playwright screenshots, axe, Lighthouse | 3–5 | Lighthouse ≥ 90 in all four categories on home, one project, gallery | partly: manual checklist and browser QA done; automation open (TD-009) |
| 7. Publish | Final repo name, GitHub repository, Pages workflow | owner decision | Public URL serves both locales | ready: workflow committed, waiting for push access and Pages setup |

Next after publishing: replace PDF crops with original artwork (TD-001 to TD-003), owner review of copy (TD-006, TD-012), Playwright + axe automation (TD-009). Documentation is updated in the
same change as the code it describes. Open debt: `tech-debt.md`.
