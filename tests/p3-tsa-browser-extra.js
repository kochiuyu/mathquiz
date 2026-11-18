// Loaded by the existing P3 browser runner for its focused TSA release scope.
async function p3TSAExtra({load,check,frame,assert,noOverflow}){
 const ids=Object.keys(P3Skills.skills).filter(id=>id.startsWith('tsa'));
 for(const lang of ['en','zh'])await check('TSA directory and search '+lang,async()=>{const d=await load('skill-levels.html?p=3&q=TSA&lang='+lang,1200),links=[...d.querySelectorAll('.level-skill-card')];assert(links.length===15,'15 new directory entries');for(const id of ids)assert(links.some(a=>new URL(a.href).searchParams.get('skill')===id),'discover '+id);});
 for(const skill of ids)for(const lang of ['en','zh'])await check('Smart practice all levels '+skill+' '+lang,async()=>{
  let d=await load('smart-practice.html?p=3&skill='+skill+'&lang='+lang),w=d.defaultView;
  const reset=d.getElementById('smart-restart');reset.click();
  for(let n=0;n<9;n++){
   const id=d.querySelector('[data-question]').dataset.question,q=P3Skills.questions.find(q=>q.id===id),inputs=[...d.querySelectorAll('#smart-question input,#smart-question select')];
   assert(q&&q.level===['easy','normal','difficult'][Math.floor(n/3)],'expected progression');assert(inputs.length===q.fields.length,'all parts');inputs.forEach((e,j)=>{e.value=q.fields[j].answer;e.dispatchEvent(new w.Event('change',{bubbles:true}));});
   d.getElementById('smart-form').requestSubmit();assert(d.getElementById('smart-feedback').dataset.correct==='true','correct grading');noOverflow(d);
   if(n<8)d.getElementById('smart-next').click();
  }
  assert(d.getElementById('smart-complete'),'completion at Difficult');
 });
 for(const skill of ['tsacalendar3a','tsadial3a','tsachart3a','tsaequivalent3a','tsasolids3a'])for(const lang of ['en','zh'])await check('320px layout '+skill+' '+lang,async()=>{const d=await load('p3-skill-levels.html?skill='+skill+'&level=difficult&lang='+lang,320);noOverflow(d);for(const e of d.querySelectorAll('input,select')){const r=e.getBoundingClientRect();assert(r.left>=0&&r.right<=321,'field bounds');}for(const svg of d.querySelectorAll('.tsa-figure')){const r=svg.getBoundingClientRect();assert(r.right<=321,'diagram fits');}});
 await check('New skill language transfer and partial credit',async()=>{let d=await load('p3-skill-levels.html?skill=tsamoney3a&level=difficult&lang=en'),qs=P3Skills.pick('tsamoney3a','difficult','0'),inputs=[...d.querySelectorAll('#questions input,#questions select')],all=qs.flatMap(q=>q.fields);inputs.forEach((e,j)=>e.value=all[j].answer);inputs[0].value=String(+all[0].answer+1);d.getElementById('questions').requestSubmit();const score=d.getElementById('result').textContent;assert(score.endsWith((all.length-1)+' / '+all.length),'per-field credit');const next=new Promise(resolve=>frame.onload=resolve);d.getElementById('zh').click();await next;d=frame.contentDocument;assert(d.getElementById('result').textContent.endsWith((all.length-1)+' / '+all.length),'score transferred');assert([...d.querySelectorAll('#questions input')].every(e=>e.disabled),'locked state transferred');});
}
