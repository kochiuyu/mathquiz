(()=>{'use strict';
const pairs=[[12,18],[4,6],[6,8],[8,12],[9,12],[15,20],[6,15],[7,9],[5,8],[4,12],[1,8],[6,6]];
let pairIndex=0,step=0,compareKind='multiples';
const factors=n=>Array.from({length:n},(_,i)=>i+1).filter(x=>n%x===0),shared=(a,b)=>factors(a).filter(x=>b%x===0),hcf=(a,b)=>shared(a,b).at(-1),lcm=(a,b)=>{for(let n=a;n<=a*b;n+=a)if(n%b===0)return n;},norm=x=>String(x??'').replace(/[０-９]/g,c=>String(c.charCodeAt(0)-65296)).replace(/，/g,',').trim();
function list(raw){const parts=norm(raw).split(',').map(x=>x.trim());if(parts.some(x=>!/^\d{1,4}$/.test(x)||+x<1||+x>10000)||parts.length>100)return null;const a=parts.map(Number);return new Set(a).size===a.length?a:null;}
const eq=(a,b)=>!!a&&a.length===b.length&&[...a].sort((x,y)=>x-y).join()===b.join(),whole=raw=>/^\d{1,4}$/.test(norm(raw))&&+norm(raw)>0?+norm(raw):null;
function inspect(kind,a,b,v){
 const H=hcf(a,b),M=lcm(a,b),bad=(en,zh,valid=true)=>({valid,correct:false,message:[en,zh]});
 if(kind==='ladder'){
  if(whole(v.lcm)===null||whole(v.hcf)===null)return bad('Enter positive whole numbers for both answers.','兩個答案都要填正整數。',false);
  const lines=norm(v.rows).split(/\r?\n/).filter(x=>x.trim());if(lines.length>10)return bad('Use at most 10 rows.','最多填10行。',false);
  let left=a,right=b,product=1;
  for(let i=0;i<lines.length;i++){
   const tokens=lines[i].split(',').map(x=>x.trim());if(tokens.length!==3||tokens.some(x=>whole(x)===null))return bad('Each row needs three positive numbers: divisor, new left, new right.','每行填三個正整數：除數、新左數、新右數。',false);
   const[d,x,y]=tokens.map(Number);if(d<=1||left%d||right%d||left/d!==x||right/d!==y)return bad(`Look again at row ${i+1}. Divide both current numbers exactly by the same number greater than 1.`,`再看第${i+1}行，用同一個大於1的數整除左右兩數。`);
   left=x;right=y;product*=d;
  }
  if(hcf(left,right)!==1)return bad('Keep dividing. The bottom pair still has a common factor greater than 1.','繼續除，最下方兩數還有大於1的公因數。');
  if(+norm(v.hcf)!==product||+norm(v.lcm)!==product*left*right)return bad('H.C.F.: multiply the side divisors. L.C.M.: multiply those divisors and both bottom numbers. With no rows, use 1 for the side product.','最大公因數：把左邊除數相乘。最小公倍數：再乘最下方兩數。沒有除法行時，左邊乘積用1。');
 }else{
  const A=list(v.listA),B=list(v.listB),C=list(v.common);if(!A||!B||!C||whole(v.value)===null)return bad('Use positive numbers separated by commas, without repeats. Fill the final answer too.','用逗號分隔正整數，不要重複，並填最後答案。',false);
  if(kind==='factors'){
   if(!eq(A,factors(a))||!eq(B,factors(b)))return bad('Check both factor lists. Include 1 and the number itself; keep every factor once.','檢查兩個因數表，包括1和該數本身，每個因數只記一次。');
   if(!eq(C,shared(a,b)))return bad('Keep all entries that appear in both factor lists.','記下兩個因數表都有的所有數。');
   if(+norm(v.value)!==H)return bad('Choose the greatest shared factor.','選最大的公因數。');
  }else{
   if(A.some((n,i)=>n!==a*(i+1))||B.some((n,i)=>n!==b*(i+1))||A.at(-1)!==B.at(-1))return bad('Start each list at its number. Keep every step until both lists end at the same common multiple.','各表由該數開始，每步都記下，直到兩表以同一個公倍數結束。');
   if(!eq(C,A.filter(n=>B.includes(n))))return bad('Keep all entries shared by your two lists.','記下兩表都有的所有數。');
   if(+norm(v.value)!==M)return bad('Choose the smallest positive shared multiple.','選最小的正公倍數。');
  }
 }
 return {valid:true,correct:true,message:[kind==='ladder'?`The rows and answers agree: L.C.M. ${M}, H.C.F. ${H}.`:`The lists and answer agree: ${kind==='multiples'?'L.C.M. '+M:'H.C.F. '+H}.`,kind==='ladder'?`各行和答案吻合：最小公倍數${M}，最大公因數${H}。`:`列表和答案吻合：${kind==='multiples'?'最小公倍數'+M:'最大公因數'+H}。`]};
}
function current(l){return l.model==='compare'?compareKind:l.model==='lcm'?'multiples':l.model==='hcf'?'factors':l.model;}
function work(l,store,{T,L,E}){
 const kind=current(l),[a,b]=pairs[pairIndex],key=`${kind}-${a}-${b}`,w=store.state.work[key]||{},v=w.draft||{},numeric=(id,label)=>`<label for="work-${id}">${E(label)}<input id="work-${id}" name="${id}" inputmode="numeric" maxlength="8" required value="${E(v[id]||'')}"></label>`,area=(id,label,required=true)=>`<label for="work-${id}">${E(label)}<textarea id="work-${id}" name="${id}" maxlength="300" ${required?'required':''}>${E(v[id]||'')}</textarea></label>`,labels={listA:T(`List for ${a}`,`${a}的列表`),listB:T(`List for ${b}`,`${b}的列表`),common:T('Common entries','共有的數'),value:kind==='multiples'?'L.C.M. · 最小公倍數':'H.C.F. · 最大公因數',rows:T('Division rows','短除法各行'),lcm:'L.C.M. · 最小公倍數',hcf:'H.C.F. · 最大公因數',help:T('Help received','獲得的協助')};
 return `<section class="common-work"><h2>${T('Your method notebook','你的方法筆記')}</h2>${l.model==='compare'?`<label for="work-kind">${T('Method','方法')}<select id="work-kind">${[['multiples',T('List multiples','列倍數')],['factors',T('List factors','列因數')],['ladder',T('Short division','短除法')]].map(([k,t])=>`<option value="${k}" ${kind===k?'selected':''}>${t}</option>`).join('')}</select></label>`:''}<label for="work-pair">${T('Number pair','數對')}<select id="work-pair">${pairs.map(([x,y],i)=>`<option value="${i}" ${i===pairIndex?'selected':''}>${x}, ${y}</option>`).join('')}</select></label><p>${kind==='ladder'?T('Write each row: divisor, new left, new right. Leave rows blank if only 1 is common.','每行寫：除數、新左數、新右數。如果公因數只有1，各行留空。'):kind==='factors'?T('Write both complete factor lists. Use commas.','寫出兩個完整因數表，用逗號分隔。'):T('List multiples until both lists end at the same common multiple. Use commas.','列倍數直到兩表以同一個公倍數結束，用逗號分隔。')}</p><form id="common-work" data-work="${key}" data-kind="${kind}">${kind==='ladder'?area('rows',labels.rows,false)+`<div class="common-lists">${numeric('lcm',labels.lcm)}${numeric('hcf',labels.hcf)}</div>`:`<div class="common-lists">${area('listA',labels.listA)}${area('listB',labels.listB)}</div>${area('common',labels.common)}${numeric('value',labels.value)}`}<details><summary>${T('Record help','記錄協助')}</summary>${area('help',labels.help,false)}</details><button ${w.retry?'disabled':''}>${w.first?T('Keep second method and check','保留第二次方法並核對'):T('Keep first method and check','保留第一次方法並核對')}</button></form><p class="common-work-feedback" id="work-feedback" role="status">${w.first?E(L(inspect(kind,a,b,w.retry||w.first).message)):''}</p>${w.first?`<details class="common-history"><summary>${T('Saved methods','已存方法')}</summary>${['first','retry'].filter(k=>w[k]).map(k=>`<section data-work-record="${k}"><h3>${k==='first'?T('First method','第一次方法'):T('Second method','第二次方法')}</h3>${Object.entries(w[k]).filter(([f])=>kind==='ladder'?['rows','lcm','hcf','help'].includes(f):['listA','listB','common','value','help'].includes(f)).map(([f,x])=>`<p><b>${E(labels[f])}</b></p><pre data-field="${f}">${E(x)||T('(blank)','（空白）')}</pre>`).join('')}</section>`).join('')}</details>`:''}<details><summary>${T('About this notebook','關於此筆記')}</summary><p>${T('Drafts are saved as you type on this browser. First and second methods stay separate. These records do not award a lesson mark or prove independent work.','草稿隨輸入儲存於此瀏覽器，第一次和第二次方法分開保留。這些紀錄不計課堂分數，也不證明獨立完成。')}</p></details></section>`;
}
function render(l,store,C){const {T,L,E}=C;
 const tables=(a,b,A,B)=>`<div class="common-lists"><p>${a}: ${A}</p><p>${b}: ${B}</p></div>`,ladder=rows=>`<table class="common-ladder"><caption>${T('Short division: 8 and 12','短除法：8和12')}</caption><thead><tr><th>${T('Divide by','除以')}</th><th>${T('Left','左')}</th><th>${T('Right','右')}</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
 const steps={
 multiples:[tables(4,6,'4, 8, 12, 16, 20, 24','6, 12, 18, 24')+`<p>${T('Find numbers in both lists.','找兩表都有的數。')}</p>`,`<p class="large-number">12, 24, 36, …</p><p>${T('These are common multiples of 4 and 6.','這些都是4和6的公倍數。')}</p>`,`<p>12 × 1, 12 × 2, 12 × 3, …</p><p>${T('Keep counting in 12s. There is no last common multiple.','繼續每次加12，公倍數沒有最後一個。')}</p>`],
 factors:[tables(12,18,'1, 2, 3, 4, 6, 12','1, 2, 3, 6, 9, 18')+`<p>${T('Find factors in both lists.','找兩表都有的因數。')}</p>`,`<p class="large-number">1, 2, 3, 6</p><p>${T('Each divides 12 and 18 exactly. These are all their common factors.','各數都能整除12和18，這些就是它們的所有公因數。')}</p>`],
 lcm:[tables(8,12,'8, 16, 24','12, 24')+`<p>${T('24 is the first meeting point.','24是第一個共同數。')}</p>`,`<p>L.C.M. = 24</p><p>${T('48 is also common, but it is not the least.','48也是公倍數，但不是最小的。')}</p>`],
 hcf:[tables(8,12,'1, 2, 4, 8','1, 2, 3, 4, 6, 12')+`<p>${T('Common factors: 1, 2, 4.','公因數：1、2、4。')}</p>`,`<p>H.C.F. = 4</p><p>${T('2 is common too, but 4 is the greatest.','2也是公因數，但4才是最大的。')}</p>`],
 ladder:[ladder([['',8,12]])+`<p>${T('Choose a shared factor greater than 1: try 2.','選大於1的公因數，試2。')}</p>`,ladder([[2,8,12],['',4,6]])+`<p>8 ÷ 2 = 4; 12 ÷ 2 = 6</p><p>${T('4 and 6 still share 2. Divide again.','4和6還有公因數2，再除一次。')}</p>`,ladder([[2,8,12],[2,4,6],['',2,3]])+`<p>${T('2 and 3 have only 1 in common. Stop.','2和3的公因數只有1，停止。')}</p>`,`<p>H.C.F. = 2 × 2 = 4</p><p>L.C.M. = 2 × 2 × 2 × 3 = 24</p><p>${T('Use the side divisors for H.C.F. Include both bottom numbers for L.C.M.','最大公因數用左邊除數相乘，最小公倍數再乘最下方兩數。')}</p>`,`<p>${T('For 5 and 8: no division rows. H.C.F. = 1; L.C.M. = 5 × 8 = 40.','5和8不用寫除法行，最大公因數 = 1，最小公倍數 = 5 × 8 = 40。')}</p><p>${T('For 6 and 6: divide both by 6 to get 1, 1. Both answers are 6.','6和6同除以6，得到1、1，兩個答案都是6。')}</p>`],
 compare:[`<p>${T('Bells every 4 and 6 minutes: the next shared time is 12 minutes. Use L.C.M.','每4分鐘和6分鐘響的鐘，下次同響在12分鐘後，用最小公倍數。')}</p>`,`<p>${T('Ribbons of 8 cm and 12 cm: the longest equal pieces are 4 cm. Use H.C.F.','8厘米和12厘米絲帶，等長小段最長4厘米，用最大公因數。')}</p>`,`<p>${T('For 4 and 12: H.C.F. = 4; L.C.M. = 12. Check by lists and short division.','4和12的最大公因數 = 4，最小公倍數 = 12，用列舉和短除法核對。')}</p>`]
 };
 const items=steps[l.model],i=Math.min(step,items.length-1);return `<section class="model"><h2>${T('See one step','看一步')}</h2><div class="common-model-step">${items[i]}</div><div class="actions"><button id="common-back" ${i===0?'disabled':''}>${T('Previous step','上一步')}</button><button id="common-next" ${i===items.length-1?'disabled':''}>${T('Next step','下一步')}</button></div></section>${['lcm','hcf','ladder','compare'].includes(l.model)?work(l,store,C):''}`;
}
function bind(store,{render,saveResult}){
 const on=(id,f)=>document.getElementById(id)?.addEventListener('click',f);
 on('common-back',()=>{step=Math.max(0,step-1);render('','common-back')});on('common-next',()=>{step++;render('','common-next')});
 const form=document.getElementById('common-work'),T=(a,b)=>window.MathQuizP4Learn.lang==='zh'?b:a;
 const read=()=>Object.fromEntries([...form.querySelectorAll('input,textarea')].map(e=>[e.name,e.value]));
 function saveDraft(){if(!form)return true;const ok=store.workDraft(form.dataset.work,read());if(!ok)saveResult(false,'','p4-status');return ok;}
 form?.addEventListener('input',saveDraft);
 for(const id of ['work-pair','work-kind'])document.getElementById(id)?.addEventListener('change',e=>{if(!saveDraft())return;if(id==='work-pair')pairIndex=Number(e.target.value);else compareKind=e.target.value;render('common-work',id)});
 form?.addEventListener('submit',e=>{e.preventDefault();const v=read(),[a,b]=pairs[pairIndex],result=inspect(form.dataset.kind,a,b,v);if(!result.valid){document.getElementById('work-feedback').textContent=T(...result.message);return;}saveResult(store.workAttempt(form.dataset.work,v),'common-work','work-feedback')});
}
window.MathQuizP4Common={render,bind,inspect,list,factors,hcf,lcm,pairs};
})();
