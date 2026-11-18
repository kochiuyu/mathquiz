const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict'),crypto=require('crypto'),cp=require('child_process'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),hash=s=>crypto.createHash('sha256').update(s).digest('hex'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+read('shapes-data6.js')+';globalThis.bank=families;globalThis.added=shapeDataFamilies6;',c);
const baseline=JSON.parse(read('tests/p6-shapes-data-predecessors.json'));let prior=0;for(const pin of baseline){const f=c.bank.find(x=>x.id===pin.id);a(f);a.equal(hash(JSON.stringify({id:f.id,grade:f.grade,code:f.code,label:f.label,count:f.count,retired:f.retired,variants:Array.from({length:f.count},(_,i)=>f.make(i))})),pin.sha256,pin.id);prior+=f.count;}a.equal(prior,3351);a.equal(baseline.length,222);
const close=(x,y)=>a(Math.abs(x-y)<1e-6,`${x} != ${y}`);
function axes(points){const centre=[0,1].map(k=>points.reduce((s,p)=>s+p[k],0)/points.length),dirs=[];for(let j=0;j<points.length;j++)for(const p of [points[j],points[j].map((v,k)=>(v+points[(j+1)%points.length][k])/2)]){let dx=p[0]-centre[0],dy=p[1]-centre[1];if(Math.hypot(dx,dy)<1e-7)continue;let ang=(Math.atan2(dy,dx)+Math.PI)%Math.PI;if(!dirs.some(x=>Math.abs(x-ang)<1e-7))dirs.push(ang);}return dirs.filter(ang=>points.every(p=>{const x=p[0]-centre[0],y=p[1]-centre[1],u=Math.cos(ang),v=Math.sin(ang),dot=x*u+y*v,q=[centre[0]+2*dot*u-x,centre[1]+2*dot*v-y];return points.some(r=>Math.hypot(r[0]-q[0],r[1]-q[1])<1e-6);})).length;}
let total=0,svgs=0;for(const f of c.added){a.equal(f.count,12);const seen=[new Set(),new Set()];for(let i=0;i<12;i++){const q=f.make(i),m=q.shapeData6;a.equal(q.practiceHint.length,2);a(q.practiceHint.every(s=>s.length>10&&!/\d/.test(s)));a.equal(q.answer.length,q.fields?.length||1);a.equal(c.decodeItems(f.id+'-'+i,6).length,1);a.equal(c.decodeItems(f.id+'-'+i,5).length,0);if(q.choices)for(let l=0;l<2;l++)a.equal(new Set(q.choices.map(k=>q.choiceLabels[k][l])).size,q.choices.length);let expected;
 if(m.kind==='axes')expected='A';
 if(m.kind==='reflection'){expected=m.vertical?[m.k+(m.k-m.x),m.y]:[m.x,m.k+(m.k-m.y)];a.deepEqual(Array.from(q.answer),expected);a(expected.every(v=>v>=0&&v<=18));}
 if(m.kind==='meanModel'){a.equal(q.answer[0],'A');a.equal(m.values.reduce((s,v)=>s+v,0)/3,Number(q.choiceLabels.A[0].match(/\d+/)[0]));}
 if(m.kind==='mean')expected=m.values.reduce((s,v)=>s+v,0)/m.values.length;
 if(m.kind==='missingMean')expected=m.mean*4-m.values.reduce((s,v)=>s+v,0);
 if(m.kind==='lineFeature')expected='A';
 if(m.kind==='lineRead')expected=Math.abs(m.values[m.to]-m.values[m.from]);
 if(m.kind==='linePlot'){expected='ABC'[m.points.indexOf(m.values[m.at])];a.equal(m.points.filter(v=>v===m.values[m.at]).length,1);}
 if(m.kind==='pieRead'){const denominator=m.percent?100:360;a.equal((m.total*m.share)%denominator,0);expected=m.total*m.share/denominator;if(!m.percent){a(m.share%30===0||m.share%45===0);a((360-m.share)%30===0||(360-m.share)%45===0);}}
 if(m.kind==='pieCompare')expected=m.known?'A':'B';
 if(m.kind==='chartChoice')expected='ABC'[m.t];
 if(m.kind==='critique'){expected='A';a.notEqual(m.values[1],2*m.values[0]);a.equal(m.values[1]-m.base,2*(m.values[0]-m.base));}
 if(expected!==undefined&&!Array.isArray(expected))a.equal(q.answer[0],expected,f.id+'-'+i);
 for(let l=0;l<2;l++){const svg=q.figure?c.shapeDataSvg6(q.figure,!!l):'';seen[l].add(q.prompt[l]+svg);if(!q.figure)continue;a.equal(q.figure.kind,'shapeData6');a(svg.startsWith('<svg'));a(!/undefined|NaN|Infinity/.test(svg));const fig=q.figure;
 if(fig.mode==='outline'&&fig.type!==5){const points=svg.match(/points="([^"]+)"/)[1].split(' ').map(x=>x.split(',').map(Number));a.equal(axes(points),m.axes);}else if(fig.mode==='outline'){a(svg.includes('data-outline="circle"'));a.equal(m.axes,'infinite');}
 if(fig.mode==='reflection'){const point=svg.match(/data-point="P" cx="([^"]+)" cy="([^"]+)"/);close(+point[1],36+15*m.x);close(+point[2],310-15*m.y);a(svg.includes('data-mirror="'+(m.vertical?'vertical':'horizontal')+'"'));}
 if(fig.mode==='line'){const points=svg.match(/data-series="X" points="([^"]+)"/)[1].split(' ').map(x=>x.split(',').map(Number));a.equal(points.length,4);points.forEach((p,j)=>{close(p[0],60+j*75);close(p[1],280-fig.values[j]/fig.scale*22);});}
 if(fig.mode==='linePlot'){const pts=[...svg.matchAll(/data-proposal="([ABC])" cx="([^"]+)" cy="([^"]+)"/g)];a.equal(pts.length,3);pts.forEach(([_,k,x,y])=>{close(+x,60+fig.at*75);close(+y,280-fig.points['ABC'.indexOf(k)]/fig.scale*22);});}
 if(fig.mode==='pie'){a.equal(fig.parts.reduce((s,v)=>s+v,0),fig.percent?100:360);const paths=[...svg.matchAll(/data-sector="([AB])" d="M([^ ]+) ([^ ]+) L([^ ]+) ([^ ]+) A([^ ]+) ([^ ]+) 0 ([01]) 1 ([^ ]+) ([^ ]+) Z"/g)];a.equal(paths.length,2);let angle=-Math.PI/2;paths.forEach((p,j)=>{const delta=fig.parts[j]/(fig.percent?100:360)*Math.PI*2;close(+p[2],180);close(+p[3],165);close(+p[4],180+100*Math.cos(angle));close(+p[5],165+100*Math.sin(angle));close(+p[6],100);close(+p[7],100);a.equal(+p[8],delta>Math.PI?1:0);angle+=delta;close(+p[9],180+100*Math.cos(angle));close(+p[10],165+100*Math.sin(angle));});close(angle,3*Math.PI/2);}
 if(['bars','truncated'].includes(fig.mode)){const bars=[...svg.matchAll(/data-bar="(\d+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"/g)],base=fig.mode==='truncated'?fig.base:0,step=fig.mode==='truncated'?1:Math.max(1,Math.ceil(Math.max(...fig.values)/10));a.equal(bars.length,fig.values.length);bars.forEach((p,j)=>{close(+p[3],280-(fig.values[j]-base)/step*20);close(+p[5],(fig.values[j]-base)/step*20);close(+p[4],35);});}
 svgs++;}total++;}for(const s of seen)a.equal(s.size,12,f.id+' visible contexts');}
