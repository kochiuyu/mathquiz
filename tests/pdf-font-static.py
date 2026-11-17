"""Check actual PDF font cmap/glyph coverage, not merely presence of ToUnicode."""
from pathlib import Path
import runpy
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parents[1]
config=runpy.run_path(str(root/'tools/build-pdf-font.py'))
font=TTFont(root/'fonts/mathquiz-text.ttf')
cmap=font.getBestCmap()
chars={chr(n) for n in range(32,127)}
for name in config['SOURCE_FILES']:
    chars.update((root/name).read_text(encoding='utf-8'))
missing=sorted({ord(c) for c in chars if ord(c)>32 and (ord(c) not in cmap or font.getGlyphID(cmap[ord(c)])==0)})
assert not missing, 'Missing PDF glyphs: '+', '.join(f'U+{n:04X} {chr(n)}' for n in missing)
assert 'activities/p3-triangles.html' in config['SOURCE_FILES']
assert 'mathquiz-text.ttf?v=triangles-r4' in (root/'pdf-export.js').read_text()
print(f'PASS PDF font: {len(chars)} source characters covered by actual nonzero glyphs, including Triangle EN/繁中 paper, keys and practical resource.')
