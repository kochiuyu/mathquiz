// Shared links use permanent template and variant IDs. Add new versions under new IDs.
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
  {id:"per1",grade:4,code:"4M1",label:["Rectangle perimeter","長方形周界"],count:16,make(i){
    const a=12+i,b=5+i%6;
    return numeric([`A rectangular book cover is ${a} cm long and ${b} cm wide. What is its perimeter?`,`長方形書套長${a}厘米、闊${b}厘米。它的周界是多少厘米？`],["cm","厘米"],2*(a+b),`(${a} + ${b}) × 2 = ${2*(a+b)}`);
  }},
  {id:"factor1",grade:4,code:"4N3",label:["Identifying factors","辨認因數"],count:12,make(i){
    const n=[12,16,18,20,24,27,28,30,32,36,40,42][i];
    const options=Array.from({length:8},(_,j)=>j+2), good=options.filter(x=>n%x===0).slice(0,2),bad=options.filter(x=>n%x!==0).slice(0,2);
    return {prompt:[`Select every factor of ${n} in the list.`,`選出下列所有${n}的因數。`],multi:true,choices:[...good,...bad].sort((a,b)=>a-b).map(String),answer:good.map(String),why:[good.map(x=>`${x} × ${n/x} = ${n}`).join(", "),good.map(x=>`${x} × ${n/x} = ${n}`).join("；")]};
  }},
  {id:"pct1",grade:6,code:"6N3",label:["Finding a percentage","求百分比"],count:15,make(i){
    const total=[20,40,50][i%3], pct=10+10*Math.floor(i/3),n=total*pct/100;
    return numeric([`Of ${total} pupils, ${n} chose badminton. What percentage chose badminton?`,`${total}名學生中有${n}人選擇羽毛球。選擇羽毛球的學生佔百分之幾？`],["%","%"],pct,`${n} ÷ ${total} × 100% = ${pct}%`);
  }},
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
function customLink(ids,view,year,language=lang){
  const p=new URLSearchParams({v:"2",lang:language,p:year,items:ids.join(".")});
  if(view)p.set("view",view);
  return "?"+p;
}
function renderBuilder(year,selected){
  const list=families.filter(f=>f.grade===year);
  const ids=selected.map(q=>q.id);
  const title=t("Create a quiz","建立小測");
  document.title=title+" | MathQuiz";
  app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+title+'</h1><nav class="downloads">'+[1,4,6].map(n=>'<a href="'+customLink([],"build",n)+'">'+level(n)+'</a>').join("")+'</nav><h2>'+level(year)+'</h2><form id="mix">'+list.map(f=>'<label class="field">'+local(f.label)+' <select name="'+f.id+'">'+[0,1,2,3,4,5].map(n=>'<option '+(n===(ids.length?selected.filter(q=>q.f===f).length:1)?"selected":"")+'>'+n+'</option>').join("")+'</select></label>').join("")+'<p><button>'+t("Generate quiz","產生小測")+'</button></p><p role="status" id="notice"></p></form>';
  app.querySelector("#mix").onsubmit=e=>{
    e.preventDefault();const data=new FormData(e.target),fresh=[];
    for(const f of list)for(let i=0;i<Number(data.get(f.id));i++)fresh.push(pick(f,fresh));
    if(!fresh.length){document.querySelector("#notice").textContent=t("Choose at least one question.","請選擇最少一題。");return}
    location.assign(customLink(fresh,"build",year));
  };
  if(!ids.length)return;
  app.insertAdjacentHTML("beforeend",'<h2>'+t("Quiz preview","預覽小測")+'</h2><div class="downloads"><a id="take" href="'+customLink(ids,"",year)+'">'+t("Open pupil quiz","開啟學生小測")+'</a><button id="copy">'+t("Copy pupil link","複製學生連結")+'</button>'+printLinks(ids,year)+'</div><p id="copied" role="status"></p>'+selected.map((q,i)=>item(q,i,true,false)+'<button data-replace="'+i+'">'+t("Replace question ","更換第 ")+(i+1)+t(""," 題")+'</button>').join(""));
  app.querySelector("#copy").onclick=async()=>{const url=app.querySelector("#take").href;try{await navigator.clipboard.writeText(url);app.querySelector("#copied").textContent=t("Pupil link copied.","已複製學生連結。")}catch{app.querySelector("#copied").textContent=url}};
  app.querySelectorAll("[data-replace]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.replace);ids[i]=pick(selected[i].f,ids);location.assign(customLink(ids,"build",year))});
}
function printLinks(ids,year){
  return ["paper","key"].map(v=>'<a href="'+customLink(ids,v,year)+'">'+(v==="paper"?t("Print pupil paper / PDF","列印學生試卷／PDF"):t("Print worked key / PDF","列印解答／PDF"))+'</a>').join("");
}


