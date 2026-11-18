const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),a=require('node:assert/strict'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),B=require('../p6-skill-data.js'),S=require('../p6-skill-seeds.js');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+';this.bank=families;',c);const core=c.bank.filter(f=>f.grade===6&&!f.retired);a.equal(core.length,52);a.deepEqual(Object.keys(B.skills).sort(),Array.from(core,x=>x.id).sort());a(!B.skills.pct1);a.equal(B.questions.length,1872);a.equal(S.seeds.length,624);a.equal(new Set(B.questions.map(q=>q.id)).size,1872);
let parts=0,extras=0,invalid=0;
for(const s of S.seeds){a.equal(s.adaptation,null);a.deepEqual(s.q,JSON.parse(JSON.stringify(core.find(f=>f.id===s.skill).make(s.index))),s.skill+' source fidelity');a.equal(s.pictures.length,2);a(s.pictures.every(x=>!x.includes('NaN')&&!x.includes('undefined')));if(s.q.figure)a(s.pictures.every(x=>x.includes('<svg')&&x.includes('role="img"')));}
for(const skill of Object.keys(B.skills))for(const level of Object.keys(B.levels)){
 const qs=B.pick(skill,level,'all');a.equal(qs.length,12);a.equal(new Set([0,1,2,3].flatMap(n=>B.pick(skill,level,String(n)).map(q=>q.id))).size,12);
 for(const q of qs){a(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),q.id);a(B.assess(q,q.fields.map(()=>'' )).every(x=>!x),q.id+' blanks');a(q.prompt.every(Boolean)&&q.why.every(Boolean));if(level==='difficult'){a(q.fields.length>q.baseFields);extras+=q.fields.length-q.baseFields;for(let j=q.baseFields;j<q.fields.length;j++){const vals=q.fields.map(f=>f.answer);vals[j]=q.fields[j].options?String((+vals[j]+1)%q.fields[j].options.length):'999999999';a(!B.assess(q,vals).every(Boolean),'every extra counts');}}
 if(level==='easy')a(q.prompt[0].includes(q.guide[0])&&q.prompt[1].includes(q.guide[1]));
 for(const f of q.fields){parts++;a(f.label.length===2&&f.label.every(Boolean));a(f.options||f.numberSpec||f.algebra6Spec||f.legacyNumericSpec||f.measureSpec,'explicit per-field response contract');for(const bad of ['','NaN','Infinity','1e3','<script>','window.x','x.constructor','1/0','9'.repeat(150)]){a(!B.matches(f,bad),q.id+' invalid '+bad);invalid++;}if(f.numberSpec?.mode==='fraction'&&f.answer.includes('/')){let[n,d]=f.answer.split('/').map(Number);a(!B.matches(f,`${n*2}/${d*2}`),'lowest terms');}if(f.numberSpec?.mode==='decimal')a(!B.matches(f,f.numberSpec.expected),'decimal field does not accept fraction notation');}
 }
}
a.equal(extras,718);
for(const q of B.pick('equationmodel6a','normal','all')){const s=q.meta.source,parts=s.algebra6.expected.split('=');a(B.assess(q,[parts.reverse().join('=')]).every(Boolean));for(const bad of ['x='+s.numberModel6.solution,String(s.numberModel6.solution),'1 1/2*x=2','alert(1)'])a(!B.assess(q,[bad]).every(Boolean));}
for(const id of ['pct2','mean1','axesym6a','reflectsym6a','meancalc6a'])for(const q of B.pick(id,'normal','all'))for(const f of q.fields)if(!f.options){a(f.legacyNumericSpec);a(B.matches(f,(Number(f.answer)*2)+'/2'),'legacy numeric equivalent');}
for(const q of B.pick('speed6a','normal','all')){a(q.fields[0].measureSpec);a(!B.matches(q.fields[0],q.fields[0].answer+'.0'));a(!B.matches(q.fields[0],(+q.fields[0].answer*2)+'/2'));}
a.deepEqual([...new Set(S.seeds.filter(s=>s.skill==='equationtypes6a').map(s=>s.q.numberModel6.form))],[0,1,2,3,4,5]);
a.deepEqual([...new Set(S.seeds.filter(s=>s.skill==='decdivide6a').map(s=>s.q.numberModel6.combination))],[0,1,2,3]);
for(const f of ['p6-skill-data.js','p6-skill-levels.js','p6-skill-pictures.js','tests/p6-skill-levels-tests.js'])new vm.Script(read(f));
a(read('smart-practice.js').includes("grade===6?['number6.js','algebra6.js']"));a(read('skill-session-ui.js').includes('p([1-6])'));
for(const f of ['p6-skill-levels.html','tests/p6-skill-levels.html'])for(const asset of ['number6.js','algebra6.js','p6-skill-seeds.js','p6-skill-data.js'])a(read(f).includes(asset+'?'));
console.log(`PASS P6 levels:52 skills,624 exact contexts,1872 bilingual tasks,${parts} fields,718 contextual extras,${invalid} malformed probes; representations/subtypes/routes.`);
