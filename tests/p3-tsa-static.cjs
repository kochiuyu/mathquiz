const a=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),B=require('../p3-skill-data.js'),T=require('../p3-tsa.js'),qs=B.questions.filter(q=>q.meta?.tsa2026);
const selected=f=>f.options?f.options[+f.answer][0]:Number(f.answer),mod=(n,d)=>(n%d+d)%d;
a.equal(Object.keys(B.skills).length,50);a.equal(B.questions.length,1800);a.equal(qs.length,540);a.equal(new Set(B.questions.map(q=>q.id)).size,1800);
const mass=(m)=>{let v=0;for(let i=0;i<m.tick;i++)v+=m.step;return v;};
function expected(q){const m=q.meta.model,i=q.meta.variant,difficult=q.level==='difficult';let answers=[],extra=[];
 switch(m.kind){
 case 'words':answers=[m.n];extra=[+String(m.n).at(-3)];break;
 case 'between':{const valid=m.values.filter(n=>n>m.low&&n<m.high&&n%2===m.odd);a.equal(valid.length,1);answers=[String(valid[0])];extra=[valid[0]%10];break;}
 case 'equivalent':answers=m.cards.map(([n,d])=>n/d===m.n/m.d?'Yes':'No');extra=[m.n*4];break;
 case 'money':{let cents=m.paid;for(let k=0;k<m.cost;k++)cents--;answers=[Math.floor(cents/100),cents%100];extra=[m.cost%100];break;}
 case 'calendar':{const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],date=new Date(Date.UTC(m.year,m.month,m.day)),weekday=date.getUTCDay();let count=0;for(let d=m.start;d<=m.end;d++)count++;answers=[days[weekday],count];let occurrences=[];for(let d=1;d<=31;d++){const dt=new Date(Date.UTC(m.year,m.month,d));if(dt.getUTCMonth()===m.month&&dt.getUTCDay()===weekday)occurrences.push(d);}extra=[occurrences[1]];break;}
 case 'balance':answers=[m.tilt===0?'The same weight':m.tilt>0?'Lighter':'Heavier'];extra=[m.tilt<0?'Yes':'No'];break;
 case 'dial':answers=[mass(m)];extra=[m.max/10];break;
 case 'pour':{let count=Array.from({length:m.a},()=>m.b).reduce((x,y)=>x+y,0);answers=[Array.from({length:count},()=>m.small).reduce((x,y)=>x+y,0)];extra=[count];break;}
 case 'route':{const [ab,bd,ac,cd]=m.edges,dist={A:0,B:Infinity,C:Infinity,D:Infinity},edges=[['A','B',ab],['B','D',bd],['A','C',ac],['C','D',cd]];for(let k=0;k<4;k++)for(const [u,v,w]of edges){dist[v]=Math.min(dist[v],dist[u]+w);dist[u]=Math.min(dist[u],dist[v]+w);}answers=[ab+bd,dist.D];extra=[ac+cd];break;}
 case 'map':{const dirs=['North','East','South','West'],v=mod(m.rotation+m.target,4);answers=[dirs[v],dirs[mod(v-2,4)]];extra=[dirs[mod(v-3,4)]];break;}
 case 'angles':{const labels=['A','B','C'],ordered=m.shown.map((v,j)=>({v,j})).sort((x,y)=>x.v-y.v);a(ordered[0].v<90&&ordered[2].v>90);answers=ordered.map(x=>labels[x.j]);extra=[labels[m.shown.indexOf(90)]];break;}
 case 'lines':answers=[m.horizontal.slice().sort().join(','),'Yes','Yes'];extra=[2];break;
 case 'sort':{const names={curve:'Curves only',straight:'Straight lines only',mixed:'Straight lines and curves'};answers=m.order.map(k=>names[k]);extra=[m.order.filter(k=>k==='curve').length];break;}
 case 'solids':answers=m.order.map(k=>k[0].toUpperCase()+k.slice(1));extra=[m.order.filter(k=>k==='sphere').length];break;
 case 'chart':{let circles=0,remaining=m.values[m.missing];while(remaining>0){remaining-=m.scale;circles++;}a.equal(remaining,0);answers=[m.picto?circles:m.values[m.missing],'Number of balloons by colour'];extra=[m.values.reduce((x,y)=>x+y,0)];break;}
 default:throw Error(m.kind);
 }return difficult?answers.concat(extra):answers;
}
for(const q of qs){a(B.units[q.unit],q.id+' registered unit');a.deepEqual(q.fields.map(selected),expected(q),q.id+' independently checked answers');a(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id+' marking');a(B.assess(q,q.fields.map(()=>'' )).every(v=>!v));for(const f of q.fields){a(f.label.every(Boolean));if(f.options){for(const l of [0,1])a.equal(new Set(f.options.map(v=>v[l])).size,f.options.length);a(!B.matches(f,String((+f.answer+1)%f.options.length)));}else{a(!B.matches(f,'1e3'));a(!B.matches(f,'-1'));a(!B.matches(f,String(+f.answer+1)));a(B.matches(f,String(f.answer).replace(/[0-9]/g,d=>String.fromCharCode(0xff10+Number(d)))));}}
 for(const l of [0,1]){a(q.prompt[l]&&q.why[l]&&q.guide[l]);a(!/undefined|NaN/.test(q.visual.pictures[l]));if(q.level==='easy')a(q.prompt[l].includes(q.guide[l]));}
}
for(const skill of Object.keys(T.skills))for(const level of Object.keys(B.levels)){const all=B.pick(skill,level,'all');a.equal(all.length,12);a.equal(new Set([0,1,2,3].flatMap(n=>B.pick(skill,level,String(n)).map(q=>q.id))).size,12);for(const l of [0,1])a.equal(new Set(all.map(q=>JSON.stringify([q.prompt[l],q.visual.pictures[l],q.fields.map(f=>[f.label[l],f.options?.map(v=>v[l])])]))).size,12);}
const directoryContext={window:{}};vm.runInNewContext(read('skill-directory.js'),directoryContext);const g=directoryContext.window.MathQuizSkillDirectory.find(g=>g.grade===3);a.equal(JSON.stringify(g.skills),JSON.stringify(B.skills));a.equal(JSON.stringify(g.units),JSON.stringify(B.units));
const baseline=JSON.parse(read('tests/p3-tsa-baseline.json'));const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');a.equal(hash(B.questions.filter(q=>!q.meta?.tsa2026)),baseline.coreQuestionsSHA256,'all 1260 original level tasks preserved');
for(let set=0;set<4;set++){const charts=B.pick('tsachart3a','normal',String(set));a.equal(new Set(charts.map(q=>q.meta.model.picto)).size,2,'short chart sets mix formats');a(new Set(charts.map(q=>q.meta.model.missing)).size>1,'short chart sets vary missing categories');const routes=B.pick('tsaroute3a','normal',String(set));a.equal(new Set(routes.map(q=>{const e=q.meta.model.edges;return Math.sign(e[0]+e[1]-e[2]-e[3]);})).size,3,'each route set includes either shortest route and a tie');}
for(const p of ['p3-tsa.js','p3-skill-data.js','p3-skill-levels.js','smart-practice.js','resource-browser.js'])new vm.Script(read(p));
a(read('p3-skill-levels.html').indexOf('p3-tsa.js')<read('p3-skill-levels.html').indexOf('p3-skill-data.js'));a(read('smart-practice.js').includes("grade===3?['p3-tsa.js']:[]"));
console.log('PASS: 540 new tasks, 45 bilingual levels, 1800 stable IDs, independent numeric/choice oracles, marking, exact directory, and all 1260 predecessor tasks preserved.');
