(() => {
 const p=new URLSearchParams(location.search),zh=p.get('lang')==='zh',t=(en,cn)=>zh?cn:en;
 const code=document.body.dataset.unit||'',grade=code[0]||'';
 const browse='../?'+new URLSearchParams({view:'browse',lang:zh?'zh':'en',p:grade,unit:code,mode:'activity'});
 const original=document.querySelector('nav');if(original)original.classList.add('activity-tools');
 const header=document.createElement('header');header.className='activity-shell screen-only';header.innerHTML='<a class="brand" href="../?lang='+(zh?'zh':'en')+'">Math<span>Quiz</span></a><a href="'+browse+'">'+t('Teacher activities','教師活動')+' · '+code+'</a>';
 document.body.prepend(header);
 const section=document.getElementById(zh?'zh':'en');
 if(section){section.tabIndex=-1;const skip=document.createElement('a');skip.className='activity-skip';skip.href='#'+section.id;skip.textContent=t('Skip to pupil activity','跳至學生活動');header.before(skip);}
 const back=document.getElementById('back');if(back){back.href=browse;back.textContent='← '+t('Back to unit resources','返回單元資源');}
 const note=document.createElement('p');note.className='activity-context screen-only';note.textContent=t('Pupil sheet · Open the teacher key for preparation, assessment criteria and worked examples.','學生工作紙 · 開啟教師解答，查看準備事項、評估準則及解題示例。');if(original)original.after(note);
 document.querySelectorAll('nav a[href*="lang="]').forEach(a=>{const u=new URL(a.href);const key=document.getElementById('key-toggle');a.addEventListener('click',()=>{if(key?.getAttribute('aria-expanded')==='true')u.searchParams.set('key','1');else u.searchParams.delete('key');a.href=u.href;});});
})();
