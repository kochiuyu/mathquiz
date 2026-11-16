const params = new URLSearchParams(location.search);
const grade = [1,2,3,4,5,6].find(n => String(n) === params.get("p"));
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
  if (typeof type === "object" && type.kind === "missingSide") {
    const horizontal=type.missing==="length",top=horizontal?"?":type.length,side=horizontal?type.width:"?";
    const alt=t(`Rectangle with perimeter ${type.perimeter} cm. The ${horizontal?"short":"long"} side is ${type.known} cm; find the other side marked question mark.`,`長方形周界為${type.perimeter}厘米。已知${horizontal?"短":"長"}邊長${type.known}厘米，求問號所示的另一邊。`);
    return '<svg class="figure missing-side" viewBox="0 0 320 180" role="img" aria-label="'+alt+'"><rect x="65" y="38" width="190" height="96" fill="#f2f6f3" stroke="#32755e" stroke-width="3"/><g text-anchor="middle"><text x="160" y="24">'+top+' cm</text><text x="160" y="160">'+top+' cm</text><text x="33" y="90">'+side+' cm</text><text x="286" y="90">'+side+' cm</text></g></svg>';
  }
  if (typeof type === "object" && type.kind === "triangleArea") {
    const x=type.apex,alt=t(`Triangle. The base is ${type.base} cm. A dashed perpendicular from the top vertex to the base is the height, ${type.height} cm.`,`三角形。底邊長${type.base}厘米。由頂點向底邊畫出的虛線垂直高是${type.height}厘米。`);
    return '<svg class="figure triangle-area" viewBox="0 0 300 220" role="img" aria-label="'+alt+'"><path d="M30 170 L'+x+' 40 L270 170 Z" fill="#ecf3ed" stroke="#20392f" stroke-width="3"/><path d="M'+x+' 40 V170" fill="none" stroke="#a5541f" stroke-width="2.5" stroke-dasharray="7 5"/><path d="M'+x+' 157 h13 v13" fill="none" stroke="#20392f" stroke-width="2"/><text x="150" y="202" text-anchor="middle">'+t("base ","底邊 ")+type.base+' cm</text><text x="'+(x+17)+'" y="108">'+t("height ","高 ")+type.height+' cm</text></svg>';
  }
  if (typeof type === "object" && type.kind === "cuboidVolume") {
    const alt=t(`Cuboid. Length ${type.length} cm, width ${type.width} cm and height ${type.height} cm.`,`長方體。長${type.length}厘米、闊${type.width}厘米、高${type.height}厘米。`);
    return '<svg class="figure cuboid-volume" viewBox="0 0 330 235" role="img" aria-label="'+alt+'"><path d="M55 65 L100 30 H270 L225 65 Z" fill="#e8f0ea" stroke="#20392f" stroke-width="2.5"/><path d="M225 65 L270 30 V150 L225 185 Z" fill="#d5e5da" stroke="#20392f" stroke-width="2.5"/><path d="M55 65 H225 V185 H55 Z" fill="#f5faf5" stroke="#20392f" stroke-width="2.5"/><text x="140" y="212" text-anchor="middle">'+t("length ","長 ")+type.length+' cm</text><text x="10" y="132">'+t("height ","高 ")+type.height+' cm</text><text x="54" y="36">'+t("width ","闊 ")+type.width+' cm</text></svg>';
  }
  if (typeof type === "object" && type.kind === "circleParts") {
    const raw={radius:[[0,0],[60,45]],diameter:[[-75,0],[75,0]],chord:[[-45,-60],[45,-60]]},turn=type.rotation/90;
    const rotate=([x,y])=>turn===1?[-y,x]:turn===2?[-x,-y]:turn===3?[y,-x]:[x,y];
    const at=point=>{const [x,y]=rotate(point);return [type.centre[0]+x,type.centre[1]+y];};
    const drawn=type.segments.map(segment=>{
      const [a,b]=raw[segment.kind].map(at),dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy);
      const fraction=segment.kind==="diameter"?.75:segment.kind==="radius"?.62:.5;
      const x=a[0]+dx*fraction-dy/length*17,y=a[1]+dy*fraction+dx/length*17;
      return '<path d="M'+a.join(' ')+' L'+b.join(' ')+'"/><text x="'+x+'" y="'+y+'" fill="#20392f" stroke="none" text-anchor="middle" dominant-baseline="central">'+segment.letter+'</text>';
    }).join("");
    const alt=t("Circle with centre O and three labelled line segments A, B and C. One joins O to the circle, one passes through O, and one joins two points on the circle away from O.","圓心標為O，圖中有A、B、C三條標示的線段。一條由O連至圓上，一條穿過O，另一條在O以外連接圓上的兩點。");
    return '<svg class="figure circle-parts" viewBox="0 0 300 240" role="img" aria-label="'+alt+'"><circle cx="150" cy="120" r="75" fill="#fffefa" stroke="#20392f" stroke-width="2.5"/><g fill="none" stroke="#20392f" stroke-width="3.5" stroke-linecap="round">'+drawn+'</g><circle cx="150" cy="120" r="4" fill="#20392f"/><text x="137" y="106" text-anchor="middle">O</text></svg>';
  }
  if (typeof type === "object" && type.kind === "pictogram") {
    const horizontal=type.orientation==="horizontal",names=type.categories.map(local);
    const symbol=(x,y)=>'<g class="pict-symbol" transform="translate('+x+' '+y+')" fill="none" stroke="#20392f" stroke-width="2"><circle cx="9" cy="6" r="4"/><path d="M2 23v-7q0-5 7-5t7 5v7M2 23h14"/></g>';
    const alt=local(type.title)+". "+local(type.key)+" "+names.map((name,j)=>name+": "+(type.counts[j]?Array(type.counts[j]).fill(t("pupil symbol","學生圖案")).join(", "):t("no pupil symbols","沒有學生圖案"))).join(". ")+".";
    const body=horizontal?type.counts.map((n,j)=>'<text x="12" y="'+(84+j*42)+'">'+names[j]+'</text>'+Array.from({length:n},(_,k)=>symbol(152+k*36,61+j*42)).join("")).join("")
      :type.counts.map((n,j)=>Array.from({length:n},(_,k)=>symbol(75+j*130,199-k*27)).join("")+'<text x="'+(85+j*130)+'" y="239" text-anchor="middle">'+names[j]+'</text>').join("");
    const rules=horizontal?'<path d="M140 55v130M8 98h402M8 140h402M8 182h402"/>':'<path d="M45 226h350M150 58v168M280 58v168"/>';
    return '<svg class="figure pictogram" viewBox="0 0 420 '+(horizontal?190:250)+'" role="img" aria-label="'+alt+'"><text x="12" y="23" class="pict-title">'+local(type.title)+'</text><text x="12" y="46" class="pict-key">'+local(type.key)+'</text><g fill="none" stroke="#9bb9a5">'+rules+'</g>'+body+'</svg>';
  }
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
  if (typeof type === "object" && type.kind === "equalGroups") {
    const width=type.boxes*106+4;
    const boxes=Array.from({length:type.boxes},(_,i)=>'<rect x="'+(4+i*106)+'" y="8" width="98" height="70" rx="7" fill="#fffefa" stroke="#526f61" stroke-width="2"/>').join("");
    const dots=Array.from({length:type.boxes},(_,i)=>Array.from({length:type.each},(_,j)=>'<circle cx="'+(22+i*106+j*16)+'" cy="43" r="6" fill="#375d50"/>').join("")).join("");
    const alt=t(`${type.boxes} boxes, ${type.each} counters in each box.`,`${type.boxes}個盒子，每盒${type.each}粒圓片。`);
    return '<svg class="figure equal-groups" viewBox="0 0 '+width+' 86" role="img" aria-label="'+alt+'">'+boxes+dots+'</svg>';
  }
  if (typeof type === "object" && type.kind === "equalSharing") {
    const alt=t(`${type.total} counters to share and ${type.children} empty trays for the children.`,`有${type.total}粒待分配的圓片和${type.children}個給小朋友的空盤子。`);
    const dots=Array.from({length:type.total},(_,i)=>'<circle cx="'+(28+i%5*45)+'" cy="'+(50+Math.floor(i/5)*26)+'" r="8" fill="#375d50"/>').join("");
    const trays=Array.from({length:type.children},(_,i)=>{
      const x=283+i%3*84,y=39+Math.floor(i/3)*98;
      return '<rect x="'+x+'" y="'+y+'" width="76" height="64" rx="8" fill="#fffefa" stroke="#526f61" stroke-width="2"/><text x="'+(x+38)+'" y="'+(y+84)+'" text-anchor="middle">'+t("Child ","小朋友")+(i+1)+'</text>';
    }).join("");
    return '<svg class="figure equal-sharing" viewBox="0 0 540 240" role="img" aria-label="'+alt+'"><text x="8" y="21">'+t("Counters to share","待分配的圓片")+'</text><text x="283" y="21">'+t("Empty trays","空盤子")+'</text><rect x="8" y="30" width="244" height="181" rx="8" fill="#f2f6f3" stroke="#526f61" stroke-width="2"/>'+dots+trays+'</svg>';
  }
  if (typeof type === "object" && type.kind === "fractionBar") {
    const shaded=i=>(i-type.start+type.parts)%type.parts<type.shaded;
    const cells=Array.from({length:type.parts},(_,i)=>'<rect x="'+(16+i*408/type.parts)+'" y="34" width="'+(408/type.parts)+'" height="68" fill="'+(shaded(i)?'#365f50':'#fffefa')+'" stroke="#20392f" stroke-width="2" data-shaded="'+shaded(i)+'"/>').join("");
    const alt=t(`One whole bar in ${type.parts} equal parts: `,`一條完整長條分為${type.parts}個等分：`)+Array.from({length:type.parts},(_,i)=>shaded(i)?t("shaded","塗色"):t("not shaded","沒有塗色")).join(t(", ","、"))+".";
    return '<svg class="figure fraction-bar" viewBox="0 0 440 116" role="img" aria-label="'+alt+'"><text x="16" y="23">'+t("One whole","一個整體")+'</text>'+cells+'</svg>';
  }
  if (typeof type === "object" && type.kind === "measuringCup") {
    const bottom=230,height=200,waterY=bottom-height*type.amount/type.max;
    const ticks=Array.from({length:type.max/type.step+1},(_,i)=>{
      const value=i*type.step,y=bottom-height*value/type.max,major=value%type.major===0;
      return '<path d="M270 '+y+'h'+(major?19:11)+'" stroke="#20392f" stroke-width="2"/>'+(major?'<text x="297" y="'+(y+5)+'">'+value+'</text>':'');
    }).join("");
    const index=type.amount/type.step,alt=t(`Measuring cup scale in mL, labelled every ${type.major} from 0 to ${type.max}. The water line meets tick number ${index} above zero.`,`量杯刻度以 mL 表示，每${type.major} mL標示數字，由0至${type.max}。水面對着由零起第${index}個刻度。`);
    return '<svg class="figure measuring-cup" viewBox="0 0 420 250" role="img" aria-label="'+alt+'"><text x="296" y="20">mL</text><path d="M140 28v202h130V28" fill="none" stroke="#20392f" stroke-width="3"/><rect x="143" y="'+waterY+'" width="124" height="'+(bottom-waterY)+'" fill="#b6ced3"/><path d="M143 '+waterY+'h145" stroke="#20392f" stroke-width="3"/>'+ticks+'</svg>';
  }
  if (typeof type === "object" && type.kind === "barChart") {
    const names=type.categories.map(local),horizontal=type.orientation==="horizontal";
    const alt=t(`${horizontal?"Horizontal":"Vertical"} bar chart, ${local(type.title)}. Axis counts pupils by ${type.scale}. `,`${horizontal?"橫向":"直向"}棒形圖，${local(type.title)}。人數數軸每格代表${type.scale}人。`)
      +names.map((name,j)=>name+t(" ends at step ","到第")+type.steps[j]+t(" from zero","格")).join(t("; ","；"))+".";
    const grid=Array.from({length:7},(_,n)=>horizontal
      ?'<path d="M'+(140+n*40)+' 48v158"/><text x="'+(140+n*40)+'" y="235" text-anchor="middle">'+(n*type.scale)+'</text>'
      :'<path d="M58 '+(210-n*26)+'h350"/><text x="45" y="'+(215-n*26)+'" text-anchor="end">'+(n*type.scale)+'</text>').join("");
    const bars=type.steps.map((steps,j)=>horizontal
      ?'<text x="8" y="'+(86+j*48)+'">'+names[j]+'</text><rect class="bar-mark" x="140" y="'+(65+j*48)+'" width="'+(steps*40)+'" height="30"/>'
      :'<rect class="bar-mark" x="'+(100+j*104)+'" y="'+(210-steps*26)+'" width="50" height="'+(steps*26)+'"/><text x="'+(125+j*104)+'" y="239" text-anchor="middle">'+names[j]+'</text>').join("");
    return '<svg class="figure bar-chart" viewBox="0 0 420 255" role="img" aria-label="'+alt+'"><text x="8" y="22" class="chart-title">'+local(type.title)+'</text><g class="chart-grid">'+grid+'</g>'+bars+'<text x="350" y="251" text-anchor="end">'+t("pupils","名學生")+'</text></svg>';
  }
  if (typeof type === "object" && type.kind === "tensOnes") {
    const rods=Array.from({length:type.tens},(_,i)=>'<g transform="translate('+(18+(i%5)*77)+' '+(48+Math.floor(i/5)*56)+')"><rect width="66" height="19" rx="3" fill="#e1ece6" stroke="#20392f" stroke-width="2"/>'+Array.from({length:9},(_,j)=>'<path d="M'+((j+1)*6)+' 1v17" stroke="#526f61"/>').join("")+'</g>').join("");
    const dots=Array.from({length:type.ones},(_,i)=>'<circle cx="'+(32+i%5*45)+'" cy="'+(202+Math.floor(i/5)*32)+'" r="9" fill="#375d50"/>').join("");
    const alt=t(`${type.tens} bundles of ten counters and ${type.ones} loose counters.`,`${type.tens}捆每捆十粒的圓片和${type.ones}粒單獨的圓片。`);
    return '<svg class="figure tens-ones" viewBox="0 0 410 250" role="img" aria-label="'+alt+'"><text x="16" y="27">'+t("Bundles of ten","十粒一捆")+'</text>'+rods+'<text x="16" y="182">'+t("Loose counters","單粒圓片")+'</text>'+dots+'</svg>';
  }
  if (typeof type === "object" && type.kind === "countGroups") {
    const boxes=Array.from({length:type.groups},(_,i)=>{
      const x=6+i%3*138,y=9+Math.floor(i/3)*84;
      const dots=Array.from({length:type.size},(_,j)=>'<circle cx="'+(x+20+j%5*20)+'" cy="'+(y+22+Math.floor(j/5)*22)+'" r="6" fill="#375d50"/>').join("");
      return '<rect x="'+x+'" y="'+y+'" width="128" height="72" rx="7" fill="#fffefa" stroke="#526f61" stroke-width="2"/>'+dots;
    }).join("");
    const alt=t(`${type.groups} separate boxes, each showing ${type.size} counters.`,`${type.groups}個盒子，每盒有${type.size}粒圓片。`);
    return '<svg class="figure count-groups" viewBox="0 0 420 '+(Math.ceil(type.groups/3)*84+5)+'" role="img" aria-label="'+alt+'">'+boxes+'</svg>';
  }
  if (typeof type === "object" && type.kind === "estimateCounters") {
    const reference=Array.from({length:10},(_,i)=>'<circle cx="'+(30+i%5*25)+'" cy="'+(48+Math.floor(i/5)*25)+'" r="7" fill="#375d50"/>').join("");
    const target=Array.from({length:type.count},(_,i)=>'<circle cx="'+(185+i%9*24+(Math.floor(i/9)%2)*7)+'" cy="'+(32+Math.floor(i/9)*23)+'" r="6" fill="#375d50"/>').join("");
    return '<svg class="figure estimate-counters" viewBox="0 0 420 270" role="img" aria-label="'+t("Reference box: 10 counters. Large box: an unlabelled collection to estimate.","參考小盒：10粒圓片。大盒：一組未標示數量的圓片，請估計數目。")+'"><text x="14" y="19">'+t("10 counters","10粒圓片")+'</text><rect x="10" y="25" width="148" height="76" rx="7" fill="none" stroke="#526f61" stroke-width="2"/>'+reference+'<text x="176" y="19">'+t("About how many?","大約有多少？")+'</text><rect x="172" y="25" width="238" height="239" rx="7" fill="none" stroke="#526f61" stroke-width="2"/>'+target+'</svg>';
  }
  if (typeof type === "object" && type.kind === "placeValue") {
    const counts=[type.hundreds,type.tens,type.ones];
    const labels=ch?["百位","十位","個位"]:["Hundreds","Tens","Ones"];
    const alt=ch?`${counts[0]}個百、${counts[1]}個十、${counts[2]}個一。`:`${counts[0]} hundred plates, ${counts[1]} ten rods, ${counts[2]} unit squares.`;
    const shapes=counts.map((count,j)=>{
      const x=10+j*148;
      if(!count)return '<text x="'+(x+69)+'" y="85" text-anchor="middle">0</text>';
      return Array.from({length:count},(_,k)=>{
        const col=k%3,row=Math.floor(k/3);
        if(j===0)return '<rect x="'+(x+32+col*27)+'" y="'+(39+row*27)+'" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"/><path d="M'+(x+39+col*27)+' '+(39+row*27)+'v22m7-22v22m-14-15h22m-22 7h22" fill="none" stroke="currentColor" stroke-width=".7"/>';
        if(j===1)return '<rect x="'+(x+38+col*23)+'" y="'+(39+row*27)+'" width="10" height="22" fill="none" stroke="currentColor" stroke-width="2"/>';
        return '<rect x="'+(x+49+col*15)+'" y="'+(46+row*18)+'" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2"/>';
      }).join("");
    }).join("");
    return '<svg class="figure place-value" viewBox="0 0 450 157" role="img" aria-label="'+alt+'"><g fill="none" stroke="#769184">'+[0,1,2].map(j=>'<rect x="'+(10+j*148)+'" y="5" width="138" height="119" rx="7"/>').join("")+'</g><g text-anchor="middle">'+labels.map((label,j)=>'<text x="'+(79+j*148)+'" y="27">'+label+'</text>').join("")+'</g><g stroke="#20392f">'+shapes+'</g><g text-anchor="middle">'+[t("plate = 100","百板 = 100"),t("rod = 10","十棒 = 10"),t("square = 1","方格 = 1")].map((label,j)=>'<text x="'+(79+j*148)+'" y="147">'+label+'</text>').join("")+'</g></svg>';
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
function shapeOptions(q,i,paper,key=false){
  return '<div class="shape-options">'+q.shapes.map((shape,j)=>{
    const letter=q.choices[j];
    const outline=shape.kind==="triangle"?'<path d="M-31 22 L27 25 L2 -30 Z"/>':shape.kind==="quadrilateral"?'<path d="M-27 -22 L25 -25 L29 23 L-24 26 Z"/>':'<circle r="29"/>';
    const description=shape.kind==="triangle"?t("closed outline with three straight sides","由三條直邊組成的封閉輪廓"):shape.kind==="quadrilateral"?t("closed outline with four straight sides","由四條直邊組成的封閉輪廓"):t("closed curved outline","彎曲的封閉輪廓");
    const drawing='<svg viewBox="0 0 100 100" role="img" aria-label="'+t("Shape ","圖形 ")+letter+': '+description+'"><g transform="translate(50 50) rotate('+shape.rotation+')" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round">'+outline+'</g></svg>';
    const label='<span>'+letter+'</span>';
    return paper?'<div class="shape-option">'+(key?'':'<span aria-hidden="true">□</span>')+label+drawing+'</div>':'<label class="shape-option"><input type="radio" name="q'+i+'" value="'+letter+'">'+label+drawing+'</label>';
  }).join("")+'</div>';
}
function controls(q,i,paper,key=false) {
  if(q.shapes)return shapeOptions(q,i,paper);
  if(q.choices) return q.choices.map(v=> paper ? '<span class="option">□ '+(q.choiceLabels?local(q.choiceLabels[v]):v)+'</span>' : '<label class="option"><input type="'+(q.multi?'checkbox':'radio')+'" name="q'+i+'" value="'+v+'"> '+(q.choiceLabels?local(q.choiceLabels[v]):v)+'</label>').join("");
  if(q.columnForm){
    const {a,b,operation}=q.columnForm,sign=operation==="add"?"+":"−",name=operation==="add"?t("Column addition","加法直式"):t("Column subtraction","減法直式");
    const cells=n=>'<td>'+Math.floor(n/10)+'</td><td>'+n%10+'</td>';
    const answer=paper?'<span class="column-blank" aria-label="'+t("answer space","作答位置")+'"></span>':null;
    return '<table class="column-form"><caption class="sr-only">'+name+'</caption><thead><tr><th scope="col"><span class="sr-only">'+t("Operation","運算符號")+'</span></th><th scope="col">'+t("Tens","十位")+'</th><th scope="col">'+t("Ones","個位")+'</th></tr></thead><tbody><tr><td></td>'+cells(a)+'</tr><tr><td>'+sign+'</td>'+cells(b)+'</tr><tr class="column-result"><td>=</td>'+[0,1].map(j=>'<td>'+(key?'<b>'+q.answer[j]+'</b>':answer||'<input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(j?"Ones answer":"Tens answer",j?"個位答案":"十位答案")+'" name="q'+i+'f'+j+'">')+'</td>').join("")+'</tr></tbody></table>';
  }
  if(q.purchaseEquation)return paper?'<div class="equation-space">________________________</div>':'<label class="field">'+t("Equation","方程")+' <input class="equation-input" type="text" autocomplete="off" aria-label="'+t("Equation for the purchase story","購物情境的方程")+'" name="q'+i+'f0"></label><small class="response-help">'+t("Use x, + or −, and =. Write the relationship before solving.","用 x、+ 或 − 及 = 表示數量關係，先不用求解。")+'</small>';
  if(q.equation)return paper?'<div class="equation-space">________________________</div>':'<label class="field"><input class="equation-input" type="text" autocomplete="off" aria-label="'+t("Addition sentence","加法算式")+'" name="q'+i+'f0"></label><small class="response-help">'+t("Write number + number = total.","請輸入「數字 + 數字 = 總數」。")+'</small>';
  if(q.otherWay)return paper?'<div class="drawing-space">'+t("Draw two labelled groups, or write an addition sentence.","畫出兩組圓片並標明數量，或寫出一道加法算式。")+'</div>':'<div class="pair-entry"><label>'+t("First group","第一組")+' <input type="text" inputmode="numeric" autocomplete="off" name="q'+i+'f0"></label><span> + </span><label>'+t("Second group","第二組")+' <input type="text" inputmode="numeric" autocomplete="off" name="q'+i+'f1"></label><span> = '+q.otherWay.total+'</span></div><small class="response-help">'+t("Enter one number from 1 to 9 in each box.","每格輸入一個 1 至 9 的數字。")+'</small>';
  if(q.equalGroups)return '<div class="group-equation">'+[0,1,2].map(j=>(j?'<span aria-hidden="true">'+(j===1?'×':'=')+'</span>':'')+(paper?'<span class="group-blank">_______</span>':'<label><span class="sr-only">'+t(["First factor","Second factor","Total"][j],["第一個乘數","第二個乘數","總數"][j])+'</span><input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["First factor","Second factor","Total"][j],["第一個乘數","第二個乘數","總數"][j])+'" name="q'+i+'f'+j+'"></label>')).join("")+'</div>';
  if(q.equalSharing)return '<div class="sharing-response">'+[0,1].map(j=>'<label>'+t(["Each child gets","Left over"][j],["每人分得","剩下"][j])+' '+(paper?'<span class="sharing-blank">_______</span>':'<input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["Each child gets","Left over"][j],["每人分得","剩下"][j])+'" name="q'+i+'f'+j+'">')+' '+t("counters","粒圓片")+'</label>').join("")+'</div>'+(paper?'':'<small class="response-help">'+t("Enter a whole-number numeral in each box, including 0 when none are left over.","兩格都請輸入整數數字；沒有剩餘也要填0。")+'</small>');
  if(q.fractionBar)return '<div class="fraction-response"><div class="fraction-stack">'+[0,1].map(j=>(j?'<span class="fraction-rule" aria-hidden="true"></span>':'')+(paper?'<span class="fraction-blank">_______</span>':'<label><span class="sr-only">'+t(["Shaded parts (numerator)","Equal parts shown (denominator)"][j],["塗色部分（分子）","圖中所有等分（分母）"][j])+'</span><input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["Shaded parts (numerator)","Equal parts shown (denominator)"][j],["塗色部分（分子）","圖中所有等分（分母）"][j])+'" name="q'+i+'f'+j+'"></label>')).join("")+'</div><span>'+t("Top: shaded parts; bottom: equal parts shown.","上方：塗色部分；下方：圖中所有等分。")+'</span></div>';
  if(q.measuringCup)return '<label class="field measuring-response"><span class="sr-only">'+t("Amount of water in millilitres","水量（毫升）")+'</span>'+(paper?'<span class="blank"></span>':'<input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Amount of water in millilitres","水量（毫升）")+'" name="q'+i+'f0">')+' mL</label>';
  if(q.barChart)return '<label class="field bar-response"><span class="sr-only">'+t("Number of pupils","學生人數")+'</span>'+(paper?'<span class="blank"></span>':'<input type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Number of pupils","學生人數")+'" name="q'+i+'f0">')+' '+t("pupils","名學生")+'</label>';
  if(q.inlineAnswer)return "";
  return q.fields.map((f,j)=>'<label class="field">'+(paper?'<span class="blank"></span>':'<input type="text" '+(strictP1 || q.placeValue || q.pictogram || q.speedTime?'inputmode="numeric" ':'')+'autocomplete="off" aria-label="'+local(q.prompt)+' ('+local(f)+')" name="q'+i+'f'+j+'">')+' '+local(f)+'</label>').join("")+(strictP1 && !paper?'<small class="response-help">'+t("Enter a whole number using digits only.","請只用數字輸入整數。")+'</small>':q.placeValue && !paper?'<small class="response-help">'+t("Write a three-digit numeral.","請寫出三位數字。")+'</small>':q.pictogram && !paper?'<small class="response-help">'+t("Count one pupil for each picture.","每個圖案代表一名學生。")+'</small>':q.speedTime && !paper?'<small class="response-help">'+t("Enter the speed as a whole-number numeral; km/h is already shown.","只輸入速率的整數數字；公里／小時已顯示在旁邊。")+'</small>':"");
}
function item(q,i,paper,key) {
  const inline=q.inlineAnswer?(key?'<b class="inline-solution">'+q.answer[0]+'</b>':paper?'<span class="inline-blank" aria-label="'+t("answer space","作答位置")+'"></span>':'<input class="inline-answer" type="text" autocomplete="off" inputmode="numeric" aria-label="'+t("Answer for question ","第 ")+(i+1)+t(""," 題答案")+'" name="q'+i+'f0">'):null;
  const prompt=inline?local(q.prompt).replace("___",inline):local(q.prompt);
  const solution=key ? (q.shapes?shapeOptions(q,i,true,true):q.columnForm?controls(q,i,true,true):'')+'<p><b>'+(q.oddEven100?local(q.choiceLabels[q.answer[0]]):q.numberOrder?q.answer.join(" → "):q.groupedAddition||q.columnForm?q.fields.map((f,j)=>local(f)+": "+q.answer[j]).join("; "):q.measuringCup?q.answer[0]+" mL":q.barChart?q.answer[0]+t(" pupils"," 名學生"):q.fractionBar||q.fractionAddition?q.answer.join("/"):q.simpleEquation?"x = "+q.answer[0]:q.equalSharing?t("Each gets ","每人分得")+q.answer[0]+t("; left over ","；剩下")+q.answer[1]:q.equalGroups?q.answer[0]+" × "+q.answer[1]+" = "+q.answer[2]:q.otherWay?q.answer.join(" + ")+" = "+q.otherWay.total:q.answer.join(q.multi?", ":" / "))+'</b> · '+local(q.why)+'</p>' : controls(q,i,paper);
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
    if(q.numberOrder || q.groupedAddition || q.columnForm)return Number(values.every((v,j)=>pictogramAnswer(v,q.answer[j])));
    if(q.equation){
      const m=values[0].normalize("NFKC").replace(/\s/g,"").match(/^([1-9])\+([1-9])=(\d{1,2})$/);
      return Number(!!m && +m[3]===q.equation.total && ((+m[1]===q.equation.a && +m[2]===q.equation.b) || (+m[1]===q.equation.b && +m[2]===q.equation.a)));
    }
    if(q.otherWay){
      const pair=values.map(v=>v.normalize("NFKC"));
      return Number(pair.every(v=>/^[1-9]$/.test(v)) && +pair[0]+ +pair[1]===q.otherWay.total && [Number(pair[0]),Number(pair[1])].sort((a,b)=>a-b).join(",")!==[...q.otherWay.shown].sort((a,b)=>a-b).join(","));
    }
    if(q.equalGroups)return Number(equalGroupsAnswer(values,q.equalGroups));
    if(q.equalSharing)return Number(equalSharingAnswer(values,q.equalSharing));
    if(q.fractionBar)return Number(fractionBarAnswer(values,q.fractionBar));
    if(q.fractionAddition)return Number(fractionAdditionAnswer(values,q.fractionAddition));
    if(q.purchaseEquation)return Number(purchaseEquationAnswer(values[0],q.purchaseEquation));
    if(q.simpleEquation)return Number(simpleEquationAnswer(values[0],q.answer[0]));
    if(q.triangleArea || q.cuboidVolume || q.missingSide || q.factorPair || q.speedTime)return Number(measureAnswer(values[0],q.answer[0]));
    if(q.measuringCup)return Number(measuringCupAnswer(values[0],q.answer[0]));
    if(q.barChart)return Number(measuringCupAnswer(values[0],q.answer[0]));
    if(q.placeValue)return Number(threeDigitAnswer(values[0],q.answer[0]));
    if(q.numberTo100)return Number(pictogramAnswer(values[0],q.answer[0]));
    if(q.pictogram)return Number(pictogramAnswer(values[0],q.answer[0]));
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
function renderNumber100Practice(skill){
  const family=families.find(f=>f.id===skill),sets={tensones1a:[0,3,7],countgroups1a:[0,5,10],sequence100a:[0,6,3],numberwords100a:[0,5,8],carryadd1a:[0,5,11],noborrow1a:[0,6,11],threeadd1a:[0,4,11],storyadd1a:[0,5,10],storysub1a:[0,5,10]},variants=sets[skill];
  const titles={tensones1a:["Practise tens and ones","練習十位和個位"],countgroups1a:["Practise counting in groups","練習分組點算"],sequence100a:["Practise counting forwards and backwards","練習順數和倒數"],numberwords100a:["Practise writing numerals","練習看數詞寫數字"],carryadd1a:["Practise addition with carrying","練習進位加法"],noborrow1a:["Practise subtraction without borrowing","練習不退位減法"],threeadd1a:["Practise adding three numbers","練習三個數相加"],storyadd1a:["Practise addition stories","練習加法文字題"],storysub1a:["Practise subtraction stories","練習減法文字題"]};
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=local(titles[skill])+" · "+t("Practice","練習")+" | MathQuiz";
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]),inline=q.inlineAnswer?'<input id="practice-answer" class="inline-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Next number","下一個數")+'">':null;
    const prompt=inline?local(q.prompt).replace("___",inline):local(q.prompt);
    const field=inline?"":'<label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Answer","答案")+'"> '+local(q.fields[0])+'</label>';
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+local(titles[skill])+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+prompt+'</legend>'+figure(q.figure)+field+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),input=document.getElementById("practice-answer"),feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();
      if(!input.value.trim()){feedback.textContent=t("Enter a number.","請輸入數字。");input.focus();return;}
      attempts++;
      const correct=pictogramAnswer(input.value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The answer is ","答案是 ")+q.answer[0]+". ")+local(q.why);
        input.disabled=true;form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=skill==="tensones1a"?t("Count the bundles of ten first. Then count the loose counters.","先數十粒一捆的圓片，再數單粒圓片。")
          :skill==="countgroups1a"?t("Count on by the number of counters in each box, one box at a time.","按每盒的圓片數目順數，每次數一盒。")
          :skill==="numberwords100a"?t("Find the tens word first, then the ones word.","先找出數詞中的十位，再找個位。")
          :skill==="carryadd1a"?t("Add the ones first. Ten ones make one extra ten.","先加個位；10個一換成1個十。")
          :skill==="noborrow1a"?t("Subtract the ones first, then the tens. No borrowing is needed.","先減個位，再減十位；這題不用退位。")
          :skill==="threeadd1a"?t("Add the first two numbers. Then add the third number to that sum.","先把前兩個數相加，再把第三個數加到所得的和。")
          :skill==="storyadd1a"?t("The two groups come together. Add their numbers.","把兩組合起來，將兩個數相加。")
          :skill==="storysub1a"?t("Some are taken away or leave. Subtract that number from the starting number.","拿走或離開了一部分，從原來的數目減去這個數。")
          :q.numberSequence.step===1?t("The numbers go up by one each time.","每次順數一個數。")
          :t("The numbers go down by one each time.","每次倒數一個數。");
        input.focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderChoice100Practice(skill){
  const family=families.find(f=>f.id===skill),variants=skill==="oddeven100a"?[0,1,8]:[0,5,9];
  const title=skill==="oddeven100a"?["Practise odd and even numbers","練習單數和雙數"]:["Practise estimating counters","練習估計圓片數目"];
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=local(title)+" · "+t("Practice","練習")+" | MathQuiz";
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+local(title)+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();const choice=new FormData(form).get("q0");
      if(!choice){feedback.textContent=t("Choose one answer.","請選擇一個答案。");form.querySelector('input[type="radio"]').focus();return;}
      attempts++;const correct=choice===q.answer[0];if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The answer is ","答案是 ")+(q.choiceLabels?local(q.choiceLabels[q.answer[0]]):q.answer[0])+". ")+local(q.why);
        form.querySelectorAll('input[type="radio"]').forEach(el=>el.disabled=true);form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else feedback.textContent=skill==="oddeven100a"?t("Look at the units digit, not the tens digit.","只看個位數字，不看十位數字。")
        :t("Use the box of 10 as a reference. Think in tens, without counting each counter.","以10粒一盒作參考，想想大約有幾個十，不用逐粒點算。");
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input[type="radio"]').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderOrder100Practice(){
  const skill="ordernums100a",family=families.find(f=>f.id===skill),variants=[0,1,3];
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=t("Ordering numbers · Practice | MathQuiz","排列數字 · 練習 | MathQuiz");
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise ordering three numbers","練習排列三個數")+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),feedback=document.getElementById("practice-feedback"),inputs=[...form.querySelectorAll('input')];
    form.onsubmit=e=>{
      e.preventDefault();const values=inputs.map(el=>el.value.trim());
      if(values.some(v=>!v)){feedback.textContent=t("Fill all three boxes.","請填好三格。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;const correct=values.every((v,j)=>pictogramAnswer(v,q.answer[j]));if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The order is ","正確次序是 ")+q.answer.join(" → ")+". ")+local(q.why);
        inputs.forEach(el=>el.disabled=true);form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else feedback.textContent=t("Check the tens first; when tens match, compare the ones.","先比較十位；十位相同時，再比較個位。");
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderGroupedAdditionPractice(){
  const skill="groupadd1a",family=families.find(f=>f.id===skill),variants=[0,5,11];
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=t("Grouping addends · Practice | MathQuiz","加數分組 · 練習 | MathQuiz");
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise grouping three addends","練習組合三個加數")+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),feedback=document.getElementById("practice-feedback"),inputs=[...form.querySelectorAll('input')];
    form.onsubmit=e=>{
      e.preventDefault();const values=inputs.map(el=>el.value.trim());
      if(values.some(v=>!v)){feedback.textContent=t("Fill all three boxes.","請填好三格。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;const correct=values.every((v,j)=>pictogramAnswer(v,q.answer[j]));if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The subtotals and total are ","兩個小計和總和是 ")+q.answer.join(", ")+". ")+local(q.why);
        inputs.forEach(el=>el.disabled=true);form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{feedback.textContent=t("Add the first two numbers, then the last two. Each subtotal plus the remaining number gives the same total.","先算前兩個數，再算後兩個數；每個小計加上剩下的數，總和都相同。");inputs[0].focus();}
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderColumnPractice(skill){
  const family=families.find(f=>f.id===skill),variants=[0,5,11],addition=skill==="columnadd1a";
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=t(addition?"Addition columns · Practice | MathQuiz":"Subtraction columns · Practice | MathQuiz",addition?"加法直式 · 練習 | MathQuiz":"減法直式 · 練習 | MathQuiz");
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t(addition?"Practise addition columns":"Practise subtraction columns",addition?"練習加法直式":"練習減法直式")+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),feedback=document.getElementById("practice-feedback"),inputs=[...form.querySelectorAll('input')];
    form.onsubmit=e=>{
      e.preventDefault();const values=inputs.map(el=>el.value.trim());
      if(values.some(v=>!v)){feedback.textContent=t("Fill both columns.","請填好兩個數位。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;const correct=values.every((v,j)=>pictogramAnswer(v,q.answer[j]));if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.columnForm.result+". ")+local(q.why);
        inputs.forEach(el=>el.disabled=true);form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{feedback.textContent=addition?t("Add the ones first. Carry one ten if the ones sum reaches ten, then add the tens.","先加個位；個位的和達十便進1個十，再加十位。") : t("Subtract the ones first, then the tens. Each digit stays in its own column.","先減個位，再減十位；每個數字都寫在相應的數位。");inputs[0].focus();}
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderCompare100Practice(){
  const family=families.find(f=>f.id==="compare100a"),variants=[0,1,5];
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill=compare100a";
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=t("Comparing numbers · Practice | MathQuiz","比較數字 · 練習 | MathQuiz");
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise comparing numbers to 100","練習比較100以內的數")+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();
      const choice=new FormData(form).get("q0");
      if(!choice){feedback.textContent=t("Choose one number.","請選擇一個數字。");form.querySelector('input[type="radio"]').focus();return;}
      attempts++;
      const correct=choice===q.answer[0];
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The larger number is ","較大的數是 ")+q.answer[0]+". ")+local(q.why);
        form.querySelectorAll('input[type="radio"]').forEach(el=>el.disabled=true);
        form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else feedback.textContent=Math.floor(q.numberComparison.a/10)===Math.floor(q.numberComparison.b/10)
        ?t("The tens are the same. Compare the ones.","十位相同，請比較個位。")
        :t("Compare the tens first. More tens means a larger number.","先比較十位；十位較大的數較大。");
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input[type="radio"]').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderTrianglePractice(){
  const family=families.find(f=>f.id==="triangle1");
  const pool=Array.from({length:family.count},(_,i)=>i).filter(i=>i!==1);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[1,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill=triangle1";
  document.title=t("Triangles · Practice | MathQuiz","三角形 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise recognising triangles","練習辨認三角形")+'</h1><p>'+t("Look at each shape, then choose one. Try three questions at your own pace.","觀察每個圖形，選出答案。按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+shapeOptions(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const choice=new FormData(e.currentTarget).get("q0");
      const feedback=document.getElementById("practice-feedback");
      if(!choice){feedback.textContent=t("Choose one shape.","請選擇一個圖形。");e.currentTarget.querySelector('input[type="radio"]').focus();return;}
      attempts++;
      const correct=choice===q.answer[0];
      if(attempts===1 && correct)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=correct
          ?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。")+local(q.why)
          :t("The answer is ","答案是 ")+q.answer[0]+". "+local(q.why);
        e.currentTarget.querySelectorAll('input[type="radio"]').forEach(el=>el.disabled=true);
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const shape=q.shapes[q.choices.indexOf(choice)];
        feedback.textContent=shape.kind==="quadrilateral"
          ?t("That shape has four straight sides. Look for a closed shape with three straight sides, even if it is turned.","這個圖形有四條直邊。找出由三條直邊組成的封閉圖形，即使它轉了方向也一樣。")
          :t("That outline is curved. Look for a closed shape with three straight sides, even if it is turned.","這個輪廓是彎曲的。找出由三條直邊組成的封閉圖形，即使它轉了方向也一樣。");
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();app.querySelector('input[type="radio"]').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><p>'+t("You can try another set of triangle questions.","你可以再做一組三角形題。")+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderEqualGroupsPractice(){
  const family=families.find(f=>f.id==="groups2a"),pool=Array.from({length:family.count-1},(_,i)=>i+1);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[0,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=2&view=practice&skill=groups2a";
  document.title=t("Equal groups · Practice | MathQuiz","等量分組 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise equal groups","練習等量分組")+'</h1><p>'+t("Complete the multiplication sentence. Try three questions at your own pace.","完成乘法算式，按自己的步伐做三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<div class="group-equation">'+[0,1,2].map(j=>(j?'<span aria-hidden="true">'+(j===1?'×':'=')+'</span>':'')+'<label><span class="sr-only">'+t(["First factor","Second factor","Total"][j],["第一個乘數","第二個乘數","總數"][j])+'</span><input id="practice-answer-'+j+'" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["First factor","Second factor","Total"][j],["第一個乘數","第二個乘數","總數"][j])+'"></label>').join("")+'</div></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const inputs=[0,1,2].map(j=>document.getElementById("practice-answer-"+j));
      const values=inputs.map(input=>input.value.trim()),feedback=document.getElementById("practice-feedback");
      if(values.some(v=>!v)){feedback.textContent=t("Complete all three boxes.","請填妥三個空格。 ");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;
      const correct=equalGroupsAnswer(values,q.equalGroups);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+" × "+q.answer[1]+" = "+q.answer[2]+". ")+local(q.why);
        inputs.forEach(input=>input.disabled=true);e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=t("Count the equal boxes, then the counters in one box. Add that number once for each box.","先數盒子，再數每盒的圓片。每個盒子都加上相同的數量。");
        inputs[0].focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer-0").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderEqualSharingPractice(){
  const family=families.find(f=>f.id==="share2a"),variants=[0,1,10];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=2&view=practice&skill=share2a";
  document.title=t("Equal sharing · Practice | MathQuiz","平均分配 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise equal sharing","練習平均分配")+'</h1><p>'+t("Share the counters equally. Try three questions at your own pace.","平均分配圓片，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<div class="sharing-response">'+[0,1].map(j=>'<label>'+t(["Each child gets","Left over"][j],["每人分得","剩下"][j])+' <input id="practice-answer-'+j+'" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["Each child gets","Left over"][j],["每人分得","剩下"][j])+'"> '+t("counters","粒圓片")+'</label>').join("")+'</div></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const inputs=[0,1].map(j=>document.getElementById("practice-answer-"+j));
      const values=inputs.map(input=>input.value.trim()),feedback=document.getElementById("practice-feedback");
      if(values.some(v=>!v)){feedback.textContent=t("Complete both boxes, including 0 when none are left over.","請填妥兩格；沒有剩餘也要填0。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;
      const correct=equalSharingAnswer(values,q.equalSharing);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","每人分得 ")+q.answer[0]+t(" each and "," 粒，剩下 ")+q.answer[1]+t(" left over. "," 粒。"))+local(q.why);
        inputs.forEach(input=>input.disabled=true);e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=t("Give one counter to each child in turn. Stop when there are not enough to give everyone another counter. Count one tray and the counters left.","輪流給每人一粒圓片；不足以再每人分一粒時就停下來。數一數每盤有多少粒，以及剩下多少粒。");
        inputs[0].focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer-0").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderFractionPractice(){
  const family=families.find(f=>f.id==="frac3a"),variants=[0,1,3];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=3&view=practice&skill=frac3a";
  document.title=t("Shaded fractions · Practice | MathQuiz","塗色分數 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise shaded fractions","練習塗色分數")+'</h1><p>'+t("Count the equal parts in one whole bar. Try three questions at your own pace.","數一數完整長條中的等分，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<div class="fraction-response"><div class="fraction-stack">'+[0,1].map(j=>(j?'<span class="fraction-rule" aria-hidden="true"></span>':'')+'<label><span class="sr-only">'+t(["Shaded parts (numerator)","Equal parts shown (denominator)"][j],["塗色部分（分子）","圖中所有等分（分母）"][j])+'</span><input id="practice-answer-'+j+'" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(["Shaded parts (numerator)","Equal parts shown (denominator)"][j],["塗色部分（分子）","圖中所有等分（分母）"][j])+'"></label>').join("")+'</div><span>'+t("Top: shaded parts; bottom: equal parts shown.","上方：塗色部分；下方：圖中所有等分。")+'</span></div></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const inputs=[0,1].map(j=>document.getElementById("practice-answer-"+j));
      const values=inputs.map(input=>input.value.trim()),feedback=document.getElementById("practice-feedback");
      if(values.some(v=>!v)){feedback.textContent=t("Complete both fraction boxes, including 0 when none are shaded.","請填妥分數的兩格；沒有塗色也要填0。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;
      const correct=fractionBarAnswer(values,q.fractionBar);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The pictured counts give ","圖中的數目是 ")+q.answer.join("/")+". ")+local(q.why);
        inputs.forEach(input=>input.disabled=true);e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const pair=values.map(v=>String(v).normalize("NFKC"));
        const equivalent=pair.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)) && Number(pair[1])>0 && Number(pair[0])*q.fractionBar.parts===Number(pair[1])*q.fractionBar.shaded;
        feedback.textContent=equivalent?t("That fraction has the same value, but this question asks for the counts in the picture. Count the shaded parts for the top and all equal parts for the bottom.","這個分數的值相同，但這題要記錄圖中的數目。上方填塗色的等分數目，下方填所有等分的總數。")
          :t("Count all the equal parts for the number below the line. Then count only the shaded parts for the number above it.","先數所有等分，把總數寫在分數線下方；再數塗色的等分，把數目寫在上方。");
        inputs[0].focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer-0").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderMeasuringCupPractice(){
  const family=families.find(f=>f.id==="cup3a"),variants=[3,1,8];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=3&view=practice&skill=cup3a";
  document.title=t("Measuring cups · Practice | MathQuiz","量杯刻度 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise reading a measuring cup","練習讀取量杯刻度")+'</h1><p>'+t("Read the water line at the scale. Try three questions at your own pace.","看水面對着哪一個刻度，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field measuring-response"><span class="sr-only">'+t("Amount of water in millilitres","水量（毫升）")+'</span><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Amount of water in millilitres","水量（毫升）")+'"> mL</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Write the water amount in the blank.","請在空格寫出水量。");input.focus();return;}
      attempts++;
      const correct=measuringCupAnswer(value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+" mL. ")+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=!/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC"))?t("Write the whole-number digits only; mL is already printed.","只寫整數數字；mL 已印在旁邊。")
          :t("Start at a labelled mark. Count each equally spaced tick up to the water line. Check that you read the line at its height.","從有數字的刻度開始，逐格數到水面。留意要看與水面同一高度的刻度。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderBarChartPractice(skill="bar3a"){
  const p4=skill==="bar4a",family=families.find(f=>f.id===skill),variants=p4?[0,4,8]:[0,4,9];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p="+(p4?4:3)+"&view=practice&skill="+skill;
  document.title=t(p4?"Scaled bar charts · Practice | MathQuiz":"Bar charts · Practice | MathQuiz",p4?"大數量棒形圖 · 練習 | MathQuiz":"棒形圖 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t(p4?"Practise reading scaled bar charts":"Practise reading bar charts",p4?"練習閱讀大數量棒形圖":"練習閱讀棒形圖")+'</h1><p>'+t("Read the named bar against the axis. Try three questions at your own pace.","對照數軸讀取指定的棒形，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field bar-response"><span class="sr-only">'+t("Number of pupils","學生人數")+'</span><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Number of pupils","學生人數")+'"> '+t("pupils","名學生")+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Write the number of pupils.","請寫出學生人數。");input.focus();return;}
      attempts++;
      const correct=measuringCupAnswer(value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+t(" pupils. ","人。"))+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=!/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC"))?t("Write whole-number digits only; pupils is already printed.","只寫整數數字；人數單位已印在旁邊。")
          :t("Find the named bar. Check what one axis step represents, then count the steps from zero to its end.","找出題目指定的棒形。先看數軸每格代表多少，再由零數到棒形末端。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderMissingSidePractice(){
  const family=families.find(f=>f.id==="permissing4a"),variants=[0,1,4];
  const practiceUrl=language=>"?lang="+language+"&p=4&view=practice&skill=permissing4a";
  let position=0,attempts=0,firstTry=0;
  document.title=t("Missing rectangle side · Practice | MathQuiz","長方形未知邊長 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]),s=q.missingSide;
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise finding a missing side","練習求未知邊長")+'</h1><p>'+t("Use the perimeter and one known side. Try three questions.","利用周界和一條已知邊長，完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Missing side in centimetres","未知邊長（厘米）")+'"> '+t("cm","厘米")+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Enter the missing side.","請輸入未知邊長。");input.focus();return;}
      attempts++;const correct=measureAnswer(value,q.answer[0]);if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+t(" cm. ","厘米。"))+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const entered=Number(value.normalize("NFKC"));
        feedback.textContent=!/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC"))?t("Write whole-number digits only; cm is printed beside the box.","只寫整數數字；厘米單位已印在旁邊。")
          :entered===s.perimeter/2?t("You found half the perimeter. Now subtract the known side.","你已求出周界的一半，現在減去已知邊長。")
          :entered===s.perimeter-s.known?t("The perimeter includes two of each side. First divide it by two.","周界包括每種邊各兩條，先把周界除以二。")
          :t("A long side and a short side make half the perimeter. Divide by two, then subtract the known side.","一長一短兩條邊合起來是周界的一半。先除以二，再減去已知邊長。");input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{position++;attempts=0;if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';};
  }
  show();
}
function renderPictogramPractice(){
  const family=families.find(f=>f.id==="pict2a"),variants=[0,1,6];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=2&view=practice&skill=pict2a";
  document.title=t("Pictograms · Practice | MathQuiz","象形圖 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise reading pictograms","練習閱讀象形圖")+'</h1><p>'+t("Each picture stands for one pupil. Try three questions at your own pace.","每個圖案代表一名學生。按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Number of pupils","學生人數")+'"> '+local(q.fields[0])+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Enter the number of pupils.","請輸入學生人數。");input.focus();return;}
      attempts++;
      const correct=pictogramAnswer(value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+". ")+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=!/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC"))?t("Use a whole-number numeral, not a decimal or calculation.","請只用整數數字，不要輸入小數或算式。")
          :t("Find the ","找出")+local(q.pictogram.categories[q.pictogram.target])+t(" category, then count only its pupil pictures.","一類，只數這一類的學生圖案。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderPlaceValuePractice(){
  const family=families.find(f=>f.id==="place3a");
  const pool=Array.from({length:family.count-1},(_,i)=>i+1);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[0,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=2&view=practice&skill=place3a";
  document.title=t("Place value · Practice | MathQuiz","位值 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]),{hundreds,tens,ones}=q.figure;
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise three-digit place value","練習三位數位值")+'</h1><p>'+t("Read the hundreds, tens and ones blocks. Try three questions at your own pace.","看百板、十棒和個位方格，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Three-digit number","三位數")+'"></label><small class="response-help">'+t("Write a three-digit numeral.","請寫出三位數字。")+'</small></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Write the three-digit number.","請寫出這個三位數。");input.focus();return;}
      attempts++;
      const correct=threeDigitAnswer(value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The answer is ","答案是 ")+q.answer[0]+". ")+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const numeral=value.normalize("NFKC");
        feedback.textContent=!/^[1-9][0-9]{2}$/.test(numeral)
          ?t("Use exactly three digits, starting with a nonzero digit.","請用三個數字，第一個數字不能是0。")
          :tens===0?t("There are no tens. Put 0 in the middle place.","沒有十，十位要填0。")
          :ones===0?t("There are no ones. Put 0 in the ones place.","沒有一，個位要填0。")
          :t("Read the columns from hundreds to tens to ones.","由百位、十位到個位逐欄讀出。 ");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderSpeedPractice(){
  const family=families.find(f=>f.id==="speed6a"),variants=[0,2,8];
  const practiceUrl=language=>"?lang="+language+"&p=6&view=practice&skill=speed6a";
  let position=0,attempts=0,firstTry=0;
  document.title=t("Speed · Practice | MathQuiz","速率 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]),s=q.speedTime;
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise speed with minutes","練習先換算分鐘再求速率")+'</h1><p>'+t("Convert minutes to hours, then divide distance by time. Try three questions.","先把分鐘換算為小時，再用距離除以時間，試做三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend><label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Speed in kilometres per hour","速率（公里／小時）")+'"> '+local(q.fields[0])+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),input=document.getElementById("practice-answer"),feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();const value=input.value.trim();
      if(!value){feedback.textContent=t("Enter the speed.","請輸入速率。");input.focus();return;}
      attempts++;const correct=measureAnswer(value,s.speed);if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The speed is ","速率是 ")+s.speed+" "+local(q.fields[0])+". ")+local(q.why);
        input.disabled=true;form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=numericAnswer(value,s.distance/s.minutes)?t("That divides by minutes. Divide "+s.minutes+" by 60 to get hours, then divide "+s.distance+" km by that time.","這是用分鐘作除數。先把"+s.minutes+"分鐘除以60換算為小時，再用"+s.distance+"公里除以所得時間。")
          :numericAnswer(value,s.distance)?t("That is the distance. Convert the time to hours and divide distance by time.","這是距離。先把時間換算為小時，再用距離除以時間。")
          :!(/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC")))?t("Enter a whole-number numeral only; km/h is already beside the box.","只輸入整數數字；公里／小時已顯示在答案格旁邊。")
          :t("Convert "+s.minutes+" minutes to hours first: divide by 60. Then divide the distance by the hours.","先把"+s.minutes+"分鐘除以60換算為小時，再用距離除以所得的小時數。");input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{position++;attempts=0;if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';};
  }
  show();
}
function renderMeanPractice(){
  const family=families.find(f=>f.id==="mean1");
  const pool=Array.from({length:family.count-1},(_,i)=>i+1);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[0,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=6&view=practice&skill=mean1";
  document.title=t("Arithmetic mean · Practice | MathQuiz","算術平均數 · 練習 | MathQuiz");
  for(const language of ["en","zh"])
    document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    const [a,b,c]=q.prompt[0].match(/\d+/g).map(Number);
    const sum=a+b+c,answer=q.answer[0];
    const explanation=t("Add all three days, then divide by 3: "+a+" + "+b+" + "+c+" = "+sum+"; "+sum+" ÷ 3 = "+answer+" books per day.",
      "先把三天的數量相加，再除以3："+a+" + "+b+" + "+c+" = "+sum+"；"+sum+" ÷ 3 = "+answer+"本書（平均每天）。");
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise arithmetic means","練習算術平均數")+'</h1><p>'+t("Find the average number of books lent per day. Try three questions at your own pace.","求出平均每天借出的圖書數量，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend><label class="field"><input id="practice-answer" type="text" inputmode="decimal" autocomplete="off" aria-label="'+t("Average books per day","平均每天的圖書數量")+'"> '+local(q.fields[0])+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer");
      const value=input.value.trim();
      const feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Enter the average number of books per day.","請輸入平均每天借出的圖書數量。");input.focus();return;}
      attempts++;
      const correct=numericAnswer(value,answer,false);
      if(attempts===1 && correct)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=correct
          ?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。")+explanation
          :t("The answer is ","答案是 ")+answer+" "+local(q.fields[0])+". "+explanation;
        input.disabled=true;
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=numericAnswer(value,sum,false)
          ?t("That is the total for three days. Divide it by 3 to find the average per day.","這是三天借出的總數。除以3才是平均每天的數量。")
          :[a,b,c].some(day=>numericAnswer(value,day,false))
            ?t("That is the number for one day. Add all three days, then divide by 3.","這是其中一天的數量。先把三天的數量相加，再除以3。")
            :numericAnswer(value,sum/2,false)
              ?t("There are three days, not two. Divide the total by 3.","題目共有三天，不是兩天。把總數除以3。")
              :!Number.isFinite(Number(value.normalize("NFKC"))) && !/^[-+]?\d+(?:\.\d+)?\s*\/\s*[-+]?\d+(?:\.\d+)?$/.test(value.normalize("NFKC"))
                ?t("Enter a number only; the unit is already beside the answer box.","只需輸入數字；答案欄旁已顯示單位。")
                :t("Find the total for all three days, then divide by the number of days: 3.","先求出三天的總數，再除以天數3。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><p>'+t("You can try another set of arithmetic-mean questions.","你可以再做一組算術平均數題。")+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderPercentagePractice(){
  const family=families.find(f=>f.id==="pct2");
  const pool=Array.from({length:family.count},(_,i)=>i).filter(i=>i!==7);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[7,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=6&view=practice&skill=pct2";
  document.title=t("Percentages · Practice | MathQuiz","百分比 · 練習 | MathQuiz");
  for(const language of ["en","zh"])
    document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    const [total,part]=q.prompt[0].match(/\d+/g).map(Number);
    const answer=q.answer[0];
    const explanation=t("Divide the part by the whole, then multiply by 100: "+part+" ÷ "+total+" × 100 = "+answer+"%.","用部分除以整體，再乘100："+part+" ÷ "+total+" × 100 = "+answer+"%。");
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise percentages","練習百分比")+'</h1><p>'+t("Find what percentage of the group chose badminton. Try three questions at your own pace.","求出選擇羽毛球的學生佔全組的百分之幾，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend><label class="field"><input id="practice-answer" type="text" inputmode="decimal" autocomplete="off" aria-label="'+t("Percentage of pupils","學生百分比")+'"> %</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer");
      const value=input.value.trim();
      const feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Enter the percentage.","請輸入百分比。");input.focus();return;}
      attempts++;
      const correct=numericAnswer(value,answer,false);
      if(attempts===1 && correct)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=correct
          ?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。")+explanation
          :t("The answer is ","答案是 ")+answer+"%. "+explanation;
        input.disabled=true;
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=numericAnswer(value,part,false)
          ?t("That is the number of pupils who chose badminton. To find a percentage, divide by "+total+" and multiply by 100.","這是選擇羽毛球的學生人數。求百分比要除以"+total+"，再乘100。")
          :numericAnswer(value,part/total,false)
            ?t("That is the proportion as a decimal. Multiply it by 100 to give a percentage.","這是小數形式的比例。再乘100，便得到百分比。")
            :numericAnswer(value,total,false)
              ?t("That is the whole group. Use the part, "+part+", divided by the whole, "+total+", then multiply by 100.","這是整體人數。用部分的"+part+"人除以整體的"+total+"人，再乘100。")
              :!Number.isFinite(Number(value.normalize("NFKC")))
                ?t("Enter a number only; % is already shown beside the answer box.","只需輸入數字；答案欄旁已顯示%。")
                :t("Start with part ÷ whole: "+part+" ÷ "+total+". Then multiply by 100.","先計算部分除以整體："+part+" ÷ "+total+"，再乘100。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><p>'+t("You can try another set of percentage questions.","你可以再做一組百分比題。")+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderFactorPractice(){
  const family=families.find(f=>f.id==="factor1");
  const pool=Array.from({length:family.count-1},(_,i)=>i+1);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[0,...pool.slice(0,2)];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=4&view=practice&skill=factor1";
  document.title=t("Factors · Practice | MathQuiz","因數 · 練習 | MathQuiz");
  for(const language of ["en","zh"])
    document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    const target=Number(local(q.prompt).match(/\d+/)[0]);
    const worked=q.answer.map(factor=>factor+" × "+(target/Number(factor))+" = "+target).join("; ");
    const explanation=t("The selected factors divide "+target+" exactly: "+worked+".","選出的因數可以整除"+target+"："+worked+"。");
    const choices=q.choices.map(choice=>'<label class="option"><input type="checkbox" name="factor" value="'+choice+'"> '+choice+'</label>').join("");
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise identifying factors","練習辨認因數")+'</h1><p>'+t("Select every listed factor. Try three questions at your own pace.","選出列出的所有因數，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+choices+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const selected=Array.from(e.currentTarget.querySelectorAll('input[name="factor"]:checked'),input=>input.value);
      const feedback=document.getElementById("practice-feedback");
      if(!selected.length){feedback.textContent=t("Select at least one number.","請最少選出一個數。") ;e.currentTarget.querySelector('input[name="factor"]').focus();return;}
      attempts++;
      const correct=selected.length===q.answer.length && selected.every(value=>q.answer.includes(value));
      if(attempts===1 && correct)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=correct
          ?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。")+explanation
          :t("The factors in this list are ","這列數中的因數是 ")+q.answer.join(t(" and ","和"))+". "+explanation;
        e.currentTarget.querySelectorAll('input[name="factor"]').forEach(input=>input.disabled=true);
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const extra=selected.find(value=>!q.answer.includes(value));
        const missing=q.answer.find(value=>!selected.includes(value));
        feedback.textContent=extra
          ?t(extra+" is not a factor of "+target+". Try dividing "+target+" by "+extra+"; a factor leaves no remainder. Try again.",extra+"不是"+target+"的因數。試用"+target+"除以"+extra+"；因數能整除而沒有餘數。再試一次。")
          :missing?t("You found a factor, but there is another one in the list. Check which other number divides "+target+" exactly.","你找出了一個因數，但列中還有另一個。看看哪個數也能整除"+target+"。")
          :t("Check each selected number by dividing "+target+" by it.","用"+target+"逐一除以選出的數，檢查答案。");
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.querySelector('input[name="factor"]').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><p>'+t("You can try another set of factor questions.","你可以再做一組因數題。")+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderFactorPairPractice(){
  const family=families.find(f=>f.id==="factorpair4a"),variants=[0,1,10];
  const practiceUrl=language=>"?lang="+language+"&p=4&view=practice&skill=factorpair4a";
  let position=0,attempts=0,firstTry=0;
  document.title=t("Factor pairs · Practice | MathQuiz","因數配對 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]),pair=q.factorPair;
    const answer='<input id="practice-answer" class="inline-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t("Missing whole-number factor","未知的整數因數")+'">';
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise explaining factor pairs","練習用乘法說明因數配對")+'</h1><p>'+t("Complete each multiplication sentence. Try three questions.","完成每道乘法算式，試做三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt).replace("___",answer)+'</legend></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Enter the missing factor.","請輸入未知的因數。");input.focus();return;}
      attempts++;const correct=measureAnswer(value,pair.other);if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("The missing factor is ","未知因數是 ")+pair.other+". ")+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const entered=Number(value.normalize("NFKC"));
        feedback.textContent=!/^(?:0|[1-9][0-9]*)$/.test(value.normalize("NFKC"))?t("Enter a whole-number numeral only.","請只輸入整數數字。")
          :entered===pair.target-pair.factor?t("That uses subtraction. A factor pair uses multiplication: what whole number times "+pair.factor+" gives "+pair.target+"?","這是減法。因數配對用乘法：哪個整數乘"+pair.factor+"會等於"+pair.target+"？")
          :entered===pair.target?t("The product is already shown. Find the other number you multiply by "+pair.factor+".","積已經列出。找出另一個與"+pair.factor+"相乘的數。")
          :t("Divide "+pair.target+" by "+pair.factor+". Check that your answer times "+pair.factor+" gives "+pair.target+" exactly.","用"+pair.target+"除以"+pair.factor+"，再檢查答案乘"+pair.factor+"是否剛好等於"+pair.target+"。");input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{position++;attempts=0;if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';};
  }
  show();
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
function renderPurchaseStoryPractice(){
  const family=families.find(f=>f.id==="purchasestory5a"),variants=[0,6,4];
  const practiceUrl=language=>"?lang="+language+"&p=5&view=practice&skill=purchasestory5a";
  let position=0,attempts=0,firstTry=0;
  document.title=t("Purchase equations · Practice | MathQuiz","購物方程 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]),story=q.purchaseEquation;
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise purchase equations","練習購物方程")+'</h1><p>'+t("Use x to write an equation for each story. Try three questions.","用 x 為每個情境列方程，試做三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend><label class="field">'+t("Equation","方程")+' <input id="practice-answer" class="equation-input" type="text" autocomplete="off" aria-label="'+t("Equation for the purchase story","購物情境的方程")+'"></label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById("practice-form"),input=document.getElementById("practice-answer"),feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();const value=input.value.trim();
      if(!value){feedback.textContent=t("Write an equation first.","請先列出方程。");input.focus();return;}
      attempts++;const correct=purchaseEquationAnswer(value,story);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("A matching equation is ","符合情境的方程是 ")+q.answer[0]+". ")+local(q.why);
        input.disabled=true;form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const written=value.normalize("NFKC").replace(/\s/g,"").replace(/[−–]/g,"-").toLowerCase();
        feedback.textContent=/^x=/.test(written)?t("That calculates x. First show how the amounts in the story relate using x.","這是在計算 x。請先用 x 列出情境中各個金額的關係。")
          :story.subtract?t("Start with the money before the purchase. Subtract the book's cost to get the amount left.","從買書前的金額開始，減去書價，就等於剩下的金額。")
          :t("Add the notebook price x and the pen price. Their sum is the total paid.","把筆記簿價錢 x 和筆價相加，便等於總價。");input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{position++;attempts=0;if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';};
  }
  show();
}
function renderP5Practice(skill){
  const family=families.find(f=>f.id===skill),fraction=skill==="fracadd5a",variants=[0,4,9];
  const name=fraction?t("adding fractions","異分母分數加法"):t("solving equations","解簡易方程");
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=5&view=practice&skill="+skill;
  document.title=t("Primary 5 · Practice | MathQuiz","小五 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    const fields=q.fields.map((field,j)=>'<label class="field">'+(fraction?t(["Numerator","Denominator"][j],["分子","分母"][j]):"x =")+' <input id="practice-answer-'+j+'" type="text" inputmode="numeric" autocomplete="off" aria-label="'+local(field)+'"></label>').join("");
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise ","練習")+name+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+fields+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const inputs=q.fields.map((_,j)=>document.getElementById("practice-answer-"+j)),values=inputs.map(input=>input.value.trim()),feedback=document.getElementById("practice-feedback");
      if(values.some(v=>!v)){feedback.textContent=t("Complete every answer box.","請填妥所有答案格。");inputs[values.findIndex(v=>!v)].focus();return;}
      attempts++;
      const correct=fraction?fractionAdditionAnswer(values,q.fractionAddition):simpleEquationAnswer(values[0],q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The answer is ","答案是 ")+(fraction?q.answer.join("/"):"x = "+q.answer[0])+". ")+local(q.why);
        inputs.forEach(input=>input.disabled=true);e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const equivalent=fraction && values.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v.normalize("NFKC"))) && Number(values[1])>0 && Number(values[0])*q.fractionAddition.den===Number(values[1])*q.fractionAddition.n;
        feedback.textContent=equivalent?t("That fraction has the right value. Reduce it to lowest terms.","這個分數的值正確，請約成最簡分數。")
          :fraction?t("Find a common denominator, rewrite both fractions, then add the numerators.","先找公分母，把兩個分數通分，再把分子相加。")
          :q.simpleEquation.subtract?t("Add the same number to both sides, then check by substitution.","等號兩邊同時加上相同的數，再代入驗算。")
          :t("Subtract the same number from both sides, then check by substitution.","等號兩邊同時減去相同的數，再代入驗算。");
        inputs[0].focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer-0").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderP5MeasurePractice(skill){
  const area=skill==="triarea5a",family=families.find(f=>f.id===skill),variants=area?[0,4,9]:[0,5,10];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=5&view=practice&skill="+skill;
  document.title=area?t("Triangle area · Practice | MathQuiz","三角形面積 · 練習 | MathQuiz"):t("Cuboid volume · Practice | MathQuiz","長方體體積 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t(area?"Practise triangle area":"Practise cuboid volume",area?"練習三角形面積":"練習長方體體積")+'</h1><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+'<label class="field"><input id="practice-answer" type="text" inputmode="numeric" autocomplete="off" aria-label="'+t(area?"Area in square centimetres":"Volume in cubic centimetres",area?"面積（平方厘米）":"體積（立方厘米）")+'"> '+local(q.fields[0])+'</label></fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const input=document.getElementById("practice-answer"),value=input.value.trim(),feedback=document.getElementById("practice-feedback");
      if(!value){feedback.textContent=t("Write a whole-number answer.","請寫出整數答案。");input.focus();return;}
      attempts++;
      const correct=measureAnswer(value,q.answer[0]);
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The answer is ","答案是 ")+q.answer[0]+" "+local(q.fields[0])+". ")+local(q.why);
        input.disabled=true;e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const numeral=value.normalize("NFKC"),valid=/^(?:0|[1-9][0-9]*)$/.test(numeral);
        feedback.textContent=!valid?t("Use whole-number digits only; the unit is already printed.","只寫整數數字；單位已印在旁邊。")
          :area?Number(numeral)===q.triangleArea.base*q.triangleArea.height?t("You found the matching rectangle's area. A triangle has half that area, so divide by 2.","你算出對應長方形的面積。三角形只有一半，還要除以2。")
            :t("Use the base and its perpendicular height, not a sloping side. Multiply, then divide by 2.","用底邊和對應的垂直高，不要用斜邊；相乘後再除以2。")
          :Number(numeral)===q.cuboidVolume.length*q.cuboidVolume.width?t("That is one layer. Multiply by the number of layers, the height.","這只是一層，還要乘層數（高）。")
            :t("Multiply length by width to find one layer, then multiply by height.","先用長乘闊求一層，再乘高。");
        input.select();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.getElementById("practice-answer").focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderCirclePractice(){
  const family=families.find(f=>f.id==="circle5a"),variants=[0,5,7];
  let position=0,attempts=0,firstTry=0;
  const practiceUrl=language=>"?lang="+language+"&p=5&view=practice&skill=circle5a";
  document.title=t("Circle parts · Practice | MathQuiz","圓的各部分 · 練習 | MathQuiz");
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  function show(){
    const q=family.make(variants[position]);
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practise circle parts","練習辨認圓的各部分")+'</h1><p>'+t("Find the radius in each circle. Try three questions at your own pace.","在每個圓中找出半徑，按自己的步伐完成三題。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="practice-form"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    document.getElementById("practice-form").onsubmit=e=>{
      e.preventDefault();
      const choice=new FormData(e.currentTarget).get("q0"),feedback=document.getElementById("practice-feedback");
      if(!choice){feedback.textContent=t("Choose one segment.","請選擇一條線段。");e.currentTarget.querySelector('input[type="radio"]').focus();return;}
      attempts++;
      const correct=choice===q.answer[0];
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。"):t("The answer is ","答案是 ")+q.answer[0]+". ")+local(q.why);
        e.currentTarget.querySelectorAll('input[type="radio"]').forEach(el=>el.disabled=true);
        e.currentTarget.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        const chosen=q.circleParts.segments.find(segment=>segment.letter===choice);
        feedback.textContent=chosen.kind==="diameter"
          ?t("That line passes through O and has both ends on the circle: it is a diameter. Find a line with one end at O.","這條線穿過圓心O，兩端都在圓上，是直徑。找一條以O為其中一端的線段。")
          :t("Both ends of that chord lie on the circle. Find the centre O, then look for a line ending on the circle.","這條弦的兩端都在圓上。先找圓心O，再找另一端在圓上的線段。");
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.querySelector('#practice-form input[type="radio"]').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
function renderAdditionalP1Practice(skill){
  const family=families.find(f=>f.id===skill && f.grade===1);
  const first={add1:0,pictureadd1:21,otherway1:3}[skill];
  const pool=Array.from({length:family.count},(_,i)=>i).filter(i=>i!==first);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  const variants=[first,...pool.slice(0,2)];
  const titles={add1:["Practise addition to 10","練習10以內的加法"],pictureadd1:["Practise writing addition sentences","練習看圖寫加法算式"],otherway1:["Practise making a total another way","練習另一種組合方法"]};
  const practiceUrl=language=>"?lang="+language+"&p=1&view=practice&skill="+skill;
  for(const language of ["en","zh"])document.getElementById(language).href=practiceUrl(language);
  document.title=local(titles[skill])+" · "+t("Practice","練習")+" | MathQuiz";
  let position=0,attempts=0,firstTry=0;
  function show(){
    const q=family.make(variants[position]),formId="practice-form";
    app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+local(titles[skill])+'</h1><p>'+t("Try three questions at your own pace. Check your answer for a hint and a worked step.","按自己的步伐完成三題。核對答案後可看到提示和解題步驟。")+'</p><p class="practice-progress">'+t("Question ","第 ")+(position+1)+t(" of "," 題，共 ")+variants.length+t(""," 題")+'</p><form id="'+formId+'"><fieldset><legend>'+local(q.prompt)+'</legend>'+figure(q.figure)+controls(q,0,false)+'</fieldset><button type="submit">'+t("Check answer","核對答案")+'</button> <button type="button" id="practice-next" hidden>'+t(position+1===variants.length?"See result":"Next question",position+1===variants.length?"查看結果":"下一題")+'</button><p id="practice-feedback" role="status" tabindex="-1"></p></form>';
    const form=document.getElementById(formId),inputs=[...form.querySelectorAll('input')],feedback=document.getElementById("practice-feedback");
    form.onsubmit=e=>{
      e.preventDefault();
      const values=inputs.map(input=>input.value.trim());
      if(values.some(value=>!value)){feedback.textContent=t("Complete every answer box first.","請先填寫所有答案欄。");inputs[values.findIndex(value=>!value)].focus();return;}
      attempts++;
      const normalized=values.map(value=>value.normalize("NFKC"));
      const equation=skill==="pictureadd1"?normalized[0].replace(/\s/g,"").match(/^([1-9])\+([1-9])=(\d{1,2})$/):null;
      const shown=q.otherWay?.shown;
      const correct=skill==="add1"?numericAnswer(values[0],q.answer[0],true)
        :skill==="pictureadd1"?!!equation && +equation[3]===q.equation.total && ((+equation[1]===q.equation.a && +equation[2]===q.equation.b)||(+equation[1]===q.equation.b && +equation[2]===q.equation.a))
        :normalized.every(value=>/^[1-9]$/.test(value)) && +normalized[0]+ +normalized[1]===q.otherWay.total && normalized.map(Number).sort((a,b)=>a-b).join(",")!==[...shown].sort((a,b)=>a-b).join(",");
      if(correct && attempts===1)firstTry++;
      if(correct || attempts===2){
        feedback.textContent=(correct?t(attempts===1?"Correct on the first try. ":"Correct after a hint. ",attempts===1?"第一次答對。":"看提示後答對。") : t("A worked answer: ","參考答案：")+(skill==="otherway1"?q.answer.join(" + ")+" = "+q.otherWay.total:skill==="pictureadd1"?q.answer[0]:q.answer[0])+". ")+local(q.why);
        inputs.forEach(input=>input.disabled=true);form.querySelector('button[type="submit"]').hidden=true;
        const next=document.getElementById("practice-next");next.hidden=false;next.focus();
      }else{
        feedback.textContent=skill==="add1"?t("Add both bead groups. Count on from the red beads, one blue bead at a time.","把兩組珠合起來。從紅珠數起，再逐一數藍珠。")
          :skill==="pictureadd1"?t("Count the red and blue groups separately. Write red + blue = total using digits.","分別數紅色和藍色圓片，再用數字寫出「紅色 + 藍色 = 總數」。")
          :normalized.map(Number).sort((a,b)=>a-b).join(",")===[...shown].sort((a,b)=>a-b).join(",")?t("Swapping the pictured groups is the same way. Move one counter to make a different pair.","只交換圖中兩組的次序仍是同一種方法。試把一粒圓片移到另一組。")
          :t("Use two positive one-digit parts. They must add to the total shown in the picture.","用兩個正整數個位數組成總數；兩組數量相加要等於圖中的總數。");
        inputs[0].focus();
      }
    };
    document.getElementById("practice-next").onclick=()=>{
      position++;attempts=0;
      if(position<variants.length){show();document.querySelector('#practice-form input').focus();return;}
      app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+t("Practice complete","練習完成")+'</h1><p role="status">'+t("Correct on the first try: ","第一次答對：")+firstTry+' / '+variants.length+'</p><a class="builder-link" href="'+practiceUrl(lang)+'">'+t("Practise again","再練習")+' →</a>';
    };
  }
  show();
}
// One entry supplies a practice route and its home-page link. The default P1
// counting link omits skill to preserve already-shared URLs.
const practiceCatalogue=[
  {grade:1,skill:null,label:["Practise counting","練習點算"],render:renderPractice},
  {grade:1,skill:"next1",label:["Practise counting forwards","練習順數"],render:renderPractice},
  {grade:1,skill:"add1",label:["Practise addition to 10","練習10以內的加法"],render:()=>renderAdditionalP1Practice("add1")},
  {grade:1,skill:"pictureadd1",label:["Practise picture addition","練習看圖寫加法算式"],render:()=>renderAdditionalP1Practice("pictureadd1")},
  {grade:1,skill:"otherway1",label:["Practise another way to make a total","練習另一種組合方法"],render:()=>renderAdditionalP1Practice("otherway1")},
  {grade:1,skill:"storyadd1",label:["Practise addition","練習加法"],render:renderPractice},
  {grade:1,skill:"parts18a",label:["Practise missing parts","練習找出另一部分"],render:renderPractice},
  {grade:1,skill:"compare100a",label:["Practise comparing numbers to 100","練習比較100以內的數"],render:renderCompare100Practice},
  {grade:1,skill:"tensones1a",label:["Practise tens and ones","練習十位和個位"],render:()=>renderNumber100Practice("tensones1a")},
  {grade:1,skill:"countgroups1a",label:["Practise counting in groups","練習分組點算"],render:()=>renderNumber100Practice("countgroups1a")},
  {grade:1,skill:"sequence100a",label:["Practise counting to 100","練習100以內順數和倒數"],render:()=>renderNumber100Practice("sequence100a")},
  {grade:1,skill:"oddeven100a",label:["Practise odd and even numbers","練習單數和雙數"],render:()=>renderChoice100Practice("oddeven100a")},
  {grade:1,skill:"ordernums100a",label:["Practise ordering numbers","練習排列數字"],render:renderOrder100Practice},
  {grade:1,skill:"numberwords100a",label:["Practise writing numerals","練習看數詞寫數字"],render:()=>renderNumber100Practice("numberwords100a")},
  {grade:1,skill:"estimate100a",label:["Practise estimating counters","練習估計圓片數目"],render:()=>renderChoice100Practice("estimate100a")},
  {grade:1,skill:"carryadd1a",label:["Practise addition with carrying","練習進位加法"],render:()=>renderNumber100Practice("carryadd1a")},
  {grade:1,skill:"noborrow1a",label:["Practise subtraction without borrowing","練習不退位減法"],render:()=>renderNumber100Practice("noborrow1a")},
  {grade:1,skill:"threeadd1a",label:["Practise adding three numbers","練習三個數相加"],render:()=>renderNumber100Practice("threeadd1a")},
  {grade:1,skill:"groupadd1a",label:["Practise grouping three addends","練習組合三個加數"],render:renderGroupedAdditionPractice},
  {grade:1,skill:"columnadd1a",label:["Practise addition columns","練習加法直式"],render:()=>renderColumnPractice("columnadd1a")},
  {grade:1,skill:"columnsub1a",label:["Practise subtraction columns","練習減法直式"],render:()=>renderColumnPractice("columnsub1a")},
  {grade:1,skill:"storyadd1a",label:["Practise addition stories","練習加法文字題"],render:()=>renderNumber100Practice("storyadd1a")},
  {grade:1,skill:"storysub1a",label:["Practise subtraction stories","練習減法文字題"],render:()=>renderNumber100Practice("storysub1a")},
  {grade:1,skill:"triangle1",label:["Practise triangles","練習三角形"],render:renderTrianglePractice},
  {grade:4,skill:"per1",label:["Practise perimeter","練習周界"],render:renderPractice},
  {grade:4,skill:"permissing4a",label:["Practise missing rectangle sides","練習求長方形未知邊長"],render:renderMissingSidePractice},
  {grade:4,skill:"factor1",label:["Practise factors","練習因數"],render:renderFactorPractice},
  {grade:4,skill:"factorpair4a",label:["Practise factor pairs","練習因數配對"],render:renderFactorPairPractice},
  {grade:6,skill:"pct2",label:["Practise percentages","練習百分比"],render:renderPercentagePractice},
  {grade:6,skill:"speed6a",label:["Practise speed with minutes","練習先換算分鐘再求速率"],render:renderSpeedPractice},
  {grade:6,skill:"mean1",label:["Practise averages","練習平均數"],render:renderMeanPractice},
  {grade:2,skill:"place3a",label:["Practise place value","練習位值"],render:renderPlaceValuePractice},
  {grade:2,skill:"groups2a",label:["Practise equal groups","練習等量分組"],render:renderEqualGroupsPractice},
  {grade:2,skill:"pict2a",label:["Practise pictograms","練習象形圖"],render:renderPictogramPractice},
  {grade:2,skill:"share2a",label:["Practise equal sharing","練習平均分配"],render:renderEqualSharingPractice},
  {grade:3,skill:"frac3a",label:["Practise fractions","練習分數"],render:renderFractionPractice},
  {grade:3,skill:"cup3a",label:["Practise measuring cups","練習量杯刻度"],render:renderMeasuringCupPractice},
  {grade:3,skill:"bar3a",label:["Practise bar charts","練習棒形圖"],render:renderBarChartPractice},
  {grade:4,skill:"bar4a",label:["Practise scaled bar charts","練習大數量棒形圖"],render:()=>renderBarChartPractice("bar4a")},
  {grade:5,skill:"fracadd5a",label:["Practise adding fractions","練習分數加法"],render:()=>renderP5Practice("fracadd5a")},
  {grade:5,skill:"equation5a",label:["Practise simple equations","練習簡易方程"],render:()=>renderP5Practice("equation5a")},
  {grade:5,skill:"purchasestory5a",label:["Practise purchase equations","練習購物方程"],render:renderPurchaseStoryPractice},
  {grade:5,skill:"triarea5a",label:["Practise triangle area","練習三角形面積"],render:()=>renderP5MeasurePractice("triarea5a")},
  {grade:5,skill:"volume5a",label:["Practise cuboid volume","練習長方體體積"],render:()=>renderP5MeasurePractice("volume5a")},
  {grade:5,skill:"circle5a",label:["Practise circle parts","練習辨認圓的各部分"],render:renderCirclePractice}
];
const custom=["2","3"].includes(params.get("v"));
const strictP1=custom && grade===1 && params.get("v")==="3";
const selected=custom?decodeItems(params.get("items"),grade):[];
const ids=selected.map(q=>q.id);
const view=params.get("view")||"";
const practiceEntry=view==="practice"?(practiceCatalogue.find(entry=>entry.grade===grade && entry.skill===params.get("skill")) || (grade===1?practiceCatalogue[0]:null)):null;
if(custom && grade){
  for(const language of ["en","zh"]) document.getElementById(language).href=customLink(ids,view,grade,language);
  if(selected.length)quizzes[grade]=selected;
}
if(invalidV4 || ([2,3,5].includes(grade) && !custom && !practiceEntry) || (custom && (!grade || (params.get("items") && !selected.length) || (!selected.length && view!=="build")))){
  app.innerHTML='<h1>'+t("Quiz link unavailable","小測連結無效")+'</h1><a href="'+href(null)+'">'+t("All quizzes","所有小測")+'</a>';
}else if(custom && view==="build"){
  renderBuilder(grade,selected);
}else if(practiceEntry){
  practiceEntry.render();
}else if(!grade){
  document.title=t("MathQuiz · Primary mathematics","MathQuiz · 小學數學");
  const presets=[
    {ids:warmUpP1,title:t("P1 five-minute warm-up","小一五分鐘熱身題"),description:t("Three quick questions on counting, sequences and addition.","三題數數、順數和加法題。"),edit:t("Edit warm-up","編輯熱身題"),pupil:t("Try warm-up","試做熱身題")},
    {ids:exitTicketP1,title:t("Six-question P1 exit ticket","小一六題離堂小測"),description:t("A ready-to-edit set on numbers to 20 and addition.","可編輯的二十以內數和加法題組。"),edit:t("Edit exit ticket","編輯離堂小測"),pupil:t("Try exit ticket","試做離堂小測")}
  ];
  app.innerHTML='<h1>'+t("Primary mathematics","小學數學")+'</h1><p class="intro">'+t("Choose a quiz to practise online or download an A4 paper and worked answers.","選擇小測，網上作答或下載 A4 試卷及解答。")+'</p><section class="home-actions" aria-label="'+t("Get started","開始使用")+'">'+presets.map(p=>'<div class="home-feature"><h2>'+p.title+'</h2><p>'+p.description+'</p><div class="home-links"><a class="builder-link" href="'+customLink(p.ids,"build",1)+'">'+p.edit+' →</a><a href="'+customLink(p.ids,"",1)+'">'+p.pupil+' →</a></div></div>').join("")+'<div class="home-feature"><h2>'+t("Create a quiz","建立小測")+'</h2><p>'+t("Choose questions for Primary 1, 2, 3, 4, 5 or 6.","選擇小一、小二、小三、小四、小五或小六的題目。")+'</p><div class="home-links"><a class="builder-link" href="'+customLink([],"build",1)+'">'+t("Start a new quiz","開始建立小測")+' →</a></div></div><div class="home-feature"><h2>'+t("Practise a skill","練習一項技能")+'</h2><p>'+t("Start with three P1 counting questions. Get a hint and try again.","先做三題小一點算題，遇到困難可看提示再試。")+'</p><div class="home-links"><a class="builder-link" href="?lang='+lang+'&p=1&view=practice">'+t("Practise counting","練習點算")+' →</a></div></div></section><h2>'+t("Example quizzes","示例小測")+'</h2><section class="cards">'+[1,4,6].map(n=>'<a class="card" href="'+href(n)+'"><b>'+level(n)+'</b><span>'+local(topics[n])+'</span><strong>'+t("Open quiz","開啟小測")+' →</strong></a>').join("")+'</section>';
  const practiceCard=app.querySelector(".home-actions .home-feature:last-child");
  app.querySelector(".intro").insertAdjacentHTML("afterend",'<p><a href="coverage.html?lang='+lang+'">'+t("See grade coverage and planned examples","查看各年級題目涵蓋範圍及計劃中的例子")+' →</a></p>');
  practiceCard.querySelector("p").textContent=t("Choose P1 counting, addition and shapes; P2 place value, equal groups, pictograms and equal sharing; P3 fractions, measuring cups and bar charts; P4 perimeter and factors; P5 fractions, equations, triangle area, cuboid volume and circle parts; or P6 percentages and averages. Get a hint and try again.","選擇小一點算、加法和圖形；小二位值、等量分組、象形圖和平均分配；小三分數、量杯刻度和棒形圖；小四周界和因數；小五分數加法、簡易方程、三角形面積、長方體體積和圓的各部分；或小六百分比和平均數練習，遇到困難可看提示再試。");
  practiceCard.querySelector(".home-links").insertAdjacentHTML("beforeend",practiceCatalogue.filter(entry=>entry.skill).map(entry=>'<a href="?lang='+lang+'&p='+entry.grade+'&view=practice&skill='+entry.skill+'">'+local(entry.label)+' →</a>').join(""));
  app.querySelector(".home-actions .home-feature:nth-child(3) .home-links").insertAdjacentHTML("beforeend",'<a href="'+customLink([],"build",2)+'">'+t("Create a P2 quiz","建立小二小測")+' →</a>');
  app.querySelector(".home-actions .home-feature:nth-child(3) .home-links").insertAdjacentHTML("beforeend",'<a href="'+customLink([],"build",3)+'">'+t("Create a P3 quiz","建立小三小測")+' →</a>');
  app.querySelector(".home-actions .home-feature:nth-child(3) .home-links").insertAdjacentHTML("beforeend",'<a href="'+customLink([],"build",5)+'">'+t("Create a P5 quiz","建立小五小測")+' →</a>');
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


