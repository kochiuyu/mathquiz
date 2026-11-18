import json,re,ast,sys
from fractions import Fraction as F
from pathlib import Path
fixtures=json.load(sys.stdin)
def calc(s,x=F(0)):
 s=s.replace('×','*').replace('÷','/').replace('−','-');s=re.sub(r'(\d+(?:\.\d+)?)%',r'(\1/100)',s)
 def walk(n):
  if isinstance(n,ast.Constant):return F(str(n.value))
  if isinstance(n,ast.Name) and n.id=='x':return x
  if isinstance(n,ast.UnaryOp) and isinstance(n.op,ast.USub):return -walk(n.operand)
  if isinstance(n,ast.BinOp):
   a,b=walk(n.left),walk(n.right)
   if isinstance(n.op,ast.Add):return a+b
   if isinstance(n.op,ast.Sub):return a-b
   if isinstance(n.op,ast.Mult):return a*b
   if isinstance(n.op,ast.Div):return a/b
  raise ValueError(ast.dump(n))
 return walk(ast.parse(s.strip(),mode='eval').body)
n=0
for q in fixtures:
 id,p,fields=q['skill'],q['prompt'][0],q['fields'];expected=[]
 if id in ['decshiftleft6a','decshiftright6a','decdivide6a']:
  match=re.search(r'Calculate ([\d.]+) ÷ ([\d.]+)',p); a,b=map(F,match.groups() if match else re.search(r'There is ([\d.]+) .* measures ([\d.]+)',p).groups())
  if id!='decdivide6a':expected=[1/b]
  else:
   k=1
   while (b*k).denominator!=1:k*=10
   expected=[a/(b*2),(a/b)*(b+1)] if b.denominator==1 else [a*k,b*k]
 elif id=='decmixed6a':
  e=re.search(r'Evaluate (.+)\.$',p)[1];s=re.search(r'\(([^()]+)\)',e);first=s[1] if s else re.search(r'\d+(?:\.\d+)?\s*[×÷]\s*\d+(?:\.\d+)?',e)[0];expected=[calc(first)]
 elif id=='decround6a':
  a,b=map(F,re.search(r'([\d.]+) ÷ ([\d.]+) ≈',p).groups());k=10 if 'nearest tenth' in p else 100;v=a/b*k;expected=[F(v.numerator//v.denominator,k),F(-(-v.numerator//v.denominator),k)]
 elif id=='decspend6a':
  a,b=map(F,re.findall(r'\$([\d.]+)',p));expected=[(a//b+1)*b-a]
 elif id=='decfraction6a':
  d=re.search(r'(?:amount is|recorded [a-z]+ amount is) ([\d.]+) ',p)[1];expected=[F(d)*10**len(d.split('.')[1])]
 elif id=='fractiondecimal6a':
  a=F(re.search(r'measurement is ([\d/]+) ',p)[1]);
  if 'exact decimal' in p:expected=[F(a.numerator)]
  else:
   k=10 if '1 decimal place' in p else 100;v=a*k;expected=[F(v.numerator//v.denominator,k),F(-(-v.numerator//v.denominator),k)]
 elif id=='fractioncompare6a':
  a,b=map(F,re.search(r'Compare ([\d/]+) and ([\d/]+)',p).groups());expected=[F(a.numerator*b.denominator),F(b.numerator*a.denominator)]
 elif id=='pctmeaning6a':
  whole=F(re.search(r'has (\d+)',p)[1]);pct=F(re.search(r'is (\(?[\d/]+\)?)%',p)[1].strip('()'));expected=[whole*pct/100]
 elif id in ['pctdecimal6a','pctfraction6a']:
  assert 'whole is 1000' in fields[0]['label'][0]
  assert F(fields[0]['answer']).denominator==1, 'whole-object count'
  pct=re.search(r'(\(?[\d/.]+\)?)%',p)
  if pct:expected=[F(pct[1].strip('()'))*10]
  else:
   val=re.search(r'convert ([\d/.]+) to',p,re.I)
   if not val:val=re.search(r'ratio is ([\d.]+)',p)
   expected=[F(val[1].rstrip('.'))*1000]
 elif id=='pctrelation6a':
  a,b=map(F,re.search(r'Of (\d+) [^,]+, (\d+)',p).groups());expected=[a-b]
 elif id=='pctquantity6a':
  a=F(re.search(r'contains (\d+)',p)[1]);b=F(re.search(r'is (\d+)%',p)[1]);expected=[abs(a-a*b/100)]
 elif id=='pctchange6a':
  a=F(re.search(r'had (\d+)',p)[1]);b=F(re.search(r'by (\d+)%',p)[1]);expected=[a*b/100]
 elif id in ['equationtypes6a','equationcheck6a']:
  eq=re.search(r'(?:Solve|model is) ([^ .]+(?:\.[^ ]+)?)',p)
  # Equations have internal decimals but no spaces; strip final punctuation only.
  eq=re.search(r'(?:Solve|model is) (\S+)',p)[1].rstrip('.')
  lhs,rhs=eq.split('=');x=(calc(rhs)-calc(lhs))/(calc(lhs,F(1))-calc(lhs));expected=[calc(lhs,x+1)]
 elif id=='equationmodel6a':
  if 'of an original collection' in p:
   pct,v=map(F,re.search(r'(\d+)% .* is ([\d.]+)\.',p).groups());expected=[v*100/pct]
  elif 'original ribbon length' in p:
   a,b=map(F,re.search(r'([\d/]+) of .* is ([\d.]+) m',p).groups());expected=[b/a]
  elif 'rectangle' in p:
   w,per=map(F,re.search(r'width ([\d.]+) cm and perimeter ([\d.]+)',p).groups());expected=[per/2-w]
  elif 'triangle' in p:
   h,area=map(F,re.search(r'height ([\d.]+) cm and area ([\d.]+)',p).groups());expected=[area*2/h]
  else:raise ValueError(p)
 elif id=='pct2':
  a,b=map(F,re.findall(r'\d+',p));expected=[a-b,100-b/a*100]
 elif id=='speed6a':expected=[F(re.search(r'in (\d+) minutes',p)[1])/60]
 elif id=='mean1':expected=[sum(map(F,re.findall(r'\d+',p)))]
 else:raise ValueError(id)
 assert len(expected)==len(fields),(q['id'],expected,fields)
 for e,f in zip(expected,fields):assert e==F(f['answer']),(q['id'],e,f);n+=1
print(f'PASS {len(fixtures)} visible-prompt contexts / {n} exact extra fields independently recomputed')
