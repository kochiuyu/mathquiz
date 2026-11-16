/* External release5 snippet. Load before regression.js and call, INSIDE its async
 IIFE, await run2N2ReleaseChecks({check,assert,shapeFrame,families,numericAnswer}).
 Adds38 check rows. Does not change baseline digests/counts. Browser execution pending. */
async function run2N2ReleaseChecks({check,assert,shapeFrame,families,numericAnswer}){
 const ids=['addcarry2a','smartadd2a','subborrow2a','subchain2a','addstory2a','substory2a'];
 const get=id=>{const f=families.find(f=>f.id===id);assert(f,'missing family '+id);return f;};
 const loc=(pair,l)=>pair[l==='zh'?1:0];
 const fw=n=>String(n).replace(/[0-9]/g,c=>String.fromCharCode(c.charCodeAt(0)+0xfee0));
 const url=(id,l,view='')=>'?v=3&lang='+l+'&p=2&items='+id+'-0'+(view?'&view='+view:'');
 async function withFrames(run){const fs=[];try{await run(async q=>{const f=await shapeFrame(q);fs.push(f);return f;});}finally{fs.forEach(f=>f.remove());}}
 const d=f=>f.contentDocument;
 const submit=f=>d(f).querySelector('form').requestSubmit();
 const fill=(f,values,qi=0)=>values.forEach((v,j)=>{const el=d(f).querySelector('[name="q'+qi+'f'+j+'"]');assert(el,'missing field '+qi+'/'+j);el.value=String(v);});
 const score=(f,n,total)=>assert(d(f).getElementById('status').textContent.includes(n+' / '+total),'score expected '+n+'/'+total+': '+d(f).getElementById('status').textContent);
 const tick=f=>new Promise(resolve=>f.contentWindow.requestAnimationFrame(()=>f.contentWindow.requestAnimationFrame(resolve)));
 await check('P2 2N2 ·72 finite variants and numeric contract',()=>{
  let count=0;for(const id of ids){const f=get(id);assert(f.grade===2&&f.code==='2N2'&&f.count===12,'metadata '+id);for(let i=0;i<12;i++){
   const q=f.make(i),m=q.arithmetic2N2,ns=m.nums;let sum=BigInt(ns[0]);for(const x of ns.slice(1))sum=m.op==='+'?sum+BigInt(x):sum-BigInt(x);
   assert(q.answer.at(-1)===Number(sum)&&sum>=0n&&sum<1000n,'oracle '+id+'-'+i);assert(ns.length<=3&&ns.every(x=>x>=0&&x<=(m.op==='+'?999:99)),'bounds '+id);
   assert(q.marks===q.fields.length&&q.fields.length===q.answer.length,'field/mark schema '+id);
   for(const answer of q.answer){for(const s of [String(answer),fw(answer),' '+answer+' ',answer+'.0','+'+answer,(answer*2)+'/2'])assert(numericAnswer(s,answer,false),'alias rejected '+s);for(const s of ['',answer+' books','1e3','0x10',answer+'+0','1/0'])assert(!numericAnswer(s,answer,false),'invalid accepted '+s);}
   if(id==='smartadd2a')assert(q.answer[0]===ns[0]+ns[2],'pair subtotal');if(id==='subchain2a')assert(q.answer[0]===ns[0]-ns[1],'subtraction subtotal');count++;
  }}assert(count===72,'72 variants');
 });
 for(const l of ['en','zh']){
  await check('P2 2N2 ·'+l+' all six builder selections',()=>withFrames(async open=>{
   const frame=await open('?v=3&lang='+l+'&p=2&view=build'),doc=d(frame);for(const s of doc.querySelectorAll('#mix select'))s.value='0';
   for(const id of ids){const s=doc.querySelector('#mix select[name="'+id+'"]');assert(s,'selector '+id);s.value='1';assert(s.closest('label').textContent.includes(loc(get(id).label,l)),'builder label '+id);}
   const loaded=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('builder submit navigation timeout')),20000);frame.addEventListener('load',()=>{clearTimeout(timer);resolve();},{once:true});});doc.getElementById('mix').requestSubmit();await loaded;
   const now=d(frame),selected=new URL(frame.contentWindow.location.href).searchParams.get('items').split('.');assert(selected.length===6&&ids.every(id=>selected.some(s=>s.startsWith(id+'-'))),'builder generated six families');assert(now.querySelectorAll('fieldset').length===6,'builder six previews');assert(now.querySelector('.builder-totals').textContent.includes('8'),'builder8marks');assert(new URL(now.getElementById('take').href).searchParams.get('items')===selected.join('.'),'pupil link preserves set');
  }));
  for(const id of ids)await check('P2 2N2 ·'+l+' '+id+' blank, invalid, correct',()=>withFrames(async open=>{
   const q=get(id).make(0),f=await open(url(id,l));assert(d(f).querySelector('legend').textContent.includes(loc(q.prompt,l)),'localized pupil prompt');submit(f);assert(d(f).getElementById('status').textContent.includes(l==='en'?'Please complete question 1':'請完成第 1'),'blank accepted');assert(!d(f).querySelector('input').disabled,'blank locked input');fill(f,q.answer.map(a=>a+' books'));submit(f);score(f,0,q.marks);assert([...d(f).querySelectorAll('fieldset input')].every(x=>x.disabled),'marked inputs not locked');assert(!d(f).getElementById('retry').hidden,'retry absent');
   const retried=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('pupil retry navigation timeout')),20000);f.addEventListener('load',()=>{clearTimeout(timer);resolve();},{once:true});});d(f).getElementById('retry').click();await retried;assert([...d(f).querySelectorAll('fieldset input')].every(x=>!x.disabled&&x.value===''),'retry failed to reset');fill(f,q.answer.map(fw));submit(f);score(f,q.marks,q.marks);assert(d(f).getElementById('feedback0').textContent.includes(loc(q.why,l)),'worked feedback missing');
  }));
  for(const id of ['smartadd2a','subchain2a'])await check('P2 2N2 ·'+l+' '+id+' partial scoring both fields',()=>withFrames(async open=>{
   const q=get(id).make(0);for(const wrongIndex of [0,1]){const f=await open(url(id,l));const vals=[...q.answer];vals[wrongIndex]++;fill(f,vals);submit(f);score(f,1,2);assert(d(f).getElementById('feedback0').textContent.startsWith('1 / 2'),'partial feedback');}
   const blank=await open(url(id,l));fill(blank,[q.answer[0],'']);submit(blank);assert(d(blank).getElementById('status').textContent.includes(l==='en'?'Please complete':'請完成'),'half blank was partially marked');
  }));
  await check('P2 2N2 ·'+l+' pupil numeric aliases stay compatible',()=>withFrames(async open=>{
   // One six-family paper simultaneously exercises +,decimal,fraction,fullwidth,spaces,leadingzeros.
   const frame=await open('?v=3&lang='+l+'&p=2&items='+ids.map(x=>x+'-0').join('.'));
   const aliases=[a=>'+'+a,a=>a+'.0',a=>(a*2)+'/2',fw,a=>' '+a+' ',a=>'00'+a];ids.forEach((id,i)=>fill(frame,get(id).make(0).answer.map(aliases[i]),i));submit(frame);score(frame,8,8);
  }));
  for(const view of ['paper','key'])await check('P2 2N2 ·'+l+' '+view+' labels, code and PDF',()=>withFrames(async open=>{
   const itemIds=ids.map(x=>x+'-0').join('.'),frame=await open('?v=3&lang='+l+'&p=2&items='+itemIds+'&view='+view),doc=d(frame),fields=[...doc.querySelectorAll('fieldset')];assert(fields.length===6,'six print questions');assert(doc.querySelector('.paper-code'),'paper code missing');
   const other=await open('?v=3&lang='+l+'&p=2&items='+itemIds+'&view='+(view==='paper'?'key':'paper'));assert(doc.querySelector('.paper-code').textContent===d(other).querySelector('.paper-code').textContent,'paper/key code mismatch');
   ids.forEach((id,i)=>{const q=get(id).make(0),text=fields[i].textContent;if(view==='key'){q.fields.forEach((label,j)=>assert(text.includes(loc(label,l)+': '+q.answer[j]),'labelled key '+id+'/'+j));assert(text.includes(loc(q.why,l)),'worked key '+id);}else assert(!text.includes(loc(q.why,l)),'pupil paper leaks worked key');});
   assert(doc.getElementById('download-pdf'),'PDF download control');const blob=await frame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());assert(raw.startsWith('%PDF-')&&raw.includes('/ToUnicode')&&(raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,'PDF page/selectable text');
  }));
  for(const id of ids)await check('P2 2N2 ·'+l+' '+id+' full practice and repeated-submit guard',()=>withFrames(async open=>{
   const family=get(id),frame=await open('?lang='+l+'&p=2&view=practice&skill='+id),doc=d(frame);assert(doc.querySelector('h1').textContent===loc(family.label,l),'practice title');assert(doc.getElementById(l==='en'?'zh':'en').href.includes('skill='+id),'language switch loses skill');
   // Blank must neither consume an attempt nor allow Next.
   let form=doc.getElementById('practice-form');form.requestSubmit();assert(doc.getElementById('practice-feedback').textContent.includes(l==='en'?'Complete every':'請填寫每個'),'practice blank');doc.getElementById('practice-next').click();assert(doc.querySelector('legend').textContent.includes(loc(family.make(0).prompt,l)),'early Next advanced');
   // Q1(variant0): one incorrect field, targeted hint, then correct retry => not first-try.
   let q=family.make(0),wrong=q.answer.map(String);wrong[wrong.length-1]='bad';fill(frame,wrong);form.requestSubmit();assert(doc.getElementById('practice-feedback').textContent.includes(loc(q.arithmetic2N2.hint,l)),'targeted hint');assert(doc.getElementById('practice-feedback').textContent.includes(loc(q.fields.at(-1),l)),'missed-field label');assert(doc.getElementById('practice-next').hidden,'hint must not finish');fill(frame,q.answer.map(fw));form.requestSubmit();assert(doc.getElementById('practice-feedback').textContent.includes(l==='en'?'Correct after a hint':'看提示後答對'),'correct retry');
   let before=doc.getElementById('practice-feedback').textContent;form.dispatchEvent(new frame.contentWindow.Event('submit',{bubbles:true,cancelable:true}));assert(doc.getElementById('practice-feedback').textContent===before,'finished submit changed result');assert([...form.querySelectorAll('input')].every(x=>x.disabled),'finished fields unlocked');doc.getElementById('practice-next').click();
   // Q2(variant6): decimal aliases correct first try => sole first-try point.
   q=family.make(6);assert(doc.querySelector('legend').textContent.includes(loc(q.prompt,l)),'wrong second variant');fill(frame,q.answer.map(a=>a+'.0'));doc.getElementById('practice-form').requestSubmit();assert(doc.getElementById('practice-feedback').textContent.includes(l==='en'?'Correct on the first try':'第一次答對'),'first-try feedback');doc.getElementById('practice-next').click();
   // Q3(variant11): both attempts wrong; labelled revealed answers and final1/3.
   q=family.make(11);assert(doc.querySelector('legend').textContent.includes(loc(q.prompt,l)),'wrong third variant');fill(frame,q.answer.map(()=>'-999'));form=doc.getElementById('practice-form');form.requestSubmit();form.requestSubmit();const feedback=doc.getElementById('practice-feedback').textContent;q.fields.forEach((label,j)=>assert(feedback.includes(loc(label,l)+': '+q.answer[j]),'revealed field answer missing'));before=feedback;form.dispatchEvent(new frame.contentWindow.Event('submit',{bubbles:true,cancelable:true}));assert(doc.getElementById('practice-feedback').textContent===before,'second-attempt finished guard');doc.getElementById('practice-next').click();assert(doc.querySelector('h1').textContent===(l==='en'?'Practice complete':'練習完成'),'completion heading');assert(doc.querySelector('[role="status"]').textContent.includes('1 / 3'),'first-try total must be1/3');assert(doc.querySelector('.builder-link').href.includes('skill='+id),'restart link wrong');
  }));
 }
 await check('P2 2N2 ·320/375px bilingual pupil, practice, paper, key',()=>withFrames(async open=>{
  for(const l of ['en','zh'])for(const query of [url('smartadd2a',l),url('subchain2a',l,'paper'),url('smartadd2a',l,'key'),'?lang='+l+'&p=2&view=practice&skill=subchain2a']){const frame=await open(query);for(const width of [320,375]){frame.style.width=width+'px';await tick(frame);assert(d(frame).documentElement.scrollWidth<=width,'phone overflow '+width+' '+query);assert([...d(frame).querySelectorAll('fieldset')].every(el=>el.getBoundingClientRect().width>0),'invisible phone question');}}
 }));
}
