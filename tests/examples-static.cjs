const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const c={window:{},URLSearchParams,location:{search:'?v=3'}};vm.createContext(c);
vm.runInContext(read('questions.js')+'\n'+read('builder.js')+'\n'+read('examples-data.js')+'\nglobalThis.f=families;',c);
const {packs,link}=c.window.MathQuizExamples,allIds=[];
assert.equal(packs.length,21);assert.equal(new Set(packs.map(p=>p.id)).size,21);
for(let grade=1;grade<=6;grade++)assert.equal(packs.filter(p=>p.grade===grade&&p.items).length,3);
for(const p of packs){
 for(const text of [p.title,p.description])assert(text.length===2&&text.every(s=>s.trim()),p.id+' bilingual copy');
 assert(/^[a-z0-9-]+$/.test(p.id));
 if(p.items){
  assert.equal(p.items.length,6);assert.equal(new Set(p.items).size,6);
  assert(new Set(p.items.map(id=>id.split('-')[0])).size>=4,p.id+' topic variety');
  const qs=c.decodeItems(p.items.join('.'),p.grade);assert.equal(qs.length,6,p.id+' stable IDs');
  assert.deepEqual(Array.from(qs,q=>q.id),Array.from(p.items));
  for(const q of qs){assert(q.prompt.every(Boolean)&&q.why.every(Boolean));assert(!c.f.find(f=>f.id===q.id.split('-')[0]).retired);}
  allIds.push(...p.items);
 }else{assert.equal(c.fixedQuiz(p.grade,p.version).length,p.count);assert.equal(p.count,3);if(p.grade===6)assert.equal(p.version,'4');}
 for(const lang of ['en','zh'])for(const mode of p.items?['quiz','build','paper','key']:['quiz','paper','key']){
  const u=new URL(link(p,lang,mode),'https://example.com/mathquiz/');assert.equal(u.pathname,'/mathquiz/');assert.equal(u.searchParams.get('p'),String(p.grade));assert.equal(u.searchParams.get('lang'),lang);
  if(p.items){assert.equal(u.searchParams.get('v'),'3');assert.equal(u.searchParams.get('items'),p.items.join('.'));assert.equal(u.searchParams.get('view'),mode==='quiz'?null:mode);}
  else assert.equal(u.searchParams.get('sheet'),mode==='quiz'?null:mode);
 }
}
assert.equal(allIds.length,108);assert.equal(new Set(allIds).size,108,'no repeated item across new packs');
for(const file of ['examples-data.js','examples.js','tests/examples-regression.js','ui.js'])new vm.Script(read(file));
for(const m of read('examples.html').matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g))assert(fs.existsSync(path.join(root,m[1])),'local asset '+m[1]);
assert(read('index.html').includes('src="ui.js?v=examples-r1"'));
assert(read('ui.js').includes('examples.html?lang='));
console.log('PASS 21 bilingual examples: 18 six-question packs, 108 distinct existing items, 3 original quizzes, six-grade coverage and 162 exact mode/language URLs.');
