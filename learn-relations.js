/* Original P1 1N1/1N2/1N3 lessons: position, pairing and comparison differences. */
((root)=>{
'use strict';const pair=(a,b)=>[a,b],row=(n,star)=>({kind:'ordinal',n,star}),parity=(...values)=>({kind:'parity',values}),rows=(a,b)=>({kind:'difference',a,b});
const item=(id,lesson,prompt,answer,why,visual)=>({id,lesson,prompt,answer,why,visual});
const lessons=[
 {id:'position',title:pair('Which position?','排在第幾？'),goal:pair('Distinguish how many from which position, up to twenty.','分清總數和次序，學習二十以內的位置。'),steps:[
  {title:pair('How many, or which one?','有多少個，還是第幾個？'),text:pair('There are six tokens altogether. Counting from the left, the star is third: first, second, third. Six tells how many; third tells the star’s position.','共有六個圖案。由左邊數，星星排第三：第一、第二、第三。六表示總數，第三表示星星的位置。'),visual:row(6,3)},
  {title:pair('Choose the starting end','先確定從哪邊數'),text:pair('In the same row, count from the right: first, second, third, fourth. The star is fourth from the right. Always check which end the question names.','同一行改由右邊數：第一、第二、第三、第四。星星是右起第四個。先看清題目指定哪一邊。'),visual:row(6,3)},
  {title:pair('Position is not the total','位置不是總數'),text:pair('There are eight tokens. The star is second from the left, but eight tokens are still in the row. Point to each token once when checking its position.','共有八個圖案。星星是左起第二個，但整行仍有八個。核對位置時，每個圖案只指一次。'),visual:row(8,2)}
 ]},
 {id:'parity',title:pair('Odd or even?','單數還是雙數？'),goal:pair('Make pairs, then use the ones digit for larger numbers.','兩個配成一對，再看個位判斷較大的數。'),steps:[
  {title:pair('Make pairs','兩個配成一對'),text:pair('Eight counters make complete pairs with none left alone: eight is even. Nine leaves one alone: nine is odd. Try pairing real counters too.','八個圓片全部能兩個一對，沒有單獨留下的，所以八是雙數。九個會剩一個單獨的，所以九是單數。也可用實物配對試試。'),visual:parity(8,9)},
  {title:pair('Zero is even','零也是雙數'),text:pair('Zero has no counters left alone, so zero is even. Even numbers end in 0, 2, 4, 6 or 8. Odd numbers end in 1, 3, 5, 7 or 9.','零沒有單獨留下的圓片，所以零也是雙數。雙數的個位是0、2、4、6或8；單數的個位是1、3、5、7或9。'),visual:parity(0,1)},
  {title:pair('Look at the ones','看個位'),text:pair('Each full ten can be paired with none left alone. For 23, the three ones leave one alone, so 23 is odd. For 32, the two ones pair up, so 32 is even. Look at the ones digit, not the tens digit.','每個完整的十都能配對，沒有單獨留下的。23的三個一會剩一個，所以23是單數。32的兩個一能配對，所以32是雙數。要看個位，不是十位。'),visual:parity(23,32)}
 ]},
 {id:'difference',title:pair('How many more or fewer?','多多少？少多少？'),goal:pair('Match two rows to find the difference.','把兩行一一對應，找出相差多少。'),steps:[
  {title:pair('Match one to one','一一配對'),text:pair('Row A has eight counters and row B has five. Match the first five in each row. Three in A have no partner: A has three more than B. We can write 8 − 5 = 3.','A行有八個，B行有五個。先把兩行各五個一一配對。A行有三個沒有對應的，所以A比B多三個。可寫成8 − 5 = 3。'),visual:rows(8,5)},
  {title:pair('Fewer describes the same gap','少多少也是同一差距'),text:pair('Row B has three fewer than row A. The difference is still three. Do not count the matched counters again; count the ones without partners.','B行比A行少三個，相差仍是三個。不要把已配對的再數一次，要數沒有對應的。'),visual:rows(8,5)},
  {title:pair('Equal groups have no gap','一樣多就沒有差距'),text:pair('Both rows have six. Every counter has a partner, so the difference is zero. Comparing does not mean taking the objects away.','兩行都是六個，每個都有對應的，所以相差零。比較數量不代表真的把物件拿走。'),visual:rows(6,6)}
 ]}
];
const positions=[[6,3],[7,2],[8,4],[5,1],[10,10],[9,6],[12,5],[14,10],[16,8],[18,17],[20,1],[20,20]];
const numbers=[[4,5],[7,8],[10,11],[13,14],[16,17],[19,20],[6,9],[12,15],[2,3],[18,7],[0,1],[8,5]];
const comparisons=[[8,5],[9,4],[7,3],[6,6],[10,4],[12,5],[14,8],[16,7],[18,9],[11,2],[9,0],[13,6]];
function ordinal(id,n,star,from='left',prompt){const answer=from==='left'?star:n-star+1;return item(id,'position',prompt||pair(`Count from the ${from.toUpperCase()}. What is the star’s position? Enter the position number.`,`由${from==='left'?'左':'右'}邊數，星星排第幾？輸入次序的數字。`),answer,pair(`Start at the ${from} and count each token once. The star is at position ${answer}; the row has ${n} tokens altogether.`,`由${from==='left'?'左':'右'}邊開始，每個只數一次。星星排第${answer}，整行共有${n}個圖案。`),row(n,star));}
function oddEven(id,a,b,want='even',prompt){const values=[a,b],answer=values.find(n=>n%2===(want==='odd'?1:0));return item(id,'parity',prompt||pair(`Which number is ${want.toUpperCase()}: ${a} or ${b}? Enter that number.`,`${a}或${b}，哪個是${want==='odd'?'單':'雙'}數？輸入那個數。`),answer,pair(`${answer} is ${want}. Its ones digit is ${answer%10}. ${want==='even'?'Pairing leaves none alone.':'Pairing leaves one alone.'}`,`${answer}是${want==='odd'?'單':'雙'}數，個位是${answer%10}。${want==='even'?'配對後沒有單獨留下的。':'配對後剩一個單獨的。'}`),parity(a,b));}
function compare(id,a,b,mode='more',prompt){const bigger=Math.max(a,b),smaller=Math.min(a,b),large=a>=b?'A':'B',small=a>=b?'B':'A',answer=bigger-smaller;return item(id,'difference',prompt||pair(mode==='more'?`How many MORE counters does row ${large} have than row ${small}?`:`How many FEWER counters does row ${small} have than row ${large}?`,mode==='more'?`${large}行比${small}行多多少個圓片？`:`${small}行比${large}行少多少個圓片？`),answer,pair(`Match ${smaller} in each row. ${answer} have no partner: ${bigger} − ${smaller} = ${answer}.`,`兩行各配對${smaller}個，剩${answer}個沒有對應：${bigger} − ${smaller} = ${answer}。`),rows(a,b));}
function question(lesson,index,seed=0){const k=(index+seed)%12;if(lesson==='position')return ordinal('position-'+k+'-'+index%2,...positions[k],index%2?'right':'left');if(lesson==='parity')return oddEven('parity-'+k+'-'+index%2,...numbers[k],index%2?'odd':'even');const [a,b]=comparisons[k];return index%2?compare('difference-'+k+'-fewer',b,a,'fewer'):compare('difference-'+k+'-more',a,b);}
const tasks={
 position:{normal:()=>[
  ordinal('position-n0',8,3,'right'),
  item('position-n1','position',pair('The star is second from the left. How many tokens are in the WHOLE row?','星星是左起第二個。整行共有多少個圖案？'),8,pair('Count all eight tokens. Second names one position, not the total.','全部數一次，共八個。第二表示位置，不是總數。'),row(8,2)),
  ordinal('position-n2',20,19,'left')
 ],difficult:()=>[
  ordinal('position-d0',8,3,'right',pair('Kai says the star is third from either end. Count from the RIGHT. What is its position?','小佳說星星從兩邊數都是第三。由右邊數，星星排第幾？')),
  ordinal('position-d1',9,4,'left',pair('The star was third from the left. One token joined at the left end. This is the new row. What position is the star now?','星星原是左起第三個。左端加了一個圖案，圖中是新的一行。現在星星排第幾？')),
  ordinal('position-d2',20,20,'right',pair('There are twenty tokens. The star is last from the left. What is its position from the RIGHT?','共有二十個圖案，星星由左邊數排最後。由右邊數排第幾？'))
 ]},
 parity:{normal:()=>[oddEven('parity-n0',0,1),oddEven('parity-n1',31,42,'odd'),oddEven('parity-n2',53,64)],difficult:()=>[
  oddEven('parity-d0',23,32,'even',pair('Kai looks at the tens and says 32 is odd. Look at the ONES. Which is even: 23 or 32?','小佳看十位，說32是單數。要看個位！23或32，哪個是雙數？')),
  oddEven('parity-d1',70,71,'odd',pair('Both numbers have seven tens. Which has one counter left alone after pairing: 70 or 71?','兩個數都有七個十。70或71，哪個配對後會剩一個單獨的？')),
  item('parity-d2','parity',pair('Nine counters leave one alone. Add ONE counter to complete that pair. What even total do you have now?','九個圓片配對後剩一個。再加一個完成那一對，現在共有多少個（雙數）？'),10,pair('The single counter gains a partner. There are ten and none left alone.','單獨的一個有了伙伴，現在十個全部配成對。'),parity(9))
 ]},
 difference:{normal:()=>[compare('difference-n0',5,12,'fewer'),compare('difference-n1',9,18),compare('difference-n2',7,7)],difficult:()=>[
  compare('difference-d0',8,5,'more',pair('Bo counts all eight in A and says A has eight more. Match the rows. How many MORE does A really have?','小寶把A行八個全數了，說A多八個。先配對，A實際比B多多少？')),
  compare('difference-d1',4,11,'fewer',pair('A has fewer counters than B. Kai answers 4, the total in A. How many FEWER does A have?','A比B少。小佳答4，那是A的總數。A比B少多少個？')),
  compare('difference-d2',6,14,'more',pair('How many counters must be added to A so both rows have the SAME number?','A行要加多少個圓片，兩行才會一樣多？'))
 ]}
};
function practice(lesson,level){return level==='easy'?[2,3,4].map(i=>question(lesson,i)):tasks[lesson][level]();}
root.MathQuizLearnRelations={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnRelations;
})(typeof window!=='undefined'?window:globalThis);
