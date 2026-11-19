/* Shared discovery metadata. No question payloads or assessment state. */
window.MathQuizCatalogue = (() => {
 const grades=window.MathQuizSkillDirectory||[];
 const types=grades.flatMap(g=>Object.entries(g.skills).map(([id,s])=>({id,grade:g.grade,...s})));
 function summary(grade){const rows=types.filter(s=>!grade||s.grade===Number(grade)),tsa=rows.filter(s=>s.reference).length;return {total:rows.length,core:rows.length-tsa,tsa};}
 const tsaTypes=types.filter(s=>s.reference);
 const reviewUnits=grades.flatMap(g=>Object.entries(g.units).filter(([code])=>code[1]==='R').map(([code,title])=>({code,title,grade:g.grade,local:true,complete:false})));
 return {types,tsaTypes,reviewUnits,summary};
})();
