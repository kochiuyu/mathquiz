const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+'\n'+read('resources.js')+'\nglobalThis.data=resourceData;globalThis.fs=families;',c);
const {units,activities}=c.data,live=c.fs.filter(f=>!f.retired);
assert.equal(units.length,85);assert.equal(new Set(units.map(u=>u.code)).size,85);assert.equal(units.filter(u=>u.complete).length,42);
assert.equal(activities.length,47);assert.equal(new Set(activities.map(a=>a.path)).size,47);
for(const u of units){assert(u.title.length===2&&u.title.every(s=>s.trim()));assert.match(u.code,/^[1-6][NMSDFA]\d+$/);assert.equal(u.grade,+u.code[0]);assert(u.source.startsWith('https://www.edb.gov.hk/'));}
for(const f of live)assert(units.some(u=>u.code===f.code&&u.grade===f.grade),'Missing unit for '+f.id);
for(const a of activities){assert(a.title.length===2&&a.title.every(s=>s.trim()));assert(a.units.every(code=>units.some(u=>u.code===code)));assert(fs.existsSync(path.join(root,a.path)));const html=read(a.path);assert(a.units.includes((html.match(/<body[^>]*data-unit="([^"]+)"/)||[])[1]),'Activity unit route '+a.path);assert(html.includes('activity-ui.js')&&html.includes('activity-ui.css'),'Activity shell '+a.path);}
for(const file of ['index.html','coverage.html'])for(const match of read(file).matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g)){const p=match[1];if(!p.startsWith('http')&&!p.startsWith('#'))assert(fs.existsSync(path.join(root,p)),'Missing asset '+p);}
for(const file of ['ui.js','builder-ui.js','session-ui.js','pupil-ui.js','activity-ui.js','tests/ui-regression.js'])new vm.Script(read(file));
for(const file of ['index.html','coverage.html','ui.js','builder-ui.js','pupil-ui.js','activity-ui.js','quiz.js'])assert(!/\?{3,}/.test(read(file)),'Replacement-character placeholder in '+file);
const lum=hex=>{const c=hex.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
for(const [fg,bg]of [['20392f','f7f6ef'],['526454','fffefa'],['215a48','fffefa'],['ffffff','215a48'],['465b4d','eef1e9'],['244f3b','dfebdd'],['8c481d','fffefa']])assert((Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05)>=4.5,'Text contrast '+fg+'/'+bg);
for(const [fg,bg]of [['789080','fffefa'],['a84e1b','f7f6ef']])assert((Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05)>=3,'Control contrast '+fg+'/'+bg);
console.log('PASS UI: 85 unique bilingual units, 47 linked activities, every selectable family mapped, local assets, JS parsing and primary text/control contrast.');

assert(read('tests/ui-regression.js').includes("fetch('../resources.js?regression='+Date.now(),{cache:'no-store'})"),'uncached activity manifest');
assert(read('tests/ui-regression.js').includes('paths.length==='+activities.length),'activity manifest count guard');
