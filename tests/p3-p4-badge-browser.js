/* P3 and P4 award the same in-page toast as P1 once a whole practice level is saved.
   sync() ignores learnTest pages unless badgeTest=1, and first-steps needs every
   question in one level to have a first answer. The toast stays on document.body
   while the lesson re-renders main. */
(async()=>{
const R=window.badgeResult={done:false,passed:0,failed:0,cases:[]},f=document.getElementById('frame'),A=(x,m)=>{if(!x)throw Error(m);};
const isTest=k=>k.startsWith('mathquiz')&&k.includes('test');
const prior=Object.fromEntries(Object.keys(localStorage).filter(isTest).map(k=>[k,localStorage.getItem(k)]));
const normal=Object.fromEntries(Object.keys(localStorage).filter(k=>!isTest(k)).map(k=>[k,localStorage.getItem(k)]));
async function load(path){const target=new URL('../'+path,location.href).href;await new Promise((resolve,reject)=>{const t=setTimeout(()=>reject(Error('Navigation timeout '+path)),30000);f.onload=()=>{if(f.contentWindow.location.href!==target)return;clearTimeout(t);resolve();};f.src=target;});return [f.contentWindow,f.contentDocument];}
async function test(name,fn){try{await fn();R.passed++;R.cases.push({name,pass:true});}catch(e){R.failed++;R.cases.push({name,pass:false,error:e.message});}const li=document.createElement('li');li.className=R.cases.at(-1).pass?'pass':'fail';li.textContent=name+': '+(R.cases.at(-1).pass?'PASS':R.cases.at(-1).error);document.getElementById('results').append(li);document.getElementById('summary').textContent=R.passed+' passed; '+R.failed+' failed';}
function fill(form,q){if(q.type==='fields'||q.type==='order'){const parts=String(q.answer).split(',');[...form.querySelectorAll('[name=part]')].forEach((el,i)=>{el.value=parts[i]||'';});}else{const input=form.querySelector('[name=answer]');A(input,'answer field '+q.id);input.value=String(q.answer);}}
async function finishLevel(w,d,apiName){const D=w[apiName],lesson=D.lessons.find(l=>l.id===new URL(w.location.href).searchParams.get('lesson'))||D.lessons[0],qs=lesson.easy;A(qs&&qs.length,'easy set');for(const q of qs){const form=d.getElementById('form-'+q.id);A(form,'form '+q.id);fill(form,q);form.requestSubmit();await new Promise(r=>setTimeout(r,30));}return qs.length;}
try{
for(const k of Object.keys(localStorage).filter(isTest))localStorage.removeItem(k);
sessionStorage.removeItem('mathquiz-badges-toast-test-v1');
const cases=[
 ['p3-learn.html',{path:'numbers',lesson:'p3-tenthousand',stage:'easy',lang:'en'},'MathQuizP3Data','New badge','First steps'],
 ['p4-learn.html',{path:'multiply',lesson:'p4-tensproduct',stage:'easy',lang:'zh',learner:'2'},'MathQuizP4Data','新徽章','第一步']
];
for(const [page,extra,api,kicker,name] of cases){
 await test(page+' toast after a full easy set',async()=>{
  const [w,d]=await load(page+'?'+new URLSearchParams({learnTest:'1',badgeTest:'1',learner:'1',...extra}));
  A(w.MathQuizBadges,'badge api');
  const n=await finishLevel(w,d,api);
  await new Promise(r=>setTimeout(r,50));
  const toast=d.getElementById('badge-toast');
  A(toast&&toast.getAttribute('aria-live')==='polite'&&toast.classList.contains('is-on'),'polite toast after '+n+' answers');
  A(toast.textContent.includes(kicker)&&toast.textContent.includes(name),'toast names the badge');
  A(toast.querySelector('button').getBoundingClientRect().height>=44,'close target');
  A(localStorage.getItem('mathquiz-badges-test-v1').includes('first-steps'),'test record');
  A(!Object.keys(localStorage).some(k=>k.startsWith('mathquiz-badges-v1')&&!k.includes('test')),'production badge key untouched');
  A(d.body.contains(toast),'toast stays outside the replaced lesson');
 });
}
await test('Normal records unchanged',async()=>{
 const now=Object.fromEntries(Object.keys(localStorage).filter(k=>!isTest(k)).map(k=>[k,localStorage.getItem(k)]));
 A(JSON.stringify(now)===JSON.stringify(normal),'normal storage');
});
}finally{
 f.src='about:blank';
 for(const k of Object.keys(localStorage).filter(isTest))if(!(k in prior))localStorage.removeItem(k);
 for(const [k,v] of Object.entries(prior))localStorage.setItem(k,v);
 R.done=true;
 document.getElementById('summary').textContent=R.passed+' passed; '+R.failed+' failed; done';
}
})();
