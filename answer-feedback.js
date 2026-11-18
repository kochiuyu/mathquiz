/* Presentation only: read completed marking; never award points or advance a level. */
(()=>{
 'use strict';
 const p=new URLSearchParams(location.search),view=p.get('view')||'quiz',smart=location.pathname.endsWith('/smart-practice.html');
 if(['paper','key','build','browse'].includes(view)||p.has('sheet'))return;
 if(!smart&&!document.querySelector('form .feedback, #practice-form, form [id^="feedback"]'))return;
 const zh=document.documentElement.lang.startsWith('zh')||p.get('lang')==='zh',t=(en,cn)=>zh?cn:en,key='mathquiz-answer-sound-v1';
 let enabled=false,context=null,serial=0;const voices=new Set(),snapshots=new WeakMap();
 try{enabled=localStorage.getItem(key)==='on';}catch{}
 const Audio=window.AudioContext||window.webkitAudioContext;
 const tools=document.createElement('div');tools.className='answer-tools screen-only';
 const toggle=document.createElement('button');toggle.type='button';toggle.id='answer-sound';toggle.setAttribute('aria-pressed',String(enabled));
 const note=document.createElement('span');note.className='answer-sound-note';note.setAttribute('role','status');
 tools.append(toggle,note);document.querySelector('header')?.after(tools);
 function label(){toggle.textContent=!Audio?t('Sound unavailable','未能播放音效'):enabled?t('Sound: on','音效：開'):t('Sound: off','音效：關');toggle.setAttribute('aria-pressed',String(enabled));toggle.disabled=!Audio;toggle.title=t('Optional sounds for correct answers','答對時播放音效（可選）');}
 function stop(){serial++;for(const v of voices){try{v.osc.stop();}catch{}v.osc.disconnect();v.gain.disconnect();}voices.clear();}
 function ready(){try{if(!Audio||!enabled)return Promise.resolve(false);if(!context||context.state==='closed')context=new Audio();return Promise.resolve(context.state==='suspended'?context.resume():null).then(()=>context.state==='running').catch(()=>false);}catch{return Promise.resolve(false);}}
 function sound(kind){if(!enabled||document.hidden)return;const stamp=++serial;ready().then(ok=>{if(!ok||stamp!==serial||!enabled||document.hidden)return;stop();const start=context.currentTime,notes=kind==='complete'?[523.25,659.25,783.99]:kind==='promote'?[523.25,783.99]:[659.25];try{notes.forEach((frequency,i)=>{const osc=context.createOscillator(),gain=context.createGain(),at=start+i*.12,v={osc,gain};osc.type='sine';osc.frequency.setValueAtTime(frequency,at);gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.055,at+.015);gain.gain.exponentialRampToValueAtTime(.001,at+.17);osc.connect(gain);gain.connect(context.destination);voices.add(v);osc.onended=()=>{osc.disconnect();gain.disconnect();voices.delete(v);};osc.start(at);osc.stop(at+.19);});}catch{stop();}});}
 toggle.onclick=()=>{enabled=!enabled;if(!enabled)stop();else ready();try{localStorage.setItem(key,enabled?'on':'off');note.textContent='';}catch{note.textContent=t('This preference lasts for this page only.','此選擇只在本頁保留。');}label();};label();
 window.addEventListener('storage',e=>{if(e.key===key||e.key===null){enabled=e.key===key&&e.newValue==='on';if(!enabled)stop();label();}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});window.addEventListener('pagehide',stop);
 function outputs(form){return [...form.querySelectorAll('.feedback,[id^="feedback"],#practice-feedback')];}
 function eligible(form){return form instanceof HTMLFormElement&&(form.id==='smart-form'||form.id==='practice-form'||outputs(form).length>0);}
 document.addEventListener('submit',e=>{const form=e.target;if(!eligible(form))return;snapshots.set(e,{active:!!form.querySelector('input:not(:disabled),select:not(:disabled)'),texts:new Map(outputs(form).map(f=>[f,f.textContent])),attempts:window.MathQuizSmartApp?.state.attempts});},true);
 function decorate(out,kind='correct',message=''){
  out.classList.add('answer-success');if(kind==='promote'||kind==='complete')out.classList.add('answer-milestone');
  const badge=document.createElement('span');badge.className='answer-celebration';badge.dataset.kind=kind;
  const icon=document.createElement('span');icon.className='answer-tick';icon.setAttribute('aria-hidden','true');icon.textContent=kind==='correct'?'✓':'★';badge.append(icon);
  if(message){const text=document.createElement('span');text.textContent=message;badge.append(text);}out.before(badge);
 }
 document.addEventListener('submit',e=>{
  const before=snapshots.get(e),form=e.target;if(!before?.active)return;
  if(form.id==='smart-form'){
   const app=window.MathQuizSmartApp,state=app?.state;if(!state||state.attempts===before.attempts||!state.correct)return;
   const kind=state.phase==='complete'?'complete':state.phase==='promote'?'promote':'correct';
   const levels=['easy','normal','difficult'],next=app.bank.levels[levels[state.level+1]],message=kind==='complete'?t('Difficult completed!','完成較難級！'):kind==='promote'?t('Ready for ','準備挑戰')+next[zh?1:0]+'!':'';
   decorate(kind==='complete'?document.querySelector('#smart-complete h2'):document.getElementById('smart-feedback'),kind,message);sound(kind);return;
  }
  let count=0;
  for(const out of outputs(form)){
   if(!out.textContent||out.textContent===before.texts.get(out))continue;
   out.previousElementSibling?.classList.contains('answer-celebration')&&out.previousElementSibling.remove();out.classList.remove('answer-success','answer-milestone');
   const score=out.textContent.match(/^(\d+)\s*\/\s*(\d+)/);
   const correct=out.id==='practice-feedback'?/^(Correct on the first try\.|Correct after a hint\.|第一次答對。|看提示後答對。)/.test(out.textContent):out.dataset.correct==='true'||!!(score&&+score[2]>0&&+score[1]===+score[2]);
   if(correct){decorate(out);count++;}
  }
  if(count)sound('correct');
 });
 document.addEventListener('click',e=>{if(e.target.closest('#retry,#smart-next,#smart-restart,#practice-next'))stop();if(e.target.closest('#retry')){document.querySelectorAll('.answer-celebration').forEach(n=>n.remove());document.querySelectorAll('.answer-success').forEach(n=>n.classList.remove('answer-success','answer-milestone'));}});
})();
