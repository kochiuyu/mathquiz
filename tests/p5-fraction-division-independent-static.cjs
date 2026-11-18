const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict'),crypto=require('crypto'),cp=require('child_process'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+';globalThis.bank=families.filter(f=>![...algebraFamilies5,...measureFamilies5,...shapeDataFamilies5,...numberFamilies6,...shapeDataFamilies6,...measureFamilies6].some(g=>g.id===f.id));globalThis.newFamilies=fractionDivisionFamilies5;',c);
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const old=c.bank.filter(f=>f.code!=='5N5').map(f=>({id:f.id,grade:f.grade,code:f.code,label:f.label,count:f.count,retired:f.retired,variants:Array.from({length:f.count},(_,i)=>f.make(i))}));a.equal(old.length,193);a.equal(old.reduce((n,f)=>n+f.count,0),2925);a.equal(hash(JSON.stringify(old)),'007a5c9fdba7a371e0eb8345966b013ade66687c81919ec3f5fa117caf1c4fbb');a.equal(hash(read('marking.js')),'625361f4c2e9e1101eb3ed7e8233cfa06573ed458242a78fe1145947f301ba2e');
function parse(s){const m=s.match(/^(?:(\d+) )?(\d+)(?:\/(\d+))?$/);a(m,'rational '+s);const d=BigInt(m[3]||1);a(d>0n);return[BigInt(m[2])+BigInt(m[1]||0)*d,d];}
function eq(x,y){return x[0]*y[1]===y[0]*x[1];}function add(x,y){return[x[0]*y[1]+y[0]*x[1],x[1]*y[1]];}function sub(x,y){return[x[0]*y[1]-y[0]*x[1],x[1]*y[1]];}function mul(x,y){return[x[0]*y[0],x[1]*y[1]];}function div(x,y){a(y[0]>0n);return[x[0]*y[1],x[1]*y[0]];}
// Independent shunting-yard parser consumes the actual displayed expression, not production metadata/AST.
function evaluate(text){const toks=text.match(/\d+(?: \d+\/\d+|\/\d+)?|[()+−×÷]/g);a.equal(toks.join('').replaceAll(' ',''),text.replaceAll(' ',''));const vals=[],ops=[],priority={'+':1,'−':1,'×':2,'÷':2};let operands=0;const apply=()=>{const op=ops.pop(),y=vals.pop(),x=vals.pop();a(x&&y);vals.push(({'+':add,'−':sub,'×':mul,'÷':div})[op](x,y));a(vals.at(-1)[0]>=0n,'nonnegative intermediate');};for(const t of toks){if(/^\d/.test(t)){vals.push(parse(t));operands++;}else if(t==='(')ops.push(t);else if(t===')'){while(ops.at(-1)!=='('){a(ops.length);apply();}ops.pop();}else{while(ops.length&&ops.at(-1)!=='('&&priority[ops.at(-1)]>=priority[t])apply();ops.push(t);}}while(ops.length)apply();a.equal(vals.length,1);return{value:vals[0],operands,toks};}
let count=0,expressions=0,remainders=0,units=0,whole=0,mixedDiff=0,htmlCases=[];
const renderer={...c,ch:0,mode:'key',esc:x=>String(x??'')};vm.createContext(renderer);let quiz=read('quiz.js');const start=quiz.indexOf('function controls('),end=quiz.indexOf('\nfunction ',start+10);vm.runInContext(quiz.slice(start,end),renderer);
for(const f of c.newFamilies)for(let i=0;i<f.count;i++){
 const q=f.make(i),m=q.fraction5N5;let expected;
 if(['sharing','comparison'].includes(m.kind)){a.equal(m.d>0,true);expected=[BigInt(m.n),BigInt(m.d)];if(m.kind==='comparison'&&m.n>0)a(!eq(expected,[BigInt(m.n),BigInt(m.n+m.d)]),'reference is blue not all');}
 else if(['division','mixed'].includes(m.kind)){const p=evaluate(m.expression);expected=p.value;a.equal(p.operands,m.kind==='mixed'?3:i<16?2:3);a(p.toks.filter(x=>/^\d+ \d+\//.test(x)).length<=1);a(q.prompt.every(t=>t.includes(m.expression)));a(q.why.every(t=>t.includes(m.expression+' = '+q.answer[0])));expressions++;}
 else if(m.kind==='remainder'){const x=parse(m.amount),piece=parse(m.piece);let rem=x,k=0n;while(rem[0]*piece[1]>=piece[0]*rem[1]){rem=sub(rem,piece);k++;a(k<100n);}a(eq(x,add(mul([k,1n],piece),rem)));a(rem[0]>=0n&&rem[0]*piece[1]<piece[0]*rem[1]);expected=m.count?[k,1n]:rem;a.equal(q.fraction4N6Answer.mode,m.count?'whole':'general');if(m.count)whole++;remainders++;}
 else {a.equal(m.kind,'unitary');const quantity=parse(m.quantity),total=parse(m.total),wanted=parse(m.wanted),rate=div(total,quantity);expected=mul(rate,wanted);a(eq(mul(rate,quantity),total));a(eq(mul(expected,quantity),mul(total,wanted)));if(!m.continuous)a.equal(quantity[1],1n);a(q.prompt[0].includes('constant price'));units++;}
 a(eq(parse(q.answer[0]),expected),f.id+'-'+i);a.equal(q.marks,1);a.equal(c.decodeItems(f.id+'-'+i,5).length,1);a.equal(c.decodeItems(f.id+'-'+i,4).length,0);
 const spec=q.fraction4N6Answer;a(c.scoreFraction4N6(q.answer[0],spec).correct);
 const reduced=parse(q.answer[0]);if(!m.count){const[n,d]=reduced;if(n>d&&n%d)a(c.scoreFraction4N6(n/d+' '+n%d+'/'+d,spec).correct);if(d>1n)a(!c.scoreFraction4N6((n*2n)+'/'+(d*2n),spec).correct);}
 for(const bad of['','1/0','-1/2','1e2','0.5','1+1','1/2kg','9'.repeat(81)])a(!c.scoreFraction4N6(bad,spec).correct);a(c.scoreFraction4N6(q.answer[0].replace(/[0-9]/g,x=>String.fromCharCode(x.charCodeAt(0)+65248)),spec).correct);
 count++;
}
a.equal(count,84);a.equal(expressions,48);a.equal(remainders,12);a.equal(units,12);a.equal(whole,6);
for(let i=0;i<24;i+=2){const f=c.newFamilies.find(f=>f.id==='fracmixedops5c');if(!eq(parse(f.make(i).answer[0]),parse(f.make(i+1).answer[0])))mixedDiff++;}a(mixedDiff>=6);
// Mutation counterexamples guard grouping, precedence, wrong reciprocal, and cancellation across addition.
a(!eq(evaluate('2 ÷ 1/2 ÷ 3/4').value,evaluate('2 ÷ (1/2 ÷ 3/4)').value));a(!eq(evaluate('1/2 + 3/4 × 2').value,evaluate('(1/2 + 3/4) × 2').value));a(!eq(div(parse('2/3'),parse('3/4')),mul(parse('2/3'),parse('3/4'))));a(!eq(div(add(parse('1/2'),parse('1/3')),parse('1/2')),add([1n,1n],parse('1/3'))));
let props=0;for(let n=0;n<=8;n++)for(let d=1;d<=8;d++)for(let j=1;j<=8;j++)for(let k=1;k<=8;k++){const x=[BigInt(n),BigInt(d)],y=[BigInt(j),BigInt(k)],z=div(x,y);a(eq(mul(z,y),x));a(eq(div(x,[1n,1n]),x));props++;}
vm.runInContext('globalThis.bank=families',c);const data=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,'')),live=c.bank.filter(f=>!f.retired),select=new Set(live.map(f=>f.code)),resources=new Set([...select,...data.activities.flatMap(x=>x.units)]);a.deepEqual([c.bank.length,c.bank.reduce((n,f)=>n+f.count,0),live.length,live.reduce((n,f)=>n+f.count,0),select.size,resources.size,data.activities.length,data.units.filter(u=>u.complete).length],[271,4035,270,4020,77,85,85,85]);a.equal(data.units.find(u=>u.code==='5N5').complete,true);
const cat=quiz.match(/const practiceCatalogue=\[[\s\S]*?\n\];/)[0];for(const name of new Set(cat.match(/render[A-Za-z0-9]+/g)))c[name]=(...args)=>({name,args});vm.runInContext(cat+';globalThis.cat=practiceCatalogue;',c);const helper=vm.runInNewContext('('+read('tests/regression.js').match(/const samples=(\{[^;]+\});/)[1]+')');for(const f of c.newFamilies){a.equal(c.cat.find(x=>x.skill===f.id).render().args[0],f.id);a.equal(helper[f.id].join(','),Array.from({length:f.count},(_,i)=>i).join(','));a(quiz.includes(f.id+':['+helper[f.id].join(',')+']'));}
console.log('PASS5N5:84 exact production answers; independent displayed-expression parser48, remainder12/unitary12, '+props+' cross-product properties;2925predecessors frozen. Browser pending.');
const render={local:x=>Array.isArray(x)?x[render.language]:x,t:(en,zh)=>render.language?zh:en,points:q=>q.marks,figure:()=>'',language:0};vm.createContext(render);vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark(')),render);
const cases=[];for(const f of c.newFamilies)for(let i=0;i<f.count;i++)for(let l=0;l<2;l++){const q=f.make(i);render.language=l;for(const mode of ['assessment','paper','key'])cases.push({id:f.id+'-'+i,l,mode,html:render.item(q,0,mode!=='assessment',mode==='key'),answer:q.answerUnitLabels?Array.from(q.answerUnitLabels,(u,j)=>u[l]+': '+q.answer[j]).join('; '):q.answer[0],why:q.why[l],prompt:q.prompt[l]});}
const oracle=String.raw`
import sys,json
from html.parser import HTMLParser
class V(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.bold=[];self.b=False;self.inputs=[]
 def handle_starttag(self,tag,attrs):
  assert tag in {'fieldset','legend','small','p','b','div','label','input','span'},tag
  if tag=='b':self.b=True
  if tag=='input':self.inputs.append(dict(attrs))
 def handle_endtag(self,tag):
  if tag=='b':self.b=False
 def handle_data(self,s):
  self.text.append(s)
  if self.b:self.bold.append(s)
for x in json.load(sys.stdin):
 v=V();v.feed(x['html']);v.close();assert x['prompt'] in ''.join(v.text),x
 if x['mode']=='key':assert ''.join(v.bold)==x['answer'] and x['why'] in ''.join(v.text),x
 elif x['mode']=='paper':assert not v.inputs,x
 else:assert len(v.inputs)==1 and v.inputs[0]['name']=='q0f0',x
print('PASS504 actual production HTML parses:84 variants x2 languages x3 surfaces; prompt/key/why/input exact.')
`;
const parsed=cp.spawnSync('python3',['-c',oracle],{input:JSON.stringify(cases),encoding:'utf8'});a.equal(parsed.status,0,parsed.stdout+parsed.stderr);console.log(parsed.stdout.trim());
// Exercise the actual bounded paper batching helper and exact decoder under link limits.
const batchSource=read('tests/regression.js').match(/function boundedPaperBatches\(ids\)\{[^\n]+/);a(batchSource,'paper batching helper');
const batches=vm.runInNewContext('('+batchSource[0]+')')(c.newFamilies.flatMap(f=>Array.from({length:f.count},(_,i)=>f.id+'-'+i)));
a.equal(batches.flat().length,84);a.equal(new Set(batches.flat()).size,84);for(const ids of batches){a(ids.length<=12&&ids.join('.').length<=300);a.equal(c.decodeItems(ids.join('.'),5).length,ids.length);}
for(const f of c.newFamilies)for(let i=0;i<f.count;i++){const q=f.make(i),m=q.fraction5N5;if(m.kind==='remainder'&&m.count){a(!c.scoreFraction4N6(String(Number(q.answer[0])+1),q.fraction4N6Answer).correct);a(!c.scoreFraction4N6('1/2',q.fraction4N6Answer).correct);}}
for(const token of ['5N5 all84 bounded','5N5 all84 actual assessment','5N5 full practice','5N5 six-task observed activity'])a(read('tests/regression.js').includes(token));
for(const file of ['index.html','coverage.html','tests/regression.html'])a(read(file).includes('builder.js?v=p6-core-r1'));a(read('pdf-export.js').includes('mathquiz-text.ttf?v=p6-core-r1'));
console.log('PASS84 bounded IDs/12item300char exactdecode; complete allvariant browser obligations authored, not executed.');
