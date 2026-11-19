/* Shared worksheet navigation; pupil tasks and teacher-key state remain separate. */
(() => {
 const p=new URLSearchParams(location.search),zh=p.get('lang')==='zh',lang=zh?'zh':'en',t=(en,cn)=>zh?cn:en;
 const code=document.body.dataset.unit||'',grade=code[0]||'',browse='../?'+new URLSearchParams({view:'browse',lang,p:grade,unit:code,mode:'activity'});
 const original=document.querySelector('nav');if(original)original.classList.add('activity-tools');
 const header=document.createElement('header');header.className='activity-shell screen-only';
 header.innerHTML='<a class="brand" href="../?lang='+lang+'">Math<span>Quiz</span></a><nav class="activity-languages" aria-label="'+t('Language','語言')+'"></nav><a class="activity-back" href="'+browse+'">'+t('Back to topic activities','返回課題活動')+' · '+code+'</a>';
 document.body.prepend(header);
 const languages=header.querySelector('.activity-languages');
 for(const l of ['en','zh']){const a=document.createElement('a'),url=new URL(location.href);url.searchParams.set('lang',l);a.href=url.href;a.lang=l==='zh'?'zh-HK':'en';a.textContent=l==='zh'?'繁體中文':'English';a.id='activity-'+l;a.setAttribute('aria-current',String(l===lang));a.onclick=()=>{const u=new URL(a.href);if(document.getElementById('key-toggle')?.getAttribute('aria-expanded')==='true')u.searchParams.set('key','1');else u.searchParams.delete('key');a.href=u.href;};languages.append(a);}
 original?.querySelectorAll('a[href*="lang="],#back').forEach(a=>a.remove());
 const section=document.getElementById(lang);if(section){section.tabIndex=-1;const skip=document.createElement('a');skip.className='activity-skip';skip.href='#'+section.id;skip.textContent=t('Skip to pupil activity','跳至學生活動');header.before(skip);}
 const key=document.getElementById('key-toggle'),print=document.getElementById('print');
 if(p.get('key')==='1'&&key?.getAttribute('aria-expanded')!=='true')key.click();
 const label=()=>{if(print)print.textContent=key?.getAttribute('aria-expanded')==='true'?t('Print paper and worked answers','列印工作紙及解答'):t('Print pupil paper','列印工作紙');};
 key?.addEventListener('click',label);label();
 const note=document.createElement('p');note.className='activity-context screen-only';note.textContent=t('Pupil paper. Open the teacher key for materials, preparation and assessment guidance.','學生工作紙。開啟教師解答，查看物資、準備事項及評估建議。');original?.after(note);
 window.MathQuizNotation?.decorate(section||document);
})();

