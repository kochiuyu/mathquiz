/* Three teaching demands per skill; normal contexts retain provenance to core IDs. */
((root)=>{
const source=typeof P2SkillSeeds!=='undefined'?P2SkillSeeds:require('./p2-skill-seeds.js');
const levels={easy:['Easy · guided','容易 · 有引導'],normal:['Normal · apply','一般 · 應用'],difficult:['Difficult · reason','較難 · 推理']},questions=[];
const N=(label,n)=>({label,answer:String(n)}),C=(labels,correct,i,label=['Check / explain','核對／解釋'])=>{const order=labels.map((_,j)=>j),slot=i%labels.length;order.unshift(...order.splice(order.length-slot,slot));return {label,options:order.map(j=>labels[j]),answer:String(order.indexOf(correct)),optionKeys:order.map(String)};};
const reason=(good,bad,i)=>C([good,...bad],0,i),yesno=(ok,i,label)=>C([['Yes','是'],['No','否']],ok?0:1,i,label);
const sum=a=>a.reduce((s,n)=>s+n,0),pair=(a,b)=>[a,b];
const wrongGeneric=[['Ignore one of the given quantities.','忽略其中一個已知數量。'],['Use only the appearance of the numerals.','只憑數字的外觀決定。']];
const guides={
 metrestocm2a:pair('Replace each whole metre by 100 centimetres; then include the remaining centimetres.','每整米換成100厘米，再加餘下厘米。'),
 timefinish2a:pair('There are 60 minutes in an hour. Count forward; split the interval at the next hour if needed.','每小時60分鐘，順數；需要時分成到整點及整點後兩段。'),
 timeelapsed2a:pair('Count forward from the start. If the hour changes, first count the minutes to that hour.','從開始時刻順數；跨整點時先數至整點。'),
 solidbasename2a:pair('Count the sides of this BASE outline, then combine that name with the stated prism or pyramid family.','數這個底面輪廓的邊數，再配合題目指明的角柱體或角錐體。'),
 anglekind2a:pair('Compare with a right-angle corner: smaller is acute; matching is right; larger but below two right angles is obtuse.','跟直角比較：較小是銳角，相同是直角，較大但小於兩個直角是鈍角。'),
 anglecompare2a:pair('Imagine rotating the drawings so their meeting points and one side match. Compare openings, not side lengths.','想像轉動圖形，使接點及一邊對齊。比較張開程度，不看邊長。'),
 directionmap2a:pair('Find N from the arrow; E is a quarter-turn clockwise, then S, then W. Start from the object named after “from”.','先依箭頭找北，順時針轉四分之一圈是東，再是南、西。看清作為參考的物件。'),
 quadproperties2a:pair('Check all four corners first, then the stated side equalities. Turning the page does not change either property.','先檢查四個角，再檢查指定的等邊條件；轉動紙張不改變性質。'),
 divfact2a:pair('Find the table fact: divisor × quotient = dividend. The divisor is never zero.','找乘法表算式：除數×商＝被除數，除數不會是零。'),
 divremain2a:pair('Make as many full groups as possible. The leftovers must be fewer than one full group.','盡量分成完整組，剩餘數量必須少於一整組。'),
 divgroup2a:pair('The group size is given. Count FULL packs, then the unpacked pieces.','題目已給每包數量；求完整包數，再求未裝數量。'),
 divcheck2a:pair('Use the divisor and quotient for the full groups; then include the remainder.','用除數和商求完整組的數量，再加回餘數。'),
 thousandvalue2a:pair('Each unit in the thousands column represents 1000, not 1.','千位每個單位表示1000，不是1。'),
 cross1000seq2a:pair('Keep the stated step and direction when crossing 1000. Track each place carefully.','跨過1000也保持指定步幅及方向，留意每個數位。'),
 parity4digit2a:pair('Only the ones digit decides odd/even: 0, 2, 4, 6, 8 are even endings.','只看個位判斷單雙；0、2、4、6、8結尾的是雙數。'),
 compare4digit2a:pair('Compare digit counts, then start at the highest place. Use = only when all digits match.','先比位數，再從最高位比較；全部數字相同才用＝。'),
 groupcount4digit2a:pair('Add one group size for each group. Keep a running total and count the groups separately.','每組加一次組內數量，記累計總數，另外數組數。'),
 price1000read2a:pair('Read dollars before the point and cents after it; .50 means fifty cents.','先讀點前的元，再讀點後的仙；.50是五十仙。'),
 moneycount1000a:pair('Count every listed value once. Exchange 100 cents for 1 dollar; keep the final cents below 100.','每件面值計一次，100仙換1元，最後仙數少於100。'),
 noteexchange2a:pair('Keep the total unchanged. Count fixed notes first, then the requested notes, within the stated exchange group.','總值不變，先計指定鈔票，再計所問鈔票，留在指定兌換組別內。'),
 sub3borrow2a:pair('Align hundreds, tens and ones. Regroup across a zero if needed, keeping the starting value unchanged.','百十個對齊，需要時跨零退位，但保持原值。'),
 mixed3steps2a:pair('Calculate the first two numbers with their sign, then use that result with the last number and sign.','先按符號算首兩數，再用該結果及最後一數繼續算。'),
 mixedstory3digit2a:pair('Receiving increases the amount; using decreases it. Follow the events in their stated order.','收到會增加，用了會減少；按事件先後計算。'),
 moneychange2a:pair('Keep dollars and cents separate. One dollar may be exchanged for 100 cents before subtracting.','元和仙分開，需要時先把1元換成100仙再減。'),
 multfact2a:pair('Use equal groups or repeated addition. Multiplying by zero gives zero; multiplying by one keeps the number.','用等量分組或連加；乘零得零，乘一保持原數。'),
 multstory2a:pair('Find the number of equal groups and the amount in each. Count all groups once.','找組數及每組數量，每組計一次。'),
 digitvalue2a:pair('Hundreds are worth 100 each, tens 10 each, ones 1 each. Give the value, not just the digit.','每個百值100，每個十值10，每個一值1；答數值，不只是數字。'),
 sequence999a:pair('Move one number at a time in the named direction, including across a whole hundred.','按指定方向每次數一個，跨整百也一樣。'),
 parity999a:pair('Look at the ones digit; 0, 2, 4, 6, 8 give even numbers.','看個位；0、2、4、6、8表示雙數。'),
 compare999a:pair('Compare hundreds first, then tens, then ones. An equal number needs the equals sign.','先比百，再比十及個；相等用等號。'),
 order999a:pair('Find the smallest and largest first. Check whether the requested order is increasing or decreasing.','先找最小及最大，再看要求由小至大還是由大至小。'),
 addcarry2a:pair('Align the place values. Add ones, regroup into tens if needed, then include all carried values.','相同數位對齊，先加個位，需要時進到十位，再計所有進位。'),
 smartadd2a:pair('Look for two addends that make a whole ten or hundred. Include the remaining addend afterwards.','找湊成整十或整百的數對，最後加餘下一數。'),
 subborrow2a:pair('Align tens and ones. If there are too few ones, exchange one ten for ten ones.','十位個位對齊，個位不夠時把一個十換成十個一。'),
 subchain2a:pair('Do the first subtraction, keep its result, then subtract the final number.','先算第一次減法，保留結果，再減最後一數。'),
 addstory2a:pair('Joining separate deliveries needs addition. Keep track of each delivery once.','把各次收到的數量合起來用加法，每次只計一次。'),
 substory2a:pair('Giving away decreases the amount. Subtract each removal in the stated order.','送出使數量減少，按次序減去每次送出的數量。'),
 place3a:pair('A plate represents 100, a rod 10 and a unit square 1. A missing place needs a zero.','百板代表100，十棒代表10，小方格代表1，空缺數位須寫0。'),
 groups2a:pair('Use the number of boxes and counters per box as factors; either order works. Count all counters for the product.','用盒數和每盒粒數作乘數，次序可互換；積是所有圓片總數。'),
 pict2a:pair('Find the requested category. Follow its row or column; every pupil symbol represents one pupil.','找指定類別，沿該行或列點算，每個學生圖案代表一名學生。'),
 share2a:pair('Give one counter to each child in turn. Keep making complete rounds; count what each gets and what remains.','輪流每人派一粒，盡量派完整輪；數每人所得及剩餘。')
};
function hardFields(id,q,i){const f=[],put=(good,bad=wrongGeneric)=>f.push(reason(good,bad,i));
switch(id){
case 'metrestocm2a':put(pair('Every metre contributes 100 centimetres, then the remaining centimetres are added.','每米算100厘米，再加餘下厘米。'),[pair('Add the metre numeral directly to the centimetre numeral.','把米的數字直接加厘米的數字。'),pair('A metre is ten centimetres.','一米是十厘米。')]);break;
case 'timefinish2a':case 'timeelapsed2a':put(pair('Count on using 60 minutes for each hour boundary.','跨整點時按每小時60分鐘順數。'),[pair('An hour contains 100 minutes.','每小時100分鐘。'),pair('Ignore changes in the hour field.','忽略時欄的改變。')]);break;
case 'solidbasename2a':f.push(N(pair('Number of sides of the BASE','底面的邊數'),q.solid2S1.baseSides));put(pair('Combine the base shape with the stated solid family; a base outline is not the whole solid.','底面形狀配合指定立體類別，底面輪廓不是整個立體。'));break;
case 'anglekind2a':{const a=q.figure.angle;put(a<90?pair('The opening is smaller than a right angle.','張開程度小於直角。'):a===90?pair('The opening matches a right angle.','張開程度與直角相同。'):pair('The opening is larger than one right angle but smaller than two.','張開程度大於一個直角但小於兩個。'),[pair('The longest side always gives the angle type.','最長邊決定角的種類。'),pair('Every rotated angle is obtuse.','轉過方向的角都是鈍角。')]);break;}
case 'anglecompare2a':put(pair('Match the meeting points and one side; compare the openings, even when side lengths differ.','把接點及一邊對齊，比較張開程度，不受邊長影響。'),[pair('Choose the angle with the longest drawn side.','選畫得最長邊的角。'),pair('Turning an angle changes its size.','轉向會改變角的大小。')]);break;
case 'directionmap2a':{const codes=['N','E','S','W'],names=[pair('North','北'),pair('East','東'),pair('South','南'),pair('West','西')];f.push(C(names,(codes.indexOf(q.answer[0])+2)%4,i,pair('Direction if target and reference are swapped','交換目標和參考物後的方向')));put(pair('Reversing target and reference gives the opposite direction; use the north arrow.','交換目標和參考物會得到相反方向，並依指北箭頭判斷。'));break;}
case 'quadproperties2a':{const p=q.figure.points,edges=p.map((a,j)=>[p[(j+1)%4][0]-a[0],p[(j+1)%4][1]-a[1]]),lens=edges.map(a=>Math.hypot(...a));const right=edges.every((e,j)=>Math.abs(e[0]*edges[(j+1)%4][0]+e[1]*edges[(j+1)%4][1])<.001);const equal=q.quadrilateral2S4.kind==='squareCriteria'?lens.every(x=>Math.abs(x-lens[0])<.001):Math.abs(lens[0]-lens[2])<.001&&Math.abs(lens[1]-lens[3])<.001;f.push(yesno(right,i,pair('Are all four angles right angles?','四角都是直角嗎？')),yesno(equal,i+1,pair('Do the stated side equalities hold?','符合題目指定的等邊條件嗎？')));break;}
case 'divfact2a':f.push(N(pair('Recovered dividend: divisor × quotient','驗算所得被除數：除數×商'),q.division2N6.dividend));put(pair('Multiplying quotient by the nonzero divisor recovers the dividend.','商乘非零除數會回到被除數。'));break;
case 'divremain2a':f.push(N(pair('Objects in the FULL groups','完整組內物件總數'),q.division2N6.divisor*q.division2N6.quotient));put(pair('The remainder is smaller than the divisor; otherwise another full group can be made.','餘數小於除數，否則還能再分一整組。'));break;
case 'divgroup2a':put(pair('The quotient counts full packs; the divisor is pieces per pack.','商是完整包數，除數是每包件數。'),[pair('The quotient is the number of pencils in one pack.','商是每包鉛筆數量。'),pair('Leftovers form a full pack even if too few.','不足數量的剩餘也算完整一包。')]);break;
case 'divcheck2a':f.push(N(pair('After adding the remainder: recovered total','加回餘數後的總數'),q.division2N6.dividend));put(pair('Include the remainder as well as the full groups.','完整組及餘下的數量都要計。'));break;
case 'thousandvalue2a':put(pair('The place multiplies the digit value by one thousand.','千位使該數字代表相應的千數。'),[pair('The digit itself and its place value are always equal.','數字本身永遠等於其數位值。'),pair('Only the ones digit matters here.','這裏只看個位。')]);break;
case 'cross1000seq2a':{const m=q.boundarySequence;f.push(N(pair('One more step AFTER your answer','在答案之後再走一步'),m.start+4*m.step));put(pair('Keep the same step and direction across the boundary.','跨界後仍保持原步幅及方向。'));break;}
case 'sequence999a':{const m=q.number2N1;f.push(N(pair('One more step AFTER your answer','在答案之後再走一步'),m.start+4*m.step));put(pair('A change in the hundreds does not change the step.','百位改變不代表步幅改變。'));break;}
case 'parity999a':case 'parity4digit2a':{const n=q.number2N1?.n??q.parity4.value;f.push(N(pair('Digit that decides odd/even','用來判斷單雙的數字'),n%10));put(pair('Use the ones digit, not the leading digit.','用個位數字，不是最高位數字。'));break;}
case 'compare999a':case 'compare4digit2a':{const m=q.number2N1||q.compare4;put(m.a===m.b?pair('Every digit agrees, so the two numbers are equal.','各位數字都相同，所以兩數相等。'):pair('Start at the highest place; the first differing place decides.','從最高位開始，首個不同的數位決定大小。'),[pair('Always compare only the ones digits.','永遠只比較個位。'),pair('Equal digit counts mean equal numbers.','位數相同就表示兩數相等。')]);break;}
case 'groupcount4digit2a':{const m=q.groupCount4;f.push(N(pair('Running total BEFORE the final group','最後一組之前的累計數量'),m.size*(m.groups-1)));put(pair('Add one full group size at each step; do not confuse objects with group count.','每步加一組的數量，不混淆物件數與組數。'));break;}
case 'price1000read2a':put(pair('Read both dollar and cent parts with their currency units.','元和仙兩部分都要按貨幣單位讀。'),[pair('Read the cents as extra dollars.','把仙當額外的元讀。'),pair('Ignore all cents.','忽略所有仙。')]);break;
case 'moneycount1000a':put(pair('Add each labelled value once; regroup every 100 cents into one dollar.','每件標示面值計一次，每100仙換一元。'),[pair('Each piece always counts as one dollar.','每件貨幣一律算一元。'),pair('Ten cents make one dollar.','十仙等於一元。')]);break;
case 'noteexchange2a':put(pair('The received notes have the original total value and stay within the permitted group.','換得鈔票總值不變，並留在指定組別。'),[pair('Any denomination may be added, even outside the permitted group.','可加入任何面值，即使不在指定組別。'),pair('Keep only the number of pieces unchanged.','只須保持張數不變。')]);break;
case 'sub3borrow2a':case 'subborrow2a':put(pair('Regrouping keeps the starting value unchanged; check by adding the difference to what was removed.','退位保持原值；差加減去的數可核對原數。'),[pair('Subtract the smaller digit from the larger digit in each column regardless of order.','每欄一律以大數字減小數字，不看原次序。'),pair('Borrow a ten without changing the tens column.','退一個十但不用改十位。')]);break;
case 'mixed3steps2a':case 'mixedstory3digit2a':case 'subchain2a':put(pair('Keep the first result and then apply the last operation; do not regroup subtraction.','保留第一步結果，再做最後運算；減法不可任意改先後組合。'),[pair('Always do the last two numbers first.','永遠先算末兩數。'),pair('Ignore the first result.','不用第一步結果。')]);break;
case 'moneychange2a':put(pair('Cost plus change equals payment; one dollar is one hundred cents.','價錢加找贖等於付款，一元是一百仙。'),[pair('Ten cents equal one dollar.','十仙等於一元。'),pair('Change is found by adding cost to payment.','付款加價錢就是找贖。')]);break;
case 'multfact2a':case 'multstory2a':case 'groups2a':put(pair('Multiply the number of equal groups by the amount in each; either factor order gives the same total.','組數乘每組數量，兩乘數次序可互換而總數不變。'),[pair('Always add the two factors instead.','永遠把兩個乘數相加。'),pair('Swapping factors changes the total.','調換乘數會改變總數。')]);break;
case 'digitvalue2a':put(pair('A digit’s value depends on its named place, not just its shape.','數字的值由指定數位決定，不只是數字形狀。'));break;
case 'order999a':put(q.number2N1.direction===1?pair('The numbers must increase from first to last.','數值由首至末須增加。'):pair('The numbers must decrease from first to last.','數值由首至末須減少。'),[pair('Any order is acceptable if all numbers appear.','只要全出現，任何次序都可。'),pair('Order by the ones digits only.','只按個位排序。')]);break;
case 'addcarry2a':put(pair('Include all carried values; regrouping does not discard any units.','計入所有進位，重新組合不會丟掉任何單位。'),[pair('Discard carried values.','丟棄進位數。'),pair('Use only the largest addend.','只用最大的加數。')]);break;
case 'smartadd2a':put(pair('Changing addition order preserves the total, provided every addend is included once.','每個加數各計一次，改變加法次序不改變總和。'),[pair('A helpful pair allows the last addend to be omitted.','用了方便數對便可不計最後加數。'),pair('Changing the addition order always changes the total.','改變加法次序必定改變總和。')]);break;
case 'addstory2a':put(pair('Joining the deliveries requires adding each quantity once.','把各次收到的數量相加，每次計一次。'),[pair('Subtract every delivery.','每次收到都減去。'),pair('Multiply all the delivery amounts.','把各次收到的數量相乘。')]);break;
case 'substory2a':put(pair('Subtract quantities given away in their stated order.','依次減去送出的數量。'),[pair('Giving away increases the starting amount.','送出會增加原有數量。'),pair('Add every amount given away.','把每次送出的數量加回。')]);break;
case 'place3a':f.push(N(pair('Value contributed by the hundreds','百位代表的值'),q.figure.hundreds*100));put(pair('Keep a zero placeholder for an empty tens or ones place.','十位或個位空缺時用0佔位。'));break;
case 'pict2a':{const m=q.pictogram;f.push(N(pair('Pupils in ALL categories altogether','所有類別的總人數'),sum(m.counts)));put(pair('One symbol is one pupil; count the requested category separately from the whole chart.','每圖案一人，分清指定類別及全圖總數。'));break;}
case 'share2a':put(pair('The quotient is counters per child; any remainder cannot form another complete round.','商是每人圓片數，餘數不足再派完整一輪。'),[pair('The quotient counts children instead.','商是小朋友人數。'),pair('Give every leftover to one child and still call it equal sharing.','把餘下全部給一人，仍說是平均分配。')]);break;
default:throw Error('Missing progression '+id);
}return f;}
for(const [skill,s]of Object.entries(source.skills))for(const level of Object.keys(levels))for(const [i,seed]of source.seeds.filter(x=>x.skill===skill).entries()){
const q=seed.q,fields=q.choices?[C(q.choices.map(k=>q.choiceLabels?.[k]||[k,k]),q.choices.indexOf(q.answer[0]),i,['Answer','答案'])]:q.answer.map((a,j)=>N(q.equalGroups?[['First factor','第一乘數'],['Second factor','第二乘數'],['Product','積']][j]:q.equalSharing?[['Each child','每人'],['Left over','剩餘']][j]:q.fields?.[j]?.every(Boolean)?q.fields[j]:['Number','數字'],a));
const prompt=q.prompt.slice(),why=q.why.slice();if(level==='easy'){prompt[0]+=' Guided step: '+guides[skill][0];prompt[1]+=' 引導：'+guides[skill][1];}
if(level==='difficult'){prompt[0]+=' Complete the answer, then the additional check or explanation below.';prompt[1]+=' 完成答案，再做下方額外的核對或解釋。';fields.push(...hardFields(skill,q,i));why[0]+=' '+guides[skill][0];why[1]+=' '+guides[skill][1];}
questions.push({id:`p2s-${skill}-${level}-${i+1}`,skill,unit:s.unit,level,prompt,fields,why,visual:{type:'frozen',pictures:seed.pictures},meta:{coreId:skill+'-'+seed.index,source:q},sentence:!!q.equalGroups,rule:q.equalGroups?'factors':null});
}
const norm=s=>String(s).normalize('NFKC').trim(),num=s=>/^\+?\d+(?:\.0+)?$/.test(norm(s))?Number(norm(s)):NaN,matches=(f,v)=>f.options?norm(v)===f.answer:Number.isFinite(num(v))&&num(v)===+f.answer;
function assess(q,v){const a=q.fields.map((f,i)=>matches(f,v[i]));if(q.rule==='factors'){const m=q.meta.source.equalGroups,x=num(v[0]),y=num(v[1]);a[0]=a[1]=(x===m.boxes&&y===m.each)||(x===m.each&&y===m.boxes);}return a;}
const pick=(skill,level,set)=>questions.filter(q=>q.skill===skill&&q.level===level).filter((_,i)=>set==='all'||i%4===+set);
root.P2Skills={version:1,skills:source.skills,units:source.units,levels,questions,pick,matches,assess,guides};if(typeof module!=='undefined')module.exports=root.P2Skills;
})(typeof globalThis!=='undefined'?globalThis:this);
