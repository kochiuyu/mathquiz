const fs=require('fs'),vm=require('vm'),path=require('path'),a=require('assert/strict'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const B=require('../p2-skill-data.js'),seeds=require('../p2-skill-seeds.js');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('questions.js')+read('builder.js')+';globalThis.bank=families;',c);
const core=c.bank.filter(f=>f.grade===2&&!f.retired);a.equal(core.length,41);a.deepEqual(Object.keys(B.skills).sort(),Array.from(core,f=>f.id).sort());a.equal(B.questions.length,1476);
for(const f of core){a.equal(B.skills[f.id].unit,f.code);a.equal(JSON.stringify(B.skills[f.id].label),JSON.stringify(f.label));}
for(const s of seeds.seeds){const f=core.find(f=>f.id===s.skill);a.equal(JSON.stringify(s.q),JSON.stringify(f.make(s.index)),'seed provenance '+s.skill);}
const solids=seeds.seeds.filter(s=>s.skill==='solidbasename2a');
a.equal(new Set(solids.map(s=>s.q.solid2S1.kind+':'+s.q.solid2S1.baseSides)).size,8,'all eight solid names represented');
const quad=seeds.seeds.filter(s=>s.skill==='quadproperties2a');
for(const kind of ['squareCriteria','rectangleCriteria'])a.equal(new Set(quad.filter(s=>s.q.quadrilateral2S4.kind===kind).map(s=>s.index%3)).size,3,'all quadrilateral criterion cases');
const ops=seeds.seeds.filter(s=>s.skill==='mixed3steps2a');a.equal(new Set(ops.map(s=>s.q.mixed3.ops.join(''))).size,4,'all four operation patterns');
const sum=x=>x.reduce((s,n)=>s+n,0),product=(x,y)=>sum(Array(y).fill(x));
function values(id,q){
 if(q.arithmetic2N2){const m=q.arithmetic2N2,n=m.nums;if(id==='smartadd2a')return [n[0]+n[2],sum(n)];const first=m.op==='+'?n[0]+n[1]:n[0]-n[1],last=n.length===2?first:m.op==='+'?first+n[2]:first-n[2];return id==='subchain2a'?[first,last]:[last];}
 if(q.mixed3||q.mixedStory3){const m=q.mixed3||q.mixedStory3,n=m.v,f=m.ops[0]==='+'?n[0]+n[1]:n[0]-n[1];return [f,m.ops[1]==='+'?f+n[2]:f-n[2]];}
 if(q.subtract3)return [q.subtract3.a-q.subtract3.b];
 if(q.moneyChange2){const n=q.moneyChange2.paid-q.moneyChange2.cost;return [Math.floor(n/100),n%100];}
 if(q.moneyCount2){const n=sum(q.moneyCount2.pieces.map(x=>x[0]));return [Math.floor(n/100),n%100];}
 if(q.noteExchange2){const m=q.noteExchange2;return [(m.from-sum(m.fixed))/m.to];}
 if(q.length2M1)return [product(100,q.length2M1.metres)+q.length2M1.centimetres];
 if(q.time2M2){const m=q.time2M2;let h=m.startHour,min=m.startMinute;for(let j=0;j<m.minutes;j++){if(++min===60){min=0;h++;}}a.equal(h,m.endHour);a.equal(min,m.endMinute);return id==='timefinish2a'?[h,min]:[(m.endHour-m.startHour)*60+m.endMinute-m.startMinute];}
 if(q.division2N6){const m=q.division2N6;let rest=m.dividend,n=0;while(rest>=m.divisor){rest-=m.divisor;n++;}return id==='divfact2a'?[n]:id==='divcheck2a'?[]:[n,rest];}
 if(q.equalSharing){const m=q.equalSharing;let rest=m.total,n=0;while(rest>=m.children){rest-=m.children;n++;}return [n,rest];}
 if(q.equalGroups){const m=q.equalGroups;return [m.boxes,m.each,product(m.boxes,m.each)];}
 if(q.multiplicationFact)return [product(q.multiplicationFact.a,q.multiplicationFact.b)];
 if(q.multiplicationStory)return [product(q.multiplicationStory.groups,q.multiplicationStory.each)];
 if(q.thousandsValue)return [Math.floor(q.thousandsValue.value/1000)*1000];
 if(q.boundarySequence)return [q.boundarySequence.start+3*q.boundarySequence.step];
 if(q.groupCount4)return [product(q.groupCount4.size,q.groupCount4.groups)];
 if(q.number2N1){const m=q.number2N1;if(m.kind==='digitValue')return [Math.floor(m.n/m.place)%10*m.place];if(m.kind==='sequence')return [m.start+3*m.step];if(m.kind==='order')return [...m.shown].sort((a,b)=>m.direction*(a-b));return [];}
 if(q.placeValue)return [q.figure.hundreds*100+q.figure.tens*10+q.figure.ones];
 if(q.pictogram)return [q.pictogram.counts[q.pictogram.target]];
 return [];
}
function choice(q){
 if(q.priceRead2)return q.choices[q.priceRead2.optionCents.indexOf(q.priceRead2.cents)];
 if(q.parity4||q.number2N1?.kind==='parity')return ((q.parity4?.value??q.number2N1.n)%2)?'odd':'even';
 if(q.compare4||q.number2N1?.kind==='comparison'){const m=q.compare4||q.number2N1;return m.a<m.b?'<':m.a>m.b?'>':'=';}
 if(q.solid2S1){const m=q.solid2S1,name=['triangular','quadrilateral','pentagonal','hexagonal'][m.baseSides-3]+' '+m.kind;return q.choices.find(k=>q.choiceLabels[k][0]===name);}
 if(q.angle2S2){const f=q.figure;if(f.kind==='angleOpening2')return f.angle<90?'acute':f.angle===90?'right':'obtuse';return f.items[0].angle===f.items[1].angle?'same':f.items[0].angle>f.items[1].angle?'A':'B';}
 if(q.direction2S3)return ['N','E','S','W'][(q.figure.relativeIndex+(q.direction2S3.reverse?2:0))%4];
 if(q.quadrilateral2S4){const p=q.figure.points,e=p.map((v,i)=>[p[(i+1)%4][0]-v[0],p[(i+1)%4][1]-v[1]]),l=e.map(v=>Math.hypot(...v));const right=e.every((v,i)=>Math.abs(v[0]*e[(i+1)%4][0]+v[1]*e[(i+1)%4][1])<.001),equal=q.quadrilateral2S4.kind==='squareCriteria'?l.every(x=>Math.abs(x-l[0])<.001):Math.abs(l[0]-l[2])<.001&&Math.abs(l[1]-l[3])<.001;return right&&equal?'yes':'no';}
 if(q.division2N6){const m=q.division2N6;return q.choices.find(k=>{const n=q.choiceLabels[k][0].match(/\d+/g).map(Number);return n[0]===m.divisor&&n[1]===Math.floor(m.dividend/m.divisor)&&n[2]===product(n[0],n[1]);});}
 throw Error('Missing choice oracle');
}
for(const q of B.questions){const src=q.meta.source,base=values(q.skill,src),n=src.choices?1:base.length;a.deepEqual(q.fields.slice(0,n).filter(f=>!f.options).map(f=>+f.answer),base,q.id);if(src.choices){const k=choice(src),expected=src.choiceLabels?.[k]||[k,k];a.equal(JSON.stringify(q.fields[0].options[+q.fields[0].answer]),JSON.stringify(expected),q.id);}
 a(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id);for(const f of q.fields){a(f.label.every(Boolean));a(!B.matches(f,''));if(f.options){a(f.options.every(p=>p.length===2&&p.every(Boolean)));a.equal(new Set(f.options.map(p=>p[0])).size,f.options.length);}else{a(Number.isInteger(+f.answer)&&+f.answer>=0);a(B.matches(f,f.answer+'.0'));a(!B.matches(f,'1e2'));}}
 if(q.level==='difficult'){a(q.fields.length>n);const extra=q.fields.slice(n).filter(f=>!f.options).map(f=>+f.answer);const m=src;let expected=[];
 if(m.solid2S1)expected=[m.figure.sides];else if(q.skill==='divfact2a'||q.skill==='divcheck2a')expected=[m.division2N6.dividend];else if(q.skill==='divremain2a')expected=[m.division2N6.dividend%m.division2N6.divisor===0?m.division2N6.dividend:m.division2N6.dividend-m.division2N6.dividend%m.division2N6.divisor];else if(m.boundarySequence)expected=[m.boundarySequence.start+4*m.boundarySequence.step];else if(q.skill==='sequence999a')expected=[m.number2N1.start+4*m.number2N1.step];else if(q.skill.startsWith('parity'))expected=[(m.parity4?.value??m.number2N1.n)%10];else if(m.groupCount4)expected=[product(m.groupCount4.size,m.groupCount4.groups-1)];else if(m.placeValue)expected=[m.figure.hundreds*100];else if(m.pictogram)expected=[sum(m.pictogram.counts)];a.deepEqual(extra,expected,q.id+' additional numeric oracle');}
 if(q.rule==='factors'){const v=q.fields.map(f=>f.answer);[v[0],v[1]]=[v[1],v[0]];a(B.assess(q,v).every(Boolean));v[0]='99';a(!B.assess(q,v)[0]&&!B.assess(q,v)[1]);}
 if(src.time2M2)a(src.time2M2.minutes>=1&&src.time2M2.minutes<=60);
 if(src.division2N6)a(src.division2N6.divisor>=1&&src.division2N6.divisor<=10&&src.division2N6.dividend<=100&&src.division2N6.quotient<=10);
 if(q.unit==='2N1')a(q.fields.filter(f=>!f.options).every(f=>+f.answer<=999));if(q.unit==='2N4')a(q.fields.filter(f=>!f.options).every(f=>+f.answer<=9999));
 if(src.arithmetic2N2){const m=src.arithmetic2N2;a(m.nums.every(x=>x<=(m.op==='+'?999:99)));a(base.every(x=>x>=0&&x<=999));}
 if(src.mixed3||src.mixedStory3)a(base.every(x=>x>=0&&x<=999));
 if(src.noteExchange2){const m=src.noteExchange2,g=[[1000,2000,5000,10000],[10000,50000,100000]][m.group];a(g.includes(m.from)&&g.includes(m.to));a(m.fixed.every(p=>g.includes(p)));a(Number.isInteger(base[0])&&base[0]>0);}
 a(!q.visual.pictures.some(s=>/undefined|NaN/.test(s)));a(q.prompt.every(Boolean)&&q.why.every(Boolean));
}
for(const id of Object.keys(B.skills))for(const level of Object.keys(B.levels)){const qs=B.pick(id,level,'all');a.equal(qs.length,12);for(const lang of [0,1])a.equal(new Set(qs.map(q=>JSON.stringify([q.prompt[lang],q.fields.map(f=>[f.label[lang],f.options?.map(o=>o[lang])]),q.visual.pictures[lang]]))).size,12,id+' '+level+' '+lang+' displayed uniqueness');a.equal(new Set([0,1,2,3].flatMap(i=>B.pick(id,level,''+i).map(q=>q.id))).size,12);}
for(const f of ['p2-skill-data.js','p2-skill-seeds.js','p2-skill-levels.js','p2-skill-pictures.js','ui.js','tests/p2-skill-levels-tests.js'])new vm.Script(read(f));
console.log('PASS: all 41 P2 skills, 1476 base/additional answer checks, 123 distinct twelve-question levels, factor-order acceptance, bounded arithmetic/money/time, frozen core provenance and syntax.');
