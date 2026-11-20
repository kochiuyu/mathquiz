/* Original P1 teaching pathway. Practice completion is not a mastery claim. */
((root)=>{
'use strict';
const pair=(en,zh)=>[en,zh], item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
function question(lesson,index,seed=0){
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
const quiz=attempt=>lessons.flatMap(l=>[question(l.id,6,(attempt*2)%6),question(l.id,8,(attempt*2)%6)]);
const valid=s=>/^\d{1,2}$/.test(String(s).trim());
const correct=(q,s)=>valid(s)&&Number(String(s).trim())===q.answer;
root.MathQuizLearnData={lessons,question,quiz,valid,correct};
if(typeof module!=='undefined')module.exports=root.MathQuizLearnData;
})(typeof window!=='undefined'?window:globalThis);
