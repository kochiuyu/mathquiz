/* Shared presentation/navigation only. Existing grade stores own all learning records. */
(()=>{'use strict';const C=window.MathQuizLearnerCatalog;if(!C)return;
const E=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function mount(){const main=document.querySelector('main'),file=location.pathname.split('/').pop()||'index.html',p=new URLSearchParams(location.search),home=file==='index.html';if(!main||main.querySelector(':scope > .mqui-workspace')||home&&!document.body.classList.contains('student-home'))return;
const grade=file.startsWith('p4-')?4:file.startsWith('p3-')?3:file.startsWith('p2-')?2:1,lang=p.get('lang')==='zh'?'zh':'en',T=(a,b)=>lang==='zh'?b:a,L=a=>a[lang==='zh'?1:0],bank=/levels\.html$/.test(file),review=/review\.html$/.test(file),investigation=/investigate\.html$/.test(file);
const api=grade===4?window.MathQuizP4Learn:grade===1?(review?window.MathQuizReview:window.MathQuizStudent):grade===2?(review?window.MathQuizP2Review:investigation?window.MathQuizP2Inquiry:window.MathQuizP2):review?window.MathQuizP3Review:window.MathQuizP3Learn;
let slot=api?.slot??api?.store?.state?.active??Number(p.get('learner')||0);if(![0,1,2].includes(slot))slot=0;
const base=g=>g===1?'learn.html':`p${g}-learn.html`,reviewPage=g=>`p${g}-review.html`,bankPage=g=>g===1?'p1-levels.html':`p${g}-skill-levels.html`;
const href=(page,extra={})=>page+'?'+new URLSearchParams({lang,learner:String(slot),...(p.get('learnTest')==='1'?{learnTest:'1'}:{}),...(p.get('badgeTest')==='1'?{badgeTest:'1'}:{}),ui:'wording-r1',...extra}),a=(url,text,cls='',current=false)=>`<a class="${cls}" href="${E(url)}" ${current?'aria-current="page"':''}>${E(text)}</a>`;
const topics=C[grade];let lessonId=p.get('lesson');const topic=topics.find(t=>t.id===p.get('path'))||topics.find(t=>t.lessons.some(l=>l.id===lessonId))||(grade===1&&api?.store?.profile?.cursor?topics.find(t=>t.lessons.some(l=>l.id===api.store.profile.cursor.lesson)):null)||topics[0];
let stage=grade>=3?api?.stage:grade===2?(['learn','together','easy','normal','difficult','check'].includes(p.get('stage'))?p.get('stage'):'map'):lessonId?(['learn','together','practice','quiz','result'].includes(p.get('stage'))?p.get('stage'):'learn'):'map';
if(!topic.lessons.some(l=>l.id===lessonId)){if(grade===1){lessonId=null;stage='map';}else lessonId=topic.lessons[0].id;}
const isLesson=!bank&&!review&&!investigation&&stage!=='map'&&!!lessonId,practice=['practice','easy','normal','difficult'].includes(stage),level=['easy','normal','difficult'].includes(p.get('level'))?p.get('level'):(['easy','normal','difficult'].includes(stage)?stage:'easy');
const route=(s,lv)=>href(base(grade),{path:topic.id,lesson:lessonId||topic.lessons[0].id,stage:grade===1?s:s==='practice'?(lv||'easy'):s,...(grade===1&&s==='practice'?{level:lv||'easy'}:{}),...(p.has('row')?{row:p.get('row')}:{})});
document.body.classList.add('mqui');document.body.dataset.mqGrade=grade;
const header=document.querySelector('body > header');if(!header)return;
// Move native selects, preserving their handlers. Older grades retain their original profile controls.
const native=!bank&&(grade>=3&&!review?document.getElementById('learner'):review&&grade>1?document.getElementById('review-learner'):investigation?document.getElementById('inq-learner'):null);
if(native){document.querySelectorAll(`label[for="${native.id}"]`).forEach(l=>l.hidden=true);native.remove();}
const langURL=new URL(location.href);langURL.searchParams.set('lang',lang==='en'?'zh':'en');langURL.searchParams.set('learner',slot);
header.className='mqui-header';header.innerHTML=`<div class="mqui-top">${a(href('index.html'),'MathQuiz','mqui-brand')}<nav class="mqui-grades" aria-label="${T('School year','年級')}">${[1,2,3,4].map(g=>a(href(base(g)),T('P'+g,'小'+['','一','二','三','四'][g]),'',g===grade)).join('')}</nav>${a(langURL.pathname+langURL.search,lang==='en'?'繁體中文':'English','mqui-language')}</div><div class="mqui-person">${bank?`<span>${T('Practice bank · results kept separately from lessons','題庫練習・結果與課節分開記錄')}</span>`:`<label for="${native?native.id:'mqui-learner'}">${T('Learner','學習者')}</label><span id="mqui-select-slot"></span><span class="mqui-person-note">${T('Three pupils, separate saved work','三位學生，各自保留紀錄')}</span>`}${a(href('progress.html'),T('My badges','我的徽章'),'mqui-badges')}</div>`;
if(!bank){const target=header.querySelector('#mqui-select-slot');if(native)target.append(native);else{target.innerHTML=`<select id="mqui-learner">${[T('Fox','狐狸'),T('Owl','貓頭鷹'),T('Otter','水獺')].map((n,i)=>`<option value="${i}" ${slot===i?'selected':''}>${E(n)}</option>`).join('')}</select>`;target.firstChild.onchange=e=>{const next=e.target.value,button=main.querySelector(`[data-profile="${next}"],[data-learner="${next}"]`);if(button)button.click();else{const u=new URL(location.href);u.searchParams.set('learner',next);location.href=u.href;}};}}
const workspace=document.createElement('section');workspace.className='mqui-workspace';workspace.setAttribute('aria-label',T('Learning navigation','學習導覽'));
const topicURL=href(base(grade),{path:topic.id});const index=topic.lessons.findIndex(l=>l.id===lessonId);
workspace.innerHTML=`<nav class="mqui-modes" aria-label="${T('Choose an activity','選擇活動')}">${a(topicURL,T('Lessons','課節'),'',!review&&!bank)}${grade===4?'':a(href(reviewPage(grade)),T('Review','重溫'),'',review)}${a(href(bankPage(grade)),T('More practice','更多練習'),'',bank)}</nav>${!bank&&!review?`<div class="mqui-context">${a(topicURL,L(topic.title))}${isLesson?`<span>${T('Lesson '+(index+1)+' of '+topic.lessons.length,'第'+(index+1)+'課，共'+topic.lessons.length+'課')}</span>`:''}</div>`:''}<details class="mqui-topics" ${p.get('map')==='1'?'open':''}><summary>${T('Choose a topic','選擇主題')} <span>${topics.length}</span></summary><label for="mqui-search">${T('Find a topic','尋找主題')}</label><input id="mqui-search" type="search" autocomplete="off" placeholder="${T('Type a topic name','輸入主題名稱')}"><nav class="mqui-topic-grid" aria-label="${T('Topics','主題')}">${topics.map(t=>a(href(base(grade),{path:t.id}),L(t.title),'',t.id===topic.id&&!bank&&!review)).join('')}</nav><p id="mqui-search-status" role="status" aria-live="polite"></p></details>${isLesson&&!['quiz','result','check','investigate'].includes(stage)?`<nav class="mqui-steps" aria-label="${T('Lesson stages','課堂階段')}">${[['learn',T('1 Learn','1 學習')],['together',T('2 Try together','2 一起試')],['practice',T('3 Practise','3 自己練習')]].map(([s,label])=>a(route(s,level),label,'',(practice?'practice':stage)===s)).join('')}</nav>${practice?`<nav class="mqui-levels" aria-label="${T('Practice difficulty','練習難度')}"><span>${T('Choose difficulty','選擇難度')}</span>${[['easy',T('Easy','容易')],['normal',T('Normal','一般')],['difficult',T('Difficult','困難')]].map(([v,label])=>a(route('practice',v),label,'',level===v)).join('')}</nav>`:''}`:''}`;
main.prepend(workspace);
const heading=main.querySelector('h1');if(heading&&workspace.querySelector('.mqui-steps')){const flow=document.createElement('div');flow.className='mqui-flow';for(const n of workspace.querySelectorAll('.mqui-steps,.mqui-levels'))flow.append(n);heading.after(flow);}
workspace.querySelector('#mqui-search').oninput=e=>{let n=0;const q=e.target.value.trim().toLocaleLowerCase();workspace.querySelectorAll('.mqui-topic-grid a').forEach(a=>{a.hidden=!a.textContent.toLocaleLowerCase().includes(q);if(!a.hidden)n++;});workspace.querySelector('#mqui-search-status').textContent=q?T(n+' topics found', '找到'+n+'個主題'):'';};
// Replaced navigation remains in the DOM for old deep-link handlers; it is not shown twice.
for(const el of main.querySelectorAll('.learn-stages,.learn-levels,.p2-stage-links,.p2-years,.p2-topic-chooser,#learning-map,.p2-branches'))el.classList.add('mqui-replaced');
if(grade>=3&&!bank&&!review){const navs=[...main.querySelectorAll(':scope > nav')];navs.forEach(n=>n.classList.add('mqui-replaced'));}
if(grade>=3&&!bank&&!review){main.querySelectorAll(':scope > a').forEach(el=>{if(new URL(el.href).searchParams.get('stage')==='map')el.classList.add('mqui-replaced');});for(const el of main.querySelectorAll('a'))if(['Next set','下一組'].includes(el.textContent)){const next=new URL(el.href).searchParams.get('stage'),labels={easy:T('Easy practice','容易練習'),normal:T('Normal practice','一般練習'),difficult:T('Difficult practice','困難練習'),check:T('Topic check','主題小測')};el.textContent=T('Next: ','下一步：')+(labels[next]||el.textContent);}}
main.querySelectorAll('.learner-switch > summary').forEach(el=>el.textContent=T('Saved work and settings','已存紀錄及設定'));
main.querySelectorAll('.learner-switch [data-profile],.learner-switch [data-learner]').forEach(el=>el.classList.add('mqui-replaced'));
// Keep secondary P3 prerequisite links together rather than competing with Continue.
if(grade>=3&&!bank&&!review&&stage==='map'){const actions=main.querySelector('.actions');if(actions){const links=[...actions.querySelectorAll('a')];if(links.length>1){const details=document.createElement('details');details.className='mqui-connections';details.innerHTML=`<summary>${T('Useful before this topic','開始前可重溫')}</summary>`;links.slice(1).forEach(l=>details.append(l));actions.after(details);}}}
if(home){main.querySelector('.learn-welcome h1').textContent=T('Choose a topic','選擇主題');}
// Every learner-page link carries the current pupil and language, including native return links.
document.querySelectorAll('a[href]').forEach(el=>{const u=new URL(el.href,location.href);if(u.origin!==location.origin)return;if(/\/(?:learn|p[1234]-(?:learn|review|investigate)|p1-levels|p[234]-skill-levels)\.html$/.test(u.pathname)){u.searchParams.set('learner',slot);if(!u.searchParams.has('lang'))u.searchParams.set('lang',lang);if(p.get('learnTest')==='1')u.searchParams.set('learnTest','1');u.searchParams.set('ui','wording-r1');el.href=u.href;}});
// Keep the question and its required answer controls in the main flow.
// Move existing optional fields; never clone them or replace their handlers.
function fold(nodes,label,cls='pupil-extra'){
 const list=nodes.filter(Boolean);if(!list.length)return null;
 const box=document.createElement('details');box.className=cls;
 const summary=document.createElement('summary');summary.textContent=label;box.append(summary);
 list[0].before(box);list.forEach(n=>box.append(n));
 if(box.querySelector('textarea')&&[...box.querySelectorAll('textarea')].some(n=>n.value.trim()))box.open=true;
 return box;
}
const withLabel=el=>el?[main.querySelector(`label[for="${el.id}"]`),el]:[];
for(const form of main.querySelectorAll('form[data-question],form[data-item]')){
 const fields=[...form.querySelectorAll('textarea[id^="reason-"],textarea[id^="help-"]')];
 if(fields.length)form.append(fold(fields.flatMap(withLabel),T('Explain or add a note','解釋或加筆記')));
}
for(const field of main.querySelectorAll('[data-explanation]'))fold(withLabel(field),T('Explain your answer','解釋答案'));
if(!review){
 const observation=main.querySelector('form#observation');if(observation)fold([observation],T('For adults: record what you saw','成人參考：記錄觀察'),'adult-record');
 const note=main.querySelector('#practical-note');if(note)fold([...withLabel(note),note.nextElementSibling],T('For adults: observation notes','成人參考：觀察筆記'),'adult-record');
}
if(!bank&&!review&&!investigation&&stage==='map'){
 const intro=grade===3?main.querySelector(':scope > h1 + p'):grade===2?main.querySelector('a.learn-primary')?.previousElementSibling:null;
 if(intro?.tagName==='P'){const box=fold([intro],T('About this topic','關於這個主題'));main.append(box);}
}
const adultNotes=[...main.querySelectorAll('[data-adult-note]')];
const pupilNote=header.querySelector('.mqui-person-note');if(pupilNote)adultNotes.unshift(pupilNote);
if(adultNotes.length){const box=fold(adultNotes,T('For adults: learning and saved work','成人參考：學習及儲存紀錄'),'adult-record');main.append(box);}
window.MathQuizLearnerUI={grade,slot,lang,bank,review,topic:topic.id,mount};
}
function start(){const main=document.querySelector('main');if(!main)return;new MutationObserver(()=>mount()).observe(main,{childList:true});mount();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
