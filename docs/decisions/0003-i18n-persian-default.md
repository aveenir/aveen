# 0003 — Persian default locale, English secondary; English-only repository

- Status: accepted (owner decision)
- Decision: The site ships in Persian (default, `/`, RTL) and English (`/en/`, LTR).
  Everything that is not presentation — code, comments, file names, docs, ADRs, commit
  messages — is English. Persian text is allowed only in UI strings, content files,
  alt text and meta descriptions.
- Consequences: each route has two thin route files sharing one page component;
  `src/i18n/ui.ts` type-checks key parity; links go through `localePath()`.
