const fs=require('fs'),vm=require('vm'),a=require('assert/strict'),root=require('path').resolve(__dirname,'..')+'/';let c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(fs.readFileSync(root+'builder.js','utf8')+fs.readFileSync(root+'algebra5.js','utf8')+';globalThis.bank=algebraFamilies5',c);const quiz=fs.readFileSync(root+'quiz.js','utf8');let tested=0,first=[];
const runner=fs.readFileSync(root+'tests/regression.js','utf8');
const routeHelper=runner.slice(runner.indexOf('async function checkP2NewRoutes'),runner.indexOf('  await check("P2 2N3'));
const fill=routeHelper.match(/else q.answer.forEach\(\(answer,j\)=>d.querySelector\('[^']+'\+j\+'[^']+'\)\.value=([^;]+)\);/);
a(fill,'actual generic route fill expression must be extracted');
a(routeHelper.includes("value='NaN/2'"));a(routeHelper.includes("'malformed algebra NaN/2 rejected '"));
const routeFill=(q,answer)=>vm.runInNewContext(fill[1],{q,answer});
a.equal(routeFill({},7),'14/2','legacy numeric equivalence retained');
a.equal(routeFill({fraction4N6Answer:{}},'1/2'),'1/2');
a.equal(routeFill({decimal4N7:[{}]},'0.5'),'0.5');
for(const family of c.bank.filter(f=>f.id==='expressionwords5a'||f.id==='equationcontext5a'))for(let i=0;i<family.count;i++)for(const lang of[0,1]){const q=family.make(i);if(!q.algebra5)continue;const answer=q.answer[0],old=(q.fraction4N6Answer||q.decimal4N7)?String(answer):(answer*2)+'/2',fixed=routeFill(q,answer);a.equal(old,'NaN/2');a.equal(c.scoreAlgebra5(old,q.algebra5),false);a.equal(c.scoreAlgebra5(fixed,q.algebra5),true);const elements={status:{focus(){}},feedback0:{},retry:{}},button={},input={};const d={grade:5,quizzes:{5:[q]},points:q=>q.marks,local:x=>x[lang],t:(en,zh)=>lang?zh:en,scoreAlgebra5:c.scoreAlgebra5,document:{getElementById:id=>elements[id],querySelectorAll:()=>[input],querySelector:()=>button}};vm.createContext(d);vm.runInContext(quiz.slice(quiz.indexOf('function mark(form)'),quiz.indexOf('function renderNumber2Practice')),d);d.mark({get:()=>old});a.equal(elements.status.textContent,(lang?'得分':'Score')+' 0 / 1');d.mark({get:()=>fixed});a.equal(elements.status.textContent,(lang?'得分':'Score')+' 1 / 1');a.equal(input.disabled,true);if(i===0&&lang===0)first.push({family:family.id,canonical:answer,rejectedLegacyFill:old,currentHelperFill:fixed,oldStatus:'0 / 1',fixedStatus:'1 / 1'});tested++;}
a.equal(tested,40);console.log(JSON.stringify({contract:'Generic route helper preserves algebra text and legacy numeric-equivalence probes',firstVariants:first,actualProductionMarkCalls:tested*2,bilingualFixtures:tested,scope:'Node minimal DOM production mark probe, not browser verification'},null,2));

// Generic route mark totals use exactly the production points fallback, not undefined marks.
const pointsSource=quiz.match(/function points\(q\)\{[^}]+\}/)[0];
const points=vm.runInNewContext(pointsSource+';points');
a(routeHelper.includes('expectedMarks=q.marks??q.fields?.length??1'));
const practiceFill=routeHelper.match(/input.value=(\(item.fraction4N6Answer[^;]+?)\);/)[1];
for(const family of c.bank)for(let i=0;i<family.count;i++){const item=family.make(i);if(item.algebra5)a.equal(vm.runInNewContext(practiceFill,{item,j:0}),String(item.answer[0]),'algebra practice canonical text');}
a.equal(vm.runInNewContext(practiceFill,{item:{answer:[7]},j:0}),'7.0','legacy practice decimal-equivalence probe retained');
const numericIds=['circleradiusdiam5a','solidparts5a','compoundread5a','compoundcompare5a','compoundscale5a','compoundround5a'];
vm.runInContext('globalThis.all=families;',c);let numericCases=0;
for(const id of numericIds)for(let i=0;i<c.all.find(f=>f.id===id).count;i++)for(const lang of[0,1]){const q=c.all.find(f=>f.id===id).make(i);a.equal(q.marks,undefined);a.equal(points(q),1);const elements={status:{focus(){}},feedback0:{},retry:{}},button={},input={};const d={grade:5,strictP1:false,quizzes:{5:[q]},points,local:x=>x[lang],t:(en,zh)=>lang?zh:en,document:{getElementById:id=>elements[id],querySelectorAll:()=>[input],querySelector:()=>button}};vm.createContext(d);vm.runInContext(fs.readFileSync(root+'marking.js','utf8'),d);vm.runInContext(quiz.slice(quiz.indexOf('function mark(form)'),quiz.indexOf('function renderNumber2Practice')),d);d.mark({get:()=>routeFill(q,q.answer[0])});a.equal(elements.status.textContent,(lang?'得分':'Score')+' 1 / 1');d.mark({get:()=>String(q.answer[0]+1)});a.equal(elements.status.textContent,(lang?'得分':'Score')+' 0 / 1');numericCases++;}
a.equal(numericCases,144);console.log('PASS144 bilingual numeric-family default-points cases,288 production mark calls; legacy equivalent fraction/decimal fills preserved; algebra practice strings preserved.');
