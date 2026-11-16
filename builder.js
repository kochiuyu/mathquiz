// Shared links use permanent template and variant IDs. Add new versions under new IDs.
function percentageQuestion(i){
  const total=[20,40,50][i%3],pct=10+10*Math.floor(i/3),n=total*pct/100;
  return numeric([`Of ${total} pupils, ${n} chose badminton. What percentage chose badminton?`,`${total}名學生中有${n}人選擇羽毛球。選擇羽毛球的學生佔百分之幾？`],["%","%"],pct,`${n} ÷ ${total} × 100% = ${pct}%`);
}
const families = [
  {id:"add1", grade:1, code:"1N2", label:["Addition to 10","10以內的加法"], count:7, make(i){
    const a=i+1,b=1+(i*3 % (10-a));
    return numeric([`There ${a===1?"is":"are"} ${a} red bead${a===1?"":"s"} and ${b} blue bead${b===1?"":"s"}. How many beads are there altogether?`,`有${a}顆紅珠和${b}顆藍珠。共有多少顆珠？`],["beads","顆"],a+b,`${a} + ${b} = ${a+b}`);
  }},
  {id:"next1",grade:1,code:"1N1",label:["Counting forwards","順數"],count:12,make(i){
    return {...numeric([`What comes next?  ${i+1}, ${i+2}, ${i+3}, ___`,`順數下去：${i+1}、${i+2}、${i+3}、___。`],["",""],i+4,`${i+3} + 1 = ${i+4}`),inlineAnswer:true};
  }},
  {id:"count20a",grade:1,code:"1N1",label:["Count pictured counters","點算圖中圓片"],count:20,make(i){
    const n=i+1;
    return {...numeric(["How many counters are shown?","圖中有多少粒圓片？"],[n===1?"counter":"counters","粒"],n,[`Count each counter once: ${n}.`,`逐一數圓片，共${n}粒。`]),figure:{kind:"counters",count:n}};
  }},
  {id:"parts18a",grade:1,code:"1N1",label:["Find the other part","找出另一部分"],count:81,make(i){
    const known=i%9+1,missing=Math.floor(i/9)+1,total=known+missing;
    return {...numeric([`The whole has ${total} counters. One part has ${known} counter${known===1?"":"s"}. How many counters are in the other part?`,`整體有${total}粒圓片，其中一部分有${known}粒。另一部分有多少粒？`],[missing===1?"counter":"counters","粒"],missing,[`${known} and ${missing} make ${total}.`,`${known}和${missing}合起來是${total}。`]),figure:{kind:"parts",total,known}};
  }},
  {id:"pictureadd1",grade:1,code:"1N2",label:["Addition sentence from a picture","看圖寫加法算式"],count:81,make(i){
    const a=i%9+1,b=Math.floor(i/9)+1,total=a+b;
    return {prompt:["Write an addition sentence for the red and blue counters.","看圖中的紅色和藍色圓片，寫出一道加法算式。"],fields:[["",""]],answer:[`${a} + ${b} = ${total}`],why:[`${a} red and ${b} blue make ${total} counters.`,`${a}粒紅色圓片和${b}粒藍色圓片，合起來是${total}粒。`],equation:{a,b,total},figure:{kind:"twoGroups",a,b}};
  }},
  {id:"storyadd1",grade:1,code:"1N2",label:["Addition story","加法情境題"],count:81,make(i){
    const a=i%9+1,b=Math.floor(i/9)+1,total=a+b;
    return {...numeric([`There ${a===1?"is":"are"} ${a} red counter${a===1?"":"s"}. Then ${b} blue counter${b===1?" is":"s are"} added. How many counters are there now?`,`原有${a}粒紅色圓片，再加上${b}粒藍色圓片。現在共有多少粒？`],["counters","粒"],total,[`${a} + ${b} = ${total}.`,`${a} + ${b} = ${total}，共有${total}粒。`]),figure:{kind:"twoGroups",a,b,story:true}};
  }},
  {id:"otherway1",grade:1,code:"1N1",label:["Another way to make a total","另一種組合方法"],count:11,make(i){
    const total=i+6,a=Math.max(1,total-9),b=total-a,other=[a+1,b-1];
    return {prompt:[`The picture shows one way to make ${total}. Show another way to make ${total} with two groups.`,`圖中顯示${total}的一種組合方法。用兩組圓片表示${total}的另一種組合方法。`],fields:[["",""],["",""]],answer:other,marks:1,why:[`Example: ${other[0]} + ${other[1]} = ${total}. Any different pair of positive one-digit parts that makes ${total} is correct. Swapping the pictured groups alone does not count.`,`例如：${other[0]} + ${other[1]} = ${total}。只要另一組正整數個位數的兩部分合起來是${total}，即屬正確。只交換圖中兩組的次序不算另一種方法。`],otherWay:{total,shown:[a,b]},figure:{kind:"twoGroups",a,b}};
  }},
  {id:"triangle1",grade:1,code:"1S2",label:["Recognise a triangle","辨認三角形"],count:9,make(i){
    const letters=["A","B","C"],correct=i%3;
    const rotations=[25,90,155,0,45,115,215,300,340];
    const shapes=letters.map((_,j)=>({kind:j===correct?"triangle":j===(correct+1)%3?"quadrilateral":"circle",rotation:j===correct?rotations[i]:(i*37+j*25)%180}));
    return {prompt:["Which shape is a triangle? Choose one.","哪個圖形是三角形？請選一個。"],choices:letters,answer:[letters[correct]],shapes,why:[`${letters[correct]} has three straight sides joined to make a closed shape. Turning it does not change that.`,`${letters[correct]}由三條直邊連成封閉圖形。它轉了方向，仍是三角形。`]};
  }},
  {id:"compare100a",grade:1,code:"1N3",label:["Compare numbers to 100","比較100以內的數"],count:12,make(i){
    const pairs=[[42,37],[58,53],[29,92],[71,67],[84,89],[100,90],[46,64],[33,39],[78,72],[95,59],[61,60],[27,24]];
    const [a,b]=pairs[i],larger=Math.max(a,b),sameTens=Math.floor(a/10)===Math.floor(b/10);
    const step=sameTens
      ?[`Both numbers have ${Math.floor(a/10)} tens. Compare the ones: ${a%10} and ${b%10}. ${larger} is larger.`,`兩個數都有${Math.floor(a/10)}個十。比較個位：${a%10}和${b%10}。${larger}較大。`]
      :[`Compare the tens first: ${a} has ${Math.floor(a/10)} tens and ${b} has ${Math.floor(b/10)} tens. ${larger} is larger.`,`先比較十位：${a}有${Math.floor(a/10)}個十，${b}有${Math.floor(b/10)}個十。${larger}較大。`];
    return {prompt:[`Which number is larger, ${a} or ${b}? Choose the number.`,`哪個數較大：${a}還是${b}？選出該數。`],choices:[String(a),String(b)],answer:[String(larger)],marks:1,why:step,numberComparison:{a,b,larger}};
  }},
  {id:"tensones1a",grade:1,code:"1N3",label:["Build numbers with tens and ones","用十位和個位組成數字"],count:12,make(i){
    const values=[21,34,40,57,69,72,80,93,26,51,88,99],value=values[i],tens=Math.floor(value/10),ones=value%10;
    return {prompt:["These bundles of ten and loose counters show a number. Write the number.","這些十粒一捆的圓片和單粒圓片表示一個數。寫出這個數。"],fields:[["",""]],answer:[value],marks:1,why:[`${tens} tens make ${tens*10}; add ${ones} ones to get ${value}.`,`${tens}個十是${tens*10}；加上${ones}個一，得到${value}。`],figure:{kind:"tensOnes",tens,ones},numberTo100:true};
  }},
  {id:"countgroups1a",grade:1,code:"1N3",label:["Count groups of 2, 5 or 10","按2、5或10粒一組點算"],count:12,make(i){
    const cases=[[2,7],[2,9],[2,10],[2,8],[5,4],[5,7],[5,9],[5,6],[10,3],[10,5],[10,8],[10,6]];
    const [size,groups]=cases[i],total=size*groups;
    return {prompt:[`Each box has ${size} counters. Count the counters in groups of ${size}. How many are there altogether?`,`每盒有${size}粒圓片。每${size}粒一組點算，圖中共有多少粒圓片？`],fields:[["counters","粒圓片"]],answer:[total],marks:1,why:[`Count ${groups} groups of ${size}: ${Array.from({length:groups},(_,j)=>(j+1)*size).join(", ")}. There are ${total} counters.`,`按每組${size}粒順數${groups}組：${Array.from({length:groups},(_,j)=>(j+1)*size).join("、")}。共有${total}粒圓片。`],figure:{kind:"countGroups",size,groups},numberTo100:true};
  }},
  {id:"sequence100a",grade:1,code:"1N3",label:["Count forwards and backwards to 100","100以內順數和倒數"],count:12,make(i){
    const cases=[[37,1],[48,1],[68,1],[97,1],[74,1],[24,1],[51,-1],[80,-1],[34,-1],[70,-1],[24,-1],[99,-1]];
    const [start,step]=cases[i],a=start,b=a+step,c=b+step,answer=c+step,dir=step===1?["forwards","順數"]:["backwards","倒數"];
    return {...numeric([`Count ${dir[0]} by 1: ${a}, ${b}, ${c}, ___`,`每次${dir[1]}一個數：${a}、${b}、${c}、___。`],["",""],answer,[`Count one ${step===1?"more":"less"} than ${c}: ${c} ${step===1?"+":"−"} 1 = ${answer}.`,`從${c}${step===1?"順數":"倒數"}一個數：${c} ${step===1?"+":"−"} 1 = ${answer}。`]),inlineAnswer:true,numberTo100:true,numberSequence:{start,step}};
  }},
  {id:"oddeven100a",grade:1,code:"1N3",label:["Odd or even to 100","辨認100以內的單數和雙數"],count:12,make(i){
    const values=[21,34,47,50,63,78,85,92,99,40,56,73],value=values[i],even=value%2===0,unit=value%10;
    return {prompt:[`Is ${value} odd or even? Choose one.`,`數字${value}是單數還是雙數？選一個。`],choices:["odd","even"],choiceLabels:{odd:["Odd","單數"],even:["Even","雙數"]},answer:[even?"even":"odd"],marks:1,why:[`The units digit is ${unit}. ${unit} is ${even?"even":"odd"}, so ${value} is ${even?"even":"odd"}.`,`個位數字是${unit}。${unit}是${even?"雙數":"單數"}，所以${value}是${even?"雙數":"單數"}。`],oddEven100:{value}};
  }},
  {id:"ordernums100a",grade:1,code:"1N3",label:["Order three numbers to 100","排列三個100以內的數"],count:12,make(i){
    const cases=[[[42,37,59],1],[[58,53,81],-1],[[29,92,64],1],[[71,67,100],-1],[[84,89,80],1],[[100,90,99],-1],[[46,64,44],1],[[33,39,36],-1],[[78,72,75],1],[[95,59,85],-1],[[61,60,69],1],[[24,27,21],-1]];
    const [shown,direction]=cases[i],ordered=[...shown].sort((a,b)=>direction*(a-b)),up=direction===1;
    return {prompt:[`Put ${shown.join(", ")} in ${up?"ascending (smallest to largest)":"descending (largest to smallest)"} order. Write one number in each box.`,`把${shown.join("、")}按${up?"由小至大":"由大至小"}的次序排列。每格寫一個數。`],fields:[["first","第一個"],["second","第二個"],["third","第三個"]],answer:ordered,marks:1,why:[`Compare tens first, then units: ${ordered.join(" → ")}.`,`先比較十位，再比較個位：${ordered.join(" → ")}。`],numberOrder:{shown,direction}};
  }},
  {id:"numberwords100a",grade:1,code:"1N3",label:["Write numerals from number words","看數詞寫數字"],count:12,make(i){
    const cases=[[21,"twenty-one","二十一"],[30,"thirty","三十"],[47,"forty-seven","四十七"],[58,"fifty-eight","五十八"],[60,"sixty","六十"],[73,"seventy-three","七十三"],[86,"eighty-six","八十六"],[99,"ninety-nine","九十九"],[100,"one hundred","一百"],[42,"forty-two","四十二"],[65,"sixty-five","六十五"],[90,"ninety","九十"]];
    const [value,en,zh]=cases[i];
    return {prompt:[`Write “${en}” using digits.`,`把「${zh}」寫成數字。`],fields:[["",""]],answer:[value],marks:1,why:[`“${en}” is written ${value}.`,`「${zh}」寫成${value}。`],numberTo100:true,numberWords:{value,en,zh}};
  }},
  {id:"estimate100a",grade:1,code:"1N3",label:["Estimate counters using a group of ten","參考十粒一組估計圓片"],count:12,make(i){
    const amounts=[18,27,34,42,49,56,63,71,78,84,37,66],count=amounts[i],nearest=Math.round(count/10)*10;
    const options=nearest===20?[10,20,40]:[nearest-20,nearest,nearest+20],choices=options.map((_,j)=>options[(j+i)%3]);
    return {prompt:["The small box shows 10 counters. About how many counters are in the large box? Choose the best estimate without counting each one.","小盒有10粒圓片。大盒大約有多少粒圓片？不用逐粒點算，選出最合適的估計數目。"],choices:choices.map(String),answer:[String(nearest)],marks:1,why:[`Compare the large box with the reference group of 10. It has ${count} counters, so about ${nearest} is the closest estimate.`,`把大盒與10粒圓片的參考組比較。大盒有${count}粒，最接近的估計數目是約${nearest}粒。`],figure:{kind:"estimateCounters",count},estimateCount:{count,nearest}};
  }},
  {id:"carryadd1a",grade:1,code:"1N4",label:["Add two numbers with carrying","兩個數相加並進位"],count:12,make(i){
    const pairs=[[27,15],[38,24],[46,17],[19,32],[57,26],[64,18],[25,37],[48,33],[36,29],[18,45],[53,19],[72,19]];
    const [a,b]=pairs[i],ones=a%10+b%10,tens=Math.floor(a/10)+Math.floor(b/10)+1,total=a+b;
    return {...numeric([`Add ${a} + ${b}. Write the sum.`,`計算${a} + ${b}，寫出和。`],["",""],total,[`Ones: ${a%10} + ${b%10} = ${ones}. Regroup 10 ones as 1 ten. Tens: ${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}. The sum is ${total}.`,`個位：${a%10} + ${b%10} = ${ones}，把10個一換成1個十。十位：${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}。和是${total}。`]),numberTo100:true,carryAddition:{a,b,total}};
  }},
  {id:"noborrow1a",grade:1,code:"1N4",label:["Subtract without borrowing","不退位的減法"],count:12,make(i){
    const pairs=[[58,24],[76,35],[49,27],[83,42],[65,13],[92,51],[70,30],[57,25],[88,66],[64,34],[95,73],[61,21]];
    const [a,b]=pairs[i],difference=a-b;
    return {...numeric([`Subtract ${a} − ${b}. Write the difference.`,`計算${a} − ${b}，寫出差。`],["",""],difference,[`Ones: ${a%10} − ${b%10} = ${a%10-b%10}. Tens: ${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(a/10)-Math.floor(b/10)}. So ${a} − ${b} = ${difference}. Check: ${difference} + ${b} = ${a}.`,`個位：${a%10} − ${b%10} = ${a%10-b%10}。十位：${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(a/10)-Math.floor(b/10)}。所以${a} − ${b} = ${difference}。驗算：${difference} + ${b} = ${a}。`]),numberTo100:true,noBorrowSubtraction:{a,b,difference}};
  }},
  {id:"threeadd1a",grade:1,code:"1N4",label:["Add three numbers from left to right","由左至右計算三個數的加法"],count:12,make(i){
    const triples=[[10,6,2],[18,12,5],[24,15,8],[36,14,7],[17,23,19],[28,11,6],[45,12,9],[19,21,15],[32,18,14],[27,16,12],[38,24,7],[41,19,13]];
    const [a,b,c]=triples[i],first=a+b,total=first+c;
    return {...numeric([`Add ${a} + ${b} + ${c} from left to right. Write the sum.`,`由左至右計算${a} + ${b} + ${c}，寫出和。`],["",""],total,[`First ${a} + ${b} = ${first}. Then ${first} + ${c} = ${total}.`,`先算${a} + ${b} = ${first}，再算${first} + ${c} = ${total}。`]),numberTo100:true,threeAddition:{a,b,c,first,total}};
  }},
  {id:"groupadd1a",grade:1,code:"1N4",label:["Group three addends in two ways","用兩種方法組合三個加數"],count:12,make(i){
    const triples=[[17,23,7],[26,14,9],[18,12,8],[31,18,2],[24,16,5],[35,14,6],[28,22,7],[42,17,3],[13,27,4],[36,13,7],[21,29,6],[32,27,3]];
    const [a,b,c]=triples[i],first=a+b,last=b+c,total=a+b+c;
    return {prompt:[`Use ${a} + ${b} + ${c}. Add the first two numbers, then the last two numbers. Write both subtotals and the total you get either way.`,`利用${a} + ${b} + ${c}。分別把前兩個數和後兩個數相加，寫出兩個小計，再寫出兩種方法所得的總和。`],fields:[["First two","前兩個數"],["Last two","後兩個數"],["Total either way","兩種方法的總和"]],answer:[first,last,total],marks:1,why:[`First two: ${a} + ${b} = ${first}, then ${first} + ${c} = ${total}. Last two: ${b} + ${c} = ${last}, then ${a} + ${last} = ${total}. Both ways give ${total}.`,`前兩個數：${a} + ${b} = ${first}，再算${first} + ${c} = ${total}。後兩個數：${b} + ${c} = ${last}，再算${a} + ${last} = ${total}。兩種方法都得到${total}。`],groupedAddition:{a,b,c,first,last,total}};
  }},
  {id:"columnadd1a",grade:1,code:"1N4",label:["Complete a carrying addition column","完成進位加法直式"],count:12,make(i){
    const pairs=[[27,15],[38,24],[46,17],[19,32],[57,26],[64,18],[25,37],[48,33],[36,29],[18,45],[53,19],[72,19]];
    const [a,b]=pairs[i],result=a+b,ones=a%10+b%10,tens=Math.floor(a/10)+Math.floor(b/10)+1;
    return {prompt:["Complete the addition in columns. Write one digit in each answer box.","完成加法直式。每個答案格填一個數字。"],fields:[["Tens","十位"],["Ones","個位"]],answer:[Math.floor(result/10),result%10],marks:1,why:[`Ones: ${a%10} + ${b%10} = ${ones}; write ${result%10} in the ones column and carry 1 ten. Tens: ${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}. So ${a} + ${b} = ${result}.`,`個位：${a%10} + ${b%10} = ${ones}，在個位寫${result%10}，並進1個十。十位：${Math.floor(a/10)} + ${Math.floor(b/10)} + 1 = ${tens}。所以${a} + ${b} = ${result}。`],columnForm:{a,b,operation:"add",result}};
  }},
  {id:"columnsub1a",grade:1,code:"1N4",label:["Complete a subtraction column without borrowing","完成不退位減法直式"],count:12,make(i){
    const pairs=[[58,24],[76,35],[49,27],[83,42],[65,13],[92,51],[70,30],[57,25],[88,66],[64,34],[95,73],[61,21]];
    const [a,b]=pairs[i],result=a-b;
    return {prompt:["Complete the subtraction in columns. Write one digit in each answer box.","完成減法直式。每個答案格填一個數字。"],fields:[["Tens","十位"],["Ones","個位"]],answer:[Math.floor(result/10),result%10],marks:1,why:[`Ones: ${a%10} − ${b%10} = ${result%10}. Tens: ${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(result/10)}. So ${a} − ${b} = ${result}. Check: ${result} + ${b} = ${a}.`,`個位：${a%10} − ${b%10} = ${result%10}。十位：${Math.floor(a/10)} − ${Math.floor(b/10)} = ${Math.floor(result/10)}。所以${a} − ${b} = ${result}。驗算：${result} + ${b} = ${a}。`],columnForm:{a,b,operation:"subtract",result}};
  }},
  {id:"storyadd1a",grade:1,code:"1N4",label:["Solve a two-number addition story","解答兩個數相加的文字題"],count:12,make(i){
    const pairs=[[24,13],[28,15],[35,22],[37,26],[41,18],[46,17],[52,24],[55,28],[63,15],[64,19],[21,37],[39,24]];
    const [a,b]=pairs[i],result=a+b,scenario=i%4;
    const prompts=[
      [`A shelf has ${a} storybooks. A teacher puts ${b} more storybooks on it. How many storybooks are on the shelf now?`,`書架上原有${a}本故事書，老師再放上${b}本。現在書架上有多少本故事書？`],
      [`There are ${a} red balloons and ${b} blue balloons at a party. How many balloons are there altogether?`,`派對上有${a}個紅色氣球和${b}個藍色氣球。共有多少個氣球？`],
      [`A garden has ${a} yellow flowers and ${b} purple flowers. How many flowers are there altogether?`,`花園裏有${a}朵黃色花和${b}朵紫色花。共有多少朵花？`],
      [`There are ${a} pupils on a bus. Another ${b} pupils get on. How many pupils are on the bus now?`,`巴士上原有${a}名學生，再有${b}名學生上車。現在巴士上有多少名學生？`]
    ];
    const units=[["storybooks","本故事書"],["balloons","個氣球"],["flowers","朵花"],["pupils","名學生"]];
    return {...numeric(prompts[scenario],units[scenario],result,[`${a} + ${b} = ${result}.`,`計算${a} + ${b} = ${result}。`]),numberTo100:true,wordProblem:{a,b,operation:"add",result,scenario}};
  }},
  {id:"storysub1a",grade:1,code:"1N4",label:["Solve a two-number subtraction story","解答兩個數相減的文字題"],count:12,make(i){
    const pairs=[[58,23],[74,31],[69,26],[85,42],[96,54],[67,25],[48,16],[79,37],[93,51],[56,14],[88,36],[65,22]];
    const [a,b]=pairs[i],result=a-b,scenario=i%4;
    const prompts=[
      [`A shop has ${a} pencils. It sells ${b} pencils. How many pencils are left?`,`商店原有${a}枝鉛筆，賣出${b}枝。還剩多少枝鉛筆？`],
      [`There are ${a} apples in a basket. ${b} apples are taken out. How many apples remain?`,`籃裏原有${a}個蘋果，拿走${b}個。還剩多少個蘋果？`],
      [`A library has ${a} picture books. ${b} are borrowed. How many picture books remain?`,`圖書館原有${a}本圖畫書，借出${b}本。還剩多少本圖畫書？`],
      [`There are ${a} pupils in a hall. ${b} pupils leave. How many pupils remain in the hall?`,`禮堂裏原有${a}名學生，${b}名學生離開。禮堂裏還有多少名學生？`]
    ];
    const units=[["pencils","枝鉛筆"],["apples","個蘋果"],["picture books","本圖畫書"],["pupils","名學生"]];
    return {...numeric(prompts[scenario],units[scenario],result,[`${a} − ${b} = ${result}. Check: ${result} + ${b} = ${a}.`,`計算${a} − ${b} = ${result}。驗算：${result} + ${b} = ${a}。`]),numberTo100:true,wordProblem:{a,b,operation:"subtract",result,scenario}};
  }},
  {id:"place3a",grade:2,code:"2N1",label:["Read hundreds, tens and ones","讀出百位、十位和個位"],count:12,make(i){
    const values=[304,230,500,426,242,100,999,507,680,909,115,370];
    const value=values[i],hundreds=Math.floor(value/100),tens=Math.floor(value/10)%10,ones=value%10;
    return {...numeric(["These blocks show a number. Write the three-digit number.","這些積木表示一個數。寫出這個三位數。"],["",""],value,[`${hundreds} hundreds, ${tens} tens and ${ones} ones make ${value}. ${hundreds} × 100 + ${tens} × 10 + ${ones} = ${value}.`,`${hundreds}個百、${tens}個十和${ones}個一合起來是${value}。${hundreds} × 100 + ${tens} × 10 + ${ones} = ${value}。`]),figure:{kind:"placeValue",hundreds,tens,ones},placeValue:true};
  }},
  {id:"groups2a",grade:2,code:"2N3",label:["Multiplication with equal groups","等量分組乘法"],count:16,make(i){
    const pairs=[[3,4],...Array.from({length:16},(_,n)=>[2+Math.floor(n/4),2+n%4]).filter(([a,b])=>a!==3 || b!==4)];
    const [boxes,each]=pairs[i],total=boxes*each;
    const addition=Array(boxes).fill(each).join(" + ");
    return {prompt:[`Each box has ${each} counters. There are ${boxes} boxes. Complete the multiplication sentence for all the counters.`,`每個盒子有${each}粒圓片，共有${boxes}個盒子。完成表示圓片總數的乘法算式。`],fields:[["",""],["",""],["",""]],answer:[boxes,each,total],marks:1,why:[`${addition} = ${total}, so ${boxes} × ${each} = ${total} or ${each} × ${boxes} = ${total}.`,`${addition} = ${total}，所以${boxes} × ${each} = ${total}或${each} × ${boxes} = ${total}。`],equalGroups:{boxes,each,total},figure:{kind:"equalGroups",boxes,each}};
  }},
  {id:"pict2a",grade:2,code:"2D1",label:["Read a pictogram","閱讀象形圖"],count:12,make(i){
    const charts=[
      [[4,2,3],1],[[0,3,5],0],[[6,2,4],0],[[2,2,5],1],[[1,4,3],0],[[5,0,2],2],
      [[3,1,5],1],[[2,6,4],1],[[0,4,2],0],[[5,5,1],2],[[4,2,6],2],[[1,3,0],0]
    ];
    const [counts,target]=charts[i],categories=[["Apple","蘋果"],["Banana","香蕉"],["Pear","梨"]],answer=counts[target];
    const fruit=categories[target],orientation=i<6?"horizontal":"vertical";
    return {prompt:[`How many pupils chose ${fruit[0].toLowerCase()}s?`,`有多少名學生選擇${fruit[1]}？`],fields:[["pupils","名學生"]],answer:[answer],marks:1,
      why:[`${fruit[0]} has ${answer} pupil picture${answer===1?"":"s"}. Each picture stands for 1 pupil, so ${answer} pupil${answer===1?"":"s"} chose ${fruit[0].toLowerCase()}s.`,`${fruit[1]}一類有${answer}個學生圖案。每個圖案代表1名學生，所以有${answer}名學生選擇${fruit[1]}。`],
      pictogram:{orientation,categories,counts,target,title:["Favourite fruit in our class","本班最喜愛的水果"],key:["Each pupil picture stands for 1 pupil.","每個學生圖案代表1名學生。"]},
      figure:{kind:"pictogram",orientation,categories,counts,target,title:["Favourite fruit in our class","本班最喜愛的水果"],key:["Each pupil picture stands for 1 pupil.","每個學生圖案代表1名學生。"]}};
  }},
  {id:"share2a",grade:2,code:"2N6",label:["Division by equal sharing","平均分配除法"],count:12,make(i){
    const cases=[[12,3],[13,4],[10,2],[16,5],[14,3],[20,4],[17,5],[18,3],[11,2],[22,4],[23,5],[24,4]];
    const [total,children]=cases[i],each=Math.floor(total/children),left=total%children;
    return {prompt:[`Share ${total} counters equally among ${children} children. How many does each child get? How many are left over?`,`把${total}粒圓片平均分給${children}名小朋友。每人分得多少粒？剩下多少粒？`],
      fields:[["each","每人"],["left","剩下"]],answer:[each,left],marks:1,
      why:[`Put ${each} counters in each of ${children} trays; ${left} ${left===1?"counter is":"counters are"} left over. ${total} ÷ ${children} = ${each} remainder ${left}. Check: ${children} × ${each} + ${left} = ${total}.`,
        `${children}個盤子各放${each}粒，剩下${left}粒。${total} ÷ ${children} = ${each}，餘數${left}。驗算：${children} × ${each} + ${left} = ${total}。`],
      equalSharing:{total,children,each,left},figure:{kind:"equalSharing",total,children}};
  }},
  {id:"frac3a",grade:3,code:"3N5",label:["Read a shaded fraction","閱讀塗色分數"],count:12,make(i){
    const cases=[[4,1,0],[3,2,1],[2,1,0],[4,2,1],[5,3,2],[6,4,1],[8,3,2],[5,0,0],[6,6,0],[8,5,1],[3,1,2],[4,3,1]];
    const [parts,shaded,start]=cases[i],fraction={parts,shaded,start};
    const note=shaded===0?["None are shaded, so the fraction is 0.","沒有塗色，所以分數的值是0。"]:shaded===parts?["The whole is shaded, so this fraction equals 1.","整個長條都塗色，所以這個分數等於1。"]:shaded===2 && parts===4?["The same amount is also 1/2, but 2/4 records the parts shown.","相同的份量也可寫成1/2，但2/4記錄了圖中的等分數目。"]:["The top number counts shaded parts; the bottom number counts all equal parts.","上方的數字表示塗色的等分數目；下方表示所有等分的總數。"];
    return {prompt:["What fraction of this whole bar is shaded? Put the number of shaded parts above the line and the number of equal parts shown below it.","這條完整長條有幾分之幾塗了顏色？把塗色部分的數目寫在分數線上方，把圖中等分的總數寫在下方。"],fields:[["shaded","塗色"],["all parts","所有等分"]],answer:[shaded,parts],marks:1,
      why:[`There are ${parts} equal parts and ${shaded} ${shaded===1?"is":"are"} shaded. The fraction shown is ${shaded}/${parts}. ${note[0]}`,`共有${parts}個等分，其中${shaded}個塗了顏色。圖中的分數是${shaded}/${parts}。${note[1]}`],
      fractionBar:fraction,figure:{kind:"fractionBar",...fraction}};
  }},
  {id:"cup3a",grade:3,code:"3M3",label:["Read a measuring cup","讀取量杯刻度"],count:12,make(i){
    const amounts=[50,100,150,250,350,500,100,200,300,500,700,1000];
    const max=i<6?500:1000,step=i<6?50:100,major=step*2,amount=amounts[i];
    const lower=Math.floor(amount/major)*major,upper=lower===amount?amount:lower+major;
    const reading=lower===amount
      ?[`The water line meets the ${amount} mL mark.`,`水面對着${amount} mL的刻度。`]
      :[`The labelled marks are ${lower} and ${upper} mL. The water line meets the tick halfway between them, so it shows ${amount} mL.`,`有數字的刻度是${lower}和${upper} mL。水面對着中間刻度，所以讀數是${amount} mL。`];
    const cup={max,step,major,amount};
    return {prompt:["How much water is in the measuring cup? Read the scale and write the number. The unit mL is printed for you.","量杯裏有多少水？讀取刻度，寫出數字。單位 mL 已印在旁邊。"],
      fields:[["mL","mL"]],answer:[amount],marks:1,why:reading,
      measuringCup:cup,figure:{kind:"measuringCup",...cup}};
  }},
  {id:"bar3a",grade:3,code:"3D1",label:["Read a bar chart","閱讀棒形圖"],count:12,make(i){
    const cases=[
      [2,"horizontal",[4,2,3],0],[2,"vertical",[1,5,3],2],[2,"horizontal",[0,2,4],0],[2,"vertical",[3,1,5],1],
      [1,"horizontal",[4,2,3],1],[1,"vertical",[0,3,5],0],[1,"horizontal",[6,2,4],2],[1,"vertical",[2,5,1],1],
      [5,"horizontal",[2,4,3],1],[5,"vertical",[1,3,5],0],[5,"horizontal",[0,5,2],2],[5,"vertical",[4,2,6],2]
    ];
    const [scale,orientation,steps,target]=cases[i],categories=[["Walking","步行"],["Bus","巴士"],["Train","港鐵"]],value=steps[target]*scale;
    const chart={scale,orientation,steps,target,categories,title:["How our class travels to school","本班上學方式"]};
    return {prompt:[`How many pupils chose ${categories[target][0].toLowerCase()}? Read that bar and write the number.`,`有多少名學生選擇${categories[target][1]}？讀取該棒形，寫出人數。`],fields:[["pupils","名學生"]],answer:[value],marks:1,
      why:[`The ${categories[target][0].toLowerCase()} bar reaches ${steps[target]} step${steps[target]===1?"":"s"} from zero. Each step represents ${scale} pupil${scale===1?"":"s"}, so ${steps[target]} × ${scale} = ${value} pupils.`,`「${categories[target][1]}」的棒形由零起到第${steps[target]}格。每格代表${scale}人，所以${steps[target]} × ${scale} = ${value}人。`],
      barChart:chart,figure:{kind:"barChart",...chart}};
  }},
  {id:"bar4a",grade:4,code:"4D1",label:["Read a scaled bar chart","閱讀大數量棒形圖"],count:12,make(i){
    const cases=[
      [10,"horizontal",[3,5,2],1],[10,"vertical",[0,4,6],2],[10,"horizontal",[6,1,3],0],[10,"vertical",[2,5,4],1],
      [50,"horizontal",[4,2,5],0],[50,"vertical",[1,6,3],2],[50,"horizontal",[0,3,5],1],[50,"vertical",[5,4,2],0],
      [100,"horizontal",[2,4,6],2],[100,"vertical",[5,1,3],0],[100,"horizontal",[3,0,4],1],[100,"vertical",[4,6,2],2]
    ];
    const [scale,orientation,steps,target]=cases[i],categories=[["Art","美術"],["Music","音樂"],["Sport","體育"]],value=steps[target]*scale;
    const chart={scale,orientation,steps,target,categories,title:["Pupils choosing an activity","選擇活動的學生人數"]};
    return {prompt:[`How many pupils chose ${categories[target][0].toLowerCase()}? Use the scale on the chart.`,`有多少名學生選擇${categories[target][1]}？請按棒形圖的刻度讀取人數。`],fields:[["pupils","名學生"]],answer:[value],marks:1,
      why:[`The ${categories[target][0].toLowerCase()} bar reaches ${steps[target]} step${steps[target]===1?"":"s"} from zero. Each step is ${scale} pupils, so ${steps[target]} × ${scale} = ${value} pupils.`,`「${categories[target][1]}」的棒形由零起到第${steps[target]}格。每格代表${scale}人，所以${steps[target]} × ${scale} = ${value}人。`],
      barChart:chart,figure:{kind:"barChart",...chart}};
  }},
  {id:"fracadd5a",grade:5,code:"5N2",label:["Add unlike fractions","異分母分數加法"],count:12,make(i){
    const cases=[[1,2,1,4],[1,3,1,6],[1,4,1,8],[1,2,1,3],[1,3,1,4],[2,5,1,10],[1,6,1,3],[3,8,1,4],[1,2,1,6],[2,3,1,6],[1,5,3,10],[3,4,1,8]];
    const [a,b,c,d]=cases[i],gcd=(x,y)=>y?gcd(y,x%y):x,l=b*d/gcd(b,d),left=a*l/b,right=c*l/d,sum=left+right,reduce=gcd(sum,l),n=sum/reduce,den=l/reduce;
    return {prompt:[`Calculate ${a}/${b} + ${c}/${d}. Write the answer in simplest form.`,`計算 ${a}/${b} + ${c}/${d}。把答案寫成最簡分數。`],fields:[["numerator","分子"],["denominator","分母"]],answer:[n,den],marks:1,
      why:[`${a}/${b} = ${left}/${l} and ${c}/${d} = ${right}/${l}. Add: ${left}/${l} + ${right}/${l} = ${sum}/${l}${reduce>1?`; reduce to ${n}/${den}`:""}.`,`把兩個分數通分：${a}/${b} = ${left}/${l}，${c}/${d} = ${right}/${l}。相加得 ${sum}/${l}${reduce>1?`，約簡為 ${n}/${den}`:""}。`],fractionAddition:{a,b,c,d,n,den}};
  }},
  {id:"equation5a",grade:5,code:"5A2",label:["Solve a simple equation","解簡易方程"],count:12,make(i){
    const solutions=[12,8,17,6,15,9,14,7,18,11,16,10],offsets=[7,4,8,3,6,5,9,2,7,6,4,8],x=solutions[i],b=offsets[i],subtract=i>=6,c=subtract?x-b:x+b,sign=subtract?"−":"+",inverse=subtract?"+":"−";
    return {prompt:[`Solve x ${sign} ${b} = ${c}. Write the value of x.`,`解方程 x ${sign} ${b} = ${c}，寫出 x 的值。`],fields:[["x =","x ="]],answer:[x],marks:1,
      why:[`Apply the same operation to both sides: x = ${c} ${inverse} ${b} = ${x}. Check: ${x} ${sign} ${b} = ${c}.`,`等號兩邊同時進行相同運算：x = ${c} ${inverse} ${b} = ${x}。驗算：${x} ${sign} ${b} = ${c}。`],simpleEquation:{x,b,c,subtract}};
  }},
  {id:"purchasestory5a",grade:5,code:"5A2",label:["Write an equation for a purchase","根據購物情境列方程"],count:12,make(i){
    const cases=[[7,19],[5,23],[9,32],[12,40],[6,18],[14,50],[8,15],[11,24],[6,19],[15,27],[9,31],[13,38]];
    const [b,c]=cases[i],subtract=i>=6,x=subtract?b+c:c-b,sign=subtract?"−":"+",equation=`x ${sign} ${b} = ${c}`;
    const prompt=subtract
      ?[`After buying a book for $${b}, a pupil has $${c} left. Let x be the dollars the pupil had before buying the book. Write an equation using x. Do not solve it.`,`一名學生買了一本售價${b}元的書後，還剩${c}元。設 x 是買書前有的元數。用 x 列出方程，不用求解。`]
      :[`A notebook and a pen cost $${c} altogether. The pen costs $${b}. Let x be the notebook's price in dollars. Write an equation using x. Do not solve it.`,`一本筆記簿和一枝筆共售${c}元，筆售${b}元。設 x 是筆記簿的價錢（元）。用 x 列出方程，不用求解。`];
    return {prompt,fields:[["Equation","方程"]],answer:[equation],marks:1,
      why:subtract
        ?[`Starting money minus the book's $${b} cost equals the $${c} left: ${equation}. Check with x = ${x}: ${x} − ${b} = ${c}.`,`原有的錢減去書價${b}元，等於剩下的${c}元：${equation}。代入 x = ${x} 驗算：${x} − ${b} = ${c}。`]
        :[`Notebook price plus pen price equals the total: ${equation}. Check with x = ${x}: ${x} + ${b} = ${c}.`,`筆記簿價錢加筆價等於總價：${equation}。代入 x = ${x} 驗算：${x} + ${b} = ${c}。`],
      purchaseEquation:{b,c,x,subtract}};
  }},
  {id:"triarea5a",grade:5,code:"5M1",label:["Area of a triangle","三角形面積"],count:12,make(i){
    const cases=[[8,5],[6,4],[10,3],[12,7],[14,5],[16,4],[9,6],[7,8],[11,4],[13,6],[5,8],[15,4]];
    const [base,height]=cases[i],area=base*height/2,triangle={base,height,apex:[120,95,150,135][i%4]};
    return {prompt:[`Find the area of this triangle. Its base is ${base} cm and its perpendicular height is ${height} cm. The drawing is not to scale.`,`求這個三角形的面積。底邊長${base}厘米，對應的垂直高是${height}厘米。圖形不依比例繪畫。`],fields:[["cm²","平方厘米"]],answer:[area],marks:1,
      why:[`Use the base and its perpendicular height: ${base} × ${height} ÷ 2 = ${area} cm².`,`用底邊和對應的垂直高：${base} × ${height} ÷ 2 = ${area} 平方厘米。`],triangleArea:triangle,figure:{kind:"triangleArea",...triangle}};
  }},
  {id:"volume5a",grade:5,code:"5M2",label:["Volume of a cuboid","長方體體積"],count:12,make(i){
    const cases=[[4,3,2],[5,2,3],[6,4,2],[3,3,4],[5,4,3],[7,2,4],[8,3,2],[4,4,5],[6,5,3],[9,2,3],[5,5,4],[7,3,5]];
    const [length,width,height]=cases[i],volume=length*width*height,cuboid={length,width,height};
    return {prompt:[`Find the volume of this cuboid. Its length is ${length} cm, width ${width} cm and height ${height} cm. The drawing is not to scale.`,`求這個長方體的體積。長${length}厘米、闊${width}厘米、高${height}厘米。圖形不依比例繪畫。`],fields:[["cm³","立方厘米"]],answer:[volume],marks:1,
      why:[`One layer has ${length} × ${width} = ${length*width} cubic centimetres. There are ${height} layers, so ${length} × ${width} × ${height} = ${volume} cm³.`,`每層有${length} × ${width} = ${length*width}個立方厘米，共${height}層，所以${length} × ${width} × ${height} = ${volume}立方厘米。`],cuboidVolume:cuboid,figure:{kind:"cuboidVolume",...cuboid}};
  }},
  {id:"circle5a",grade:5,code:"5S1",label:["Identify a radius","辨認半徑"],count:9,make(i){
    const letters=["A","B","C"],answer=letters[i%3],rotation=[0,90,180,270][i%4];
    const parts=["radius","diameter","chord"],segments=letters.map((letter,j)=>({letter,kind:parts[(j-i%3+3)%3]}));
    const circleParts={centre:[150,120],radius:75,rotation,segments};
    return {prompt:["Which labelled line segment is a radius of the circle? Choose one.","圖中哪一條標示的線段是圓的半徑？選一個。"],choices:letters,answer:[answer],marks:1,
      why:[`${answer} joins the centre O to one point on the circle. A diameter passes through O and has both ends on the circle. A chord joins two points on the circle without necessarily passing through O.`,`${answer}由圓心O連到圓上的一點。直徑穿過圓心O，兩端都在圓上。弦連接圓上的兩點，但不一定穿過圓心O。`],circleParts,figure:{kind:"circleParts",...circleParts}};
  }},
  {id:"per1",grade:4,code:"4M1",label:["Rectangle perimeter","長方形周界"],count:16,make(i){
    const a=12+i,b=5+i%6;
    return numeric([`A rectangular book cover is ${a} cm long and ${b} cm wide. What is its perimeter?`,`長方形書套長${a}厘米、闊${b}厘米。它的周界是多少厘米？`],["cm","厘米"],2*(a+b),`(${a} + ${b}) × 2 = ${2*(a+b)}`);
  }},
  {id:"permissing4a",grade:4,code:"4M1",label:["Find a missing rectangle side","求長方形未知邊長"],count:12,make(i){
    const pairs=[[18,5],[16,7],[20,8],[14,6],[21,9],[17,8],[24,7],[19,6],[15,9],[22,10],[25,11],[23,8]];
    const [length,width]=pairs[i],missing=i%2===0?"width":"length",known=missing==="width"?length:width;
    const answer=missing==="width"?width:length,perimeter=2*(length+width);
    return {prompt:[`A rectangle has a perimeter of ${perimeter} cm. One ${missing==="width"?"long":"short"} side is ${known} cm. What is the length of the missing ${missing==="width"?"short":"long"} side? Use the diagram.`,`一個長方形的周界是${perimeter}厘米。一條${missing==="width"?"長":"短"}邊長${known}厘米。根據圖示，求未知的${missing==="width"?"短":"長"}邊長。`],fields:[["cm","厘米"]],answer:[answer],marks:1,
      why:[`Half the perimeter is ${perimeter} ÷ 2 = ${length+width} cm. Subtract the known side: ${length+width} − ${known} = ${answer} cm.`,`周界的一半是${perimeter} ÷ 2 = ${length+width}厘米。減去已知邊長：${length+width} − ${known} = ${answer}厘米。`],
      missingSide:{length,width,missing,known,perimeter},figure:{kind:"missingSide",length,width,missing,known,perimeter}};
  }},
  {id:"factor1",grade:4,code:"4N3",label:["Identifying factors","辨認因數"],count:12,make(i){
    const n=[12,16,18,20,24,27,28,30,32,36,40,42][i];
    const options=Array.from({length:8},(_,j)=>j+2), good=options.filter(x=>n%x===0).slice(0,2),bad=options.filter(x=>n%x!==0).slice(0,2);
    return {prompt:[`Select every factor of ${n} in the list.`,`選出下列所有${n}的因數。`],multi:true,choices:[...good,...bad].sort((a,b)=>a-b).map(String),answer:good.map(String),why:[good.map(x=>`${x} × ${n/x} = ${n}`).join(", "),good.map(x=>`${x} × ${n/x} = ${n}`).join("；")]};
  }},
  {id:"factorpair4a",grade:4,code:"4N3",label:["Explain a factor pair","用乘法說明因數配對"],count:12,make(i){
    const cases=[[12,3],[16,4],[18,9],[20,5],[24,6],[27,3],[28,7],[30,5],[32,4],[36,6],[40,1],[42,42]];
    const [target,factor]=cases[i],other=target/factor;
    return {prompt:[`Complete the multiplication sentence to show why ${factor} is a factor of ${target}: ${factor} × ___ = ${target}.`,`完成乘法算式，說明為甚麼${factor}是${target}的因數：${factor} × ___ = ${target}。`],fields:[["",""]],answer:[other],marks:1,inlineAnswer:true,
      why:[`${factor} × ${other} = ${target} exactly. The factors ${factor} and ${other} form a pair because the product is ${target} with no remainder.`,`因為${factor} × ${other} = ${target}，積剛好是${target}，沒有餘數，所以${factor}和${other}是一對因數。`],factorPair:{target,factor,other}};
  }},
  {id:"pct1",grade:6,code:"6N3",label:["Finding a percentage","求百分比"],count:15,retired:true,make(i){return percentageQuestion(i)}},
  {id:"pct2",grade:6,code:"6N4",label:["Finding a percentage","求百分比"],count:15,make(i){return percentageQuestion(i)}},
  {id:"speed6a",grade:6,code:"6M4",label:["Speed after converting minutes","先換算分鐘再求速率"],count:12,make(i){
    const cases=[[30,24],[45,36],[90,90],[120,140],[150,150],[180,210],[15,12],[75,75],[105,126],[135,162],[90,72],[180,144]];
    const [minutes,distance]=cases[i],hours=minutes/60,speed=distance/hours;
    return {prompt:[`A vehicle travels ${distance} km in ${minutes} minutes at a constant speed. What is its speed in km/h? Convert the time to hours first.`,`一輛車以固定速率在${minutes}分鐘行駛${distance}公里。它的速率是多少公里／小時？先把時間換算為小時。`],fields:[["km/h","公里／小時"]],answer:[speed],marks:1,
      why:[`${minutes} ÷ 60 = ${hours} hours. Speed = distance ÷ time = ${distance} ÷ ${hours} = ${speed} km/h.`,`先把分鐘換算為小時：${minutes} ÷ 60 = ${hours}小時。速率 = 距離 ÷ 時間 = ${distance} ÷ ${hours} = ${speed}公里／小時。`],speedTime:{minutes,distance,hours,speed}};
  }},
  {id:"mean1",grade:6,code:"6D1",label:["Arithmetic mean","算術平均數"],count:16,make(i){
    const a=10+i,b=a+7,c=a+2;
    return numeric([`A library lent ${a}, ${b} and ${c} books on three successive days. How many books did it lend per day on average?`,`圖書館連續三天分別借出${a}、${b}和${c}本書。平均每天借出多少本書？`],["books","本"],a+3,`(${a} + ${b} + ${c}) ÷ 3 = ${a+3}`);
  }}
];
function numeric(prompt,unit,answer,working){return {prompt,fields:[unit],answer:[answer],why:Array.isArray(working)?working:[working,working]}}
function decodeItems(raw,year){
  if(!raw || raw.length>300)return [];
  const ids=raw.split(".");
  if(ids.length>12 || new Set(ids).size!==ids.length)return [];
  const result=[];
  for(const id of ids){
    const [name,index,...extra]=id.split("-");
    const f=families.find(f=>f.id===name && f.grade===year);
    if(!f || extra.length || !/^(0|[1-9]\d?)$/.test(index) || +index>=f.count)return [];
    result.push({...f.make(+index),code:f.code,id,f});
  }
  return result;
}
function pick(f,used){
  const pool=Array.from({length:f.count},(_,i)=>f.id+"-"+i).filter(x=>!used.includes(x));
  return pool[Math.floor(Math.random()*pool.length)];
}
const linkVersion=new URLSearchParams(location.search).get("v")==="2"?"2":"3";
function customLink(ids,view,year,language=lang,version=linkVersion){
  const p=new URLSearchParams({v:version,lang:language,p:year,items:ids.join(".")});
  if(view)p.set("view",view);
  return "?"+p;
}
const warmUpP1=["count20a-10","next1-5","pictureadd1-21"];
const exitTicketP1=["count20a-12","next1-10","pictureadd1-38","parts18a-58","storyadd1-70","otherway1-3"];
const builderUndoKey="mathquiz-builder-undo-v1";
function readBuilderUndo(year,ids){
  try{
    const undo=JSON.parse(sessionStorage.getItem(builderUndoKey));
    return undo?.year===year && undo.after===ids.slice().sort().join(".") && ids.includes(undo.replacement) && !ids.includes(undo.previous) ? undo : null;
  }catch{return null}
}
function clearBuilderUndo(){try{sessionStorage.removeItem(builderUndoKey)}catch{}}
function renderBuilder(year,selected){
  const list=families.filter(f=>f.grade===year && !f.retired);
  const ids=selected.map(q=>q.id);
  const undo=readBuilderUndo(year,ids);
  const title=t("Create a quiz","建立小測");
  document.title=title+" | MathQuiz";
  app.innerHTML='<a href="'+href(null)+'">← '+t("All quizzes","所有小測")+'</a><h1>'+title+'</h1><nav class="downloads">'+[1,2,3,4,5,6].map(n=>'<a href="'+customLink([],"build",n)+'">'+level(n)+'</a>').join("")+'</nav><h2>'+level(year)+'</h2>'+(year===1?'<div class="builder-presets"><p class="builder-preset"><button type="button" id="warmup-preset">'+t("Use five-minute warm-up","使用五分鐘熱身題")+'</button> <span>'+t("Three quick questions on counting, sequences and addition.","三題數數、順數和加法題。")+'</span></p><p class="builder-preset"><button type="button" id="exit-preset">'+t("Use six-question exit ticket","使用六題離堂小測")+'</button> <span>'+t("A ready-to-edit set on numbers to 20 and addition.","可編輯的二十以內數和加法題組。")+'</span></p></div>':'')+'<form id="mix">'+list.map(f=>'<label class="field">'+local(f.label)+' <select name="'+f.id+'">'+[0,1,2,3,4,5].map(n=>'<option '+(n===(ids.length?selected.filter(q=>q.f===f).length:1)?"selected":"")+'>'+n+'</option>').join("")+'</select></label>').join("")+'<p><button>'+t("Generate quiz","產生小測")+'</button></p><p role="status" id="notice"></p></form>';
  if(year===1){
    app.querySelector("#warmup-preset").onclick=()=>{clearBuilderUndo();location.assign(customLink(warmUpP1,"build",year))};
    app.querySelector("#exit-preset").onclick=()=>{clearBuilderUndo();location.assign(customLink(exitTicketP1,"build",year))};
  }
  app.querySelector("#mix").onsubmit=e=>{
    e.preventDefault();const data=new FormData(e.target),fresh=[];
    for(const f of list)for(let i=0;i<Number(data.get(f.id));i++)fresh.push(pick(f,fresh));
    if(!fresh.length){document.querySelector("#notice").textContent=t("Choose at least one question.","請選擇最少一題。");return}
    clearBuilderUndo();
    location.assign(customLink(fresh,"build",year));
  };
  if(!ids.length)return;
  const marks=selected.reduce((sum,q)=>sum+(q.marks ?? q.fields?.length ?? 1),0);
  app.insertAdjacentHTML("beforeend",'<h2>'+t("Quiz preview","預覽小測")+'</h2><p class="builder-totals" role="status">'+ids.length+t(ids.length===1?" question":" questions"," 題")+' · '+marks+t(marks===1?" mark":" marks"," 分")+'</p>'+(undo?'<p><button type="button" id="undo-replace">'+t("Undo replacement","復原更換題目")+'</button></p>':'')+'<div class="downloads"><a id="take" href="'+customLink(ids,"",year)+'">'+t("Open pupil quiz","開啟學生小測")+'</a><button id="copy" type="button">'+t("Copy pupil link","複製學生連結")+'</button>'+printLinks(ids,year)+'</div><p id="copied" role="status"></p>'+selected.map((q,i)=>item(q,i,true,false)+'<div class="builder-actions"><button type="button" data-move="'+i+'" data-direction="-1" '+(i===0?'disabled':'')+'>'+t("Move up","上移")+'</button><button type="button" data-move="'+i+'" data-direction="1" '+(i===ids.length-1?'disabled':'')+'>'+t("Move down","下移")+'</button><button type="button" data-replace="'+i+'" '+(ids.filter(id=>id.startsWith(q.f.id+"-")).length===q.f.count?'disabled':'')+'>'+t("Replace question ","更換第 ")+(i+1)+t(""," 題")+'</button></div>').join(""));
  if(undo)app.querySelector("#undo-replace").onclick=()=>{const at=ids.indexOf(undo.replacement);ids[at]=undo.previous;clearBuilderUndo();location.assign(customLink(ids,"build",year))};
  app.querySelector("#copy").onclick=async()=>{const url=app.querySelector("#take").href;try{await navigator.clipboard.writeText(url);app.querySelector("#copied").textContent=t("Pupil link copied.","已複製學生連結。")}catch{app.querySelector("#copied").textContent=url}};
  app.querySelectorAll("[data-move]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.move),j=i+Number(b.dataset.direction);[ids[i],ids[j]]=[ids[j],ids[i]];location.assign(customLink(ids,"build",year))});
  app.querySelectorAll("[data-replace]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.replace),previous=ids[i],replacement=pick(selected[i].f,ids);if(!replacement)return;ids[i]=replacement;try{sessionStorage.setItem(builderUndoKey,JSON.stringify({year,after:ids.slice().sort().join("."),previous,replacement}))}catch{}location.assign(customLink(ids,"build",year))});
}
function printLinks(ids,year){
  return ["paper","key"].map(v=>'<a href="'+customLink(ids,v,year)+'">'+(v==="paper"?t("Print pupil paper / PDF","列印學生試卷／PDF"):t("Print worked key / PDF","列印解答／PDF"))+'</a>').join("");
}


