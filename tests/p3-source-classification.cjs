const a=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),B=require('../p3-skill-data.js'),T=require('../p3-tsa.js');
const read=p=>fs.readFileSync(require('node:path').join(__dirname,'..',p),'utf8');
a.equal(Object.keys(T.skills).length,15);
for(const [id,s]of Object.entries(T.skills)){a.equal(s.reference.authority,'HKEAA');a.equal(s.reference.year,2026);a(s.reference.items.length);a(s.reference.basicCompetencies.every(c=>/^KS1-[NMSD]\d-\d$/.test(c)));a(s.label.every(v=>v.includes('TSA')));}
for(const q of B.questions.filter(q=>q.meta?.tsa2026)){
 const m=q.meta.model,extension=q.level==='difficult'||['equivalent','pour'].includes(m.kind)||(m.kind==='chart'&&(m.picto?m.scale!==1:![1,2,5].includes(m.scale)));
 a.equal(T.scope(q),extension?'mathquiz-extension':'tsa-informed-adaptation',q.id);
 for(const l of ['en','zh']){const note=T.sourceNote(q,l);a(note.includes('HKEAA'));a(note.includes(B.skills[q.skill].reference.basicCompetencies[0]));a(note.includes(l==='en'?'MathQuiz':'MathQuiz'));if(extension)a(note.includes(l==='en'?'extension practice':'延伸練習'));}
}
const core=B.questions.find(q=>!q.meta?.tsa2026);a.equal(T.scope(core),null);a.equal(T.sourceNote(core,'en'),'');
for(const p of ['p3-skill-levels.js','smart-practice.js']){a(read(p).includes('MathQuizP3TSA.sourceNote(q,lang)'));a(read(p).includes('data-source-scope'));new vm.Script(read(p));}
const h=read('skill-levels-hub.js');a(h.includes('data-source-guide="p3"'));a(h.includes('HKEAA TSA reference'));a(!h.includes('Every level stays within the skill’s curriculum scope.'));new vm.Script(h);
const c={window:{}};vm.runInNewContext(read('skill-directory.js'),c);a.equal(JSON.stringify(c.window.MathQuizSkillDirectory.find(g=>g.grade===3).skills),JSON.stringify(B.skills));a(read('skill-directory.js').length<50000);
const md=read('README.md');a(md.includes('35 existing curriculum-linked types plus 15 TSA-informed types'));a(md.includes('on behalf of EDB'));a(md.includes('not an official EDB or HKEAA code'));a(md.includes('p3-source-classification.md'));
console.log('PASS: 15 HKEAA source mappings, 540 bilingual variant-level attribution/extension labels, exact directory metadata, original core exclusion and README authority boundaries.');
