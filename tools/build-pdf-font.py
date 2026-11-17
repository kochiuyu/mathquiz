"""Rebuild the small, locally hosted font used by custom PDF text layers.

Requires fonttools. The source is Google's Noto Sans TC under OFL 1.1; its
license is copied to fonts/OFL.txt. No user text is sent to the font host.
"""

from __future__ import annotations

import hashlib
from pathlib import Path
from urllib.request import urlopen

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/notosanstc/NotoSansTC%5Bwght%5D.ttf"
SOURCE_SHA256 = "864727d210d54f2537bbe23b3a839436c3992af72de9322af5270897246bd44f"
SOURCE_FILES = ("index.html", "questions.js", "builder.js", "marking.js", "fractions4.js", "decimals4.js", "quiz.js", "pdf-export.js", "activities/p3-triangles.html", "activities/p3-bar-charts-i.html", "activities/p3-inquiry.html", "activities/p4-multiplication-ii.html", "activities/p4-division-ii.html", "activities/p4-multiples-factors.html", "activities/p4-common-multiples-factors.html", "activities/p4-four-operations-ii.html", "activities/p4-fractions-ii.html", "activities/p4-decimals-i.html", "activities/p4-decimals-ii.html")
OUTPUT = ROOT / "fonts" / "mathquiz-text.ttf"


def main() -> None:
    source = ROOT / "fonts" / "NotoSansTC-variable.ttf"
    if not source.exists():
        source.write_bytes(urlopen(SOURCE_URL, timeout=60).read())
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    if digest != SOURCE_SHA256:
        raise SystemExit(f"Unexpected Noto Sans TC source SHA-256: {digest}")

    chars = set(chr(code) for code in range(32, 127))
    for name in SOURCE_FILES:
        chars.update((ROOT / name).read_text(encoding="utf-8"))
    font = TTFont(source)
    font = instantiateVariableFont(font, {"wght": 400}, inplace=True)
    supported = font.getBestCmap()
    missing = sorted(ord(char) for char in chars if ord(char) > 32 and ord(char) not in supported)
    if missing:
        raise SystemExit("Font lacks source characters: " + ", ".join(f"U+{code:04X}" for code in missing))

    options = subset.Options()
    options.layout_features = []
    options.name_IDs = [0, 1, 2, 4, 6, 13, 14]
    cutter = subset.Subsetter(options=options)
    cutter.populate(unicodes={ord(char) for char in chars})
    cutter.subset(font)
    font.save(OUTPUT)
    print(f"{OUTPUT.name}: {OUTPUT.stat().st_size:,} bytes; {len(chars)} source characters")


if __name__ == "__main__":
    main()
