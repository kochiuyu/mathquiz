/* Original teaching for P1 1S1. Pictures support, but cannot replace, handling real models. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh];
const names={prism:pair('prism','柱體'),cylinder:pair('cylinder','圓柱體'),pyramid:pair('pyramid','錐體'),cone:pair('cone','圓錐體'),sphere:pair('sphere','球體')};
const descriptions={prism:pair('A box-like solid with flat surfaces.','像盒子的立體，有平坦的表面。'),cylinder:pair('A can-like solid with two flat round ends and a curved side.','像罐子的立體，有兩個平坦圓形端面和彎曲的側面。'),pyramid:pair('A solid with flat sides meeting at one tip.','側面平坦，在頂部聚成一個尖端的立體。'),cone:pair('A solid with a flat round bottom and a curved side narrowing to a tip.','底部平坦呈圓形，彎曲的側面收窄成尖端的立體。'),sphere:pair('A ball-like solid, round all around, with no flat part.','像球一樣四周圓滑，沒有平坦部分的立體。')};
const pic=(shapes,extra={})=>({kind:'solids',shapes:shapes.map(s=>typeof s==='string'?{shape:s}:s),...extra});
const step=(en,zh,text,ztext,visual)=>({title:pair(en,zh),text:pair(text,ztext),visual});
const lessons=[
 {id:'solidnames',title:pair('Meet solid shapes','認識立體'),goal:pair('Recognise five kinds of solid shapes.','認識五種立體。'),steps:[
  step('Prism and cylinder','柱體和圓柱體','A box is like a prism. A can is like a cylinder. Look at the whole solid, not just its outline.','盒子像柱體，罐子像圓柱體。看整個立體，不只看外框。',pic(['prism','cylinder'],{labels:true})),
  step('Two pointed shapes','兩種有尖端的立體','A pyramid has flat sides meeting at a tip. A cone has a curved side and a round bottom. Both have a tip.','錐體的平坦側面聚成尖端；圓錐體有彎曲側面和圓形底部。兩者都有尖端。',pic(['pyramid','cone'],{labels:true})),
  step('Round all around','四周圓滑','A sphere is like a ball. Turning a solid or changing its colour does not change its kind.','球體像皮球。轉動立體或改變顏色，不會改變它的種類。',pic(['sphere'],{labels:true}))
 ]},
 {id:'solidobjects',title:pair('Shapes around us','身邊的立體'),goal:pair('Match everyday objects to solid models.','把日常物件配對到立體模型。'),steps:[
  step('Look at the main shape','看主要形狀','A closed box is like a prism. A plain straight can is like a cylinder. Ignore small labels or decorations.','密封盒子像柱體，普通直身罐子像圓柱體。不看小標籤或裝飾。',pic(['prism','cylinder'],{captions:[pair('Closed box','密封盒子'),pair('Straight can','直身罐子')]})),
  step('Match the whole object','配對整個物件','A smooth ball is like a sphere. A solid cone model has a round bottom and one tip. A flat drawing represents a solid.','光滑皮球像球體。實心圓錐模型有圓形底部和一個尖端。平面圖畫可以表示立體。',pic(['sphere','cone'],{labels:true})),
  step('Look from another side','換個方向看','This pyramid model keeps its kind when turned. Use safe real objects with an adult to check the drawings.','這個錐體模型轉動後，種類不變。和成人用安全的實物核對圖畫。',pic([{shape:'pyramid'},{shape:'pyramid',turn:25}],{labels:true}))
 ]},
 {id:'solidexplore',title:pair('Roll, stack and look','滾動、堆疊和觀察'),goal:pair('Use observations to compare solid models.','用觀察比較立體模型。'),steps:[
  step('Try rolling','試着滾動','A smooth sphere can roll. A smooth cylinder can also roll on its curved side. Rolling alone does not tell us the name.','光滑球體可以滾動，光滑圓柱體也可沿彎曲側面滾動。只知道能滾動，還不能確定名稱。',pic(['sphere',{shape:'cylinder',turn:90}],{labels:true})),
  step('How is it placed?','怎樣擺放？','A cylinder can stand on a flat end or roll on its side. Predict first, then try gently with an adult.','圓柱體可用平坦端面站立，也可躺下滾動。先預測，再和成人輕輕試一試。',pic(['cylinder',{shape:'cylinder',turn:90}],{labels:true})),
  step('Observe real models','觀察實物模型','Try stacking flat parts of safe blocks. Record what actually happens. A screen answer cannot show that you handled a real model.','用安全積木的平坦部分試堆疊，記錄實際情況。網上答案不能顯示你曾操作實物。',pic(['prism','sphere'],{labels:true}))
 ]}
];
const item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
function choice(id,lesson,prompt,correct,wrong,why,visual,reverse=false){return item(id,lesson,prompt,reverse?2:1,why,{...visual,choices:reverse?[wrong,correct]:[correct,wrong]});}
const objects=[pair('a closed rectangular gift box','密封的長方形禮物盒'),pair('a plain straight food can','普通直身食物罐'),pair('a model with flat sides meeting at one tip','側面平坦並聚成一個尖端的模型'),pair('a solid model with a round bottom narrowing to a tip','圓形底部收窄成尖端的實心模型'),pair('a smooth round ball','光滑圓球')];
const keys=Object.keys(names),order=[0,1,2,3,4,1,3,0,4,2,1,4];
const observations=[
 [pair('A smooth model rolls. Is it definitely a sphere?','光滑模型會滾動，就一定是球體嗎？'),pair('No: a cylinder can roll too','不一定，圓柱體也可滾動'),pair('Yes: only spheres roll','是，只有球體可滾動'),pair('Rolling alone is not enough: a cylinder can roll on its side.','只知道會滾動還不足夠：圓柱體可沿側面滾動。'),['sphere','cylinder']],
 [pair('How should a cylinder be placed to roll on its curved side?','怎樣擺放圓柱體，讓它沿彎曲側面滾動？'),pair('Lie it on its side','把它側放'),pair('Stand it on its flat end','把平坦端面放在桌上'),pair('The curved side touches the table when it lies on its side.','側放時，彎曲側面接觸桌面。'),[{shape:'cylinder',turn:90}]],
 [pair('Which part of a cylinder can rest flat on a table?','圓柱體哪部分可平放在桌上？'),pair('A flat round end','平坦的圓形端面'),pair('Its curved side','彎曲側面'),pair('Its flat end can rest flat; the curved side is rounded.','平坦端面可平放；側面是彎曲的。'),['cylinder']],
 [pair('A model has a tip. Must it be a cone?','模型有尖端，就一定是圓錐體嗎？'),pair('No: a pyramid has a tip too','不一定，錐體也有尖端'),pair('Yes: only cones have tips','是，只有圓錐體有尖端'),pair('Compare the whole model: both pyramids and cones have a tip.','要比較整個模型：錐體和圓錐體都有尖端。'),['pyramid','cone']],
 [pair('Which gives evidence about stacking your own blocks?','怎樣才知道自己的積木如何堆疊？'),pair('Try safely and record what happens','安全地試做並記錄結果'),pair('Copy a prediction without trying','沒有試做，只抄預測'),pair('A prediction is a guess to check. Record your actual observation.','預測要經過核對；記錄自己的實際觀察。'),['prism']],
 [pair('A ball is painted a new colour. What changes?','皮球塗上新顏色，甚麼改變了？'),pair('Its colour, not its kind of shape','顏色改了，立體種類不變'),pair('It becomes a pyramid','變成錐體'),pair('Colour does not change the kind of solid.','顏色不改變立體種類。'),['sphere']]
];
function question(lesson,index,seed=0){const k=(index+seed)%12,rev=k%4>=2;
 if(lesson==='solidexplore'){const o=observations[k%6];return choice(lesson+'-'+k,lesson,pair(o[0][0]+' Write 1 or 2.',o[0][1]+'寫1或2。'),o[1],o[2],o[3],pic(o[4]),rev);}
 const j=order[k],shape=keys[j],wrong=keys[(j+1)%5],visual=pic([{shape,turn:k%3===0?20:0,tone:k%2}]);
 const prompt=lesson==='solidnames'?pair('Which kind of solid is shown? Write 1 or 2.','圖中是哪種立體？寫1或2。'):pair('Which solid is most like '+objects[j][0]+'? Write 1 or 2.','哪種立體最像'+objects[j][1]+'？寫1或2。');
 return choice(lesson+'-'+k,lesson,prompt,names[shape],names[wrong],pair('It is a '+names[shape][0]+'. '+descriptions[shape][0],'是'+names[shape][1]+'。'+descriptions[shape][1]),visual,rev);
}
const tasks={solidnames:{normal:[
 ['Which has a curved side and a tip?','哪個有彎曲側面和尖端？','cone','pyramid',['cone','pyramid']],
 ['Which is round all around?','哪個四周圓滑？','sphere','cylinder',['cylinder','sphere']],
 ['Which is a prism?','哪個是柱體？','prism','pyramid',['pyramid','prism']]
 ],difficult:[
 ['A pupil calls this a cone because it has a tip. Correct the name.','有學生因為它有尖端而叫它圓錐體。選正確名稱。','pyramid','cone',[{shape:'pyramid',turn:25}]],
 ['This can-like model is turned. What is its kind?','這個像罐子的模型轉了方向，是哪種立體？','cylinder','sphere',[{shape:'cylinder',turn:90}]],
 ['The box-like model changes colour, not shape. What is it now?','像盒子的模型只改了顏色，形狀沒變。現在是哪種立體？','prism','pyramid',[{shape:'prism',tone:1}]]
 ]},solidobjects:{normal:[
 ['Choose the solid most like a smooth ball.','選最像光滑皮球的立體。','sphere','cone',['sphere','cone']],
 ['Choose the solid most like a plain straight can.','選最像普通直身罐子的立體。','cylinder','prism',['prism','cylinder']],
 ['Choose the solid most like a closed box.','選最像密封盒子的立體。','prism','pyramid',['prism','pyramid']]
 ],difficult:[
 ['A sticker is put on a plain can. Which solid still matches its main shape?','普通罐子貼上標籤，主要形狀仍像哪種立體？','cylinder','cone',['cylinder','cone']],
 ['A model has flat sides meeting at a tip. Someone says cone. Choose the better match.','模型有平坦側面聚成尖端，有人說是圓錐體。選更合適的名稱。','pyramid','cone',['pyramid','cone']],
 ['A ball looks like a circle in a photo. What is the whole solid object like?','照片中皮球外框像圓形，整個實物是哪種立體？','sphere','cylinder',['sphere','cylinder']]
 ]}};
function practice(lesson,level){if(!['normal','difficult'].includes(level))return [2,3,4].map(i=>question(lesson,i));if(lesson==='solidexplore'){const ids=level==='normal'?[1,2,4]:[0,3,5];return ids.map((n,i)=>{const o=observations[n];return choice(lesson+'-'+level+'-'+i,lesson,pair(o[0][0]+' Write 1 or 2.',o[0][1]+'寫1或2。'),o[1],o[2],o[3],pic(o[4]),i===1);});}return tasks[lesson][level].map((x,i)=>choice(lesson+'-'+level+'-'+i,lesson,pair(x[0]+' Write 1 or 2.',x[1]+'寫1或2。'),names[x[2]],names[x[3]],descriptions[x[2]],pic(x[4]),i===1));}
root.MathQuizLearnSolids={lessons,question,practice,names,descriptions};if(typeof module!=='undefined')module.exports=root.MathQuizLearnSolids;
})(typeof window!=='undefined'?window:globalThis);
