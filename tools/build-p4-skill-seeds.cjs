// Freeze twelve representative, released contexts per skill. No core payload edits.
const fs=require('fs'),vm=require('vm'),path=require('path'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);
vm.runInContext(read('questions.js')+read('builder.js')+';globalThis.bank=families;'+read('resources.js')+';globalThis.units=resourceData.units;',c);
const source=read('quiz.js');vm.runInContext("let ch=false;const t=(a,b)=>ch?b:a;const local=p=>p[ch?1:0];"+source.slice(source.indexOf('function moneyFigure1'),source.indexOf('function points(q)')),c);
for(const file of ['directions4.js','dissection4.js','quadrilateral4.js','area4.js','perimeter4.js','decimals4.js','fractions4.js'])vm.runInContext(read(file),c);
const skills=c.bank.filter(f=>f.grade===4&&!f.retired),seeds=[];
for(const f of skills)for(let i=0;i<12;i++){
 let index=f.count===8?i%8:Math.floor(i*f.count/12);
 if(['multproduct4a','decimalplace4a','decimaladdsub4a','fractioncalc4a','divisibility4a'].includes(f.id))index=i+(i%2?12:0);
 const q=JSON.parse(JSON.stringify(f.make(index)));let adaptation=null;
 if(f.id==='compassroute4a'&&i>=8){
  const turn=v=>[-v[1],v[0]];q.figure.north=turn(q.figure.north);q.figure.facing=turn(q.figure.facing);q.figure.roads.forEach(r=>r.vector=turn(r.vector));q.direction4S3.quarterTurn=(q.direction4S3.quarterTurn+1)%4;adaptation='rigid clockwise rotation of source map; compass answer unchanged';
 }
 if((f.id==='areaconcept4a'&&i===3)||(f.id==='perimeterconcept4a'&&i===11)){q.figure.shapes.forEach(s=>s.vertices=s.vertices.map(v=>[-v[1],v[0]]));adaptation='rigid clockwise rotation of shape; lengths and classification unchanged';}
 c.current=q.figure;
 const pictures=q.figure?[false,true].map(zh=>{c.zh=zh;return vm.runInContext('ch=zh;figure(current)',c);}):['',''];
 seeds.push({skill:f.id,index,q,pictures,adaptation});
}
const data={sourceRevision:process.argv[2]||'3a292f639fce3b5424627ea16833340b05a75e54',skills:Object.fromEntries(skills.map(f=>[f.id,{unit:f.code,label:f.label}])),units:Object.fromEntries(c.units.filter(u=>u.grade===4&&skills.some(f=>f.code===u.code)).map(u=>[u.code,u.title])),seeds};
fs.writeFileSync(path.join(root,'p4-skill-seeds.js'),'/* Generated from released P4 contexts; regenerate with tools/build-p4-skill-seeds.cjs. */\nconst P4SkillSeeds='+JSON.stringify(data)+';\nif(typeof module!=="undefined")module.exports=P4SkillSeeds;\n');
console.log(skills.length+' skills; '+seeds.length+' frozen contexts with bilingual figures');
