/* Separate versioned records: an old P1 tab cannot erase P2 work. */
((root)=>{
'use strict';const D=root.MathQuizP2Data||(typeof require==='function'?require('./p2-learn-data.js'):null),ids=new Set(D.all.map(q=>q.id)),lessonIds=D.lessons.map(l=>l.id),stages=['learn','together','easy','normal','difficult','check','map'];
const KEY='mathquiz-p2-learning-v1',MAX=4096+D.all.length*4096;
const text=(s,n=800)=>typeof s==='string'?s.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g,'').slice(0,n):'';
const empty=()=>({version:1,cursor:{lesson:lessonIds[0],stage:'learn'},answers:{},estimates:{},notes:{},done:{},hints:{},checkSubmitted:false});
function clean(raw){if(!raw||raw.version!==1||Array.isArray(raw))throw Error('format');const p=empty();
 if(lessonIds.includes(raw.cursor?.lesson)&&stages.includes(raw.cursor?.stage))p.cursor={lesson:raw.cursor.lesson,stage:raw.cursor.stage};
 for(const id of ids){if(typeof raw.answers?.[id]==='string')p.answers[id]=text(raw.answers[id],32);if(raw.hints?.[id]===true)p.hints[id]=true;const e=raw.estimates?.[id];if(e&&/^\d{1,3}$/.test(e.original)&&Number(e.original)>0)p.estimates[id]={original:e.original,reason:text(e.reason),revealed:e.revealed===true,reflection:text(e.reflection)};}
 for(const id of lessonIds){p.notes[id]=text(raw.notes?.[id]);p.done[id]={};for(const s of stages)if(raw.done?.[id]?.[s]===true)p.done[id][s]=true;}
 p.checkSubmitted=raw.checkSubmitted===true;return p;
}
function create(storage,slot=0,key=KEY){let state=empty(),notice='',invalid=false,unavailable=false;const record=key+'-'+slot;
 function read(){let value;try{value=storage.getItem(record);}catch(e){unavailable=true;notice='read';return state;}try{if(value&&value.length>MAX)throw Error('size');state=value?clean(JSON.parse(value)):empty();invalid=false;unavailable=false;notice='';}catch(e){invalid=true;notice='read';}return state;}
 read();return {key:record,get profile(){return state;},get notice(){return notice;},read,update(fn){if(!unavailable)read();if(invalid)return false;fn(state);try{storage.setItem(record,JSON.stringify(state));notice='';unavailable=false;return true;}catch(e){unavailable=true;notice='write';return false;}},reset(){state=empty();invalid=false;try{storage.setItem(record,JSON.stringify(state));unavailable=false;notice='';return true;}catch(e){unavailable=true;notice='write';return false;}}};
}
root.MathQuizP2Store={create,empty,clean,key:KEY,maxLength:MAX};if(typeof module!=='undefined')module.exports=root.MathQuizP2Store;
})(typeof window!=='undefined'?window:globalThis);
