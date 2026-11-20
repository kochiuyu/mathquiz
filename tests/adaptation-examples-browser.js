(async()=>{
const r=window.exampleResult={done:false,passed:0,failed:0,cases:[]},frame=document.getElementById('frame'),only=new URLSearchParams(location.search).get('case');
const assert=(v,m)=>{if(!v)throw Error(m);};
async function load(path,width=375){frame.width=width;await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Navigation timeout '+path)),20000);frame.onload=()=>{clearTimeout(timer);resolve();};frame.src='../'+path+(path.includes('?')?'&':'?')+'test='+Date.now();});return [frame.contentWindow,frame.contentDocument];}
async function test(name,fn){if(only&&only!==name)return;try{await fn();r.passed++;r.cases.push({name,pass:true});}catch(e){r.failed++;r.cases.push({name,pass:false,error:e.message});}const li=document.createElement('li');li.className=r.cases.at(-1).pass?'pass':'fail';li.textContent=name+' '+(r.cases.at(-1).error||'PASS');document.getElementById('results').append(li);document.getElementById('summary').textContent=r.passed+' passed; '+r.failed+' failed';}
for(const t of MathQuizReasoningCatalogue.filter(t=>t.single))for(const lang of ['en','zh']){
await test(t.id+'/'+lang+'/practice',async()=>{
 const [w,d]=await load('reasoning.html?topic='+t.id+'&lang='+lang,lang==='zh'?320:375),a=w.MathQuizReasoningApp;
 assert(a?.questions.length===1,'Exactly one example');assert(d.documentElement.scrollWidth<=+frame.width+1,'Overflow');assert(!d.querySelector('#reason-settings'),'Invented level selector');assert(d.querySelector('h1').textContent===t.label[lang==='zh'?1:0],'Title');assert(d.querySelector('.reason-source a').href===new URL(t.url).href,'Source');
 const q=a.questions[0],form=d.querySelector('#reason-form');
 if(q.teacher){assert(!form.querySelector('button[type=submit]'),'Teacher auto-score');const input=form.querySelector('textarea');input.value='Four groups 四組';input.dispatchEvent(new w.Event('input',{bubbles:true}));assert(w.sessionStorage.getItem('mq-reasoning-v1-'+t.id+'-easy-0').includes('Four groups'),'Teacher save');return;}
 for(const f of form.querySelectorAll('input,select'))f.value='';form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert(d.querySelector('.feedback').dataset.correct==='false','Blanks accepted');
 q.fields.forEach((f,k)=>form.elements[q.id+'-'+k].value=f.answer);form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert(d.querySelector('.feedback').dataset.correct==='true','Answers rejected');assert(d.querySelectorAll('[aria-invalid=true]').length===0,'Correct invalid');
 d.querySelector('#retry').click();assert(!d.querySelector('.feedback').textContent,'Retry feedback');assert(form.elements[q.id+'-0'].value===q.fields[0].answer,'Retry erased work');
 const first=form.querySelector('input,select');assert(first.getBoundingClientRect().top<820,'Answer far below mobile viewport');
 if(q.visual)assert(d.querySelector('.reason-question svg,.reason-question table'),'Missing diagram');
});
await test(t.id+'/'+lang+'/paper-key',async()=>{
 for(const view of ['paper','key']){const[w,d]=await load('reasoning.html?topic='+t.id+'&lang='+lang+'&view='+view,800),q=w.MathQuizReasoningApp.questions[0];assert(!d.querySelector('#reason-form input,#reason-form select,#reason-form textarea'),'Editable paper');assert(!d.querySelector('#answer-sound'),'Paper sound');assert(d.querySelector('#print'),'Print action');if(view==='paper')assert([...d.querySelectorAll('.reason-blank')].every(n=>!n.textContent),'Paper answer leak');else assert(d.querySelector('.reason-worked').textContent===q.why[lang==='zh'?1:0],'Worked explanation');for(const f of q.fields.filter(f=>f.type==='choice'))assert(f.options.every(o=>d.querySelector('#reason-form').textContent.includes(o[lang==='zh'?1:0])),'Paper lacks choice alternatives');}
});}
for(const lang of ['en','zh'])await test('library/'+lang,async()=>{
 const[w,d]=await load('?view=browse&source=reasoning&q='+encodeURIComponent(lang==='zh'?'香港':'Hong Kong')+'&lang='+lang,375),c=d.querySelector('#resource-count');assert(d.querySelectorAll('.reasoning-resource[data-reasoning]').length===31,'HK results');assert(c.dataset.examples==='17','Example count');assert(!d.querySelector('[data-family]'),'Core leaked into source filter');
 const form=d.querySelector('#resource-filters');form.elements.q.value='';form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert(d.querySelectorAll('.reasoning-resource[data-reasoning]').length===48,'Total adaptations');assert(c.dataset.examples==='20','Example total');
 form.elements.mode.value='levels';form.dispatchEvent(new w.Event('change',{bubbles:true}));assert(d.querySelectorAll('.reasoning-resource[data-reasoning]').length===27,'Single examples falsely levelled');
});
await test('continuity-and-overlap',async()=>{
 let[w,d]=await load('reasoning.html?topic=hk001&lang=en');const input=d.querySelector('#reason-form input');input.value='１２';input.dispatchEvent(new w.Event('input',{bubbles:true}));[w,d]=await load('reasoning.html?topic=hk001&lang=zh');assert(d.querySelector('#reason-form input').value==='１２','Language draft lost');
 [w,d]=await load('reasoning.html');assert(d.querySelectorAll('[data-topic]').length===48,'Directory');for(const [g,s] of [[2,'divgroup2a'],[5,'heightmatch5a']]){const link=d.querySelector('a[href*="skill='+s+'"]');assert(link,'Missing overlap link');}
});
for(const [g,s] of [[2,'divgroup2a'],[5,'heightmatch5a']])await test('existing/'+s,async()=>{const[w,d]=await load('p'+g+'-skill-levels.html?skill='+s+'&level=difficult&lang=zh');assert(d.querySelector('input,select'),'Existing skill has no answer control');assert(!/undefined|NaN/.test(d.body.innerText),'Broken existing practice');});
r.done=true;r.finished=new Date().toISOString();document.getElementById('summary').textContent=`DONE: ${r.passed} passed; ${r.failed} failed`;
})();
