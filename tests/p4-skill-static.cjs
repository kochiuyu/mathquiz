const fs=require('fs'),vm=require('vm'),path=require('path'),a=require('assert/strict'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),B=require('../p4-skill-data.js'),S=require('../p4-skill-seeds.js');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('questions.js')+read('builder.js')+';this.bank=families;',c);
const core=c.bank.filter(f=>f.grade===4&&!f.retired);a.equal(core.length,51);a.deepEqual(Object.keys(B.skills).sort(),Array.from(core,f=>f.id).sort());a.equal(B.questions.length,1836);
for(const f of core){a.equal(B.skills[f.id].unit,f.code);a.equal(JSON.stringify(B.skills[f.id].label),JSON.stringify(f.label));}
let adapted=0;for(const s of S.seeds){const old=JSON.parse(JSON.stringify(core.find(f=>f.id===s.skill).make(s.index)));
 if(s.adaptation){adapted++;const rot=v=>[-v[1],v[0]];if(s.skill==='compassroute4a'){old.figure.north=rot(old.figure.north);old.figure.facing=rot(old.figure.facing);old.figure.roads.forEach(r=>r.vector=rot(r.vector));old.direction4S3.quarterTurn=(old.direction4S3.quarterTurn+1)%4;}else{a(['areaconcept4a','perimeterconcept4a'].includes(s.skill));old.figure.shapes.forEach(s=>s.vertices=s.vertices.map(rot));}}
 a.deepEqual(s.q,JSON.parse(JSON.stringify(old)),s.skill+' source');
}a.equal(adapted,6);
const factors=n=>Array.from({length:n},(_,i)=>i+1).filter(x=>n%x===0),times=(a,b)=>Array(b).fill(a).reduce((x,y)=>x+y,0);
function extra(q){const m=q.meta.source,id=q.skill;
 if(id==='bar4a'||id==='barcompare4a')return [m.figure.steps.map(n=>times(m.figure.scale,n)).reduce((a,b)=>a+b)];
 if(id==='barapprox4a'){const v=m.bar4D1,rounded=Math.floor(v.n/v.unit+.5)*v.unit;return [Math.max(v.n,rounded)-Math.min(v.n,rounded)];}
 if(id==='barscale4a'){const v=m.bar4D1,step=[10,50,100].find(x=>times(x,v.intervals)>=Math.max(...v.values));return [times(step,v.intervals)];}
 if(id==='dissectproperties4a'||id==='formpolygons4a')return [m.figure.pieces.length];
 if(id==='multproduct4a'||id==='multstory4a'){const v=m.multiplication4N1;return [times(v.a,v.b-v.b%10)];}
 if(id==='multstrategy4a')return [m.multiplication4N1.factors.reduce(times,1)];
 if(id==='dividecolumns4a'||id==='divisionstory4a'||id==='divisibility4a'){const v=m.division4N2;let remainder=v.n;while(remainder>=v.d)remainder-=v.d;return [id==='divisibility4a'?remainder:v.n-remainder];}
 if(id==='multiples4a')return [times(m.factors4N3.n,4)];
 if(id==='allfactors4a'||id==='primeclass4a')return [factors(m.factors4N3.n).length];
 if(id==='factorrelation4a')return [factors(m.factors4N3.n).find(x=>times(x,m.factors4N3.a)===m.factors4N3.n)];
 if(id==='commonmultiples4a'||id==='lcmhcf4a'){const v=m.common4N4;let l=v.a;while(l%v.b)l+=v.a;return [id==='commonmultiples4a'?l*4:l/v.a];}
 if(id==='commonfactors4a'){const v=m.common4N4;return [factors(v.a).filter(x=>v.b%x===0).length];}
 if(id==='permissing4a')return [m.missingSide.length+m.missingSide.width];
 if(id==='factorpair4a')return [m.factorPair.target/m.factorPair.other];
 return [];
}
for(const q of B.questions){const s=q.meta.source,n=q.baseFields;
 if(s.multi){a.equal(n,s.choices.length);s.choices.forEach((k,j)=>a.equal(q.fields[j].options[+q.fields[j].answer][0],s.answer.includes(k)?'Yes':'No'));}
 else if(s.choices)a.equal(JSON.stringify(q.fields[0].options[+q.fields[0].answer]),JSON.stringify(s.choiceLabels?.[s.answer[0]]||[s.answer[0],s.answer[0]]),q.id);
 else a.deepEqual(q.fields.slice(0,n).map(f=>f.answer),s.answer.map(String),q.id);
 a(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id+' canonical');for(const f of q.fields){a(f.label.length===2&&f.label.every(Boolean));a(!B.matches(f,''));if(f.options){for(const l of [0,1])a.equal(new Set(f.options.map(p=>p[l])).size,f.options.length);}else{a(!B.matches(f,'1e2'));a(!B.matches(f,'1+2'));}}
 if(q.level==='easy')a(q.prompt.every((t,l)=>t.includes(q.guide[l])));
 if(q.level==='difficult'){a(q.fields.length>n);a.deepEqual(q.fields.slice(n).filter(f=>!f.options).map(f=>+f.answer),extra(q),q.id+' independent added answers');}
 a(q.visual.pictures.every(p=>!/undefined|NaN/.test(p)));
}
for(const id of Object.keys(B.skills))for(const level of Object.keys(B.levels)){const qs=B.pick(id,level,'all');a.equal(qs.length,12);for(const l of [0,1])a.equal(new Set(qs.map(q=>JSON.stringify([q.prompt[l],q.visual.pictures[l],q.fields.map(f=>[f.label[l],f.options?.map(v=>v[l])])]))).size,12,id+' '+level+' distinct');a.equal(new Set([0,1,2,3].flatMap(i=>B.pick(id,level,''+i).map(q=>q.id))).size,12);}
// Preserve form-specific exact graders, including alternatives and rejected equivalent-but-wrong forms.
const field=id=>B.questions.find(q=>q.id===id).fields[0];
a(B.matches(field('p4s-fractionconvert4a-normal-1'),'02 01 / 03'));a(!B.matches(field('p4s-fractionconvert4a-normal-1'),'7/3'));
a(B.matches(field('p4s-fractionscale4a-normal-1'),'09 / 012'));a(!B.matches(field('p4s-fractionscale4a-normal-1'),'3/4'));
a(B.matches(field('p4s-fractioncalc4a-normal-1'),'5 1/3'));a(!B.matches(field('p4s-fractioncalc4a-normal-1'),'32/6'));
a(B.matches(field('p4s-decimaladdsub4a-normal-1'),'０.３００'));a(!B.matches(field('p4s-decimaladdsub4a-normal-1'),'3/10'));
for(const id of ['multproduct4a','decimalplace4a','decimaladdsub4a','fractioncalc4a','divisibility4a'])a(S.seeds.filter(s=>s.skill===id).some(s=>s.index>=12));
for(const f of ['p4-skill-data.js','p4-skill-seeds.js','p4-skill-levels.js','p4-skill-pictures.js','ui.js','tests/p4-skill-levels-tests.js'])new vm.Script(read(f));
console.log('PASS: 51 exact P4 skills; 1836 response contracts; 612 source contexts (four verified map rotations); 153 distinct twelve-task levels in both languages; added numerical oracles; exact fraction/decimal forms; all source IDs preserved.');
