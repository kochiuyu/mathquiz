/* Candidate activity checks; browser and classroom evidence are separate. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('activities/p3-capacity.html');
new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
for(const lang of ['en','zh']){
 const section=html.split('<section id="'+lang+'"')[1].split('</section>')[0];
 assert.equal((section.match(/data-task="/g)||[]).length,8);
 assert.equal((section.match(/class="sheet"/g)||[]).length,5);
 assert.equal((section.match(/class="work"/g)||[]).length,8);
 assert.equal((section.match(/class="key" hidden/g)||[]).length,1);
 assert(section.includes('lang='+lang+'&amp;p=3&amp;items=cup3a-3'));
 for(const result of [1030,2250,3005])assert(section.includes(String(result)));
 for(const source of ['pmc2017_e.pdf#page=51','EN_KS1_e.pdf#page=59'])assert(section.includes(source));
}
// Independent repeated-portion arithmetic for the three new recording exercises.
for(const [litres,ml,total] of [[1,30,1030],[2,250,2250],[3,5,3005]]){
 let expected=ml;for(let n=0;n<litres;n++)expected+=1000;assert.equal(total,expected);
}
assert(html.includes('1000 mL = 1 L') && html.includes('1000 mL＝1 L'));
const coverage=read('coverage.html');assert(read('resources.js').includes('activities/p3-capacity.html') && coverage.includes('resources.js'));
new vm.Script(coverage.match(/<script>([\s\S]*?)<\/script>/)[1]);
const reg=read('tests/regression.js');assert(/for\(const file of \[([^\]]+)\]\)for\(const language/.exec(reg)[1].includes("'p3-capacity'"));
assert(reg.includes('3M3 capacity · complete bilingual activity'));
console.log('PASS capacity: bilingual structure, eight tasks per language, worked recording arithmetic, hidden keys, source/practice/coverage links and authored regression integration. Browser/printer/classroom checks remain separate.');
