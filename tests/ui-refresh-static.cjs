const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),a=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={window:{},URLSearchParams,location:{search:''}};
vm.createContext(c);vm.runInContext(read('skill-directory.js')+read('catalogue.js'),c);const C=c.window.MathQuizCatalogue;
a.equal(C.types.length,300);a.equal(C.tsaTypes.length,30);a.equal(C.reviewUnits.length,2);a.equal(new Set(C.types.map(s=>s.id)).size,300);
a.equal(JSON.stringify(C.summary()),JSON.stringify({total:300,core:270,tsa:30}));
for(const [g,total,core]of [[1,38,38],[2,41,41],[3,50,35],[4,51,51],[5,53,53],[6,67,52]])a.equal(JSON.stringify(C.summary(g)),JSON.stringify({total,core,tsa:total-core}));
vm.runInContext(read('builder.js')+read('resources.js')+';this.core=families.filter(f=>!f.retired);this.inventory=resourceData;',c);
a.equal(c.inventory.units.length,85);a.equal(c.inventory.activities.length,85);a.equal(c.inventory.units.filter(u=>u.complete).length,85);a.equal(c.core.length,270);
for(const f of c.core)a.equal(C.types.filter(s=>s.id===f.id&&s.grade===f.grade&&!s.reference).length,1,f.id+' exact curriculum route');
const displayUnits=[...c.inventory.units,...C.reviewUnits];a.equal(new Set(displayUnits.map(u=>u.code)).size,87);
for(const s of C.tsaTypes){a(s.reference.authority==='HKEAA'&&s.reference.items.length);a(displayUnits.some(u=>u.code===s.unit));const bank=require(path.join(root,'p'+s.grade+'-skill-data.js'));a(bank.skills[s.id]);a.equal(bank.pick(s.id,'normal','all').length,12);}
vm.runInContext(read('math-format.js'),c);const parts=c.window.MathQuizNotation.parts;
a.equal(JSON.stringify(parts('Solve (2/3)*(x+1)=5.')),JSON.stringify(['Solve (',{numerator:'2',denominator:'3'},')*(x+1)=5.']));
for(const s of ['2026/11/19','P1/P2','http://example.com','1/0','0 / 3 questions answered'])a.equal(JSON.stringify(parts(s)),JSON.stringify([s]),s+' is not a display fraction');
for(const p of ['catalogue.js','math-format.js','site-ui.js','ui.js','resource-browser.js','activity-ui.js','smart-practice.js','tests/ui-refresh-browser.js'])new vm.Script(read(p),{filename:p});
for(const p of ['index.html','coverage.html','examples.html','skill-levels.html','p1-levels.html','smart-practice.html',...[1,2,3,4,5,6].map(n=>'p'+n+'-skill-levels.html')]){const s=read(p);a(/site-ui\.js\?v=ui-refresh-r[12]/.test(s)&&s.includes('site-ui.css?v=ui-refresh-r1'),p+' shared UI');for(const m of s.matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g))if(!/^(?:http|#)/.test(m[1])&&m[1]!=='./')a(fs.existsSync(path.join(root,m[1])),p+' asset '+m[1]);}
for(const item of c.inventory.activities){const s=read(item.path);a(/activity-ui\.js\?v=ui-refresh-r[12]/.test(s)&&s.includes('site-ui.js?v=ui-refresh-r1'),item.path);for(const section of s.matchAll(/<section id="(?:en|zh)"[^>]*>([\s\S]*?)(?=<div class="key"|<\/section>)/g))a(!/unperformed cutting observations|不可填未作觀察|Include independent\/prompted\/not-observed/.test(section[1]),item.path+' pupil wording');}
a(!read('resource-browser.js').includes('Boolean(state.p||state.unit||query)'),'year choice no longer expands every topic');
console.log('PASS UI refresh: exact 270 curriculum + 30 TSA routes, 85 unchanged official units/activities, two distinct local review groups, notation boundaries, all shared entry points, 85 worksheet integrations and JS syntax.');
