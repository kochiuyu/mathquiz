(async()=>{
const R=window.badgeResult={done:false,passed:0,failed:0,cases:[]},f=document.getElementById('frame'),A=(x,m)=>{if(!x)throw Error(m);};
const isTest=k=>k.startsWith('mathquiz')&&k.includes('test'),prior=Object.fromEntries(Object.keys(localStorage).filter(isTest).map(k=>[k,localStorage.getItem(k)])),normal=Object.fromEntries(Object.keys(localStorage).filter(k=>!isTest(k)).map(k=>[k,localStorage.getItem(k)]));
async function load(path,width=390){f.width=width;const target=new URL('../'+path,location.href).href;await new Promise((resolve,reject)=>{const t=setTimeout(()=>reject(Error('Navigation timeout '+path)),30000);f.onload=()=>{if(f.contentWindow.location.href!==target)return;clearTimeout(t);resolve();};f.src=target;});return [f.contentWindow,f.contentDocument];}
async function test(name,fn){try{await fn();R.passed++;R.cases.push({name,pass:true});}catch(e){R.failed++;R.cases.push({name,pass:false,error:e.message});}const li=document.createElement('li');li.className=R.cases.at(-1).pass?'pass':'fail';li.textContent=name+': '+(R.cases.at(-1).pass?'PASS':R.cases.at(-1).error);document.getElementById('results').append(li);document.getElementById('summary').textContent=R.passed+' passed; '+R.failed+' failed';}
const q=(extra)=>'learn.html?'+new URLSearchParams({learnTest:'1',badgeTest:'1',learner:'1',lang:'en',path:'first',lesson:'count',stage:'practice',level:'easy',...extra});
try{
for(const k of Object.keys(localStorage).filter(isTest))localStorage.removeItem(k);
sessionStorage.removeItem('mathquiz-badges-toast-test-v1');
await test('Practice awards a toast without touching other records',async()=>{
  const [w,d]=await load(q());
  A(d.querySelector('.mqui-badges')&&!d.querySelector('.mqui-grades .mqui-badges'),'badge link');
  A(d.querySelector('.mqui-badges').textContent.includes('My badges'),'english link');
  A(d.querySelector('.mqui-badges').getBoundingClientRect().height>=44,'link target');
  A(new URL(d.querySelector('.mqui-badges').href).searchParams.get('learnTest')==='1','test context');
  const D=w.MathQuizLearnData,form=d.querySelector('#practice-form');A(form,'practice form');
  D.practice('count','easy').forEach((item,i)=>{form.elements['a'+i].value=String(item.answer);});
  form.requestSubmit();
  const toast=d.getElementById('badge-toast');
  A(toast&&toast.getAttribute('aria-live')==='polite'&&toast.classList.contains('is-on'),'polite toast');
  A(toast.textContent.includes('New badge')&&toast.textContent.includes('First steps'),'toast names the badge');
  A(toast.querySelector('button').getBoundingClientRect().height>=44,'close target');
  A(localStorage.getItem('mathquiz-badges-test-v1').includes('first-steps'),'test record');
  A(!Object.keys(localStorage).some(k=>k.startsWith('mathquiz-badges-v1')&&!k.includes('test')),'production badge key untouched');
});
await test('Progress page in both languages at phone, tablet and desktop',async()=>{
  for(const [lang,width] of [['en',390],['zh',390],['en',768],['zh',768],['en',1280],['zh',1280]]){
    const [w,d]=await load('progress.html?'+new URLSearchParams({learnTest:'1',badgeTest:'1',learner:'1',lang}),width);
    A(d.getElementById('progress-main'),'main');
    A(d.documentElement.lang===(lang==='zh'?'zh-HK':'en'),'html lang');
    const text=d.body.textContent;
    A(lang==='zh'?text.includes('我的徽章')&&text.includes('已獲得')&&text.includes('尚未獲得')&&text.includes('第一步'):text.includes('My badges')&&text.includes('Earned')&&text.includes('Not yet')&&text.includes('First steps'),'bilingual state '+lang);
    A(d.querySelector('[data-badge="first-steps"].is-earned'),'earned seal');
    A(d.querySelector('.badge-card.is-locked .badge-state'),'locked has words');
    A(d.documentElement.scrollWidth<=w.innerWidth+1,'overflow '+lang+' '+width);
    const cols=getComputedStyle(d.querySelector('.badge-grid')).gridTemplateColumns.split(' ').filter(Boolean).length;
    A(cols===(width<768?2:width<1100?3:4),'columns '+width+' got '+cols);
    for(const el of d.querySelectorAll('.badge-go,.badge-continue a,.mqui-grades a,.badge-reset summary,#badge-reset'))A(el.getBoundingClientRect().height>=44,'target '+el.textContent.slice(0,24));
  }
});
await test('Reset keeps lesson progress and blocks the same souvenir',async()=>{
  const [w,d]=await load('progress.html?'+new URLSearchParams({learnTest:'1',badgeTest:'1',learner:'1',lang:'en'}));
  d.querySelector('.badge-reset').open=true;
  d.getElementById('badge-reset').click();
  A(d.getElementById('badge-reset-status').textContent.includes('Tick'),'needs confirmation');
  d.getElementById('badge-reset-confirm').checked=true;
  d.getElementById('badge-reset').click();
  A(!d.querySelector('[data-badge="first-steps"].is-earned'),'badge cleared');
  A(w.MathQuizLearnStore.create(localStorage,'mathquiz-learning-test-v1').state.profiles[1].lessons.count.levels.easy.done,'lesson remains');
  const again=w.MathQuizBadgeStore.create(localStorage,true).evaluate(1,{recordDay:false});
  A(!again.awarded.includes('first-steps')&&again.profile.waived.includes('first-steps'),'stays waived');
});
await test('Unavailable storage is explained and does not block the page',async()=>{
  const [w,d]=await load('progress.html?'+new URLSearchParams({learnTest:'1',badgeTest:'1',badgeStorage:'off',learner:'0',lang:'zh'}),390);
  A(d.getElementById('badge-notice').textContent.includes('暫時未能儲存'),'notice');
  A(d.querySelectorAll('.badge-card').length===16,'all badges still listed');
  A(d.documentElement.scrollWidth<=w.innerWidth+1,'overflow');
});
await test('Learner link and toast copy follow the language',async()=>{
  const [w,d]=await load(q({lang:'zh'}));
  A(d.querySelector('.mqui-badges').textContent.includes('我的徽章'),'chinese link');
  const D=w.MathQuizLearnData,form=d.querySelector('#practice-form');
  D.practice('count','easy').forEach((item,i)=>{form.elements['a'+i].value=String(item.answer);});
  form.requestSubmit();
  A(!d.getElementById('badge-toast').classList.contains('is-on'),'waived badge stays quiet');
});
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
