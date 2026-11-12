"""Crop artwork for the site out of the rendered PDF pages (TD-001).

Usage:
    pdftoppm -r 72 -png reference/portfolio-pdf/aveen-iranmanesh.pdf reference/portfolio-pdf/pages/page
    python3 scripts/crop-pdf.py            # writes every crop below
    python3 scripts/crop-pdf.py social-    # only crops whose name starts with "social-"

Boxes are (left, top, right, bottom) in a 1400-px-wide page space, so they can be
read straight off a 1400-px preview. Output is saved at the PDF's native 1920-px
scale, whatever resolution the renders were made at.
"""

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "reference/portfolio-pdf/pages"
OUT = ROOT / "src/assets/pdf"
SPACE = 1400  # width of the coordinate space used below
NATIVE = 1920  # width of the images embedded in the PDF

Box = tuple[int, int, int, int]

# Chalk title text that overlaps a character is painted out with paper grain
# taken from the page's empty margin (same rows), so the grain stays continuous.
ERASE: dict[str, Box] = {
    "character-runner": (90, 330, 700, 432),
}

CROPS: dict[str, tuple[int, Box]] = {
    # name: (page, box)
    "character-runner": (5, (520, 88, 1240, 705)),
    "character-social": (7, (60, 70, 845, 672)),
    "character-illustrator": (17, (60, 20, 1262, 730)),
    "stationery-iranweblife-set": (6, (470, 10, 1385, 785)),
    "social-iranweblife-posts": (8, (140, 15, 1258, 788)),
    "social-iranweblife-stories": (9, (25, 78, 1375, 698)),
    "social-parshava": (10, (365, 15, 1352, 788)),
    "social-tanserlock": (11, (365, 15, 1352, 788)),
    "social-foreveriran": (12, (365, 15, 1352, 788)),
    "identity-daghigh-mockups": (14, (112, 120, 562, 630)),
    "identity-daghigh-sketch": (14, (565, 175, 905, 592)),
    "identity-daghigh-idea": (14, (415, 632, 905, 740)),
    "identity-daghigh-logos": (14, (935, 132, 1355, 655)),
    "identity-norbu-mockups": (15, (95, 118, 525, 586)),
    "identity-norbu-sketch": (15, (527, 175, 880, 592)),
    "identity-norbu-idea": (15, (415, 655, 905, 760)),
    "identity-norbu-logos": (15, (935, 132, 1355, 655)),
    "identity-faradid-mockups": (16, (132, 140, 525, 612)),
    "identity-faradid-sketch": (16, (527, 175, 880, 592)),
    "identity-faradid-idea": (16, (415, 655, 905, 760)),
    "identity-faradid-logos": (16, (935, 132, 1355, 655)),
    "illustration-tshirts": (18, (35, 145, 1365, 625)),
    "illustration-hoodies": (19, (55, 145, 865, 702)),
    "illustration-tote-yellow": (19, (955, 25, 1325, 665)),
    "illustration-postcards": (20, (85, 148, 1314, 716)),
    "illustration-bags-and-shirt": (21, (0, 112, 1400, 722)),
    "illustration-night-hoodies": (22, (0, 112, 1400, 722)),
    "illustration-tote-pool": (23, (0, 112, 500, 722)),
    "illustration-cushions": (24, (110, 128, 655, 762)),
    "illustration-mugs": (24, (800, 118, 1292, 702)),
    "illustration-helmet": (25, (128, 138, 622, 612)),
    "illustration-clock": (25, (940, 12, 1252, 322)),
    "illustration-slippers": (25, (850, 385, 1298, 712)),
}


def erase_chalk(im: Image.Image, box: Box) -> None:
    """Replace light chalk pixels inside `box` with grain from the left margin."""
    from PIL import ImageFilter

    x0, y0, x1, y1 = box
    region = im.crop(box).convert("L")
    margin = im.crop((8, y0, 8 + 160, y1))
    bg = [sorted(margin.convert("L").crop((0, y, 160, y + 1)).getdata())[80] for y in range(y1 - y0)]
    mask = Image.new("L", region.size, 0)
    mp, rp = mask.load(), region.load()
    for y in range(region.size[1]):
        for x in range(region.size[0]):
            if rp[x, y] > bg[y] + 14:
                mp[x, y] = 255
    mask = mask.filter(ImageFilter.MaxFilter(7))
    fill = Image.new("RGB", region.size)
    for x in range(0, region.size[0], 160):
        fill.paste(margin, (x, 0))
    im.paste(fill, (x0, y0), mask)


def main(prefix: str = "") -> None:
    for name, (page, box) in CROPS.items():
        if not name.startswith(prefix):
            continue
        src = PAGES / f"page-{page:02d}.png"
        im = Image.open(src).convert("RGB")
        s = im.size[0] / SPACE
        if name in ERASE:
            erase_chalk(im, tuple(round(v * s) for v in ERASE[name]))
        crop = im.crop(tuple(round(v * s) for v in box))
        k = NATIVE / im.size[0]
        if k < 1:
            crop = crop.resize((round(crop.size[0] * k), round(crop.size[1] * k)), Image.LANCZOS)
        dest = OUT / f"{name}.jpg"
        crop.save(dest, quality=90, optimize=True, progressive=True)
        print(f"{dest.relative_to(ROOT)}  {crop.size[0]}x{crop.size[1]}  (page {page})")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "")
