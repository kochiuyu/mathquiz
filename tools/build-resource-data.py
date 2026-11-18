"""Build navigation metadata from the audited inventory. Does not alter questions."""
import json, pathlib, re
root = pathlib.Path(__file__).resolve().parents[1]
translations = {
 'Numbers to 20':'二十以內的數','Basic addition and subtraction':'基本加法和減法','Numbers to 100':'一百以內的數',
 'Addition and subtraction':'加法和減法','Length and distance':'長度和距離','Money':'貨幣','Time':'時間','3-D shapes':'立體圖形','2-D shapes':'平面圖形','Directions and positions':'方向和位置','Inquiry and investigation':'探究活動',
 '3-digit numbers':'三位數','4-digit numbers':'四位數','5-digit numbers':'五位數','Basic multiplication':'基本乘法','Basic division':'基本除法','Angles':'角','Quadrilaterals':'四邊形','Pictograms':'象形圖','Multiplication':'乘法','Division':'除法','Four arithmetic operations':'四則運算','Fractions':'分數','Capacity':'容量','Weight':'重量','Triangles':'三角形','Bar charts':'棒形圖','Multiples and factors':'倍數和因數','Common multiples and common factors':'公倍數和公因數','Decimals':'小數','Perimeter':'周界','Area':'面積','Dissecting and forming shapes':'分割和拼砌圖形','Multi-digit numbers':'多位數','Algebraic expressions':'代數式','Simple equations':'簡易方程','Volume':'體積','Circles':'圓','3-D shapes (III)':'立體圖形（三）','Compound bar charts':'複合棒形圖','Percentages':'百分數','Applications of percentages':'百分數的應用','Speed':'速率','Symmetry':'對稱','Average':'平均數','Arithmetic mean':'算術平均數','Broken-line graphs':'折線圖','Pie charts':'圓形圖','Statistics':'統計圖','Uses and abuses of statistics':'統計圖的應用和誤用','Approximation':'近似值'
}
translations.update({'Elementary algebra':'代數初步','Angle (degree)':'角（度）','Averages':'平均數','Broken line graphs':'折線圖'})
def zh(title):
 if title in translations:return translations[title]
 m=re.match(r'^(.*?)\s*\(([IV]+)\)$',title)
 if m and m[1] in translations:return translations[m[1]]+'（'+{'I':'一','II':'二','III':'三','IV':'四','V':'五'}[m[2]]+'）'
 raise ValueError('Translation required: '+title)
