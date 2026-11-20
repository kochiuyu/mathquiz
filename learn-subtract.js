/* Original diagram-led P1 1N1/1N2 teaching: single-digit parts, totals <=18;
   addition/subtraction relationships explored within 10. */
((root)=>{
'use strict';const pair=(a,b)=>[a,b];
const split=(a,b,hidden=false,hideWhole=false)=>({kind:'parts',a,b,hidden,hideWhole});
const remove=(a,b)=>({kind:'remove',a,b}); // a taken away, b left
const item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
const lessons=[
 {id:'bonds',title:pair('Two parts, one whole','兩部分，一個整體'),goal:pair('Make and find parts of numbers up to 18.','組成十八以內的數，找出欠缺部分。'),steps:[
  {title:pair('Join two parts','把兩部分合起來'),text:pair('Three counters and four counters make a whole of seven. The parts are 3 and 4; the whole is 7. Say it, then write 3 + 4 = 7.','三個圓片和四個圓片合成七個。兩部分是3和4，整體是7。先說一說，再寫3 + 4 = 7。'),visual:split(3,4)},
  {title:pair('Same whole, different parts','整體相同，分法不同'),text:pair('Seven can also be five and two. Moving counters between the two parts keeps the whole at seven. Swapping 3 and 4 keeps the same pair of parts.','七也可以分成五和二。把圓片由一邊移到另一邊，整體仍是七。把3和4交換位置，仍是同一對部分。'),visual:split(5,2)},
  {title:pair('Find a covered part','找出遮住的部分'),text:pair('The whole is 12. We can see 5 counters in one part. Count on from 5 to 12: seven more. The covered part is 7. Check by joining: 5 + 7 = 12.','整體是12，看見的一部分有5個。由5接著數到12，要再數七個。遮住的部分是7，合起來看看：5 + 7 = 12。'),visual:split(5,7,true)}
 ]},
 {id:'takeaway',title:pair('Take away and count what stays','拿走後，數數還有多少'),goal:pair('Understand subtraction, including taking all or none.','理解減法，包括全部拿走及沒有拿走。'),steps:[
  {title:pair('Cross out what is taken away','把拿走的劃去'),text:pair('Start with eight counters. Take away three: the crossed-out counters. Count only the five that stay. We write 8 − 3 = 5.','開始有八個圓片，拿走三個，用交叉劃去。只數留下的五個，寫成8 − 3 = 5。'),visual:remove(3,5)},
  {title:pair('Take them all away','全部拿走'),text:pair('There are six counters. Take all six away. None stay, so the answer is zero: 6 − 6 = 0.','有六個圓片，六個全部拿走，一個也沒有留下，所以是零：6 − 6 = 0。'),visual:remove(6,0)},
  {title:pair('Take nothing away','沒有拿走'),text:pair('There are seven counters. Take away zero counters. All seven stay: 7 − 0 = 7.','有七個圓片，拿走零個，即沒有拿走，七個全都留下：7 − 0 = 7。'),visual:remove(0,7)}
 ]},
 {id:'partsback',title:pair('Put the parts back together','把兩部分放回一起'),goal:pair('Connect joining and taking away within ten.','用十以內的數，連繫合起來和拿走。'),steps:[
  {title:pair('Take apart, then put back','分開，再合起來'),text:pair('Five is two and three. Take two away from five and three stay. Put the two back with the three: 3 + 2 = 5.','五是二和三。五個拿走兩個，留下三個。把兩個放回三個旁邊：3 + 2 = 5。'),visual:split(3,2)},
  {title:pair('One whole, two related subtractions','同一整體，兩個相關減法'),text:pair('Ten is six and four. Take six away and four stay: 10 − 6 = 4. Take four away instead and six stay: 10 − 4 = 6. Both use the same whole and parts.','十是六和四。拿走六，留下四：10 − 6 = 4。若拿走四，則留下六：10 − 4 = 6。兩次用的是同一個整體和兩部分。'),visual:split(6,4)},
  {title:pair('Does the whole fit?','合起來是原來的整體嗎？'),text:pair('Someone says 9 − 4 = 6. But six and four make ten, not nine. Five and four make nine, so 9 − 4 = 5. Use the parts to explain.','有人說9 − 4 = 6，但六和四合成十，不是九。五和四合成九，所以9 − 4 = 5。用兩部分說明理由。'),visual:split(5,4)}
 ]}
];
const bondPairs=[[3,2],[4,3],[5,4],[6,2],[7,3],[8,4],[9,5],[8,7],[9,9],[6,5],[7,6],[8,8]];
const takePairs=[[2,3],[3,4],[4,0],[0,6],[7,2],[8,4],[9,5],[8,7],[9,9],[6,0],[0,7],[8,8]];
const backPairs=[[2,3],[4,2],[1,6],[3,5],[4,4],[5,2],[6,3],[7,1],[5,5],[3,3],[5,4],[1,8]];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='bonds'){const [a,b]=bondPairs[k];return item('bonds-'+k,lesson,pair(`The whole is ${a+b}. One part is ${a}. How many are in the OTHER part?`,`整體是${a+b}，一部分是${a}。另一部分有多少？`),b,pair(`${a} and ${b} make ${a+b}. Count the other part or count on from ${a} to ${a+b}.`,`${a}和${b}合成${a+b}。可以數另一部分，或由${a}接著數到${a+b}。`),split(a,b));}
 if(lesson==='takeaway'){const [a,b]=takePairs[k];return item('takeaway-'+k,lesson,pair(`Start with ${a+b} counters. Take away ${a}. How many STAY?`,`開始有${a+b}個圓片，拿走${a}個。留下多少個？`),b,pair(`${a+b} − ${a} = ${b}. Count only the counters that are not crossed out.`,`${a+b} − ${a} = ${b}。只數沒有劃去的圓片。`),remove(a,b));}
 const [a,b]=backPairs[k],missing=index%2===0;
 return item('partsback-'+k+'-'+missing,lesson,missing?pair(`${a+b} − ${a} = ${b}. Put the parts back: ${b} + □ = ${a+b}. What belongs in the box?`,`${a+b} − ${a} = ${b}。把兩部分放回：${b} + □ = ${a+b}。方格內是甚麼數？`):pair(`${a+b} − ${a} = ${b}. Put the ${a} counters back with the ${b}. How many altogether?`,`${a+b} − ${a} = ${b}。把${a}個圓片放回${b}個旁邊，一共有多少個？`),missing?a:a+b,pair(`${b} + ${a} = ${a+b}. The two parts rebuild the original whole.`,`${b} + ${a} = ${a+b}。兩部分重新合成原來的整體。`),missing?split(b,a,true):split(b,a,false,true));
}
const tasks={
 bonds:{normal:[
  ['The whole is 12 and one part is 5. How many are covered?','整體是12，一部分是5。遮住多少個？',7,'Count on from five to twelve: seven more. 5 + 7 = 12.','由五數到十二，再數七個。5 + 7 = 12。',split(5,7,true)],
  ['14 is 8 and another part. What is the other part?','14是8和另一部分，另一部分是多少？',6,'Eight and six make fourteen.','八和六合成十四。',split(8,6,true)],
  ['18 is 9 and another part. What is the other part?','18是9和另一部分，另一部分是多少？',9,'Nine and nine make eighteen.','九和九合成十八。',split(9,9,true)]
 ],difficult:[
  ['Kai says the covered part is 5. The whole is 13 and the visible part is 7. What should the covered part be?','小佳說遮住的是5。整體是13，看見的是7。遮住的應是多少？',6,'Seven and five make twelve. Seven and six make thirteen.','七和五合成十二；七和六合成十三。',split(7,6,true)],
  ['12 was split into 4 and 8. Keep the whole at 12, but make the first part 5. What is the other part now?','12原本分成4和8。整體仍是12，但第一部分改為5，另一部分現在是多少？',7,'Moving one counter to the first part leaves seven in the other. 5 + 7 = 12.','移一個圓片到第一部分，另一邊留下七個。5 + 7 = 12。',split(5,7,true)],
  ['Ten was split into 3 and 7. Now the visible part is 4, but the whole is still ten. How many are covered?','十原本分成3和7。現在看見的部分是4，整體仍是十。遮住多少個？',6,'Four and six make ten. The extra one in the visible part came from the covered part.','四和六合成十。看見的部分多了一個，是由遮住的部分移來的。',split(4,6,true)]
 ]},
 takeaway:{normal:[
  ['14 counters: take away 6. How many stay?','14個圓片拿走6個，留下多少個？',8,'14 − 6 = 8. The eight not crossed out stay.','14 − 6 = 8，沒有劃去的八個留下。',remove(6,8)],
  ['16 counters: take away 7. How many stay?','16個圓片拿走7個，留下多少個？',9,'16 − 7 = 9. Count the counters that stay.','16 − 7 = 9，數留下的圓片。',remove(7,9)],
  ['12 counters: take away 9. How many stay?','12個圓片拿走9個，留下多少個？',3,'12 − 9 = 3. Taken-away counters are not counted again.','12 − 9 = 3，拿走的圓片不要再數。',remove(9,3)]
 ],difficult:[
  ['Eleven counters had four taken away. Bo answers 4 by counting the crosses. How many actually STAY?','十一個圓片拿走四個。小寶數交叉，答4。其實留下多少個？',7,'Four were taken away; seven stay. 11 − 4 = 7.','四個是拿走的，留下七個。11 − 4 = 7。',remove(4,7)],
  ['Kai says 14 − 6 = 9. Check the picture. How many really stay?','小佳說14 − 6 = 9。看看圖，真正留下多少個？',8,'Cross out six, then count the eight that stay. Do not count a crossed-out counter.','劃去六個，再數留下的八個。不要數已劃去的圓片。',remove(6,8)],
  ['There were 9 counters. Now 4 stay. How many were taken away?','原有9個圓片，現在留下4個。拿走了多少個？',5,'The whole nine has two parts: four staying and five taken away.','原來的九分成兩部分：留下四個，拿走五個。',split(4,5,true)]
 ]},
 partsback:{normal:[
  ['8 − 3 = 5. Complete 5 + □ = 8.','8 − 3 = 5。填好5 + □ = 8。',3,'Put the three back with the five to make eight.','把三個放回五個旁邊，合成八個。',split(5,3,true)],
  ['7 − 2 = 5. Join the 5 and the 2 again. What is the whole?','7 − 2 = 5。把5和2重新合起來，整體是多少？',7,'Five and two rebuild seven.','五和二重新合成七。',split(5,2,false,true)],
  ['Ten is 6 and 4. If 4 are taken away from ten, how many stay?','十是6和4。十個拿走4個，留下多少個？',6,'10 − 4 = 6; putting four back gives 6 + 4 = 10.','10 − 4 = 6；把四個放回：6 + 4 = 10。',remove(4,6)]
 ],difficult:[
  ['Bo says 9 − 4 = 6. But 6 + 4 makes ten. What is the correct number left from NINE?','小寶說9 − 4 = 6，但6 + 4是十。九個拿走四個，正確留下多少？',5,'Five and four make nine, so nine take away four leaves five.','五和四合成九，所以九減四留下五。',split(4,5,true)],
  ['8 − 5 = 3. To put the original whole back together, 3 + □ = 8. Which part is missing?','8 − 5 = 3。要重新合成原來的整體，3 + □ = 8。欠缺哪個部分？',5,'The missing part is the five taken away, not the whole eight.','欠缺的是拿走的五個，不是整體八個。',split(3,5,true)],
  ['Ten is 7 and 3. Kai takes away 7 but says 7 stay. How many should stay?','十是7和3。小佳拿走7，卻說留下7。應留下多少？',3,'Taking away the seven leaves the other part, three. 3 + 7 = 10.','拿走七，留下另一部分三。3 + 7 = 10。',remove(7,3)]
 ]}
};
function practice(lesson,level){return level==='easy'?[2,3,4].map(i=>question(lesson,i)):tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,pair(x[0],x[1]),x[2],pair(x[3],x[4]),x[5]));}
root.MathQuizLearnSubtract={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnSubtract;
})(typeof window!=='undefined'?window:globalThis);
