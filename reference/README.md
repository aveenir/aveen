# reference/

Source material. Never imported by the site, never shipped.

- `portfolio-pdf/aveen-iranmanesh.pdf` — the 26-page portfolio; the only source of
  artwork so far (TD-001).
- `portfolio-pdf/pages/` — full-page PNG renders. Git-ignored; regenerate with:

  ```bash
  pdftoppm -r 72 -png reference/portfolio-pdf/aveen-iranmanesh.pdf reference/portfolio-pdf/pages/page
  ```

  `-r 72` yields the native 1920×1080 of the embedded images. Higher values only
  upsample (the first extraction used `-r 144`, which is why existing renders are
  3840×2160).

## Making a crop

Crops used by the site live in `src/assets/pdf/`. Most are produced by
`scripts/crop-pdf.py`, which lists every crop with its page and box (in a 1400-px
page space) and writes it at the PDF's native scale. It can also paint chalk title
text out of a crop (`ERASE`), using paper grain from the page margin.

```bash
python3 scripts/crop-pdf.py              # all crops
python3 scripts/crop-pdf.py identity-    # only names starting with "identity-"
```

To add a crop, add a line to `CROPS` and run the script. Crops made by hand before
the script existed: `cover` (p.1), `character-detective` (4), `character-dancer` (13),
`daghigh-logo-light`/`-dark` (14, styleguide only), `illustration-whisper-label` (23),
`contact-handshake` (26).

The PDF itself is **not in git** (35 MB, and it contains the owner's portrait and
contact details). Ask the owner for a copy and place it at
`reference/portfolio-pdf/aveen-iranmanesh.pdf` before regenerating renders or crops.
