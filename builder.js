// Shared links use permanent template and variant IDs. Add new versions under new IDs.
function percentageQuestion(i){
  const total=[20,40,50][i%3],pct=10+10*Math.floor(i/3),n=total*pct/100;
  return numeric([`Of ${total} pupils, ${n} chose badminton. What percentage chose badminton?`,`${total}名學生中有${n}人選擇羽毛球。選擇羽毛球的學生佔百分之幾？`],["%","%"],pct,`${n} ÷ ${total} × 100% = ${pct}%`);
}
function measureCompareQuestion(i,subject,units){
  const pairs=[[3,7],[8,5],[6,2],[4,8],[7,3],[2,6],[5,8],[8,4],[3,6],[7,4],[5,2],[2,7]];
  const [a,b]=pairs[i],answer=a>b?"A":"B",distance=subject==="distance";
  const prompt=distance
    ?[units?"Each equal segment is one paperclip length. Which point is farther from Start by straight distance, A or B?":"Which point is farther from Start by straight distance, A or B?",units?"每段等長的線代表一個回形針的長度。由起點沿直線量度，A點還是B點較遠？":"由起點沿直線量度，A點還是B點較遠？"]
    :[units?"Each equal block is one paperclip length. Which ribbon is longer, A or B?":"The two ribbons start at the same line. Which ribbon is longer, A or B?",units?"每個等長的方格代表一個回形針的長度。A絲帶還是B絲帶較長？":"兩條絲帶的起點對齊。A絲帶還是B絲帶較長？"];
  const why=units
    ?[`${answer} has ${Math.max(a,b)} paperclip lengths; the other has ${Math.min(a,b)}. ${answer} is ${distance?"farther from Start":"longer"}.`,`${answer}有${Math.max(a,b)}個回形針長，另一個有${Math.min(a,b)}個。${answer}${distance?"離起點較遠":"較長"}。`]
    :[`${answer} ends farther from the shared starting line. ${distance?"Compare straight distances between points.":"Align the ribbon ends before comparing."}`,`${answer}的終點離共同起點較遠。${distance?"比較兩點之間的直線距離。":"比較絲帶前要把起點對齊。"}`];
  return {prompt,choices:["A","B"],answer:[answer],marks:1,why,figure:{kind:"measureCompare",a,b,subject,units},measureCompare:{a,b,subject,units,answer}};
}
function centimetreQuestion(i,subject,compare){
  const distance=subject==="distance";
  if(compare){
    const lengths=[[3,7],[8,5],[6,2],[4,8],[7,3],[2,6],[5,8],[8,4],[3,6],[7,4],[5,2],[2,7]];
    const starts=[[0,1],[2,0],[0,4],[1,0],[3,0],[0,2],[2,0],[0,4],[4,1],[0,3],[3,0],[1,1]];
    const items=lengths[i].map((length,j)=>({start:starts[i][j],length}));
    const answer=items[0].length>items[1].length?"A":"B";
    return {prompt:distance?["Two straight distances are shown against centimetre rulers. Which distance is longer, A or B?","兩段直線距離放在厘米尺旁。哪段距離較長，A還是B？"]:["Two ribbons are shown against centimetre rulers. Which ribbon is longer, A or B?","兩條絲帶放在厘米尺旁。哪條絲帶較長，A還是B？"],choices:["A","B"],answer:[answer],marks:1,
      why:[`A is ${items[0].length} cm (${items[0].start} to ${items[0].start+items[0].length}); B is ${items[1].length} cm (${items[1].start} to ${items[1].start+items[1].length}). ${answer} is longer.`,`A長${items[0].length}厘米（由${items[0].start}至${items[0].start+items[0].length}）；B長${items[1].length}厘米（由${items[1].start}至${items[1].start+items[1].length}）。${answer}較長。`],
      figure:{kind:"cmRuler",subject,items},centimetre:{subject,items,answer}};
  }
  const examples=distance?[[0,4],[0,6],[0,8],[0,3],[0,7],[0,5],[2,5],[4,4],[3,7],[1,8],[2,6],[3,4]]:[[0,3],[0,5],[0,7],[0,9],[0,4],[0,8],[2,4],[3,6],[1,7],[4,5],[2,8],[3,3]];
  const [start,length]=examples[i],end=start+length;
  return {...numeric(distance?["Measure the straight distance from A to B using the centimetre ruler. Enter the number of centimetres.","用厘米尺量度A點至B點的直線距離。輸入厘米數。"]:["Measure the ribbon using the centimetre ruler. Enter the number of centimetres.","用厘米尺量度絲帶的長度。輸入厘米數。"],["cm","厘米"],length,[`The ${distance?"distance":"ribbon"} starts at ${start} cm and ends at ${end} cm. ${end} − ${start} = ${length} cm.`,`從${start}厘米刻度量至${end}厘米刻度。${end} − ${start} = ${length}厘米。`]),
    figure:{kind:"cmRuler",subject,items:[{start,length}]},centimetre:{subject,start,end,length}};
}
// Integration fragment: add helper functions before families and spread moneyFamilies inside it.
// All monetary computation uses integer cents. Do not change released IDs/variants later.
// These labelled schematic tokens do not assess recognition of a real coin's physical design.
function moneyWords1(cents){
  const dollars=Math.floor(cents/100),rest=cents%100;
  const en=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
  const tens=['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const zh=['零','一','兩','三','四','五','六','七','八','九','十'];
  const dollarsEn=dollars?`${en[dollars]} dollar${dollars===1?'':'s'}`:'';
  const centsEn=rest?`${tens[rest/10]} cents`:'';
  return [[dollarsEn,centsEn].filter(Boolean).join(' and '), (dollars?zh[dollars]+'元':'')+(rest?zh[rest/10]+'角':'')];
}
function moneyPrice1(cents){return '$'+Math.floor(cents/100)+'.'+String(cents%100).padStart(2,'0')}
function moneyChoice1(cents,wrong,i){
  const keys=[String(cents),...wrong.map(String)];
  return {choices:keys.map((_,j)=>keys[(j+i)%3]),choiceLabels:Object.fromEntries(keys.map(k=>[k,moneyWords1(Number(k))])),answer:[String(cents)],marks:1};
}
const moneyFamilies=[
  {id:'coinvalue1a',grade:1,code:'1M2',label:['Read a coin denomination','讀出硬幣面值'],count:12,make(i){
    const values=[10,20,50,100,200,500,1000,50,20,200,100,500];
    const distractors=[[20,100],[10,200],[20,500],[10,1000],[20,100],[50,1000],[100,500],[10,100],[50,100],[100,500],[20,200],[200,1000]];
    const cents=values[i],label=cents<100?`${cents}¢`:`$${cents/100}`;
    return {...moneyChoice1(cents,distractors[i],i),prompt:['This is a labelled diagram of a Hong Kong coin, not a real coin image. What value does the label show?','這是標有面值的香港硬幣示意圖，並非真實硬幣圖像。標示表示多少錢？'],figure:{kind:'hkCoins',coins:[cents]},
      why:[`The label ${label} means ${moneyWords1(cents)[0]}. Read the unit as well as the number; the diagram's size does not show its value.`,`標示${label}表示${moneyWords1(cents)[1]}。要讀數字和單位；示意圖的大小不代表面值。`],
      money:{mode:'coin',cents,coins:[cents],hint:['Look for ¢ (cents) or $ (dollars), not the size of the picture.','看清楚¢（仙）或$（元），不要按圖的大小判斷。']}};
  }},
  {id:'priceword1a',grade:1,code:'1M2',label:['Read a marked price','讀出標價'],count:12,make(i){
    const amounts=[250,300,50,120,480,500,670,800,910,1000,30,740];
    const wrong=[[520,200],[30,330],[500,50+10],[210,100],[840,400],[50,550],[760,600],[80,880],[190,900],[100,10],[300,20],[470,700]];
    const cents=amounts[i],price=moneyPrice1(cents),words=moneyWords1(cents);
    return {...moneyChoice1(cents,wrong[i],i),prompt:['Which reading matches this Hong Kong price tag? Choose one. You do not need to write the price.','哪個讀法符合這個香港標價牌？選一個，不用寫標價。'],figure:{kind:'hkPrice',cents},
      why:[`${price} is read as ${words[0]}. ${cents%100===0?'The two zeros show that no extra cents are included.':'Read the dollar amount and then the cents.'}`,`${price}讀作${words[1]}。${cents%100===0?'小數點後的兩個零表示沒有另加角或仙。':'先讀元，再讀角或仙。'}`],
      money:{mode:'price',cents,hint:['Read the dollars and cents as money, not as separate digits. Check both sides of the point.','把標價讀成金額，不要逐個數字讀。看清楚點前和點後的數字。']}};
  }},
  {id:'coincount1a',grade:1,code:'1M2',label:['Count a group of coins','點算一組硬幣'],count:12,make(i){
    const cases=[[10,10,10],[20,20,10],[50,20,20,10],[100,50,20],[100,100,50,20],[200,100],[500,200,100],[500,500],[200,200,200,100],[100,50,50],[1000],[50,50,20,20,10]];
    const coins=cases[i],cents=coins.reduce((a,b)=>a+b,0);
    const wrong=[[20,100],[40,100],[50,200],[120,700],[250,720],[200,500],[700,900],[500,100],[600,800],[150,300],[100,500],[100,250]];
    let total=0;const running=coins.map(c=>{total+=c;return moneyWords1(total)});
    return {...moneyChoice1(cents,wrong[i],i),prompt:['Count the labelled Hong Kong coins. How much money is there altogether? The diagrams are not real coin images.','點算標有面值的香港硬幣，合共有多少錢？這些示意圖並非真實硬幣圖像。'],figure:{kind:'hkCoins',coins},
      why:[`Count the value of each coin once, from left to right: ${running.map(v=>v[0]).join('; ')}. The total is ${moneyWords1(cents)[0]}.`,`由左至右，每枚硬幣的面值只數一次：${running.map(v=>v[1]).join('、')}。合共${moneyWords1(cents)[1]}。`],
      money:{mode:'count',cents,coins,hint:['Read each coin value and keep a running total. Counting the coins alone does not tell you the money total.','讀出每枚硬幣的面值，一邊數一邊累計。硬幣的枚數並不等於總金額。']}};
  }}
];

const solidNames1={prism:['Prism','角柱體'],cylinder:['Cylinder','圓柱體'],pyramid:['Pyramid','角錐體'],cone:['Cone','圓錐體'],sphere:['Sphere','球體']};
const solidFamilies1=[{id:'solidname1a',grade:1,code:'1S1',label:['Name a pictured 3-D shape','辨認圖中的立體'],count:15,make(i){
 const kinds=Object.keys(solidNames1),solid=kinds[i%5],rotation=[0,25,90][Math.floor(i/5)],shift=(Math.floor(i/5)*2)%5,choices=kinds.slice(shift).concat(kinds.slice(0,shift));
 return {prompt:['Which broad 3-D shape family does this model belong to? Choose one.','這個模型屬於哪一類立體？選一個。'],choices,choiceLabels:solidNames1,answer:[solid],marks:1,figure:{kind:'solid1',solid,rotation},solidRecognition:{solid,rotation,hint:['Look at the whole solid, not just its outline. Compare it with a model you have handled.','觀察整個立體，不要只看外框。想想你曾拿過的模型。']},why:[`This is a ${solidNames1[solid][0].toLowerCase()}. Turning the model does not change its shape family.`,`這是${solidNames1[solid][1]}。轉動模型不會改變它所屬的立體類別。`]};
}}];

const additionCases2=[[248,176],[359,284],[465,278],[187,296],[596,187],[438,256],[126,237,148],[209,185,276],[347,128,219],[175,286,338],[264,197,158],[385,246,167]];
const smartCases2=[[198,37,2],[49,126,51],[275,46,25],[399,28,1],[147,63,53],[68,215,32],[299,84,1],[125,39,75],[47,326,53],[498,67,2],[236,59,64],[189,72,11]];
const subtractionCases2=[[52,27],[80,46],[73,38],[61,29],[94,57],[40,18],[85,49],[90,65],[63,47],[72,36],[50,24],[81,56]];
const chainCases2=[[82,37,18],[90,26,35],[74,28,19],[65,17,29],[91,46,18],[80,33,28],[72,25,18],[63,28,16],[95,48,27],[70,24,19],[86,39,28],[60,17,26]];
function arithmeticItem2(nums,op){const first=op==='+'?nums[0]+nums[1]:nums[0]-nums[1],answer=nums.length===2?first:op==='+'?first+nums[2]:first-nums[2],expr=nums.join(op==='+'?' + ':' − ');return {prompt:[`Calculate: ${expr}.`,`計算：${expr}。`],fields:[['answer','答案']],answer:[answer],marks:1,why:nums.length===2?[`${expr} = ${answer}. Align the place values; ${op==='+'?'exchange ten ones for one ten when needed':'exchange one ten for ten ones when needed'}.`,`${expr}＝${answer}。把相同數位對齊，按需要${op==='+'?'把十個一換成一個十':'把一個十換成十個一'}。`]:[`${nums[0]} ${op==='+'?'+':'−'} ${nums[1]} = ${first}; then ${first} ${op==='+'?'+':'−'} ${nums[2]} = ${answer}.`,`${nums[0]}${op==='+'?'＋':'－'}${nums[1]}＝${first}；再算${first}${op==='+'?'＋':'－'}${nums[2]}＝${answer}。`],arithmetic2N2:{nums:[...nums],op,hint:op==='+'?['Align ones, tens and hundreds. Remember any carried amount.','個位、十位、百位對齊，記得進位。']:['Work from left to right. Exchange a ten if there are too few ones.','由左至右計算；個位不夠減時，把一個十換成十個一。']}};}
const arithmeticFamilies2=[
{id:'addcarry2a',grade:2,code:'2N2',label:['Add up to three numbers','最多三個數的加法'],count:12,make(i){return arithmeticItem2(additionCases2[i],'+')}},
{id:'smartadd2a',grade:2,code:'2N2',label:['Choose a helpful addition pair','選擇方便先加的數對'],count:12,make(i){const [a,b,c]=smartCases2[i],pair=a+c,answer=pair+b;return {prompt:[`Find ${a} + ${b} + ${c}. First add the first and last numbers to make a convenient pair. Write that subtotal, then the total.`,`計算${a}＋${b}＋${c}。先把第一個和最後一個數相加，組成方便計算的數對。寫出這個小計，再寫總和。`],fields:[['pair subtotal','數對小計'],['total','總和']],answer:[pair,answer],marks:2,why:[`${a} + ${c} = ${pair}; ${pair} + ${b} = ${answer}. Changing the order and grouping of addends preserves the sum.`,`${a}＋${c}＝${pair}；${pair}＋${b}＝${answer}。改變加數次序和先加的數對，總和不變。`],arithmetic2N2:{nums:[a,b,c],op:'+',strategy:'outerPair',hint:['Look for a pair that makes a whole ten or hundred.','找出能合成整十或整百的數對。']}};}},
{id:'subborrow2a',grade:2,code:'2N2',label:['Subtract with borrowing','退位減法'],count:12,make(i){return arithmeticItem2(subtractionCases2[i],'−')}},
{id:'subchain2a',grade:2,code:'2N2',label:['Subtract three numbers left to right','三個數由左至右相減'],count:12,make(i){const q=arithmeticItem2(chainCases2[i],'−'),[a,b,c]=chainCases2[i];return {...q,prompt:[`Work from left to right: ${a} − ${b} − ${c}. Write the first subtraction result, then the final result.`,`由左至右計算：${a}－${b}－${c}。先寫第一次相減的結果，再寫最後結果。`],fields:[['first result','第一次結果'],['final result','最後結果']],answer:[a-b,a-b-c],marks:2};}},
{id:'addstory2a',grade:2,code:'2N2',label:['Addition word problems','加法文字題'],count:12,make(i){const ns=additionCases2[i],q=arithmeticItem2(ns,'+'),total=q.answer[0];return {...q,prompt:[`A library receives ${ns.map(n=>`${n} books`).join(', then ')}. How many books does it receive altogether?`,`圖書館先收到${ns[0]}本書，再收到${ns[1]}本${ns.length===3?`，之後又收到${ns[2]}本`:''}。共收到多少本書？`],fields:[['books','本書']],why:[`Add the separate deliveries: ${ns.join(' + ')} = ${total}. The library receives ${total} books altogether.`,`把各次收到的書相加：${ns.join('＋')}＝${total}。圖書館共收到${total}本書。`],arithmetic2N2:{...q.arithmetic2N2,story:true,explanationRequiredOffline:true}};}},
{id:'substory2a',grade:2,code:'2N2',label:['Subtraction word problems','減法文字題'],count:12,make(i){const ns=i<6?subtractionCases2[i]:chainCases2[i],q=arithmeticItem2(ns,'−'),[a,b,c]=ns,total=q.answer[0];return {...q,prompt:[`There are ${a} stickers. ${b} are given away${c===undefined?'':`, then another ${c} are given away`}. How many remain?`,`原有${a}張貼紙，送出${b}張${c===undefined?'':`，再送出${c}張`}。還剩多少張？`],fields:[['stickers','張貼紙']],why:[`${ns.join(' − ')} = ${total}. Subtract each group given away, from left to right. ${total} stickers remain.`,`${ns.join('－')}＝${total}。由左至右減去每次送出的貼紙，還剩${total}張。`],arithmetic2N2:{...q.arithmetic2N2,story:true,explanationRequiredOffline:true}};}}
];

const digitCases2=[[242,100],[242,10],[242,1],[304,100],[304,10],[590,1],[816,100],[680,10],[909,10],[999,100],[105,1],[730,10]];
const sequenceCases2=[[197,1],[298,1],[398,1],[598,1],[895,1],[995,1],[302,-1],[501,-1],[701,-1],[900,-1],[204,-1],[104,-1]];
const parityCases2=[105,240,402,999,307,590,816,701,980,463,528,655];
const compareCases2=[[305,350],[628,628],[700,699],[409,490],[807,807],[920,902],[199,200],[500,500],[610,601],[798,879],[999,999],[223,124]];
const orderCases2=[[[403,430,340],1],[[628,682,268],-1],[[105,150,501],1],[[709,790,907],-1],[[999,909,990],1],[[480,408,840],-1],[[351,315,135],1],[[762,726,672],-1],[[201,210,102],1],[[650,605,560],-1],[[898,889,988],1],[[432,423,324],-1]];
const numberFamilies2=[
{id:'digitvalue2a',grade:2,code:'2N1',label:['Value of a digit','數字所表示的值'],count:12,make(i){const [n,place]=digitCases2[i],digit=Math.floor(n/place)%10,value=digit*place,names=place===100?['hundreds','百']:place===10?['tens','十']:['ones','個'];return {prompt:[`In ${n}, what value does the digit in the ${names[0]} place represent?`,`在${n}中，${names[1]}位的數字表示多少？`],fields:[['value','值']],answer:[value],marks:1,why:[`The ${names[0]} digit is ${digit}. It represents ${value}.`,`在${names[1]}位的是${digit}，表示${value}。`],number2N1:{kind:'digitValue',n,place,digit,hint:['Read the named column, then give its value, not just its digit.','先看指定數位，再說出其值，不只是數字本身。']}};}},
{id:'sequence999a',grade:2,code:'2N1',label:['Count forwards and backwards to 999','999以內順數和倒數'],count:12,make(i){const [start,step]=sequenceCases2[i],ns=[start,start+step,start+step*2],answer=start+step*3;return {prompt:[`Count ${step>0?'forwards':'backwards'} by 1: ${ns.join(', ')}, ___.`,`每次${step>0?'順數':'倒數'}一個：${ns.join('、')}、___。`],fields:[['next number','下一個數']],answer:[answer],marks:1,why:[`One ${step>0?'more':'less'} than ${ns[2]} is ${answer}.`,`比${ns[2]}${step>0?'多':'少'}一是${answer}。`],number2N1:{kind:'sequence',start,step,hint:['Move just one number at a time, including when a hundreds boundary is crossed.','每次只數一個，跨過整百時也一樣。']}};}},
{id:'parity999a',grade:2,code:'2N1',label:['Odd or even three-digit numbers','三位數的單雙數'],count:12,make(i){const n=parityCases2[i],digit=n%10,even=n%2===0;return {prompt:[`Is ${n} odd or even?`,`判斷${n}是單數還是雙數。`],choices:['odd','even'],choiceLabels:{odd:['Odd','單數'],even:['Even','雙數']},answer:[even?'even':'odd'],marks:1,why:[`The ones digit is ${digit}, which is ${even?'even':'odd'}; ${n} is ${even?'even':'odd'}.`,`個位數字${digit}是${even?'雙數':'單數'}，所以${n}是${even?'雙數':'單數'}。`],number2N1:{kind:'parity',n,hint:['Look at the ones digit.','看個位數字。']}};}},
{id:'compare999a',grade:2,code:'2N1',label:['Choose a comparison symbol','選擇比較符號'],count:12,make(i){const [a,b]=compareCases2[i],answer=a<b?'<':a>b?'>':'=',base=['<','=','>'],shift=Math.floor(i/3)%3,choices=base.slice(shift).concat(base.slice(0,shift));return {prompt:[`Choose the symbol: ${a} ___ ${b}.`, `選出符號：${a} ___ ${b}。`],choices,answer:[answer],marks:1,why:[`${a} is ${answer==='<'?'less than':answer==='>'?'greater than':'equal to'} ${b}, so ${a} ${answer} ${b}.`,`${a}${answer==='<'?'小於':answer==='>'?'大於':'等於'}${b}，所以${a}${answer}${b}。`],number2N1:{kind:'comparison',a,b,hint:['Compare hundreds, then tens, then ones; equal digits throughout mean equal numbers.','先比百位，再比十位、個位；各位都一樣就是相等。'],oralComparisonRequiredOffline:true}};}},
{id:'order999a',grade:2,code:'2N1',label:['Order three three-digit numbers','排列三個三位數'],count:12,make(i){const [ns,d]=orderCases2[i],answer=[...ns].sort((a,b)=>d*(a-b));return {prompt:[`Put ${ns.join(', ')} in ${d===1?'smallest-to-largest':'largest-to-smallest'} order.`,`把${ns.join('、')}按${d===1?'由小至大':'由大至小'}排列。`],fields:[['first','第一個'],['second','第二個'],['third','第三個']],answer,marks:3,why:[`Compare hundreds, then tens, then ones: ${answer.join(d===1?' < ':' > ')}.`,`先比較百位，再比較十位和個位：${answer.join(d===1?'＜':'＞')}。`],number2N1:{kind:'order',shown:[...ns],direction:d,hint:['Find the smallest and largest first, then place the remaining number.','先找最小和最大的數，再放入餘下一個。'],oralComparisonRequiredOffline:true}};}}
];

const multiplicationStoryPairs2=[[4,6],[7,3],[2,5],[3,8],[5,4],[6,7],[8,2],[9,4],[10,3],[3,9],[1,8],[8,1],[5,0],[10,10],[9,9]];
const multiplicationFamilies2=[
 {id:'multfact2a',grade:2,code:'2N3',label:['Products from the 0–10 multiplication table','0至10乘法表的積'],count:121,make(i){
  const a=Math.floor(i/11),b=i%11,total=a*b;
  return {prompt:[`Calculate ${a} × ${b}.`, `計算 ${a} × ${b}。`],fields:[['product','積']],answer:[total],marks:1,
   why:[`${a} × ${b} = ${total}. The result is called the product.`,`${a} × ${b} = ${total}。乘法的結果稱為積。`],multiplicationFact:{a,b,total},
   practiceHint:['Use an equal-group picture, a known table fact or repeated addition to check. Multiplying by zero gives zero.','用等量分組圖、已知乘法表或連加核對。乘零的積是零。']};
 }},
 {id:'multstory2a',grade:2,code:'2N3',label:['Solve one-step multiplication stories','解答一步乘法情境題'],count:30,make(i){
  const [groups,each]=multiplicationStoryPairs2[i%15],total=groups*each,stickers=i<15;
  const prompt=stickers?[`There are ${groups} packets. Each packet has ${each} stickers. How many stickers are there altogether?`,`有${groups}包貼紙，每包有${each}張。共有多少張貼紙？`]:[`There are ${groups} tables. Each table has ${each} cups. How many cups are there altogether?`,`有${groups}張桌，每張放${each}隻杯。共有多少隻杯？`];
  return {prompt,fields:[[stickers?'stickers':'cups',stickers?'張':'隻']],answer:[total],marks:1,
   why:[`${groups} × ${each} = ${total}, or ${each} × ${groups} = ${total}.`,`${groups} × ${each} = ${total}，或${each} × ${groups} = ${total}。`],multiplicationStory:{groups,each,total,context:stickers?'stickers':'cups'},
   practiceHint:['Find the number of equal groups and how many are in each group. Either factor order gives the total.','找出組數及每組數量。兩個因數的次序均可求總數。']};
 }}
];

/* PROPOSAL: 2N4, not imported. Tests separate; physical/oral observations remain required.
   New range/actions: thousands digit value, thousand-boundary counting,
   four-digit parity/comparison, 200/250/500/1000 running counts. */
const fourDigitValues2=[1000,1008,2034,3204,4072,5080,6006,7007,8010,9000,9999,2041];
const boundaryCases2=[[997,1],[998,1],[999,1],[1002,-1],[1001,-1],[1000,-1],[1240,-100],[1140,-100],[1040,-100],[740,100],[840,100],[940,100]];
const compareCases4=[[1000,999],[3050,3500],[7007,7007],[9000,8999],[2040,2004],[9999,9998],[1008,1080],[4200,4020],[6000,6000],[8001,8010],[4506,4506],[1999,2000]];
function number4q(prompt,value,why,meta){const label=meta.thousandsValue?['thousands value','千位數字的值']:meta.boundarySequence?['next number','下一個數']:['total','總數'];return {prompt,fields:[label],answer:[value],marks:1,why,...meta};}
const fourDigitFamilies2=[
 {id:'thousandvalue2a',grade:2,code:'2N4',label:['Value of the thousands digit','千位數字的值'],count:12,make(i){const value=fourDigitValues2[i],digit=Number(String(value)[0]),answer=digit*1000;return number4q([`In ${value}, what value does the thousands digit ${digit} represent?`,`在${value}中，千位數字${digit}表示多少？`],answer,[`${digit} thousands represent ${answer}.`,`${digit}個千表示${answer}。`],{thousandsValue:{value,digit},practiceHint:['Each thousand is 1000. Count how many thousands the digit represents.','每個千是1000。想一想這個數字表示幾個千。']});}},
 {id:'cross1000seq2a',grade:2,code:'2N4',label:['Count across one thousand','跨過一千順數或倒數'],count:12,make(i){const [start,step]=boundaryCases2[i],shown=[start,start+step,start+2*step],answer=start+3*step;return number4q([`Count ${step>0?'forwards':'backwards'} in steps of ${Math.abs(step)}. What comes next? ${shown.join(', ')}, ___`,`每次${step>0?'加':'減'}${Math.abs(step)}，繼續${step>0?'順數':'倒數'}：${shown.join('、')}、___。`],answer,[`The next number is ${answer}. Keep the same step of ${Math.abs(step)}.`,`下一個數是${answer}，保持每次${Math.abs(step)}的間隔。`],{boundarySequence:{start,step,shown},practiceHint:[`Keep counting ${step>0?'forwards':'backwards'} by ${Math.abs(step)} from the last number shown, even across 1000.`,`由最後一個數繼續每次${step>0?'加':'減'}${Math.abs(step)}，跨過1000時也保持相同間隔。`]});}},
 {id:'parity4digit2a',grade:2,code:'2N4',label:['Four-digit odd and even numbers','四位單數和雙數'],count:12,make(i){const value=fourDigitValues2[i],ones=value%10,answer=ones%2?'odd':'even';return {prompt:[`Is ${value} odd or even?`,` ${value}是單數還是雙數？`],choices:['odd','even'],choiceLabels:{odd:['Odd','單數'],even:['Even','雙數']},answer:[answer],marks:1,why:[`Its ones digit is ${ones}, so it is ${answer}.`,`個位數字是${ones}，所以是${answer==='odd'?'單數':'雙數'}。`],parity4:{value,ones},practiceHint:['Look at the ones digit: 0, 2, 4, 6 and 8 make even numbers; 1, 3, 5, 7 and 9 make odd numbers.','看個位數字：0、2、4、6、8表示雙數；1、3、5、7、9表示單數。']};}},
 {id:'compare4digit2a',grade:2,code:'2N4',label:['Compare four-digit numbers','比較四位數'],count:12,make(i){const [a,b]=compareCases4[i],answer=a===b?'=':a>b?'>':'<';return {prompt:[`Choose the symbol: ${a} ___ ${b}.`,`選擇符號：${a} ___ ${b}。`],choices:['<','=','>'],answer:[answer],marks:1,why:[`${a} ${answer} ${b}. Compare the highest place where their digits differ, after comparing the number of digits.`,`${a} ${answer} ${b}。先比較位數，再由最高位比較不同的數字。`],compare4:{a,b},practiceHint:['Compare the number of digits first. If equal, compare from the highest place until digits differ; if all match, use =.','先比較位數。位數相同時，由最高位逐位比較；所有數字相同就用＝。']};}},
 {id:'groupcount4digit2a',grade:2,code:'2N4',label:['Running totals in larger groups','較大組別的累計數量'],count:12,make(i){const size=[200,250,500,1000][i%4],groups=[6,7,8][Math.floor(i/4)],totals=Array.from({length:groups},(_,k)=>(k+1)*size);return number4q([`Count ${groups} groups of ${size}. The running totals begin ${totals.slice(0,3).join(', ')}. Continue counting. What is the final total?`,`點算${groups}組，每組${size}。累計數量開始為${totals.slice(0,3).join('、')}。繼續分組點算，最後總數是多少？`],totals.at(-1),[totals.join(', '),totals.join('、')],{groupCount4:{size,groups},practiceHint:[`Keep adding ${size} for each new group. Count up to ${groups} groups.`,`每多一組就加${size}，一直數到${groups}組。`]});}}
];

/* Counting items award 1 mark per numeric field (2 total); either correct dollars or cents earns partial credit.
   answerUnitLabels must be preserved by key adapters.
   PROPOSAL ONLY: text/symbol tasks, not authentic note recognition; integer cents throughout. */
const priceRows2=[[2350,'twenty-three dollars and fifty cents','二十三元五角'],[20500,'two hundred and five dollars','二百零五元'],[99990,'nine hundred and ninety-nine dollars and ninety cents','九百九十九元九角'],[100000,'one thousand dollars','一千元'],[1020,'ten dollars and twenty cents','十元二角'],[5080,'fifty dollars and eighty cents','五十元八角'],[10010,'one hundred dollars and ten cents','一百元一角'],[50000,'five hundred dollars','五百元'],[68050,'six hundred and eighty dollars and fifty cents','六百八十元五角'],[70070,'seven hundred dollars and seventy cents','七百元七角'],[88080,'eight hundred and eighty dollars and eighty cents','八百八十元八角'],[12000,'one hundred and twenty dollars','一百二十元']];
const bundles2=[[[10000,'note'],[2000,'note'],[1000,'note'],[200,'coin'],[100,'coin'],[50,'coin'],[20,'coin'],[10,'coin']],[[50000,'note'],[10000,'note'],[5000,'note'],[2000,'note'],[1000,'coin'],[500,'coin'],[200,'coin'],[50,'coin']],[[50000,'note'],[50000,'note']],[[2000,'note'],[200,'coin'],[100,'coin'],[50,'coin']],[[1000,'note'],[1000,'coin'],[20,'coin']],[[10000,'note'],[5000,'note'],[50,'coin']],[[50000,'note'],[2000,'note'],[10,'coin']],[[100000,'note']],[[2000,'note'],[2000,'note'],[500,'coin']],[[10000,'note'],[10000,'note'],[200,'coin'],[20,'coin']],[[5000,'note'],[1000,'note'],[100,'coin'],[50,'coin']],[[50000,'note'],[10000,'note'],[10000,'note'],[1000,'coin']]];
// from single note, denomination requested, fixed extra notes, allowed exchange set
const exchanges2=[[10000,1000,[],0],[10000,2000,[],0],[10000,5000,[],0],[5000,1000,[],0],[2000,1000,[],0],[100000,50000,[],1],[100000,10000,[],1],[50000,10000,[],1],[10000,1000,[5000],0],[10000,1000,[2000],0],[100000,10000,[50000],1],[50000,10000,[10000,10000],1]];
function moneyText2(c){return '$'+Math.floor(c/100)+'.'+String(c%100).padStart(2,'0');}
const moneyFamilies2=[
 {id:'price1000read2a',grade:2,code:'2M3',label:['Read prices to $1000','讀出1000元以內標價'],count:12,make(i){const row=priceRows2[i],position=i%4,options=[row,...[1,3,5].map(k=>priceRows2[(i+k)%12])];const ordered=options.slice(4-position).concat(options.slice(0,4-position));const choices=['A','B','C','D'];return {prompt:[`How should the price ${moneyText2(row[0])} be read?`,`標價${moneyText2(row[0])}應怎樣讀？`],choices,choiceLabels:Object.fromEntries(choices.map((c,k)=>[c,ordered[k].slice(1)])),answer:[choices[position]],marks:1,why:[row[1],row[2]],practiceHint:['Read the dollars before the point and the two-digit cents part after it. For example, .50 means fifty cents, not five cents; .00 adds no cents.','小數點前讀元，後面的兩位讀仙。例如.50是五十仙，不是五仙；.00是沒有額外仙。'],priceRead2:{cents:row[0],optionCents:ordered.map(o=>o[0])}};}},
 {id:'moneycount1000a',grade:2,code:'2M3',label:['Count listed notes and coins to $1000','點算列出的鈔票硬幣至1000元'],count:12,make(i){const pieces=bundles2[i],cents=pieces.reduce((n,p)=>n+p[0],0);return {prompt:[`Count this list of money: ${pieces.map(([c,k])=>moneyText2(c)+' '+k).join('; ')}. State the dollars and remaining cents.`,`點算這組貨幣：${pieces.map(([c,k])=>moneyText2(c)+(k==='note'?'鈔票':'硬幣')).join('；')}。寫元數和餘下仙數。`],fields:[['dollars','元'],['cents','仙']],answer:[Math.floor(cents/100),cents%100],marks:2,answerUnitLabels:[['dollars','元'],['cents','仙']],practiceHint:['Count each listed value, not just the number of pieces. Keep dollars and cents separate, exchanging every 100 cents for 1 dollar; the final cents part is below 100.','逐件按面值點算，不只數有幾件。元和仙分開累計，每100仙換作1元，最後仙數須少於100。'],why:[`The total is ${moneyText2(cents)}.`,`總額為${moneyText2(cents)}。`],moneyCount2:{pieces,cents}};}},
 {id:'noteexchange2a',grade:2,code:'2M3',label:['Exchange notes within permitted groups','在指定組別內兌換鈔票'],count:12,make(i){const [from,to,fixed,group]=exchanges2[i],remaining=from-fixed.reduce((a,b)=>a+b,0),count=remaining/to;return {prompt:[`Exchange one ${moneyText2(from)} note for ${fixed.length?fixed.map(c=>'one '+moneyText2(c)+' note').join(' and ')+' and ':''}notes of ${moneyText2(to)}. How many ${moneyText2(to)} notes are needed${fixed.length?' in addition to the stated notes':''}?`,`把一張${moneyText2(from)}鈔票兌換成${fixed.length?fixed.map(c=>'一張'+moneyText2(c)+'鈔票').join('、')+'，以及':''}${moneyText2(to)}鈔票。${fixed.length?'除上述鈔票外，另':''}需要多少張${moneyText2(to)}鈔票？`],fields:[['notes','張']],answer:[count],marks:1,why:[`Count the received notes: their total value is ${moneyText2(from)}.`,`換得的鈔票總值與${moneyText2(from)}相同。`],practiceHint:['Keep the total value unchanged. Count the stated fixed notes first, then count the requested note value until you reach the original total. Do not add other denominations or cross exchange groups.','保持總值不變。先數指定已有的鈔票，再逐張累計所問面值，直到原總值。不加其他面值或跨組兌換。'],noteExchange2:{from,to,fixed,group}};}}
];

/* PROPOSAL ONLY, not imported. Numeric fields award one mark each (partial credit).
   All whole-number operands/intermediates/results <=999. Money stored in integer cents,
   displayed as separate dollar/cent quantities; no pupil decimal operation. */
const sub3Cases2=[[432,187],[500,268],[804,479],[701,356],[900,468],[603,278],[821,597],[100,99],[310,189],[620,285],[700,699],[941,586]];
const mixed3Cases2=[
 ...[[248,175,196],[399,200,198],[125,276,143],[510,189,278],[450,250,199],[99,501,287]].map(v=>({v,ops:['+','−']})),
 ...[[620,285,147],[500,268,199],[804,479,128],[701,356,208],[900,468,119],[603,278,217]].map(v=>({v,ops:['−','+']})),
 ...[[126,237,315],[248,175,126],[99,201,405],[302,198,199],[450,125,124],[100,200,300]].map(v=>({v,ops:['+','+']})),
 ...[[850,276,185],[900,127,264],[700,198,299],[602,197,205],[500,168,129],[999,458,327]].map(v=>({v,ops:['−','−']}))];
const changeCases2=[[1000,380],[2000,670],[5000,2840],[10000,7560],[1000,920],[2000,1450],[5000,1870],[10000,4990],[1000,450],[2000,1580],[5000,3250],[10000,8610]];
const step2=(a,op,b)=>op==='+'?a+b:a-b;
const moneyUnits2=(c,zh=false)=>zh?`${Math.floor(c/100)}元${c%100}仙`:`${Math.floor(c/100)} dollars ${c%100} cents`;
const arithmetic3Families2=[
 {id:'sub3borrow2a',grade:2,code:'2N5',label:['Three-digit subtraction with borrowing','三位數退位減法'],count:12,make(i){const [a,b]=sub3Cases2[i],answer=a-b;return {prompt:[`Calculate ${a} − ${b}.`,`計算${a} − ${b}。`],fields:[['difference','差']],answer:[answer],marks:1,why:[`${a} − ${b} = ${answer}. Check: ${answer} + ${b} = ${a}.`,`${a} − ${b} = ${answer}。核對：${answer} + ${b} = ${a}。`],practiceHint:['Align hundreds, tens and ones. If a place has too few units, regroup without changing the starting value; a zero may require regrouping through the next place.','百、十、個對齊。不夠減時退位但保持原值；遇零可能須從更高位退下。'],subtract3:{a,b}};}},
 {id:'mixed3steps2a',grade:2,code:'2N5',label:['Three-number addition/subtraction steps','三個數的加減步驟'],count:24,make(i){const {v,ops}=mixed3Cases2[i],[a,b,c]=v,first=step2(a,ops[0],b),final=step2(first,ops[1],c);return {prompt:[`Work left to right: ${a} ${ops[0]} ${b} ${ops[1]} ${c}. Enter the first result, then the final result.`,`由左至右計算：${a} ${ops[0]} ${b} ${ops[1]} ${c}。填第一步及最後結果。`],fields:[['first result','第一步結果'],['final result','最後結果']],answer:[first,final],marks:2,answerUnitLabels:[['first result','第一步結果'],['final result','最後結果']],why:[`${a} ${ops[0]} ${b} = ${first}; ${first} ${ops[1]} ${c} = ${final}.`,`${a} ${ops[0]} ${b} = ${first}；${first} ${ops[1]} ${c} = ${final}。`],practiceHint:['Use the first two numbers and the sign between them first. Then use that result with the last number and remaining sign. Do not add the last two numbers just because one sign is +.','先用首兩個數及中間符號，再用結果與最後一個數及餘下符號。不要因有加號便先加末兩數。'],mixed3:{v,ops}};}},
 {id:'mixedstory3digit2a',grade:2,code:'2N5',label:['Sequential-change addition/subtraction stories','連續變化加減情境'],count:12,make(i){const {v,ops}=mixed3Cases2[i],[a,b,c]=v,receiveFirst=ops[0]==='+',first=step2(a,ops[0],b),final=step2(first,ops[1],c);return {prompt:[`A class has ${a} stickers. It ${receiveFirst?'receives':'uses'} ${b}, then ${receiveFirst?'uses':'receives'} ${c}. How many are there after the first event and at the end?`,`班上有${a}張貼紙，先${receiveFirst?'收到':'用了'}${b}張，再${receiveFirst?'用了':'收到'}${c}張。第一件事後及最後各有多少張？`],fields:[['after first event (stickers)','第一件事後（張）'],['at the end (stickers)','最後（張）']],answer:[first,final],marks:2,answerUnitLabels:[['after first event (stickers)','第一件事後（張）'],['at the end (stickers)','最後（張）']],why:[`${a} ${ops[0]} ${b} = ${first} stickers; ${first} ${ops[1]} ${c} = ${final} stickers.`,`${a} ${ops[0]} ${b} = ${first}張；${first} ${ops[1]} ${c} = ${final}張。`],practiceHint:['Receiving increases the amount; using some decreases it. Follow the order of the two events and keep the amount after the first event.','收到會增加，用了會減少。按兩件事的次序，保留第一件事後的數量。'],mixedStory3:{v,ops}};}},
 {id:'moneychange2a',grade:2,code:'2N5',label:['Find change in dollars and cents','用元和仙求找贖'],count:12,make(i){const [paid,cost]=changeCases2[i],change=paid-cost;return {prompt:[`An item costs ${moneyUnits2(cost)}. You pay ${moneyUnits2(paid)}. What change should you receive? Enter dollars and remaining cents.`,`物品售${moneyUnits2(cost,true)}，付${moneyUnits2(paid,true)}。應找多少？填元數及餘下仙數。`],fields:[['dollars','元'],['cents','仙']],answer:[Math.floor(change/100),change%100],marks:2,answerUnitLabels:[['dollars','元'],['cents','仙']],why:[`The change is ${moneyUnits2(change)}. Cost and change together equal the amount paid.`,`找贖是${moneyUnits2(change,true)}，價錢加找贖等於付款。`],practiceHint:['Keep dollars and cents labelled. You may represent one dollar as 100 cents before subtracting, or count up from the cost to the payment. Do not subtract the cents as if they were dollars.','保留元和仙單位，可先把1元表示成100仙再減，或從價錢往上數至付款。不要把仙當成元減。'],moneyChange2:{paid,cost}};}}
];

/* Proposal2N6. d1..10, quotient0..10; no zero divisor, fractions or long division.
 New generic numeric two-field questions explicitly carry2marks. share2a unchanged. */
const remainderCases2=[[7,3],[13,4],[17,5],[23,6],[29,7],[39,8],[47,9],[56,10],[3,5],[19,2],[26,3],[38,4]];
const groupingCases2=[[12,3],[14,4],[20,5],[23,6],[30,10],[35,8],[0,4],[3,5],[18,2],[27,9],[31,7],[49,6]];
function divisionRecord2(n,d){return {dividend:n,divisor:d,quotient:Math.floor(n/d),remainder:n%d};}
const divisionFamilies2=[
{id:'divfact2a',grade:2,code:'2N6',label:['Division facts from the 0–10 table','0至10乘法表的除法'],count:110,make(i){const d=Math.floor(i/11)+1,q=i%11,n=d*q;return {prompt:[`Calculate ${n} ÷ ${d}.`,`計算${n}÷${d}。`],fields:[['quotient','商']],answer:[q],marks:1,why:[`${d} × ${q} = ${n}, so ${n} ÷ ${d} = ${q}.`,`${d}×${q}＝${n}，所以${n}÷${d}＝${q}。`],division2N6:{...divisionRecord2(n,d),kind:'fact',hint:['Which table fact gives the dividend? Zero shared among a nonzero number of groups gives zero each.','哪個乘法表算式得到被除數？零平均分給非零組數，每組是零。']}};}},
{id:'divremain2a',grade:2,code:'2N6',label:['Division with a remainder','有餘數的除法'],count:12,make(i){const [n,d]=remainderCases2[i],m=divisionRecord2(n,d);return {prompt:[`Calculate ${n} ÷ ${d}. Give the quotient and remainder.`,`計算${n}÷${d}，寫出商及餘數。`],fields:[['quotient','商'],['remainder','餘數']],answerUnitLabels:[['quotient','商'],['remainder','餘數']],answer:[m.quotient,m.remainder],marks:2,why:[`${d} × ${m.quotient} = ${n-m.remainder}; ${m.remainder} remains, fewer than ${d}.`,`${d}×${m.quotient}＝${n-m.remainder}；餘${m.remainder}，比${d}少。`],division2N6:{...m,kind:'remainder',hint:['Find the largest whole number of groups that fits. The remainder must be smaller than the divisor.','找最多能分成多少完整組，餘數必須比除數小。']}};}},
{id:'divgroup2a',grade:2,code:'2N6',label:['Make equal-size groups','按每組數量分組'],count:12,make(i){const [n,d]=groupingCases2[i],m=divisionRecord2(n,d);return {prompt:[`There are ${n} pencils. Put exactly ${d} pencils in each full pack. How many full packs can you make, and how many pencils stay unpacked?`,`有${n}枝鉛筆，每個完整包裝放${d}枝。最多可裝滿多少包？還有多少枝未裝？`],fields:[['full packs','完整包數'],['unpacked pencils','未裝鉛筆']],answerUnitLabels:[['full packs','完整包數'],['unpacked pencils','未裝鉛筆']],answer:[m.quotient,m.remainder],marks:2,why:[`${m.quotient} full packs use ${n-m.remainder} pencils; ${m.remainder} remain unpacked.`,`裝滿${m.quotient}包，共用${n-m.remainder}枝；餘${m.remainder}枝未裝。`],division2N6:{...m,kind:'grouping',explanationRequiredOffline:true,hint:['Here the divisor is pencils per pack; the quotient counts full packs, not pencils per child.','此題除數是每包枝數，商是完整包數，不是每人枝數。']}};}},
{id:'divcheck2a',grade:2,code:'2N6',label:['Check division using multiplication','用乘法驗算除法'],count:12,make(i){const [n,d]=[...groupingCases2][i],m=divisionRecord2(n,d),used=d*m.quotient;const pairs=[[d,m.quotient],[d,m.quotient+1],[d===10?9:d+1,m.quotient+1]],shift=i%3,ordered=pairs.slice(3-shift).concat(pairs.slice(0,3-shift)),choices=['A','B','C'];return {prompt:[`${n} ÷ ${d} gives quotient ${m.quotient} and remainder ${m.remainder}. Which multiplication checks the number in the full groups?`,`${n}÷${d}的商是${m.quotient}，餘數是${m.remainder}。哪個乘法算式可核對完整組內的數量？`],choices,choiceLabels:Object.fromEntries(choices.map((c,j)=>{const [a,b]=ordered[j],text=`${a} × ${b} = ${a*b}`;return [c,[text,text]]})),answer:[choices[shift]],marks:1,why:[`${d} × ${m.quotient} = ${used}; adding the remaining ${m.remainder} gives ${n}. The remainder is smaller than ${d}.`,`${d}×${m.quotient}＝${used}，加上餘下${m.remainder}得${n}。餘數比${d}小。`],division2N6:{...m,kind:'check',hint:['Multiply the divisor by the quotient, then account for the remainder.','把除數乘商，再加回餘數。']}};}}
];

const families = [
  ...divisionFamilies2,
  ...fourDigitFamilies2,
  ...moneyFamilies2,
  ...arithmetic3Families2,
  ...multiplicationFamilies2,
  ...numberFamilies2,
  ...arithmeticFamilies2,
  ...solidFamilies1,
  ...moneyFamilies,
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
  {id:"compare100a",grade:1,code:"1N3",label:["Compare numbers to 100","比較100以內的數"],count:12,make(i){
    const pairs=[[42,37],[58,53],[29,92],[71,67],[84,89],[100,90],[46,64],[33,39],[78,72],[95,59],[61,60],[27,24]];
    const [a,b]=pairs[i],larger=Math.max(a,b),sameTens=Math.floor(a/10)===Math.floor(b/10);
    const step=sameTens
      ?[`Both numbers have ${Math.floor(a/10)} tens. Compare the ones: ${a%10} and ${b%10}. ${larger} is larger.`,`兩個數都有${Math.floor(a/10)}個十。比較個位：${a%10}和${b%10}。${larger}較大。`]
      :[`Compare the tens first: ${a} has ${Math.floor(a/10)} tens and ${b} has ${Math.floor(b/10)} tens. ${larger} is larger.`,`先比較十位：${a}有${Math.floor(a/10)}個十，${b}有${Math.floor(b/10)}個十。${larger}較大。`];
    return {prompt:[`Which number is larger, ${a} or ${b}? Choose the number.`,`哪個數較大：${a}還是${b}？選出該數。`],choices:[String(a),String(b)],answer:[String(larger)],marks:1,why:step,numberComparison:{a,b,larger}};
  }},
  {id:"tensones1a",grade:1,code:"1N3",label:["Build numbers with tens and ones","用十位和個位組成數字"],count:12,make(i){
    const values=[21,34,40,57,69,72,80,93,26,51,88,99],value=values[i],tens=Math.floor(value/10),ones=value%10;
    return {prompt:["These bundles of ten and loose counters show a number. Write the number.","這些十粒一捆的圓片和單粒圓片表示一個數。寫出這個數。"],fields:[["",""]],answer:[value],marks:1,why:[`${tens} tens make ${tens*10}; add ${ones} ones to get ${value}.`,`${tens}個十是${tens*10}；加上${ones}個一，得到${value}。`],figure:{kind:"tensOnes",tens,ones},numberTo100:true};
  }},
  {id:"countgroups1a",grade:1,code:"1N3",label:["Count groups of 2, 5 or 10","按2、5或10粒一組點算"],count:12,make(i){
    const cases=[[2,7],[2,9],[2,10],[2,8],[5,4],[5,7],[5,9],[5,6],[10,3],[10,5],[10,8],[10,6]];
    const [size,groups]=cases[i],total=size*groups;
    return {prompt:[`Each box has ${size} counters. Count the counters in groups of ${size}. How many are there altogether?`,`每盒有${size}粒圓片。每${size}粒一組點算，圖中共有多少粒圓片？`],fields:[["counters","粒圓片"]],answer:[total],marks:1,why:[`Count ${groups} groups of ${size}: ${Array.from({length:groups},(_,j)=>(j+1)*size).join(", ")}. There are ${total} counters.`,`按每組${size}粒順數${groups}組：${Array.from({length:groups},(_,j)=>(j+1)*size).join("、")}。共有${total}粒圓片。`],figure:{kind:"countGroups",size,groups},numberTo100:true};
  }},
  {id:"sequence100a",grade:1,code:"1N3",label:["Count forwards and backwards to 100","100以內順數和倒數"],count:12,make(i){
    const cases=[[37,1],[48,1],[68,1],[97,1],[74,1],[24,1],[51,-1],[80,-1],[34,-1],[70,-1],[24,-1],[99,-1]];
    const [start,step]=cases[i],a=start,b=a+step,c=b+step,answer=c+step,dir=step===1?["forwards","順數"]:["backwards","倒數"];
    return {...numeric([`Count ${dir[0]} by 1: ${a}, ${b}, ${c}, ___`,`每次${dir[1]}一個數：${a}、${b}、${c}、___。`],["",""],answer,[`Count one ${step===1?"more":"less"} than ${c}: ${c} ${step===1?"+":"−"} 1 = ${answer}.`,`從${c}${step===1?"順數":"倒數"}一個數：${c} ${step===1?"+":"−"} 1 = ${answer}。`]),inlineAnswer:true,numberTo100:true,numberSequence:{start,step}};
  }},
  {id:"oddeven100a",grade:1,code:"1N3",label:["Odd or even to 100","辨認100以內的單數和雙數"],count:12,make(i){
    const values=[21,34,47,50,63,78,85,92,99,40,56,73],value=values[i],even=value%2===0,unit=value%10;
    return {prompt:[`Is ${value} odd or even? Choose one.`,`數字${value}是單數還是雙數？選一個。`],choices:["odd","even"],choiceLabels:{odd:["Odd","單數"],even:["Even","雙數"]},answer:[even?"even":"odd"],marks:1,why:[`The units digit is ${unit}. ${unit} is ${even?"even":"odd"}, so ${value} is ${even?"even":"odd"}.`,`個位數字是${unit}。${unit}是${even?"雙數":"單數"}，所以${value}是${even?"雙數":"單數"}。`],oddEven100:{value}};
  }},
  {id:"ordernums100a",grade:1,code:"1N3",label:["Order three numbers to 100","排列三個100以內的數"],count:12,make(i){
    const cases=[[[42,37,59],1],[[58,53,81],-1],[[29,92,64],1],[[71,67,100],-1],[[84,89,80],1],[[100,90,99],-1],[[46,64,44],1],[[33,39,36],-1],[[78,72,75],1],[[95,59,85],-1],[[61,60,69],1],[[24,27,21],-1]];
    const [shown,direction]=cases[i],ordered=[...shown].sort((a,b)=>direction*(a-b)),up=direction===1;
    return {prompt:[`Put ${shown.join(", ")} in ${up?"ascending (smallest to largest)":"descending (largest to smallest)"} order. Write one number in each box.`,`把${shown.join("、")}按${up?"由小至大":"由大至小"}的次序排列。每格寫一個數。`],fields:[["first","第一個"],["second","第二個"],["third","第三個"]],answer:ordered,marks:1,why:[`Compare tens first, then units: ${ordered.join(" → ")}.`,`先比較十位，再比較個位：${ordered.join(" → ")}。`],numberOrder:{shown,direction}};
  }},
  {id:"numberwords100a",grade:1,code:"1N3",label:["Write numerals from number words","看數詞寫數字"],count:12,make(i){
    const cases=[[21,"twenty-one","二十一"],[30,"thirty","三十"],[47,"forty-seven","四十七"],[58,"fifty-eight","五十八"],[60,"sixty","六十"],[73,"seventy-three","七十三"],[86,"eighty-six","八十六"],[99,"ninety-nine","九十九"],[100,"one hundred","一百"],[42,"forty-two","四十二"],[65,"sixty-five","六十五"],[90,"ninety","九十"]];
    const [value,en,zh]=cases[i];
    return {prompt:[`Write “${en}” using digits.`,`把「${zh}」寫成數字。`],fields:[["",""]],answer:[value],marks:1,why:[`“${en}” is written ${value}.`,`「${zh}」寫成${value}。`],numberTo100:true,numberWords:{value,en,zh}};
  }},
  {id:"estimate100a",grade:1,code:"1N3",label:["Estimate counters using a group of ten","參考十粒一組估計圓片"],count:12,make(i){
    const amounts=[18,27,34,42,49,56,63,71,78,84,37,66],count=amounts[i],nearest=Math.round(count/10)*10;
    const options=nearest===20?[10,20,40]:[nearest-20,nearest,nearest+20],choices=options.map((_,j)=>options[(j+i)%3]);
    return {prompt:["The small box shows 10 counters. About how many counters are in the large box? Choose the best estimate without counting each one.","小盒有10粒圓片。大盒大約有多少粒圓片？不用逐粒點算，選出最合適的估計數目。"],choices:choices.map(String),answer:[String(nearest)],marks:1,why:[`Compare the large box with the reference group of 10. It has ${count} counters, so about ${nearest} is the closest estimate.`,`把大盒與10粒圓片的參考組比較。大盒有${count}粒，最接近的估計數目是約${nearest}粒。`],figure:{kind:"estimateCounters",count},estimateCount:{count,nearest}};
  }},
  {id:"carryadd1a",grade:1,code:"1N4",label:["Add two numbers with carrying","兩個數相加並進位"],count:12,make(i){
    const pairs=[[27,15],[38,24],[46,17],[19,32],[57,26],[64,18],[25,37],[48,33],[36,29],[18,45],[53,19],[72,19]];
    const [a,b]=pairs[i],ones=a%10+b%10,tens=Math.floor(a/10)+Math.floor(b/10)+1,total=a+b;
    return {...numeric([`Add ${a} + ${b}. Write the sum.`,`計算${a} + ${b}，寫出和。`],["",""],total,[`Ones: ${a%10} + ${b%10} = ${ones}. Regroup 10 ones as 1 ten. Tens: ${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}. The sum is ${total}.`,`個位：${a%10} + ${b%10} = ${ones}，把10個一換成1個十。十位：${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}。和是${total}。`]),numberTo100:true,carryAddition:{a,b,total}};
  }},
  {id:"noborrow1a",grade:1,code:"1N4",label:["Subtract without borrowing","不退位的減法"],count:12,make(i){
    const pairs=[[58,24],[76,35],[49,27],[83,42],[65,13],[92,51],[70,30],[57,25],[88,66],[64,34],[95,73],[61,21]];
    const [a,b]=pairs[i],difference=a-b;
    return {...numeric([`Subtract ${a} − ${b}. Write the difference.`,`計算${a} − ${b}，寫出差。`],["",""],difference,[`Ones: ${a%10} − ${b%10} = ${a%10-b%10}. Tens: ${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(a/10)-Math.floor(b/10)}. So ${a} − ${b} = ${difference}. Check: ${difference} + ${b} = ${a}.`,`個位：${a%10} − ${b%10} = ${a%10-b%10}。十位：${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(a/10)-Math.floor(b/10)}。所以${a} − ${b} = ${difference}。驗算：${difference} + ${b} = ${a}。`]),numberTo100:true,noBorrowSubtraction:{a,b,difference}};
  }},
  {id:"checksub1a",grade:1,code:"1N4",label:["Check subtraction by addition","用加法驗算減法"],count:12,make(i){
    const pairs=[[58,24],[76,35],[49,27],[83,42],[65,13],[92,51],[70,30],[57,25],[88,66],[64,34],[95,73],[61,21]];
    const [a,b]=pairs[i],difference=a-b,correct=`${difference} + ${b} = ${a}`;
    const options=[correct,`${a} + ${b} = ${difference}`,`${difference} + ${a} = ${b}`];
    const choices=options.map((_,j)=>options[(j+i)%3]);
    return {prompt:[`The subtraction is ${a} − ${b} = ${difference}. Which addition sentence checks this answer?`,`減法算式是${a} − ${b} = ${difference}。哪道加法算式可以驗算這個答案？`],choices,answer:[correct],marks:1,
      why:[`Add the difference to the number taken away: ${difference} + ${b} = ${a}. This recovers the starting number, so the subtraction answer is correct.`,`把差加上減去的數：${difference} + ${b} = ${a}。結果等於原來的數，所以減法的答案正確。`],subtractionCheck:{a,b,difference}};
  }},
  {id:"threeadd1a",grade:1,code:"1N4",label:["Add three numbers from left to right","由左至右計算三個數的加法"],count:12,make(i){
    const triples=[[10,6,2],[18,12,5],[24,15,8],[36,14,7],[17,23,19],[28,11,6],[45,12,9],[19,21,15],[32,18,14],[27,16,12],[38,24,7],[41,19,13]];
    const [a,b,c]=triples[i],first=a+b,total=first+c;
    return {...numeric([`Add ${a} + ${b} + ${c} from left to right. Write the sum.`,`由左至右計算${a} + ${b} + ${c}，寫出和。`],["",""],total,[`First ${a} + ${b} = ${first}. Then ${first} + ${c} = ${total}.`,`先算${a} + ${b} = ${first}，再算${first} + ${c} = ${total}。`]),numberTo100:true,threeAddition:{a,b,c,first,total}};
  }},
  {id:"groupadd1a",grade:1,code:"1N4",label:["Group three addends in two ways","用兩種方法組合三個加數"],count:12,make(i){
    const triples=[[17,23,7],[26,14,9],[18,12,8],[31,18,2],[24,16,5],[35,14,6],[28,22,7],[42,17,3],[13,27,4],[36,13,7],[21,29,6],[32,27,3]];
    const [a,b,c]=triples[i],first=a+b,last=b+c,total=a+b+c;
    return {prompt:[`Use ${a} + ${b} + ${c}. Add the first two numbers, then the last two numbers. Write both subtotals and the total you get either way.`,`利用${a} + ${b} + ${c}。分別把前兩個數和後兩個數相加，寫出兩個小計，再寫出兩種方法所得的總和。`],fields:[["First two","前兩個數"],["Last two","後兩個數"],["Total either way","兩種方法的總和"]],answer:[first,last,total],marks:1,why:[`First two: ${a} + ${b} = ${first}, then ${first} + ${c} = ${total}. Last two: ${b} + ${c} = ${last}, then ${a} + ${last} = ${total}. Both ways give ${total}.`,`前兩個數：${a} + ${b} = ${first}，再算${first} + ${c} = ${total}。後兩個數：${b} + ${c} = ${last}，再算${a} + ${last} = ${total}。兩種方法都得到${total}。`],groupedAddition:{a,b,c,first,last,total}};
  }},
  {id:"group10p1a",grade:1,code:"1N4",label:["Group counters to make whole tens","組合圓片湊成整十"],count:12,make(i){
    const examples=[[[24,6,3],"first"],[[23,6,4],"last"],[[17,3,8],"first"],[[33,8,2],"last"],[[36,4,5],"first"],[[25,7,3],"last"],[[28,2,7],"first"],[[29,9,1],"last"],[[43,7,2],"first"],[[38,4,6],"last"],[[55,5,9],"first"],[[32,5,5],"last"]];
    const [[a,b,c],pair]=examples[i],subtotal=pair==="first"?a+b:b+c,total=a+b+c;
    const step=pair==="first"?[`${a} + ${b} = ${subtotal}; then ${subtotal} + ${c} = ${total}.`,`先算${a} + ${b} = ${subtotal}，再算${subtotal} + ${c} = ${total}。`]:[`${b} + ${c} = ${subtotal}; then ${a} + ${subtotal} = ${total}.`,`先算${b} + ${c} = ${subtotal}，再算${a} + ${subtotal} = ${total}。`];
    return {prompt:["The three boxes show groups of counters. One adjacent pair adds to a number ending in 0. Add that pair first. Write its subtotal, then the total of all three groups.","三個盒子分別裝着圓片。其中相鄰的兩組相加會得到個位是0的數。先算這兩組，寫出小計，再寫出三組的總和。"],fields:[["Pair subtotal","兩組的小計"],["Total","總和"]],answer:[subtotal,total],marks:1,why:[`${step[0]} Grouping the pair makes the next addition easier.`,`${step[1]}先組合這兩組，接下來的加法較容易。`],figure:{kind:"groupingBoxes",counts:[a,b,c]},groupTen:{a,b,c,pair,subtotal,total}};
  }},
  {id:"columnadd1a",grade:1,code:"1N4",label:["Complete a carrying addition column","完成進位加法直式"],count:12,make(i){
    const pairs=[[27,15],[38,24],[46,17],[19,32],[57,26],[64,18],[25,37],[48,33],[36,29],[18,45],[53,19],[72,19]];
    const [a,b]=pairs[i],result=a+b,ones=a%10+b%10,tens=Math.floor(a/10)+Math.floor(b/10)+1;
    return {prompt:["Complete the addition in columns. Write one digit in each answer box.","完成加法直式。每個答案格填一個數字。"],fields:[["Tens","十位"],["Ones","個位"]],answer:[Math.floor(result/10),result%10],marks:1,why:[`Ones: ${a%10} + ${b%10} = ${ones}; write ${result%10} in the ones column and carry 1 ten. Tens: ${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}. So ${a} + ${b} = ${result}.`,`個位：${a%10} + ${b%10} = ${ones}，在個位寫${result%10}，並進1個十。十位：${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}。所以${a} + ${b} = ${result}。`],columnForm:{a,b,operation:"add",result}};
  }},
  {id:"columnsub1a",grade:1,code:"1N4",label:["Complete a subtraction column without borrowing","完成不退位減法直式"],count:12,make(i){
    const pairs=[[58,24],[76,35],[49,27],[83,42],[65,13],[92,51],[70,30],[57,25],[88,66],[64,34],[95,73],[61,21]];
    const [a,b]=pairs[i],result=a-b;
    return {prompt:["Complete the subtraction in columns. Write one digit in each answer box.","完成減法直式。每個答案格填一個數字。"],fields:[["Tens","十位"],["Ones","個位"]],answer:[Math.floor(result/10),result%10],marks:1,why:[`Ones: ${a%10} − ${b%10} = ${result%10}. Tens: ${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(result/10)}. So ${a} − ${b} = ${result}. Check: ${result} + ${b} = ${a}.`,`個位：${a%10} − ${b%10} = ${result%10}。十位：${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(result/10)}。所以${a} − ${b} = ${result}。驗算：${result} + ${b} = ${a}。`],columnForm:{a,b,operation:"subtract",result}};
  }},
  {id:"storyadd1a",grade:1,code:"1N4",label:["Solve a two-number addition story","解答兩個數相加的文字題"],count:12,make(i){
    const pairs=[[24,13],[28,15],[35,22],[37,26],[41,18],[46,17],[52,24],[55,28],[63,15],[64,19],[21,37],[39,24]];
    const [a,b]=pairs[i],result=a+b,scenario=i%4;
    const prompts=[
      [`A shelf has ${a} storybooks. A teacher puts ${b} more storybooks on it. How many storybooks are on the shelf now?`,`書架上原有${a}本故事書，老師再放上${b}本。現在書架上有多少本故事書？`],
      [`There are ${a} red balloons and ${b} blue balloons at a party. How many balloons are there altogether?`,`派對上有${a}個紅色氣球和${b}個藍色氣球。共有多少個氣球？`],
      [`A garden has ${a} yellow flowers and ${b} purple flowers. How many flowers are there altogether?`,`花園裏有${a}朵黃色花和${b}朵紫色花。共有多少朵花？`],
      [`There are ${a} pupils on a bus. Another ${b} pupils get on. How many pupils are on the bus now?`,`巴士上原有${a}名學生，再有${b}名學生上車。現在巴士上有多少名學生？`]
    ];
    const units=[["storybooks","本故事書"],["balloons","個氣球"],["flowers","朵花"],["pupils","名學生"]];
    return {...numeric(prompts[scenario],units[scenario],result,[`${a} + ${b} = ${result}.`,`計算${a} + ${b} = ${result}。`]),numberTo100:true,wordProblem:{a,b,operation:"add",result,scenario}};
  }},
  {id:"storysub1a",grade:1,code:"1N4",label:["Solve a two-number subtraction story","解答兩個數相減的文字題"],count:12,make(i){
    const pairs=[[58,23],[74,31],[69,26],[85,42],[96,54],[67,25],[48,16],[79,37],[93,51],[56,14],[88,36],[65,22]];
    const [a,b]=pairs[i],result=a-b,scenario=i%4;
    const prompts=[
      [`A shop has ${a} pencils. It sells ${b} pencils. How many pencils are left?`,`商店原有${a}枝鉛筆，賣出${b}枝。還剩多少枝鉛筆？`],
      [`There are ${a} apples in a basket. ${b} apples are taken out. How many apples remain?`,`籃裏原有${a}個蘋果，拿走${b}個。還剩多少個蘋果？`],
      [`A library has ${a} picture books. ${b} are borrowed. How many picture books remain?`,`圖書館原有${a}本圖畫書，借出${b}本。還剩多少本圖畫書？`],
      [`There are ${a} pupils in a hall. ${b} pupils leave. How many pupils remain in the hall?`,`禮堂裏原有${a}名學生，${b}名學生離開。禮堂裏還有多少名學生？`]
    ];
    const units=[["pencils","枝鉛筆"],["apples","個蘋果"],["picture books","本圖畫書"],["pupils","名學生"]];
    return {...numeric(prompts[scenario],units[scenario],result,[`${a} − ${b} = ${result}. Check: ${result} + ${b} = ${a}.`,`計算${a} − ${b} = ${result}。驗算：${result} + ${b} = ${a}。`]),numberTo100:true,wordProblem:{a,b,operation:"subtract",result,scenario}};
  }},
  {id:"lengthdirect1a",grade:1,code:"1M1",label:["Compare aligned ribbon lengths","比較對齊的絲帶長度"],count:12,make(i){return measureCompareQuestion(i,"length",false)}},
  {id:"distancedirect1a",grade:1,code:"1M1",label:["Compare straight distances","比較直線距離"],count:12,make(i){return measureCompareQuestion(i,"distance",false)}},
  {id:"lengthunits1a",grade:1,code:"1M1",label:["Compare ribbon lengths in paperclip units","用回形針作單位比較絲帶長度"],count:12,make(i){return measureCompareQuestion(i,"length",true)}},
  {id:"distanceunits1a",grade:1,code:"1M1",label:["Compare distances in paperclip units","用回形針作單位比較距離"],count:12,make(i){return measureCompareQuestion(i,"distance",true)}},
  {id:"lengthcm1a",grade:1,code:"1M3",label:["Measure a ribbon in centimetres","用厘米量度絲帶"],count:12,make(i){return centimetreQuestion(i,"length",false)}},
  {id:"distancecm1a",grade:1,code:"1M3",label:["Measure a straight distance in centimetres","用厘米量度直線距離"],count:12,make(i){return centimetreQuestion(i,"distance",false)}},
  {id:"comparelengthcm1a",grade:1,code:"1M3",label:["Compare ribbon lengths in centimetres","比較絲帶的厘米長度"],count:12,make(i){return centimetreQuestion(i,"length",true)}},
  {id:"comparedistancecm1a",grade:1,code:"1M3",label:["Compare straight distances in centimetres","比較直線距離的厘米長度"],count:12,make(i){return centimetreQuestion(i,"distance",true)}},
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
  {id:"cup3a",grade:3,code:"3M3",label:["Read a measuring cup","讀取量杯刻度"],count:12,make(i){
    const amounts=[50,100,150,250,350,500,100,200,300,500,700,1000];
    const max=i<6?500:1000,step=i<6?50:100,major=step*2,amount=amounts[i];
    const lower=Math.floor(amount/major)*major,upper=lower===amount?amount:lower+major;
    const reading=lower===amount
      ?[`The water line meets the ${amount} mL mark.`,`水面對着${amount} mL的刻度。`]
      :[`The labelled marks are ${lower} and ${upper} mL. The water line meets the tick halfway between them, so it shows ${amount} mL.`,`有數字的刻度是${lower}和${upper} mL。水面對着中間刻度，所以讀數是${amount} mL。`];
    const cup={max,step,major,amount};
    return {prompt:["How much water is in the measuring cup? Read the scale and write the number. The unit mL is printed for you.","量杯裏有多少水？讀取刻度，寫出數字。單位 mL 已印在旁邊。"],
      fields:[["mL","mL"]],answer:[amount],marks:1,why:reading,
      measuringCup:cup,figure:{kind:"measuringCup",...cup}};
  }},
  {id:"bar3a",grade:3,code:"3D1",label:["Read a bar chart","閱讀棒形圖"],count:12,make(i){
    const cases=[
      [2,"horizontal",[4,2,3],0],[2,"vertical",[1,5,3],2],[2,"horizontal",[0,2,4],0],[2,"vertical",[3,1,5],1],
      [1,"horizontal",[4,2,3],1],[1,"vertical",[0,3,5],0],[1,"horizontal",[6,2,4],2],[1,"vertical",[2,5,1],1],
      [5,"horizontal",[2,4,3],1],[5,"vertical",[1,3,5],0],[5,"horizontal",[0,5,2],2],[5,"vertical",[4,2,6],2]
    ];
    const [scale,orientation,steps,target]=cases[i],categories=[["Walking","步行"],["Bus","巴士"],["Train","港鐵"]],value=steps[target]*scale;
    const chart={scale,orientation,steps,target,categories,title:["How our class travels to school","本班上學方式"]};
    return {prompt:[`How many pupils chose ${categories[target][0].toLowerCase()}? Read that bar and write the number.`,`有多少名學生選擇${categories[target][1]}？讀取該棒形，寫出人數。`],fields:[["pupils","名學生"]],answer:[value],marks:1,
      why:[`The ${categories[target][0].toLowerCase()} bar reaches ${steps[target]} step${steps[target]===1?"":"s"} from zero. Each step represents ${scale} pupil${scale===1?"":"s"}, so ${steps[target]} × ${scale} = ${value} pupils.`,`「${categories[target][1]}」的棒形由零起到第${steps[target]}格。每格代表${scale}人，所以${steps[target]} × ${scale} = ${value}人。`],
      barChart:chart,figure:{kind:"barChart",...chart}};
  }},
  {id:"bar4a",grade:4,code:"4D1",label:["Read a scaled bar chart","閱讀大數量棒形圖"],count:12,make(i){
    const cases=[
      [10,"horizontal",[3,5,2],1],[10,"vertical",[0,4,6],2],[10,"horizontal",[6,1,3],0],[10,"vertical",[2,5,4],1],
      [50,"horizontal",[4,2,5],0],[50,"vertical",[1,6,3],2],[50,"horizontal",[0,3,5],1],[50,"vertical",[5,4,2],0],
      [100,"horizontal",[2,4,6],2],[100,"vertical",[5,1,3],0],[100,"horizontal",[3,0,4],1],[100,"vertical",[4,6,2],2]
    ];
    const [scale,orientation,steps,target]=cases[i],categories=[["Art","美術"],["Music","音樂"],["Sport","體育"]],value=steps[target]*scale;
    const chart={scale,orientation,steps,target,categories,title:["Pupils choosing an activity","選擇活動的學生人數"]};
    return {prompt:[`How many pupils chose ${categories[target][0].toLowerCase()}? Use the scale on the chart.`,`有多少名學生選擇${categories[target][1]}？請按棒形圖的刻度讀取人數。`],fields:[["pupils","名學生"]],answer:[value],marks:1,
      why:[`The ${categories[target][0].toLowerCase()} bar reaches ${steps[target]} step${steps[target]===1?"":"s"} from zero. Each step is ${scale} pupils, so ${steps[target]} × ${scale} = ${value} pupils.`,`「${categories[target][1]}」的棒形由零起到第${steps[target]}格。每格代表${scale}人，所以${steps[target]} × ${scale} = ${value}人。`],
      barChart:chart,figure:{kind:"barChart",...chart}};
  }},
  {id:"fracadd5a",grade:5,code:"5N2",label:["Add unlike fractions","異分母分數加法"],count:12,make(i){
    const cases=[[1,2,1,4],[1,3,1,6],[1,4,1,8],[1,2,1,3],[1,3,1,4],[2,5,1,10],[1,6,1,3],[3,8,1,4],[1,2,1,6],[2,3,1,6],[1,5,3,10],[3,4,1,8]];
    const [a,b,c,d]=cases[i],gcd=(x,y)=>y?gcd(y,x%y):x,l=b*d/gcd(b,d),left=a*l/b,right=c*l/d,sum=left+right,reduce=gcd(sum,l),n=sum/reduce,den=l/reduce;
    return {prompt:[`Calculate ${a}/${b} + ${c}/${d}. Write the answer in simplest form.`,`計算 ${a}/${b} + ${c}/${d}。把答案寫成最簡分數。`],fields:[["numerator","分子"],["denominator","分母"]],answer:[n,den],marks:1,
      why:[`${a}/${b} = ${left}/${l} and ${c}/${d} = ${right}/${l}. Add: ${left}/${l} + ${right}/${l} = ${sum}/${l}${reduce>1?`; reduce to ${n}/${den}`:""}.`,`把兩個分數通分：${a}/${b} = ${left}/${l}，${c}/${d} = ${right}/${l}。相加得 ${sum}/${l}${reduce>1?`，約簡為 ${n}/${den}`:""}。`],fractionAddition:{a,b,c,d,n,den}};
  }},
  {id:"equation5a",grade:5,code:"5A2",label:["Solve a simple equation","解簡易方程"],count:12,make(i){
    const solutions=[12,8,17,6,15,9,14,7,18,11,16,10],offsets=[7,4,8,3,6,5,9,2,7,6,4,8],x=solutions[i],b=offsets[i],subtract=i>=6,c=subtract?x-b:x+b,sign=subtract?"−":"+",inverse=subtract?"+":"−";
    return {prompt:[`Solve x ${sign} ${b} = ${c}. Write the value of x.`,`解方程 x ${sign} ${b} = ${c}，寫出 x 的值。`],fields:[["x =","x ="]],answer:[x],marks:1,
      why:[`Apply the same operation to both sides: x = ${c} ${inverse} ${b} = ${x}. Check: ${x} ${sign} ${b} = ${c}.`,`等號兩邊同時進行相同運算：x = ${c} ${inverse} ${b} = ${x}。驗算：${x} ${sign} ${b} = ${c}。`],simpleEquation:{x,b,c,subtract}};
  }},
  {id:"purchasestory5a",grade:5,code:"5A2",label:["Write an equation for a purchase","根據購物情境列方程"],count:12,make(i){
    const cases=[[7,19],[5,23],[9,32],[12,40],[6,18],[14,50],[8,15],[11,24],[6,19],[15,27],[9,31],[13,38]];
    const [b,c]=cases[i],subtract=i>=6,x=subtract?b+c:c-b,sign=subtract?"−":"+",equation=`x ${sign} ${b} = ${c}`;
    const prompt=subtract
      ?[`After buying a book for $${b}, a pupil has $${c} left. Let x be the dollars the pupil had before buying the book. Write an equation using x. Do not solve it.`,`一名學生買了一本售價${b}元的書後，還剩${c}元。設 x 是買書前有的元數。用 x 列出方程，不用求解。`]
      :[`A notebook and a pen cost $${c} altogether. The pen costs $${b}. Let x be the notebook's price in dollars. Write an equation using x. Do not solve it.`,`一本筆記簿和一枝筆共售${c}元，筆售${b}元。設 x 是筆記簿的價錢（元）。用 x 列出方程，不用求解。`];
    return {prompt,fields:[["Equation","方程"]],answer:[equation],marks:1,
      why:subtract
        ?[`Starting money minus the book's $${b} cost equals the $${c} left: ${equation}. Check with x = ${x}: ${x} − ${b} = ${c}.`,`原有的錢減去書價${b}元，等於剩下的${c}元：${equation}。代入 x = ${x} 驗算：${x} − ${b} = ${c}。`]
        :[`Notebook price plus pen price equals the total: ${equation}. Check with x = ${x}: ${x} + ${b} = ${c}.`,`筆記簿價錢加筆價等於總價：${equation}。代入 x = ${x} 驗算：${x} + ${b} = ${c}。`],
      purchaseEquation:{b,c,x,subtract}};
  }},
  {id:"triarea5a",grade:5,code:"5M1",label:["Area of a triangle","三角形面積"],count:12,make(i){
    const cases=[[8,5],[6,4],[10,3],[12,7],[14,5],[16,4],[9,6],[7,8],[11,4],[13,6],[5,8],[15,4]];
    const [base,height]=cases[i],area=base*height/2,triangle={base,height,apex:[120,95,150,135][i%4]};
    return {prompt:[`Find the area of this triangle. Its base is ${base} cm and its perpendicular height is ${height} cm. The drawing is not to scale.`,`求這個三角形的面積。底邊長${base}厘米，對應的垂直高是${height}厘米。圖形不依比例繪畫。`],fields:[["cm²","平方厘米"]],answer:[area],marks:1,
      why:[`Use the base and its perpendicular height: ${base} × ${height} ÷ 2 = ${area} cm².`,`用底邊和對應的垂直高：${base} × ${height} ÷ 2 = ${area} 平方厘米。`],triangleArea:triangle,figure:{kind:"triangleArea",...triangle}};
  }},
  {id:"volume5a",grade:5,code:"5M2",label:["Volume of a cuboid","長方體體積"],count:12,make(i){
    const cases=[[4,3,2],[5,2,3],[6,4,2],[3,3,4],[5,4,3],[7,2,4],[8,3,2],[4,4,5],[6,5,3],[9,2,3],[5,5,4],[7,3,5]];
    const [length,width,height]=cases[i],volume=length*width*height,cuboid={length,width,height};
    return {prompt:[`Find the volume of this cuboid. Its length is ${length} cm, width ${width} cm and height ${height} cm. The drawing is not to scale.`,`求這個長方體的體積。長${length}厘米、闊${width}厘米、高${height}厘米。圖形不依比例繪畫。`],fields:[["cm³","立方厘米"]],answer:[volume],marks:1,
      why:[`One layer has ${length} × ${width} = ${length*width} cubic centimetres. There are ${height} layers, so ${length} × ${width} × ${height} = ${volume} cm³.`,`每層有${length} × ${width} = ${length*width}個立方厘米，共${height}層，所以${length} × ${width} × ${height} = ${volume}立方厘米。`],cuboidVolume:cuboid,figure:{kind:"cuboidVolume",...cuboid}};
  }},
  {id:"circle5a",grade:5,code:"5S1",label:["Identify a radius","辨認半徑"],count:9,make(i){
    const letters=["A","B","C"],answer=letters[i%3],rotation=[0,90,180,270][i%4];
    const parts=["radius","diameter","chord"],segments=letters.map((letter,j)=>({letter,kind:parts[(j-i%3+3)%3]}));
    const circleParts={centre:[150,120],radius:75,rotation,segments};
    return {prompt:["Which labelled line segment is a radius of the circle? Choose one.","圖中哪一條標示的線段是圓的半徑？選一個。"],choices:letters,answer:[answer],marks:1,
      why:[`${answer} joins the centre O to one point on the circle. A diameter passes through O and has both ends on the circle. A chord joins two points on the circle without necessarily passing through O.`,`${answer}由圓心O連到圓上的一點。直徑穿過圓心O，兩端都在圓上。弦連接圓上的兩點，但不一定穿過圓心O。`],circleParts,figure:{kind:"circleParts",...circleParts}};
  }},
  {id:"per1",grade:4,code:"4M1",label:["Rectangle perimeter","長方形周界"],count:16,make(i){
    const a=12+i,b=5+i%6;
    return numeric([`A rectangular book cover is ${a} cm long and ${b} cm wide. What is its perimeter?`,`長方形書套長${a}厘米、闊${b}厘米。它的周界是多少厘米？`],["cm","厘米"],2*(a+b),`(${a} + ${b}) × 2 = ${2*(a+b)}`);
  }},
  {id:"permissing4a",grade:4,code:"4M1",label:["Find a missing rectangle side","求長方形未知邊長"],count:12,make(i){
    const pairs=[[18,5],[16,7],[20,8],[14,6],[21,9],[17,8],[24,7],[19,6],[15,9],[22,10],[25,11],[23,8]];
    const [length,width]=pairs[i],missing=i%2===0?"width":"length",known=missing==="width"?length:width;
    const answer=missing==="width"?width:length,perimeter=2*(length+width);
    return {prompt:[`A rectangle has a perimeter of ${perimeter} cm. One ${missing==="width"?"long":"short"} side is ${known} cm. What is the length of the missing ${missing==="width"?"short":"long"} side? Use the diagram.`,`一個長方形的周界是${perimeter}厘米。一條${missing==="width"?"長":"短"}邊長${known}厘米。根據圖示，求未知的${missing==="width"?"短":"長"}邊長。`],fields:[["cm","厘米"]],answer:[answer],marks:1,
      why:[`Half the perimeter is ${perimeter} ÷ 2 = ${length+width} cm. Subtract the known side: ${length+width} − ${known} = ${answer} cm.`,`周界的一半是${perimeter} ÷ 2 = ${length+width}厘米。減去已知邊長：${length+width} − ${known} = ${answer}厘米。`],
      missingSide:{length,width,missing,known,perimeter},figure:{kind:"missingSide",length,width,missing,known,perimeter}};
  }},
  {id:"factor1",grade:4,code:"4N3",label:["Identifying factors","辨認因數"],count:12,make(i){
    const n=[12,16,18,20,24,27,28,30,32,36,40,42][i];
    const options=Array.from({length:8},(_,j)=>j+2), good=options.filter(x=>n%x===0).slice(0,2),bad=options.filter(x=>n%x!==0).slice(0,2);
    return {prompt:[`Select every factor of ${n} in the list.`,`選出下列所有${n}的因數。`],multi:true,choices:[...good,...bad].sort((a,b)=>a-b).map(String),answer:good.map(String),why:[good.map(x=>`${x} × ${n/x} = ${n}`).join(", "),good.map(x=>`${x} × ${n/x} = ${n}`).join("；")]};
  }},
  {id:"factorpair4a",grade:4,code:"4N3",label:["Explain a factor pair","用乘法說明因數配對"],count:12,make(i){
    const cases=[[12,3],[16,4],[18,9],[20,5],[24,6],[27,3],[28,7],[30,5],[32,4],[36,6],[40,1],[42,42]];
    const [target,factor]=cases[i],other=target/factor;
    return {prompt:[`Complete the multiplication sentence to show why ${factor} is a factor of ${target}: ${factor} × ___ = ${target}.`,`完成乘法算式，說明為甚麼${factor}是${target}的因數：${factor} × ___ = ${target}。`],fields:[["",""]],answer:[other],marks:1,inlineAnswer:true,
      why:[`${factor} × ${other} = ${target} exactly. The factors ${factor} and ${other} form a pair because the product is ${target} with no remainder.`,`因為${factor} × ${other} = ${target}，積剛好是${target}，沒有餘數，所以${factor}和${other}是一對因數。`],factorPair:{target,factor,other}};
  }},
  {id:"pct1",grade:6,code:"6N3",label:["Finding a percentage","求百分比"],count:15,retired:true,make(i){return percentageQuestion(i)}},
  {id:"pct2",grade:6,code:"6N4",label:["Finding a percentage","求百分比"],count:15,make(i){return percentageQuestion(i)}},
  {id:"speed6a",grade:6,code:"6M4",label:["Speed after converting minutes","先換算分鐘再求速率"],count:12,make(i){
    const cases=[[30,24],[45,36],[90,90],[120,140],[150,150],[180,210],[15,12],[75,75],[105,126],[135,162],[90,72],[180,144]];
    const [minutes,distance]=cases[i],hours=minutes/60,speed=distance/hours;
    return {prompt:[`A vehicle travels ${distance} km in ${minutes} minutes at a constant speed. What is its speed in km/h? Convert the time to hours first.`,`一輛車以固定速率在${minutes}分鐘行駛${distance}公里。它的速率是多少公里／小時？先把時間換算為小時。`],fields:[["km/h","公里／小時"]],answer:[speed],marks:1,
      why:[`${minutes} ÷ 60 = ${hours} hours. Speed = distance ÷ time = ${distance} ÷ ${hours} = ${speed} km/h.`,`先把分鐘換算為小時：${minutes} ÷ 60 = ${hours}小時。速率 = 距離 ÷ 時間 = ${distance} ÷ ${hours} = ${speed}公里／小時。`],speedTime:{minutes,distance,hours,speed}};
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
    if(!f || extra.length || !/^(0|[1-9]\d*)$/.test(index) || +index>=f.count)return [];
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
  app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+title+'</h1><nav class="downloads">'+[1,2,3,4,5,6].map(n=>'<a href="'+customLink([],"build",n)+'">'+level(n)+'</a>').join("")+'</nav><h2>'+level(year)+'</h2>'+(year===1?'<div class="builder-presets"><p class="builder-preset"><button type="button" id="warmup-preset">'+t("Use five-minute warm-up","使用五分鐘熱身題")+'</button> <span>'+t("Three quick questions on counting, sequences and addition.","三題數數、順數和加法題。")+'</span></p><p class="builder-preset"><button type="button" id="exit-preset">'+t("Use six-question exit ticket","使用六題離堂小測")+'</button> <span>'+t("A ready-to-edit set on numbers to 20 and addition.","可編輯的二十以內數和加法題組。")+'</span></p></div>':'')+'<form id="mix">'+list.map(f=>'<label class="field">'+local(f.label)+' <select name="'+f.id+'">'+[0,1,2,3,4,5].map(n=>'<option '+(n===(ids.length?selected.filter(q=>q.f===f).length:1)?"selected":"")+'>'+n+'</option>').join("")+'</select></label>').join("")+'<p><button>'+t("Generate quiz","產生小測")+'</button></p><p role="status" id="notice"></p></form>';
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


