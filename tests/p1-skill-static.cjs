const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const B=require('../p1-skill-data.js');for(const name of ['number','operations','measures','shapes'])require('../p1-skill-'+name+'.js');require('../p1-level-pictures.js');require('../p1-skill-pictures.js');
const context={URLSearchParams,location:{search:''}};vm.createContext(context);vm.runInContext(read('questions.js')+'\n'+read('builder.js')+'\nglobalThis.catalogue=families;',context);
const core=context.catalogue.filter(f=>f.grade===1&&!f.retired);assert.equal(core.length,38);assert.deepEqual(Object.keys(B.skills).sort(),Array.from(core,f=>f.id).sort());for(const f of core){assert.equal(B.skills[f.id].unit,f.code);assert.equal(JSON.stringify(B.skills[f.id].label),JSON.stringify(f.label));}
assert.equal(B.questions.length,1368);assert.equal(new Set(B.questions.map(q=>q.id)).size,1368);
const sum=a=>a.reduce((x,y)=>x+y,0);
function numeric(q){const m=q.meta,hard=q.level==='difficult',easy=q.level==='easy';switch(q.skill){
 case 'next1':return hard?[m.start+1,m.start+3]:[m.start+3];case 'count20a':return [m.count];case 'parts18a':return [m.total-m.a];case 'otherway1':return easy?[m.total-m.first]:null;
 case 'add1':case 'storyadd1':return [m.a+m.b];case 'pictureadd1':return [m.a,m.b,m.a+m.b];case 'compare100a':return [];
 case 'tensones1a':return [m.t*10+m.o,...(hard?[m.t*10]:[])];case 'countgroups1a':return [sum(q.visual.groups)];case 'sequence100a':return hard?[m.start+m.step,m.start+3*m.step]:[m.start+3*m.step];case 'oddeven100a':return [];
 case 'ordernums100a':return [...m.values].sort((a,b)=>m.ascending?a-b:b-a);case 'numberwords100a':return [m.value,...(hard?[Math.floor(m.value/10)*10]:[])];case 'estimate100a':return [];
 case 'carryadd1a':case 'noborrow1a':return [m.addition?m.a+m.b:m.a-m.b];case 'columnadd1a':case 'columnsub1a':{const result=m.addition?m.a+m.b:m.a-m.b;return [Math.floor(result/10),result%10];}
 case 'checksub1a':return easy?[m.a]:[];case 'threeadd1a':return [...(easy?[]:[m.a+m.b]),m.a+m.b+m.c];case 'groupadd1a':return [m.a+m.b,m.b+m.c,m.a+m.b+m.c];
 case 'group10p1a':{const adjacent=[m.values[0]+m.values[1],m.values[1]+m.values[2]],hits=adjacent.map((n,i)=>n%10===0?i:-1).filter(i=>i>=0);assert.equal(hits.length,1,q.id+' unique whole-ten pair');return [adjacent[hits[0]],sum(m.values),...(hard?[adjacent[1-hits[0]]]:[])];}
 case 'storyadd1a':case 'storysub1a':return [m.addition?m.a+m.b:m.a-m.b];case 'coinvalue1a':case 'priceword1a':case 'coincount1a':return [];
 case 'lengthdirect1a':case 'distancedirect1a':case 'lengthunits1a':case 'distanceunits1a':return hard&&m.units?[m.a,m.b]:[];
 case 'lengthcm1a':case 'distancecm1a':return [m.end-m.start];case 'comparelengthcm1a':case 'comparedistancecm1a':return hard?m.spans.map(x=>x[1]-x[0]):[];
 case 'solidname1a':case 'triangle1':return [];default:throw Error(q.skill);
}}
function optionValues(q){const m=q.meta,hard=q.level==='difficult';switch(q.skill){
 case 'compare100a':return [Math.max(m.a,m.b)];case 'oddeven100a':return [m.value%2?'odd':'even'];
 case 'estimate100a':{const d=m.options.map(n=>Math.abs(n-m.count)),min=Math.min(...d);assert.equal(d.filter(x=>x===min).length,1);return [m.options[d.indexOf(min)]];}
 case 'checksub1a':return hard?[m.a-m.b]:[];case 'group10p1a':return [m.values[0]+m.values[1]===Math.round((m.values[0]+m.values[1])/10)*10?0:1];case 'storyadd1a':case 'storysub1a':return hard?[m.addition?'+':'−']:[];
 case 'coinvalue1a':case 'priceword1a':return [m.value];case 'coincount1a':return [sum(m.coins)];
 case 'lengthdirect1a':case 'distancedirect1a':case 'lengthunits1a':case 'distanceunits1a':return [m.target==='longer'?(m.a>m.b?0:1):(m.a<m.b?0:1)];
 case 'comparelengthcm1a':case 'comparedistancecm1a':return [m.spans[0][1]-m.spans[0][0]>m.spans[1][1]-m.spans[1][0]?0:1];
 case 'solidname1a':return [m.shape];case 'triangle1':return [q.visual.kinds.indexOf('triangle')];default:return [];
}}
let pairTrials=0;
for(const q of B.questions){
 for(const p of [q.prompt,q.why])assert(p.length===2&&p.every(x=>typeof x==='string'&&x.length>0));assert(q.fields.length>0);assert.equal(q.unit,B.skills[q.skill].unit);
 const expected=numeric(q);if(expected!==null)assert.deepEqual(q.fields.filter(f=>!f.options).map(f=>+f.answer),expected,q.id+' numeric oracle');
 assert.deepEqual(q.fields.filter(f=>f.optionValues).map(f=>f.optionValues[+f.answer]),optionValues(q),q.id+' choice oracle');
 for(const f of q.fields){assert(f.label.length===2&&f.label.every(Boolean));assert(B.matches(f,f.answer));assert(!B.matches(f,''));if(f.options){assert(f.options.length>=2);for(const l of [0,1])assert.equal(new Set(f.options.map(o=>o[l])).size,f.options.length,q.id+' unique options');assert(f.options.every(x=>x.length===2&&x.every(Boolean)));if(!f.optionValues)assert.equal(f.optionKeys[+f.answer],'0',q.id+' selected explanation');}else{assert(Number.isInteger(+f.answer));assert(B.matches(f,f.answer+'.0'));assert(B.matches(f,f.answer.replace(/\d/g,d=>String.fromCharCode(d.charCodeAt(0)+0xfee0))));for(const bad of ['-1','1e1','1/2','ten','Infinity'])assert(!B.matches(f,bad));}}
 assert(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id+' correct scoring');
 if(q.rule==='otherway'){const m=q.meta;for(let a=0;a<=10;a++)for(let b=0;b<=10;b++){const accept=a>=1&&a<=9&&b>=1&&b<=9&&a+b===m.total&&[a,b].sort((x,y)=>x-y).join()!==m.shown.slice().sort((x,y)=>x-y).join(),marks=B.assess(q,[String(a),String(b),...q.fields.slice(2).map(f=>f.answer)]);assert.equal(marks[0]&&marks[1],accept,q.id+' alternative '+a+','+b);pairTrials++;}}
 if(q.skill==='checksub1a'&&q.level!=='easy'){const check=q.fields.filter(f=>f.options&&!f.optionValues)[0],trueOptions=check.options.map(o=>{const [a,b,c]=o[0].match(/\d+/g).map(Number);return a+b===c;});assert.equal(trueOptions.filter(Boolean).length,1);assert(trueOptions[+check.answer]);}
 if(['parts18a','pictureadd1','storyadd1','add1'].includes(q.skill)){assert(q.meta.a>=1&&q.meta.a<=9&&q.meta.b>=1&&q.meta.b<=9&&q.meta.a+q.meta.b<=18);if(q.skill==='add1')assert(q.meta.a+q.meta.b<=10);}
 if(q.skill==='otherway1'){assert(q.meta.total<=18);assert(q.meta.shown.every(x=>x>=1&&x<=9));}
 if(q.unit==='1N4'){const m=q.meta;if(m.addition!==undefined){assert(m.a<=99&&m.b<=99);if(m.addition)assert(m.a+m.b<100&&m.a%10+m.b%10>=10);else assert(m.a>=m.b&&m.a%10>=m.b%10);}if(m.c!==undefined)assert(m.a+m.b+m.c<100);}
 if(q.visual?.type==='ruler')assert(q.visual.start>=0&&q.visual.end<=12&&q.visual.end>q.visual.start);
 if(q.meta.spans)assert(q.meta.spans.every(([a,b])=>a>=0&&b>a&&b<=12));
 if(q.meta.coins)assert(q.meta.coins.every(x=>[10,20,50,100,200,500,1000].includes(x))&&sum(q.meta.coins)<=1000);
 if(q.unit==='1M2'&&q.meta.value)assert(q.meta.value>0&&q.meta.value<=1000);
 if(q.visual){for(const lang of ['en','zh']){const html=P1SkillPicture(q.visual,lang);assert(html.length>20&&!/NaN|undefined|Infinity/.test(html),q.id+' visual');}}
}
for(const skill of Object.keys(B.skills))for(const level of Object.keys(B.levels)){
 const all=B.pick(skill,level,'all');assert.equal(all.length,12,skill+' '+level);const keys=[];for(let s=0;s<4;s++){const qs=B.pick(skill,level,String(s));assert.equal(qs.length,3);keys.push(...qs.map(q=>q.id));}assert.equal(new Set(keys).size,12);
 const demand=all.map(q=>JSON.stringify([q.prompt,q.fields,q.visual]));assert.equal(new Set(demand).size,12,skill+' '+level+' duplicate task');
}
for(const f of ['p1-skill-data.js','p1-skill-number.js','p1-skill-operations.js','p1-skill-measures.js','p1-skill-shapes.js','p1-skill-pictures.js','p1-skill-levels.js','ui.js'])new vm.Script(read(f),{filename:f});
console.log(`PASS: all 38 core P1 skills exactly matched; 1368 answer/choice oracles; 114 complete 12-question levels; ${pairTrials} exhaustive alternative-pair trials; stable sets, bilingual metadata, figures and P1 bounds.`);
