/* Original P1 1N3 teaching: count grouped objects and estimate quantities below 100. */
((root)=>{
'use strict';const pair=(a,b)=>[a,b],group=(size,count,extra=0)=>({kind:'groups',size,count,extra}),estimate=n=>({kind:'estimate',n,reference:10});
const item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
const lessons=[
 {id:'twos',title:pair('Count in twos','兩個兩個數'),goal:pair('Touch each pair once and keep track of the total.','每對只數一次，記住累計總數。'),steps:[
  {title:pair('Keep two together','兩個放在一起'),text:pair('Each box holds two counters. Touch one box at a time and say 2, 4, 6, 8. Four boxes hold eight counters.','每框有兩個圓片。每次指一框，說2、4、6、8。四框共有八個圓片。'),visual:group(2,4)},
  {title:pair('Say the running total','說出累計總數'),text:pair('The numbers 2, 4, 6, 8, 10, 12 tell how many counters we have reached, not how many boxes. The last number is the total.','2、4、6、8、10、12表示數到的圓片總數，不是框數。最後的數就是總數。'),visual:group(2,6)},
  {title:pair('Count a single one last','最後數單獨的一個'),text:pair('Count the pairs: 2, 4, 6, 8, 10. One counter is outside the boxes. Count one more: 11. Do not call the single counter another pair.','先數每對：2、4、6、8、10。框外有一個圓片，再數一個是11。單獨的一個不是一對。'),visual:group(2,5,1)}
 ]},
 {id:'fives',title:pair('Count in fives and tens','五個、十個一組數'),goal:pair('Use equal groups and count any loose counters last.','用相同數量的一組來數，最後數散開的圓片。'),steps:[
  {title:pair('Five in each group','每組五個'),text:pair('Touch each box once: 5, 10, 15, 20. Every new box adds five counters to the running count.','每框指一次：5、10、15、20。每數一框，累計數量就多五個。'),visual:group(5,4)},
  {title:pair('Ten in each group','每組十個'),text:pair('Now each box holds ten. Count 10, 20, 30, 40, 50. Check the group size before choosing how to count.','現在每框有十個。數10、20、30、40、50。先看清每組有多少個，再選擇怎樣數。'),visual:group(10,5)},
  {title:pair('Groups first, loose ones last','先數整組，後數散開的'),text:pair('Count the boxes: 10, 20, 30. Then count the loose counters: 31, 32, 33. A partial group is not a full ten.','先數框內：10、20、30。再數散開的：31、32、33。不足十個的一組不能當作十個。'),visual:group(10,3,3)}
 ]},
 {id:'estimate',title:pair('Estimate, then check','先估計，再核對'),goal:pair('Use a known group of ten to choose a reasonable estimate.','以已知的十個作參考，選擇合理的估計。'),steps:[
  {title:pair('Use a known group','用已知數量作參考'),text:pair('The small reference group has ten counters. Look at the other collection before counting each counter. Imagine groups like the reference inside it.','小參考組有十個圓片。先觀察另一堆，不要立即逐個數。想像那裏可以放入多少組同樣的十個。'),visual:estimate(23)},
  {title:pair('An estimate is about how many','估計是大約多少'),text:pair('This looks a little more than two reference groups. About 20 is more reasonable than about 70. An estimate need not equal the exact count. Different nearby estimates can make sense.','這堆看來比兩個參考組多一點。大約20比大約70合理。估計不必等於確切數量，相近的不同估計也可以合理。'),visual:estimate(23)},
  {title:pair('Check after estimating','估計後再核對'),text:pair('After saying your estimate, count the counters to check: there are 23. Compare that with about 20. Try this with a small collection of real objects too.','先說出估計，再數圓片核對：共有23個。與大約20比較。也可以用一小堆實物試一試。'),visual:estimate(23)}
 ]}
];
const pairs=[3,4,5,6,7,8,9,10,11,12,13,14];
const fives=[[5,3,0],[10,3,0],[5,4,0],[10,4,0],[5,5,0],[10,5,0],[5,6,0],[10,6,0],[5,7,0],[10,7,0],[5,8,0],[10,9,0]];
const estimates=[[18,20,70],[33,10,30],[22,20,80],[47,50,10],[61,20,60],[28,30,80],[42,10,40],[67,70,20],[54,50,10],[36,40,80],[24,20,70],[58,60,20]];
function counting(id,lesson,size,count,extra,prompt){const answer=size*count+extra,seq=Array.from({length:count},(_,i)=>(i+1)*size).join(', ');return item(id,lesson,prompt||pair(`Each box holds ${size}. Count all the counters.`,`每框有${size}個，數數全部圓片。`),answer,pair(`Count the boxes: ${seq}. ${extra?'Then count '+extra+' loose counters. ':''}There are ${answer} counters.`,`先數每框：${seq}。${extra?'再數'+extra+'個散開的圓片。':''}共有${answer}個圓片。`),group(size,count,extra));}
function estimating(id,n,a,b,prompt){const answer=Math.abs(n-a)<Math.abs(n-b)?a:b;return item(id,'estimate',prompt||pair(`Use the reference ten. Which estimate is more reasonable: ${a} or ${b}? Enter that choice.`,`參考十個的一組，${a}或${b}哪個估計較合理？輸入所選的數。`),answer,pair(`Of these two choices, about ${answer} fits better. Counting afterwards gives ${n}. Estimates are approximate; other nearby estimates may also be reasonable.`,`這兩個選擇中，大約${answer}較合理。之後逐個數，共有${n}個。估計是大約數量，其他相近估計也可能合理。`),estimate(n));}
function question(lesson,index,seed=0){const k=(index+seed)%12;if(lesson==='twos')return counting('twos-'+k,lesson,2,pairs[k],0);if(lesson==='fives')return counting('fives-'+k,lesson,...fives[k]);return estimating('estimate-'+k,...estimates[k]);}
const tasks={
 twos:{normal:()=>[
  counting('twos-n0','twos',2,6,1,pair('Count the pairs, then the loose counter. How many altogether?','先數每對，再數單獨的一個。一共有多少？')),
  counting('twos-n1','twos',2,9,0,pair('Nine pairs are shown. How many COUNTERS, not boxes?','圖中有九對。圓片共有多少個？不是問框數。')),
  item('twos-n2','twos',pair('Count in twos: 12, 14, □, 18. Which number is missing?','兩個兩個數：12、14、□、18。欠缺哪個數？'),16,pair('After 14, say 16, then 18.','14之後數16，再數18。'),{kind:'track',values:[12,14,'?',18]})
 ],difficult:()=>[
  counting('twos-d0','twos',2,7,0,pair('Bo counts seven boxes and answers 7 counters. Each box holds two. What is the correct number of counters?','小寶數七個框，說有7個圓片。每框有兩個。正確共有多少個圓片？')),
  counting('twos-d1','twos',2,8,1,pair('Kai counts the loose counter as a pair and says 18. How many counters are really here?','小佳把單獨的一個也當作一對，說有18個。實際有多少個？')),
  item('twos-d2','twos',pair('One count is wrong: 18, 20, 23, 24. What should replace 23 when counting in twos?','兩個兩個數：18、20、23、24。其中一個數錯了。23應改為多少？'),22,pair('Keep adding two to the count: 18, 20, 22, 24.','每次接著數兩個：18、20、22、24。'),{kind:'track',values:[18,20,23,24]})
 ]},
 fives:{normal:()=>[
  counting('fives-n0','fives',5,6,2,pair('Count the groups of five, then the two loose counters. How many altogether?','先五個五個數，再數散開的兩個。一共有多少？')),
  counting('fives-n1','fives',10,8,3,pair('Count the groups of ten, then the loose counters. How many altogether?','先十個十個數，再數散開的圓片。一共有多少？')),
  item('fives-n2','fives',pair('Count in fives: 35, 40, □, 50. What is missing?','五個五個數：35、40、□、50。欠缺多少？'),45,pair('After 40, count five more to 45, then 50.','40之後再數五個是45，再數是50。'),{kind:'track',values:[35,40,'?',50]})
 ],difficult:()=>[
  counting('fives-d0','fives',5,7,0,pair('Kai says 70 because there are seven boxes. Each holds FIVE. How many counters are there?','小佳見七個框便答70。每框有五個。圓片共有多少？')),
  counting('fives-d1','fives',10,6,4,pair('Bo calls every group a ten and answers 70. The loose group has only four. What is the correct total?','小寶把每組都當作十個，答70。但散開的一組只有四個。正確總數是多少？')),
  item('fives-d2','fives',pair('Counting in tens from 25: 25, 35, □, 55. What belongs in the box?','由25起十個十個數：25、35、□、55。方格內是甚麼數？'),45,pair('The running count rises by ten: 25, 35, 45, 55.','累計數量每次多十個：25、35、45、55。'),{kind:'track',values:[25,35,'?',55]})
 ]},
 estimate:{normal:()=>[estimating('estimate-n0',34,30,80),estimating('estimate-n1',52,20,50),estimating('estimate-n2',76,80,30)],difficult:()=>[
  estimating('estimate-d0',43,10,40,pair('Kai guesses 10. Compare the collection with the reference ten. Which fits better: 10 or 40?','小佳估計是10。與參考的十個比較，10或40哪個較合理？')),
  estimating('estimate-d1',27,30,80,pair('These counters are spread out. Do not use the space alone. Compare with the reference ten: about 30 or 80?','圓片排得較疏，不要只看佔用空間。與參考的十個比較，大約30或80較合理？')),
  estimating('estimate-d2',63,20,60,pair('A large tray does not tell the number of counters. Use the reference ten: about 20 or 60?','盤子大不代表圓片多。用參考的十個來比較，大約20或60較合理？'))
 ]}
};
function practice(lesson,level){return level==='easy'?[2,3,4].map(i=>question(lesson,i)):tasks[lesson][level]();}
root.MathQuizLearnGroups={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnGroups;
})(typeof window!=='undefined'?window:globalThis);
