const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict'),crypto=require('crypto'),cp=require('child_process'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),hash=s=>crypto.createHash('sha256').update(s).digest('hex'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+read('algebra5.js')+';globalThis.bank=families;globalThis.added=algebraFamilies5;',c);
const baseline=JSON.parse(read('tests/p5-algebra-predecessors.json'));a.equal(baseline.length,198);a.equal(baseline.reduce((n,x)=>n+x.count,0),3009);
for(const pin of baseline){const f=c.bank.find(f=>f.id===pin.id);a(f);a.equal(hash(JSON.stringify({id:f.id,grade:f.grade,code:f.code,label:f.label,count:f.count,retired:f.retired,variants:Array.from({length:f.count},(_,i)=>f.make(i))})),pin.sha256,pin.id);}
a.equal(hash(read('marking.js')),'625361f4c2e9e1101eb3ed7e8233cfa06573ed458242a78fe1145947f301ba2e');a(!/\beval\s*\(|new Function/.test(read('algebra5.js')));
const quiz=read('quiz.js'),renderer={strictP1:false,language:0,local:x=>Array.isArray(x)?x[renderer.language]:x,t:(en,zh)=>renderer.language?zh:en,points:q=>q.marks,figure:()=>''};vm.createContext(renderer);vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark(')),renderer);
const rows=[],html=[];let count=0;for(const f of c.added)for(let i=0;i<f.count;i++){const q=f.make(i);rows.push({id:f.id+'-'+i,q});count++;a.equal(q.marks,1);a.equal(c.decodeItems(f.id+'-'+i,5).length,1);a.equal(c.decodeItems(f.id+'-'+i,4).length,0);
 if(q.algebra5){a(c.scoreAlgebra5(q.answer[0],q.algebra5),f.id+'-'+i);a(c.scoreAlgebra5(q.answer[0].replace(/\*/g,'×').replace(/\//g,'÷'),q.algebra5));if(q.algebra5.mode==='equation'){a(c.scoreAlgebra5(q.answer[0].split('=').reverse().join('='),q.algebra5));a(!c.scoreAlgebra5('x='+q.algebraModel5.solution,q.algebra5),'direct model not just solved x');}else{a(!c.scoreAlgebra5('x=4',q.algebra5));a(c.scoreAlgebra5('('+q.answer[0]+')+0',q.algebra5));}
 for(const bad of ['','x/0','1/x','x*x','x+y','x**2','Math.random()','x;1','x=1=2','x'.repeat(81),'((((x))))','NaN','x<2'])a(!c.scoreAlgebra5(bad,q.algebra5),'reject '+bad);
 }else if(q.fraction4N6Answer)a(c.scoreFraction4N6(q.answer[0],q.fraction4N6Answer).correct);
 for(let l=0;l<2;l++){renderer.language=l;for(const mode of ['assessment','paper','key']){const answer=q.choiceLabels?q.choiceLabels[q.answer[0]][l]:q.answerUnitLabels?Array.from(q.answerUnitLabels,(u,j)=>u[l]+': '+q.answer[j]).join('; '):q.answer.join(q.multi?', ':' / ');html.push({id:f.id+'-'+i,l,mode,html:renderer.item(q,0,mode!=='assessment',mode==='key'),answer,why:q.why[l],prompt:q.prompt[l],choices:q.choices?Array.from(q.choices):null});}}
}a.equal(count,96);a.equal(c.added.filter(f=>f.code==='5A1').reduce((n,f)=>n+f.count,0),36);a.equal(c.added.filter(f=>f.code==='5A2').reduce((n,f)=>n+f.count,0),60);
// Exact independent Python AST evaluation over displayed operands. No production parser/helper reused.
const oracle=String.raw`
import ast,re,json,sys
from fractions import Fraction as F
from html.parser import HTMLParser
def calc(text,x):
 text=text.replace('×','*').replace('÷','/').replace('−','-');text=re.sub(r'(\d)([xnk])',r'\1*\2',text)
 def walk(n):
  if isinstance(n,ast.Constant) and type(n.value)==int:return F(n.value)
  if isinstance(n,ast.Name) and n.id=='x':return F(x)
  if isinstance(n,ast.UnaryOp) and isinstance(n.op,(ast.USub,ast.UAdd)):return -walk(n.operand) if isinstance(n.op,ast.USub) else walk(n.operand)
  if isinstance(n,ast.BinOp):
   a,b=walk(n.left),walk(n.right)
   if isinstance(n.op,ast.Add):return a+b
   if isinstance(n.op,ast.Sub):return a-b
   if isinstance(n.op,ast.Mult):return a*b
   if isinstance(n.op,ast.Div):return a/b
  raise AssertionError(ast.dump(n))
 return walk(ast.parse(text,mode='eval').body)
obj=json.load(sys.stdin);types=set();word_values=[(1,5),(1,-3),(3,0),(F(1,4),0),(2,7),(3,-2),(F(1,2),2),(2,6),(-1,9),(5,1),(F(1,3),2),(F(1,3),F(-2,3))]
for row in obj['rows']:
 q=row['q'];m=q['algebraModel5'];kind=m['kind'];answer=q['answer'][0]
 if kind=='value':assert calc(m['expr'],m['x'])==F(answer)
 elif kind=='words':
  i=int(row['id'].split('-')[-1]);a,b=word_values[i]
  for x in [0,1,2,5,8,11]:assert calc(answer,x)==a*x+b
 elif kind=='equivalent':
  def matches(s):
   try:return all(calc(s,x)==calc(m['expr'],x) for x in [0,1,2,5,8,11])
   except ZeroDivisionError:return False
  good=[s for s in q['choices'] if matches(s)];assert good==[answer],row
 elif kind in ['solve','context']:
  types.add(m['type']);left,right=m['equation'].split('=');coef=calc(left,1)-calc(left,0);sol=(calc(right,0)-calc(left,0))/coef;assert sol==m['solution'];assert calc(left,sol)==calc(right,sol);assert all(type(m[k])==int and m[k]>=0 for k in ['a','b','c']);assert m['a']>0
  if kind=='solve' or m['stage']!=0:assert F(answer)==sol
  else:
   l,r=answer.split('=')
   for x in [0,2,7]:assert calc(l,x)==calc(left,x) and calc(r,x)==calc(right,x)
 elif kind=='balance':assert len(set(q['choices']))==3 and answer in q['choices']
 else:raise AssertionError(kind)
assert types==set(range(8))
class V(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.bold=[];self.b=False;self.inputs=[]
 def handle_starttag(self,t,attrs):
  assert t in {'fieldset','legend','small','p','b','div','label','input','span'},t
  if t=='b':self.b=True
  if t=='input':self.inputs.append(dict(attrs))
 def handle_endtag(self,t):
  if t=='b':self.b=False
 def handle_data(self,s):
  self.text.append(s)
  if self.b:self.bold.append(s)
for q in obj['html']:
 v=V();v.feed(q['html']);v.close();assert q['prompt'] in ''.join(v.text),q
 if q['mode']=='key':assert ''.join(v.bold)==str(q['answer']) and q['why'] in ''.join(v.text),q
 elif q['mode']=='paper':assert not v.inputs,q
 elif q['choices']:assert [i['value'] for i in v.inputs]==q['choices'],q
 else:assert len(v.inputs)==1 and v.inputs[0]['name']=='q0f0',q
print('PASS96 independent exact AST answers/eight forms and576 actual production HTML parses;3009known predecessor payloads unchanged.')
`;
const result=cp.spawnSync('python3',['-c',oracle],{input:JSON.stringify({rows,html}),encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);console.log(result.stdout.trim());
// Input grammar and equivalence mutations: safe and specifically scoped to the new handlers.
a(c.scoreAlgebra5('-x+9',{mode:'expression',variable:'x',expected:'9-x'}));a(c.scoreAlgebra5('x+x+x',{mode:'expression',variable:'x',expected:'3*x'}));a(!c.scoreAlgebra5('3+x',{mode:'expression',variable:'x',expected:'3*x'}));a(!c.scoreAlgebra5('x=4',{mode:'equation',variable:'x',expected:'2*x+3=11'}));a(!c.scoreAlgebra5('2*x=11',{mode:'equation',variable:'x',expected:'2*x+3=11'}));
for(let k=1;k<=8;k++)for(let b=0;b<=8;b++){a(c.scoreAlgebra5(`${k}x+${b}`,{mode:'expression',variable:'x',expected:`${b}+x*${k}`}));a(!c.scoreAlgebra5(`${k}x+${b+1}`,{mode:'expression',variable:'x',expected:`${b}+x*${k}`}));}
const sample=vm.runInNewContext('('+read('tests/regression.js').match(/const samples=(\{[^;]+\});/)[1]+')');for(const f of c.added){a.equal(sample[f.id].join(','),Array.from({length:f.count},(_,i)=>i).join(','));a(quiz.includes(f.id+':['+sample[f.id].join(',')+']'));}
a(quiz.includes('if(q.algebra5)return Number(scoreAlgebra5(values[0],q.algebra5))'));a(quiz.includes(':algebraResult!==null?[Number(algebraResult)]'));
for(const rel of ['index.html','coverage.html','tests/regression.html'])a(read(rel).includes('algebra5.js?v=all-core-p5-r1'));

a(c.scoreAlgebra5('2(x+3)',{mode:'expression',variable:'x',expected:'2*x+6'}));
const batchFn=read('tests/regression.js').match(/function boundedPaperBatches\(ids\)\{[^\n]+/)[0],batches=vm.runInNewContext(batchFn+';boundedPaperBatches')(c.added.flatMap(f=>Array.from({length:f.count},(_,i)=>f.id+'-'+i)));a.equal(batches.flat().length,96);a.equal(new Set(batches.flat()).size,96);for(const ids of batches){a(ids.length<=12&&ids.join('.').length<=300);a.equal(c.decodeItems(ids.join('.'),5).length,ids.length);}
const data=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,''));a.equal(data.units.find(u=>u.code==='5A1').complete,true);a.equal(data.units.find(u=>u.code==='5A2').complete,true);
for(const token of ['5A1/5A2 all96 bounded','5A1/5A2 all96 actual','5A1/5A2 full practice'])a(read('tests/regression.js').includes(token));
