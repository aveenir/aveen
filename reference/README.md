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

Crops used by the site live in `src/assets/pdf/`. Coordinates below are in a
2000-px-wide page space and are scaled to the render size:

```python
from PIL import Image
im = Image.open("reference/portfolio-pdf/pages/page-14.png").convert("RGB")
s = im.size[0] / 2000
box = (1340, 193, 1928, 531)                     # left, top, right, bottom
im.crop(tuple(int(v * s) for v in box)).save("src/assets/pdf/daghigh-logo-light.jpg", quality=92)
```

Existing crops and their page: `cover` (1), `character-detective` (4),
`character-runner` (5), `iranweblife-stationery` (6), `character-dancer` (13),
`daghigh-logo-light`/`-dark` (14), `illustration-whisper-label` (23),
`contact-handshake` (26).

The PDF itself is **not in git** (35 MB, and it contains the owner's portrait and
contact details). Ask the owner for a copy and place it at
`reference/portfolio-pdf/aveen-iranmanesh.pdf` before regenerating renders or crops.
