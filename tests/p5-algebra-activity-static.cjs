const fs=require('fs'),path=require('path'),a=require('assert/strict'),cp=require('child_process'),read=x=>fs.readFileSync(path.join(__dirname,'..',x),'utf8');
for(const [slug,code,n]of [['elementary-algebra','5A1',2],['simple-equations-i','5A2',3]]){const h=read('activities/p5-'+slug+'.html');a(h.includes('data-unit="'+code+'"')&&h.includes('activity-ui.js'));for(const lang of ['en','zh']){const s=h.split('<section id="'+lang+'">')[1].split('</section>')[0];a.equal((s.match(/data-task=/g)||[]).length,6);a.equal((s.match(/class="sheet"/g)||[]).length,5);a.equal((s.match(/data-objective=/g)||[]).length,n);a.equal((s.match(/data-observation="blank"><\/div>/g)||[]).length,6+n);a(s.includes('<div class="key" hidden>'));a(s.includes(lang==='en'?'not pupil mastery':'不代表學生已掌握'));a(s.includes('pmc2017_e.pdf#page=85'));}a(read('tools/build-pdf-font.py').includes('"activities/p5-'+slug+'.html"'));}
const model=read('activities/p5-simple-equations-i.html'),first=read('activities/p5-elementary-algebra.html');
const result=cp.spawnSync('python3',['-c',String.raw`
import sys,json,ast,re
from fractions import Fraction as F
from html.parser import HTMLParser
class P(HTMLParser):
 def __init__(self):super().__init__();self.models=[];self.active=False
 def handle_starttag(self,t,a):
  if t=='p' and 'data-model' in dict(a):self.active=True;self.models.append('')
 def handle_data(self,s):
  if self.active:self.models[-1]+=s
 def handle_endtag(self,t):
  if t=='p':self.active=False
def calc(t,x):
 def w(n):
  if isinstance(n,ast.Constant):return F(n.value)
  if isinstance(n,ast.Name):assert n.id=='x';return F(x)
  if isinstance(n,ast.BinOp):
   a,b=w(n.left),w(n.right)
   if isinstance(n.op,ast.Add):return a+b
   if isinstance(n.op,ast.Sub):return a-b
   if isinstance(n.op,ast.Mult):return a*b
   if isinstance(n.op,ast.Div):return a/b
  raise AssertionError(ast.dump(n))
 return w(ast.parse(t,mode='eval').body)
d=json.load(sys.stdin)
class Visibility(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.visible=[];self.hidden=[];self.supplied=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs);parent=self.stack[-1] if self.stack else (False,False,False)
  hidden=parent[0] or 'hidden' in a;task=parent[1] or a.get('data-task')=='2';supplied=parent[2] or 'data-supplied-equations' in a
  if t not in ['meta','link','input','br','hr']:self.stack.append((hidden,task,supplied))
 def handle_endtag(self,t):
  if self.stack:self.stack.pop()
 def handle_data(self,s):
  if not self.stack:return
  h,t,l=self.stack[-1]
  if h:self.hidden.append(s)
  else:self.visible.append(s)
  if t and l and not h:self.supplied.append(s)
for lang in ['en','zh']:
 section=d['equations'].split('<section id="'+lang+'">')[1].split('</section>')[0]
 v=Visibility();v.feed(section)
 equations=['x+3=7','x-3=1','2*x=8','x/2=4','2*x+3=11','2*x-3=5','x/2+3=7','x/2-3=1']
 assert v.supplied==equations,(lang,v.supplied)
 assert all(e in ''.join(v.hidden) for e in equations)
 assert ('Solutions:' if lang=='en' else '解依次為') not in ''.join(v.visible)
 assert ('Solutions:' if lang=='en' else '解依次為') in ''.join(v.hidden)

for key in ['equations','expressions']:
 p=P();p.feed(d[key]);assert len(p.models)==12;p.models=[x.replace("、",",") for x in p.models]
 for offset in [0,6]:
  if key=='equations':
   for eq,x in zip(['x+3=7','x-3=1','2*x=8','x/2=4','2*x+3=11','2*x-3=5','x/2+3=7','x/2-3=1'],[4,4,4,8,4,4,8,8]):
    assert eq in p.models[offset+1];l,r=eq.split('=');assert calc(l,x)==calc(r,x)
   assert '4,4,4,8,4,4,8,8' in p.models[offset+1]
   assert '3*5+2=17' in p.models[offset+3] and calc('3*x+2',5)==17
   assert '12/3+2=6' in p.models[offset+4] and calc('x/3+2',12)==6
  else:
   assert '5,7,10' in p.models[offset] and [calc('x+3',x) for x in [2,4,7]]==[5,7,10]
   assert calc('3*x',4)==calc('x+x+x',4)==12
   assert calc('x-3',5)==2 and calc('9-x',5)==4
   assert '14' in p.models[offset+4] and '11' in p.models[offset+4]
print('PASS24 bilingual teacher-model paragraphs; independent eight-form substitution and expression values, blank observations retained.')
`],{input:JSON.stringify({equations:model,expressions:first}),encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);console.log(result.stdout.trim());
