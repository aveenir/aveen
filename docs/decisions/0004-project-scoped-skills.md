# 0004 — Agent skills vendored at project scope

- Status: accepted (owner decision: Caveman only in this project)
- Decision: Copy the skills into `.claude/skills/` instead of installing plugins or
  hooks at user level.

| Skill | Source | Commit | Copied paths |
|---|---|---|---|
| ui-ux-pro-max | github.com/nextlevelbuilder/ui-ux-pro-max-skill | `6ae86f6` | `.claude/skills/ui-ux-pro-max` |
| caveman, caveman-commit, caveman-compress | github.com/JuliusBrussee/caveman | `3dc497a` | `skills/<name>` |

- How they are used: see `AGENTS.md` → "Mandatory skills". `pnpm ui:search` wraps the
  ui-ux-pro-max search script. `.caveman.json` declares the project default mode.
- Consequences: nothing outside this folder is modified; skills travel with the repo.
  Updates are manual (re-copy at a newer commit and update this table). Caveman's
  hooks and statusline are not active, so the mode depends on agents following
  `AGENTS.md` (TD-008). Each skill folder keeps its upstream license file.
- To update: clone the upstream repo at the new commit, replace the folder, run
  `pnpm ui:search "portfolio" --domain style` as a smoke test, update the table.
