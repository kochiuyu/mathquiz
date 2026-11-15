// Shared links use permanent template and variant IDs. Add new versions under new IDs.
function percentageQuestion(i){
  const total=[20,40,50][i%3],pct=10+10*Math.floor(i/3),n=total*pct/100;
  return numeric([`Of ${total} pupils, ${n} chose badminton. What percentage chose badminton?`,`${total}名學生中有${n}人選擇羽毛球。選擇羽毛球的學生佔百分之幾？`],["%","%"],pct,`${n} ÷ ${total} × 100% = ${pct}%`);
}
const families = [
  {id:"add1", grade:1, code:"1N2", label:["Addition to 10","10以內的加法"], count:7, make(i){
    const a=i+1,b=1+(i*3 % (10-a));
    return numeric([`There ${a===1?"is":"are"} ${a} red bead${a===1?"":"s"} and ${b} blue bead${b===1?"":"s"}. How many beads are there altogether?`,`有${a}顆紅珠和${b}顆藍珠。共有多少顆珠？`],["beads","顆"],a+b,`${a} + ${b} = ${a+b}`);
  }},
  {id:"next1",grade:1,code:"1N1",label:["Counting forwards","順數"],count:12,make(i){
    return {...numeric([`What comes next?  ${i+1}, ${i+2}, ${i+3}, ___`,`順數下去：${i+1}、${i+2}、${i+3}、___。`],["",""],i+4,`${i+3} + 1 = ${i+4}`),inlineAnswer:true};
  }},
  {id:"count20a",grade:1,code:"1N1",label:["Count pictured counters","點算圖中圓片"],count:20,make(i){
    const n=i+1;
    return {...numeric(["How many counters are shown?","圖中有多少粒圓片？"],[n===1?"counter":"counters","粒"],n,[`Count each counter once: ${n}.`,`逐一數圓片，共${n}粒。`]),figure:{kind:"counters",count:n}};
  }},
  {id:"parts18a",grade:1,code:"1N1",label:["Find the other part","找出另一部分"],count:81,make(i){
    const known=i%9+1,missing=Math.floor(i/9)+1,total=known+missing;
    return {...numeric([`The whole has ${total} counters. One part has ${known} counter${known===1?"":"s"}. How many counters are in the other part?`,`整體有${total}粒圓片，其中一部分有${known}粒。另一部分有多少粒？`],[missing===1?"counter":"counters","粒"],missing,[`${known} and ${missing} make ${total}.`,`${known}和${missing}合起來是${total}。`]),figure:{kind:"parts",total,known}};
  }},
  {id:"pictureadd1",grade:1,code:"1N2",label:["Addition sentence from a picture","看圖寫加法算式"],count:81,make(i){
    const a=i%9+1,b=Math.floor(i/9)+1,total=a+b;
    return {prompt:["Write an addition sentence for the red and blue counters.","看圖中的紅色和藍色圓片，寫出一道加法算式。"],fields:[["",""]],answer:[`${a} + ${b} = ${total}`],why:[`${a} red and ${b} blue make ${total} counters.`,`${a}粒紅色圓片和${b}粒藍色圓片，合起來是${total}粒。`],equation:{a,b,total},figure:{kind:"twoGroups",a,b}};
  }},
  {id:"storyadd1",grade:1,code:"1N2",label:["Addition story","加法情境題"],count:81,make(i){
    const a=i%9+1,b=Math.floor(i/9)+1,total=a+b;
    return {...numeric([`There ${a===1?"is":"are"} ${a} red counter${a===1?"":"s"}. Then ${b} blue counter${b===1?" is":"s are"} added. How many counters are there now?`,`原有${a}粒紅色圓片，再加上${b}粒藍色圓片。現在共有多少粒？`],["counters","粒"],total,[`${a} + ${b} = ${total}.`,`${a} + ${b} = ${total}，共有${total}粒。`]),figure:{kind:"twoGroups",a,b,story:true}};
  }},
  {id:"otherway1",grade:1,code:"1N1",label:["Another way to make a total","另一種組合方法"],count:11,make(i){
    const total=i+6,a=Math.max(1,total-9),b=total-a,other=[a+1,b-1];
    return {prompt:[`The picture shows one way to make ${total}. Show another way to make ${total} with two groups.`,`圖中顯示${total}的一種組合方法。用兩組圓片表示${total}的另一種組合方法。`],fields:[["",""],["",""]],answer:other,marks:1,why:[`Example: ${other[0]} + ${other[1]} = ${total}. Any different pair of positive one-digit parts that makes ${total} is correct. Swapping the pictured groups alone does not count.`,`例如：${other[0]} + ${other[1]} = ${total}。只要另一組正整數個位數的兩部分合起來是${total}，即屬正確。只交換圖中兩組的次序不算另一種方法。`],otherWay:{total,shown:[a,b]},figure:{kind:"twoGroups",a,b}};
  }},
  {id:"triangle1",grade:1,code:"1S2",label:["Recognise a triangle","辨認三角形"],count:9,make(i){
    const letters=["A","B","C"],correct=i%3;
    const rotations=[25,90,155,0,45,115,215,300,340];
    const shapes=letters.map((_,j)=>({kind:j===correct?"triangle":j===(correct+1)%3?"quadrilateral":"circle",rotation:j===correct?rotations[i]:(i*37+j*25)%180}));
    return {prompt:["Which shape is a triangle? Choose one.","哪個圖形是三角形？請選一個。"],choices:letters,answer:[letters[correct]],shapes,why:[`${letters[correct]} has three straight sides joined to make a closed shape. Turning it does not change that.`,`${letters[correct]}由三條直邊連成封閉圖形。它轉了方向，仍是三角形。`]};
  }},
  {id:"place3a",grade:2,code:"2N1",label:["Read hundreds, tens and ones","讀出百位、十位和個位"],count:12,make(i){
    const values=[304,230,500,426,242,100,999,507,680,909,115,370];
    const value=values[i],hundreds=Math.floor(value/100),tens=Math.floor(value/10)%10,ones=value%10;
    return {...numeric(["These blocks show a number. Write the three-digit number.","這些積木表示一個數。寫出這個三位數。"],["",""],value,[`${hundreds} hundreds, ${tens} tens and ${ones} ones make ${value}. ${hundreds} × 100 + ${tens} × 10 + ${ones} = ${value}.`,`${hundreds}個百、${tens}個十和${ones}個一合起來是${value}。${hundreds} × 100 + ${tens} × 10 + ${ones} = ${value}。`]),figure:{kind:"placeValue",hundreds,tens,ones},placeValue:true};
  }},
  {id:"groups2a",grade:2,code:"2N3",label:["Multiplication with equal groups","等量分組乘法"],count:16,make(i){
    const pairs=[[3,4],...Array.from({length:16},(_,n)=>[2+Math.floor(n/4),2+n%4]).filter(([a,b])=>a!==3 || b!==4)];
    const [boxes,each]=pairs[i],total=boxes*each;
    const addition=Array(boxes).fill(each).join(" + ");
    return {prompt:[`Each box has ${each} counters. There are ${boxes} boxes. Complete the multiplication sentence for all the counters.`,`每個盒子有${each}粒圓片，共有${boxes}個盒子。完成表示圓片總數的乘法算式。`],fields:[["",""],["",""],["",""]],answer:[boxes,each,total],marks:1,why:[`${addition} = ${total}, so ${boxes} × ${each} = ${total} or ${each} × ${boxes} = ${total}.`,`${addition} = ${total}，所以${boxes} × ${each} = ${total}或${each} × ${boxes} = ${total}。`],equalGroups:{boxes,each,total},figure:{kind:"equalGroups",boxes,each}};
  }},
  {id:"pict2a",grade:2,code:"2D1",label:["Read a pictogram","閱讀象形圖"],count:12,make(i){
    const charts=[
      [[4,2,3],1],[[0,3,5],0],[[6,2,4],0],[[2,2,5],1],[[1,4,3],0],[[5,0,2],2],
      [[3,1,5],1],[[2,6,4],1],[[0,4,2],0],[[5,5,1],2],[[4,2,6],2],[[1,3,0],0]
    ];
    const [counts,target]=charts[i],categories=[["Apple","蘋果"],["Banana","香蕉"],["Pear","梨"]],answer=counts[target];
    const fruit=categories[target],orientation=i<6?"horizontal":"vertical";
    return {prompt:[`How many pupils chose ${fruit[0].toLowerCase()}s?`,`有多少名學生選擇${fruit[1]}？`],fields:[["pupils","名學生"]],answer:[answer],marks:1,
      why:[`${fruit[0]} has ${answer} pupil picture${answer===1?"":"s"}. Each picture stands for 1 pupil, so ${answer} pupil${answer===1?"":"s"} chose ${fruit[0].toLowerCase()}s.`,`${fruit[1]}一類有${answer}個學生圖案。每個圖案代表1名學生，所以有${answer}名學生選擇${fruit[1]}。`],
      pictogram:{orientation,categories,counts,target,title:["Favourite fruit in our class","本班最喜愛的水果"],key:["Each pupil picture stands for 1 pupil.","每個學生圖案代表1名學生。"]},
      figure:{kind:"pictogram",orientation,categories,counts,target,title:["Favourite fruit in our class","本班最喜愛的水果"],key:["Each pupil picture stands for 1 pupil.","每個學生圖案代表1名學生。"]}};
  }},
  {id:"share2a",grade:2,code:"2N6",label:["Division by equal sharing","平均分配除法"],count:12,make(i){
    const cases=[[12,3],[13,4],[10,2],[16,5],[14,3],[20,4],[17,5],[18,3],[11,2],[22,4],[23,5],[24,4]];
    const [total,children]=cases[i],each=Math.floor(total/children),left=total%children;
    return {prompt:[`Share ${total} counters equally among ${children} children. How many does each child get? How many are left over?`,`把${total}粒圓片平均分給${children}名小朋友。每人分得多少粒？剩下多少粒？`],
      fields:[["each","每人"],["left","剩下"]],answer:[each,left],marks:1,
      why:[`Put ${each} counters in each of ${children} trays; ${left} ${left===1?"counter is":"counters are"} left over. ${total} ÷ ${children} = ${each} remainder ${left}. Check: ${children} × ${each} + ${left} = ${total}.`,
        `${children}個盤子各放${each}粒，剩下${left}粒。${total} ÷ ${children} = ${each}，餘數${left}。驗算：${children} × ${each} + ${left} = ${total}。`],
      equalSharing:{total,children,each,left},figure:{kind:"equalSharing",total,children}};
  }},
  {id:"frac3a",grade:3,code:"3N5",label:["Read a shaded fraction","閱讀塗色分數"],count:12,make(i){
    const cases=[[4,1,0],[3,2,1],[2,1,0],[4,2,1],[5,3,2],[6,4,1],[8,3,2],[5,0,0],[6,6,0],[8,5,1],[3,1,2],[4,3,1]];
    const [parts,shaded,start]=cases[i],fraction={parts,shaded,start};
    const note=shaded===0?["None are shaded, so the fraction is 0.","沒有塗色，所以分數的值是0。"]:shaded===parts?["The whole is shaded, so this fraction equals 1.","整個長條都塗色，所以這個分數等於1。"]:shaded===2 && parts===4?["The same amount is also 1/2, but 2/4 records the parts shown.","相同的份量也可寫成1/2，但2/4記錄了圖中的等分數目。"]:["The top number counts shaded parts; the bottom number counts all equal parts.","上方的數字表示塗色的等分數目；下方表示所有等分的總數。"];
    return {prompt:["What fraction of this whole bar is shaded? Put the number of shaded parts above the line and the number of equal parts shown below it.","這條完整長條有幾分之幾塗了顏色？把塗色部分的數目寫在分數線上方，把圖中等分的總數寫在下方。"],fields:[["shaded","塗色"],["all parts","所有等分"]],answer:[shaded,parts],marks:1,
      why:[`There are ${parts} equal parts and ${shaded} ${shaded===1?"is":"are"} shaded. The fraction shown is ${shaded}/${parts}. ${note[0]}`,`共有${parts}個等分，其中${shaded}個塗了顏色。圖中的分數是${shaded}/${parts}。${note[1]}`],
      fractionBar:fraction,figure:{kind:"fractionBar",...fraction}};
  }},
  {id:"per1",grade:4,code:"4M1",label:["Rectangle perimeter","長方形周界"],count:16,make(i){
    const a=12+i,b=5+i%6;
    return numeric([`A rectangular book cover is ${a} cm long and ${b} cm wide. What is its perimeter?`,`長方形書套長${a}厘米、闊${b}厘米。它的周界是多少厘米？`],["cm","厘米"],2*(a+b),`(${a} + ${b}) × 2 = ${2*(a+b)}`);
  }},
  {id:"factor1",grade:4,code:"4N3",label:["Identifying factors","辨認因數"],count:12,make(i){
    const n=[12,16,18,20,24,27,28,30,32,36,40,42][i];
    const options=Array.from({length:8},(_,j)=>j+2), good=options.filter(x=>n%x===0).slice(0,2),bad=options.filter(x=>n%x!==0).slice(0,2);
    return {prompt:[`Select every factor of ${n} in the list.`,`選出下列所有${n}的因數。`],multi:true,choices:[...good,...bad].sort((a,b)=>a-b).map(String),answer:good.map(String),why:[good.map(x=>`${x} × ${n/x} = ${n}`).join(", "),good.map(x=>`${x} × ${n/x} = ${n}`).join("；")]};
  }},
  {id:"pct1",grade:6,code:"6N3",label:["Finding a percentage","求百分比"],count:15,retired:true,make(i){return percentageQuestion(i)}},
  {id:"pct2",grade:6,code:"6N4",label:["Finding a percentage","求百分比"],count:15,make(i){return percentageQuestion(i)}},
  {id:"mean1",grade:6,code:"6D1",label:["Arithmetic mean","算術平均數"],count:16,make(i){
    const a=10+i,b=a+7,c=a+2;
    return numeric([`A library lent ${a}, ${b} and ${c} books on three successive days. How many books did it lend per day on average?`,`圖書館連續三天分別借出${a}、${b}和${c}本書。平均每天借出多少本書？`],["books","本"],a+3,`(${a} + ${b} + ${c}) ÷ 3 = ${a+3}`);
  }}
];
function numeric(prompt,unit,answer,working){return {prompt,fields:[unit],answer:[answer],why:Array.isArray(working)?working:[working,working]}}
function decodeItems(raw,year){
  if(!raw || raw.length>300)return [];
  const ids=raw.split(".");
  if(ids.length>12 || new Set(ids).size!==ids.length)return [];
  const result=[];
  for(const id of ids){
    const [name,index,...extra]=id.split("-");
    const f=families.find(f=>f.id===name && f.grade===year);
    if(!f || extra.length || !/^(0|[1-9]\d?)$/.test(index) || +index>=f.count)return [];
    result.push({...f.make(+index),code:f.code,id,f});
  }
  return result;
}
function pick(f,used){
  const pool=Array.from({length:f.count},(_,i)=>f.id+"-"+i).filter(x=>!used.includes(x));
  return pool[Math.floor(Math.random()*pool.length)];
}
const linkVersion=new URLSearchParams(location.search).get("v")==="2"?"2":"3";
function customLink(ids,view,year,language=lang,version=linkVersion){
  const p=new URLSearchParams({v:version,lang:language,p:year,items:ids.join(".")});
  if(view)p.set("view",view);
  return "?"+p;
}
const warmUpP1=["count20a-10","next1-5","pictureadd1-21"];
const exitTicketP1=["count20a-12","next1-10","pictureadd1-38","parts18a-58","storyadd1-70","otherway1-3"];
const builderUndoKey="mathquiz-builder-undo-v1";
function readBuilderUndo(year,ids){
  try{
    const undo=JSON.parse(sessionStorage.getItem(builderUndoKey));
    return undo?.year===year && undo.after===ids.slice().sort().join(".") && ids.includes(undo.replacement) && !ids.includes(undo.previous) ? undo : null;
  }catch{return null}
}
function clearBuilderUndo(){try{sessionStorage.removeItem(builderUndoKey)}catch{}}
function renderBuilder(year,selected){
  const list=families.filter(f=>f.grade===year && !f.retired);
  const ids=selected.map(q=>q.id);
  const undo=readBuilderUndo(year,ids);
  const title=t("Create a quiz","建立小測");
  document.title=title+" | MathQuiz";
  app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+title+'</h1><nav class="downloads">'+[1,2,3,4,6].map(n=>'<a href="'+customLink([],"build",n)+'">'+level(n)+'</a>').join("")+'</nav><h2>'+level(year)+'</h2>'+(year===1?'<div class="builder-presets"><p class="builder-preset"><button type="button" id="warmup-preset">'+t("Use five-minute warm-up","使用五分鐘熱身題")+'</button> <span>'+t("Three quick questions on counting, sequences and addition.","三題數數、順數和加法題。")+'</span></p><p class="builder-preset"><button type="button" id="exit-preset">'+t("Use six-question exit ticket","使用六題離堂小測")+'</button> <span>'+t("A ready-to-edit set on numbers to 20 and addition.","可編輯的二十以內數和加法題組。")+'</span></p></div>':'')+'<form id="mix">'+list.map(f=>'<label class="field">'+local(f.label)+' <select name="'+f.id+'">'+[0,1,2,3,4,5].map(n=>'<option '+(n===(ids.length?selected.filter(q=>q.f===f).length:1)?"selected":"")+'>'+n+'</option>').join("")+'</select></label>').join("")+'<p><button>'+t("Generate quiz","產生小測")+'</button></p><p role="status" id="notice"></p></form>';
  if(year===1){
    app.querySelector("#warmup-preset").onclick=()=>{clearBuilderUndo();location.assign(customLink(warmUpP1,"build",year))};
    app.querySelector("#exit-preset").onclick=()=>{clearBuilderUndo();location.assign(customLink(exitTicketP1,"build",year))};
  }
  app.querySelector("#mix").onsubmit=e=>{
    e.preventDefault();const data=new FormData(e.target),fresh=[];
    for(const f of list)for(let i=0;i<Number(data.get(f.id));i++)fresh.push(pick(f,fresh));
    if(!fresh.length){document.querySelector("#notice").textContent=t("Choose at least one question.","請選擇最少一題。");return}
    clearBuilderUndo();
    location.assign(customLink(fresh,"build",year));
  };
  if(!ids.length)return;
  const marks=selected.reduce((sum,q)=>sum+(q.marks ?? q.fields?.length ?? 1),0);
  app.insertAdjacentHTML("beforeend",'<h2>'+t("Quiz preview","預覽小測")+'</h2><p class="builder-totals" role="status">'+ids.length+t(ids.length===1?" question":" questions"," 題")+' · '+marks+t(marks===1?" mark":" marks"," 分")+'</p>'+(undo?'<p><button type="button" id="undo-replace">'+t("Undo replacement","復原更換題目")+'</button></p>':'')+'<div class="downloads"><a id="take" href="'+customLink(ids,"",year)+'">'+t("Open pupil quiz","開啟學生小測")+'</a><button id="copy" type="button">'+t("Copy pupil link","複製學生連結")+'</button>'+printLinks(ids,year)+'</div><p id="copied" role="status"></p>'+selected.map((q,i)=>item(q,i,true,false)+'<div class="builder-actions"><button type="button" data-move="'+i+'" data-direction="-1" '+(i===0?'disabled':'')+'>'+t("Move up","上移")+'</button><button type="button" data-move="'+i+'" data-direction="1" '+(i===ids.length-1?'disabled':'')+'>'+t("Move down","下移")+'</button><button type="button" data-replace="'+i+'" '+(ids.filter(id=>id.startsWith(q.f.id+"-")).length===q.f.count?'disabled':'')+'>'+t("Replace question ","更換第 ")+(i+1)+t(""," 題")+'</button></div>').join(""));
  if(undo)app.querySelector("#undo-replace").onclick=()=>{const at=ids.indexOf(undo.replacement);ids[at]=undo.previous;clearBuilderUndo();location.assign(customLink(ids,"build",year))};
  app.querySelector("#copy").onclick=async()=>{const url=app.querySelector("#take").href;try{await navigator.clipboard.writeText(url);app.querySelector("#copied").textContent=t("Pupil link copied.","已複製學生連結。")}catch{app.querySelector("#copied").textContent=url}};
  app.querySelectorAll("[data-move]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.move),j=i+Number(b.dataset.direction);[ids[i],ids[j]]=[ids[j],ids[i]];location.assign(customLink(ids,"build",year))});
  app.querySelectorAll("[data-replace]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.replace),previous=ids[i],replacement=pick(selected[i].f,ids);if(!replacement)return;ids[i]=replacement;try{sessionStorage.setItem(builderUndoKey,JSON.stringify({year,after:ids.slice().sort().join("."),previous,replacement}))}catch{}location.assign(customLink(ids,"build",year))});
}
function printLinks(ids,year){
  return ["paper","key"].map(v=>'<a href="'+customLink(ids,v,year)+'">'+(v==="paper"?t("Print pupil paper / PDF","列印學生試卷／PDF"):t("Print worked key / PDF","列印解答／PDF"))+'</a>').join("");
}


