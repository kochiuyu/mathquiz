const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={window:{}};
vm.runInNewContext(read('skill-directory.js'),c);const directory=c.window.MathQuizSkillDirectory;
assert.deepEqual(directory.map(g=>g.grade).join(), '1,2,3,4,5,6');
let count=0;for(const g of directory){const bank=require(path.join(root,`p${g.grade}-skill-data.js`));assert.equal(JSON.stringify(g.skills),JSON.stringify(bank.skills));assert.equal(JSON.stringify(g.units),JSON.stringify(bank.units));count+=Object.keys(g.skills).length;
 const html=read(`p${g.grade}-skill-levels.html`);assert(html.includes('skill-session-ui.js?v=p6-levels-r1'));assert(html.includes('levels-ui.css?v=1'));
}
assert.equal(count,270);assert(read('skill-directory.js').length<50000);assert(!read('skill-directory.js').includes('answer'));
for(const p of ['skill-levels-hub.js','skill-session-ui.js','tests/levels-ui-regression.js'])new vm.Script(read(p));
for(const p of ['skill-levels.html',...directory.map(g=>`p${g.grade}-skill-levels.html`)])for(const m of read(p).matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g))if(!m[1].startsWith('http')&&m[1]!=='./')assert(fs.existsSync(path.join(root,m[1])),p+' missing '+m[1]);
assert(read('skill-session-ui.js').includes("if(!bank||!form||!questions)return"),'invalid route remains explicit');
assert(read('levels-ui.css').includes('@media print'));assert(read('levels-ui.css').includes('@media(prefers-reduced-motion:reduce)'));
console.log('PASS: exact 270-skill navigation metadata, six grade integration points, local assets, JS syntax and print/reduced-motion rules.');

// Keep the browser's grade-change count aligned with the frozen P5 directory.
const p5SkillCount=Object.keys(directory.find(g=>g.grade===5).skills).length;
assert(read('tests/levels-ui-regression.js').includes("d.querySelectorAll('.skill-level-link').length==="+p5SkillCount+"&&d.querySelector('.levels-entry')"),'browser P5 grade-change count matches generated directory');

const p6SkillCount=Object.keys(directory.find(g=>g.grade===6).skills).length;
assert.equal(p6SkillCount,52);
assert(read('tests/levels-ui-regression.js').includes("d.querySelectorAll('.skill-level-link').length==="+p6SkillCount+"&&d.querySelector('.levels-entry')"),'browser P6 grade-change count matches generated directory');
