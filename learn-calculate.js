/* Original P1 1N4 lessons: sums below 100; subtraction without borrowing. */
((root)=>{
'use strict';
const pair=(en,zh)=>[en,zh],pic=(values,op='+',show=false,exchange=false)=>({kind:'columns',values,op,show,exchange}),item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const lessons=[
 {id:'columnadd',title:pair('Add tens and ones','十和個的加法'),goal:pair('Line up tens and ones. Exchange ten ones for one ten.','把十位和個位對齊，把十個一換成一個十。'),steps:[
  {title:pair('Ones under ones, tens under tens','個位對個位，十位對十位'),text:pair('23 + 14: add the ones, 3 + 4 = 7. Add the tens, 2 + 1 = 3. Three tens and seven ones make 37.','23 + 14：先加個位，3 + 4 = 7；再加十位，2 + 1 = 3。三個十和七個一合成37。'),visual:pic([23,14],'+',true)},
  {title:pair('Make a new ten','十個一換成一個十'),text:pair('27 + 15 gives twelve ones. Exchange ten ones for one ten. Three original tens plus the new ten and two remaining ones make 42.','27 + 15有十二個一。把其中十個一換成一個十，留下兩個一。加上原來三個十，共四個十和兩個一，就是42。'),visual:pic([27,15],'+',true,true)},
  {title:pair('Remember the extra ten','記得進位的一個十'),text:pair('In the ones column, 7 + 5 = 12. Write 2 ones and carry 1 ten. In the tens column, 2 + 1 + 1 = 4. The small 1 helps us remember that extra ten.','個位7 + 5 = 12，寫下2，向十位進1。十位2 + 1 + 1 = 4。上方的小1提醒我們加上進位的一個十。'),visual:pic([27,15],'+',true,true)}
 ]},
 {id:'addthree',title:pair('Add three numbers','三個數相加'),goal:pair('Add from left to right, or combine a helpful pair first.','由左至右相加，也可先把容易相加的一對合起來。'),steps:[
  {title:pair('Take two steps','分兩步算'),text:pair('12 + 4 + 3: first 12 + 4 = 16, then 16 + 3 = 19. Each number is used once.','12 + 4 + 3：先算12 + 4 = 16，再算16 + 3 = 19。每個數只加一次。'),visual:pic([12,4,3],'+',true)},
  {title:pair('A helpful pair','先湊成容易計算的一對'),text:pair('24 + 6 + 4: the last two numbers make ten. Add 6 + 4 = 10, then 24 + 10 = 34. Adding from left to right gives the same total.','24 + 6 + 4：後面兩個數合成十。先算6 + 4 = 10，再算24 + 10 = 34。由左至右相加也得到相同總數。'),visual:pic([24,6,4],'+',true)},
  {title:pair('Line up the digits','每個數都要對齊'),text:pair('18 + 7 = 25; then 25 + 5 = 30. The twenty ones become two tens. Add the original ten: three tens make 30.','18 + 7 + 5：先算18 + 7 = 25，再算25 + 5 = 30。個位共有二十個一，換成兩個十；加上原來的一個十，合成30。'),visual:pic([18,7,5],'+',true,true)}
 ]},
 {id:'columnsubtract',title:pair('Subtract and check','減法與驗算'),goal:pair('Take away ones and tens, then check by adding back.','減去個和十，再用加法驗算。'),steps:[
  {title:pair('Take away ones, then tens','先減個，再減十'),text:pair('47 − 23: take away three of the seven ones, leaving four. Take away two of the four tens, leaving two. The answer is 24.','47 − 23：七個一減去三個一，剩四個一；四個十減去兩個十，剩兩個十。答案是24。'),visual:pic([47,23],'−',true)},
  {title:pair('Six is six ones','6是六個一'),text:pair('58 − 6: write 6 under the ones, not the tens. Eight ones take away six leaves two; the five tens stay. So 58 − 6 = 52.','58 − 6：把6寫在個位下方。八個一減去六個一，剩兩個一；五個十不變。所以58 − 6 = 52。'),visual:pic([58,6],'−',true)},
  {title:pair('Add back to check','加回去驗算'),text:pair('64 − 32 = 32. Add the answer and the number taken away: 32 + 32 = 64. We are back at the starting number, so the subtraction checks.','64 − 32 = 32。把答案和減去的數相加：32 + 32 = 64，得到原來的數，減法驗算正確。'),visual:pic([64,32],'−',true)}
 ]}
];
const sums=[[23,14],[27,15],[36,12],[48,7],[25,35],[41,26],[56,28],[19,24],[62,17],[38,46],[70,9],[49,50]],triples=[[12,4,3],[24,6,4],[18,7,5],[21,13,4],[32,8,10],[15,5,23],[26,14,9],[9,9,9],[41,6,12],[28,12,30],[63,7,8],[45,25,29]],differences=[[47,23],[58,6],[36,36],[69,24],[80,30],[95,42],[76,15],[48,7],[99,58],[64,32],[50,0],[87,65]];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='columnadd'){const [a,b]=sums[k],ones=a%10+b%10,carry=Math.floor(ones/10);return item('columnadd-'+k,lesson,`${a} + ${b} = □. Add the ones, then the tens.`,`${a} + ${b} = □。先加個位，再加十位。`,a+b,`${a%10} + ${b%10} = ${ones} ones. ${carry?'Exchange ten ones for one ten. ':''}There are ${Math.floor((a+b)/10)} tens and ${(a+b)%10} ones: ${a+b}.`,`${a%10} + ${b%10} = ${ones}個一。${carry?'把十個一換成一個十。':''}共有${Math.floor((a+b)/10)}個十和${(a+b)%10}個一，就是${a+b}。`,pic([a,b]));}
 if(lesson==='addthree'){const [a,b,c]=triples[k];return item('addthree-'+k,lesson,`${a} + ${b} + ${c} = □. Use each number once.`,`${a} + ${b} + ${c} = □。每個數只加一次。`,a+b+c,`First ${a} + ${b} = ${a+b}; then ${a+b} + ${c} = ${a+b+c}.`,`先算${a} + ${b} = ${a+b}，再算${a+b} + ${c} = ${a+b+c}。`,pic([a,b,c]));}
 const [a,b]=differences[k];return item('columnsubtract-'+k,'columnsubtract',`${a} − ${b} = □. Take away the ones, then the tens.`,`${a} − ${b} = □。先減個位，再減十位。`,a-b,`${a%10} − ${b%10} = ${(a-b)%10} ones; ${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor((a-b)/10)} tens. Check: ${a-b} + ${b} = ${a}.`,`${a%10} − ${b%10} = ${(a-b)%10}個一；${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor((a-b)/10)}個十。驗算：${a-b} + ${b} = ${a}。`,pic([a,b],'−'));
}
const tasks={
 columnadd:{normal:[
  ['There are 28 books. Add 16 more. How many books now?','原有28本書，再放入16本。現在有多少本？',44,'28 + 16: fourteen ones become one ten and four ones. The total is 44.','28 + 16：十四個一換成一個十和四個一，總數是44。',pic([28,16])],
  ['45 + 8 = □. Keep the 8 in the ones column.','45 + 8 = □。把8對齊個位。',53,'Five ones plus eight ones make thirteen: carry one ten. 45 + 8 = 53.','五個一加八個一是十三個一，向十位進1。45 + 8 = 53。',pic([45,8])],
  ['36 + 24 = □. What happens when the ones make exactly ten?','36 + 24 = □。個位相加剛好是十，怎樣記錄？',60,'6 + 4 = 10: zero ones and one extra ten. 3 + 2 + 1 = 6 tens.','6 + 4 = 10，寫0個一，向十位進1。十位3 + 2 + 1 = 6。',pic([36,24])]
 ],difficult:[
  ['A pupil says 27 + 15 = 32 and forgets the carried ten. What is the correct total?','有學生忘記加進位的一個十，說27 + 15 = 32。正確總數是多少？',42,'The twelve ones leave two ones and give an extra ten. 2 + 1 + 1 = 4 tens: 42.','十二個一換成一個十和兩個一。十位2 + 1 + 1 = 4，答案是42。',pic([27,15])],
  ['For 38 + 24, the ones make twelve. After exchanging, how many TENS are there altogether?','38 + 24的個位合成十二個一。換成十和個後，總共有多少個十？',6,'The original five tens plus the carried ten make six tens. Two ones remain: 62.','原來五個十加進位的一個十，共六個十，另有兩個一，合成62。',pic([38,24])],
  ['A pupil puts 6 under the tens in 42 + 6. Calculate it with 6 in the correct column.','有學生把42 + 6的6寫在十位下方。把6放在正確位置，答案是多少？',48,'6 means six ones. 2 + 6 = 8 ones; four tens stay. The answer is 48.','6是六個一。2 + 6 = 8個一，四個十不變，答案是48。',pic([42,6])]
 ]},
 addthree:{normal:[
  ['23 + 7 + 6 = □. Add from left to right.','23 + 7 + 6 = □。由左至右相加。',36,'23 + 7 = 30, then 30 + 6 = 36.','23 + 7 = 30，再算30 + 6 = 36。',pic([23,7,6])],
  ['34 + 8 + 2 = □. Try adding the last two numbers first.','34 + 8 + 2 = □。試試先加後面兩個數。',44,'8 + 2 = 10, then 34 + 10 = 44.','8 + 2 = 10，再算34 + 10 = 44。',pic([34,8,2])],
  ['16 + 15 + 8 = □. Keep tens and ones aligned.','16 + 15 + 8 = □。把十位和個位對齊。',39,'16 + 15 = 31, then 31 + 8 = 39.','16 + 15 = 31，再算31 + 8 = 39。',pic([16,15,8])]
 ],difficult:[
  ['A pupil stops at 30 for 23 + 7 + 6. What is the complete total?','有學生計算23 + 7 + 6時，算到30便停下來。完整總數是多少？',36,'30 is only the first two numbers. Add the remaining 6 to get 36.','30只是前兩個數的和，還要加6，總數是36。',pic([23,7,6])],
  ['For 42 + 9 + 1, combine the last two numbers first. What is the final total?','計算42 + 9 + 1時，先合起後兩個數。最後總數是多少？',52,'9 + 1 = 10; 42 + 10 = 52. No number has been left out or used twice.','9 + 1 = 10，42 + 10 = 52。沒有漏加或重複加任何數。',pic([42,9,1])],
  ['18 + 7 + 5 has twenty ones altogether. What is the total after exchanging those ones?','18 + 7 + 5的個位共有二十個一。把它們換成十後，總數是多少？',30,'Twenty ones make two tens. With the original one ten, there are three tens: 30.','二十個一換成兩個十，加上原來一個十，共三個十，就是30。',pic([18,7,5])]
 ]},
 columnsubtract:{normal:[
  ['There are 68 stickers. Give away 25. How many remain?','原有68張貼紙，送出25張。還有多少張？',43,'68 − 25 = 43. Check: 43 + 25 = 68.','68 − 25 = 43。驗算：43 + 25 = 68。',pic([68,25],'−')],
  ['57 − 7 = □. How many ones remain? Write the whole answer.','57 − 7 = □。個位還有多少？寫出完整答案。',50,'7 − 7 = 0 ones; five tens remain. The answer is 50.','7 − 7 = 0個一，五個十不變，完整答案是50。',pic([57,7],'−')],
  ['There are 86 red beads and 42 blue beads. How many MORE red beads are there?','有86粒紅珠和42粒藍珠，紅珠比藍珠多多少粒？',44,'Compare by subtracting: 86 − 42 = 44.','用減法比較：86 − 42 = 44。',pic([86,42],'−')]
 ],difficult:[
  ['A pupil says 76 − 24 = 56. Check the ones and tens. What is the correct answer?','有學生說76 − 24 = 56。檢查個位和十位，正確答案是多少？',52,'6 − 4 = 2 ones and 7 − 2 = 5 tens: 52. Check 52 + 24 = 76.','6 − 4 = 2個一，7 − 2 = 5個十，合成52。驗算52 + 24 = 76。',pic([76,24],'−')],
  ['65 − 24 = 41. Check by adding 41 + 24. Which starting number should this give?','65 − 24 = 41。用41 + 24驗算，應得到哪個原來的數？',65,'41 + 24 = 65, the starting number. This checks the subtraction.','41 + 24 = 65，得到原來的數，減法驗算正確。',pic([41,24])],
  ['A pupil puts 5 under the tens in 75 − 5. Calculate it with 5 in the correct column.','有學生把75 − 5的5寫在十位下方。把5放在正確位置，答案是多少？',70,'5 means five ones. 5 − 5 = 0 ones; seven tens stay. The answer is 70.','5是五個一。5 − 5 = 0個一，七個十不變，答案是70。',pic([75,5],'−')]
 ]}
};
function practice(lesson,level){return level==='normal'||level==='difficult'?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnCalculate={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnCalculate;
})(typeof window!=='undefined'?window:globalThis);
