// Exercise the real runner's filtering, failure reporting and empty-run status.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'regression.js'),'utf8');
const rows=vm.runInNewContext('('+source.match(/const expectedFamilies = (\[[\s\S]*?\n  \]);/)[1]+')');
const setup=source.slice(source.indexOf('  const results ='),source.indexOf('  function expectedQuery('));
const finish=source.slice(source.indexOf('  window.regressionResult ='),source.lastIndexOf('})();'));
function context(search){const nodes={};const document={title:'',documentElement:{dataset:{}},getElementById(id){return nodes[id]||(nodes[id]={textContent:'',appendChild(){}});},createElement(){return {};}};const c=vm.createContext({expectedFamilies:rows,URLSearchParams,location:{search},document,window:{}});vm.runInContext(setup,c);return c;}
(async()=>{
  const c=context('?scope=p5');
  assert.equal(rows.filter(f=>f[1]===5).length,53);
  for(const f of rows)assert.equal(vm.runInContext('inScope('+JSON.stringify(f[0]+' · '+f[2]+' released variants')+')',c),f[1]===5,f[0]);
  for(const label of ['Fixed v1 questions','Family catalogue','Released bilingual and response contracts · 3351 variants','P5 equations · twelve balanced whole-number answers','5N1 all60 actual assessment en','5N2 full practice fractionorder5a zh','5N3 all60 bounded bilingual paper/key/PDF'])assert(vm.runInContext('inScope('+JSON.stringify(label)+')',c),label);
  for(const label of ['P1 number names','P4 fractions','5 unrelated text','P50 invalid grade'])assert(!vm.runInContext('inScope('+JSON.stringify(label)+')',c),label);
  for(const search of ['', '?scope=unknown'])assert(vm.runInContext('inScope("P4 fractions")',context(search)),'default remains full suite');
  await vm.runInContext('check("P5 sample",()=>{})',c);
  await vm.runInContext('check("P4 excluded",()=>{throw Error("must not run")})',c);
  await vm.runInContext('check("5N2 failure",()=>{throw Error("intentional failure")})',c);
  await vm.runInContext('(async()=>{'+finish+'})()',c);
  assert.equal(c.window.regressionResult.passed,1);assert.equal(c.window.regressionResult.failed,1);assert.equal(c.window.regressionResult.skipped,1);
  assert.equal(c.window.regressionResult.failures[0].error,'intentional failure');assert.equal(c.document.documentElement.dataset.result,'fail');
  const empty=context('?scope=p5&only=no-match');
  await vm.runInContext('check("P5 sample",()=>{throw Error("must not run")})',empty);
  await vm.runInContext('(async()=>{'+finish+'})()',empty);
  assert.equal(empty.window.regressionResult.passed,0);assert.equal(empty.document.documentElement.dataset.result,'empty');
  const pass=context('?scope=p5&only=equations');
  await vm.runInContext('check("P5 equations",()=>{})',pass);await vm.runInContext('(async()=>{'+finish+'})()',pass);
  assert.equal(pass.document.documentElement.dataset.result,'pass');assert.equal(pass.window.regressionResult.passed,1);
  console.log('PASS runner selection: all53 P5 families/shared contracts, unrelated grades excluded, default full suite, failures retained, filtered empty runs never green.');
})().catch(e=>{console.error(e);process.exitCode=1;});

