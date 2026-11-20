/* Original P1 teaching pathway. Practice completion is not a mastery claim. */
((root)=>{
'use strict';
const F=typeof module!=='undefined'?require('./learn-flat.js'):root.MathQuizLearnFlat;
const V=typeof module!=='undefined'?require('./learn-solids.js'):root.MathQuizLearnSolids;
const Q=typeof module!=='undefined'?require('./learn-time.js'):root.MathQuizLearnTime;
const K=typeof module!=='undefined'?require('./learn-money.js'):root.MathQuizLearnMoney;
const U=typeof module!=='undefined'?require('./learn-ruler.js'):root.MathQuizLearnRuler;
const M=typeof module!=='undefined'?require('./learn-measure.js'):root.MathQuizLearnMeasure;
const C=typeof module!=='undefined'?require('./learn-calculate.js'):root.MathQuizLearnCalculate;
const R=typeof module!=='undefined'?require('./learn-relations.js'):root.MathQuizLearnRelations;
const G=typeof module!=='undefined'?require('./learn-groups.js'):root.MathQuizLearnGroups;
const B=typeof module!=='undefined'?require('./learn-subtract.js'):root.MathQuizLearnSubtract;
const H=typeof module!=='undefined'?require('./learn-hundred.js'):root.MathQuizLearnHundred;
const pair=(en,zh)=>[en,zh], item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
function question(lesson,index,seed=0){
 if(F.lessons.some(l=>l.id===lesson))return F.question(lesson,index,seed);
 if(V.lessons.some(l=>l.id===lesson))return V.question(lesson,index,seed);
 if(Q.lessons.some(l=>l.id===lesson))return Q.question(lesson,index,seed);
 if(K.lessons.some(l=>l.id===lesson))return K.question(lesson,index,seed);
 if(U.lessons.some(l=>l.id===lesson))return U.question(lesson,index,seed);
 if(M.lessons.some(l=>l.id===lesson))return M.question(lesson,index,seed);
 if(C.lessons.some(l=>l.id===lesson))return C.question(lesson,index,seed);
 if(R.lessons.some(l=>l.id===lesson))return R.question(lesson,index,seed);
 if(G.lessons.some(l=>l.id===lesson))return G.question(lesson,index,seed);
 if(B.lessons.some(l=>l.id===lesson))return B.question(lesson,index,seed);
 if(H.lessons.some(l=>l.id===lesson))return H.question(lesson,index,seed);
 const k=(index+seed)%12;
 if(lesson==='count'){
  const n=[4,7,0,6,9,10,3,8,5,2,1,6][k];
  return item('count-'+k,lesson,pair('How many counters? Count each one once.','有多少個圓片？每個只數一次。'),n,pair(`Count each counter once. The last number tells how many: ${n}. No counters means zero.`,`每個圓片只數一次，最後數到${n}，就是總數。沒有圓片表示零。`),{kind:'counters',a:n});
 }
 if(lesson==='tens'){
  const n=[13,16,11,18,20,14,12,19,15,17,10,16][k];
  const missing=index%3===2;
  return item('tens-'+k+(missing?'-ones':''),lesson,missing?pair(`There are ${n} counters. One full frame holds ten. How many ONES are left after taking one ten?`,`${n}個圓片中，一個滿框有十個。取出一個十後，還有多少個一？`):pair('One full frame holds ten. How many counters altogether?','一個滿框有十個，一共有多少個圓片？'),missing?n-10:n,pair(`One ten and ${n-10} ones make ${n}: 10 + ${n-10} = ${n}.`,`一個十和${n-10}個一合成${n}：10 + ${n-10} = ${n}。`),{kind:'frames',a:n});
 }
 const pairs=[[3,2],[6,4],[8,5],[9,3],[7,6],[5,5],[4,3],[8,2],[6,7],[9,5],[7,4],[8,8]], [a,b]=pairs[k], missing=index%3===2;
 return item('add-'+k+(missing?'-part':''),'add',missing?pair(`${a} counters are here. Add some more to make ${a+b}. How many MORE are needed?`, `已有${a}個圓片，再加一些便有${a+b}個。要再加多少個？`):pair(`There are ${a} green counters and ${b} gold counters. How many altogether?`, `有${a}個綠色和${b}個金色圓片，一共有多少個？`),missing?b:a+b,pair(missing?`Count on from ${a} to ${a+b}: add ${b}. Check: ${a} + ${b} = ${a+b}.`:`Keep ${a} in mind and count on ${b}: ${a} + ${b} = ${a+b}.`,missing?`由${a}數到${a+b}，要加${b}。驗算：${a} + ${b} = ${a+b}。`:`記住${a}，再數${b}個：${a} + ${b} = ${a+b}。`),{kind:'counters',a,b:missing?0:b,missing,total:a+b});
}
const lessons=[
 {id:'count',title:pair('Count carefully','逐一數清楚'),goal:pair('Count up to ten, including zero.','學會數十以內的數，包括零。'),steps:[
  {title:pair('One counter, one number','一個圓片，一個數'),text:pair('Point to each counter from left to right. Say one number for each counter.','由左至右指著圓片，每指一個就說一個數。'),visual:{kind:'counters',a:5}},
  {title:pair('The last number tells how many','最後的數就是總數'),text:pair('1, 2, 3, 4, 5. There are five counters. Moving them does not change how many there are.','1、2、3、4、5。共有五個圓片，移動位置不會改變總數。'),visual:{kind:'counters',a:5}},
  {title:pair('No counters means zero','沒有圓片就是零'),text:pair('An empty tray has zero counters. We write 0. Check that you have not counted anything twice.','空盤有零個圓片，寫作0。檢查有沒有重複數同一個。'),visual:{kind:'counters',a:0}}
 ]},
 {id:'tens',title:pair('A ten and some ones','一個十和一些一'),goal:pair('Build and read numbers from ten to twenty.','組成和讀出十至二十的數。'),steps:[
  {title:pair('Fill a frame of ten','填滿十格框'),text:pair('There are two rows of five spaces. A full frame holds ten counters: one ten.','每行五格，共兩行。填滿時有十個圓片，就是一個十。'),visual:{kind:'frames',a:10}},
  {title:pair('Keep the ten together','保留完整的一個十'),text:pair('A full frame and three more counters make thirteen. 10 + 3 = 13.','一個滿框加三個圓片是十三。10 + 3 = 13。'),visual:{kind:'frames',a:13}},
  {title:pair('Two full frames','兩個滿框'),text:pair('Ten and ten make twenty. We can call this two tens. 10 + 10 = 20.','十加十是二十，也就是兩個十。10 + 10 = 20。'),visual:{kind:'frames',a:20}}
 ]},
 {id:'add',title:pair('Put groups together','把兩組合起來'),goal:pair('Add within twenty and find a missing part.','學習二十以內的加法及找出欠缺部分。'),steps:[
  {title:pair('Two parts make a whole','兩部分合成整體'),text:pair('Three green counters and two gold counters make five altogether. 3 + 2 = 5.','三個綠色加兩個金色圓片，一共五個。3 + 2 = 5。'),visual:{kind:'counters',a:3,b:2}},
  {title:pair('Count on','接著數'),text:pair('Keep eight in mind. Add three by saying 9, 10, 11. So 8 + 3 = 11.','記住八，加三時接著數9、10、11。所以8 + 3 = 11。'),visual:{kind:'counters',a:8,b:3}},
  {title:pair('Find a missing part','找出欠缺部分'),text:pair('We have six and want ten. Count on: 7, 8, 9, 10 — four more. Check: 6 + 4 = 10.','已有六，要合成十。接著數7、8、9、10，共四個。驗算：6 + 4 = 10。'),visual:{kind:'counters',a:6,b:4}}
 ]}
];

// Each challenge changes the reasoning or support, never the pupil's identity or pace.
const levels=['easy','normal','difficult'];
const challenges={
 count:{normal:[
  ['There are 7 counters in a row. Move them into a circle without adding or taking any away. How many now?','一行有7個圓片。不加也不拿走，只排成圓形。現在有多少個？',7,'Moving counters does not change the total: seven.','移動位置不改變總數，仍是七個。'],
  ['The tray is empty. How many counters are in it?','盤內是空的，有多少個圓片？',0,'Nothing to count means zero.','沒有東西可數，就是零。'],
  ['You count each counter once: 1, 2, 3, 4, 5, 6, 7, 8, 9. How many counters?','每個圓片只數一次：1、2、3、4、5、6、7、8、9。一共有多少個？',9,'The last number, nine, tells the total.','最後數到九，所以共有九個。']
 ],difficult:[
  ['There are 5 counters. Kai counts one of them twice and says 6. What is the correct total?','有5個圓片。小佳把其中一個數了兩次，說共有6個。正確總數是多少？',5,'Count each counter once. Counting one twice does not create an extra counter: five.','每個只數一次。重複數不會多出圓片，正確是五個。'],
  ['You have counted 6 counters. There are 3 more counters not counted yet. Continue counting. How many altogether?','已數了6個圓片，還有3個未數。接著數，一共有多少個？',9,'Continue with 7, 8, 9. There are nine counters.','接著數7、8、9，共九個。'],
  ['You counted all 8 counters once. Then you started counting the same counters again from 1. How many counters are there still?','全部8個圓片已逐一數過，再由1開始重數同一批圓片。圓片仍有多少個？',8,'Counting again does not add counters. The same eight remain.','重數不會增加圓片，仍是原來的八個。']
 ]},
 tens:{normal:[
  ['One ten and 5 ones make which number?','一個十和5個一合成甚麼數？',15,'10 + 5 = 15.','10 + 5 = 15。'],
  ['17 is one ten and how many ones?','17是一個十和多少個一？',7,'Keep ten together. Count on 11 to 17: seven ones.','保留一個十，由11數到17，還有七個一。'],
  ['Two full frames each hold ten counters. How many counters altogether?','兩個十格框都填滿，每框十個圓片。一共有多少個？',20,'10 + 10 = 20: two tens.','10 + 10 = 20，就是兩個十。']
 ],difficult:[
  ['Mia has one ten and 4 ones, but writes 41. What number should Mia write?','小美有一個十和4個一，卻寫成41。應寫甚麼數？',14,'The ten is worth 10, not 40. 10 + 4 = 14.','一個十是10，不是40。10 + 4 = 14。'],
  ['There are 18 counters. Put ten in a full frame and 5 in another frame. How many are still outside the frames?','有18個圓片，十個放滿一框，另一框放5個。框外還有多少個？',3,'Ten and five make 15. Count on 16, 17, 18: three remain.','十和五合成15，接著數16、17、18，還有三個。'],
  ['A full frame and 6 ones make 16. Move one of those 6 into a different tray, without removing it. How many counters altogether now?','一個滿框和6個一合成16。把這6個中的一個移到另一盤，沒有拿走。現在一共有多少個圓片？',16,'Only its position changes. The full ten and all six ones still total 16.','只改變位置。一個十和全部六個一仍合成16。']
 ]},
 add:{normal:[
  ['There are 7 books and 5 more arrive. How many books now?','有7本書，再送來5本。現在有多少本？',12,'Count on five from 7: 8, 9, 10, 11, 12.','由7接著數五個：8、9、10、11、12。'],
  ['8 + □ = 14. Which number belongs in the box?','8 + □ = 14。方格內是甚麼數？',6,'Count from 8 up to 14: six more. 8 + 6 = 14.','由8數到14，要再數六個。8 + 6 = 14。'],
  ['There are 9 red beads and 8 blue beads. How many altogether?','有9粒紅珠和8粒藍珠，一共有多少粒？',17,'9 + 1 = 10, then add the remaining seven: 17.','9加1是10，再加餘下七粒，就是17。']
 ],difficult:[
  ['A tray has 6 counters. Add 4, then some more to reach 13. How many were added AFTER the first 4?','盤內有6個圓片，先加4個，再加一些便有13個。加了最初4個之後，再加了多少個？',3,'6 + 4 = 10. Count on 11, 12, 13: three more.','6 + 4 = 10，接著數11、12、13，再加三個。'],
  ['Bo says 8 + 7 = 14. Check the addition. What is the correct total?','小寶說8 + 7 = 14。檢查加法，正確總數是多少？',15,'8 + 2 = 10. Five of the seven remain, so 10 + 5 = 15.','8加2是10，七個還剩五個，所以10 + 5 = 15。'],
  ['9 + 4 and 8 + □ have the same total. What is the missing number?','9 + 4和8 + □的總數相同。欠缺的數是多少？',5,'9 + 4 = 13. Count on from 8 to 13: five. Check 8 + 5 = 13.','9 + 4 = 13。由8數到13要加五，驗算8 + 5 = 13。']
 ]}
};
function practice(lesson,level){if(!levels.includes(level))level='easy';if(F.lessons.some(l=>l.id===lesson))return F.practice(lesson,level);if(V.lessons.some(l=>l.id===lesson))return V.practice(lesson,level);if(Q.lessons.some(l=>l.id===lesson))return Q.practice(lesson,level);if(K.lessons.some(l=>l.id===lesson))return K.practice(lesson,level);if(U.lessons.some(l=>l.id===lesson))return U.practice(lesson,level);if(M.lessons.some(l=>l.id===lesson))return M.practice(lesson,level);if(C.lessons.some(l=>l.id===lesson))return C.practice(lesson,level);if(R.lessons.some(l=>l.id===lesson))return R.practice(lesson,level);if(G.lessons.some(l=>l.id===lesson))return G.practice(lesson,level);if(B.lessons.some(l=>l.id===lesson))return B.practice(lesson,level);if(H.lessons.some(l=>l.id===lesson))return H.practice(lesson,level);return level==='easy'?[2,3,4].map(i=>question(lesson,i)):challenges[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,pair(x[0],x[1]),x[2],pair(x[3],x[4]),null));}

const paths=[{id:'first',title:pair('Numbers and addition to 20','二十以內的數與加法'),lessons},{id:'subtract',title:pair('Number bonds and taking away','數的組合與減法'),lessons:B.lessons},{id:'hundred',title:pair('Numbers to 100','一百以內的數'),lessons:H.lessons},{id:'groups',title:pair('Counting groups and estimating','分組數數與估計'),lessons:G.lessons},{id:'relations',title:pair('Positions, pairs and differences','次序、配對與比較'),lessons:R.lessons},{id:'calculate',title:pair('Add and subtract below 100','一百以內的加減法'),lessons:C.lessons},{id:'measure',title:pair('Length and distance','長度與距離'),lessons:M.lessons},{id:'ruler',title:pair('Centimetres and rulers','厘米與尺'),lessons:U.lessons},{id:'money',title:pair('Hong Kong money','香港貨幣'),lessons:K.lessons},{id:'time',title:pair('Time and calendars','時間與月曆'),lessons:Q.lessons},{id:'solids',title:pair('Explore 3-D shapes','探索立體'),lessons:V.lessons},{id:'flat',title:pair('Explore 2-D shapes','探索平面圖形'),lessons:F.lessons}];
const allLessons=paths.flatMap(p=>p.lessons),getPath=id=>paths.find(p=>p.id===id)||paths[0],pathFor=id=>paths.find(p=>p.lessons.some(l=>l.id===id))||paths[0];
const quiz=(attempt,path='first')=>getPath(path).lessons.flatMap(l=>[question(l.id,6,(attempt*2)%6),question(l.id,8,(attempt*2)%6)]);
const valid=s=>/^\d{1,3}$/.test(String(s).trim())&&Number(String(s).trim())<=100;
const correct=(q,s)=>valid(s)&&Number(String(s).trim())===q.answer;
root.MathQuizLearnData={lessons,allLessons,paths,getPath,pathFor,question,practice,levels,quiz,valid,correct};
if(typeof module!=='undefined')module.exports=root.MathQuizLearnData;
})(typeof window!=='undefined'?window:globalThis);
