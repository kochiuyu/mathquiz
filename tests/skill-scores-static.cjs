/* Skill-bank score records stay on this device, per learner slot. */
const assert=require('assert').strict,fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..');
const src=fs.readFileSync(path.join(root,'skill-scores.js'),'utf8');
assert(!/fetch\(|XMLHttpRequest|sendBeacon|navigator\.sendBeacon/.test(src),'no network');
function mem(seed){
 const m=new Map(Object.entries(seed||{}));
 return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k)};
}
function load(storage,search){
 const s={URL,URLSearchParams,location:{search:search||'',href:'http://local/p1-skill-levels.html'+(search||'')},localStorage:storage,document:{getElementById(){return null;}}};
 s.window=s;s.globalThis=s;
 vm.runInContext(src,vm.createContext(s));
 return s.MathQuizSkillScores;
}
const fox=load(mem(),'?learner=0');
const owlStore=mem();
const owl=load(owlStore,'?learner=1');
assert.equal(fox.key(3,2),'mathquiz-p3-skill-score-v1-2');
assert.equal(fox.slot(),0);
assert.equal(owl.slot(),1);
let saved=owl.record({grade:2,skill:'share2a',level:'easy',set:'0',score:3,total:4});
assert.equal(saved.ok,true);
assert.equal(saved.data.skills.share2a.best.score,3);
saved=owl.record({grade:2,skill:'share2a',level:'normal',set:'1',score:2,total:4});
assert.equal(saved.data.skills.share2a.best.score,3,'lower ratio does not replace the best');
assert.equal(saved.data.skills.share2a.last.score,2);
saved=owl.record({grade:2,skill:'share2a',level:'difficult',set:'all',score:4,total:4});
assert.equal(saved.data.skills.share2a.best.score,4);
assert.equal(owl.read(2,0).data.skills.share2a,undefined,'other slot stays empty');
assert.equal(owl.read(3,1).data.skills.share2a,undefined,'other year stays empty');
const again=load(owlStore,'?learner=1');
assert.equal(again.read(2,1).data.skills.share2a.best.score,4,'reload keeps the best');
const broken=mem({'mathquiz-p1-skill-score-v1-0':'{"version":1,"skills":'});
const fresh=load(broken,'?learner=0');
assert.equal(fresh.read(1,0).ok,false);
assert.equal(fresh.read(1,0).reason,'read');
const replaced=fresh.record({grade:1,skill:'count20a',level:'easy',set:'0',score:1,total:1});
assert.equal(replaced.ok,true);
assert.equal(replaced.replaced,true);
assert.equal(fresh.read(1,0).data.skills.count20a.last.score,1);
const blocked={getItem(){throw Error('off');},setItem(){throw Error('off');},removeItem(){throw Error('off');}};
const off=load(blocked,'');
assert.equal(off.read(4,0).reason,'unavailable');
assert.doesNotThrow(()=>off.record({grade:4,skill:'bar4a',level:'easy',set:'0',score:1,total:2}));
assert.equal(off.record({grade:4,skill:'bar4a',level:'easy',set:'0',score:1,total:2}).ok,false);
assert.equal(fox.record({grade:1,skill:'bad skill',level:'easy',set:'0',score:1,total:1}).reason,'bad');
for(const file of ['p1','p2','p3','p4','p5','p6'].map(n=>n+'-skill-levels.js')){
 const page=fs.readFileSync(path.join(root,file),'utf8');
 assert(page.includes('MathQuizSkillScores.record('),file);
 assert(page.includes('MathQuizSkillScores.paint('),file);
 assert(page.includes('id="skill-score-saved"'),file);
}
for(const file of ['p1','p2','p3','p4','p5','p6'].map(n=>n+'-skill-levels.html').concat(['skill-levels.html'])){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 assert(html.includes('class="mqui-badges"'),file);
 assert(html.includes('href="progress.html"'),file);
 assert(html.includes('My badges'),file);
 assert(html.includes('我的徽章'),file);
}
assert(fs.readFileSync(path.join(root,'progress.html'),'utf8').includes('skill-scores.js'));
assert(fs.readFileSync(path.join(root,'badges-ui.js'),'utf8').includes('Skill practice'));
assert(fs.readFileSync(path.join(root,'badges-ui.js'),'utf8').includes('題庫練習'));
console.log('skill score gates passed');
