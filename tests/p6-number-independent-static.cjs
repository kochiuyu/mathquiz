const fs=require('fs'),vm=require('vm'),a=require('assert/strict'),crypto=require('crypto'),cp=require('child_process'),path=require('path');const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={URLSearchParams,location:{search:''}};vm.createContext(c);for(const file of ['builder.js','number6.js','algebra6.js'])vm.runInContext(read(file),c);vm.runInContext('this.bank=families;this.added=numberFamilies6;',c);
const pins=JSON.parse(read('tests/p6-number-predecessors.json'));a.equal(pins.length,222);a.equal(pins.reduce((n,x)=>n+x.count,0),3351);
for(const pin of pins){const f=c.bank.find(f=>f.id===pin.id);a(f);a.equal(crypto.createHash('sha256').update(JSON.stringify({id:f.id,grade:f.grade,code:f.code,label:f.label,count:f.count,retired:f.retired,variants:Array.from({length:f.count},(_,i)=>f.make(i))})).digest('hex'),pin.sha256,pin.id);}
const quiz=read('quiz.js'),cases=[],html=[];let total=0,marks=0;
for(const f of c.added){a.equal(new Set(Array.from({length:f.count},(_,i)=>f.make(i).prompt[0])).size,f.count,'distinct '+f.id);for(let i=0;i<f.count;i++){
 const q=f.make(i),id=f.id+'-'+i;total++;marks+=q.marks;cases.push({id,q});a(q.practiceHint.length===2&&q.practiceHint.every(x=>x.length>20));a.equal(c.decodeItems(id,6).length,1);a.equal(c.decodeItems(id,5).length,0);
 if(q.number6){a.equal(q.number6.length,q.fields.length);q.number6.forEach((spec,j)=>{a(c.scoreNumber6(q.answer[j],spec).correct,id);for(const bad of ['','NaN','Infinity','1e2','1+1','-1','0/0','3%','2cm','1'.repeat(81)])a(!c.scoreNumber6(bad,spec).correct,id+' reject '+bad);a(!c.scoreNumber6('999999999',spec).correct,id+' wrong');});}
 if(q.algebra6){a(c.scoreAlgebra6(q.answer[0],q.algebra6),id);a(c.scoreAlgebra6(q.answer[0].split('=').reverse().join('='),q.algebra6));a(!c.scoreAlgebra6('x='+q.numberModel6.solution,q.algebra6));for(const bad of ['','x*x=4','1/x=4','x/0=4','x+y=4','x=NaN','Math.random()=4','x'.repeat(121)])a(!c.scoreAlgebra6(bad,q.algebra6).valueOf());}
 for(const l of [0,1]){
  const elements={status:{focus(){}},feedback0:{},retry:{}},inputs=q.answer.map(()=>({focus(){}})),button={};const d={grade:6,quizzes:{6:[q]},strictP1:false,points:q=>q.marks,local:x=>x[l],t:(en,zh)=>l?zh:en,scoreNumber6:c.scoreNumber6,scoreAlgebra6:c.scoreAlgebra6,document:{getElementById:id=>elements[id],querySelectorAll:()=>inputs,querySelector:()=>button},figure:()=>''};vm.createContext(d);vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function renderNumber2Practice')),d);
  for(const wrong of [false,true]){d.mark({get:name=>wrong?'not-a-number':q.answer[Number(name.match(/f(\d+)$/)?.[1]||0)],getAll:()=>wrong?[q.choices.find(x=>x!==q.answer[0])]:q.answer});a.equal(elements.status.textContent,(l?'得分':'Score')+' '+(wrong?0:q.marks)+' / '+q.marks,id+' actual mark');}
  for(const mode of ['assessment','paper','key'])html.push({id,l,mode,html:d.item({...q,code:f.code},0,mode!=='assessment',mode==='key'),prompt:q.prompt[l],why:q.why[l],answer:q.choiceLabels?q.choiceLabels[q.answer[0]][l]:q.answer.join(' / '),fields:q.choices?q.choices.length:q.answer.length});
 }
}}
a.equal(total,240);a.equal(c.bank.length,271);a.equal(c.bank.reduce((n,f)=>n+f.count,0),4035);
const py=String.raw`
import sys,json,re,ast
from fractions import Fraction as F
from html.parser import HTMLParser
def calc(s,x=0):
 s=re.sub(r'(\d+(?:\.\d+)?)%',r'(\1/100)',s)
 def w(n):
  if isinstance(n,ast.Constant):return F(ast.get_source_segment(s,n))
  if isinstance(n,ast.Name):assert n.id=='x';return F(x)
  if isinstance(n,ast.BinOp):
   a,b=w(n.left),w(n.right)
   if isinstance(n.op,ast.Add):return a+b
   if isinstance(n.op,ast.Sub):return a-b
   if isinstance(n.op,ast.Mult):return a*b
   if isinstance(n.op,ast.Div):return a/b
  raise AssertionError(ast.dump(n))
 return w(ast.parse(s,mode='eval').body)
def rnd(x,p):return F((x.numerator*10**p*2+x.denominator)//(2*x.denominator),10**p)
d=json.load(sys.stdin);forms=set();kinds=set()
for row in d['cases']:
 q=row['q'];m=q['numberModel6'];t=m['type'];ans=q['answer'];p=q['prompt'][0];e=None
 if t=='division':
  a,b=F(m['a']),F(m['b']);e=[a/b]
  if not m['placeValue']:
   digits=len(str(b.denominator))-1;scale=10**digits
   while (b*scale).denominator!=1:scale*=10
   assert len(str((a*scale).numerator))<=3 and b*scale<100,row['id'];kinds.add(m['combination'])
 elif t=='mixed':assert m['operands']<=4;e=[calc(m['expression'])]
 elif t=='roundDivision':assert '≈' in p;e=[rnd(F(m['a'])/F(m['b']),m['places'])]
 elif t=='purchase':a,b=F(m['budget']),F(m['price']);n=a//b;e=[F(n),a-n*b];assert 0<=e[1]<b
 elif t=='decimalFraction':e=[F(m['decimal'])];assert e[0]==F(m['value'])
 elif t=='fractionDecimal':e=[rnd(F(m['value']),m['places']) if m['places'] else F(m['value'])]
 elif t=='compareFractions':a,b=F(m['a']),F(m['b']);assert ans==['A' if a>b else 'B' if b>a else 'E']
 elif t=='percentMeaning':assert ans==[m['correct']];assert '100' in q['choiceLabels'][ans[0]][0]
 elif t in ['percentDecimal','percentFraction']:e=[F(m['percent']) if m['toPercent'] else F(m['percent'])/100]
 elif t=='percentRelation':e=[F(m['part'])/F(m['whole'])*100]
 elif t=='percentQuantity':e=[F(m['whole'])*F(m['percent'])/100]
 elif t=='percentChange':e=[F(m['whole'])*(1+(1 if m['increase'] else -1)*F(m['percent'])/100)]
 elif t.startswith('equation'):
  left,right=m['equation'].split('=');x=F(m['solution']);assert calc(left,x)==calc(right,x),(row['id'],m)
  coef=calc(left,1)-calc(left,0);assert coef!=0;assert (calc(right,0)-calc(left,0))/coef==x
  if t!='equationContext':assert m['equation'] in p
  if t=='equationSolve':forms.add(m['form'])
  if t!='equationContext':e=[x]
 if e is not None:
  assert list(map(F,ans))==e,(row['id'],ans,e)
  assert [F(s['expected']) for s in q['number6']]==e
assert forms==set(range(6)) and kinds==set(range(4))
class H(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.key=[];self.bold=False;self.inputs=[]
 def handle_starttag(self,t,a):
  assert t in ['fieldset','legend','small','p','b','div','label','input','span'],t
  if t=='b':self.bold=True
  if t=='input':self.inputs.append(dict(a))
 def handle_endtag(self,t):
  if t=='b':self.bold=False
 def handle_data(self,s):
  self.text.append(s)
  if self.bold:self.key.append(s)
for v in d['html']:
 h=H();h.feed(v['html']);assert v['prompt'] in ''.join(h.text),v['id']
 if v['mode']=='key':assert ''.join(h.key)==v['answer'] and v['why'] in ''.join(h.text),v['id']
 elif v['mode']=='paper':assert not h.inputs
 else:assert len(h.inputs)==v['fields']
print('PASS240 exact rational/AST oracles incl four division combinations/six equation forms;1440 actual bilingual HTML parses.')
`;
const result=cp.spawnSync('python3',['-c',py],{input:JSON.stringify({cases,html}),encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);console.log(result.stdout.trim());
a(c.scoreNumber6('1 1/2',{mode:'fraction',expected:'3/2'}).correct);a(!c.scoreNumber6('2/4',{mode:'fraction',expected:'1/2'}).correct);a(c.scoreNumber6('0.500',{mode:'decimal',expected:'1/2'}).correct);a(!c.scoreNumber6('0.5001',{mode:'decimal',expected:'1/2'}).correct);
a(c.scoreAlgebra6('25%x=1.5',{mode:'equation',variable:'x',expected:'0.25*x=1.5'}));a(!c.scoreAlgebra6('0.5*x=3',{mode:'equation',variable:'x',expected:'0.25*x=1.5'}));
console.log('PASS3351 frozen predecessors,480 correct+480 wrong production mark calls, malformed/near-miss scalar and direct-equation contracts. Browser pending.');

const resource=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,''));const selectable=c.bank.filter(f=>!f.retired),selectedUnits=new Set(selectable.map(f=>f.code)),bearing=new Set([...selectedUnits,...resource.activities.flatMap(x=>x.units)]),planned=resource.units.length-bearing.size;
a.deepEqual([c.bank.length,c.bank.reduce((n,f)=>n+f.count,0),selectable.length,selectable.reduce((n,f)=>n+f.count,0),selectedUnits.size,bearing.size,resource.activities.length,planned,resource.units.filter(x=>x.complete).length],[271,4035,270,4020,77,85,85,0,85]);
const resourceRunner=read('tests/resources-ui-regression.js');a(resourceRunner.includes("querySelectorAll('[data-unit]').length==="+planned+",'planned only'"),'exact current planned-unit browser total');
for(const code of ['6N1','6N2','6N3','6N4','6A1'])a.equal(resource.units.find(u=>u.code===code).complete,true);
for(const f of c.added){const ids=Array.from({length:f.count},(_,i)=>f.id+'-'+i);let batch=[];for(const id of ids){if(batch.length>=12||[...batch,id].join('.').length>300)batch=[];batch.push(id);a(batch.length<=12&&batch.join('.').length<=300);a.equal(c.decodeItems(batch.join('.'),6).length,batch.length);}}
a(read('tests/regression.js').includes('P6 number/algebra recovery '));a(read('tests/regression.js').includes('P6 all240 bounded bilingual paper/key/PDF'));a(read('tests/regression.js').includes('P6 observed practical '));
console.log('PASS exact current resource/test inventory and bounded new links; all five unit flags resource complete.');

for(const bad of ['1 1/2*x=3','0. 5*x=3','0 .5*x=3','１ １/２*x=3'])a.equal(c.parseAlgebra6(bad.split('=')[0]),null,'separated numeric token rejected');
a(c.scoreAlgebra6('(1+1/2)*x=3',{mode:'equation',variable:'x',expected:'1.5*x=3'}));
