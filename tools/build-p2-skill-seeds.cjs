// Freeze twelve representative, released contexts per skill. No core payload edits.
const fs=require('fs'),vm=require('vm'),path=require('path'),root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const c={URLSearchParams,location:{search:''}};vm.createContext(c);
vm.runInContext(read('questions.js')+read('builder.js')+';globalThis.bank=families;'+read('resources.js')+';globalThis.units=resourceData.units;',c);
const source=read('quiz.js');vm.runInContext("let ch=false;const t=(a,b)=>ch?b:a;const local=p=>p[ch?1:0];"+source.slice(source.indexOf('function moneyFigure1'),source.indexOf('function points(q)')),c);
const skills=c.bank.filter(f=>f.grade===2&&!f.retired),seeds=[];
for(const f of skills)for(let i=0;i<12;i++){
 let index=Math.floor(i*f.count/12);
 // Sample the table across zero/one and varied rows, not one diagonal.
 if(f.id==='multfact2a')index=[0,3,11,24,35,48,61,74,87,98,109,120][i];
 if(f.id==='divfact2a')index=[0,1,13,26,38,49,61,73,84,95,108,109][i];
 // Preserve all four base polygons in both solid families before sampling rotations.
 if(f.id==='solidbasename2a')index=[0,1,2,3,4,5,6,7,8,10,12,14][i];
 const q=f.make(index);c.current=q.figure;
 const pictures=q.figure?[false,true].map(zh=>{c.zh=zh;return vm.runInContext('ch=zh;figure(current)',c);}):['',''];
 seeds.push({skill:f.id,index,q,pictures});
}
const data={sourceRevision:process.argv[2]||'ee6fef8a911c171627926c9519d396085c88d4d3',skills:Object.fromEntries(skills.map(f=>[f.id,{unit:f.code,label:f.label}])),units:Object.fromEntries(c.units.filter(u=>u.grade===2&&skills.some(f=>f.code===u.code)).map(u=>[u.code,u.title])),seeds};
fs.writeFileSync(path.join(root,'p2-skill-seeds.js'),'/* Generated from released P2 contexts; regenerate with tools/build-p2-skill-seeds.cjs. */\nconst P2SkillSeeds='+JSON.stringify(data)+';\nif(typeof module!=="undefined")module.exports=P2SkillSeeds;\n');
console.log(skills.length+' skills; '+seeds.length+' frozen contexts with bilingual figures');
