/* Guided-lesson badge rules, storage isolation and wiring. */
const assert=require('assert').strict,fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto');
const root=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
let n=0;const test=(name,fn)=>{fn();n++;console.log('ok',name);};
function box(){const s={console,URL,URLSearchParams,location:{search:'',href:'http://local/progress.html',pathname:'/progress.html'}};s.window=s;s.globalThis=s;return s;}
function load(s,files){const c=vm.createContext(s);for(const f of files)vm.runInContext(read(f),c,{filename:f});return s;}
function mem(seed={}){const m=new Map(Object.entries(seed));const writes=[];return {writes,getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>{writes.push(k);m.set(k,String(v));},removeItem:k=>m.delete(k),keys:()=>[...m.keys()]};}
function lum(hex){const c=hex.slice(1).match(/../g).map(x=>{const v=parseInt(x,16)/255;return v<=0.03928?v/12.92:((v+0.055)/1.055)**2.4;});return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2];}
function contrast(a,b){const [h,l]=[lum(a),lum(b)].sort((x,y)=>y-x);return (h+0.05)/(l+0.05);}
const base=load(box(),['learner-catalog.js','badges-data.js','badges-store.js']);
const Data=base.MathQuizBadgeData,Store=base.MathQuizBadgeStore;
const lesson=(year,topic,id,extra)=>({year,topic,id,practice:false,together:false,levels:{easy:false,normal:false,difficult:false},...extra});