a.equal(total,144);a.equal(c.bank.length,271);a.equal(c.bank.reduce((s,f)=>s+f.count,0),4035);
const r=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,''));a.equal(r.units.filter(u=>u.complete).length,85);a.equal(r.activities.length,85);for(const code of ['6S1','6D1','6D2','6D3','6D4','6F1'])a.equal(r.units.find(u=>u.code===code).complete,true);
console.log(`PASS ${total} P6 independent answers, ${svgs} bilingual actual SVG checks, all3351 predecessors frozen; browser verification pending.`);

const quiz=read("quiz.js");
const render={strictP1:false,local:x=>Array.isArray(x)?x[render.language]:x,t:(en,zh)=>render.language?zh:en,points:q=>q.marks||1,figure:()=>'',language:0};vm.createContext(render);vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark(')),render);const cases=[];for(const f of c.added)for(let i=0;i<f.count;i++)for(let l=0;l<2;l++){const q=f.make(i);render.language=l;for(const mode of ['assessment','paper','key'])cases.push({id:f.id+'-'+i,l,mode,html:render.item(q,0,mode!=='assessment',mode==='key'),answer:q.choiceLabels?q.choiceLabels[q.answer[0]][l]:q.answerUnitLabels?q.answerUnitLabels.map((v,j)=>v[l]+": "+q.answer[j]).join("; "):String(q.answer[0]),why:q.why[l],prompt:q.prompt[l],choices:q.choices?.length||0,fields:q.fields?.length||0,labels:q.choiceLabels?Array.from(q.choices,x=>q.choiceLabels[x][l]):[]});}
const py=String.raw`from html.parser import HTMLParser
import json,sys
class P(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.bold=[];self.b=False;self.inputs=[]
 def handle_starttag(self,t,a):
  if t=='b':self.b=True
  if t=='input':self.inputs.append(dict(a))
 def handle_endtag(self,t):
  if t=='b':self.b=False
 def handle_data(self,s):
  self.text.append(s)
  if self.b:self.bold.append(s)
for x in json.load(sys.stdin):
 p=P();p.feed(x['html']);text=''.join(p.text);assert x['prompt'] in text,x['id']
 if x['mode']=='key':assert ''.join(p.bold)==x['answer'] and x['why'] in text,x['id']
 else:
  for label in x['labels']:assert label in text,(x['id'],label)
  if x['mode']=='paper':assert not p.inputs
  else:assert len(p.inputs)==(x['choices'] or x['fields'])
print('PASS864 actual production HTML parses:144x2languagesx3surfaces; exact prompts/choices/key/why/controls')`;
const result=cp.spawnSync('python3',['-c',py],{input:JSON.stringify(cases),encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);console.log(result.stdout.trim());
