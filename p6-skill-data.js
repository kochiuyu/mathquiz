/* Twelve reviewed contexts per skill, reused at three provisional teaching demands. */
((root)=>{
const source=typeof P6SkillSeeds!=='undefined'?P6SkillSeeds:require('./p6-skill-seeds.js');
const graders=typeof module!=='undefined'?require('vm').runInNewContext(['marking.js','number6.js','algebra6.js'].map(f=>require('fs').readFileSync(__dirname+'/'+f,'utf8')).join('\n')+';({scoreNumber6,scoreAlgebra6,parseAlgebra6,numericAnswer,measureAnswer})'):root;
const levels={easy:['Easy · guided','容易 · 有引導'],normal:['Normal · apply','一般 · 應用'],difficult:['Difficult · reason','較難 · 推理']},questions=[];
const gcd=(a,b)=>b?gcd(b,a%b):(a<0n?-a:a);
const rat=x=>{if(Array.isArray(x)){let[n,d]=x.map(BigInt);if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];}let s=String(x),n,d;if(s.includes('/'))[n,d]=s.split('/').map(BigInt);else if(s.includes('.')){const p=s.split('.');n=BigInt(p.join(''));d=10n**BigInt(p[1].length);}else{n=BigInt(s);d=1n;}return rat([n,d]);};
const add=(a,b)=>{a=rat(a);b=rat(b);return rat([a[0]*b[1]+b[0]*a[1],a[1]*b[1]]);},mul=(a,b)=>{a=rat(a);b=rat(b);return rat([a[0]*b[0],a[1]*b[1]]);},sub=(a,b)=>add(a,mul(b,'-1')),div=(a,b)=>{b=rat(b);return mul(a,[b[1],b[0]]);},fmt=x=>{const[n,d]=rat(x);return d===1n?String(n):n+'/'+d;};
const F=(label,x)=>{const[n,d]=rat(x);if(n<0n)throw Error('Negative extra '+label);return{label,answer:fmt([n,d]),numberSpec:{mode:d===1n?'integer':'fraction',expected:n+'/'+d}};};
const C=(label,options,answer,i)=>{const k=i%options.length,order=options.map((_,j)=>(j+k)%options.length);return{label,options:order.map(j=>options[j]),answer:String(order.indexOf(answer))};};
/* Contextual checks derived from the written operands. */
function numberExtras6(id,q,i,H){
 const {F,C,rat,add,sub,mul,div,fmt,parseAlgebra6}=H,m=q.numberModel6,out=[],put=(en,zh,x)=>out.push(F([en,zh],x));
 if(['decshiftleft6a','decshiftright6a'].includes(id)){const factor=div('1',m.b);put('Multiplication factor equivalent to the stated division','與指定除法等值的乘法因數',factor);}
 if(id==='decdivide6a'){let [bn,bd]=rat(m.b),k=1n;while(k%bd!==0n)k*=10n;if(bd===1n){put(`Share the SAME total into twice as many equal portions: amount per portion in ${q.fields[0][0]}?`,`把相同總量平均分成原來兩倍份數，每份有多少${q.fields[0][1]}？`,div(m.a,mul(m.b,'2')));put(`Total amount needed to fill ONE MORE portion at the ORIGINAL amount per portion, in ${q.fields[0][0]}`,`按原來每份的量，多加一份所需的總量（${q.fields[0][1]}）`,mul(div(m.a,m.b),add(m.b,'1')));}else{put('Dividend after multiplying BOTH operands by the smallest power of 10 that makes the divisor a whole number','兩個數同乘最小的10次方，使除數成整數後的被除數',mul(m.a,String(k)));put('Divisor in that equivalent calculation','該等值算式的除數',mul(m.b,String(k)));}}
 if(id==='decmixed6a'){const e=m.expression,br=e.match(/\(([^()]+)\)/),s=br?br[1]:e.match(/\d+(?:\.\d+)?\s*[*/]\s*\d+(?:\.\d+)?/)[0],z=s.match(/([\d.]+)\s*([+*/-])\s*([\d.]+)/);put('Value of the FIRST operation required by the written order','按所寫次序必須首先運算的結果',({'+':add,'-':sub,'*':mul,'/':div})[z[2]](z[1],z[3]));}
 if(id==='decround6a'||id==='fractiondecimal6a'&&m.places!==null){const value=id==='decround6a'?div(m.a,m.b):rat(m.value),p=m.places,k=10n**BigInt(p),[n,d]=rat(value),floor=n*k/d;put(`Greatest multiple of ${p===1?'0.1':'0.01'} NOT ABOVE the exact value`,`不大於準確值的最大${p===1?'0.1':'0.01'}倍數`,[floor,k]);put(`Smallest multiple of ${p===1?'0.1':'0.01'} NOT BELOW the exact value`,`不小於準確值的最小${p===1?'0.1':'0.01'}倍數`,[(n*k+d-1n)/d,k]);}
 if(id==='decspend6a')put('Extra money needed to buy ONE more complete pack than the maximum','比最多整包數再多買一包所欠的金額',sub(mul(add(q.answer[0],'1'),m.price),m.budget));
 if(id==='decfraction6a'){const dp=(m.decimal.split('.')[1]||'').length;put(`Numerator BEFORE reducing, using denominator ${10**dp} from the WRITTEN decimal places`,`按所寫小數位數，用分母${10**dp}時約分前的分子`,mul(m.value,String(10**dp)));}
 if(id==='fractiondecimal6a'&&m.places===null){const [n,d]=rat(m.value);put(`Check: your exact decimal multiplied by ${d}` ,`驗算：準確小數乘${d}`,String(n));}
 if(id==='fractioncompare6a'){const [a,b]=rat(m.a),[c,d]=rat(m.b);put(`Cross-product: numerator of ${m.a} × denominator of ${m.b}`,`交叉積：${m.a}分子×${m.b}分母`,[a*d,1n]);put(`Other cross-product: numerator of ${m.b} × denominator of ${m.a}`,`另一交叉積：${m.b}分子×${m.a}分母`,[c*b,1n]);}
 if(id==='pctmeaning6a')put('How many items are in the NEW collection?','新一批有多少件？',div(mul(String(m.whole),m.percent),'100'));
 if(id==='pctdecimal6a'||id==='pctfraction6a')put('Amount represented by this ratio when the reference whole is 1000','參考整體為1000時，此比率所代表的數量',mul(m.percent,'10'));
 if(id==='pctrelation6a')put('Unmarked quantity in the SAME whole','同一整體中未標記的數量',sub(m.whole,m.part));
 if(id==='pctquantity6a'){const part=div(mul(m.whole,m.percent),'100'),d=sub(m.whole,part);put('Absolute difference between the target count and reference count','目標數量與參考數量相差多少',rat(d)[0]<0n?mul(d,'-1'):d);}
 if(id==='pctchange6a')put('Amount of the increase/decrease, NOT the final count','增加／減少的數量，不是最後數量',div(mul(m.whole,m.percent),'100'));
 if(id==='equationtypes6a'||id==='equationcheck6a'){const candidate=add(m.solution,'1'),lhs=parseAlgebra6(m.equation.split('=')[0],'x');put(`Check a different candidate x=${fmt(candidate)}: value of the ORIGINAL left side`,`核對另一候選值x=${fmt(candidate)}：原式左邊的值`,add(mul(lhs.a,candidate),lhs.b));}
 if(id==='equationmodel6a')put('Additional task: now solve your direct equation and give x','額外任務：再解所列直接方程，填x的值',m.solution);
 if(id==='pct2'){const ns=q.prompt[0].match(/\d+/g).map(Number);put('Number who did NOT choose badminton','沒有選擇羽毛球的人數',String(ns[0]-ns[1]));put('Percentage who did NOT choose badminton (number before %)','沒有選擇羽毛球的百分比（百分號前數字）',String(100-q.answer[0]));}
 if(id==='speed6a')put('Journey duration in HOURS','行程時間（小時）',[BigInt(q.speedTime.minutes),60n]);
 if(id==='mean1'){const ns=q.prompt[0].match(/\d+/g).map(Number);put('Total books lent over the three days','三天借出的總本數',String(ns.reduce((a,b)=>a+b,0)));}
 return out;
}

/* Private contextual Difficult extension. No runtime globals or candidate writes. */
function measuresExtras6(skill,q,index){
 const m=q.measure6;if(!m)return [];const out=[],gcd=(a,b)=>b?gcd(b,a%b):a;
 const rat=x=>{if(Array.isArray(x))return x;const s=String(x);if(s.includes('/'))return s.split('/').map(BigInt);if(s.includes('.')){let [a,b]=s.split('.');return [BigInt(a+b),10n**BigInt(b.length)];}return [BigInt(s),1n];};
 const mul=(a,b)=>{a=rat(a);b=rat(b);return [a[0]*b[0],a[1]*b[1]];},div=(a,b)=>{a=rat(a);b=rat(b);return [a[0]*b[1],a[1]*b[0]];},sub=(a,b)=>{a=rat(a);b=rat(b);return [a[0]*b[1]-b[0]*a[1],a[1]*b[1]];};
 const num=(en,zh,x)=>{let[n,d]=rat(x),g=gcd(n,d);n/=g;d/=g;out.push({label:[en,zh],answer:d===1n?String(n):n+'/'+d,numberSpec:{mode:d===1n?'integer':'fraction',expected:n+'/'+d}});};
 const choose=(en,zh,opts,correct)=>{let order=opts.map((_,j)=>(j+index)%opts.length);out.push({label:[en,zh],options:order.map(j=>opts[j]),answer:String(order.indexOf(correct))});};
 switch(skill){
 case 'angleconcept6a':
  if(m.case<2){const angle=Number(q.prompt[0].match(/(\d+)°/)[1]);num('How many degrees remain to complete one full turn from the stated turn?','由題述轉動再轉多少度才完成一周？',360-angle);}
  else if(m.case===2){const name=q.prompt[0].match(/∠([A-Z]{3})/)[1];choose('Which reversed three-letter name denotes the same angle?','哪個倒序三字母名稱表示同一個角？',[[name.split('').reverse().join(''),name.split('').reverse().join('')],[name[1]+name[0]+name[2],name[1]+name[0]+name[2]],[name[0]+name[2]+name[1],name[0]+name[2]+name[1]]],0);}
  else choose('Follow the same marked path backwards, from B to A. What is its direction?','沿同一標示路徑倒行，由B到A，方向是甚麼？',[['Clockwise','順時針'],['Anticlockwise','逆時針'],['No turn','沒有轉動']],m.turn>0?0:1);break;
 case 'protractor6a':num('From A to B, take the other direction around the vertex instead of the marked path. How many degrees is that turn?','由A到B改沿頂點另一方向轉動，不走標示路徑，這個轉角有多少度？',360-Math.abs(m.turn));break;
 case 'anglecompare6a':num('What is the difference between the two measured angles, in degrees?','兩個已量角度相差多少度？',Math.abs(m.a-m.b));break;
 case 'capacityvolume6a':{
  let capacity=m.case===3?m.dims.reduce((a,b)=>a*b):m.value,unit=m.case===0||m.case===3?'cm³':'L';if(m.case===1)capacity=mul(capacity,1000);
  num(`The stated liquid/container amount is shared equally between two containers. What is each share in ${unit}?`,`把題述液體／容量平均分給兩個容器，每份有多少${unit}？`,div(capacity,2));break;}
 case 'displacement6a':
  if(m.case===1){num('What is the internal base area of this tank, in cm²?','這個水箱內部底面積是多少cm²？',m.length*m.width);num('What is the increase in water depth, in cm?','水深增加多少cm？',m.after-m.before);}
  else {let v=m.case===0?m.after-m.before:m.collected;num('A second identical fully submerged insoluble object displaces the same amount. What is the combined displaced volume of both objects, in mL?','另一個相同、不溶解且完全浸沒的物件排開同樣水量，兩件物件共排開多少mL水？',v*2);}break;
 case 'displacementmethod6a':{
  const c=m.case;choose('Which modification or check specifically makes this scenario suitable for measuring the whole solid volume?','哪項改動或檢查針對本情況，能讓排水法量度整件固體體積？',c===1?[["Keep this insoluble object completely below the surface; subtract any support's displaced volume","把此不溶物件完全放在水面以下，扣除支架排水量"],["Read while part remains above water","部分仍在水面以上時讀數"],["Use the object's mass as its volume","把質量當作體積"]]:c===2?[["Use a safe liquid that does not dissolve this object, with full submersion","改用不會溶解此物件的安全液體，並完全浸沒"],["Wait for it to dissolve completely","等待它完全溶解"],["Measure only the remaining piece and call it the original volume","只量剩餘部分卻當作原本體積"]]:[["Check no trapped air, no lost displaced water, and read the displaced volume only","檢查沒有困住氣泡、排水沒有流失，且只讀被排開水量"],["Count the vessel's initial water as solid volume","把容器原有水量算作固體體積"],["Lift half the object out before reading","讀數前把物件一半拿出水面"]],0);break;}
 case 'piratio6a':num('For a second model with twice this diameter and the SAME approximate circumference-to-diameter ratio, what is its circumference in cm?','另一模型直徑是原來兩倍，並採用相同的近似周長與直徑比，其周長是多少cm？',mul(m.circumference,2));break;
 case 'circlecircum6a':num(m.givenDiameter?'What radius in cm must be used in C = 2πr?':'What diameter in cm must be used in C = πd?',m.givenDiameter?'用C＝2πr時應使用多少cm半徑？':'用C＝πd時應使用多少cm直徑？',m.givenDiameter?m.r:2*m.r);break;
 case 'inversecircle6a':num(m.givenDiameter?'Also find the radius in cm to check the radius–diameter relationship.':'Also find the diameter in cm to check the radius–diameter relationship.',m.givenDiameter?'另求半徑cm，核對半徑與直徑關係。':'另求直徑cm，核對半徑與直徑關係。',m.givenDiameter?m.r:2*m.r);break;
 case 'circleboundary6a':{const frac=['1/2','1/4','1','1/2'][m.shape],straight=[2*m.r,2*m.r,2*m.length,2*m.length+2*m.r][m.shape];num('What is the TOTAL curved boundary length in cm, using the stated π?','用指定π，所有曲邊總長是多少cm？',mul(mul(m.pi,2*m.r),frac));num('What is the TOTAL exposed straight boundary length in cm, excluding internal joins?','不計內部接縫，所有外露直邊總長是多少cm？',straight);break;}
 case 'timeconvert6a':num(`Two equal periods each last the given original time. What is their combined duration in ${q.fields[0][0]}?`,`兩段等長時段各長題述原有時間，合共多少${q.fields[0][1]}？`,mul(q.number6[0].expected,2));break;
 case 'timeinterval6a':num(m.case===0?'Express the journey duration in minutes only, to check both duration fields.':m.case===1?'How many minutes after midnight is the FINISH time?':'How many minutes after midnight is the START time?',m.case===0?'把行程長度只用分鐘表示，以核對兩個時段答案。':m.case===1?'結束時間是午夜後多少分鐘？':'開始時間是午夜後多少分鐘？',m.case===0?m.duration:m.case===1?m.end:m.start);break;
 case 'speedmeaning6a':{const units=m.unit==='m/s'?['metres','米','seconds','秒']:m.unit==='km/h'?['kilometres','公里','hours','小時']:['tiles','格地磚','equally timed claps','等時拍手'];num(`At this uniform rate, how many ${units[0]} are travelled in 3 ${units[2]}?`,`保持這均勻速率，3${units[3]}走多少${units[1]}？`,m.value*3);break;}
 case 'speedcompare6a':
  if(m.case===1)num('If model A maintained its original average speed, how many seconds would it need to travel 40 m instead of 20 m?','模型A保持原來平均速率，走40m而不是20m需要多少秒？',m.a*2);
  else num(m.case===0?'If A maintained its original average speed, how far would it travel in twice the stated duration, in metres?':'Maintaining the original average pace, how many tiles would A cover in twice the stated number of equally timed claps?',m.case===0?'模型A保持原來平均速率，在原來兩倍時間內走多少米？':'模型A保持原來平均步速，在原來兩倍等時拍手次數內走多少格地磚？',m.a*2);break;
 case 'speedgraph6a':num('From 4 s to 6 s, what is the distance INCREASE in metres?','由第4秒至第6秒，距離增加多少米？',m.points[3][1]-m.points[2][1]);num('What is the uniform segment speed from 4 s to 6 s, in m/s?','第4秒至第6秒線段的均勻速率是多少m/s？',div(m.points[3][1]-m.points[2][1],2));break;
 case 'speedproblem6a':num(`If the model travelled at a constant speed equal to its original average speed for TWICE the original travel time, how far would it travel in ${m.du}?`,`假如模型以等於原來平均速率的固定速率行走，時間是原來兩倍，會走多少${m.du}？`,m.distance*2);break;
 case 'circleareamodel6a':num('Split EACH shown equal piece into two equal pieces without discarding paper. How many equal pieces are there now?','把圖中每個等份再平均分成兩份，不丟掉紙張，現在共有多少等份？',m.parts*2);choose('After this finer division, which statement about THIS circle is justified?','把此圓再細分後，哪個說法合理？',[["Its area is unchanged; alternating finer pieces better approximates a rectangle-like shape","面積不變；把更細等份交錯排列，更接近長方形"],["Its area doubles because the piece count doubles","份數加倍，所以面積加倍"],["The finite curved pieces become an exact rectangle","有限曲邊小塊已變成精確長方形"]],0);break;
 case 'circlearea6a':num('What is the square of the radius, in cm², BEFORE multiplication by π?','乘π之前，半徑平方是多少cm²？',m.r*m.r);break;
 case 'fractioncirclearea6a':num('What is the area of the UNSHADED remainder of the whole circle, in cm², using the same π?','用同一π，整圓剩餘未塗色部分面積是多少cm²？',mul(mul(m.pi,m.r*m.r),sub(1,m.fraction)));break;
 default:return [];
 }
 return out;
}

/* Scoped P6 shape/data Difficult checks. Core prompts, responses and fixtures are untouched. */
function shapesExtras6(skill,q,index){
 const m=q.shapeData6;
 const num=(en,zh,n)=>({label:[en,zh],answer:String(n),numberSpec:{mode:'integer',expected:String(n)+'/1'}});
 const choice=(en,zh,options,correct)=>{const shift=index%options.length,order=options.map((_,j)=>(j+shift)%options.length);return {label:[en,zh],options:order.map(j=>options[j]),answer:String(order.indexOf(correct))};};
 if(!m)return [];
 if(skill==='axesym6a'){
  const opts=[
   [['The line joining the midpoints of opposite sides','連接相對兩邊中點的直線'],['A line along one side','沿其中一邊的直線'],['A line through a corner parallel to the opposite side','經一角且平行於相對邊的直線']],
   [['A line through the centre parallel to a side','經中心且平行於一邊的直線'],['Either diagonal','任意一條對角線'],['A line along one side','沿其中一邊的直線']],
   [['The line from the top vertex to the midpoint of the base','由頂點至底邊中點的直線'],['The horizontal line halfway between the top vertex and base','頂點與底邊之間半高處的水平線'],['A line along the base','沿底邊的直線']],
   [['The line from a vertex to the midpoint of the opposite side','由一頂點至對邊中點的直線'],['A line along one side','沿其中一邊的直線'],['A line parallel to the base at half the height','在半高處平行於底邊的直線']],
   [['A diagonal joining opposite vertices','連接相對頂點的對角線'],['A line along a side','沿一邊的直線'],['A line through a vertex parallel to the opposite diagonal','經一頂點且平行於另一條對角線的直線']],
   [['Any line through the centre','任何經圓心的直線'],['A line touching the circle at just one point','只接觸圓上一點的直線'],['A line outside the circle','在圓外的直線']]
  ][m.type];
  return [choice('Which proposed line would fold this exact outline onto itself?','哪條候選直線能把這個輪廓摺合重疊？',opts,0)];
 }
 if(skill==='reflectsym6a')return [num('How many grid squares separate P and its matching point, measured straight across the mirror?','沿垂直鏡線方向，P與對應點相隔多少格？',2*Math.abs(m.k-(m.vertical?m.x:m.y)))];
 if(skill==='meanmodel6a'){const hi=Math.max(...m.values),lo=Math.min(...m.values),mean=m.values.reduce((s,v)=>s+v,0)/m.values.length;return [num(`Move counters only from the tray with ${hi} to the tray with ${lo}. How many must move so all trays have equal counts?`,`只把棋子由${hi}粒的一盤移到${lo}粒的一盤，移多少粒才令各盤相同？`,hi-mean)];}
 if(skill==='meancalc6a')return [num('What total number of visits must your mean multiplied by the number of open days reproduce?','把你的平均數乘以開放日數，應核對得多少總到訪次數？',m.values.reduce((s,v)=>s+v,0))];
 if(skill==='meanmissing6a')return [num('What must the total number of pencils in all four boxes be for the given mean?','要符合題目平均數，四盒合共必須有多少枝鉛筆？',m.mean*4)];
 if(skill==='linefeatures6a'){const v=q.figure.values;return [num('Read this graph: by how many units does X fall from time 2 to time 3?','按這幅圖，X由時間2至時間3下降多少單位？',v[1]-v[2])];}
 if(skill==='lineinterpret6a'){const from=(m.from+1)%3,to=from+1;return [num(`For comparison, what is the size of the change from time ${from+1} to time ${to+1}? Give a positive number of units, whether it rises or falls.`,`作比較，時間${from+1}至${to+1}的變化幅度是多少？不論上升或下降，填正數單位。`,Math.abs(m.values[to]-m.values[from]))];}
 if(skill==='lineplot6a'){const j=(m.correct+1)%3;return [num(`Compare proposed point ${'ABC'[j]} with the table at time ${m.at+1}. By how many units is its vertical value wrong?`,`把候選點${'ABC'[j]}與時間${m.at+1}的表列數值比較，它的縱軸值相差多少單位？`,Math.abs(m.points[j]-m.values[m.at]))];}
 if(skill==='pieread6a')return [num('How many votes belong to the rest of the circle, outside sector A?','圓中A以外的其餘部分有多少票？',m.total-m.total*m.share/(m.percent?100:360))];
 if(skill==='piecompare6a')return m.known?[num('Using the stated equal group totals, how many more people in Y than X chose walking?','按已知相同總人數，Y比X多多少人選擇步行？',m.total*(m.y-m.x)/100)]:[choice('Which missing information would let you calculate and compare both walking counts directly?','補充哪項缺少資料，就能直接計算並比較兩組步行人數？',[['The total number of people in each of X and Y','X及Y各組的總人數'],['Only the names of the groups','只有兩組名稱'],['Only which percentage is larger','只有哪個百分比較大']],0)];
 if(skill==='chartchoose6a'){
  const alternative=['pie chart','broken-line graph','pie chart'][m.t],alternativeZh=['圓形圖','折線圖','圓形圖'][m.t];
  const reasons=[
   [['It divides a whole into shares instead of joining successive time readings','它把整體分成比例，不是依時間連接讀數'],['It cannot show any numerical information','它不能顯示任何數字資料'],['It always changes the raw data values','它永遠改變原數據數值']],
   [['It joins points rather than showing parts as sectors of one whole circle','它連接數據點，不是用同一圓的分部表示整體比例'],['It cannot have a labelled axis','它不能有標示的數軸'],['It is incorrect for every possible purpose','它在任何目的下都不正確']],
   [['It uses sectors, not equal-width bars from a common zero','它用圓的分部，不是同寬且由共同零點起的棒'],['Its sectors must all be equal','它的各部分必須相同大小'],['It cannot represent a whole','它不能表示整體']]
  ][m.t];return [choice(`Why does a ${alternative} not meet this task's exact stated display requirement?`,`為何${alternativeZh}不符合本題確切指定的表示要求？`,reasons,0)];
 }
 if(skill==='chartcritique6a')return [num('Redraw the same values from zero without changing the data. What is B minus A in items?','把相同數據改為由零起畫而不改數值，B減A是多少件？',m.values[1]-m.values[0])];
 return [];
}


for(const [skill,s]of Object.entries(source.skills))for(const level of Object.keys(levels))for(const [i,seed]of source.seeds.filter(x=>x.skill===skill).entries()){
 const q=seed.q,h=q.practiceHint||['Name the whole and the units; calculate, then check the original quantities.','指出整體和單位，計算後核對原有數量。'];
 const fields=q.choices?[C(['Answer','答案'],q.choices.map(k=>q.choiceLabels?.[k]||[String(k),String(k)]),q.choices.indexOf(q.answer[0]),i)]:q.answer.map((n,j)=>({label:q.fields?.[j]||['Answer','答案'],answer:String(n),numberSpec:q.number6?.[j]||null,algebra6Spec:q.algebra6||null,measureSpec:skill==='speed6a',legacyNumericSpec:!q.number6&&!q.algebra6&&skill!=='speed6a'}));
 const baseFields=fields.length,prompt=q.prompt.slice(),why=q.why?.slice()||h.slice();
 if(level==='easy'){prompt[0]+=' Guided step: '+h[0];prompt[1]+=' 引導：'+h[1];}
 if(level==='difficult'){
 const extra=[...numberExtras6(skill,q,i,{F,C,rat,add,sub,mul,div,fmt,parseAlgebra6:graders.parseAlgebra6}),...measuresExtras6(skill,q,i),...shapesExtras6(skill,q,i)];
 if(!extra.length)throw Error('Missing contextual P6 demand '+skill);
 prompt[0]+=' Complete the original task AND the additional checks below.';prompt[1]+=' 完成原題及以下額外核對。';fields.push(...extra);
 why[0]+=' Additional checks: '+extra.map(f=>f.label[0]+': '+(f.options?f.options[+f.answer][0]:f.answer)).join('; ')+'.';
 why[1]+=' 額外核對：'+extra.map(f=>f.label[1]+'：'+(f.options?f.options[+f.answer][1]:f.answer)).join('；')+'。';
 }
 for(const f of fields){if(f.numberSpec){const mode=f.numberSpec.mode,help=mode==='fraction'?[' (lowest-term fraction or mixed number)','（最簡分數或帶分數）']:mode==='decimal'?[' (decimal numeral)','（小數）']:[' (whole-number numeral)','（整數）'];f.label=f.label.map((x,j)=>x+help[j]);}else if(f.algebra6Spec)f.label=f.label.map((x,j)=>x+[' (use * or ×, / or ÷; mixed coefficient: (1+1/2))','（乘除可用*、×、/、÷；帶分數係數用(1+1/2)）'][j]);}
 questions.push({id:`p6s-${skill}-${level}-${i+1}`,skill,unit:s.unit,level,prompt,fields,baseFields,why,guide:h,visual:{type:'frozen',pictures:seed.pictures},meta:{coreId:skill+'-'+seed.index,source:q,adaptation:null}});
}
const norm=s=>String(s).normalize('NFKC').trim();
const matches=(f,v)=>f.options?norm(v)===f.answer:f.algebra6Spec?graders.scoreAlgebra6(String(v),f.algebra6Spec):f.numberSpec?graders.scoreNumber6(String(v),f.numberSpec).correct:f.measureSpec?graders.measureAnswer(String(v),+f.answer):f.legacyNumericSpec?graders.numericAnswer(String(v),+f.answer,false):false;
const assess=(q,v)=>q.fields.map((f,i)=>matches(f,v[i])),pick=(skill,level,set)=>questions.filter(q=>q.skill===skill&&q.level===level).filter((_,i)=>set==='all'||i%4===+set);
root.P6Skills={version:2,skills:{...source.skills},units:{...source.units},levels,questions,pick,matches,assess};
(typeof module!=='undefined'?require('./p6-tsa.js'):root.MathQuizP6TSA).extend(root.P6Skills);
if(typeof module!=='undefined')module.exports=root.P6Skills;
})(typeof globalThis!=='undefined'?globalThis:this);

