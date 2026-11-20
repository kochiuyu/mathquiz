const A=require('node:assert/strict'),D=require('../learn-data.js'),S=require('../learn-store.js'),fs=require('node:fs'),vm=require('node:vm');
A.equal(D.paths.length,13);A.equal(D.allLessons.length,39);A.equal(new Set(D.allLessons.map(l=>l.id)).size,39);
let n=0;for(const l of D.getPath('hundred').lessons){A.equal(l.steps.length,3);for(let seed=0;seed<6;seed++)for(let i=0;i<12;i++){
 const q=D.question(l.id,i,seed),v=q.visual;let answer;
 if(l.id==='bundles')answer=i%3===2?v.a%10:Math.floor(v.a/10)*10+v.a%10;
 else if(l.id==='compare')answer=i%2===0?Math.max(v.a,v.b):Math.min(v.a,v.b);
 else if(v){A.equal(Math.abs(v.values[0]-v.values[2]),2,'non-consecutive sequence');answer=(v.values[0]+v.values[2])/2;}
 else answer=q.prompt[0].match(/\d+/g).map(Number).sort((a,b)=>a-b)[1];
 A.equal(q.answer,answer,q.id);A(Number.isInteger(answer)&&answer>=0&&answer<=100);A(q.prompt.every(Boolean)&&q.why.every(Boolean));A(D.correct(q,String(answer)));for(const bad of ['', '-1','1e2','100.0','101','1000',String(answer+1)])A(!D.correct(q,bad));n++;
}}
const expected={bundles:{normal:[60+2,80,10*10],difficult:[50+3,7*10,4*10+10]},compare:{normal:[86,72,100],difficult:[41,64,58]},order:{normal:[70,89,50],difficult:[60,98,18]}};
for(const l of D.getPath('hundred').lessons)for(const level of D.levels){const qs=D.practice(l.id,level);A.equal(qs.length,3);qs.forEach((q,i)=>{A(D.correct(q,''+q.answer));if(level!=='easy')A.equal(q.answer,expected[l.id][level][i]);});}
for(let attempt=0;attempt<12;attempt++){const qs=D.quiz(attempt,'hundred');A.equal(qs.length,6);for(const l of D.getPath('hundred').lessons)A.equal(qs.filter(q=>q.lesson===l.id).length,2);}
const legacy={lessons:{count:{practice:true,practiceAnswers:['0','6','9']}},attempt:2,quiz:{answers:['3','5','12','5','7','7'],submitted:true},cursor:{lesson:'add',stage:'result'}};
const clean=S.cleanProfile({...legacy,checks:{hundred:{attempt:1,quiz:{answers:['100','100'],submitted:false}}},lessons:{...legacy.lessons,bundles:{levels:{normal:{done:true,answers:['62','80','100']}}}},pathCursors:{first:{lesson:'count',stage:'practice',level:'normal'},hundred:{lesson:'bundles',stage:'practice',level:'difficult'},evil:{lesson:'bad'}}});
A.deepEqual(clean.quiz,legacy.quiz);A.equal(clean.attempt,2);A.equal(clean.checks.hundred.quiz.answers[0],'100');A.equal(clean.lessons.bundles.levels.normal.answers[2],'100');A.equal(clean.pathCursors.hundred.level,'difficult');A(!clean.pathCursors.evil);A(clean.lessons.count.levels.easy.done);
const memory=new Map(),storage={getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};let store=S.create(storage);store.update(p=>Object.assign(p,clean));store.select(1);store.update(p=>p.checks.hundred={attempt:0,quiz:{answers:['1'],submitted:true}});store=S.create(storage);A.equal(store.profile.checks.hundred.quiz.answers[0],'1');store.select(0);A.equal(store.profile.checks.hundred.quiz.answers[0],'100');store.select(1);store.reset();store.select(0);A.deepEqual(store.profile.quiz,legacy.quiz);
const malformed=S.cleanProfile({checks:{hundred:{attempt:Infinity,quiz:{answers:['<script>'],submitted:'yes'}}},pathCursors:{hundred:{lesson:'add',stage:'quiz'}}});A.equal(malformed.checks.hundred.attempt,0);A.equal(malformed.checks.hundred.quiz.submitted,false);A(!malformed.pathCursors.hundred);
for(const file of ['learn.js','learn-hundred.js','learn-data.js','learn-store.js','tests/student-browser.js'])new vm.Script(fs.readFileSync(require('node:path').join(__dirname,'..',file),'utf8'));
console.log(`PASS: ${n} independently checked new generation cases, 27 practice items, 12 quiz configurations, 100 input, two-pathway progress and legacy records.`);
