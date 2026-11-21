((root)=>{'use strict';
const P=(en,zh)=>[en,zh],V=(a,b)=>({kind:'multarray',rows:a,cols:b});
const fact=(id,a,b)=>({id,type:'number',a,b,answer:String(a*b),prompt:P(`Find ${a} × ${b}. Choose a method that helps you.`,`求${a} × ${b}，選擇適合自己的方法。`),hint:P(a===0||b===0?'No objects altogether gives a product of zero.':a===1||b===1?'One group keeps its number of objects; one object in each group also counts the groups.':`Build ${a} equal groups of ${b}, or use a nearby fact and explain the change.`,a===0||b===0?'全部沒有物件，積就是零。':a===1||b===1?'一組的物件數不變；每組一個物件，總數也等於組數。':`擺${a}組，每組${b}個，或用鄰近算式推算，解釋改變。`)});
const split=(id,a,b,k,op='+')=>({id,type:'parts',a,b,k,op,answer:[(op==='+'?k:10)*b,(op==='+'?a-k:10-a)*b,a*b].join(','),labels:[P('First part total','第一部分總數'),P(op==='+'?'Part to add':'Part to remove',op==='+'?'要加的部分':'要拿走的部分'),P('Product','積')],prompt:P(op==='+'?`Build ${a} groups of ${b} as ${k} groups and ${a-k} groups. Find both parts, then the total.`:`Start with 10 groups of ${b}. Remove ${10-a} group(s) to leave ${a} groups. Find the starting total, removed total and product.`,op==='+'?`把${a}組每組${b}個分成${k}組和${a-k}組，求兩部分及總數。`:`先擺10組，每組${b}個，拿走${10-a}組，剩${a}組。求原來總數、拿走的數量和積。`),hint:P('Count each part. Add the two parts, or subtract the removed part, without changing the number in each group.','點算各部分，合併兩部分或減去拿走的部分，每組數量不變。'),visual:{kind:'factsplit',a,b,k,op}});
const sentence=(id,a,b,en,zh)=>({...fact(id,a,b),type:'parts',labels:[P('First number','第一個數'),P('Second number','第二個數'),P('Total objects','物件總數')],answer:`${a},${b},${a*b}`,accept:[`${a},${b},${a*b}`,`${b},${a},${a*b}`],prompt:P(en,zh),hint:P('Use the two numbers from the situation and their product. Either factor order is valid. Explain what each number counts and give a unit.','用情境中的兩個數和它們的積，兩個因數次序都可。解釋各數代表甚麼，並說出單位。'),explain:true,story:true});
const choice=(id,en,zh,answer,options,hintEn,hintZh)=>({id,type:'choice',prompt:P(en,zh),answer,options:options.map(([v,e,z])=>[v,P(e,z)]),hint:P(hintEn,hintZh),explain:true});
const zeroModel=(a,b)=>({kind:'factzero',a,b});
const explained=q=>({...q,explain:true});
const lesson=(id,title,teach,practical,together,easy,normal,difficult,workshop)=>({id,title,objective:[2,3,4,5],teach,practical,together,practice:{easy,normal,difficult},...(workshop?{workshop}:{})});
const lessons=[
lesson('p2-facts34',P('Build the 3 and 4 facts','建立3和4的算式'),[
 {text:P('Work on one family at a time. For three groups, use two groups and one more: 3 × 6 = 12 + 6 = 18. Build the two parts with counters.','每次研究一組算式。三組可用兩組加一組：3 × 6＝12＋6＝18。用圓片擺出兩部分。'),visual:{kind:'factsplit',a:3,b:6,k:2,op:'+'}},
 {text:P('In another short session, double two groups to make four: 4 × 6 = 12 + 12 = 24. Each part has two rows of six.','另一次短課節，把兩組加倍成四組：4 × 6＝12＋12＝24，每部分有兩行，每行六個。'),visual:{kind:'factsplit',a:4,b:6,k:2,op:'+'}},
 {text:P('Try 3 × 7 and 4 × 7 with objects. Turn each array to connect 7 × 3 and 7 × 4. Explain the parts before covering them and finding the product again.','用實物試3 × 7和4 × 7，轉動排列，連繫7 × 3及7 × 4。先解釋各部分，再遮起來重新求積。'),visual:V(4,7)}],
 P('Use two colours or separate trays to show 2 groups plus 1, then 2 groups plus 2. Choose a new group size and explain. Record counted, derived, recalled or looked up; a correct answer does not identify the method.','用兩種顏色或不同盤表示兩組加一組，再擺兩組加兩組。自選每組數量並解釋，記錄點算、推算、記得或查表；答對不代表用了哪種方法。'),
 [split('f34-g1',3,4,2),split('f34-g2',4,5,2)],
 [split('f34-e1',3,2,2),fact('f34-e2',3,5),split('f34-e3',4,3,2)],
 [fact('f34-n1',3,8),fact('f34-n2',4,7),fact('f34-n3',9,3)],
 [explained(fact('f34-d1',4,9)),explained(fact('f34-d2',3,7)),sentence('f34-d3',4,8,'Four trays each hold 8 buns. Write a multiplication statement and explain the total buns.','四盤每盤8個包，寫乘法算式並解釋包的總數。')]),
lesson('p2-facts68',P('Double to build 6 and 8 facts','用加倍建立6和8的算式'),[
 {text:P('Six groups can be made from three groups and another three. If 3 × 7 = 21, then 6 × 7 = 21 + 21 = 42. Keep seven objects in each group.','六組可由三組加三組組成。3 × 7＝21，所以6 × 7＝21＋21＝42，每組仍有七個。'),visual:{kind:'factsplit',a:6,b:7,k:3,op:'+'}},
 {text:P('Later, build eight groups from four and four. If 4 × 6 = 24, then 8 × 6 = 24 + 24 = 48. The number of groups doubles; the group size stays six.','之後用四組加四組建立八組。4 × 6＝24，所以8 × 6＝24＋24＝48。組數加倍，每組仍是六個。'),visual:{kind:'factsplit',a:8,b:6,k:4,op:'+'}},
 {text:P('You can instead add one group to a known neighbour. To move from 6 × 4 to 7 × 4, add four, not one. Explain why with an extra tray.','也可在已知鄰近算式加一組。從6 × 4到7 × 4，應加四，不是加一；用多一個盤解釋。'),visual:{kind:'track',values:['6 × 4 = 24','24 + 4 = 28','7 × 4 = 28']}}],
 P('Make a 3-row array and copy it to form 6 rows. On another day copy 4 rows to form 8. Predict the product before counting. Explain what doubled and what stayed the same.','擺三行，再擺相同三行成六行。另一天把四行加倍成八行，先預測積再點算，解釋甚麼加倍、甚麼不變。'),
 [split('f68-g1',6,4,3),split('f68-g2',8,3,4)],
 [fact('f68-e1',6,2),split('f68-e2',6,5,3),split('f68-e3',8,2,4)],
 [fact('f68-n1',6,7),fact('f68-n2',8,4),fact('f68-n3',8,5)],
 [explained(fact('f68-d1',8,8)),explained(fact('f68-d2',6,9)),sentence('f68-d3',8,7,'Eight boxes each have 7 pencils. Write the multiplication and explain the total pencils.','八盒每盒7枝鉛筆，寫乘法算式並解釋鉛筆總數。')]),
lesson('p2-facts79',P('Use nearby facts for 7 and 9','用鄰近算式建立7和9'),[
 {text:P('Seven groups can be split into five and two. For 7 × 6, use 5 × 6 = 30 and 2 × 6 = 12. Altogether there are 42 counters.','七組可分成五組和兩組。7 × 6可用5 × 6＝30和2 × 6＝12，共42個圓片。'),visual:{kind:'factsplit',a:7,b:6,k:5,op:'+'}},
 {text:P('In another session, make ten groups and remove one to get nine. 9 × 7 = 70 − 7 = 63. Remove a whole group of seven, not just one counter.','另一次課節先擺十組，再拿走一組得九組。9 × 7＝70－7＝63。要拿走整組七個，不是只拿走一個圓片。'),visual:{kind:'factsplit',a:9,b:7,k:10,op:'-'}},
 {text:P('Choose a method you can explain. For 7 × 8, five groups and two groups give 40 + 16 = 56. Turning the array also gives 8 × 7 = 56.','選擇自己能解釋的方法。7 × 8可分成五組和兩組：40＋16＝56。轉動排列也得8 × 7＝56。'),visual:V(7,8)}],
 P('Build 7 groups as 5 and 2. Later build 10 groups, remove one and explain the 9 fact. Choose an unfamiliar fact; say which known fact helped. Keep oral evidence separate.','把七組分成五組和兩組；之後擺十組，拿走一組並解釋9的算式。選一條不熟悉的算式，說出用哪條已知算式幫助，口述證據另記。'),
 [split('f79-g1',7,4,5),split('f79-g2',9,6,10,'-')],
 [split('f79-e1',7,2,5),fact('f79-e2',7,5),split('f79-e3',9,3,10,'-')],
 [fact('f79-n1',7,7),fact('f79-n2',9,8),fact('f79-n3',7,9)],
 [explained(fact('f79-d1',9,9)),choice('f79-d2','To find 9 × 8 from 10 × 8 = 80, what should you remove?','用10 × 8＝80求9 × 8，應拿走多少？','8',[['8','One whole group of 8','整組8個'],['1','One counter','1個圓片'],['9','Nine counters','9個圓片']],'There is one fewer group, and each group has eight.','少一組，每組有八個。'),sentence('f79-d3',7,6,'Seven packets each have 6 cards. Write the multiplication and total cards.','七包每包6張卡，寫乘法算式及卡的總數。')]),
lesson('p2-facttable',P('Build the 2–10 table in sessions','分節建立2至10乘法表'),[
 {text:P('Choose one row in the workshop below. Begin with 2, 5 and 10, then try 3, 4, 6, 8, 7 and 9 over several sessions. Each box asks for a product; answers begin blank.','在下面工作坊選一行，先2、5、10，再分節試3、4、6、8、7、9。每格填積，答案開始時留空。'),visual:V(3,5)},
 {text:P('Use objects or a fact you already know. Record whether you counted, derived, recalled or looked up the answer. Changing a method does not change your marks.','用實物或已知算式幫助，記錄是點算、推算、記得或查表。改變方法記錄不會改變分數。'),visual:{kind:'track',values:['6 × 7 = 42','7 × 6 = 42','7 × 7 = 42 + 7']}},
 {text:P('Work across all nine rows to construct the 81 ordered facts from 2 × 2 to 10 × 10. Compare swapped pairs and explain equal products. Then move to the next lessons on 1 and 0. You may pause and return; no time target.','逐次完成九行，建立2 × 2至10 × 10的81條有次序算式，比較交換因數後的積並解釋。然後學下一課的1和0，可暫停再回來，不設時限。')}],
 P('Construct the 2–10 table across several days. Ask the learner to explain selected cells and correct errors with objects. Cover selected cells later and record the method actually used; a filled table is not proof of recall.','分幾天建立2至10乘法表，請學習者解釋部分格子並用實物改正。之後遮住部分格子，記錄實際方法；填完整表不等於能默記。'),
 [fact('ftb-g1',2,9),fact('ftb-g2',5,8)],
 [fact('ftb-e1',10,7),fact('ftb-e2',5,9),fact('ftb-e3',2,8)],
 [fact('ftb-n1',4,8),fact('ftb-n2',6,6),fact('ftb-n3',8,9)],
 [explained(fact('ftb-d1',10,10)),explained(fact('ftb-d2',7,8)),explained(fact('ftb-d3',9,6))],'core'),
lesson('p2-timesone',P('One group and one in each','一組與每組一個'),[
 {text:P('After constructing the 2–10 table, investigate one. One tray holds seven counters: 1 × 7 = 7. There is only one group to count.','建立2至10乘法表後，研究一。只有一盤，內有七個圓片：1 × 7＝7，只需數一組。'),visual:V(1,7)},
 {text:P('Seven trays each hold one counter: 7 × 1 = 7. These are different arrangements with the same total. Turning a one-row array connects both facts.','七盤每盤一個圓片：7 × 1＝7。兩種擺法不同，總數相同，轉動一行的排列可連繫兩條算式。'),visual:V(7,1)},
 {text:P('Multiplying by one keeps the number. It does not mean adding one: 6 × 1 = 6, while 6 + 1 = 7. Build the one row and one column in the workshop; zero will come next.','乘一後數不變，並非加一：6 × 1＝6，而6＋1＝7。在工作坊建立有1的行和列，零留待下一課。'),visual:{kind:'track',values:['1 × 6 = 6','6 × 1 = 6','6 + 1 = 7']}}],
 P('Compare one tray of objects with several trays holding one each. Choose numbers from 1 to 10. Say what each number means and why the total is unchanged.','比較一盤多個物件與多盤每盤一個，自選1至10的數，解釋每個數的意思及為何總數不變。'),
 [fact('one-g1',1,7),fact('one-g2',7,1)],
 [fact('one-e1',1,3),fact('one-e2',5,1),fact('one-e3',1,1)],
 [fact('one-n1',10,1),fact('one-n2',1,9),sentence('one-n3',8,1,'Eight children each have one badge. Write the multiplication and total badges.','八位小朋友每人一個襟章，寫乘法算式及襟章總數。')],
 [choice('one-d1','Which describes 6 × 1?','哪項描述6 × 1？','six',[['six','Six groups with one in each: 6','六組每組一個：6'],['seven','Six plus one: 7','六加一：7'],['one','Always one','一定是1']],'Count the objects in all six groups.','數六組的所有物件。'),explained(fact('one-d2',1,8)),sentence('one-d3',1,10,'One box holds 10 crayons. Write the multiplication and total crayons.','一盒有10枝蠟筆，寫乘法算式及蠟筆總數。')],'one'),
lesson('p2-timeszero',P('Empty groups and no groups','空組與沒有組'),[
 {text:P('Four trays are empty. Each has zero counters: 4 × 0 = 0. The trays are there, but there are no counters altogether.','四盤都是空的，每盤零個圓片：4 × 0＝0。盤存在，但全部沒有圓片。'),visual:zeroModel(4,0)},
 {text:P('If we take no trays of four counters, there are also no counters: 0 × 4 = 0. Zero groups differs from four empty groups, although both products are zero.','如果一盤也不取，每盤原定四個圓片，總共也沒有圓片：0 × 4＝0。零組與四個空組不同，但積都是零。'),visual:zeroModel(0,4)},
 {text:P('Any number multiplied by zero gives zero, including 0 × 0. Adding zero is different: 6 + 0 = 6, but 6 × 0 = 0. Complete the zero row and column below.','任何數乘零都是零，包括0 × 0。加零則不同：6＋0＝6，但6 × 0＝0。在下面完成有零的行與列。'),visual:{kind:'track',values:['6 × 0 = 0','0 × 6 = 0','0 × 0 = 0','6 + 0 = 6']}}],
 P('Show several empty trays, then no trays. Explain the group count and number in each in both situations. Compare multiplying by zero with adding zero using real objects.','展示幾個空盤，再展示沒有盤，解釋兩種情況的組數與每組數量，用實物比較乘零與加零。'),
 [fact('zero-g1',4,0),fact('zero-g2',0,4)],
 [fact('zero-e1',3,0),fact('zero-e2',0,6),fact('zero-e3',0,0)],
 [fact('zero-n1',10,0),fact('zero-n2',0,1),sentence('zero-n3',5,0,'Five empty bags each contain zero marbles. Write the multiplication and total marbles.','五個空袋每袋零粒波子，寫乘法算式及波子總數。')],
 [choice('zero-d1','Which gives the number of counters in eight empty trays?','八個空盤共有多少個圓片？','zero',[['zero','8 × 0 = 0','8 × 0＝0'],['eight','8 × 0 = 8','8 × 0＝8'],['one','8 × 0 = 1','8 × 0＝1']],'The tray count is eight; the counter count is zero.','盤數是八，圓片數是零。'),explained(fact('zero-d2',1,0)),sentence('zero-d3',0,9,'No packets are taken. Each packet would hold 9 stickers. Write the multiplication and total stickers taken.','一包也沒取，每包原定9張貼紙。寫乘法算式及取走的貼紙總數。')],'zero'),
lesson('p2-factuse',P('Choose, explain and revisit facts','選方法、解釋及重溫'),[
 {text:P('Return to any row in the full 0–10 workshop. It offers all 121 ordered facts, including both zero and one columns. Complete small sections and revisit them on another day.','回到完整0至10工作坊的任何一行，內有121條有次序算式，包括零和一的列。每次完成小部分，另一天再重溫。'),visual:{kind:'track',values:['0 × 10','1 × 10','9 × 7','10 × 10']}},
 {text:P('A filled table records work you constructed. To explore recall, cover the table and try a few facts on paper. An adult records the exact facts and whether you recalled, derived, counted or looked them up. There is no speed test.','填好的表記錄已建立的算式。想了解記憶情況，可遮表在紙上試幾條，成人記下確切算式及是記得、推算、點算或查表，不設速度測試。'),visual:V(6,8)},
 {text:P('For a story, identify equal groups, write the two factors and product, then give the unit and explanation. Seven boxes of eight pencils give 56 pencils. A correct total alone does not explain the model.','解情境題時，找出等量各組，寫兩個因數與積，再說單位和解釋。七盒每盒八枝鉛筆，共56枝；只答對總數未能解釋模型。'),visual:V(7,8)}],
 P('Invent a story for a chosen fact, including a one or zero case. A partner builds it and explains both factors. Later sample different facts with the table covered, recording each response and method separately from story explanations.','自選算式創作情境，包括一或零的例子，伙伴擺出並解釋兩個因數。之後遮表抽查不同算式，每條答案和方法另記，與情境解釋分開。'),
 [sentence('use-g1',6,8,'Six shelves each hold 8 books. Write the multiplication and total books.','六層架每層8本書，寫乘法算式及書的總數。'),sentence('use-g2',1,9,'One packet holds 9 cards. Write the multiplication and total cards.','一包有9張卡，寫乘法算式及卡的總數。')],
 [fact('use-e1',2,10),fact('use-e2',1,6),fact('use-e3',0,8)],
 [fact('use-n1',8,7),sentence('use-n2',9,4,'Nine tables each have 4 cups. Write the multiplication and total cups.','九桌每桌4隻杯，寫乘法算式及杯的總數。'),sentence('use-n3',7,0,'Seven boxes are empty. Write the multiplication and total toys inside.','七盒都是空的，寫乘法算式及盒內玩具總數。')],
 [explained(fact('use-d1',9,9)),sentence('use-d2',8,9,'Eight sheets each show 9 stamps. Write the multiplication and total stamps.','八張紙每張9枚郵票，寫乘法算式及郵票總數。'),choice('use-d3','A pupil filled the table while looking at an answer sheet. What does this show?','學生看答案紙填完乘法表，這能說明甚麼？','work',[['work','The table was filled with support; recall needs another observation','在協助下填完；記憶情況要另行觀察'],['recall','Every fact was recalled without help','全部算式都能獨立記起']],'Record the actual method and support.','記錄實際方法和協助。')],'all')
];
const check=[fact('fc-1',3,8),split('fc-2',4,7,2),fact('fc-3',6,9),fact('fc-4',8,8),split('fc-5',7,6,5),split('fc-6',9,8,10,'-'),fact('fc-7',10,10),fact('fc-8',1,9),fact('fc-9',0,10),fact('fc-10',0,0),sentence('fc-11',7,8,'Seven trays each hold 8 buns. Write the multiplication and total buns.','七盤每盤8個包，寫乘法算式及包的總數。'),choice('fc-12','Is 8 × 0 the same as 8 + 0?','8 × 0與8＋0相同嗎？','no',[['no','No: the results are 0 and 8','不同，結果是0和8'],['yes','Yes: both are 8','相同，都是8']],'Compare eight empty groups with eight objects and no more added.','比較八個空組與八個物件沒有增加。')];
const tableFacts=Array.from({length:11},(_,a)=>Array.from({length:11},(_,b)=>({...fact(`table-${a}-${b}`,a,b),table:true}))).flat();
const D={path:'facts',storageKey:'mathquiz-p2-facts-v1',code:'2N3',title:P('Build and use multiplication facts','建立及運用乘法算式'),checkTitle:P('Multiplication facts sample check','乘法算式抽樣小測'),intro:P('Continue after equal groups and arrays. Build the remaining facts across short sessions, construct the 2–10 table, then investigate ×1 and ×0. The full workshop has 121 ordered facts; a completed table and this small check do not certify unaided recall.','在等量分組與排列之後，分短課節建立其餘算式及2至10乘法表，再研究乘1與乘0。完整工作坊有121條有次序算式；填完整表與這份抽樣小測都不證明能獨立默記。'),activity:'activities/p2-basic-multiplication.html',levels:['easy','normal','difficult'],lessons,check,tableFacts,checkRevisits:[0,0,1,1,2,2,3,4,5,5,6,5],all:[...lessons.flatMap(l=>[...l.together,...Object.values(l.practice).flat()]),...check,...tableFacts]};
root.MathQuizP2Facts=D;if(typeof module!=='undefined')module.exports=D;
})(typeof window!=='undefined'?window:globalThis);
