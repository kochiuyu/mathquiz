/* Stable 2N1 teaching and response IDs. Arrays are [English, Traditional Chinese]. */
((root)=>{
'use strict';
const pair=(en,zh)=>[en,zh];
const num=(id,prompt,answer,hint,visual)=>({id,prompt,answer:String(answer),hint,visual,type:'number'});
const choice=(id,prompt,answer,options,hint)=>({id,prompt,answer,options,hint,type:'choice'});
const model=(id,n)=>num(id,pair('Write the number shown by the blocks.','寫出積木表示的數。'),n,pair('Count hundreds, then tens, then ones. Keep an empty place with 0.','先數百，再數十，最後數個。空位用0表示。'),{kind:'place',n});
const digit=(id,n,place)=>{const value=Math.floor(n/place)%10*place;return num(id,pair(`In ${n}, what is the value of the digit in the ${place===100?'hundreds':'tens'} place?`,`${n}的${place===100?'百':'十'}位數字表示多少？`),value,pair('A digit’s place tells us its value.','數字的位置告訴我們它的值。'),{kind:'numeral',n});};
const seq=(id,arr,answer)=>num(id,pair('Count by ones. Fill the gap: '+arr.join(', '),'逐一數，填上空格：'+arr.join('、')),answer,pair('Say each number in order. Notice whether the sequence goes up or down.','依次讀數，留意數列是順數還是倒數。'));
const parity=(id,n)=>choice(id,pair(`Is ${n} odd or even? Say why using its ones digit.`,`${n}是單數還是雙數？用個位數字解釋。`),n%2?'odd':'even',[['odd',pair('Odd','單數')],['even',pair('Even','雙數')]],pair('Complete tens pair evenly. Only the ones decide whether one is left over.','完整的十能兩兩配對，個位決定是否剩下一個。'));
const compare=(id,a,b)=>choice(id,pair(`Say the relationship, then choose: ${a} __ ${b}`,`先說出大小關係，再選擇：${a} __ ${b}`),a===b?'=':a>b?'>':'<',[['<',pair('< less than','< 小於')],['=',pair('= equal to','= 等於')],['>',pair('> greater than','> 大於')]],pair('Compare hundreds first, then tens, then ones. The open end faces the greater number.','先比較百位，再比較十位，最後比較個位。開口朝向較大的數。'));
const order=(id,values,descending=false)=>({id,type:'order',prompt:pair('Put these in '+(descending?'greatest-to-smallest':'smallest-to-greatest')+' order: '+values.join(', '),'把以下各數由'+(descending?'大至小':'小至大')+'排列：'+values.join('、')),values,answer:[...values].sort((a,b)=>descending?b-a:a-b).join(','),hint:pair('Compare the first different place. Enter one number in each box.','比較第一個不同的數位，每格填一個數。')});
const groups=(id,size,count)=>num(id,pair(`Point to each group of ${size} and say the running totals. How many altogether?`,`指着每組${size}個，說出累計的數。一共有多少個？`),size*count,pair('Count on one group at a time; you do not need a multiplication sentence.','每次加數一組，不需要乘法算式。'),{kind:'groups',size,count});
const estimate=(id,total,reference)=>({id,type:'estimate',prompt:pair('Use the reference collection. Estimate the other collection before counting.','參考已知數量的一堆，先估計另一堆，再點算。'),total,reference,hint:pair('About how many reference groups would fit? An estimate need not be exact.','大約相當於多少堆參考數量？估計不必完全準確。')});
const lessons=[
 {id:'p2-hundred',title:pair('Build a hundred','建立一百的概念'),objective:[1,2],teach:[
  {text:pair('Ten ones make a ten. Ten tens make one hundred. Each small square below is one. Count the ten rows of ten in a hundred block.','十個一是一個十，十個十是一個百。下面每小格代表一，數一數百塊中的十行，每行十格。'),visual:{kind:'exchange'}},
  {text:pair('243 has 2 hundreds, 4 tens and 3 ones: 200 + 40 + 3. The digit 2 has value 200 because it is in the hundreds place.','243有2個百、4個十和3個一：200＋40＋3。數字2在百位，所以表示200。'),visual:{kind:'place',n:243}},
  {text:pair('304 has 3 hundreds, no tens and 4 ones. Write 0 in the tens place. Without it, 34 would mean a different number.','304有3個百、0個十和4個一。十位要寫0；沒有這個0，34就表示另一個數。'),visual:{kind:'place',n:304}}],
  practical:pair('Build ten bundles of ten with an adult. Exchange them for one hundred. Build 243 and 304; point to each place and read the numbers aloud.','與成人把十個十捆成一百，再砌出243和304，指出每個數位並朗讀。'),
  together:[model('h-g1',230),digit('h-g2',304,100)],
  practice:{easy:[model('h-e1',100),model('h-e2',243),model('h-e3',304)],normal:[model('h-n1',507),digit('h-n2',426,100),digit('h-n3',680,10)],difficult:[model('h-d1',999),digit('h-d2',909,10),model('h-d3',806)]}},
 {id:'p2-sequence',title:pair('Read, count and notice','讀數、數數與觀察'),objective:[1],teach:[
  {text:pair('Read 105 as one hundred and five, and 240 as two hundred and forty. Read each whole number, then write its hundreds, tens and ones digits.','105讀作一百零五，240讀作二百四十。先讀整個數，再寫出百位、十位和個位。'),visual:{kind:'place',n:105}},
  {text:pair('Counting forward: 198, 199, 200, 201. After 199, exchange ten ones for a ten and ten tens for a hundred. Backward: 302, 301, 300, 299.','順數：198、199、200、201。199之後，把十個一換成十，十個十換成百。倒數：302、301、300、299。'),visual:{kind:'track',values:[198,199,200,201]}},
  {text:pair('Hundreds and tens pair evenly. Look at the ones: 0, 2, 4, 6, 8 mean even; 1, 3, 5, 7, 9 mean odd. So 304 is even and 305 is odd.','百和十都能兩兩配對。看個位：0、2、4、6、8是雙數；1、3、5、7、9是單數。所以304是雙數，305是單數。'),visual:{kind:'track',values:[304,305]}}],
  practical:pair('Read 105, 402 and 999 aloud. Ask an adult to dictate 307, 590 and 816; write them on paper. Count backward from 203 to 197.','朗讀105、402和999。請成人讀出307、590和816，把數字寫在紙上。從203倒數至197。'),
  together:[seq('s-g1',[198,199,'?',201],200),parity('s-g2',305)],
  practice:{easy:[seq('s-e1',[108,109,'?',111],110),seq('s-e2',[202,201,'?',199],200),parity('s-e3',240)],normal:[seq('s-n1',[298,299,'?',301],300),seq('s-n2',[401,400,'?',398],399),parity('s-n3',507)],difficult:[seq('s-d1',[997,998,'?'],999),seq('s-d2',[101,100,'?',98],99),parity('s-d3',910)]}},
 {id:'p2-compare',title:pair('Compare and order','比較與排列'),objective:[3],teach:[
  {text:pair('Say “305 is less than 350”. Both have 3 hundreds. Compare tens: no tens is less than 5 tens. Ones cannot outweigh a whole ten.','先說「305小於350」。兩個數都有3個百，再比較十位：0個十少於5個十。個位的數量不會多過一個十。'),visual:{kind:'track',values:[305,350]}},
  {text:pair('Write 305 < 350 or 350 > 305. The open end faces the greater number. Equal amounts use =, so 628 = 628.','寫作305＜350，或350＞305。開口朝向較大的數。相同的數用＝，所以628＝628。'),visual:{kind:'track',values:['305 < 350','628 = 628']}},
  {text:pair('To order 430, 340 and 403 from smallest to greatest, compare hundreds, then tens: 340, 403, 430. Reverse the order for greatest to smallest.','把430、340和403由小至大排列，先比較百位，再比較十位：340、403、430。由大至小排列時，把次序倒轉。'),visual:{kind:'track',values:[340,403,430]}}],
  practical:pair('Make number cards 305, 350, 503 and 530. Say each comparison before writing a symbol. Arrange the cards in both directions and explain the first different place.','製作305、350、503和530數字卡。先說出比較，再寫符號。以兩個方向排列，解釋第一個不同的數位。'),
  together:[compare('c-g1',305,350),order('c-g2',[430,340,403])],
  practice:{easy:[compare('c-e1',200,300),compare('c-e2',628,628),compare('c-e3',700,699)],normal:[compare('c-n1',305,350),order('c-n2',[403,340,430]),order('c-n3',[124,56,223],true)],difficult:[compare('c-d1',909,990),order('c-d2',[909,990,900],true),compare('c-d3',999,999)]}},
 {id:'p2-groups',title:pair('Count bigger groups','以較大的組數數'),objective:[4],teach:[
  {text:pair('Check one group first. Each tray has 20 dots. Point to the trays and count: 20, 40, 60, 80, 100, 120.','先檢查一組，每盤有20點。指着各盤數：20、40、60、80、100、120。'),visual:{kind:'groups',size:20,count:6}},
  {text:pair('For groups of 25, count 25, 50, 75, 100. Four groups reach a hundred. Touch each group only once.','每組25，數25、50、75、100。四組是一百，每組只點數一次。'),visual:{kind:'groups',size:25,count:4}},
  {text:pair('For 50s: 50, 100, 150, 200. For 100s: 100, 200, 300, 400. Say the running totals; no multiplication method is needed.','每組50：50、100、150、200。每組100：100、200、300、400。說出累計數量，不需要乘法。'),visual:{kind:'groups',size:50,count:4}}],
  practical:pair('With an adult, prepare and check real groups of 20, 25, 50 and 100. Point and say the running total for six groups of each size. Ask the adult to note the counting action, not just the final total.','與成人準備及檢查每組20、25、50和100個實物。每種各六組，逐組指着說出累計數量。請成人記錄數數的過程，而不只是總數。'),
  together:[groups('g-g1',25,4),groups('g-g2',100,3)],
  practice:{easy:[groups('g-e1',20,3),groups('g-e2',25,2),groups('g-e3',100,2)],normal:[groups('g-n1',50,5),groups('g-n2',25,6),groups('g-n3',20,6)],difficult:[groups('g-d1',100,9),groups('g-d2',25,7),groups('g-d3',50,7)]}},
 {id:'p2-estimate',title:pair('Estimate then check','先估計，再驗證'),objective:[5],teach:[
  {text:pair('An estimate is a thoughtful approximate count. First count a reference collection of 50. Compare another collection with it before counting every object.','估計是有根據地判斷大約數量。先點算50個作參考，再與另一堆比較，不要立即逐一點算。'),visual:{kind:'groups',size:50,count:1}},
  {text:pair('If a collection looks about three times as many as a reference of 50, about 150 is a reasonable starting estimate. Explain your reference and record the estimate before checking.','如果一堆看來約有參考的50個的三倍，可先估計約150個。解釋怎樣用參考數量，並在驗證前記錄估計。')},
  {text:pair('Then count carefully in groups. Keep your first estimate and explain what you would change next time. Spreading objects out changes their appearance, not their number. There is no accuracy pass mark.','再分組仔細點算。保留最初的估計，說明下次會怎樣改進。把物件攤開會改變外觀，不會改變數量。估計沒有準確度合格線。')}],
  practical:pair('Ask an adult to prepare a hidden-total collection below 1000 and a counted reference. Predict, explain, count, then discuss. Speak or draw if typing is difficult; ask the adult to record your words.','請成人準備少於1000個、未告知總數的物件，以及已點算的參考一堆。先預測和解釋，再點算和討論。可說或畫，請成人代記。'),
  together:[estimate('e-g1',138,50),estimate('e-g2',275,100)],
  practice:{easy:[estimate('e-e1',112,50),estimate('e-e2',156,50),estimate('e-e3',208,100)],normal:[estimate('e-n1',235,100),estimate('e-n2',318,100),estimate('e-n3',182,50)],difficult:[estimate('e-d1',427,100),estimate('e-d2',365,100),estimate('e-d3',548,100)]}}
];
const check=[model('check-1',706),digit('check-2',582,100),seq('check-3',[598,599,'?',601],600),seq('check-4',[701,700,'?',698],699),parity('check-5',803),compare('check-6',450,405),compare('check-7',812,812),order('check-8',[619,691,609]),groups('check-9',25,5),choice('check-10',pair('Which is a useful estimation method?','哪個估計方法較有幫助？'),'reference',[['reference',pair('Compare with a counted reference, record, then check','與已點算的參考比較，記錄後再驗證')],['space',pair('Count only the space the objects cover','只看物件佔的空間')],['copy',pair('See the total first and copy it','先看總數，再抄寫')]],pair('Explain how you used a known amount before revealing the count.','在揭示總數前，解釋如何運用已知數量。'))];
const data={version:1,lessons,check,levels:['easy','normal','difficult'],all:[...lessons.flatMap(l=>[...l.together,...Object.values(l.practice).flat()]),...check]};
root.MathQuizP2Data=data;if(typeof module!=='undefined')module.exports=data;
})(typeof window!=='undefined'?window:globalThis);
