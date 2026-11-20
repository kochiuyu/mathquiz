/* Original P1 1S3 lessons. Positions are from the pupil's viewpoint. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],names={ball:pair('ball','球'),book:pair('book','書'),cup:pair('cup','杯')},terms={left:pair('to the left of','在左方'),right:pair('to the right of','在右方'),over:pair('over','在上方'),under:pair('under','在下方'),front:pair('in front of','在前方'),behind:pair('behind','在後方'),between:pair('between','在中間'),notbetween:pair('not between','不在中間')};
function scene(mode,flip=false){const ids=flip?['book','ball']:['ball','book'];let objects;
 if(mode==='row')objects=ids.map((id,i)=>({id,x:45+i*120,y:55}));
 if(mode==='vertical'||mode==='depth')objects=ids.map((id,i)=>({id,x:105,y:25+i*65}));
 if(mode==='between')objects=(flip?['cup','book','ball']:['book','ball','cup']).map((id,i)=>({id,x:35+i*70,y:55}));
 return {kind:'positions',mode,objects};
}
function relation(v,target,ref){const a=v.objects.find(o=>o.id===target),b=v.objects.find(o=>o.id===ref);
 if(v.mode==='between'){const xs=v.objects.filter(o=>o.id!==target).map(o=>o.x);return a.x>Math.min(...xs)&&a.x<Math.max(...xs)?'between':'notbetween';}
 return v.mode==='row'?(a.x<b.x?'left':'right'):v.mode==='vertical'?(a.y<b.y?'over':'under'):(a.y>b.y?'front':'behind');
}
const opposite={left:'right',right:'left',over:'under',under:'over',front:'behind',behind:'front',between:'notbetween',notbetween:'between'};
function task(lesson,id,v,target='ball',reverse=false,challenge=false){const ref=target==='ball'?'book':'ball',rel=relation(v,target,ref),others=v.objects.filter(o=>o.id!==target),label=names[target],r=names[ref];
 const prompt=v.mode==='between'?pair(`Is the ${label[0]} between the ${names[others[0].id][0]} and the ${names[others[1].id][0]}? Choose 1 or 2.`,`${label[1]}在${names[others[0].id][1]}和${names[others[1].id][1]}中間嗎？選1或2。`):pair(`${challenge?'Check carefully: ':''}where is the ${label[0]} compared with the ${r[0]}? Choose 1 or 2.`,`${challenge?'仔細檢查：':''}${label[1]}在${r[1]}的哪一方？選1或2。`);
 const why=v.mode==='between'?pair(`Read across the row: ${v.objects.map(o=>names[o.id][0]).join(', ')}. The ${label[0]} is ${terms[rel][0]} the other two.`,`從左到右是${v.objects.map(o=>names[o.id][1]).join('、')}。${label[1]}${terms[rel][1]}。`):pair(`The ${label[0]} is ${terms[rel][0]} the ${r[0]}. ${v.mode==='depth'?'The observer is at the bottom looking along the floor; nearer is in front.':'Use your own view of the picture.'}`,`${label[1]}在${r[1]}的${terms[rel][1].slice(1)}。${v.mode==='depth'?'觀察者在下方沿地面望過去，較近的是前方。':'按你看圖的方向判斷。'}`);
 if(challenge){const claim=reverse?opposite[rel]:rel,statement=v.mode==='between'?pair(`the ${label[0]} is ${terms[claim][0]} the other two objects`,`${label[1]}${terms[claim][1]}`):pair(`the ${label[0]} is ${terms[claim][0]} the ${r[0]}`,`${label[1]}在${r[1]}的${terms[claim][1].slice(1)}`);return {id,lesson,prompt:pair(`“${statement[0]}.” 1 true or 2 false.`,`有學生說：「${statement[1]}。」正確嗎？選1是或2否。`),answer:reverse?2:1,why,visual:{...v,target,ref,claim,choices:[pair('true','是'),pair('false','否')]}};}
 const choices=[terms[rel],terms[opposite[rel]]];if(reverse)choices.reverse();
 return {id,lesson,prompt,answer:reverse?2:1,why,visual:{...v,choices,target,ref}};
}
const step=(en,zh,text,ztext,visual)=>({title:pair(en,zh),text:pair(text,ztext),visual});
const lessons=[
 {id:'leftright',title:pair('Left and right','左和右'),goal:pair('Describe positions from your own view.','從自己的角度描述位置。'),steps:[
  step('Use your own view','從自己的角度看','Look at this picture. The ball is to the left of the book. Use your left and right as you look at the screen.','看圖，球在書的左方。用你面向畫面時的左和右判斷。',scene('row')),
  step('Say which object','說清楚比較的物件','The book is to the right of the ball. We describe the same picture, but start with a different object.','書在球的右方。同一幅圖，先說的物件不同，描述也不同。',scene('row')),
  step('Move and describe again','移動後再說一次','The objects have swapped places. Now the ball is to the right of the book. Try with two objects and an adult.','物件交換了位置，現在球在書的右方。和成人用兩件物件試試。',scene('row',true))]},
 {id:'overunder',title:pair('Over and under','上和下'),goal:pair('Name the object and its reference.','說清楚物件與比較對象。'),steps:[
  step('One above another','一上一下','The ball is over the book. Look at their positions, not their colours.','球在書的上方。看位置，不是看顏色。',scene('vertical')),
  step('Describe the other object','改說另一件物件','The book is under the ball. Both descriptions match this picture.','書在球的下方。兩個描述都符合這幅圖。',scene('vertical')),
  step('Check after a change','改變後再檢查','Now the book is over the ball. The ball is under the book. Describe where each one is now.','現在書在球的上方，球在書的下方。按目前位置描述。',scene('vertical',true))]},
 {id:'frontbetween',title:pair('Front and between','前、後和中間'),goal:pair('Describe simple arrangements of two or three objects.','描述兩件或三件物件的簡單排列。'),steps:[
  step('Look along the floor','沿地面望過去','You are at the arrow, looking along the floor. The book is nearer, in front of the ball. The ball is behind the book.','這是地上兩件物件的平面圖。你在箭嘴位置，較近的書在球的前方，球在書的後方。',scene('depth')),
  step('Not higher or lower','不是高低','Both objects are on the floor. Now the ball is nearer you, in front of the book. This shows distance, not height.','兩件物件都在地上。交換位置後，球較近你，在書的前方。此圖表示距離你遠近，不是高度。',scene('depth',true)),
  step('Between two objects','兩件物件之間','In this row the ball is between the book and the cup. Put three safe objects in a row and describe them to an adult.','這一行中，球在書和杯的中間。把三件安全物件排成一行，向成人描述位置。',scene('between'))]}
];
function question(lesson,index,seed=0){const k=(index+seed)%12,mode=lesson==='leftright'?'row':lesson==='overunder'?'vertical':k%4===0?'between':'depth';return task(lesson,lesson+'-'+k,scene(mode,k%3===1),k%3===2?'book':'ball',k%4>=2);}
function practice(lesson,level){if(level==='easy')return [2,3,4].map(i=>question(lesson,i));const mode=lesson==='leftright'?'row':lesson==='overunder'?'vertical':'depth';
 const specs=level==='normal'?[[mode,false,'book'],[mode,true,'ball'],[lesson==='frontbetween'?'between':mode,false,'ball']]:[[mode,true,'book'],[lesson==='frontbetween'?'between':mode,true,'ball'],[lesson==='frontbetween'?'between':mode,false,'book']];
 return specs.map(([m,f,t],i)=>task(lesson,lesson+'-'+level+'-'+i,scene(m,f),t,i%2===0,level==='difficult'));
}
root.MathQuizLearnPositions={lessons,question,practice,names,terms,scene};if(typeof module!=='undefined')module.exports=root.MathQuizLearnPositions;
})(typeof window!=='undefined'?window:globalThis);
