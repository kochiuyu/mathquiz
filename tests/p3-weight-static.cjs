const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+'\n'+read('marking.js')+';globalThis.bank=families;',c);
const f=c.bank.find(f=>f.id==='weightgrams3a'),expected=[1030,2250,3005,1000,2005,4090,3600,5010,2999,6125,7050,4500];assert.equal(f.count,12);
for(let i=0;i<12;i++){const q=f.make(i),{kg,g}=q.weight3M5;let sum=g;for(let n=0;n<kg;n++)sum+=1000;assert.equal(q.answer[0],sum);assert.equal(sum,expected[i]);assert.equal(q.fields.length,1);assert.equal(q.marks,1);assert(q.fields[0].every(x=>x==='g'));assert(q.practiceHint.every(Boolean));assert(g>=0&&g<1000&&Number.isInteger(g));assert(kg>=1&&kg<=7);for(const value of [String(sum),sum+'.0',(sum*2)+'/2',String(sum).replace(/[0-9]/g,d=>String.fromCharCode(d.charCodeAt(0)+65248))])assert(c.numericAnswer(value,sum,false));for(const value of ['',sum+' g',sum+'+0','0x10','1e3'])assert(!c.numericAnswer(value,sum,false));}
const html=read('activities/p3-weight.html');new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const language of ['en','zh']){const s=html.split('<section id="'+language+'"')[1].split('</section>')[0];assert.equal((s.match(/data-task=/g)||[]).length,8);assert.equal((s.match(/class="sheet"/g)||[]).length,5);assert(s.includes('class="key" hidden'));for(const token of ['1030','2250','3005','1000','1 kg','weightgrams3a','pmc2017_e.pdf#page=53','EN_KS1_e.pdf#page=62'])assert(s.includes(token));}
console.log('PASS Weight12variants: explicit/repeated-addition oracles, g labels, numeric accepted/rejected forms, bilingual eight-task/five-sheet activity and hidden keys. Browser/practical validation separate.');

// Exercise the actual regression prompt guard with matching and deliberately misordered fixtures.
const runtimeMap=vm.runInNewContext('('+read('quiz.js').match(/samples=(\{[^;]+?\}),variants=/)[1]+')');
const fixtureMap=vm.runInNewContext('('+read('tests/regression.js').match(/const samples=(\{[^;]+?\});/)[1]+')');
const guard=read('tests/regression.js').split('\n').find(line=>line.includes("if(['parallelpairs3a','write24hour3a','read24hour3a','weightgrams3a'].includes(id))assert(pr.querySelector"));
assert(guard,'actual browser prompt guard missing');
let rejected=0;
for(const id of ['write24hour3a','read24hour3a','weightgrams3a']){
 const expected=id==='weightgrams3a'?[0,2,3,8]:id==='write24hour3a'?[0,1,5,6,7,11]:[0,2,5,6,10,11];
 assert.deepEqual(Array.from(runtimeMap[id]),expected);assert.deepEqual(Array.from(fixtureMap[id]),expected);
 const family=c.bank.find(x=>x.id===id);
 for(const l of [0,1])for(let k=0;k<expected.length;k++){
  const variant=expected[k],item=family.make(variant),run=shown=>vm.runInNewContext(guard,{id,variant,item,l,assert,pr:{querySelector:()=>({textContent:shown})}});
  run(item.prompt[l]);
  assert.throws(()=>run(family.make(expected[(k+1)%expected.length]).prompt[l]),/Practice sample prompt/);rejected++;
 }
}
console.log('PASS exact runtime/test sample maps and actual browser guard: '+rejected+' misordered bilingual fixtures rejected.');
