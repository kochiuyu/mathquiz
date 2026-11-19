/* Shared navigation and progressive disclosure. Mathematical state stays in existing renderers. */
(() => {
 const p=new URLSearchParams(location.search),zh=p.get('lang')==='zh',lang=zh?'zh':'en',t=(en,cn)=>zh?cn:en,root=location.pathname.includes('/activities/')?'../':'./';
 const browse=(extra={})=>root+'?'+new URLSearchParams({lang,view:'browse',...extra});
 const grade=p.get('p')||(location.pathname.match(/p([1-6])-skill-levels\.html$/)||[])[1]||'',practice=/p[1-6]-skill-levels\.html$|smart-practice\.html$/.test(location.pathname),directory=/\/skill-levels\.html$/.test(location.pathname),activity=location.pathname.includes('/activities/');
 document.body.classList.add('site-refreshed');if(practice)document.body.classList.add('focused-practice');
 function navigation(){
  const header=document.querySelector('header');if(!header||header.dataset.sharedNav)return;header.dataset.sharedNav='true';header.classList.add('mq-header');
  if(practice){header.querySelector('.levels-navigation')?.remove();return;}
  if(activity||document.body.classList.contains('pupil-page')||document.body.classList.contains('paper-page'))return;
  let nav=header.querySelector('.site-nav,.levels-navigation');if(!nav){nav=document.createElement('nav');header.append(nav);}nav.className='site-nav mq-nav';nav.setAttribute('aria-label',t('Main navigation','主導覽'));
  nav.innerHTML=[['home',root+'?lang='+lang,t('Home','首頁')],['browse',browse({mode:'levels',...(grade?{p:grade}:{})}),t('Practise','練習')],['build',root+'?'+new URLSearchParams({v:'3',lang,p:grade||'1',items:'',view:'build'}),t('Create a quiz','建立小測')],['activity',browse({mode:'activity',...(grade?{p:grade}:{})}),t('Activities','實作活動')]].map(([key,url,label])=>'<a href="'+url+'"'+((key==='build'&&p.get('view')==='build'||key==='activity'&&p.get('mode')==='activity'||key==='browse'&&(directory||p.get('view')==='browse'&&p.get('mode')!=='activity')||key==='home'&&!p.has('view')&&!p.has('p')&&/\/$|index\.html$/.test(location.pathname))?' aria-current="page"':'')+'>'+label+'</a>').join('');
 }
 function reference(note){
  if(note.closest('.question-reference'))return;
  const details=document.createElement('details');details.className='question-reference';const summary=document.createElement('summary');summary.textContent=t('HKEAA TSA reference · MathQuiz ','考評局TSA參考 · MathQuiz')+(/extension/.test(note.dataset.sourceScope||'')?t('extension','延伸'):t('adaptation','改編'));note.before(details);details.append(summary,note);
 }
 function refresh(){
  navigation();
  document.querySelectorAll('.tsa-source-note').forEach(reference);
  document.querySelectorAll('.question-id').forEach(id=>{if(id.closest('.question-reference'))return;const parent=id.closest('[data-question]'),ref=parent?.querySelector('.question-reference');if(ref){ref.append(id);return;}const d=document.createElement('details');d.className='question-reference question-id-reference';const s=document.createElement('summary');s.textContent=t('Question reference','題目編號');id.before(d);d.append(s,id);});
  const app=document.getElementById('app');if(!app)return;
  if(document.body.classList.contains('skill-session')&&!app.dataset.compact){
   app.dataset.compact='true';const settings=app.querySelector('.session-settings'),questions=document.getElementById('questions');if(settings&&questions){questions.after(settings);const note=app.querySelector('.session-view-note');if(note)settings.append(note);}
   const entry=app.querySelector('.tsa6-entry,.tsa-entry');if(entry){const d=document.createElement('details');d.className='source-guide screen-only';d.innerHTML='<summary>'+t('Assessment sources and other TSA practice','評估來源及其他TSA練習')+'</summary>';entry.before(d);d.append(entry);app.append(d);}
   const back=app.querySelector('.session-back');if(back){const form=document.getElementById('choose'),unit=form&&window['P'+grade+'Skills']?.skills[form.elements.skill.value]?.unit;back.href=browse({p:grade,...(unit?{unit}:{})});back.textContent=t('Back to topics','返回課題');}
  }
  if(document.querySelector('.smart-heading')){const rules=app.querySelector('.smart-rules'),footer=app.querySelector('.smart-footer');if(rules&&!rules.dataset.compact){rules.dataset.compact='true';app.append(rules);if(footer)app.append(footer);}}
  const sound=document.getElementById('answer-sound');if(practice&&sound&&!sound.closest('.practice-options')){const box=sound.closest('.answer-tools')||sound.closest('label')||sound;const d=document.createElement('details');d.className='practice-options screen-only';d.innerHTML='<summary>'+t('Sound and practice options','音效及練習選項')+'</summary>';app.after(d);d.append(box);}
  document.querySelectorAll('.session-views a,.example-print a').forEach(a=>{if(a.textContent==='Worked key'||a.textContent==='Worked answers')a.textContent='Worked answers';if(a.textContent==='Student paper')a.textContent='Pupil paper';});
  document.querySelectorAll('.print-tools').forEach(tools=>{if(tools.dataset.presentation==='true')return;const view=p.get('view');if(!['paper','key'].includes(view))return;tools.dataset.presentation='true';const nav=document.createElement('nav');nav.className='paper-view-switch';nav.setAttribute('aria-label',t('Question views','題目檢視'));for(const [v,label]of [['paper',t('Pupil paper','工作紙')],['key',t('Worked answers','解答')]]){const a=document.createElement('a'),u=new URL(location.href);u.searchParams.set('view',v);a.href=u.href;a.textContent=label;if(view===v)a.setAttribute('aria-current','page');nav.append(a);}tools.after(nav);const button=tools.querySelector('#download-pdf');if(button){const d=document.createElement('details');d.className='export-options';d.innerHTML='<summary>'+t('Other PDF options','其他PDF選項')+'</summary>';tools.append(d);d.append(button);const status=tools.querySelector('#pdf-status');if(status)d.append(status);const help=document.querySelector('.export-help');if(help)d.append(help);}});
  const title=app.querySelector('h1'),pack=window.MathQuizExamples?.packs.find(x=>x.items&&x.grade===Number(grade)&&x.items.join('.')===(p.get('items')||''));if(pack&&title&&!p.get('view')?.includes('build')){const text=(zh?'小'+['','一','二','三','四','五','六'][grade]:'Primary '+grade)+' · '+pack.title[zh?1:0];if(title.textContent!==text)title.textContent=text;document.title=text+' | MathQuiz';}
  window.MathQuizNotation?.decorate(app);
 }
 const observer=new MutationObserver(()=>{observer.disconnect();refresh();observer.observe(document.body,{childList:true,subtree:true});});refresh();observer.observe(document.body,{childList:true,subtree:true});
 let printClosed=[];addEventListener('beforeprint',()=>{printClosed=[...document.querySelectorAll('.question-reference:not([open])')];printClosed.forEach(d=>d.open=true);});addEventListener('afterprint',()=>{printClosed.forEach(d=>d.open=false);printClosed=[];});
 window.MathQuizPresentation={refresh};
})();
