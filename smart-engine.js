/* Session learning target: three consecutive unassisted, wholly correct tasks. */
(function(root){
 const levels=['easy','normal','difficult'];
 const start=()=>({level:0,index:0,round:0,streak:0,attempts:0,helped:false,phase:'answer',correct:false});
 function step(s,event){
  s={...s};
  if(event.type==='help'&&s.phase==='answer'){s.helped=true;s.streak=0;}
  if(event.type==='mark'&&s.phase==='answer'){
   s.correct=event.correct===true;s.attempts++;s.streak=s.correct&&!s.helped?s.streak+1:0;
   s.phase=s.streak===3?(s.level===2?'complete':'promote'):'review';
  }
  if(event.type==='next'&&['review','promote'].includes(s.phase)){
   if(s.phase==='promote'){s.level++;s.index=0;s.round=0;s.streak=0;}
   else {s.index=(s.index+1)%12;if(s.index===0)s.round++;}
   s.phase='answer';s.helped=false;s.correct=false;
  }
  return s;
 }
 const api={levels,start,step};root.MathQuizSmart=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