activity_units={
 'p6-angle-degree':['6M1'],
 'p6-volume-ii':['6M2'],
 'p6-perimeter-ii':['6M3'],
 'p6-speed':['6M4'],
 'p6-area-iii':['6M5'],
 'p6-symmetry':['6S1'],
 'p6-averages':['6D1'],
 'p6-broken-line-graphs':['6D2'],
 'p6-pie-charts':['6D3'],
 'p6-statistics':['6D4'],
 'p6-inquiry':['6F1'],
 'p6-decimals-iv':['6N1'],
 'p6-decimals-v':['6N2'],
 'p6-percentages-i':['6N3'],
 'p6-percentages-ii':['6N4'],
 'p6-simple-equations-ii':['6A1'],

 'p5-elementary-algebra':['5A1'],
 'p5-simple-equations-i':['5A2'],
 'p5-area-ii':['5M1'],
 'p5-volume-i':['5M2'],
 'p5-circles':['5S1'],
 'p5-3d-shapes-iii':['5S2'],
 'p5-bar-charts-iii':['5D1'],
 'p5-inquiry':['5F1'],

 'p5-fractions-v':['5N5'],
 'p5-decimals-iii':['5N4'],
 'p5-fractions-iv':['5N3'],
 'p5-fractions-iii':['5N2'],
 'p5-multi-digit-numbers':['5N1'],
 'p1-early-number-review':['1N1','1N2'],'p1-number-sense-review':['1N3'],'p1-numbers-oral':['1N3'],'p1-addition-subtraction-review':['1N4'],
 'p1-length-distance-i':['1M1'],'p1-length-distance-ii':['1M3'],'p1-money':['1M2'],'p1-time':['1M4'],'p1-3d-shapes':['1S1'],'p1-2d-shapes':['1S2'],'p1-directions':['1S3'],'p1-inquiry':['1F1'],
 'p2-3digit-numbers':['2N1'],'p2-addition-subtraction-ii':['2N2'],'p2-basic-multiplication':['2N3'],'p2-4digit-numbers':['2N4'],'p2-addition-subtraction-iii':['2N5'],'p2-basic-division':['2N6'],'p2-length-distance-iii':['2M1'],'p2-time-ii':['2M2'],'p2-money':['2M3'],'p2-3d-shapes-ii':['2S1'],'p2-angles':['2S2'],'p2-directions-ii':['2S3'],'p2-quadrilaterals-i':['2S4'],'p2-pictograms':['2D1'],'p2-inquiry':['2F1'],
 'p3-5digit-numbers':['3N1'],'p3-multiplication-i':['3N2'],'p3-division-i':['3N3'],'p3-four-operations-i':['3N4'],'p3-fractions-i':['3N5'],'p3-length-distance-iv':['3M1'],'p3-time-iii':['3M2'],'p3-capacity':['3M3'],'p3-time-iv':['3M4'],'p3-weight':['3M5'],'p3-quadrilaterals-ii':['3S1'],'p3-triangles':['3S2'],'p3-bar-charts-i':['3D1'],'p3-inquiry':['3F1'],'p4-multiplication-ii':['4N1'],'p4-division-ii':['4N2'],'p4-multiples-factors':['4N3'],'p4-common-multiples-factors':['4N4'],'p4-four-operations-ii':['4N5'],'p4-fractions-ii':['4N6'],'p4-decimals-i':['4N7'],'p4-decimals-ii':['4N8'],'p4-perimeter-i':['4M1'],'p4-area-i':['4M2'],'p4-quadrilaterals-iii':['4S1'],'p4-dissecting-forming':['4S2'],'p4-inquiry':['4F1'],'p4-bar-charts-ii':['4D1'],'p4-directions-iii':['4S3']}
units=[]
for line in (root/'planning/full-curriculum-plan.md').read_text(encoding='utf-8').splitlines():
 m=re.match(r'\| P([1-6]) \| \[([1-6][NMSDFA]\d+)\]\((.*?)\) \| (.*?) \|',line)
 if not m:continue
 grade,code,source,title=m.groups()
 units.append(dict(code=code,grade=int(grade),title=[title,zh(title)],source=source,complete=bool(re.search(r'resource complete',line,re.I))))
assert len(units)==85
from html.parser import HTMLParser
class ActivityTitles(HTMLParser):
 def __init__(self):
  super().__init__();self.sections=[];self.language=None;self.heading=None;self.parts=[];self.titles={}
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if tag=='section':
   self.sections.append(self.language)
   if attrs.get('id') in ['en','zh']:self.language=attrs['id']
  if tag=='h1' and self.language and self.language not in self.titles:
   self.heading=self.language;self.parts=[]
 def handle_data(self,data):
  if self.heading:self.parts.append(data)
 def handle_endtag(self,tag):
  if tag=='h1' and self.heading:
   self.titles[self.heading]=''.join(self.parts);self.heading=None
  if tag=='section':
   self.heading=None;self.language=self.sections.pop() if self.sections else None

activities=[]
for slug,codes in activity_units.items():
 path='activities/'+slug+'.html';raw=(root/path).read_text(encoding='utf-8')
 parser=ActivityTitles();parser.feed(raw)
 if set(parser.titles)!={'en','zh'}:raise ValueError(path+' missing language-specific h1 title')
 titles=[parser.titles[language] for language in ['en','zh']]
 activities.append(dict(path=path,units=codes,title=titles))
assert {p.stem for p in (root/'activities').glob('*.html')}==set(activity_units)
data=dict(units=units,activities=activities,strands={'N':['Number','數'],'M':['Measures','度量'],'S':['Shape and space','圖形與空間'],'D':['Data handling','數據處理'],'A':['Algebra','代數'],'F':['Inquiry','探究']})
(root/'resources.js').write_text('// Generated by tools/build-resource-data.py; question payloads remain in builder.js.\nconst resourceData = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Navigation metadata:',len(units),'units,',len(activities),'activities')
