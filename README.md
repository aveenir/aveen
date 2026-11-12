# aveen

Portfolio website of **Aveen Iranmanesh**, graphic designer and illustrator.
Persian (default) and English. Static site built with Astro; local-first, GitHub Pages
later.

## Run it locally

You need **Node 22 or newer** and **pnpm 10**. Python 3 is optional (only for the
design-guidance search).

```bash
# once, if pnpm is missing
npm install -g pnpm

# once, inside the project folder
pnpm install

# start the site
pnpm dev
```

Then open:

| URL                                 | What                                             |
| ----------------------------------- | ------------------------------------------------ |
| <http://localhost:4321/>            | Persian site                                     |
| <http://localhost:4321/en/>         | English site                                     |
| <http://localhost:4321/styleguide/> | Design system preview (colors, type, components) |

The page reloads when you save a file. Stop the server with `Ctrl+C`.

### Other commands

| Command                    | Does                                                     |
| -------------------------- | -------------------------------------------------------- |
| `pnpm build`               | Type check, then build the static site into `dist/`      |
| `pnpm preview`             | Serve the built `dist/` locally, as it would be deployed |
| `pnpm check`               | Type check only                                          |
| `pnpm tokens:contrast`     | Verify that all text colors meet WCAG contrast           |
| `pnpm ui:search "<query>"` | Search the UI UX Pro Max design guidance                 |

### If something goes wrong

- **Port 4321 is busy:** `pnpm dev --port 4322`.
- **Odd build errors after pulling changes:** `rm -rf node_modules .astro dist && pnpm install`.

## Where to look

| You want to…                                  | Read                                                 |
| --------------------------------------------- | ---------------------------------------------------- |
| Know what the design is, in one page          | [`DESIGN.md`](DESIGN.md)                             |
| Work on this repo as an AI agent or developer | [`AGENTS.md`](AGENTS.md)                             |
| The full design specification                 | [`docs/design-system.md`](docs/design-system.md)     |
| Why it looks this way                         | [`docs/visual-analysis.md`](docs/visual-analysis.md) |
| The code structure                            | [`docs/architecture.md`](docs/architecture.md)       |
| Add or edit copy and images                   | [`docs/content-guide.md`](docs/content-guide.md)     |
| What is next                                  | [`docs/roadmap.md`](docs/roadmap.md)                 |
| What is knowingly unfinished                  | [`docs/tech-debt.md`](docs/tech-debt.md)             |
| Past decisions                                | [`docs/decisions/`](docs/decisions)                  |

## Status

Phase 0 (foundation) is done. Phase 1 (design system) is built and waiting for the
owner's approval of the style tile at `/styleguide/`. The home page is a placeholder.
The repository is <https://github.com/aveenir/aveen>; nothing is published yet.

## Third-party skills

`.claude/skills/` contains vendored copies of
[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (MIT) and
[caveman](https://github.com/JuliusBrussee/caveman) (Apache-2.0). Their license files
are kept next to them. Details: `docs/decisions/0004-project-scoped-skills.md`.
