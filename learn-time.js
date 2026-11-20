/* Original P1 1M4 teaching. Fixed sample calendar; no holiday or live-time service. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],reading=(h,m=0)=>pair(m?'half past '+h:h+' o’clock',h+(m?'時半':'時'));
const days=[pair('Monday','星期一'),pair('Tuesday','星期二'),pair('Wednesday','星期三'),pair('Thursday','星期四'),pair('Friday','星期五'),pair('Saturday','星期六'),pair('Sunday','星期日')];
const months=['January','February','March','April','May','June','July','August','September','October','November','December'].map((x,i)=>pair(x,(i+1)+'月'));
const pic=(mode,extra={})=>({kind:'time',mode,...extra}),clock=(hour,minute=0,extra={})=>pic('clock',{hour,minute,...extra}),cal=(extra={})=>pic('calendar',{year:2026,month:11,...extra});
const item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const lessons=[
 {id:'readclock',title:pair('Read clocks','讀時鐘'),goal:pair('Use the two hands to read o’clock and half past.','看兩支指針，讀整點和半點。'),steps:[
  {title:pair('Two different hands','兩支不同的針'),text:pair('The short hand tells the hour. The long hand is the minute hand. Here the long hand points to 12 and the short hand to 3: three o’clock.','短針是時針，長針是分針。這裏長針指12，短針指3，讀作三時。'),visual:clock(3)},
  {title:pair('Half past','半點'),text:pair('The long hand points to 6. The short hand is halfway from 7 to 8. Seven has passed, so read half past seven.','長針指6，短針在7和8的中間。已過七時，讀作七時半。'),visual:clock(7,30)},
  {title:pair('Look at both hands','兩支針都要看'),text:pair('At half past twelve, the short hand is between 12 and 1. The long hand points to 6. Do not read it as one o’clock.','十二時半的短針在12和1之間，長針指6，不是一時。'),visual:clock(12,30)}
 ]},
 {id:'elapsedhours',title:pair('Count the hours','數小時'),goal:pair('Count whole-hour steps to find an ending time or duration.','逐小時順數，找結束時間或所需時間。'),steps:[
  {title:pair('One hour','一小時'),text:pair('h means hour. From 2 o’clock to the next 3 o’clock is one hour. With an adult, notice what you do during a real hour.','h表示小時。二時至接着的三時是一小時。和成人一起留意真正一小時內做了甚麼。'),visual:pic('interval',{start:2,end:3,minute:0,steps:1})},
  {title:pair('Find the ending time','找結束時間'),text:pair('Start at 11 o’clock. Count two hour steps: 12, then 1. The activity ends at 1 o’clock. The clock continues after 12.','十一時開始，順數兩小時：十二時，然後一時。活動在一時結束；鐘面過12便接1。'),visual:pic('interval',{start:11,end:1,minute:0,steps:2})},
  {title:pair('Count the gaps','數間隔'),text:pair('Half past 4 to half past 7 takes three whole hours. Count the gaps: 5, 6, 7. Do not count the starting time as an hour.','四時半至七時半相隔三小時。數間隔：五時半、六時半、七時半，不把起點算作一小時。'),visual:pic('interval',{start:4,end:7,minute:30,steps:3})}
 ]},
 {id:'calendays',title:pair('Days and calendars','日子與月曆'),goal:pair('Know week and month names; use a calendar’s date columns.','認識星期、月份名稱，按月曆欄位找日子。'),steps:[
  {title:pair('Seven days','七天一循環'),text:pair('A week has seven days. After Sunday comes Monday again. Calendars may put a different day in the first column; read the headings.','一星期有七天，星期日之後又是星期一。月曆首欄可不同，要看欄頂的星期名稱。'),visual:pic('week')},
  {title:pair('Twelve months','十二個月'),text:pair('A year has twelve months, in this order. A month has about four weeks, not always exactly four.','一年有十二個月，順序如下。一個月大約有四星期，不一定剛好四星期。'),visual:pic('months')},
  {title:pair('Find the date','看日期所在欄'),text:pair('Find 18, then read its column: Wednesday. This sample shows November 2026.','這個例子是2026年11月。找18，再往上看同一欄，是星期三。這是示例月份，不是今天的日期。'),visual:cal({highlight:18})}
 ]}
];
const hours=[3,7,12,11,6,9,1,4,10,2,8,5],minutes=[0,30,0,30,0,30,30,0,30,0,30,0];
const starts=[2,4,11,9,12,7,10,3,8,6,1,5],durations=[3,2,2,4,12,3,5,4,2,1,7,6],dates=[18,6,1,30,14,23,11,27,8,21,4,16];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='readclock'){const h=hours[k],m=minutes[k],wrong=k%3===0?reading(h,m?0:30):reading(h%12+1,m),opts=k%4>=2?[wrong,reading(h,m)]:[reading(h,m),wrong],a=k%4>=2?2:1;return item('readclock-'+k,lesson,'Read both hands. Which reading matches? Write 1 or 2.','看兩支針，哪個讀法正確？寫1或2。',a,`The short hand ${m?'is between '+h+' and '+(h%12+1):'points to '+h}; the long hand points to ${m?6:12}. Read ${reading(h,m)[0]}.`,`短針${m?'在'+h+'和'+(h%12+1)+'之間':'指'+h}，長針指${m?6:12}，讀作${reading(h,m)[1]}。`,clock(h,m,{choices:opts}));}
 if(lesson==='elapsedhours'){const start=starts[k],steps=durations[k],end=(start+steps-1)%12+1,minute=k%3===0?30:0,findEnd=k%4===0||k%4===3;
  return item('elapsedhours-'+k,lesson,findEnd?`Start at ${reading(start,minute)[0]} and continue for ${steps} whole hours. Finish at ${minute?'half past ___':'___ o’clock'}. Write the missing hour number.`:`Start at ${reading(start,minute)[0]}; finish at the next ${reading(end,minute)[0]}. How many whole hours pass?`,findEnd?`${reading(start,minute)[1]}開始，經過${steps}整小時。結束時是___時${minute?'半':''}？寫時數。`:`${reading(start,minute)[1]}開始，在接着的${reading(end,minute)[1]}結束，相隔多少整小時？`,findEnd?end:steps,`Count ${steps} hour steps from ${reading(start,minute)[0]} to ${reading(end,minute)[0]}. Count gaps, not the starting mark.`,`由${reading(start,minute)[1]}順數${steps}個一小時間隔，到${reading(end,minute)[1]}。數間隔，不算起點。`,pic('interval',{start,minute,...(findEnd?{duration:steps}:{end})}));
 }
 const date=dates[k],weekday=(new Date(Date.UTC(2026,10,date)).getUTCDay()+6)%7,wrong=(weekday+1)%7,opts=k%4>=2?[days[wrong],days[weekday]]:[days[weekday],days[wrong]],answer=k%4>=2?2:1;return item('calendays-'+k,lesson,`Which day is 18 November? Write 1 or 2.`.replace('18 November',date+' November'),`在這個示例月曆中，11月${date}日是星期幾？寫1或2。`,answer,`Find ${date} and follow its column to ${days[weekday][0]}.`,`找${date}，沿同一欄往上看，是${days[weekday][1]}。`,cal({highlight:index<2?date:undefined,sundayFirst:k%3===1,choices:opts}));
}
const tasks={
 readclock:{normal:[
  ['The long hand is at 12. It is ___ o’clock. Write the hour.','長針指12，是___時？寫時數。',6,'The short hand points to 6: six o’clock.','短針指6，是六時。',clock(6)],
  ['The long hand is at 6. It is half past ___. Write the hour already passed.','長針指6，是___時半？寫已過的時數。',9,'The short hand is between 9 and 10: half past nine.','短針在9和10中間，是九時半。',clock(9,30)],
  ['Which reading matches? Write 1 or 2.','哪個讀法正確？寫1或2。',2,'Both hands point to 12: twelve o’clock.','兩針都指12，是十二時。',clock(12,0,{choices:[reading(12,30),reading(12)]})]
 ],difficult:[
  ['A pupil says one o’clock. Correct the reading: half past ___. Write the hour.','有學生說是一時。改正讀法：___時半。寫時數。',12,'The short hand is between 12 and 1, so twelve has passed.','短針在12和1之間，已過十二時。',clock(12,30)],
  ['A pupil looks only at the short hand and says four o’clock. Which reading is correct? Write 1 or 2.','有學生只看短針，說是四時。哪個讀法正確？寫1或2。',2,'The long hand is at 6 and the short hand is between 4 and 5: half past four.','長針指6，短針在4和5中間，是四時半。',clock(4,30,{choices:[reading(4),reading(4,30)]})],
  ['The long hand points to 12, not 6. Which reading is correct? Write 1 or 2.','長針指12，不是6。哪個讀法正確？寫1或2。',1,'The long hand at 12 means o’clock. The short hand is at 8.','長針指12表示整點，短針指8，是八時。',clock(8,0,{choices:[reading(8),reading(8,30)]})]
 ]},
 elapsedhours:{normal:[
  ['Start at 10 o’clock. After 3 hours it is ___ o’clock. Write the missing hour.','十時開始，3小時後是___時？寫時數。',1,'Count 11, 12, 1: three steps.','順數11、12、1，共三個間隔。',pic('interval',{start:10,minute:0,duration:3})],
  ['Half past 6 to the next half past 9: how many whole hours?','六時半至接着的九時半，相隔多少整小時？',3,'Count three gaps: half past 7, half past 8, half past 9.','順數七時半、八時半、九時半，共三個間隔。',pic('interval',{start:6,end:9,minute:30})],
  ['The same puzzle takes pupil 1 two hours and pupil 2 one hour. Who finishes more quickly? Write 1 or 2.','同一款拼圖，學生1用兩小時，學生2用一小時。誰較快？寫1或2。',2,'One hour is a shorter duration than two hours. Pupil 2 is quicker at this task.','一小時比兩小時短，學生2做這項任務較快。',pic('durations',{values:[2,1]})]
 ],difficult:[
  ['A pupil counts 3, 4, 5, 6 and says four hours. From 3 o’clock to the next 6 o’clock, how many hours really pass?','有學生數3、4、5、6，說相隔四小時。三時至接着的六時，實際相隔多少小時？',3,'There are three gaps between four clock readings. Do not count the starting time.','四個讀數之間只有三個間隔，不把起點算一小時。',pic('interval',{start:3,end:6,minute:0})],
  ['Start at half past 11. After 2 whole hours, it is half past ___. Write the hour.','十一時半開始，2整小時後是___時半？寫時數。',1,'Half past 12, then half past 1: two whole-hour steps.','十二時半，再到一時半，共兩個整小時間隔。',pic('interval',{start:11,minute:30,duration:2})],
  ['Start at 5 o’clock. After 12 whole hours, what hour number does the clock show?','五時開始，12整小時後，鐘面顯示幾時？寫時數。',5,'Twelve whole-hour steps return to 5 o’clock. Time has passed even though the hands show the same positions.','順數十二個整小時，又回到五時；雖然指針位置相同，時間已經過去。',pic('interval',{start:5,minute:0,duration:12})]
 ]},
 calendays:{normal:[
  ['How many days make one week?','一星期有多少天？',7,'There are seven days before the weekday names repeat.','七天後，星期名稱再重複。',pic('week')],
  ['How many months make one year?','一年有多少個月？',12,'January through December are twelve months.','一月至十二月，共十二個月。',pic('months')],
  ['In this sample November, what date is the first Friday? Write the day number.','在這個11月示例中，第一個星期五是幾日？寫日期的數字。',6,'Read the Friday column: the first date is 6.','看星期五那一欄，第一個日期是6。',cal()]
 ],difficult:[
  ['Sunday is first here. What date is the last Monday?','這個月曆把星期日放首欄。這個11月最後一個星期一是幾日？',30,'Read the Monday heading, not the first column. Its last date is 30.','看星期一的欄頂，不是首欄；該欄最後的日期是30。',cal({sundayFirst:true})],
  ['Which month follows December? Write its month number.','十二月之後是哪個月份？寫月份數字。',1,'After December, January begins the next year.','十二月之後是下一年的一月。',pic('months')],
  ['A month has ABOUT how many weeks: 4 or 7? Write your choice.','一個月大約有多少星期：4還是7？寫所選的數字。',4,'About four weeks. This November has 30 days, so it is not exactly four weeks.','大約四星期。這個11月有30天，不是剛好四星期。',cal()]
 ]}
};
function practice(lesson,level){return ['normal','difficult'].includes(level)?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnTime={lessons,question,practice,reading,days,months};if(typeof module!=='undefined')module.exports=root.MathQuizLearnTime;
})(typeof window!=='undefined'?window:globalThis);
