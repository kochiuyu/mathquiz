((root)=>{
 if(!root.P1SkillBuild&&typeof require==='function')require('./p1-skill-data.js');
 const {B,N,C,V,add}=root.P1SkillBuild;
 const names=[['Prism','角柱體'],['Cylinder','圓柱體'],['Pyramid','角錐體'],['Cone','圓錐體'],['Sphere','球體']];
 for(const level of Object.keys(B.levels))for(let i=0;i<12;i++){
  const easy=level==='easy',hard=level==='difficult',shape=i%5;
  add('solidname1a',level,i,[`${hard?'A pupil classifies this model using its size alone. Name the whole solid and choose the better rule.':'Name the pictured broad solid family.'}${easy?' Use the labelled reference models below to find a match.':''}`,`${hard?'同學只憑大小分類。選出整個模型的種類，再選較好的方法。':'選出圖中立體模型的種類。'}${easy?'可用下方已標示名稱的參考模型找相同種類。':''}`],[V([0,1,2,3,4],shape,i,['Solid family','立體種類'],x=>names[x]),...(hard?[C([['Use the whole three-dimensional shape; turning or resizing it does not change its family.','按整個立體形狀分類；轉動或改變大小不會改變種類。'],['Every tall model is a cylinder.','所有高模型都是圓柱體。'],['Any model with one triangular-looking outline must be a pyramid.','只要某輪廓像三角形，就一定是角錐體。']],i)]:[])],[`It is a ${names[shape][0].toLowerCase()}. Use a matching tactile model if the drawing is inaccessible; the helper should not name it.`,`這是${names[shape][1]}。看圖有困難時可用相應觸摸模型，協助者不應直接說出名稱。`],{type:easy?'guidedsolids':'solids',items:[shape],rotation:easy?0:15+(i%4)*20,sizes:[.7+(i%3)*.1]},{shape});
  const position=i%3,kinds=['triangle',hard?'open':'quadrilateral',hard?'curved':'circle'];kinds.unshift(...kinds.splice(3-position,position));
  add('triangle1',level,i,[`Which drawing is a triangle?${easy?' Find three straight sides joined into a closed shape.':''}${hard?' Check both straight sides and closure, then explain your choice.':''}`,`哪圖是三角形？${easy?'找三條直邊連成的封閉圖形。':''}${hard?'檢查直邊及是否封閉，再選原因。':''}`],[V([0,1,2],position,i,['Drawing','圖'],x=>['ABC'[x],'ABC'[x]]),...(hard?[C([['It has three straight sides joined end to end with no gap.','三條直邊首尾相接，而且沒有缺口。'],['Any three strokes make a triangle, even with a gap.','任何三筆都是三角形，有缺口也算。'],['A curved side is the same as a straight side.','曲邊與直邊相同。']],i)]:[])],[`${'ABC'[position]} is closed with three straight sides. Orientation does not change its type.`,`圖${'ABC'[position]}由三條直邊圍成封閉圖形；方向不改變種類。`],{type:'trianglechoices',kinds,rotation:easy?0:i*13,variant:i},{kinds,position});
 }
 if(typeof module!=='undefined')module.exports=B;
})(typeof globalThis!=='undefined'?globalThis:this);
