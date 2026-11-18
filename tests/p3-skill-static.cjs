const fs=require('fs'),vm=require('vm'),path=require('path'),a=require('assert/strict'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),B=require('../p3-skill-data.js'),S=require('../p3-skill-seeds.js');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('questions.js')+read('builder.js')+';this.bank=families;',c);
const core=c.bank.filter(f=>f.grade===3&&!f.retired);a.equal(core.length,35);a.deepEqual(Object.keys(B.skills).sort(),Array.from(core,f=>f.id).sort());a.equal(B.questions.length,1260);
for(const f of core){a.equal(B.skills[f.id].unit,f.code);a.equal(JSON.stringify(B.skills[f.id].label),JSON.stringify(f.label));}
for(const s of S.seeds){a.equal(JSON.stringify(s.q),JSON.stringify(core.find(f=>f.id===s.skill).make(s.index)),s.skill+' source');}
const prod=(x,y)=>Array(y).fill(x).reduce((a,b)=>a+b,0),sum=x=>x.reduce((a,b)=>a+b,0);
function extras(q){const m=q.meta.source,id=q.skill;
 if(m.barChart||m.barComparison3D1){const f=m.figure;return [sum(f.steps.map(n=>prod(f.scale,n)))];}
 if(id==='trianglesides3a'){const ns=m.triangle3S2.sides.slice().sort((a,b)=>a-b);return [ns.slice(0,2).reduce((x,y)=>x+y)];}
 if(m.weight3M5)return [prod(1000,m.weight3M5.kg)];
 if(id==='comparetotal3a'){const v=m.operations3N4;return [v.andyHasMore?v.andy-v.difference:v.andy+v.difference];}
 if(id==='fractionset3a'||id==='fractionoperation3a')return [m.fraction3N5.d-m.fraction3N5.n];
 if(id==='compose5digit3a')return [prod(1000,m.number3N1.digits[1])];
 if(id==='tenthousandsvalue3a')return [Number(String(m.number3N1.n).slice(1))];
 if(id==='sequence5digit3a')return [m.number3N1.start-m.number3N1.step];
 if(id==='parity5digit3a')return [+String(m.number3N1.n).at(-1)];
 if(id==='multdigit3a'){const f=m.multiplication3N2.factors;return [prod(+String(f[0]).at(-1),f[1])];}
 if(id==='multthree3a'){const f=m.multiplication3N2.factors;return [prod(f[1],f[2])];}
 if(id==='dividecolumns3a'||id==='divisionstory3a'){const v=m.division3N3;let rest=v.dividend,n=0;while(rest>=v.divisor){rest-=v.divisor;n++;}return [id==='divisionstory3a'&&v.mode===2?(rest?v.divisor-rest:0):prod(n,v.divisor)];}
 if(id==='frac3a')return [m.fractionBar.parts-m.fractionBar.shaded];
 if(id==='cup3a')return [m.measuringCup.major/(m.measuringCup.major/m.measuringCup.step)];
 return [];
}
for(const q of B.questions){const s=q.meta.source,n=s.choices?1:s.answer.length;
 if(s.choices)a.equal(JSON.stringify(q.fields[0].options[+q.fields[0].answer]),JSON.stringify(s.choiceLabels?.[s.answer[0]]||[s.answer[0],s.answer[0]]),q.id);
 else a.deepEqual(q.fields.slice(0,n).map(f=>+f.answer),s.answer,q.id);
 a(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean));for(const f of q.fields){a(f.label.length===2&&f.label.every(Boolean));a(!B.matches(f,''));if(f.options){a(f.options.every(p=>p.length===2&&p.every(Boolean)));for(const l of [0,1])a.equal(new Set(f.options.map(p=>p[l])).size,f.options.length);}else{a(Number.isInteger(+f.answer)&&+f.answer>=0);a(B.matches(f,f.answer+'.0'));a(!B.matches(f,'1e2'));}}
 if(q.level==='easy')a(q.prompt.every((t,l)=>t.includes(q.guide[l])));
 if(q.level==='difficult'){a(q.fields.length>n);a.deepEqual(q.fields.slice(n).filter(f=>!f.options).map(f=>+f.answer),extras(q),q.id+' extra answers');}
 if(q.unit==='3N1')a(q.fields.filter(f=>!f.options).every(f=>+f.answer<=99999));
 if(q.skill==='frac3a'){a(q.fraction);a.deepEqual(s.answer,[s.figure.shaded,s.figure.parts]);a(s.figure.shaded<=s.figure.parts);}
 if(q.skill==='cup3a')a.equal(+q.fields[0].answer,s.figure.amount);
 if(q.skill==='bar3a')a.equal(+q.fields[0].answer,prod(s.figure.steps[s.figure.target],s.figure.scale));
 if(q.level==='difficult'&&s.timeNotation3M4){const t=s.timeNotation3M4,f=q.fields.at(-1),answer=f.options[+f.answer];if((t.hour===0||t.hour===12)&&t.minute>0)a(answer.every(x=>x.includes(String(t.minute))),'explain minutes after noon/midnight, not just the boundary');}
 a(q.visual.pictures.every(p=>!/undefined|NaN/.test(p)));
}
for(const id of Object.keys(B.skills))for(const level of Object.keys(B.levels)){const qs=B.pick(id,level,'all');a.equal(qs.length,12);for(const l of [0,1])a.equal(new Set(qs.map(q=>JSON.stringify([q.prompt[l],q.visual.pictures[l],q.fields.map(f=>[f.label[l],f.options?.map(v=>v[l])])]))).size,12,id+' '+level+' displayed uniqueness');a.equal(new Set([0,1,2,3].flatMap(i=>B.pick(id,level,''+i).map(q=>q.id))).size,12);}
const mp=S.seeds.filter(s=>s.skill==='multdigit3a');a.equal(new Set(mp.map(s=>s.q.multiplication3N2.factors.join(','))).size,12);a.equal(new Set(mp.map(s=>s.q.multiplication3N2.reverse)).size,2);
for(const f of ['p3-skill-data.js','p3-skill-seeds.js','p3-skill-levels.js','p3-skill-pictures.js','ui.js','tests/p3-skill-levels-tests.js'])new vm.Script(read(f));
console.log('PASS: 35 P3 skill mappings; 1260 field/answer contracts and added numeric oracles; 105 distinct twelve-question levels in both languages; 420 exact source contexts; both multiplication orders; fraction positions and bounds. Run existing P3 independent oracles for source answers.');
