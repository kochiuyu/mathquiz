/* Device-only learner slots; no names, tracking or network storage. */
((root)=>{
'use strict';const KEY='mathquiz-learning-v1',pathIds={first:['count','tens','add'],hundred:['bundles','compare','order'],subtract:['bonds','takeaway','partsback'],groups:['twos','fives','estimate'],relations:['position','parity','difference'],calculate:['columnadd','addthree','columnsubtract'],measure:['alignlength','straightgap','equalunits'],ruler:['readcm','comparecm','estimatecm'],money:['coinvalues','pricetags','coinequal'],time:['readclock','elapsedhours','calendays'],solids:['solidnames','solidobjects','solidexplore'],flat:['pointlines','flatnames','joinshapes'],positions:['leftright','overunder','frontbetween']},ids=Object.values(pathIds).flat(),levels=['easy','normal','difficult'],stages=['learn','together','practice','quiz','result'];
// Capacity follows the permitted schema; ample room for three fully populated pupils.
const MAX_RECORD_LENGTH=4096+3*(ids.length*512+Object.keys(pathIds).length*320);
const empty=()=>({lessons:{},cursor:{lesson:'count',stage:'learn',level:'easy'},attempt:0,quiz:null,checks:{},pathCursors:{}});
function cleanProfile(raw){const p=empty();if(!raw||typeof raw!=='object')return p;
 for(const id of ids){const x=raw.lessons?.[id];if(!x||typeof x!=='object')continue;p.lessons[id]={learn:x.learn===true,together:x.together===true,practice:x.practice===true,step:Number.isInteger(x.step)&&x.step>=0&&x.step<=2?x.step:0};for(const stage of ['together','practice']){const a=x[stage+'Answers'];p.lessons[id][stage+'Answers']=Array.isArray(a)?a.slice(0,stage==='together'?2:3).map(v=>typeof v==='string'?v.slice(0,3):''):[];}
 const l=p.lessons[id];l.levels={};for(const level of levels){const v=x.levels?.[level];l.levels[level]={done:v?.done===true,answers:Array.isArray(v?.answers)?v.answers.slice(0,3).map(a=>typeof a==='string'?a.slice(0,3):''):[]};}
 // Upgrade the previous single practice set to Easy without discarding work.
 if(!x.levels){l.levels.easy={done:x.practice===true,answers:l.practiceAnswers};}l.practice=levels.every(level=>l.levels[level].done);}
 if(ids.includes(raw.cursor?.lesson)&&stages.includes(raw.cursor?.stage))p.cursor={lesson:raw.cursor.lesson,stage:raw.cursor.stage,level:levels.includes(raw.cursor.level)?raw.cursor.level:'easy'};
 for(const pa of Object.keys(pathIds)){const c=raw.pathCursors?.[pa],validIds=pathIds[pa];if(validIds.includes(c?.lesson)&&stages.includes(c?.stage))p.pathCursors[pa]={lesson:c.lesson,stage:c.stage,level:levels.includes(c.level)?c.level:'easy'};}
 p.attempt=Number.isInteger(raw.attempt)&&raw.attempt>=0?Math.min(raw.attempt,999):0;
 if(raw.quiz&&typeof raw.quiz==='object')p.quiz={answers:Array.isArray(raw.quiz.answers)?raw.quiz.answers.slice(0,6).map(v=>typeof v==='string'?v.slice(0,3):''):[],submitted:raw.quiz.submitted===true};
 for(const pa of ['hundred','subtract','groups','relations','calculate','measure','ruler','money','time','solids','flat','positions']){const h=raw.checks?.[pa];if(h&&typeof h==='object')p.checks[pa]={attempt:Number.isInteger(h.attempt)&&h.attempt>=0?Math.min(h.attempt,999):0,quiz:h.quiz&&typeof h.quiz==='object'?{answers:Array.isArray(h.quiz.answers)?h.quiz.answers.slice(0,6).map(v=>typeof v==='string'?v.slice(0,3):''):[],submitted:h.quiz.submitted===true}:null};}return p;}
function create(storage,key=KEY){let state={version:1,active:0,profiles:[empty(),empty(),empty()]},available=true,notice='';
 function read(){try{const s=storage.getItem(key);if(s&&s.length<MAX_RECORD_LENGTH){const raw=JSON.parse(s);if(raw.version!==1||!Array.isArray(raw.profiles))throw Error('format');state={version:1,active:[0,1,2].includes(raw.active)?raw.active:0,profiles:[0,1,2].map(i=>cleanProfile(raw.profiles[i]))};}else if(s)throw Error('size');else state={version:1,active:0,profiles:[empty(),empty(),empty()]};}catch(e){notice='read';}return state;}
 read();
 function save(){try{storage.setItem(key,JSON.stringify(state));available=true;notice='';return true;}catch(e){available=false;notice='write';return false;}}
 // Probe access without changing any learner's saved content.
 try{storage.setItem(key+'-check','1');storage.removeItem(key+'-check');}catch(e){available=false;notice='write';}
 return {key,get state(){return state;},get profile(){return state.profiles[state.active];},get available(){return available;},get notice(){return notice;},save,read,select(i){if(![0,1,2].includes(i))return;state.active=i;save();},reset(){state.profiles[state.active]=empty();save();},update(fn){fn(state.profiles[state.active]);save();}};
}
root.MathQuizLearnStore={create,cleanProfile,key:KEY,maxRecordLength:MAX_RECORD_LENGTH};if(typeof module!=='undefined')module.exports=root.MathQuizLearnStore;
})(typeof window!=='undefined'?window:globalThis);
