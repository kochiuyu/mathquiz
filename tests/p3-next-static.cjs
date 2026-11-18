const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'builder.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'marking.js'),'utf8')+'\n'+fs.readFileSync(path.join(__dirname,'p3-next-oracles.js'),'utf8')+';globalThis.ff=families;',c);
let n=0;for(const code of ['3N4','3N5','3M1','3M2']){const count=c.runNextP3Oracle(code,c.ff);n+=count;console.log('PASS integrated '+code+' '+count+' independent oracles');}
for(const f of c.ff.filter(f=>!/^(fractionmeaning5b|fractionproduct5b|productstory5b|productestimate5b)$/.test(f.id)&&!f.id.startsWith("fractionorder5")&&!f.id.startsWith("fractionaddsub5")&&!f.id.startsWith("fractionmixed5")&&!f.id.startsWith("fractionstory5")&&!f.id.startsWith("fractionestimate5")&&f.code!=="5N1"&&['3N4','3N5','3M1','3M2'].includes(f.code)&&f.id!=='frac3a'))for(let i=0;i<f.count;i++){const q=f.make(i);if(q.fields)for(const a of q.answer){for(const s of [String(a),a+'.0',(a*2)+'/2',String(a).replace(/[0-9]/g,d=>String.fromCharCode(d.charCodeAt(0)+65248))])assert(c.numericAnswer(s,a,false));for(const s of ['',a+' mm',a+'+0','0x10','1e3',a+'/0'])assert(!c.numericAnswer(s,a,false));}else assert(q.choices.includes(q.answer[0]));}
assert.equal(n,156);console.log('PASS 156 new variants and numeric/choice contracts; browser/print checks remain separate.');
// Immutable metadata must not depend on engine-specific transcendental low bits.
vm.runInContext(`{
 const ids=new Set(['addsub4digit3a','mixedmultiply3a','bracketorder3a','comparetotal3a','fractionset3a','fractionequivalent3a','fractioncompare3a','fractionoperation3a','cmtomm3a','comparekm3a','rulermm3a','startminutes3a','starthours3a']);
 const rows=()=>families.filter(f=>!/^(fractionmeaning5b|fractionproduct5b|productstory5b|productestimate5b)$/.test(f.id)&&!f.id.startsWith("fractionorder5")&&!f.id.startsWith("fractionaddsub5")&&!f.id.startsWith("fractionmixed5")&&!f.id.startsWith("fractionstory5")&&!f.id.startsWith("fractionestimate5")&&f.code!=="5N1"&&ids.has(f.id)).flatMap(f=>Array.from({length:f.count},(_,i)=>({id:f.id+'-'+i,question:f.make(i)})));
 const before=JSON.stringify(rows()),original={sin:Math.sin,cos:Math.cos,sqrt:Math.sqrt};
 try{for(const key of Object.keys(original))Math[key]=()=>{throw Error('new P3 immutable payload called '+key)};
 if(JSON.stringify(rows())!==before)throw Error('new P3 payload differs under poisoned transcendentals');
 }finally{Object.assign(Math,original);}
}`,c);
console.log('PASS all 156 new payloads byte-identical with sin/cos/sqrt poisoned.');
