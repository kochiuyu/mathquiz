/* Original P1 lessons aligned to EDB 1N3: tens/ones, magnitude and order. */
((root)=>{
'use strict';
const pair=(en,zh)=>[en,zh], item=(id,lesson,prompt,answer,why,visual=null)=>({id,lesson,prompt,answer,why,visual});
const lessons=[
 {id:'bundles',title:pair('Tens, ones and one hundred','十、個與一百'),goal:pair('Read numbers to 100 using tens and ones.','用十和個讀出一百以內的數。'),steps:[
  {title:pair('A bundle stands for ten','一束代表十'),text:pair('Each long bundle contains ten sticks. Two bundles and four single sticks make 24. Count 10, 20, then 21, 22, 23, 24.','每長束有十枝棒。兩束加四枝單棒是24。先數10、20，再數21、22、23、24。'),visual:{kind:'bundles',a:24}},
  {title:pair('A zero keeps the ones place','個位的零不能漏'),text:pair('Four tens and no single ones make 40. The 4 stands for forty; the 0 says there are no extra ones. 40 and 4 are different numbers.','四個十，沒有單個的一，是40。4代表四十，0表示沒有額外的個。40和4是不同的數。'),visual:{kind:'bundles',a:40}},
  {title:pair('Ten tens make one hundred','十個十是一百'),text:pair('Count the bundles: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Ten bundles of ten make one hundred. We write 100.','逐束數：10、20、30、40、50、60、70、80、90、100。十束十枝棒是一百，寫作100。'),visual:{kind:'bundles',a:100}}
 ]},
 {id:'compare',title:pair('Which number is larger?','哪個數較大？'),goal:pair('Compare the tens first, then the ones.','先比較十，再比較個。'),steps:[
  {title:pair('Compare the tens first','先比較十位'),text:pair('24 has two tens; 42 has four tens. Four tens is more than two tens, so 42 is larger. Do not choose just by the ones digit.','24有兩個十，42有四個十。四個十比兩個十多，所以42較大。不能只看個位。'),visual:{kind:'comparison',a:24,b:42}},
  {title:pair('Same tens? Compare the ones','十位相同，再比個位'),text:pair('47 and 43 both have four tens. Seven ones is more than three ones, so 47 is larger and 43 is smaller.','47和43都有四個十。七個一比三個一多，所以47較大，43較小。'),visual:{kind:'comparison',a:47,b:43}},
  {title:pair('Think about the whole number','想想整個數'),text:pair('100 is ten tens. 99 is nine tens and nine ones. 100 comes after 99, so 100 is larger even though it ends in zero.','100是十個十，99是九個十和九個一。100在99之後，所以100較大，即使個位是零。'),visual:{kind:'comparison',a:100,b:99}}
 ]},
 {id:'order',title:pair('Order and continue','排列和接著數'),goal:pair('Order numbers and continue across a ten.','排列數字，跨過整十接著數。'),steps:[
  {title:pair('Smallest to largest','由小至大'),text:pair('Order 42, 24 and 40. Two tens comes before four tens. Then compare 40 and 42: zero ones comes before two ones. The order is 24, 40, 42.','排列42、24和40。兩個十在四個十之前，再比較40和42：零個一在兩個一之前。次序是24、40、42。'),visual:{kind:'track',values:[24,40,42]}},
  {title:pair('Largest to smallest','由大至小'),text:pair('For largest to smallest, start with the largest. With 61, 16 and 60, compare the six tens, then the ones: 61, 60, 16.','由大至小時，先放最大的數。比較61、16和60，先看六個十，再看個位：61、60、16。'),visual:{kind:'track',values:[61,60,16]}},
  {title:pair('Cross a ten carefully','小心跨過整十'),text:pair('Count forwards: 38, 39, 40, 41. After nine ones, the next number has a new ten and zero ones. Backwards is 41, 40, 39, 38.','順數：38、39、40、41。個位是九後，下一個數多一個十，個位變成零。倒數是41、40、39、38。'),visual:{kind:'track',values:[38,39,40,41]}}
 ]}
];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='bundles'){
  const n=[24,30,42,56,70,68,100,91,85,60,29,37][k],t=Math.floor(n/10),o=n%10,ones=index%3===2;
  return item('bundles-'+k+(ones?'-ones':''),lesson,ones?pair(`The number is ${n}. After making all the full bundles of ten, how many single ones remain?`,`這個數是${n}。把能紮成十枝的全紮好後，剩下多少枝單棒？`):pair('Each long bundle holds ten sticks. What number do these sticks make?','每長束有十枝棒，這些棒組成甚麼數？'),ones?o:n,pair(`${t} tens and ${o} ones make ${n}. The single ones are ${o}.`,`${t}個十和${o}個一合成${n}，單個的一有${o}個。`),{kind:'bundles',a:n});
 }
 if(lesson==='compare'){
  const [a,b]=[[24,42],[47,43],[36,63],[58,52],[90,89],[100,99],[61,16],[74,78],[83,38],[95,90],[40,4],[29,30]][k],large=index%2===0,answer=large?Math.max(a,b):Math.min(a,b);
  return item('compare-'+k+'-'+large,lesson,pair(`Which number is ${large?'larger':'smaller'}: ${a} or ${b}? Write that number.`,`${a}和${b}哪個${large?'較大':'較小'}？寫出那個數。`),answer,pair(`Compare full tens first, then ones if the tens match. ${Math.max(a,b)} is larger; ${Math.min(a,b)} is smaller.`,`先比較完整的十，十相同再比個。${Math.max(a,b)}較大，${Math.min(a,b)}較小。`),{kind:'comparison',a,b});
 }
 const triples=[[21,22,23],[38,39,40],[64,46,60],[58,59,60],[98,99,100],[35,53,50],[31,32,33],[78,79,80],[91,19,90],[88,89,90],[11,12,13],[71,17,70]],values=triples[k],sort=index%3===2;
 if(sort){const sorted=[...values].sort((a,b)=>a-b);return item('order-'+k+'-middle',lesson,pair(`Arrange ${values.join(', ')} from smallest to largest. Which number is in the MIDDLE?`,`把${values.join('、')}由小至大排列，哪個數在中間？`),sorted[1],pair(`Compare tens, then ones: ${sorted.join(', ')}. The middle number is ${sorted[1]}.`,`先比十，再比個：${sorted.join('、')}。中間是${sorted[1]}。`));}
 // Sequence indices always use consecutive triples (the sorting slots above are separate).
 const starts=[21,38,46,58,98,68,31,78,41,88,11,91],ascending=[starts[k],starts[k]+1,starts[k]+2],seq=index%2?[...ascending].reverse():ascending;
 return item('order-'+k+'-gap',lesson,pair(`Count ${index%2?'backwards':'forwards'} by one: ${seq[0]}, □, ${seq[2]}. What is missing?`,`每次數一個，${index%2?'倒數':'順數'}：${seq[0]}、□、${seq[2]}。欠缺哪個數？`),seq[1],pair(`The sequence is ${seq.join(', ')}. Cross the ten carefully.`,`次序是${seq.join('、')}，小心跨過整十。`),{kind:'track',values:[seq[0],'□',seq[2]]});
}
const tasks={
 bundles:{normal:[
  ['What number is 6 tens and 2 ones?','6個十和2個一是甚麼數？',62,'Six tens is 60. With two ones it is 62.','六個十是60，加兩個一是62。'],
  ['What number is 8 tens and no ones?','8個十，沒有單個的一，是甚麼數？',80,'Eight tens is 80. Keep the zero in the ones place.','八個十是80，個位要寫零。'],
  ['What number is ten full bundles of ten?','十束，每束十枝棒，是甚麼數？',100,'Count by tens to ten bundles: 100.','每十個數一次，十束數到100。']
 ],difficult:[
  ['Lin has 5 tens and 3 ones but writes 35. What number should Lin write?','小琳有5個十和3個一，卻寫35。應寫甚麼數？',53,'The five tens stand for fifty, so the number is 53.','五個十是五十，所以是53。'],
  ['In 74, how much is the 7 worth?','74中的7代表多少？',70,'The 7 is in the tens place: seven tens is 70.','7在十位，七個十是70。'],
  ['There are 4 bundles of ten and 10 loose sticks. Bundle those loose sticks into one ten. What is the total number of sticks?','有4束十枝棒和10枝散棒。把散棒紮成一束十枝，現在共有多少枝棒？',50,'The extra bundle makes five tens: 50. Regrouping changes no sticks.','多一束後有五個十，即50枝。重新分組沒有改變總數。']
 ]},
 compare:{normal:[
  ['Which is larger: 68 or 86?','68和86，哪個較大？',86,'Eight tens is more than six tens.','八個十比六個十多。'],
  ['Which is smaller: 72 or 79?','72和79，哪個較小？',72,'Both have seven tens. Two ones is fewer than nine ones.','兩數都有七個十，兩個一比九個一少。'],
  ['Which is larger: 99 or 100?','99和100，哪個較大？',100,'100 comes after 99: ten tens is larger than nine tens and nine ones.','100在99之後，十個十比九個十和九個一多。']
 ],difficult:[
  ['Kai says 39 is larger than 41 because 9 is larger than 1. Which number is really larger?','小佳說39比41大，因為9比1大。其實哪個數較大？',41,'Compare tens first. Four tens is more than three tens, so choose 41.','先比十，四個十比三個十多，所以選41。'],
  ['One card shows 6 tens and 4 ones. Another shows 46. Write the larger number.','一張卡表示6個十和4個一，另一張寫46。寫出較大的數。',64,'Six tens and four ones make 64. Six tens is more than four tens.','六個十和四個一是64，六個十比四個十多。'],
  ['A whole number is larger than 57 and smaller than 59. What is it?','一個整數比57大，比59小。它是多少？',58,'Count 57, 58, 59. Only 58 is between them.','數57、58、59，中間只有58。']
 ]},
 order:{normal:[
  ['Count forwards by one: 69, □, 71. What is missing?','每次數一個，順數：69、□、71。欠缺哪個數？',70,'After 69 comes 70, then 71.','69之後是70，再到71。'],
  ['Count backwards by one: 90, □, 88. What is missing?','每次數一個，倒數：90、□、88。欠缺哪個數？',89,'Backwards: 90, 89, 88.','倒數是90、89、88。'],
  ['Order 54, 45, 50 from smallest to largest. What is the middle number?','把54、45、50由小至大排列，中間是哪個數？',50,'The order is 45, 50, 54.','次序是45、50、54。']
 ],difficult:[
  ['Bo orders 62, 26, 60 from smallest to largest as 26, 62, 60. Which number should be in the middle?','小寶把62、26、60由小至大排成26、62、60。中間應是哪個數？',60,'The six tens match, so compare ones. The correct order is 26, 60, 62.','兩數的六個十相同，再比個位，正確次序是26、60、62。'],
  ['Count backwards by one: 100, 99, □, 97. What is missing?','每次數一個，倒數：100、99、□、97。欠缺哪個數？',98,'Backwards from 100: 100, 99, 98, 97.','由100倒數：100、99、98、97。'],
  ['Order 81, 18, 80 from largest to smallest. Which number comes LAST?','把81、18、80由大至小排列，最後是哪個數？',18,'The order is 81, 80, 18. The smallest comes last when counting down.','次序是81、80、18，由大至小時，最小的放最後。']
 ]}
};
function practice(lesson,level){return level==='easy'?[2,3,4].map(i=>question(lesson,i)):tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,pair(x[0],x[1]),x[2],pair(x[3],x[4])));}
root.MathQuizLearnHundred={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnHundred;
})(typeof window!=='undefined'?window:globalThis);
