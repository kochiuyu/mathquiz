/* Shared presentation layer. Original question rendering and marking remain in each grade's script. */
(()=>{
 const match=location.pathname.match(/p([1-5])-skill-levels\.html$/);if(!match)return;
 const grade=+match[1],bank=window['P'+grade+'Skills'],form=document.getElementById('choose'),questions=document.getElementById('questions');if(!bank||!form||!questions)return;
 const p=new URLSearchParams(location.search),lang=p.get('lang')==='zh'?'zh':'en',t=(en,zh)=>lang==='zh'?zh:en,loc=a=>a[lang==='zh'?1:0],skill=form.elements.skill.value,level=form.elements.level.value,set=form.elements.set.value,view=p.get('view')||'quiz';
 const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const route=(changes={})=>'p'+grade+'-skill-levels.html?'+new URLSearchParams({lang,skill,level,set,view,...changes});
 const hub='skill-levels.html?'+new URLSearchParams({lang,p:grade,unit:bank.skills[skill].unit,level}),app=document.getElementById('app');
 document.body.classList.add('skill-session');if(view!=='quiz')document.body.classList.add('level-paper');
 const skip=document.querySelector('.skip');if(skip){skip.href='#questions';questions.tabIndex=-1;skip.textContent=t('Skip to questions','跳至題目');}
 const header=document.querySelector('header');header.querySelector('nav').classList.add('language-navigation');header.querySelector('.brand').insertAdjacentHTML('afterend','<nav class="levels-navigation" aria-label="'+t('Practice navigation','練習導覽')+'"><a href="skill-levels.html?lang='+lang+'&p='+grade+'">'+t('Choose a skill','選擇技能')+'</a><a href="./?view=browse&p='+grade+'&lang='+lang+'">'+t('All resources','所有資源')+'</a></nav>');
 for(const l of ['en','zh'])document.getElementById(l).setAttribute('aria-current',l===lang?'true':'false');
 const back=app.querySelector(':scope > a');back.href=hub;back.textContent='← '+t('P'+grade+' skills','P'+grade+'技能');back.classList.add('session-back');
 const title=app.querySelector('h1'),eyebrow=app.querySelector('.eyebrow'),lead=app.querySelector('.lead'),reading=app.querySelector('.reading'),count=lead.nextElementSibling;
 const heading=document.createElement('section');heading.className='session-heading';title.before(heading);heading.append(eyebrow,title,lead);lead.classList.add('session-meta');
 const originalPanel=form.closest('.panel'),settings=document.createElement('details');settings.className='session-settings screen-only';settings.id='session-settings';settings.innerHTML='<summary>'+t('Change skill, level or set','更改技能、級別或題組')+'</summary>';while(originalPanel.firstChild)settings.append(originalPanel.firstChild);originalPanel.replaceWith(settings);
 const info=settings.querySelector('details');if(info){info.append(reading,count);}
 const nativeLevel=form.elements.level;nativeLevel.closest('label').hidden=true;
 const descriptions={easy:[t('Easy','容易'),t('With guidance','有提示協助')],normal:[t('Normal','一般'),t('Apply independently','獨立應用')],difficult:[t('Difficult','較難'),t('Check and reason','核對及推理')]};
 const levelPicker=document.createElement('fieldset');levelPicker.className='session-level-picker';levelPicker.innerHTML='<legend>'+t('Level','級別')+'</legend><div class="level-options">'+Object.entries(descriptions).map(([id,[name,desc]])=>'<label class="level-option"><input type="radio" name="level-choice" value="'+id+'" '+(id===level?'checked':'')+'><span><strong>'+name+'</strong><small>'+desc+'</small></span></label>').join('')+'</div>';
 form.querySelector('.selectors').after(levelPicker);levelPicker.onchange=e=>{nativeLevel.value=e.target.value;};nativeLevel.addEventListener('change',()=>{const radio=levelPicker.querySelector('[value="'+nativeLevel.value+'"]');if(radio)radio.checked=true;});
 const toolbar=document.createElement('nav');toolbar.className='session-views screen-only';toolbar.setAttribute('aria-label',t('Question views','題目檢視'));toolbar.innerHTML=[['quiz',t('Practise','做練習')],['paper',t('Pupil paper','工作紙')],['key',t('Worked key','解答')]].map(([v,label])=>'<a href="'+route({view:v})+'" '+(view===v?'aria-current="page"':'')+'>'+label+'</a>').join('');heading.after(toolbar);
 toolbar.querySelector('[aria-current="page"]').addEventListener('click',e=>e.preventDefault());
 const bottom=app.querySelector(':scope > .actions:last-child');if(bottom)bottom.hidden=true;
 if(view!=='quiz'){
  const mode=document.createElement('p');mode.className='print-view-label';mode.textContent=t(view==='key'?'Worked answer key':'Pupil paper',view==='key'?'解答':'工作紙');heading.prepend(mode);return;
 }
 const answered=document.getElementById('answered'),progress=document.createElement('progress');progress.max=questions.querySelectorAll('[data-question]').length;progress.value=0;progress.setAttribute('aria-label',t('Questions answered','已作答題數'));const progressRow=document.createElement('div');progressRow.className='session-progress screen-only';answered.before(progressRow);progressRow.append(answered,progress);const update=()=>{progress.value=Number(answered.textContent.match(/^\d+/)?.[0]||0);};new MutationObserver(update).observe(answered,{childList:true,subtree:true,characterData:true});update();
 const result=document.getElementById('result'),retry=document.getElementById('retry'),next=document.createElement('aside');next.id='session-next';next.className='session-next screen-only';next.hidden=true;
 next.innerHTML='<h2>'+t('What next?','下一步？')+'</h2><p>'+t('Practise again, try another set, or choose a different skill.','可以重試、練習另一題組，或選擇其他技能。')+'</p><div class="actions">'+(set!=='all'&&+set<3?'<a class="button" href="'+route({set:String(+set+1)})+'">'+t('Next set','下一題組')+' →</a>':'')+'<a class="button secondary" href="'+hub+'">'+t('Choose another skill','選擇其他技能')+'</a><button type="button" class="secondary" id="change-level">'+t('Change level','更改級別')+'</button></div>';questions.after(next);
 next.querySelector('#change-level').onclick=()=>{settings.open=true;levelPicker.querySelector('input:checked').focus();};
 new MutationObserver(()=>{next.hidden=retry.hidden;}).observe(retry,{attributes:true,attributeFilter:['hidden']});next.hidden=retry.hidden;
 // A deliberate view switch keeps the original language-transfer and marking contracts intact.
 const reminder=document.createElement('p');reminder.className='session-view-note screen-only';reminder.textContent=t('Opening a paper, key or new set starts a fresh page. Change language to keep your answers.','開啟工作紙、解答或新題組會載入新頁面；切換語言則保留答案。');toolbar.after(reminder);
})();
