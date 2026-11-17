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
assert 'activities/p3-bar-charts-i.html' in config['SOURCE_FILES']
assert 'activities/p3-inquiry.html' in config['SOURCE_FILES']
assert 'activities/p4-four-operations-ii.html' in config['SOURCE_FILES']
assert 'activities/p4-fractions-ii.html' in config['SOURCE_FILES']
assert 'fractions4.js' in config['SOURCE_FILES']
import re
assert re.search(r'mathquiz-text\.ttf\?v=[^\"]+', (root/'pdf-export.js').read_text())
print(f'PASS PDF font: {len(chars)} source characters covered by actual nonzero glyphs, including all current EN/繁中 paper, keys and practical resource.')

assert 'decimals4.js' in config['SOURCE_FILES']
assert 'activities/p4-decimals-i.html' in config['SOURCE_FILES']
assert 'activities/p4-decimals-ii.html' in config['SOURCE_FILES']
