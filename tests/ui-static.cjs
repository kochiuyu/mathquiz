const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+'\n'+read('resources.js')+'\nglobalThis.data=resourceData;globalThis.fs=families;',c);
const {units,activities}=c.data,live=c.fs.filter(f=>!f.retired);
assert.equal(units.length,85);assert.equal(new Set(units.map(u=>u.code)).size,85);assert.equal(units.filter(u=>u.complete).length,56);
assert.equal(activities.length,69);assert.equal(new Set(activities.map(a=>a.path)).size,69);
for(const u of units){assert(u.title.length===2&&u.title.every(s=>s.trim()));assert.match(u.code,/^[1-6][NMSDFA]\d+$/);assert.equal(u.grade,+u.code[0]);assert(u.source.startsWith('https://www.edb.gov.hk/'));}
for(const f of live)assert(units.some(u=>u.code===f.code&&u.grade===f.grade),'Missing unit for '+f.id);
for(const a of activities){assert(a.title.length===2&&a.title.every(s=>s.trim()));assert(a.units.every(code=>units.some(u=>u.code===code)));assert(fs.existsSync(path.join(root,a.path)));const html=read(a.path);assert(a.units.includes((html.match(/<body[^>]*data-unit="([^"]+)"/)||[])[1]),'Activity unit route '+a.path);assert(html.includes('activity-ui.js')&&html.includes('activity-ui.css'),'Activity shell '+a.path);}
for(const file of ['index.html','coverage.html'])for(const match of read(file).matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g)){const p=match[1];if(!p.startsWith('http')&&!p.startsWith('#'))assert(fs.existsSync(path.join(root,p)),'Missing asset '+p);}
for(const file of ['ui.js','builder-ui.js','session-ui.js','pupil-ui.js','activity-ui.js','tests/ui-regression.js'])new vm.Script(read(file));
for(const file of ['index.html','coverage.html','ui.js','builder-ui.js','pupil-ui.js','activity-ui.js','quiz.js'])assert(!/\?{3,}/.test(read(file)),'Replacement-character placeholder in '+file);
const lum=hex=>{const c=hex.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
for(const [fg,bg]of [['20392f','f7f6ef'],['526454','fffefa'],['215a48','fffefa'],['ffffff','215a48'],['465b4d','eef1e9'],['244f3b','dfebdd'],['8c481d','fffefa']])assert((Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05)>=4.5,'Text contrast '+fg+'/'+bg);
for(const [fg,bg]of [['789080','fffefa'],['a84e1b','f7f6ef']])assert((Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05)>=3,'Control contrast '+fg+'/'+bg);
console.log('PASS UI: 85 unique bilingual units, 69 linked activities, every selectable family mapped, local assets, JS parsing and primary text/control contrast.');

assert(read('tests/ui-regression.js').includes("fetch('../resources.js?regression='+Date.now(),{cache:'no-store'})"),'uncached activity manifest');
assert(read('tests/ui-regression.js').includes('paths.length==='+activities.length),'activity manifest count guard');

assert(fs.readFileSync(path.join(root,"tests/regression.js"),"utf8").includes("doc.querySelectorAll('.badge.complete').length===56"),"main regression completion count matches56 baseline");

const rebaseReg=read("tests/regression.js");assert(rebaseReg.includes('links.length===families.filter(f=>!f.retired).length && new Set(links.map(a=>a.href)).size===families.filter(f=>!f.retired).length'),"rebased exact187 practice links");assert(rebaseReg.includes('doc.querySelectorAll("[data-unit]").length===85 && doc.querySelectorAll("[data-family]").length===families.filter(f=>!f.retired).length'),"rebased exact85/187 coverage");

// Closure metadata is tied to the completed deployed-candidate runs, not a target.
const closureProof=JSON.parse(read('planning/remaining-p4-live-evidence.json'));
assert.equal(closureProof.origin,'https://kochiuyu.github.io/mathquiz/');
assert.equal(closureProof.commit,'b10a7719edb13d935c598c1f01e81f4a24240a0f');
assert.equal(closureProof.deployed_commit_verified,true);
assert.deepEqual(closureProof.curriculum,{passed:549,failed:0,total:549});
assert.deepEqual(closureProof.ui,{passed:187,failed:0,total:187});
for(const code of ['4S1','4S2','4S3','4D1','4F1'])assert.equal(units.find(u=>u.code===code).complete,true,'verified closure '+code);
assert.equal(units.filter(u=>u.grade<=4&&!u.complete).length,0);
const resourceCodes=new Set([...live.map(f=>f.code),...activities.flatMap(a=>a.units)]);
assert.equal(resourceCodes.size,72);assert.equal(units.filter(u=>resourceCodes.has(u.code)&&!u.complete).length,16);

// Independently fix the dynamic browser catalogue expectation to this release.
assert.equal(live.length,221);assert.equal(new Set(live.map(f=>f.code)).size,65);
const catalogue=read('quiz.js').match(/const practiceCatalogue=\[[\s\S]*?\n\];/)[0];
for(const name of new Set(catalogue.match(/render[A-Za-z0-9]+/g)))c[name]=(...args)=>({name,args});
vm.runInContext(catalogue+';globalThis.catalogue=practiceCatalogue;',c);assert.equal(c.catalogue.length,221);
for(const f of live)assert.equal(c.catalogue.filter(x=>x.skill===f.id||(!x.skill&&f.id==='count20a')).length,1,'exact registration '+f.id);

const frozenRows=vm.runInNewContext('('+rebaseReg.match(/const expectedFamilies = (\[[\s\S]*?\n  \]);/)[1]+')');
assert.equal(frozenRows.length,222);assert.equal(frozenRows.reduce((n,f)=>n+f[2],0),3351);
assert(rebaseReg.includes('expectedFamilies.reduce((n,f)=>n+f[2],0)===3351'),'exact frozen fixture total');

// Audit the actual UI browser runner, including catalogue and reset paths.
const uiRunner=read('tests/ui-regression.js');assert.equal((uiRunner.match(/querySelectorAll\('\[data-family\]'\).length===221/g)||[]).length,2);
assert(uiRunner.includes("practiceCatalogue.length')===221"));assert(uiRunner.includes(".size===69,'69 activities'"));
assert(uiRunner.includes("querySelectorAll('.badge.complete').length===56"));
assert(!uiRunner.includes('===174'),'no stale UI family count');

for(const file of ['index.html','coverage.html','tests/regression.html'])assert(read(file).includes('builder.js?v=all-core-p5-r1&amp;fix=p5-practice-hints-r3'),'current reviewed builder cache');
assert(read('tests/regression.html').includes('regression.js?v=p5-upload-scope-r1'));
assert(read('tests/ui-regression.html').includes('ui-regression.js?v=all-core-p5-r1'));
