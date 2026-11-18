// Run the actual browser succession assertion without a DOM; mutant cases must fail.
const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'..')),runner=process.argv[3]?path.resolve(process.argv[3]):path.join(root,'tests/regression.js'),source=fs.readFileSync(runner,'utf8'),builder=fs.readFileSync(path.join(root,'builder.js'),'utf8');
const start=source.indexOf('  await check("P6 percentage family succession"'),end=source.indexOf('\n  });',start)+6;a(start>=0&&end>start);const check=source.slice(start,end).replace('await check(', 'check(');
function run(mutation=''){const c={URLSearchParams,location:{search:''},assert:(ok,msg)=>a(ok,msg),stable:JSON.stringify,check:(label,fn)=>fn()};vm.createContext(c);vm.runInContext(builder+';'+mutation,c);vm.runInContext(check,c);}
run();for(const mutation of [
 'families.splice(families.findIndex(f=>f.id==="decdivide6a"),1);',
 'families.push({...families.find(f=>f.id==="decdivide6a"),id:"unreviewed6a"});',
 'families.push(families.find(f=>f.id==="decdivide6a"));',
 'families.find(f=>f.id==="pct1").retired=false;',
 'families.find(f=>f.id==="pct2").retired=true;',
 'families.find(f=>f.id==="pct2").code="6N3";',
 'families.find(f=>f.id==="pct2").make=()=>({answer:["wrong"]});'
])a.throws(()=>run(mutation),'succession mutation must fail: '+mutation);
console.log('PASS actual P6 succession assertion: exact52 reviewed selectable IDs, legacy three retained, pct1 retired, all15 percentage payloads equal;7 mutations rejected.');
