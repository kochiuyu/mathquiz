"""Independent exact arithmetic for all numeric P5 level extras and rendered keys."""
from pathlib import Path
from fractions import Fraction
from math import lcm,prod
import ast
from html.parser import HTMLParser
import subprocess,json,re
r=Path(__file__).resolve().parent.parent
qs=json.loads(subprocess.check_output(['node','-e',"console.log(JSON.stringify(require('./p5-skill-data.js').questions))"],cwd=r))
def frac(s):
 p=str(s).split();return Fraction(p[0])+Fraction(p[1]) if len(p)==2 else Fraction(p[0])
class P(HTMLParser):
 def __init__(self):super().__init__();self.text=[]
 def handle_data(self,s):self.text.append(s)
def esc(s):return str(s).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace("'",'&#39;')
extras=0;html=0
for q in qs:
 s=q['meta']['source'];id=q['skill']
 if q['level']=='difficult':
  expected=[]
  if id=='multidigitround5a':
   m=s['multi5'];expected=[m['n']//m['unit']*m['unit'],(m['n']//m['unit']+1)*m['unit']]
  elif id=='multidigitcompare5a':expected=[abs(s['multi5']['a']-s['multi5']['b'])]
  elif id=='multidigitsequence5a' and s['multi5']['kind']=='sequence':expected=[int(s['answer'][0])+s['multi5']['step']]
  elif id in ['fractionaddsub5a','fractionmixed5a','fractionstory5a','fractionorder5a']:expected=[lcm(*(int(t.split('/')[-1]) if '/' in t else 1 for t in s['multiFraction5']['texts'])) if id=='fractionorder5a' else lcm(*(p[1] for p in s['multiFraction5']['parts']))]
  elif id=='fracadd5a':expected=[lcm(s['fractionAddition']['b'],s['fractionAddition']['d'])]
  elif id in ['fractionmeaning5b','fractionproduct5b','productstory5b']:expected=[Fraction(*s['product5']['parts'][0])]
  elif id=='decround5a':m=s['decimalProduct5'];expected=[Fraction(m['a'])*Fraction(m['b'])]
  elif id in ['decproduct5a','decstory5a']:m=s['decimalProduct5'];expected=[int(m['a'].replace('.',''))*int(m['b'].replace('.',''))]
  elif id=='fracquotient5c':expected=[s['fraction5N5']['d']]
  elif id=='fracdivision5c':expected=[1/frac(s['fraction5N5']['operands'][1])]
  elif id=='fracremainder5c':
   m=s['fraction5N5'];a,b=frac(m['amount']),frac(m['piece']);k=a//b;expected=[a-k*b if m['count'] else k];assert 0<=a-k*b<b
  elif id=='fracunitary5c':m=s['fraction5N5'];expected=[frac(m['total'])/frac(m['quantity'])]
  elif id=='equation5a':m=s['simpleEquation'];expected=[m['x']-m['b'] if m['subtract'] else m['x']+m['b']]
  elif id=='triarea5a':m=s['triangleArea'];expected=[m['base']*m['height']]
  elif id=='volume5a':m=s['cuboidVolume'];expected=[m['length']*m['width']]
  elif id in ['lettermeaning5a','expressionwords5a','expressionforms5a']:
   m=s['algebraModel5'];x=m['x']+1 if id=='lettermeaning5a' else 6
   def calc(n):
    if isinstance(n,ast.Constant):return Fraction(n.value)
    if isinstance(n,ast.Name):assert n.id=='x';return Fraction(x)
    if isinstance(n,ast.BinOp):
     a,b=calc(n.left),calc(n.right)
     if isinstance(n.op,ast.Add):return a+b
     if isinstance(n.op,ast.Sub):return a-b
     if isinstance(n.op,ast.Mult):return a*b
     if isinstance(n.op,ast.Div):return a/b
    raise AssertionError(n)
   expected=[calc(ast.parse(re.sub(r'(\d)x',r'\1*x',m['expr']),mode='eval').body)]
  elif id in ['equationeight5a','equationcontext5a']:
   m=s['algebraModel5'];a,b,c=m['a'],m['b'],m['c'];sol=[c-b,c+b,Fraction(c,a),c*a,Fraction(c-b,a),Fraction(c+b,a),(c-b)*a,(c+b)*a][m['type']]
   expected=[sol if m.get('stage')==0 else c]
  elif id=='paraarea5a':b,h=s['measure5']['dimensions'];expected=[2*b*h]
  elif id=='traparea5a':a,b,h=s['measure5']['dimensions'];expected=[(a+b)*h]
  elif id=='polyarea5a':a,b,c,d=s['measure5']['dimensions'];expected=[c*d,a*b]
  elif id=='volumeconcept5a':m=s['measure5'];expected=[prod(m['A']),prod(m['B'])]
  elif id=='cubevolume5a':expected=[s['measure5']['edge']**2]
  elif id=='compositevol5a':expected=[prod(b['size']) for b in s['measure5']['blocks']]
  elif id in ['circleproperties5a','circleradiusdiam5a']:expected=[s['shapeData5']['r']*4]
  elif id=='solidparts5a':m=s['shapeData5'];n=m['n'];expected=[n+1 if m['pyramid'] else n*2] if m['edge'] else [n*2 if m['pyramid'] else n*3]
  elif id in ['compoundread5a','compoundcompare5a']:m=s['shapeData5'];expected=[sum(m['values'][m['row']])]
  elif id=='compoundscale5a':expected=[max(v for pair in s['shapeData5']['values'] for v in pair)]
  elif id=='compoundround5a':m=s['shapeData5'];n,scale=m['raw'],m['scale'];expected=[n//scale*scale,(n//scale+1)*scale]
  elif id=='multidigitplace5a':
   m=s['multi5'];n=int(s['answer'][0]);expected=[20 if m['kind']=='regroup' else n//10000%10*10000]
  elif id=='multidigitsequence5a' and s['multi5']['kind']=='parity':expected=[s['multi5']['n']%2]
  elif id=='fractionestimate5a':
   m=s['multiFraction5'];v=Fraction(*m['parts'][0])
   for op,p in zip(m['ops'],m['parts'][1:]):v=v+Fraction(*p)*(1 if op=='+' else -1)
   expected=[('choice',f'A result equal to {v//1+1} belongs to the NEXT interval.')]
  elif id=='productestimate5b':expected=[prod(Fraction(*p) for p in s['product5']['parts'][1:])]
  elif id in ['decscaleup5a','decscaledown5a']:expected=[Fraction(s['decimalProduct5']['a'])]
  elif id=='fracmixedops5c':
   m=s['fraction5N5'];e=m['expression'];ops=re.findall(r'[+−×÷]',e);p=list(map(frac,m['operands']));k=(1 if e.index('(')>0 else 0) if '(' in e else int(ops[0] not in '×÷' and ops[1] in '×÷');a,b=p[k:k+2];op=ops[k];expected=[a+b if op=='+' else a-b if op=='−' else a*b if op=='×' else a/b]
  elif id=='purchasestory5a':m=s['purchaseEquation'];expected=[m['x']+1+(-m['b'] if m['subtract'] else m['b'])]
  elif id=='circle5a':expected=[('choice',next(x['letter'] for x in s['circleParts']['segments'] if x['kind']=='diameter'))]
  elif id=='equationbalance5a':
   equation=s['algebraModel5']['equation'];left,right=equation.split('=')
   # Equation forms are restricted to one x and numeric +-*/. Evaluate exact linear coefficients by samples0 and1.
   def safe(expr,x):
    def rec(n):
     if isinstance(n,ast.Constant):return Fraction(n.value)
     if isinstance(n,ast.Name):assert n.id=='x';return Fraction(x)
     a,b=rec(n.left),rec(n.right)
     return a+b if isinstance(n.op,ast.Add) else a-b if isinstance(n.op,ast.Sub) else a*b if isinstance(n.op,ast.Mult) else a/b
    return rec(ast.parse(expr,mode='eval').body)
   b=safe(left,0)-safe(right,0);a=safe(left,1)-safe(right,1)-b;expected=[-b/a]
  elif id=='heightmatch5a':
   m=s['measure5'];(x,y),(X,Y)=m['base'];v=(X-x,Y-y);matches=[]
   for seg in m['segments']:
    (x,y),(X,Y)=seg['points']
    if (X-x)*v[1]==(Y-y)*v[0]:matches.append(seg['label'])
   assert len(matches)==1;expected=[('choice',matches[0])]
  elif id=='volumeunits5a':expected=[s['measure5']['cubes']]
  elif id=='solidsections5a':
   m=s['shapeData5'];text=('The higher section is smaller' if m['taper'] else 'Both sections have the same size') if m['t']%2==0 else ('triangle' if m['n']==3 else 'rectangle (including square)' if m['n']==4 else 'circle');expected=[('choice',text)]
  elif id=='solidnets5a':
   m=s['shapeData5']
   if m['group']==0:
    cells=m['cells'];expected=[sum(abs(a-x)+abs(b-y)==1 for i,(a,b) in enumerate(cells) for x,y in cells[i+1:])]
   elif m['group']==1:expected=[m['a']*m['b']]
   else:expected=[0 if m['valid'] else 2]
  elif id=='sphereproperties5a':expected=[('choice','outside' if s['shapeData5']['index']%2 else 'inside')]
  actual=q['fields'][q['baseFields']:-1];assert len(actual)==len(expected),(q['id'],'extra count')
  for f,x in zip(actual,expected):
   if isinstance(x,tuple):assert f['options'][int(f['answer'])][0]==x[1],(q['id'],f,x)
   else:assert frac(f['answer'])==x,(q['id'],f,x)
   extras+=1
 # Exercise actual production field/value escaping by extracting the grade page functions below.
for lang in ['en','zh']:
 script="""const fs=require('fs'),vm=require('vm'),B=require('./p5-skill-data.js');let s=fs.readFileSync('p5-skill-levels.js','utf8');const begin=s.indexOf(' const value='),end=s.indexOf(' const opts=',begin);if(begin<0||end<0)throw Error('production boundaries');let c={P5SkillPicture:()=>'',lang:"""+json.dumps(lang)+""",loc:x=>x["""+str(lang=='zh').lower()+"""?1:0],t:(a,b)=>"""+str(lang=='zh').lower()+"""?b:a,E:s=>String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c])),paper:true,view:'key'};vm.createContext(c);vm.runInContext(s.slice(begin,end)+';this.render=question',c);console.log(JSON.stringify(B.questions.map(q=>({q,html:c.render(q,0)}))));"""
 rows=json.loads(subprocess.check_output(['node','-e',script],cwd=r));l=lang=='zh'
 for row in rows:
  q=row['q'];p=P();p.feed(row['html']);text=''.join(p.text);assert q['prompt'][l] in text and q['why'][l] in text,q['id']
  for f in q['fields']:
   value=f['options'][int(f['answer'])][l] if 'options'in f else f['answer'];assert value in text,(q['id'],value)
  html+=1
print(f'PASS independent P5 level oracle:{extras} exact numeric/choice contextual extras; {html} actual production bilingual key renders with intact prompt, answers and why.')
