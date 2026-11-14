const params = new URLSearchParams(location.search);
const grade = [1,4,6].find(n => String(n) === params.get("p"));
const lang = params.get("lang") === "zh" ? "zh" : "en";
const ch = lang === "zh";
const t = (en,zh) => ch ? zh : en;
const local = pair => pair[ch ? 1 : 0];
const level = n => t("Primary " + n, "小" + ["","一","二","三","四","五","六"][n]);
const topics = {1:["Counting, addition and shapes","數數、加法與圖形"],4:["Factors, perimeter and bar charts","因數、周界與棒形圖"],6:["Percentages, speed and averages","百分數、速率與平均數"]};
const href = (n,language=lang) => "?v=1&lang="+language+(n?"&p="+n:"");
document.documentElement.lang = ch ? "zh-HK" : "en";
for (const language of ["en","zh"]) document.getElementById(language).href = href(grade,language);
const app = document.getElementById("app");
function figure(type) {
  if (!type) return "";
  if (typeof type === "object" && type.kind === "counters") {
    const rows=Math.ceil(type.count/5);
    const boxes=Array.from({length:rows},(_,r)=>'<rect x="4" y="'+(r*38+2)+'" width="190" height="34" rx="8" fill="#f2f6f3" stroke="#9bb9a5"/>').join("");
    const dots=Array.from({length:type.count},(_,i)=>'<circle cx="'+(24+i%5*37)+'" cy="'+(19+Math.floor(i/5)*38)+'" r="10" fill="#2d735a"/>').join("");
    const label=t("Counter rows. ","一行行圓片。")+Array(type.count).fill(t("counter","圓片")).join(", ");
    return '<svg class="figure" viewBox="0 0 198 '+(rows*38+2)+'" role="img" aria-label="'+label+'">'+boxes+dots+'</svg>';
  }
  if (typeof type === "object" && type.kind === "parts") {
    const label=t(`Whole ${type.total}; one part ${type.known}; other part unknown.`,`整體${type.total}；其中一部分${type.known}；另一部分未知。`);
    return '<svg class="figure" viewBox="0 0 240 142" role="img" aria-label="'+label+'"><g fill="none" stroke="#678c78" stroke-width="3"><path d="M120 50v21M54 71h132M54 71v15M186 71v15"/><rect x="76" y="8" width="88" height="42" rx="8"/><rect x="10" y="86" width="88" height="42" rx="8"/><rect x="142" y="86" width="88" height="42" rx="8"/></g><g text-anchor="middle" font-size="24"><text x="120" y="37">'+type.total+'</text><text x="54" y="115">'+type.known+'</text><text x="186" y="115">?</text></g></svg>';
  }
  if (typeof type === "object" && type.kind === "twoGroups") {
    const titleA=type.story?t("At first","原有"):t("Red","紅色"),titleB=type.story?t("Added","加上"):t("Blue","藍色");
    const dots=(n,x,colour)=>Array.from({length:n},(_,i)=>'<circle cx="'+(x+20+i%5*27)+'" cy="'+(46+Math.floor(i/5)*31)+'" r="9" fill="'+colour+'"/>').join("");
    const label=titleA+": "+Array(type.a).fill(t("red counter","紅色圓片")).join(", ")+". "+titleB+": "+Array(type.b).fill(t("blue counter","藍色圓片")).join(", ");
    return '<svg class="figure two-groups" viewBox="0 0 320 102" role="img" aria-label="'+label+'"><g fill="#f8faf7" stroke="#9bb9a5"><rect x="4" y="22" width="152" height="74" rx="8"/><rect x="164" y="22" width="152" height="74" rx="8"/></g><g text-anchor="middle"><text x="80" y="17">'+titleA+'</text><text x="240" y="17">'+titleB+'</text></g>'+dots(type.a,4,"#a5541f")+dots(type.b,164,"#316a93")+'</svg>';
  }
  const unit=t("cm","厘米");
  const figures = {
    stars: [t("Two rows of stars: five above, two below.","兩排星星，上排五顆，下排兩顆。"),"0 0 245 76",'<g fill="#a5541f">'+[0,1,2,3,4,5,6].map(i=>'<path transform="translate('+((i%5)*46+4)+' '+(i<5?2:40)+')" d="M17 0l5 11 12 2-9 8 2 12-10-6-11 6 2-12-8-8 12-2z"/>').join("")+'</g>'],
    shapes:[t("A has four equal sides, B has three sides, C is round.","A有四條等長的邊，B有三條邊，C是圓形。"),"0 0 260 85",'<g fill="#e6efed" stroke="#235e55" stroke-width="3"><rect x="10" y="7" width="48" height="48"/><path d="M103 10l53 17-42 31z"/><circle cx="218" cy="32" r="25"/></g><g text-anchor="middle"><text x="34" y="80">A</text><text x="129" y="80">B</text><text x="218" y="80">C</text></g>'],
    board:[t("Rectangle, sides 90 and 60 cm.","長方形，長90厘米、闊60厘米。"),"0 0 270 125",'<rect x="10" y="26" width="139" height="92" fill="#eceae3" stroke="#334842" stroke-width="2"/><text x="52" y="19">90 '+unit+'</text><text x="159" y="80">60 '+unit+'</text>'],
    books:[t("Books borrowed: A 25, B 20, C 15.","借書數量：A班25本、B班20本、C班15本。"),"0 0 280 150",Array.from({length:6},(_,i)=>'<path d="M38 '+(120-i*20)+'h220" stroke="#b7c3bc"/><text x="30" text-anchor="end" y="'+(125-i*20)+'">'+(5*i)+'</text>').join("")+[25,20,15].map((v,i)=>'<rect x="'+(58+i*67)+'" y="'+(120-v*4)+'" width="34" height="'+v*4+'" fill="#35665c"/><text x="'+(70+i*67)+'" y="142">'+"ABC"[i]+'</text>').join("")]
  };
  const [label,box,body]=figures[type];
  return '<svg class="figure" viewBox="'+box+'" role="img" aria-label="'+label+'">'+body+'</svg>';
}
function points(q){return q.marks ?? q.fields?.length ?? 1}
function controls(q,i,paper) {
  if(q.choices) return q.choices.map(v=> paper ? '<span class="option">□ '+v+'</span>' : '<label class="option"><input type="'+(q.multi?'checkbox':'radio')+'" name="q'+i+'" value="'+v+'"> '+v+'</label>').join("");
  if(q.equation)return paper?'<div class="equation-space">________________________</div>':'<label class="field"><input class="equation-input" type="text" autocomplete="off" aria-label="'+t("Addition sentence","加法算式")+'" name="q'+i+'f0"></label><small class="response-help">'+t("Write number + number = total.","請輸入「數字 + 數字 = 總數」。")+'</small>';
  if(q.otherWay)return paper?'<div class="drawing-space">'+t("Draw two labelled groups, or write an addition sentence.","畫出兩組圓片並標明數量，或寫出一道加法算式。")+'</div>':'<div class="pair-entry"><label>'+t("First group","第一組")+' <input type="text" inputmode="numeric" autocomplete="off" name="q'+i+'f0"></label><span> + </span><label>'+t("Second group","第二組")+' <input type="text" inputmode="numeric" autocomplete="off" name="q'+i+'f1"></label><span> = '+q.otherWay.total+'</span></div><small class="response-help">'+t("Enter one number from 1 to 9 in each box.","每格輸入一個 1 至 9 的數字。")+'</small>';
  if(q.inlineAnswer)return "";
  return q.fields.map((f,j)=>'<label class="field">'+(paper?'<span class="blank"></span>':'<input type="text" autocomplete="off" aria-label="'+local(q.prompt)+' ('+local(f)+')" name="q'+i+'f'+j+'">')+' '+local(f)+'</label>').join("");
}
function item(q,i,paper,key) {
  const inline=q.inlineAnswer?(key?'<b class="inline-solution">'+q.answer[0]+'</b>':paper?'<span class="inline-blank" aria-label="'+t("answer space","作答位置")+'"></span>':'<input class="inline-answer" type="text" autocomplete="off" inputmode="numeric" aria-label="'+t("Answer for question ","第 ")+(i+1)+t(""," 題答案")+'" name="q'+i+'f0">'):null;
  const prompt=inline?local(q.prompt).replace("___",inline):local(q.prompt);
  const solution=key ? '<p><b>'+(q.otherWay?q.answer.join(" + ")+" = "+q.otherWay.total:q.answer.join(q.multi?", ":" / "))+'</b> · '+local(q.why)+'</p>' : controls(q,i,paper);
  return '<fieldset><legend>'+t("Question ","第 ")+(i+1)+t(""," 題")+'</legend><small>'+q.code+' · '+points(q)+t(points(q)>1?" marks":" mark"," 分")+'</small><p class="prompt">'+prompt+'</p>'+figure(q.figure)+solution+'<div class="feedback" id="feedback'+i+'"></div></fieldset>';
}
function number(s) {
  s=s.normalize("NFKC").trim();
  const parts=s.split("/");
  if(parts.length>2 || parts.some(p=>!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(p.trim()))) return NaN;
  return Number(parts[0])/(parts.length===2?Number(parts[1]):1);
}
function mark(form) {
  let total=0;
  const scores=quizzes[grade].map((q,i)=>{
    if(q.choices){
      const a=form.getAll("q"+i);
      if(!a.length)return null;
      return Number(a.length===q.answer.length && q.answer.every(v=>a.includes(v)));
    }
    const values=q.fields.map((_,j)=>String(form.get("q"+i+"f"+j)||"").trim());
    if(values.some(v=>!v))return null;
    if(q.equation){
      const m=values[0].normalize("NFKC").replace(/\s/g,"").match(/^([1-9])\+([1-9])=(\d{1,2})$/);
      return Number(!!m && +m[3]===q.equation.total && ((+m[1]===q.equation.a && +m[2]===q.equation.b) || (+m[1]===q.equation.b && +m[2]===q.equation.a)));
    }
    if(q.otherWay){
      const pair=values.map(v=>v.normalize("NFKC"));
      return Number(pair.every(v=>/^[1-9]$/.test(v)) && +pair[0]+ +pair[1]===q.otherWay.total && [Number(pair[0]),Number(pair[1])].sort((a,b)=>a-b).join(",")!==[...q.otherWay.shown].sort((a,b)=>a-b).join(","));
    }
    return values.reduce((sum,v,j)=>sum+Number(number(v)===q.answer[j]),0);
  });
  const status=document.getElementById("status");
  if(scores.includes(null)){const i=scores.indexOf(null);status.textContent=t("Please complete question ","請完成第 ")+(i+1)+t(" before submitting."," 題後再提交。");document.querySelectorAll("fieldset")[i].querySelector("input").focus();return}
  scores.forEach((score,i)=>{const q=quizzes[grade][i]; total+=score;document.getElementById("feedback"+i).textContent=score+" / "+points(q)+" · "+local(q.why)});
  status.textContent=t("Score","得分")+" "+total+" / "+quizzes[grade].reduce((s,q)=>s+points(q),0);
  document.querySelectorAll("fieldset input").forEach(el=>el.disabled=true);
  document.querySelector("button[type=submit]").hidden=true;
  document.getElementById("retry").hidden=false;
  status.focus();
}
const custom=params.get("v")==="2";
const selected=custom?decodeItems(params.get("items"),grade):[];
const ids=selected.map(q=>q.id);
const view=params.get("view")||"";
if(custom && grade){
  for(const language of ["en","zh"]) document.getElementById(language).href=customLink(ids,view,grade,language);
  if(selected.length)quizzes[grade]=selected;
}
if(custom && (!grade || (params.get("items") && !selected.length) || (!selected.length && view!=="build"))){
  app.innerHTML='<h1>'+t("Quiz link unavailable","小測連結無效")+'</h1><a href="'+href(null)+'">'+t("All quizzes","所有小測")+'</a>';
}else if(custom && view==="build"){
  renderBuilder(grade,selected);
}else if(!grade){
  document.title=t("MathQuiz · Primary mathematics","MathQuiz · 小學數學");
  app.innerHTML='<h1>'+t("Primary mathematics","小學數學")+'</h1><p class="intro">'+t("Choose a quiz to practise online or download an A4 paper and worked answers.","選擇小測，網上作答或下載 A4 試卷及解答。")+'</p><section class="cards">'+[1,4,6].map(n=>'<a class="card" href="'+href(n)+'"><b>'+level(n)+'</b><span>'+local(topics[n])+'</span><strong>'+t("Open quiz","開啟小測")+' →</strong></a>').join("")+'</section><p><a class="builder-link" href="'+customLink([],"build",1)+'">'+t("Create a quiz","建立小測")+' →</a></p>';
}else{
  const paper=custom?(["paper","key"].includes(view)?view:null):params.get("sheet");
  const key=paper==="key";
  const title=level(grade)+" · "+(custom?t("Custom quiz","自訂小測"):local(topics[grade]));
  document.title=title+" | MathQuiz";
  const file="papers/p"+grade+"-"+lang+"-";
  const links=custom?'': '<div class="downloads"><a download href="'+file+'paper.pdf">'+t("Student paper (PDF)","學生試卷 (PDF)")+'</a><a download href="'+file+'key.pdf">'+t("Worked answers (PDF)","解題步驟 (PDF)")+'</a></div>';
  app.innerHTML=(paper?'':'<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a>')+'<h1>'+title+'</h1>'+(paper?'<h2>'+(key?t("Worked answers","解題步驟"):t("Student paper","學生試卷"))+'</h2>'+(key?'':'<p>'+t("Name","姓名")+' __________________　'+t("Class","班別")+' ______　'+t("Date","日期")+' __________</p>'):links)+'<form>'+quizzes[grade].map((q,i)=>item(q,i,paper,key)).join("")+(paper?'':'<button type="submit">'+t("Mark my quiz","提交及核對答案")+'</button><a id="retry" hidden href="'+(custom?customLink(ids,"",grade):href(grade))+'" >'+t("Try again","重新作答")+'</a><p id="status" tabindex="-1" role="status"></p>')+'</form>';
  if(custom && paper){
    app.insertAdjacentHTML("afterbegin",'<div class="print-tools"><a href="'+customLink(ids,"build",grade)+'">← '+t("Preview","預覽")+'</a> <button id="print">'+t("Print or save as PDF","列印或另存為 PDF")+'</button></div>');
    document.getElementById("print").onclick=()=>window.print();
  }
  if(!paper) app.querySelector("form").onsubmit=e=>{e.preventDefault();mark(new FormData(e.target))};
}




