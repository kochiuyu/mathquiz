/* Original 1M1 teaching; diagrams are comparisons, never on-screen centimetre rulers. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],pic=(mode,a,b,extra={})=>({kind:'measure',mode,a,b,...extra}),units=(rows)=>({kind:'measure',mode:'units',rows}),row=(count,size=18,gap=0,target=count*size)=>({count,size,gap,target}),item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const lessons=[
 {id:'alignlength',title:pair('Compare lengths','比較長短'),goal:pair('Line up one end before comparing two lengths.','比較兩件物件前，先把一端對齊。'),steps:[
  {title:pair('Look along the strip','沿着紙條看'),text:pair('Length runs from one end to the other. Strip 2 is longer than strip 1. Look along the strip, not across its width.','長度由一端到另一端。紙條2比紙條1長。沿着紙條看，不要把闊度當作長度。'),visual:pic('length',4,8)},
  {title:pair('Start together','一端對齊'),text:pair('Move both left ends to the same line. Now the strip reaching farther is longer. Moving a strip does not change its length.','把兩條紙條的左端移到同一直線上。伸得較遠的較長。移動紙條不會改變它的長度。'),visual:pic('length',8,5)},
  {title:pair('The same length','一樣長'),text:pair('Aligned starts and matching ends mean the same length. Gently straighten curved cords without stretching, then line up one end.','起點對齊後，另一端也對齊，表示一樣長。比較彎曲的繩子時，先輕輕拉直但不要拉長，再把一端對齊。'),visual:pic('length',6,6)}
 ]},
 {id:'straightgap',title:pair('Compare distances','比較距離'),goal:pair('Compare straight gaps from the same starting point.','由同一起點比較直線距離。'),steps:[
  {title:pair('A straight gap','直線距離'),text:pair('Each row starts at S. The straight line joins S to a point. This shows the distance, not a winding walking route.','每行都由S出發。連接S和另一點的直線表示距離，不是彎曲的步行路線。'),visual:pic('distance',4,8)},
  {title:pair('Nearer or farther','較近還是較遠'),text:pair('From S, point 1 is farther away. Point 2 is nearer. Compare the straight lines from the same start.','由S看，點1較遠，點2較近。比較從同一起點出發的直線。'),visual:pic('distance',8,4)},
  {title:pair('A route can bend','路線可以彎曲'),text:pair('The dashed walking route bends, but its endpoints stay put. The straight distance does not change. Both points shown here are equally far from S.','虛線步行路線彎曲，但兩端位置沒有改變，直線距離也不變。圖中兩點距離S一樣遠。'),visual:pic('distance',6,6,{route:true})}
 ]},
 {id:'equalunits',title:pair('Measure with units','用單位量度'),goal:pair('Use equal units, touching end to end, and count once.','用相同大小的單位首尾相接，每個只數一次。'),steps:[
  {title:pair('Touch end to end','首尾相接'),text:pair('Six equal tiles cover this strip. Start at one end. Leave no gaps or overlaps. The strip is six tile-lengths long.','六塊相同的方塊剛好覆蓋紙條。由一端開始，不留空隙，也不重疊。紙條長六個方塊。'),visual:units([row(6,24)])},
  {title:pair('Use the same unit','用相同的單位'),text:pair('The tiles in both rows are the same size. Strip 2 needs more tiles, so it is longer. Count each tile once.','兩行的方塊大小相同。紙條2需要更多方塊，所以較長。每塊只數一次。'),visual:units([row(4,24),row(7,24)])},
  {title:pair('Unit size matters','單位大小很重要'),text:pair('These strips are the same length. Six small tiles or three large tiles cover each one. Different-sized units give different counts.','兩條紙條一樣長，每條可用六塊小方塊或三塊大方塊覆蓋。單位大小不同，數目也不同。'),visual:units([row(6,24),row(3,48)])}
 ]}
];
const pairs=[[4,8],[8,3],[6,6],[3,7],[9,5],[4,4],[8,4],[5,9],[7,7],[2,8],[9,3],[5,5]],counts=[4,7,6,8,5,9,3,10,7,4,8,6];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='equalunits'){const n=counts[k];return item('equalunits-'+k,lesson,'How many equal tile-lengths cover the strip?','多少個相同的方塊長度剛好覆蓋紙條？',n,`Count the touching tiles once: ${n}. Each tile has the same length.`,`逐一數首尾相接的方塊，共${n}塊，每塊長度相同。`,units([row(n)]));}
 const [a,b]=pairs[k],short=k%2===1,isLength=lesson==='alignlength',answer=a===b?0:(short?a<b:a>b)?1:2,what=isLength?(short?'shorter':'longer'):(short?'nearer to S':'farther from S'),zhWhat=isLength?(short?'較短':'較長'):(short?'距離S較近':'距離S較遠');
 return item(lesson+'-'+k,lesson,`Which is ${what}? Write 1 or 2; write 0 if equal.`,`哪個${zhWhat}？寫1或2；相同寫0。`,answer,a===b?'The aligned ends match: both are equal. Write 0.':`Compare from the same start. ${isLength?'Strip':'Point'} ${answer} is ${what}.`,a===b?'起點對齊，另一端也對齊，表示相同，寫0。':`由同一起點比較，${isLength?'紙條':'點'}${answer}${zhWhat}。`,pic(isLength?'length':'distance',a,b));
}
const tasks={
 alignlength:{normal:[
  ['Strip 2 is shifted right. After lining up the left ends, which is longer? Write 1 or 2.','紙條2向右移了。把左端對齊後，哪條較長？寫1或2。',1,'Strip 1 has the greater length. A shifted start can make an endpoint misleading.','紙條1較長。起點沒有對齊，不能只看哪個右端伸得遠。',pic('length',8,5,{offsets:[0,3]})],
  ['Which strip is shorter? Write 1 or 2.','哪條紙條較短？寫1或2。',2,'Both left ends are aligned. Strip 2 ends sooner, so it is shorter.','左端對齊後，紙條2較早結束，所以較短。',pic('length',9,4)],
  ['The strips have been moved. Are they equal after aligning? Write 0 if equal, or the longer strip number.','紙條被移動了。對齊後是否一樣長？相同寫0，否則寫較長紙條的號碼。',0,'Both strips have the same length; moving them does not change it.','兩條紙條一樣長，移動不會改變長度。',pic('length',6,6,{offsets:[0,2]})]
 ],difficult:[
  ['Strip 1 is wider. Which strip is LONGER? Write 1 or 2.','紙條1較闊。哪條較長？寫1或2。',2,'Width and length are different. Strip 2 reaches farther from the aligned start.','闊度和長度不同。由對齊的起點看，紙條2伸得較遠。',pic('length',4,8,{thick:[24,10]})],
  ['A pupil chooses 2 because its right end reaches farther. Align the starts. Which strip is really longer? Write 1 or 2.','有學生只看右端，便選紙條2。把起點對齊，哪條真正較長？寫1或2。',1,'Strip 2 starts farther right. Strip 1 is longer when the starts are aligned.','紙條2的起點較右。把起點對齊後，紙條1較長。',pic('length',7,5,{offsets:[0,3]})],
  ['Strip 2 is moved right without stretching. Which is longer now? Write 1 or 2; write 0 if equal.','紙條2向右移，沒有拉長。現在哪條較長？寫1或2，相同寫0。',0,'Moving does not change length. Align the ends to see they are equal.','移動不會改變長度。把一端對齊，可見它們一樣長。',pic('length',5,5,{offsets:[0,3]})]
 ]},
 straightgap:{normal:[
  ['From S, which point is nearer? Write 1 or 2.','哪一點距離S較近？寫1或2。',2,'Compare the straight spans from S. Point 2 is nearer.','由S比較直線距離，點2較近。',pic('distance',9,4)],
  ['Which straight distance from S is greater? Write 1 or 2.','由S出發，哪個直線距離較長？寫1或2。',1,'The straight span to point 1 is longer.','由S到點1的直線較長。',pic('distance',8,3)],
  ['Are the points equally far from S? Write 0 if equal, or the farther point number.','兩點距離S一樣遠嗎？相同寫0，否則寫較遠的點的號碼。',0,'Both straight spans match. The distances are equal.','兩段直線一樣長，距離相同。',pic('distance',6,6)]
 ],difficult:[
  ['Ignore the dashed walking route. Which point has the greater STRAIGHT distance from S? Write 1 or 2.','不要沿虛線步行路線量度。哪一點距離S的直線距離較長？寫1或2。',2,'Measure the straight gap between the endpoints, not the bends in a route. Point 2 is farther.','比較兩端之間的直線，不是彎曲路線。點2較遠。',pic('distance',4,8,{route:true})],
  ['The dashed route bends more, but its endpoints stay put. Compare the straight distances: write 1 or 2 for farther, or 0 if equal.','虛線路線多了彎曲，但兩端不動。比較直線距離：寫較遠的點1或2，相同寫0。',0,'The route can change while the straight distance stays the same. Here both distances are equal.','路線可改變，直線距離不變。圖中兩個距離相同。',pic('distance',6,6,{route:true})],
  ['A pupil follows the bends to compare distance. Use straight lines instead. Which point is nearer to S? Write 1 or 2.','有學生沿彎曲路線比較距離。應用直線比較：哪點距離S較近？寫1或2。',2,'The straight span to point 2 is shorter, so point 2 is nearer.','由S到點2的直線較短，所以點2較近。',pic('distance',8,4,{route:true})]
 ]},
 equalunits:{normal:[
  ['Both rows use equal-sized tiles. Which strip is longer? Write 1 or 2.','兩行使用相同大小的方塊。哪條紙條較長？寫1或2。',2,'With the same-sized unit, seven tiles cover a greater length than four.','使用相同單位，七塊覆蓋的長度比四塊長。',units([row(4,24),row(7,24)])],
  ['These units cover a straight gap. How many tile-lengths is the gap?','這些單位剛好覆蓋一段直線距離。這段距離有多少個方塊長？',8,'Eight equal units touch end to end. The straight distance is eight tile-lengths.','八個相同單位首尾相接，直線距離是八個方塊長。',units([row(8,20)])],
  ['Count the tiles, not their boundary lines. How many tile-lengths cover this strip?','數方塊，不是數分界線。紙條長多少個方塊？',10,'Each tile is one unit. Ten tiles cover the strip.','每塊是一個單位，十塊剛好覆蓋紙條。',units([row(10,18)])]
 ],difficult:[
  ['Which row measures correctly, with no gaps or overlaps? Write 1 or 2.','哪行的量度正確，沒有空隙或重疊？寫1或2。',2,'Row 1 has gaps. Row 2 uses equal tiles touching from one end to the other.','第1行有空隙。第2行用相同方塊首尾相接，覆蓋整段。',units([row(5,20,8,140),row(7,20)])],
  ['Which row measures correctly? Write 1 or 2. Watch for overlapping tiles.','哪行量度正確？寫1或2。留意方塊是否重疊。',1,'Row 2 overlaps its tiles. Row 1 covers the strip with equal touching units.','第2行的方塊重疊。第1行用相同單位首尾相接覆蓋紙條。',units([row(5,24),row(6,24,-5,120)])],
  ['Both strips are the same length. Which row uses the LONGER unit? Write 1 or 2.','兩條紙條一樣長。哪行使用較長的單位？寫1或2。',2,'Four large units cover the same length as eight small ones. The units in row 2 are longer.','四個大單位和八個小單位覆蓋相同長度，所以第2行的單位較長。',units([row(8,20),row(4,40)])]
 ]}
};
function practice(lesson,level){return ['normal','difficult'].includes(level)?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnMeasure={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnMeasure;
})(typeof window!=='undefined'?window:globalThis);
