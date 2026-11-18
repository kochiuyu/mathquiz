const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
require('./p1-levels-static.cjs');
const B=require('../p1-level-extension.js');require('../p1-level-measures.js');require('../p1-level-shapes.js');require('../p1-level-pictures.js');
assert.equal(B.questions.length,432);assert.equal(new Set(B.questions.map(q=>q.id)).size,432);assert.equal(Object.keys(B.units).length,12);
const total=a=>a.reduce((x,y)=>x+y,0), money=v=>v%100===0?v/100+' dollars':v<100?v+' cents':Math.floor(v/100)+' dollars and '+v%100+' cents';
const idx=(q,f,text)=>{const o=q.fields[f].options.map(a=>a[0]);assert.equal(o.filter(x=>x===text).length,1,q.id+' unique expected option');return o.indexOf(text);};
const find=(q,f,regex)=>{const o=q.fields[f].options.map(a=>a[0]);const hits=o.map((s,i)=>regex.test(s)?i:-1).filter(i=>i>=0);assert.equal(hits.length,1,q.id);return hits[0];};
const time=(h,half=false)=>half?'half past '+h:h+' o’clock';
function oracle(q){let m=q.meta,v=q.visual;switch(q.kind){
 case 'place':return [m.t*10+m.o];case 'digitvalue':return [m.t*10];case 'hundredcount':return [m.start+2];
 case 'groupcount':return [total(v.groups)];case 'hundredorder':return [...m.vals].sort((a,b)=>b-a);case 'parity':return [m.value%2?0:1];
 case 'repairplace':return [v.t*10+v.o,find(q,1,/tens and ones were swapped/)];
 case 'hundredclues':{const answers=Array.from({length:100},(_,j)=>j+1).filter(n=>n>m.lo&&n<m.lo+4&&n%2===m.lo%2);assert.equal(answers.length,1);return answers;}
 case 'repairgroups':return [total(v.groups),find(q,1,/counted boxes/)];
 case 'guidedadd':case 'carry':return [m.a+m.b];case 'guidedsub':return [m.a-m.b];case 'guidedthree':return [m.a+m.b,m.a+m.b+m.c];
 case 'storychoice':return [m.sub?1:0,m.sub?m.a-m.b:m.a+m.b];case 'columnplace':return [0,m.a+m.b];
 case 'repaircarry':return [m.a+m.b,find(q,1,/Carry one ten/)];case 'subcheck':{const trueOptions=q.fields[1].options.map(([s])=>{const [a,b,c]=s.match(/\d+/g).map(Number);return a+b===c;});assert.equal(trueOptions.filter(Boolean).length,1);return [m.a-m.b,trueOptions.indexOf(true)];}
 case 'choosegroup':assert(m.b+m.c===10&&m.a+m.b!==10);return [1,m.b+m.c,m.a+m.b+m.c];
 case 'longer':return [v.a>v.b?0:1];case 'nearer':return [v.a<v.b?0:1];case 'tilecount':return [v.counts[0]];case 'tilecompare':return [v.counts[0]>v.counts[1]?0:1];
 case 'align':return [find(q,0,/starting ends line up/)];case 'distancepath':return [0];case 'unfairunits':return [find(q,0,/same size unit/)];case 'gaps':return [find(q,0,/touching end to end/)];case 'curvedcord':return [find(q,0,/without stretching/)];
 case 'coinlabel':return [idx(q,0,money(v.coins[0]))];case 'wholeprice':case 'mixedprice':return [idx(q,0,money(v.value))];case 'dollarcount':return [total(v.coins)/100];case 'coincollection':return [idx(q,0,money(total(v.coins)))];
 case 'exchange':{assert(total(m.target)===total(m.source));const group=m.source[0]<=100?[10,20,50,100]:[100,200,500,1000];assert([...m.source,...m.target].every(x=>group.includes(x)));const values=m.options.map(total);assert.equal(values.filter(v=>v===total(m.source)).length,1);return [idx(q,0,m.target.map(money).join(' + '))];}
 case 'completepay':return [idx(q,0,money(m.cost-total(v.coins)))];case 'coinclaim':assert(total(m.a)>total(m.b));assert(m.a.length<m.b.length);return [0,find(q,1,/Compare the values/)];
 case 'repairexchange':{const missing=total(m.source)-total(m.target);const group=m.source[0]<=100?[10,20,50,100]:[100,200,500,1000];assert([...m.source,...m.target,missing].every(x=>group.includes(x)));return [idx(q,0,money(missing))];}
 case 'rulerzero':case 'onecm':case 'ruleroffset':case 'cmdistance':return [v.end-v.start];case 'cmcompare':return [v.spans[0][1]-v.spans[0][0]>v.spans[1][1]-v.spans[1][0]?0:1];
 case 'measuretool':return [find(q,0,/centimetre (tape|ruler) long enough/)];case 'rulerclaim':return [v.end-v.start,find(q,1,/starting mark must also/)];case 'bodyreference':return [find(q,0,/same centimetre unit/)];case 'estimatecheck':return [v.end-v.start,find(q,1,/Keep the original estimate/)];
 case 'clockhour':case 'clockhalf':return [idx(q,0,time(v.hour,v.half))];case 'calendarfacts':return [[7,12,4,9][m.fact]];
 case 'finishtime':return [idx(q,0,time((m.start+m.duration-1)%12+1))];case 'elapsed':return [m.end-m.start];case 'calendarday':return [(new Date(Date.UTC(2026,10,m.date)).getUTCDay()+6)%7];
 case 'clockclaim':return [idx(q,0,time(v.hour,true)),find(q,1,/has passed the earlier/)];case 'finishcompare':return [m.start+m.a,m.a<m.b?0:1];case 'calendarclues':{const days=Array.from({length:30},(_,i)=>i+1).filter(d=>(new Date(Date.UTC(2026,10,d)).getUTCDay()+6)%7===m.weekday);return [days[m.index]];}
 case 'solidname':case 'solidmatch':case 'solidturn':return [v.items[0]];case 'findsolid':return [v.items.indexOf(m.target)];case 'solidsort':return [v.items.findIndex(x=>v.items.filter(y=>x===y).length===1)];case 'solidobject':return [m.shape];
 case 'solidsortrepair':return [v.items[0],find(q,1,/whole solid shape/)];case 'solidview':return [find(q,0,/whole model from other directions/)];case 'solidtrial':return [find(q,0,/Repeat safely/)];
 case 'flatname':case 'flatturn':return [v.items[0]];case 'flatfind':assert.equal(v.items.filter(x=>x===m.target).length,1);return [v.items.indexOf(m.target)];case 'linekind':return [v.curved?1:0];case 'flatsort':return [v.items.findIndex(x=>v.items.filter(y=>x===y).length===1)];case 'joinedshape':return [1];case 'flatclaim':return [v.items[0],find(q,1,/Turning keeps/)];case 'pointline':return [1,find(q,1,/Thickness of the drawing/)];case 'seamclaim':return [4,find(q,1,/joining line is inside/)];
 case 'side':return ['ABC'.indexOf(v.labels[0])];case 'overunder':return [0];case 'between':return ['ABC'.indexOf(v.labels[1])];case 'frontback':return [1];case 'relativeside':return [1];case 'identifyunder':return ['ABC'.indexOf(v.labels[1])];case 'positionrepair':return [idx(q,0,`${v.labels[0]} is left of B.`)];case 'reverserelation':return [idx(q,0,`${v.labels[0]} is behind ${v.labels[1]}.`)];case 'betweenchange':assert(v.labels[2]==='B');return [find(q,0,/now at the right end/)];
 default:throw Error('No independent oracle for '+q.kind);
}}
let graded=0,observed=0,visuals=0;
for(const q of B.questions){
 for(const text of [q.prompt,q.why])assert(text.length===2&&text.every(s=>typeof s==='string'&&s.length>0),q.id);
 if(q.activity){observed++;assert.equal(q.fields.length,0);assert(q.activity.steps.length>=3);assert(q.activity.criteria.length>=3);assert(q.activity.setup.length===2);assert.equal(q.unit,'1F1');continue;}
 graded++;
 if(!['1N1','1N2'].includes(q.unit))assert.deepEqual(q.fields.map(f=>f.answer),oracle(q).map(String),q.id);
 for(const f of q.fields){assert(f.label.length===2);if(f.options){for(const lang of [0,1])assert.equal(new Set(f.options.map(x=>x[lang])).size,f.options.length,q.id+' duplicate option '+lang);assert(+f.answer>=0&&+f.answer<f.options.length);}else{assert(Number.isInteger(+f.answer)&&+f.answer>=0);assert(!B.matches(f,'-1'));assert(!B.matches(f,'Infinity'));}assert(B.matches(f,f.answer));assert(!B.matches(f,''));}
 if(q.unit==='1N3')assert(q.fields.filter(f=>!f.options).every(f=>+f.answer<=100));
 if(q.unit==='1N4'){const m=q.meta;assert(m.a<=99&&m.b<=99);if(/sub/.test(q.kind)||m.sub)assert(m.a%10>=m.b%10&&m.a>=m.b,q.id+' no borrowing');else assert(m.a+m.b+(m.c||0)<100,q.id+' sum below 100');if(/carry/i.test(q.kind))assert(m.a%10+m.b%10>=10);}
 if(q.unit==='1M2'){if(q.visual?.coins)assert(total(q.visual.coins)<=1000);if(q.meta.cost)assert(q.meta.cost<=1000);}
 if(q.visual?.type){for(const lang of ['en','zh']){const html=P1LevelPicture(q.visual,lang);assert(typeof html==='string'&&html.length>20);assert(!/NaN|undefined|Infinity/.test(html),q.id);if(q.visual.type==='ruler')assert(q.visual.start>=0&&q.visual.end<=12&&q.visual.end>q.visual.start);if(q.visual.type==='clock')assert(q.visual.hour>=1&&q.visual.hour<=12);}visuals++;}
}
assert.equal(graded,396);assert.equal(observed,36);
for(const unit of Object.keys(B.units))for(const level of Object.keys(B.levels)){
 const qs=B.pick(unit,level,'all');assert.equal(qs.length,12);assert.equal(new Set(qs.map(x=>x.kind)).size,3);const combined=[];
 for(let set=0;set<4;set++){const subset=B.pick(unit,level,String(set));assert.equal(subset.length,3);assert.equal(new Set(subset.map(x=>x.kind)).size,3);combined.push(...subset.map(x=>x.id));}assert.equal(new Set(combined).size,12);
}
for(const file of ['p1-level-extension.js','p1-level-measures.js','p1-level-shapes.js','p1-level-pictures.js','p1-levels.js','tests/p1-levels-tests.js','ui.js'])new vm.Script(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),{filename:file});
console.log(`PASS: ${graded} independently checked answers; ${observed} teacher-observed investigations; 12 units x 3 levels x 12 tasks; ${visuals} vector/token diagrams; bilingual, scope and set contracts.`);
