// Freeze twelve representative, reviewed contexts per skill. No core payload edits.
const fs=require('fs'),vm=require('vm'),path=require('path'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);
vm.runInContext(read('questions.js')+read('builder.js')+';globalThis.bank=families;'+read('resources.js')+';globalThis.units=resourceData.units;',c);
const source=read('quiz.js');vm.runInContext("let ch=false;const t=(a,b)=>ch?b:a;const local=p=>p[ch?1:0];"+source.slice(source.indexOf('function moneyFigure1'),source.indexOf('function points(q)')),c);
for(const file of ['directions4.js','dissection4.js','quadrilateral4.js','area4.js','perimeter4.js','decimals4.js','fractions4.js','fractions5.js','measures5.js','shapes-data5.js','measures6.js','shapes-data6.js'])vm.runInContext(read(file),c);
const skills=c.bank.filter(f=>f.grade===6&&!f.retired),seeds=[];
for(const f of skills)for(let i=0;i<12;i++){
 const index=f.count===24?[0,1,6,7,8,9,14,15,16,17,22,23][i]:Math.floor(i*f.count/12);
 const q=JSON.parse(JSON.stringify(f.make(index)));const adaptation=null;
 c.current=q.figure;
 const pictures=q.figure?[false,true].map(zh=>{c.zh=zh;return vm.runInContext('ch=zh;figure(current)',c);}):['',''];
 seeds.push({skill:f.id,index,q,pictures,adaptation});
}
const data={sourceRevision:process.argv[2]||'reviewed-P6-all-core-59577b35',skills:Object.fromEntries(skills.map(f=>[f.id,{unit:f.code,label:f.label}])),units:Object.fromEntries(c.units.filter(u=>u.grade===6&&skills.some(f=>f.code===u.code)).map(u=>[u.code,u.title])),seeds};
fs.writeFileSync(path.join(root,'p6-skill-seeds.js'),'/* Generated from reviewed P6 contexts; regenerate with tools/build-p6-skill-seeds.cjs. */\nconst P6SkillSeeds='+JSON.stringify(data)+';\nif(typeof module!=="undefined")module.exports=P6SkillSeeds;\n');
console.log(skills.length+' skills; '+seeds.length+' frozen contexts with bilingual figures');