test('Sixteen guided badges, bilingual copy, no mastery wording',()=>{
  assert.equal(Data.ids.length,16);
  assert.equal(new Set(Data.ids).size,16);
  for(const b of Data.badges){for(const key of ['name','earned','hint','go']){assert.equal(b[key].length,2);assert.ok(b[key][0].trim()&&b[key][1].trim());}assert.ok(!/mastery|掌握/.test(b.name.concat(b.earned,b.hint,b.go).join(' ')));assert.ok(Data.LINKS[b.id]);assert.ok(b.go[0].length<=16&&b.go[1].length<=6,'short action '+b.id);}
  assert.equal(Data.formatDate('2026-11-27','en'),'27 Nov 2026');
  assert.equal(Data.formatDate('2026-11-27','zh'),'2026年11月27日');
  assert.equal(Data.formatDate('2026-11-27','en')!=='2026-11-27',true);
});
test('Rules follow the approved thresholds',()=>{
  const one=lesson(1,'first','count',{levels:{easy:true,normal:false,difficult:false}});
  assert.equal(JSON.stringify(Data.satisfied({lessons:[one],checks:[],inquiry:false})),JSON.stringify(['first-steps']));
  const together=lesson(1,'first','count',{together:true});
  assert.ok(Data.satisfied({lessons:[together],checks:[]}).includes('try-together'));
  assert.ok(!Data.satisfied({lessons:[together],checks:[]}).includes('lesson-complete'));
  const practised=[...Array(10)].map((_,i)=>lesson(1,'first','l'+i,{practice:true}));
  const ten=Data.satisfied({lessons:practised,checks:[]});
  assert.ok(ten.includes('ten-lessons')&&ten.includes('lesson-complete'));
  const miss={year:1,topic:'first',submitted:true,full:true,scored:true,correct:4,total:6};
  const five={...miss,correct:5},six={...miss,correct:6};
  assert.equal(JSON.stringify(Data.satisfied({lessons:[],checks:[miss]})),JSON.stringify(['first-check']));
  const solid=Data.satisfied({lessons:[],checks:[five]});
  assert.ok(solid.includes('solid-check')&&!solid.includes('careful-check'));
  const perfect=Data.satisfied({lessons:[],checks:[six]});
  assert.ok(perfect.includes('careful-check')&&perfect.includes('solid-check'));
  const p2={year:2,topic:'multiply',submitted:true,full:true,scored:true,correct:9,total:10};
  const almost=Data.satisfied({lessons:[],checks:[p2]});
  assert.ok(almost.includes('solid-check')&&!almost.includes('careful-check'));
  assert.equal(JSON.stringify(Data.satisfied({lessons:[],checks:[],inquiry:true})),JSON.stringify(['inquiry-starter']));
});
test('Year groups need every listed lesson, and later-year groups also need both checks',()=>{
  const ids=pairs=>pairs.flatMap(([y,t])=>Data.topics(y).find(x=>x.id===t).lessons.map(l=>l.id));
  const fill=(pairs,checks)=>Data.satisfied({lessons:ids(pairs).map(id=>lesson(pairs[0][0],pairs[0][1],id,{practice:true})),checks});
  const add=[[1,'first'],[1,'calculate']];
  assert.ok(!Data.satisfied({lessons:ids([[1,'first']]).map(id=>lesson(1,'first',id,{practice:true})),checks:[]}).includes('addition-explorer'));
  assert.ok(fill(add,[]).includes('addition-explorer'));
  assert.ok(!fill(add,[]).includes('subtraction-explorer'));
  const both=[[2,'multiply'],[2,'facts']];
  const lessons=both.flatMap(([y,t])=>Data.topics(y).find(x=>x.id===t).lessons.map(l=>lesson(y,t,l.id,{practice:true})));
  const oneCheck=[{year:2,topic:'multiply',submitted:true,full:true,scored:false,correct:0,total:0}];
  assert.ok(!Data.satisfied({lessons,checks:oneCheck}).includes('p2-multiplier'));
  const two=both.map(([y,t])=>({year:y,topic:t,submitted:true,full:true,scored:false,correct:0,total:0}));
  assert.ok(Data.satisfied({lessons,checks:two}).includes('p2-multiplier'));
  assert.equal(Data.counts({lessons,checks:[{...two[0],scored:false},{year:2,topic:'facts',submitted:true,full:true,scored:true,correct:8,total:8}]})[2].unscored,1);
});
test('Awarding is idempotent, isolated, and a waived reset stays off',()=>{
  const learning={version:1,active:0,profiles:[{lessons:{count:{levels:{easy:{done:true,answers:[]}}}}},{lessons:{tens:{levels:{easy:{done:true,answers:[]}}}}},{}]};
  const storage=mem({'mathquiz-learning-test-v1':JSON.stringify(learning)});
  const api=Store.create(storage,true);
  assert.equal(api.key,'mathquiz-badges-test-v1');
  assert.ok(!storage.keys().includes(api.key+'-check'));
  const first=api.evaluate(1,{recordDay:true});
  assert.ok(first.awarded.includes('first-steps'));
  const at=first.profile.earned['first-steps'].at;
  assert.match(at,/^\d{4}-\d{2}-\d{2}$/);
  const again=api.evaluate(1,{recordDay:true});
  assert.equal(again.awarded.length,0);
  assert.equal(again.profile.earned['first-steps'].at,at);
  assert.equal(again.profile.days.length,1);
  assert.ok(!api.state.profiles[0].earned['first-steps']);
  api.reset(1,{waive:true});
  const after=api.evaluate(1,{recordDay:false});
  assert.equal(after.awarded.length,0);
  assert.ok(!after.profile.earned['first-steps']);
  assert.ok(after.profile.waived.includes('first-steps'));
  assert.ok(api.state.profiles[0].earned==null||!api.state.profiles[0].earned['first-steps']);
  const lessonKey='mathquiz-learning-test-v1';
  assert.ok(storage.getItem(lessonKey).includes('tens'));
  assert.ok(storage.writes.every(k=>k===api.key||k===api.key+'-check'));
});
test('Unreadable records stay on disk until a real award',()=>{
  const raw=JSON.stringify({version:2,active:0,profiles:[{earned:{'first-steps':{at:'2020-01-01',source:'keep'}}} ]});
  const storage=mem({'mathquiz-badges-v1':raw});
  const api=Store.create(storage,false);
  assert.equal(api.notice,'read');
  const quiet=api.evaluate(0,{recordDay:false});
  assert.equal(quiet.awarded.length,0);
  assert.equal(storage.getItem('mathquiz-badges-v1'),raw);
  const huge='x'.repeat(80);
  const small=mem({'mathquiz-badges-v1':huge});
  const capped=Store.create(small,false,{max:40});
  capped.evaluate(0,{recordDay:false});
  assert.equal(small.getItem('mathquiz-badges-v1'),huge);
});
test('Bad fields are dropped and a blocked store does not throw',()=>{
  const cleaned=Store.cleanProfile({earned:{'nope':{at:'2026-01-01',source:'p1:count:easy'},'first-steps':{at:'bad',source:'p1:count:easy'},'try-together':{at:'2026-01-02',source:'bad source!'}},days:['2026-01-02','nope'],seenToast:['nope','first-steps'],waived:['ghost','inquiry-starter']});
  assert.equal(JSON.stringify(cleaned.earned),'{}');
  assert.equal(JSON.stringify(cleaned.days),JSON.stringify(['2026-01-02']));
  assert.equal(JSON.stringify(cleaned.seenToast),JSON.stringify(['first-steps']));
  assert.equal(JSON.stringify(cleaned.waived),JSON.stringify(['inquiry-starter']));
  const blocked={getItem(){throw Error('off');},setItem(){throw Error('off');},removeItem(){throw Error('off');}};
  const api=Store.create(blocked,false);
  assert.equal(api.available,false);
  assert.doesNotThrow(()=>api.evaluate(0,{recordDay:true}));
  assert.equal(api.reset(0),false);
});
test('Official P2 check answers still score correct',()=>{
  const s=load(box(),['badges-data.js','badges-store.js','p2-calendar-visuals.js',...Data.P2.map(spec=>{
    const file={'numbers':'p2-learn-data.js','arithmetic':'p2-arithmetic-data.js','faces':'p2-faces-data.js','multiply':'p2-multiply-data.js','facts':'p2-facts-data.js','metres':'p2-metres-data.js','pictograms':'p2-pictograms-data.js','thousands':'p2-thousands-data.js','money':'p2-money-data.js','change':'p2-change-data.js','division':'p2-division-data.js','angles':'p2-angles-data.js','quads':'p2-quads-data.js','minutes':'p2-minutes-data.js','calendar':'p2-calendar-data.js','directions':'p2-directions-data.js'}[spec.topic];
    return file;
  })]);
  let scored=0;
  for(const spec of Data.P2){const data=s[spec.global];assert.ok(data&&Array.isArray(data.check)&&data.check.length,spec.topic);for(const q of data.check){assert.equal(s.MathQuizBadgeStore.p2Correct(data,q,String(q.answer)),true,spec.topic+' '+q.id+' '+q.type);}scored+=data.check.length;}
  assert.ok(scored>100);
});
test('Check id tables match the question banks, and a perfect screen score still counts',()=>{
  const files={numbers:'p3-learn-data.js',multiply:'p3-multiply-data.js',length:'p3-length-data.js',division:'p3-division-data.js',fractions:'p3-fractions-data.js',fractionops:'p3-fractionops-data.js',quads:'p3-quads-data.js',triangles:'p3-triangles-data.js',capacity:'p3-capacity-data.js',weight:'p3-weight-data.js',time:'p3-time-data.js',clock24:'p3-clock24-data.js',bars:'p3-bars-data.js',mixed:'p3-mixed-data.js'};
  const p4files={multiply:'p4-learn-data.js',division:'p4-division-data.js',factors:'p4-factors-data.js',common:'p4-common-data.js',fractions:'p4-fractions-data.js',fractionops:'p4-fractionops-data.js',perimeter:'p4-perimeter-data.js',area:'p4-area-data.js',shapes:'p4-shapes-data.js',cutbuild:'p4-cutbuild-data.js'};
  const s=load(box(),['marking.js','p3-learn-store.js','p4-learn-store.js',...Object.values(files),...Object.values(p4files)]);
  for(const [topic,file] of Object.entries(files)){const spec=Data.CHECKS['3:'+topic],data=s[Data.P3GLOBAL[topic]];assert.equal(data.checks.length,spec.n,topic);data.checks.forEach((q,i)=>assert.equal(q.id,spec.prefix+(i+1),topic));const api=s.MathQuizP3Store.forPath(topic);assert.ok(data.checks.every(q=>api.correct(q,q.answer)),topic);}
  for(const [topic,file] of Object.entries(p4files)){const spec=Data.CHECKS['4:'+topic],data=s[Data.P4GLOBAL[topic]];assert.ok(data,topic+' '+file);assert.equal(data.checks.length,spec.n,topic);data.checks.forEach((q,i)=>assert.equal(q.id,spec.prefix+(i+1),topic));const api=s.MathQuizP4Store.forPath(topic);assert.ok(data.checks.every(q=>api.correct(q,q.answer)),topic);}
});
test('A saved P1 check can be re-scored from the existing marker',()=>{
  const files=['learn-hundred.js','learn-subtract.js','learn-groups.js','learn-relations.js','learn-calculate.js','learn-measure.js','learn-ruler.js','learn-money.js','learn-time.js','learn-solids.js','learn-flat.js','learn-positions.js','learn-foundations.js','learn-data.js','learn-store.js','learner-catalog.js','badges-data.js','badges-store.js'];
  const s=load(box(),files);
  const D=s.MathQuizLearnData,quiz=D.quiz(0,'first');
  assert.equal(quiz.length,6);
  assert.ok(quiz.every(q=>D.correct(q,String(q.answer))));
  const storage=mem();
  const learn=s.MathQuizLearnStore.create(storage,'mathquiz-learning-v1');
  learn.update(p=>{p.quiz={answers:quiz.map(q=>String(q.answer)),submitted:true};p.lessons.count={practice:true,together:true,levels:{easy:{done:true,answers:[]},normal:{done:true,answers:[]},difficult:{done:true,answers:[]}}};});
  const api=s.MathQuizBadgeStore.create(storage,false);
  const result=api.evaluate(0,{recordDay:false});
  assert.ok(result.awarded.includes('careful-check'));
  assert.ok(result.awarded.includes('first-steps'));
  assert.equal(result.view.checks.find(c=>c.topic==='first').correct,6);
});
test('Badge files make no network calls and the pages keep the old script order',()=>{
  for(const f of ['badges-data.js','badges-store.js','badges-ui.js']){const s=read(f);for(const x of ['fetch(','XMLHttpRequest','sendBeacon','google-analytics','gtag('])assert.ok(!s.includes(x),f+' '+x);new Function(s);}
  for(const f of ['learn.js','p2-learn.js','p3-learn.js','p4-learn.js','p2-inquiry.js','learner-ui.js'])new Function(read(f));
  const ui=read('learner-ui.js');
  for(const x of ['localStorage','sessionStorage','.setItem(','.removeItem('])assert.ok(!ui.includes(x),x);
  assert.ok(ui.includes("href('progress.html')")&&ui.includes('My badges')&&ui.includes('我的徽章'));
  for(const f of ['index.html','learn.html','p2-learn.html','p3-learn.html','p4-learn.html','p2-investigate.html']){const s=read(f);assert.ok(s.includes('badges.css?v=badges-v1'),f);const src=[...s.matchAll(/src="([^"]+)"/g)].map(m=>m[1]);assert.ok(src.at(-1).startsWith('learner-ui.js'),f);assert.ok(src.indexOf('badges-ui.js?v=badges-v1')<src.length-1,f);assert.ok(src.indexOf('learner-catalog.js?v=p4-cutbuild-r1')<src.indexOf('badges-data.js?v=p4-cutbuild-r1'),f);}
  const page=read('progress.html');
  assert.ok(page.includes('id="progress-main"')&&page.includes('badges-ui.js')&&!page.includes('learner-ui.js')&&!page.includes('builder.js')&&!page.includes('p2-learn-topics.js')&&!page.includes('p3-learn-topics.js'));
  assert.ok(page.includes("get('lang')==='zh'"));
  const css=read('badges.css');
  assert.ok(css.includes('grid-template-columns:1fr 1fr')&&css.includes('prefers-reduced-motion')&&css.includes('min-height:44px'));
  for(const sel of ['.badges-page a.badge-go:hover','.badges-page a.badge-go:focus','.badges-page a.badge-go:visited','.badges-page a.badge-go:active'])assert.ok(css.includes(sel),sel);
  assert.ok(css.includes('.badge-card a.badge-go{display:flex;width:100%'));
  assert.ok(read('badges-ui.js').includes('Lessons with all three levels done')&&read('badges-ui.js').includes('三個級別都完成的課')&&read('badges-ui.js').includes('formatDate'));
  assert.ok(read('badges-ui.js').includes("setAttribute('aria-live','polite')"));
  for(const [ink,paper] of [['#14382f','#f6f8f3'],['#14382f','#ffffff'],['#14382f','#fbfaf6'],['#0f5132','#f3faf6'],['#ffffff','#14685a']])assert.ok(contrast(ink,paper)>=4.5,ink+' on '+paper+' '+contrast(ink,paper).toFixed(2));
});
test('Existing progress stores were not rewritten',()=>{
  const hashes=require('./learner-ui-preserved.json');
  for(const file of ['learn-store.js','p2-learn-store.js','p2-inquiry-store.js','p3-learn-store.js','p4-learn-store.js'])if(hashes[file])assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex'),hashes[file],file);
});
console.log(n+' badge gates passed');
