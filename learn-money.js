/* Original P1 1M2 tasks. Labelled tokens support practice, not real-coin recognition. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],label=n=>n<100?n+'¢':'$'+n/100;
const words=n=>{const d=Math.floor(n/100),c=n%100;return pair(d?(d+' dollar'+(d===1?'':'s')+(c?' and '+c+' cents':'')):c+' cents',d?(d+'元'+(c?c+'分':'')):c+'分');};
const price=n=>'$'+Math.floor(n/100)+'.'+String(n%100).padStart(2,'0');
const pic=(coins=[],extra={})=>({kind:'money',coins,...extra});
const item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const lessons=[
 {id:'coinvalues',title:pair('Meet Hong Kong coins','認識香港硬幣'),goal:pair('Read a coin’s value and distinguish dollars from cents.','讀取幣值，分辨元與分。'),steps:[
  {title:pair('Seven everyday coin values','七種日常幣值'),text:pair('Hong Kong’s everyday coins are 10¢, 20¢, 50¢, $1, $2, $5 and $10. These labelled tokens help us practise their values.','香港日常使用的硬幣有一毫、二毫、五毫、一元、二元、五元及十元。這些標值圖示幫助我們練習幣值。'),visual:pic([10,20,50,100,200,500,1000],{catalog:true})},
  {title:pair('Read the unit too','連單位一起讀'),text:pair('¢ means cents; $ means dollars here. 20¢ is twenty cents (二毫); $2 is two dollars. They are different values. One dollar is one hundred cents.','¢表示分，這裏的$表示元。20¢是二十分（二毫），$2是二元，幣值不同。一元等於一百分。'),visual:pic([20,200])},
  {title:pair('Look at real coins','觀察真正的硬幣'),text:pair('With an adult, turn over a real coin. Find its number and words; compare its outline, thickness and weight. Do not guess its value from size alone.','和成人一起翻看真正硬幣的兩面，找數字和文字，比較外形、厚度及重量。不要只憑大小猜幣值。'),visual:pic([50,500])}
 ]},
 {id:'pricetags',title:pair('Read prices and count coins','讀價錢、數硬幣'),goal:pair('Say prices and coin totals in dollars and cents, up to $10.','用元和分讀價錢及硬幣總值，不超過十元。'),steps:[
  {title:pair('Say dollars and cents','用元和分讀'),text:pair('Read $4.20 as four dollars and twenty cents. Say the price aloud. You do not need to write a price or explain decimal places.','把$4.20讀作四元二十分，也可說四元二毫。試讀出來，不用寫價錢或解釋小數位。'),visual:pic([],{price:420})},
  {title:pair('Zero cents is still a price','沒有零錢的價目'),text:pair('$6.00 means six dollars. $0.70 means seventy cents. Read the whole price, including both sides of the dot.',' $6.00表示六元；$0.70表示七十分（七毫）。看清楚點兩旁的數字，讀出完整價錢。'),visual:pic([],{tags:[600,70]})},
  {title:pair('Count each coin once','每枚只數一次'),text:pair('Count the dollar coins: two dollars and one dollar make three dollars. Then fifty cents and twenty cents make seventy cents. Total: three dollars and seventy cents.','先數元：二元和一元共三元。再數分：五十分和二十分共七十分。合共三元七十分。'),visual:pic([200,100,50,20])}
 ]},
 {id:'coinequal',title:pair('Exchange coins','換幣，總值不變'),goal:pair('Change the coins while keeping the same total value.','換用不同硬幣，保持總值相同。'),steps:[
  {title:pair('Small coins can match one dollar','小幣也能湊一元'),text:pair('Two fifty-cent coins have the same value as one dollar. Here we exchange within 10¢, 20¢, 50¢ and $1. Count the value, not just the coins.','兩枚五毫的總值等於一元。這組換幣只用一毫、二毫、五毫及一元。要數幣值，不只是數枚數。'),visual:pic([50,50],{target:100})},
  {title:pair('Make ten dollars','元幣湊出十元'),text:pair('These four coins make ten dollars. Exchange only within $1, $2, $5 and $10 in this group.','五元、二元、二元及一元合共十元。這組只用一元、二元、五元及十元換幣。'),visual:pic([500,200,200,100],{target:1000})},
  {title:pair('Same value','枚數多，不一定錢多'),text:pair('One $5 coin is worth the same as five $1 coins. Count both groups: the value stays five dollars.','一枚五元和五枚一元的總值相同。枚數改變，總值仍是五元。換幣前後都數一次，核對總值。'),visual:pic([100,100,100,100,100],{target:500})}
 ]}
];
const values=[10,20,50,100,200,500,1000,20,200,50,100,10],other=[100,200,500,10,20,50,100,200,20,500,10,100];
const amounts=[420,600,70,250,1000,80,530,300,910,50,680,100];
const trays=[[200,200,20],[500,100],[50,20],[200,50],[500,500],[50,20,10],[500,20,10],[200,100],[500,200,200,10],[50],[500,100,50,20,10],[100]];
const swaps=[[100,50],[500,100],[100,20],[1000,500],[50,10],[1000,200],[20,10],[200,100],[100,10],[1000,100],[100,50],[500,100]];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='coinvalues'){const n=values[k],opts=k%2?[other[k],n]:[n,other[k]],a=opts.indexOf(n)+1,w=words(n);return item('coinvalues-'+k,lesson,`Which token means ${w[0]}? Write 1 or 2.`,`哪個圖示表示${w[1]}？寫1或2。`,a,`Choose ${a}: ${label(n)} means ${w[0]}. Read the unit as well as the number.`,`選${a}：${label(n)}表示${w[1]}。數字和單位都要看。`,pic(opts,{numbered:true}));}
 if(lesson==='pricetags'){const n=amounts[k],wrong=n<100?n*10:n===1000?100:n-10,opts=k%2?[wrong,n]:[n,wrong],a=opts.indexOf(n)+1,w=words(n),count=k%2===1;return item('pricetags-'+k,lesson,count?'Count the coins. Which reading gives the total? Write 1 or 2.':'Say the price aloud. Which reading matches? Write 1 or 2.',count?'數出硬幣總值。哪個讀法正確？寫1或2。':'讀出價錢。哪個讀法正確？寫1或2。',a,`The ${count?'coins total':'price is'} ${w[0]}. Choose ${a}.`,` ${count?'硬幣總值':'價錢'}是${w[1]}，選${a}。`,pic(count?trays[k]:[],{...(count?{}:{price:n}),choices:opts.map(words)}));}
 const [target,unit]=swaps[k],n=target/unit;return item('coinequal-'+k,lesson,`Exchange ${label(target)} for ${label(unit)} coins only. How many coins are needed?`,`把${label(target)}換成只有${label(unit)}的硬幣，需要多少枚？`,n,`Count ${n} coins, each worth ${words(unit)[0]}. Together they equal ${words(target)[0]}.`,`每枚${words(unit)[1]}，數${n}枚，總值等於${words(target)[1]}。`,pic([target],{unit}));
}
const tasks={
 coinvalues:{normal:[
  ['Which token is five dollars? Write 1 or 2.','哪個圖示是五元？寫1或2。',2,'$5 means five dollars; 50¢ means fifty cents.','$5是五元，50¢是五十分。',pic([50,500],{numbered:true})],
  ['Read the dollar symbol. What is the value in dollars?','看清楚元的符號，圖示是多少元？',10,'$10 is ten dollars. The unit matters.','$10是十元，單位很重要。',pic([1000])],
  ['Which token represents one dollar? Write 1 or 2.','哪個圖示表示一元？寫1或2。',1,'$1 is one dollar, not ten cents.','$1是一元，不是一毫。',pic([100,10],{numbered:true})]
 ],difficult:[
  ['A pupil says 20¢ and $2 have the same value. Which is worth more? Write 1 or 2.','有學生說20¢和$2幣值相同。哪個幣值較大？寫1或2。',2,'Twenty cents is less than one dollar. Two dollars is worth more.','二十分不足一元，二元的幣值較大。',pic([20,200],{numbered:true})],
  ['Which is the better way to identify a real coin? 1 check its number and words; 2 use its size alone. Write 1 or 2.','哪個辨認真硬幣的方法較好？1看數字和文字；2只看大小。寫1或2。',1,'Use the number and words, with other observed features. Size alone does not tell value.','看數字和文字，配合觀察其他特徵；不能只靠大小。',pic([100,500])],
  ['The 50¢ token is drawn bigger. Which has greater value? Write 1 or 2.','50¢圖示畫得較大。哪個幣值較大？寫1或2。',2,'$1 is one hundred cents, more than fifty cents. Drawing size does not set value.','一元等於一百分，比五十分多。圖示大小不決定幣值。',pic([50,100],{numbered:true,enlargeFirst:true})]
 ]},
 pricetags:{normal:[
  ['Which reading matches the tag? Write 1 or 2.','哪個讀法符合價目牌？寫1或2。',2,'$2.50 is two dollars and fifty cents.','$2.50是二元五十分，也可說兩元五毫。',pic([],{price:250,choices:[words(520),words(250)]})],
  ['Count every coin once. Which is the total? Write 1 or 2.','每枚只數一次。總值是哪個？寫1或2。',1,'Five dollars and two dollars make seven dollars; fifty cents and twenty cents make seventy cents.','五元和二元共七元，五十分和二十分共七十分。',pic([500,200,50,20],{choices:[words(770),words(740)]})],
  ['Read the whole tag. Which reading is correct? Write 1 or 2.','看完整價目牌，哪個讀法正確？寫1或2。',2,'$0.90 means ninety cents, less than one dollar.','$0.90是九十分（九毫），不足一元。',pic([],{price:90,choices:[words(900),words(90)]})]
 ],difficult:[
  ['A pupil reads this as ten cents. Which reading corrects it? Write 1 or 2.','有學生把這個價錢讀作一毫。哪個讀法正確？寫1或2。',1,'$10.00 is ten dollars. The .00 means no extra cents.','$10.00是十元，沒有額外的分。',pic([],{price:1000,choices:[words(1000),words(10)]})],
  ['Five coins do not mean five dollars. Which is their total? Write 1 or 2.','五枚硬幣不一定是五元。總值是哪個？寫1或2。',2,'The dollar coins make six dollars; the cent coins make eighty cents. Total: six dollars and eighty cents.','元幣共六元，分幣共八十分，合共六元八十分。',pic([500,100,50,20,10],{choices:[words(500),words(680)]})],
  ['The coins are spread out. Count each once. Which reading matches the total? Write 1 or 2.','硬幣分散擺放。每枚只數一次，哪個總值正確？寫1或2。',1,'Fifty cents, twenty cents, twenty cents and ten cents make one hundred cents: one dollar.','五十分、二十分、二十分及十分，共一百分，即一元。',pic([50,20,20,10],{choices:[words(100),words(90)]})]
 ]},
 coinequal:{normal:[
  ['How many 20¢ coins equal $1?','多少枚二毫等於一元？',5,'Count twenty, forty, sixty, eighty, one hundred cents: five coins.','二十、四十、六十、八十、一百分，共五枚。',pic([100],{unit:20})],
  ['How many $2 coins equal $10?','多少枚二元等於十元？',5,'Two, four, six, eight, ten dollars: five coins.','二、四、六、八、十元，共五枚。',pic([1000],{unit:200})],
  ['One $5 coin and two $2 coins total nine dollars. How many $1 coins finish an exchange for $10?','一枚五元和兩枚二元共九元。再要多少枚一元，才能換成十元？',1,'Nine dollars and one dollar make ten dollars.','九元加一元是十元。',pic([500,200,200],{target:1000,unit:100})]
 ],difficult:[
  ['A pupil offers four 20¢ coins for $1. How many 20¢ coins should there be altogether?','有學生用四枚二毫換一元。正確應共有多少枚二毫？',5,'Four coins are eighty cents; five coins are one hundred cents.','四枚是八十分，五枚才是一百分，即一元。',pic([20,20,20,20],{target:100})],
  ['Exchange $5 using two $2 coins and some $1 coins. How many $1 coins are needed?','把五元換成兩枚二元及一些一元，需要多少枚一元？',1,'Two two-dollar coins make four dollars. One one-dollar coin makes five.','兩枚二元共四元，再加一枚一元便是五元。',pic([200,200],{target:500,unit:100})],
  ['After exchanging one $5 coin for five $1 coins, which stays the same? 1 total value; 2 number of coins. Write 1 or 2.','一枚五元換成五枚一元，哪項不變？1總值；2枚數。寫1或2。',1,'Both groups are worth five dollars. There is one coin before and five after.','兩邊總值都是五元，枚數則由一枚變成五枚。',pic([100,100,100,100,100],{target:500})]
 ]}
};
function practice(lesson,level){return ['normal','difficult'].includes(level)?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnMoney={lessons,question,practice,label,words,price};if(typeof module!=='undefined')module.exports=root.MathQuizLearnMoney;
})(typeof window!=='undefined'?window:globalThis);
