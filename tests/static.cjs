/* Zero-dependency pre-publication gate. Browser/layout/PDF checks are separate. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const assert=(ok,message)=>{if(!ok)throw new Error(message);};
const stable=x=>Array.isArray(x)?'['+x.map(stable).join(',')+']':x&&typeof x==='object'?'{'+Object.keys(x).sort().map(k=>JSON.stringify(k)+':'+stable(x[k])).join(',')+'}':JSON.stringify(x);
const context={URLSearchParams,location:{search:''}};
vm.createContext(context);
vm.runInContext(read('questions.js')+'\n'+read('builder.js')+'\n'+read('marking.js')+'\nglobalThis.testFamilies=families;',context);
const families=context.testFamilies;
const fixtures=vm.runInNewContext(read('tests/regression.js').match(/const expectedFamilies = (\[[\s\S]*?\n  \]);/)[1]);
const contractsOnly=process.argv.includes('--contracts-only');
assert(new Set(families.map(f=>f.id)).size===families.length,'duplicate family ID');
if(!contractsOnly)assert(fixtures.length===families.length,'fixture catalogue does not match current families');
const legacyP2=new Set(['place3a','groups2a','share2a','pict2a']);
let count=0;
for(const family of families){
  const fixture=fixtures.find(([id])=>id===family.id),variants=[];
  assert(Number.isInteger(family.count)&&family.count>0,'invalid family count '+family.id);
  assert(family.label?.length===2&&family.label.every(s=>typeof s==='string'&&s.trim()),'family labels '+family.id);
  for(let i=0;i<family.count;i++){
    const id=family.id+'-'+i,q=family.make(i),decoded=context.decodeItems(id,family.grade);
    assert(q.prompt?.length===2&&q.prompt.every(s=>typeof s==='string'&&s.trim()),'prompt '+id);
    assert(q.why?.length===2&&q.why.every(s=>typeof s==='string'&&s.trim()),'worked answer '+id);
    assert(Array.isArray(q.answer)&&q.answer.length&&q.answer.every(v=>typeof v==='number'?Number.isFinite(v):typeof v==='string'&&v.trim()),'answer '+id);
    if(q.fields){
      assert(q.fields.length===q.answer.length&&q.fields.every(p=>p.length===2&&p.every(s=>typeof s==='string')),'field structure '+id);
      if(family.grade===2&&!legacyP2.has(family.id)){
        assert(q.fields.every(p=>p.every(s=>s.trim())),'unlabelled P2 input '+id);
        assert((q.marks??1)===q.fields.length,'P2 per-field mark total '+id);
      }
    }
    if(q.choices){
      assert(new Set(q.choices).size===q.choices.length&&q.answer.every(a=>q.choices.includes(a)),'choices '+id);
      if(q.choiceLabels)assert(q.choices.every(c=>q.choiceLabels[c]?.length===2&&q.choiceLabels[c].every(s=>typeof s==='string'&&s.trim())),'choice labels '+id);
    }
    assert(decoded.length===1&&decoded[0].id===id&&decoded[0].code===family.code&&stable(decoded[0].answer)===stable(q.answer),'stable link '+id);
    variants.push({id,grade:family.grade,code:family.code,question:q});count++;
  }
  for(const suffix of [String(family.count),'00','-1','1e2','0.0','Infinity','9007199254740993'])assert(context.decodeItems(family.id+'-'+suffix,family.grade).length===0,'invalid index accepted '+family.id+'-'+suffix);
  const fullLink=Array.from({length:Math.min(12,family.count)},(_,i)=>family.id+'-'+(family.count-1-i)).join('.');
  assert(context.decodeItems(fullLink,family.grade).length===Math.min(12,family.count),'maximum-size family link rejected '+family.id);
  assert(context.decodeItems(family.id+'-0.'+family.id+'-0',family.grade).length===0,'duplicate link item accepted');
  assert(context.decodeItems(family.id+'-0',family.grade===1?2:1).length===0,'wrong grade accepted');
  if(!contractsOnly){
    assert(fixture&&fixture[1]===family.grade&&fixture[2]===family.count,'fixture metadata '+family.id);
    const digest=crypto.createHash('sha256').update(stable(variants)).digest('hex');
    assert(digest===fixture[3],'payload digest changed '+family.id);
  }
}
assert(context.numericAnswer('８４８/２',424,false),'P2 numeric alias changed');
assert(!context.numericAnswer('',0,false),'blank numeric answer accepted');
console.log(`PASS ${families.length} families / ${count} variants: bilingual/schema/mark/choice contracts, all stable-link round trips and malformed/bounds checks${contractsOnly?' (fixture hashes deliberately not checked)':' and all frozen payload hashes'}.`);
