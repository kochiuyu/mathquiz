/* Original P1 1S2 teaching; drawings/making need practical observation. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],names={triangle:pair('triangle','三角形'),quadrilateral:pair('quadrilateral','四邊形'),pentagon:pair('pentagon','五邊形'),hexagon:pair('hexagon','六邊形'),circle:pair('circle','圓形')};
const figures=[
 {name:'triangle',points:[[25,90],[95,90],[60,20]]},
 {name:'quadrilateral',points:[[20,30],[95,25],[85,90],[35,95]]},
 {name:'pentagon',points:[[60,15],[105,50],[90,100],[30,100],[15,50]]},
 {name:'hexagon',points:[[30,20],[90,20],[110,60],[90,100],[30,100],[10,60]]},
 {name:'circle'},
 {name:'pentagon',points:[[20,20],[100,20],[60,55],[100,100],[20,100]]},
 {name:'triangle',points:[[20,95],[100,95],[35,30]]},
 {name:'hexagon',points:[[20,20],[100,20],[100,50],[50,50],[50,100],[20,100]]}
];
// Pieces meet exactly: each union has one simple outside boundary.
const joins=[
 {name:'quadrilateral',outline:[[25,25],[95,25],[95,95],[25,95]],pieces:[[[25,25],[95,25],[95,95]],[[25,25],[95,95],[25,95]]]},
 {name:'triangle',outline:[[60,20],[100,100],[20,100]],pieces:[[[60,20],[100,100],[60,100]],[[60,20],[60,100],[20,100]]]},
 {name:'pentagon',outline:[[60,15],[100,50],[100,100],[20,100],[20,50]],pieces:[[[60,15],[100,50],[20,50]],[[20,50],[100,50],[100,100],[20,100]]]},
 {name:'hexagon',outline:[[30,20],[90,20],[110,60],[90,100],[30,100],[10,60]],pieces:[[[30,20],[90,20],[110,60],[10,60]],[[10,60],[110,60],[90,100],[30,100]]]},
 {name:'quadrilateral',outline:[[15,35],[105,35],[105,85],[15,85]],pieces:[[[15,35],[105,35],[105,85]],[[15,35],[105,85],[15,85]]]},
 {name:'quadrilateral',outline:[[25,25],[95,25],[95,95],[25,95]],pieces:[[[25,25],[95,25],[95,95]],[[25,25],[95,95],[25,95]]]}
];
const pic=(mode,extra={})=>({kind:'flat',mode,...extra}),shape=(index,extra={})=>pic('shape',{figure:figures[index],...extra}),join=(index,extra={})=>pic('join',{join:joins[index],...extra});
const item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const choose=(id,lesson,en,zh,right,wrong,why,visual,reverse=false)=>item(id,lesson,en+' Write 1 or 2.',zh+'寫1或2。',reverse?2:1,...why,{...visual,choices:reverse?[wrong,right]:[right,wrong]});
const step=(en,zh,text,ztext,visual)=>({title:pair(en,zh),text:pair(text,ztext),visual});
const lessons=[
 {id:'pointlines',title:pair('Points and lines','點和線'),goal:pair('Use marks for points; recognise straight lines and curves.','用記號表示點，辨認直線和曲線。'),steps:[
  step('A mark shows a place','記號表示位置','Dots and crosses show where points are. A mathematical point has no size; the ink mark helps us see its place.','圓點和交叉記號表示點的位置。數學中的點沒有大小；墨跡讓我們看見它的位置。',pic('marks')),
  step('Straight or curved?','直還是彎？','A straight line does not bend. A curve bends. Trace a book edge and a cup rim with an adult to try both.','直線不彎曲，曲線會彎曲。和成人一起沿書邊和杯口描畫，試試兩種線。',pic('lines',{both:true})),
  step('Between two points','兩點之間','Two fixed points lie on one straight line. Different curves can pass through them. Thick ink still represents a line with no breadth.','兩個固定點只有一條直線通過，也可畫出不同曲線通過它們。粗墨跡仍表示沒有寬度的線。',pic('routes'))
 ]},
 {id:'flatnames',title:pair('Name flat shapes','認識平面圖形'),goal:pair('Recognise five types, even when turned.','辨認五種圖形，包括轉動後的圖形。'),steps:[
  step('Follow the outside','沿外邊走一圈','A triangle has three straight sides joined into a closed shape. A quadrilateral has four. Start anywhere and count each side once.','三角形由三條直邊圍成，四邊形有四條。沿外邊走一圈，每條只數一次。',pic('gallery',{indices:[0,1],labels:true})),
  step('Five, six or round','五邊、六邊或圓形','A pentagon has five straight sides; a hexagon has six. A circle has a round boundary, not straight sides.','五邊形有五條直邊，六邊形有六條。圓形的外邊是圓的，不是直邊。',pic('gallery',{indices:[2,3,4],labels:true})),
  step('Turning keeps the type','轉動不改變種類','This shape still has five sides, even with a dent. Turning it or changing its colour does not change its type.','這個圖形有凹入的部分，但仍有五條邊。轉動它或改顏色，不會改變種類。',shape(5,{turn:20}))
 ]},
 {id:'joinshapes',title:pair('Put shapes together','拼合圖形'),goal:pair('Distinguish the pieces from the outside shape.','分辨小拼片和整個外形。'),steps:[
  step('Two pieces, one outline','兩塊拼片，一個外形','These two triangles meet without gaps or overlaps. Together their outside is a quadrilateral.','兩個三角形緊貼拼合，沒有空隙或重疊，外形是四邊形。',join(0)),
  step('Do not count the join','不數中間的接線','A triangle and a quadrilateral make this pentagon. Trace only the outside; the join is inside.','一個三角形和一個四邊形拼成這個五邊形。只沿外邊走，中間接線在裏面。',join(2)),
  step('Try your own design','自己拼一拼','Use paper shapes with an adult. Turn and join pieces, then name the pieces and the whole outline. Drawing and making need a real try.','和成人用紙片轉動、拼合，再說出拼片及整個外形的名稱。畫圖和製作要親自試做。',join(3))
 ]}
];
function question(lesson,index,seed=0){const k=(index+seed*(lesson==='flatnames'?2:1))%12,reverse=k%4>=2;
 if(lesson==='pointlines'){const curved=k%3===1;return choose(lesson+'-'+k,lesson,'Which describes this line?','哪個描述這條線？',pair(curved?'curve':'straight line',curved?'曲線':'直線'),pair(curved?'straight line':'curve',curved?'直線':'曲線'),pair(curved?'The line bends. Its ink thickness does not decide this.':'The line does not bend, even when it is slanted.',curved?'線會彎曲，並非按墨跡粗幼分類。':'線沒有彎曲，斜放仍是直線。'),pic('lines',{curved,turn:[0,30,-25][k%3],thick:k%2===1}),reverse);}
 if(lesson==='flatnames'){const j=[0,1,2,3,4,5,1,6,3,7,4,0][k],f=figures[j],wrong=f.name==='circle'?'hexagon':'circle';return choose(lesson+'-'+k,lesson,'Name the whole flat shape.','這個平面圖形叫甚麼？',names[f.name],names[wrong],pair(f.name==='circle'?'Its boundary is round, with no straight sides.':`Count ${f.points.length} straight sides around the outside.`,f.name==='circle'?'外邊是圓的，沒有直邊。':`沿外邊數，共${f.points.length}條直邊。`),shape(j,{turn:k%2?20:0,tone:k%3===0}),reverse);}
 const j=k%6,f=joins[j],wrong=f.name==='triangle'?'quadrilateral':'triangle';return choose(lesson+'-'+k,lesson,'Name the outside shape, not the pieces.','說出整個外形，不是小拼片的名稱。',names[f.name],names[wrong],pair(`Follow the outside: ${f.outline.length} straight sides. Ignore the inside join.`,`沿外邊數，有${f.outline.length}條直邊，不數中間接線。`),join(j,{turn:k%2?20:0}),reverse);
}
const tasks={pointlines:{normal:[
 ['How many marked point locations are shown?','圖中標示了多少個點的位置？',3,'Each dot or cross marks one location.','每個圓點或交叉記號表示一個位置。',pic('marks')],
 ['How many different straight lines pass through these two fixed points?','通過這兩個固定點的直線有多少條？',1,'There is one straight line through the two points.','通過兩點的直線只有一條。',pic('routes')],
 ['Which is curved? Write 1 or 2.','哪條是曲線？寫1或2。',2,'Line 2 bends; line 1 is straight.','第2條會彎曲，第1條是直線。',pic('lines',{both:true})]
 ],difficult:[
 ['A dot is drawn bigger at the same place. How many point locations does it mark?','同一位置的圓點畫大了，表示多少個點的位置？',1,'A bigger ink mark still marks one location; a mathematical point has no size.','較大的墨跡仍表示一個位置，數學中的點沒有大小。',pic('marks',{one:true})],
 ['A thick line is slanted but does not bend. Choose: 1 straight, 2 curved.','粗線斜放但沒有彎曲。選1直線或2曲線。',1,'Slant and ink thickness do not make a straight line curved.','斜放和墨跡粗幼不會把直線變成曲線。',pic('lines',{turn:30,thick:true})],
 ['Two different curves join these points. Must one be wrong? Write 1 yes or 2 no.','兩條不同曲線通過這兩點，是否一定有一條錯？寫1是或2否。',2,'Different curves can pass through the same two points.','不同曲線可以通過相同兩點。',pic('routes')]
 ]},flatnames:{normal:[
 ['How many straight sides has this triangle?','這個三角形有多少條直邊？',3,'Count each of the three straight sides once.','三條直邊，每條只數一次。',shape(6,{turn:20})],
 ['How many straight sides has this quadrilateral?','這個四邊形有多少條直邊？',4,'Unequal side lengths still make four sides.','邊長不同，仍是四條邊。',shape(1)],
 ['How many straight sides has this circle?','這個圓形有多少條直邊？',0,'A circle has a curved boundary and no straight sides.','圓形外邊彎曲，沒有直邊。',shape(4)]
 ],difficult:[
 ['Someone says the dent makes this a triangle. How many straight sides really surround it?','有人說凹入後變成三角形。實際有多少條直邊？',5,'Follow all five sides, including those around the dent.','沿全部五條邊數，包括凹入位置的邊。',shape(5)],
 ['Count this turned shape’s straight sides.','數這個轉動後圖形的直邊。',6,'Turning keeps the six sides: it is a hexagon.','轉動後仍有六條邊，是六邊形。',shape(7,{turn:20})],
 ['This triangle is narrow, not equal-sided. How many sides does it still have?','這個三角形較窄，邊長不相等，仍有多少條邊？',3,'A triangle needs three straight sides, not three equal sides.','三角形有三條直邊，不必三邊等長。',shape(6)]
 ]},joinshapes:{normal:[
 ['How many separate pieces make this shape?','這個圖形由多少塊拼片組成？',2,'Two triangles are joined. The number of pieces is not the number of outside sides.','兩個三角形拼合；拼片數不等於外邊數。',join(0)],
 ['How many straight sides are on the outside?','外形有多少條直邊？',3,'The two triangles together form a triangle: trace only the outside.','兩個三角形拼成一個三角形，只沿外邊數。',join(1)],
 ['How many straight sides are on the outside?','外形有多少條直邊？',5,'The inside join is not part of the five outside sides.','中間接線不是外邊；外形有五條邊。',join(2)]
 ],difficult:[
 ['A pupil counts the inside join as an extra side. How many outside sides are there really?','有學生把中間接線也算一邊。實際外邊有多少條？',4,'Trace four outside sides and leave out the inside join.','只沿四條外邊走，不數中間接線。',join(4)],
 ['The pieces are turned together. How many outside sides now?','把拼片一起轉動，現在外形有多少條邊？',6,'The whole shape remains a hexagon with six outside sides.','整個圖形仍是六邊形，有六條外邊。',join(3,{turn:20})],
 ['Must two triangles always form a quadrilateral? Write 1 yes or 2 no.','兩個三角形是否一定拼成四邊形？寫1是或2否。',2,'No. These two triangles form a larger triangle. Placement matters.','不一定，圖中兩個三角形拼成更大的三角形，擺放方法會影響外形。',join(1)]
 ]}};
function practice(lesson,level){return ['normal','difficult'].includes(level)?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnFlat={lessons,question,practice,names,figures,joins};if(typeof module!=='undefined')module.exports=root.MathQuizLearnFlat;
})(typeof window!=='undefined'?window:globalThis);
