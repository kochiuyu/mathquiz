const params = new URLSearchParams(location.search);
const grade = [1,4,6].find(n => String(n) === params.get("p"));
const fixedP6V4=grade===6 && params.get("v")==="4" && !params.has("items");
const legacyFixedP6=grade===6 && (params.get("v")==="1" || !params.has("v"));
const invalidV4=params.get("v")==="4" && !fixedP6V4;
const lang = params.get("lang") === "zh" ? "zh" : "en";
const ch = lang === "zh";
const t = (en,zh) => ch ? zh : en;
const local = pair => pair[ch ? 1 : 0];
const level = n => t("Primary " + n, "小" + ["","一","二","三","四","五","六"][n]);
const topics = {1:["Counting, addition and shapes","數數、加法與圖形"],4:["Factors, perimeter and bar charts","因數、周界與棒形圖"],6:["Percentages, speed and averages","百分數、速率與平均數"]};
const href = (n,language=lang,sheet="") => "?v="+(n===6 && !legacyFixedP6?"4":"1")+"&lang="+language+(n?"&p="+n:"")+(sheet?"&sheet="+sheet:"");
document.documentElement.lang = ch ? "zh-HK" : "en";
for (const language of ["en","zh"]) document.getElementById(language).href = href(grade,language);
const app = document.getElementById("app");
if(fixedP6V4)quizzes[6]=fixedQuiz(6,"4");
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
  return q.fields.map((f,j)=>'<label class="field">'+(paper?'<span class="blank"></span>':'<input type="text" '+(strictP1?'inputmode="numeric" ':'')+'autocomplete="off" aria-label="'+local(q.prompt)+' ('+local(f)+')" name="q'+i+'f'+j+'">')+' '+local(f)+'</label>').join("")+(strictP1 && !paper?'<small class="response-help">'+t("Enter a whole number using digits only.","請只用數字輸入整數。")+'</small>':"");
}
function item(q,i,paper,key) {
  const inline=q.inlineAnswer?(key?'<b class="inline-solution">'+q.answer[0]+'</b>':paper?'<span class="inline-blank" aria-label="'+t("answer space","作答位置")+'"></span>':'<input class="inline-answer" type="text" autocomplete="off" inputmode="numeric" aria-label="'+t("Answer for question ","第 ")+(i+1)+t(""," 題答案")+'" name="q'+i+'f0">'):null;
  const prompt=inline?local(q.prompt).replace("___",inline):local(q.prompt);
  const solution=key ? '<p><b>'+(q.otherWay?q.answer.join(" + ")+" = "+q.otherWay.total:q.answer.join(q.multi?", ":" / "))+'</b> · '+local(q.why)+'</p>' : controls(q,i,paper);
  return '<fieldset><legend>'+t("Question ","第 ")+(i+1)+t(""," 題")+'</legend><small>'+q.code+' · '+points(q)+t(points(q)>1?" marks":" mark"," 分")+'</small><p class="prompt">'+prompt+'</p>'+figure(q.figure)+solution+'<div class="feedback" id="feedback'+i+'"></div></fieldset>';
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
    return values.reduce((sum,v,j)=>sum+Number(numericAnswer(v,q.answer[j],strictP1)),0);
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
function renderPractice(){
  const sequence=params.get("skill")==="next1";
  const addition=params.get("skill")==="storyadd1";
  const missingPart=params.get("skill")==="parts18a";
  const perimeter=grade===4 && params.get("skill")==="per1";
  const family=families.find(f=>f.id===(perimeter?"per1":sequence?"next1":addition?"storyadd1":missingPart?"parts18a":"count20a"));
  const first=perimeter?6:sequence?6:addition?39:missingPart?58:10;
  const pool=(perimeter?Array.from({length:16},(_,i)=>i):sequence?Array.from({length:12},(_,i)=>i):addition||missingPart?Array.from({length:81},(_,i)=>i):Array.from({length:15},(_,i)=>i+5)).filter(i=>i!==first);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[first,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p="+grade+"&view=practice"+(perimeter?"&skill=per1":sequence?"&skill=next1":addition?"&skill=storyadd1":missingPart?"&skill=parts18a":"");
  document.title=perimeter?t("Rectangle perimeter · Practice | MathQuiz","長方形周界 · 練習 | MathQuiz"):sequence?t("Counting forwards · Practice | MathQuiz","順數 · 練習 | MathQuiz"):addition?t("Addition stories · Practice | MathQuiz","加法情境題 · 練習 | MathQuiz"):missingPart?t("Find the other part · Practice | MathQuiz","找出另一部分 · 練習 | MathQuiz"):t("Count pictured counters · Practice | MathQuiz","點算圖中圓片 · 練習 | MathQuiz");
  for(const language of ["en","zh"])
    document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    const count=q.answer[0],rows=Math.floor(count/5),extra=count%5;
    const groupA=q.figure?.a,groupB=q.figure?.b;
    const whole=q.figure?.total,known=q.figure?.known;
    const length=perimeter?12+variants[position]:0,width=perimeter?5+variants[position]%6:0;
    const explanation=sequence
      ?t("The last number is "+(count-1)+". Count one more: "+(count-1)+" + 1 = "+count+".","最後一個數是"+(count-1)+"。再順數一個："+(count-1)+" + 1 = "+count+"。")
      :addition?t("Combine "+groupA+" red and "+groupB+" blue counters: "+groupA+" + "+groupB+" = "+count+".","把"+groupA+"粒紅色圓片和"+groupB+"粒藍色圓片合起來："+groupA+" + "+groupB+" = "+count+"。")
      :missingPart?t("Take the known part from the whole: "+whole+" - "+known+" = "+count+". Check: "+known+" + "+count+" = "+whole+".","從整體減去已知部分："+whole+" - "+known+" = "+count+"。檢查："+known+" + "+count+" = "+whole+"。")
      :perimeter?t("Add the four boundary sides: "+length+" + "+width+" + "+length+" + "+width+" = "+count+" cm.","把四條邊的長度相加："+length+" + "+width+" + "+length+" + "+width+" = "+count+"厘米。")
      :t("Count "+rows+" complete "+(rows===1?"row":"rows")+" of five ("+(rows*5)+")"+(extra?" and "+extra+" more":"")+". Total: "+count+".","數出"+rows+"行完整的五粒圓片（"+(rows*5)+"粒）"+(extra?"，再加"+extra+"粒":"")+"，共有"+count+"粒。");
    const prompt=sequence?local(q.prompt).replace("___",'<input id="practice-answer" class="inline-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Next number","下一個數")+'">'):local(q.prompt);
    const answerField=sequence?"":'<label class="field"><input id="practice-answer" type="text" inputmode="'+(perimeter?"decimal":"numeric")+'" autocomplete="off" aria-label="'+t(perimeter?"Perimeter in centimetres":addition?"Total number of counters":missingPart?"Counters in the other part":"Number of counters",perimeter?"周界（厘米）":addition?"圓片總數":missingPart?"另一部分的圓片數量":"圓片數量")+'"> '+local(q.fields[0])+'</label>';
    const heading=t(perimeter?"Practise rectangle perimeter":sequence?"Practise counting forwards":addition?"Practise addition stories":missingPart?"Practise finding the other part":"Practise counting counters",perimeter?"練習長方形周界":sequence?"練習順數":addition?"練習加法情境題":missingPart?"練習找出另一部分":"練習點算圓片");
    const intro=t(perimeter?"Add all four sides of each rectangle. Try three questions at your own pace.":sequence?"Find the next number in each sequence. Try three questions at your own pace.":addition?"Combine the two groups of counters. Try three questions at your own pace.":missingPart?"Find the missing part of each whole. Try three questions at your own pace.":"Count each counter once. Try three questions at your own pace.",perimeter?"把每個長方形的四條邊相加，按自己的步伐完成三題。":sequence?"找出每組順數題的下一個數，按自己的步伐完成三題。":addition?"把兩組圓片合起來，按自己的步伐完成三題。":missingPart?"找出每個整體中缺少的部分，按自己的步伐完成三題。":"每粒圓片只數一次，按自己的步伐完成三題。");
    const rectangle=perimeter?'<svg class="figure" viewBox="0 0 320 170" role="img" aria-label="'+t("Rectangle with opposite sides of "+length+" cm and "+width+" cm.","長方形的兩組對邊分別長"+length+"厘米和"+width+"厘米。")+'"><rect x="65" y="40" width="190" height="90" fill="#f2f6f3" stroke="#32755e" stroke-width="3"/><g text-anchor="middle"><text x="160" y="25">'+length+' cm</text><text x="160" y="158">'+length+' cm</text><text x="32" y="90">'+width+' cm</text><text x="288" y="90">'+width+' cm</text></g></svg>':'';
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+heading+'</h1><p>'+intro+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+prompt+'</legend>'+(perimeter?rectangle:figure(q.figure))+answerField+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer");
      const value=input.value.trim();
      const feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t(perimeter?"Enter the perimeter.":sequence?"Enter the next number.":addition?"Enter the total number of counters.":missingPart?"Enter the number of counters in the other part.":"Enter the number of counters.",perimeter?"請輸入周界。":sequence?"請輸入下一個數。":addition?"請輸入圓片總數。":missingPart?"請輸入另一部分的圓片數量。":"請輸入圓片的數量。");input.focus();return;}
      attempts++;
      const correct=numericAnswer(value,q.answer[0],!perimeter);
      if(attempts===1 && correct)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=correct
          ?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。")+explanation
          :t("The answer is ","答案是 ")+q.answer[0]+". "+explanation;
        input.disabled=true;
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const normalized=value.normalize("NFKC"),entered=Number(normalized);
        const additionHint=!/^\d+$/.test(normalized)
          ?t("Enter a whole-number numeral using digits only, then add both groups.","請只用數字輸入整數，再把兩組圓片合起來。")
          :entered===groupA || entered===groupB
            ?t("That counts only one group. Combine the red and blue counters. Try again.","你只數了一組。把紅色和藍色圓片合起來，再試一次。")
            :Math.abs(entered-count)===1
              ?t("You are one counter away. Start with the red group and count each blue counter once.","只差一粒圓片。先數紅色的一組，再逐一數藍色圓片。")
              :t("Add the red and blue groups together. Count on from the red group, one blue counter at a time.","把紅色和藍色兩組合起來。從紅色圓片數起，再逐一數藍色圓片。");
        const missingPartHint=!/^\d+$/.test(normalized)
          ?t("Enter a whole-number numeral using digits only, then find the other part.","請只用數字輸入整數，再找出另一部分。")
          :entered===whole || entered===known
            ?t("That is the whole or the part already shown. Count on from "+known+" to "+whole+"; how many counters did you add? Try again.","這是整體或已顯示的部分。從"+known+"數到"+whole+"，加了多少粒圓片？再試一次。")
            :Math.abs(entered-count)===1
              ?t("You are one counter away. Count on from "+known+" to "+whole+" one step at a time. Try again.","只差一粒圓片。從"+known+"逐一數到"+whole+"，再試一次。")
              :t("Start at the known part, "+known+". Count on until you reach the whole, "+whole+". How many did you add?", "從已知的"+known+"粒數起，數到整體的"+whole+"粒。加了多少粒？");
        const perimeterHint=entered===length*width
          ?t("That is the area inside the rectangle. Perimeter measures the boundary: add all four sides.","這是長方形內部的面積。周界是四條邊的總長度，請把四條邊相加。")
          :entered===length+width
            ?t("You added two sides. A rectangle has two more opposite sides of the same lengths. Add them too.","你只加了兩條邊。長方形還有兩條同樣長的對邊，也要加上。")
            :!Number.isFinite(entered)
              ?t("Enter a number only; cm is already shown beside the answer box.","只需輸入數字；答案欄旁已顯示厘米。")
              :t("Trace the four boundary sides and add "+length+" + "+width+" + "+length+" + "+width+".","沿着四條邊數一數，計算"+length+" + "+width+" + "+length+" + "+width+"。");
        feedback.textContent=perimeter?perimeterHint:sequence?t("Not yet. Look at the last number and count on one. Try again.","再試一次：看看最後一個數，再順數一個。"):addition?additionHint:missingPart?missingPartHint:t("Not yet. Count each full row of five, then the counters in the last row. Try again.","再試一次：先數每行五粒的完整行，再數最後一行的圓片。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><p>'+t(perimeter?"You can try another set of perimeter questions.":sequence?"You can try another set of counting-forwards questions.":addition?"You can try another set of addition stories.":missingPart?"You can try another set of missing-part questions.":"You can try another set of counting questions.",perimeter?"你可以再做一組周界題。":sequence?"你可以再做一組順數題。":addition?"你可以再做一組加法情境題。":missingPart?"你可以再做一組找出另一部分的題目。":"你可以再做一組點算題。")+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
const custom=["2","3"].includes(params.get("v"));
const strictP1=custom && grade===1 && params.get("v")==="3";
const selected=custom?decodeItems(params.get("items"),grade):[];
const ids=selected.map(q=>q.id);
const view=params.get("view")||"";
if(custom && grade){
  for(const language of ["en","zh"]) document.getElementById(language).href=customLink(ids,view,grade,language);
  if(selected.length)quizzes[grade]=selected;
}
if(invalidV4 || (custom && (!grade || (params.get("items") && !selected.length) || (!selected.length && view!=="build")))){
  app.innerHTML='<h1>'+t("Quiz link unavailable","小測連結無效")+'</h1><a href="'+href(null)+'">'+t("All quizzes","所有小測")+'</a>';
}else if(custom && view==="build"){
  renderBuilder(grade,selected);
}else if((grade===1 || (grade===4 && params.get("skill")==="per1")) && view==="practice"){
  renderPractice();
}else if(!grade){
  document.title=t("MathQuiz · Primary mathematics","MathQuiz · 小學數學");
  const presets=[
    {ids:warmUpP1,title:t("P1 five-minute warm-up","小一五分鐘熱身題"),description:t("Three quick questions on counting, sequences and addition.","三題數數、順數和加法題。"),edit:t("Edit warm-up","編輯熱身題"),pupil:t("Try warm-up","試做熱身題")},
    {ids:exitTicketP1,title:t("Six-question P1 exit ticket","小一六題離堂小測"),description:t("A ready-to-edit set on numbers to 20 and addition.","可編輯的二十以內數和加法題組。"),edit:t("Edit exit ticket","編輯離堂小測"),pupil:t("Try exit ticket","試做離堂小測")}
  ];
  app.innerHTML='<h1>'+t("Primary mathematics","小學數學")+'</h1><p class="intro">'+t("Choose a quiz to practise online or download an A4 paper and worked answers.","選擇小測，網上作答或下載 A4 試卷及解答。")+'</p><section class="home-actions" aria-label="'+t("Get started","開始使用")+'">'+presets.map(p=>'<div class="home-feature"><h2>'+p.title+'</h2><p>'+p.description+'</p><div class="home-links"><a class="builder-link" href="'+customLink(p.ids,"build",1)+'">'+p.edit+' →</a><a href="'+customLink(p.ids,"",1)+'">'+p.pupil+' →</a></div></div>').join("")+'<div class="home-feature"><h2>'+t("Create a quiz","建立小測")+'</h2><p>'+t("Choose questions for Primary 1, 4 or 6.","選擇小一、小四或小六的題目。")+'</p><div class="home-links"><a class="builder-link" href="'+customLink([],"build",1)+'">'+t("Start a new quiz","開始建立小測")+' →</a></div></div><div class="home-feature"><h2>'+t("Practise a skill","練習一項技能")+'</h2><p>'+t("Start with three P1 counting questions. Get a hint and try again.","先做三題小一點算題，遇到困難可看提示再試。")+'</p><div class="home-links"><a class="builder-link" href="?lang='+lang+'&p=1&view=practice">'+t("Practise counting","練習點算")+' →</a></div></div></section><h2>'+t("Example quizzes","示例小測")+'</h2><section class="cards">'+[1,4,6].map(n=>'<a class="card" href="'+href(n)+'"><b>'+level(n)+'</b><span>'+local(topics[n])+'</span><strong>'+t("Open quiz","開啟小測")+' →</strong></a>').join("")+'</section>';
  const practiceCard=app.querySelector(".home-actions .home-feature:last-child");
  practiceCard.querySelector("p").textContent=t("Choose P1 counting, counting forwards, addition or missing parts, or P4 perimeter. Get a hint and try again.","選擇小一點算、順數、加法、找出另一部分，或小四周界練習，遇到困難可看提示再試。");
  practiceCard.querySelector(".home-links").insertAdjacentHTML("beforeend",'<a href="?lang='+lang+'&p=1&view=practice&skill=next1">'+t("Practise counting forwards","練習順數")+' →</a>');
  practiceCard.querySelector(".home-links").insertAdjacentHTML("beforeend",'<a href="?lang='+lang+'&p=1&view=practice&skill=storyadd1">'+t("Practise addition","練習加法")+' →</a>');
  practiceCard.querySelector(".home-links").insertAdjacentHTML("beforeend",'<a href="?lang='+lang+'&p=1&view=practice&skill=parts18a">'+t("Practise missing parts","練習找出另一部分")+' →</a>');
  practiceCard.querySelector(".home-links").insertAdjacentHTML("beforeend",'<a href="?lang='+lang+'&p=4&view=practice&skill=per1">'+t("Practise perimeter","練習周界")+' →</a>');
}else{
  const paper=custom?(["paper","key"].includes(view)?view:null):params.get("sheet");
  if(fixedP6V4 && paper)for(const language of ["en","zh"])document.getElementById(language).href=href(grade,language,paper);
  const key=paper==="key";
  const warmUp=custom && ids.join(".")===warmUpP1.join(".");
  const title=level(grade)+" · "+(custom?(warmUp?t("Five-minute warm-up","五分鐘熱身題"):t("Custom quiz","自訂小測")):local(topics[grade]));
  document.title=title+" | MathQuiz";
  const file="papers/p"+grade+"-"+lang+"-";
  const links=custom?'':fixedP6V4?'<div class="downloads"><a href="'+href(grade,lang,"paper")+'">'+t("Print student paper / PDF","列印學生試卷／PDF")+'</a><a href="'+href(grade,lang,"key")+'">'+t("Print worked key / PDF","列印解答／PDF")+'</a></div>':'<div class="downloads"><a download href="'+file+'paper.pdf">'+t("Student paper (PDF)","學生試卷 (PDF)")+'</a><a download href="'+file+'key.pdf">'+t("Worked answers (PDF)","解題步驟 (PDF)")+'</a></div>';
  app.innerHTML=(paper?'':'<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a>')+'<h1>'+title+'</h1>'+(paper?'<h2>'+(key?t("Worked answers","解題步驟"):t("Student paper","學生試卷"))+'</h2>'+(key?'':'<p>'+t("Name","姓名")+' __________________　'+t("Class","班別")+' ______　'+t("Date","日期")+' __________</p>'):links)+'<form>'+quizzes[grade].map((q,i)=>item(q,i,paper,key)).join("")+(paper?'':'<button type="submit">'+t("Mark my quiz","提交及核對答案")+'</button><a id="retry" hidden href="'+(custom?customLink(ids,"",grade):href(grade))+'" >'+t("Try again","重新作答")+'</a><p id="status" tabindex="-1" role="status"></p>')+'</form>';
   if(custom && paper)app.querySelector("h2").insertAdjacentHTML("beforeend",'<span id="paper-code" class="paper-code"></span>');
  if((custom || fixedP6V4) && paper){
    const back=custom?customLink(ids,"build",grade):href(grade);
    const samplePdf=custom && ids.join(".")===exitTicketP1.join(".")
      ? '<a download href="papers/p1-exit-ticket-'+lang+'-'+paper+'.pdf">'+t("Download sample PDF","下載示例 PDF")+'</a>' : '';
    const directPdf=custom?'<button id="download-pdf" type="button">'+t("Download this PDF (beta)","下載本卷 PDF（測試版）")+'</button><span id="pdf-status" role="status"></span>':'';
    app.insertAdjacentHTML("afterbegin",'<div class="print-tools"><a href="'+back+'">← '+(custom?t("Preview","預覽"):t("Quiz","小測"))+'</a> <button id="print">'+t("Print or save as PDF","列印或另存為 PDF")+'</button>'+directPdf+samplePdf+'</div>');
    document.getElementById("print").onclick=()=>window.print();
    if(custom)document.getElementById("download-pdf").onclick=e=>window.mathQuizPdf.download(e.currentTarget);
  }
  if(!paper) app.querySelector("form").onsubmit=e=>{e.preventDefault();mark(new FormData(e.target))};
}


