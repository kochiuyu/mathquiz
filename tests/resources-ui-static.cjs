const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
for(const file of ['resource-browser.js','ui.js','pupil-ui.js','tests/resources-ui-regression.js'])new vm.Script(read(file));
for(const file of ['index.html','coverage.html']){assert(read(file).includes('resource-browser.js?v=1'));assert(read(file).includes('resource-browser.css?v=1'));assert(read(file).includes('ui.js?v=resources-ui-r1'));}
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+read('resources.js')+';this.f=families;this.r=resourceData;',c);
const live=c.f.filter(f=>!f.retired);assert.equal(live.length,187);assert.equal(c.r.units.length,85);assert.equal(c.r.activities.length,59);assert.equal(live.filter(f=>f.grade<=4).length,165);
assert.equal(new Set(c.r.activities.map(a=>a.path)).size,59);
for(const family of live){assert(c.r.units.some(u=>u.code===family.code));assert(family.label.length===2);if(family.grade<=4){const bank=require(path.join(root,`p${family.grade}-skill-data.js`));assert(bank.skills[family.id]);}}
assert(read('ui.js').includes('MathQuizResources.render(app,coverage'));assert(!read('resource-browser.js').includes('localStorage'),'no pupil or preference persistence');
console.log('PASS resource UI: JS syntax, both entry points, 187 skill routes, 165 levelled routes, 59 unique activity paths and 85 unit references.');
