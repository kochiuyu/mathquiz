const a=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const E=require('../smart-engine.js');
let s=E.start();a.equal(s.level,0);a.deepEqual(E.step(s,{type:'next'}),s);
for(let level=0;level<3;level++){for(let i=0;i<3;i++){s=E.step(s,{type:'mark',correct:true});a.equal(s.streak,i+1);a.equal(s.level,level);a.deepEqual(E.step(s,{type:'mark',correct:true}),s,'double submit cannot count');if(i<2||level<2)s=E.step(s,{type:'next'});} }
a.equal(s.phase,'complete');a.equal(s.attempts,9);a.deepEqual(E.step(s,{type:'next'}),s);
s=E.start();for(let i=0;i<2;i++){s=E.step(s,{type:'mark',correct:true});s=E.step(s,{type:'next'});}s=E.step(s,{type:'help'});a.equal(s.streak,0);s=E.step(s,{type:'mark',correct:true});a.equal(s.streak,0);a.equal(s.phase,'review');s=E.step(s,{type:'next'});s=E.step(s,{type:'mark',correct:false});a.equal(s.level,0);a.equal(s.streak,0);
s=E.start();for(let i=0;i<12;i++){s=E.step(s,{type:'mark',correct:false});s=E.step(s,{type:'next'});}a.equal(s.round,1);a.equal(s.index,0);a.equal(s.level,0);
for(const p of ['smart-practice.js','smart-engine.js','resource-browser.js'])new vm.Script(read(p));
const p1=require('../p1-skill-data.js');for(const n of ['number','operations','measures','shapes'])require('../p1-skill-'+n+'.js');
let skills=0,questions=0;for(let g=1;g<=6;g++){const b=g===1?p1:require('../p'+g+'-skill-data.js');for(const skill of Object.keys(b.skills)){skills++;for(const level of E.levels){const qs=b.pick(skill,level,'all');a.equal(qs.length,12);a.equal(new Set(qs.map(q=>q.id)).size,12);for(const q of qs){questions++;a(b.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id);a(q.prompt.length===2&&q.why.length===2);}}}}
a.equal(skills,300);a.equal(questions,10800);a(!read('smart-practice.js').includes('localStorage'));
console.log('PASS Smart practice: progression, repeated submissions, help, errors, exhaustion; all 300 skills / 10800 canonical answers and bilingual prompts; syntax.');


