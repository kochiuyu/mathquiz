// Freeze twelve representative, released contexts per skill. No core payload edits.
const fs=require('fs'),vm=require('vm'),path=require('path'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);
vm.runInContext(read('questions.js')+read('builder.js')+';globalThis.bank=families;'+read('resources.js')+';globalThis.units=resourceData.units;',c);
const source=read('quiz.js');vm.runInContext("let ch=false;const t=(a,b)=>ch?b:a;const local=p=>p[ch?1:0];"+source.slice(source.indexOf('function moneyFigure1'),source.indexOf('function points(q)')),c);
const skills=c.bank.filter(f=>f.grade===3&&!f.retired),seeds=[];
for(const f of skills)for(let i=0;i<12;i++){
 let index=Math.floor(i*f.count/12);
 // Cover twelve different operand pairs; alternate displayed factor order.
 if(f.id==='multdigit3a')index=i+(i%2?12:0);
 const q=f.make(index);c.current=q.figure;
 const pictures=q.figure?[false,true].map(zh=>{c.zh=zh;return vm.runInContext('ch=zh;figure(current)',c);}):['',''];
 seeds.push({skill:f.id,index,q,pictures});
}
const data={sourceRevision:process.argv[2]||'07eb49cc38fc01f4ac512dcb6c0d499a5719b560',skills:Object.fromEntries(skills.map(f=>[f.id,{unit:f.code,label:f.label}])),units:Object.fromEntries(c.units.filter(u=>u.grade===3&&skills.some(f=>f.code===u.code)).map(u=>[u.code,u.title])),seeds};
fs.writeFileSync(path.join(root,'p3-skill-seeds.js'),'/* Generated from released P3 contexts; regenerate with tools/build-p3-skill-seeds.cjs. */\nconst P3SkillSeeds='+JSON.stringify(data)+';\nif(typeof module!=="undefined")module.exports=P3SkillSeeds;\n');
console.log(skills.length+' skills; '+seeds.length+' frozen contexts with bilingual figures');
