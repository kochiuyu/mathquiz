const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={window:{}};
vm.runInNewContext(read('skill-directory.js'),c);const directory=c.window.MathQuizSkillDirectory;
assert.deepEqual(directory.map(g=>g.grade).join(), '1,2,3,4');
let count=0;for(const g of directory){const bank=require(path.join(root,`p${g.grade}-skill-data.js`));assert.equal(JSON.stringify(g.skills),JSON.stringify(bank.skills));assert.equal(JSON.stringify(g.units),JSON.stringify(bank.units));count+=Object.keys(g.skills).length;
 const html=read(`p${g.grade}-skill-levels.html`);assert(html.includes('skill-session-ui.js?v=1'));assert(html.includes('levels-ui.css?v=1'));
}
assert.equal(count,165);assert(read('skill-directory.js').length<50000);assert(!read('skill-directory.js').includes('answer'));
for(const p of ['skill-levels-hub.js','skill-session-ui.js','tests/levels-ui-regression.js'])new vm.Script(read(p));
for(const p of ['skill-levels.html',...directory.map(g=>`p${g.grade}-skill-levels.html`)])for(const m of read(p).matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g))if(!m[1].startsWith('http')&&m[1]!=='./')assert(fs.existsSync(path.join(root,m[1])),p+' missing '+m[1]);
assert(read('skill-session-ui.js').includes("if(!bank||!form||!questions)return"),'invalid route remains explicit');
assert(read('levels-ui.css').includes('@media print'));assert(read('levels-ui.css').includes('@media(prefers-reduced-motion:reduce)'));
console.log('PASS: exact 165-skill navigation metadata, four grade integration points, local assets, JS syntax and print/reduced-motion rules.');
