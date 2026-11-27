/* Skill-bank best and last scores, one record per learner slot. Device only. */
(function(root){
'use strict';
var NAMES=[['Fox','狐狸'],['Owl','貓頭鷹'],['Otter','水獺']];
var SKILL=/^[A-Za-z0-9_-]{1,64}$/;
var LEVEL=/^[a-z0-9-]{1,24}$/;
var DAY=/^\d{4}-\d{2}-\d{2}$/;
function key(grade,slot){return 'mathquiz-p'+grade+'-skill-score-v1-'+slot;}
function slotOf(search){
 var p=new URLSearchParams(search==null?root.location.search:search);
 var n=Number(p.get('learner'));
 return n===0||n===1||n===2?n:0;
}
function storage(){try{var s=root.localStorage;if(!s)return null;s.getItem(key(1,0));return s;}catch(e){return null;}}
function empty(){return {version:1,skills:{}};}
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function resultOf(raw){
 if(!raw||typeof raw!=='object')return null;
 var score=Number(raw.score),total=Number(raw.total);
 if(!Number.isInteger(score)||!Number.isInteger(total)||score<0||total<=0||score>total||total>500)return null;
 if(!LEVEL.test(raw.level||'')||!/^([0-3]|all)$/.test(String(raw.set||'')))return null;
 if(!DAY.test(raw.at||''))return null;
 return {score:score,total:total,level:raw.level,set:String(raw.set),at:raw.at};
}
function clean(parsed){
 var out=empty();
 if(!parsed||parsed.version!==1||!parsed.skills||typeof parsed.skills!=='object'||Array.isArray(parsed.skills))return null;
 Object.keys(parsed.skills).forEach(function(id){
  if(!SKILL.test(id))return;
  var row=parsed.skills[id];
  if(!row||typeof row!=='object')return;
  var best=resultOf(row.best),last=resultOf(row.last);
  if(best||last)out.skills[id]={best:best||last,last:last||best};
 });
 return out;
}
function read(grade,slot){
 var s=storage(),id=key(grade,slot);
 if(!s)return {ok:false,reason:'unavailable',data:empty()};
 var raw;try{raw=s.getItem(id);}catch(e){return {ok:false,reason:'unavailable',data:empty()};}
 if(!raw)return {ok:true,reason:'',data:empty()};
 if(raw.length>200000)return {ok:false,reason:'read',data:empty()};
 try{
  var data=clean(JSON.parse(raw));
  if(!data)return {ok:false,reason:'read',data:empty()};
  return {ok:true,reason:'',data:data};
 }catch(e){return {ok:false,reason:'read',data:empty()};}
}
function better(next,prev){
 if(!next)return false;
 if(!prev)return true;
 var nr=next.score/next.total,pr=prev.score/prev.total;
 return nr>pr||(nr===pr&&next.score>prev.score);
}
function record(opt){
 opt=opt||{};
 var grade=Number(opt.grade),slot=opt.slot===0||opt.slot===1||opt.slot===2?opt.slot:slotOf();
 if(grade<1||grade>6)return {ok:false,reason:'bad'};
 if(!SKILL.test(opt.skill||''))return {ok:false,reason:'bad'};
 var made={score:Number(opt.score),total:Number(opt.total),level:String(opt.level||''),set:String(opt.set||''),at:today()};
 if(!resultOf(made))return {ok:false,reason:'bad'};
 var got=read(grade,slot);
 var data=got.data;
 var row=data.skills[opt.skill]||{};
 data.skills[opt.skill]={best:better(made,row.best)?made:(row.best||made),last:made};
 var s=storage();
 if(!s)return {ok:false,reason:'unavailable',replaced:got.reason==='read',data:data};
 try{
  var raw=JSON.stringify({version:1,skills:data.skills});
  if(raw.length>200000)return {ok:false,reason:'write',replaced:got.reason==='read',data:data};
  s.setItem(key(grade,slot),raw);
  return {ok:true,reason:'',replaced:got.reason==='read',data:data};
 }catch(e){return {ok:false,reason:'unavailable',replaced:got.reason==='read',data:data};}
}
function line(lang,got,skill){
 var zh=lang==='zh',row=got.data&&got.data.skills?got.data.skills[skill]:null;
 if(!got.ok&&got.reason==='unavailable')return zh?'此瀏覽器未能讀取已存分數。本頁仍會顯示今次分數。':'Saved scores could not be read in this browser. This page still shows today’s score.';
 if(!got.ok&&got.reason==='read')return zh?'未能讀取已存分數。下次核對會開始新紀錄。':'Saved scores could not be read. The next check starts a new record.';
 if(!row)return zh?'這個學習者的最佳分數會留在此瀏覽器。':'Your best score for this learner stays in this browser.';
 var text=(zh?'最佳 ':'Best ')+row.best.score+' / '+row.best.total+(zh?' · 最近 ':' · Last ')+row.last.score+' / '+row.last.total;
 if(got.replaced)text+=' '+(zh?'（舊紀錄未能讀取，已開始新紀錄。）':'(The old record could not be read, so this is a new one.)');
 return text;
}
function paint(opt){
 opt=opt||{};
 var host=root.document&&root.document.getElementById('skill-score-saved');
 if(!host)return;
 var p=new URLSearchParams(root.location.search);
 var lang=p.get('lang')==='zh'?'zh':'en',zh=lang==='zh',slot=slotOf(),grade=Number(opt.grade);
 var skill=opt.skill||p.get('skill')||'';
 var got=grade>=1&&grade<=6?read(grade,slot):{ok:false,reason:'bad',data:empty()};
 var options=NAMES.map(function(name,i){return '<option value="'+i+'"'+(i===slot?' selected':'')+'>'+(zh?name[1]:name[0])+'</option>';}).join('');
 host.innerHTML='<label for="skill-learner">'+(zh?'學習者':'Learner')+' <select id="skill-learner">'+options+'</select></label><p id="skill-score-text" role="status">'+line(lang,got,skill).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];})+'</p>';
 var sel=root.document.getElementById('skill-learner');
 if(sel)sel.onchange=function(){var u=new URL(root.location.href);u.searchParams.set('learner',sel.value);root.location.href=u.href;};
}
root.MathQuizSkillScores={key:key,slot:slotOf,read:read,record:record,paint:paint,names:NAMES,today:today};
})(typeof window!=='undefined'?window:globalThis);
