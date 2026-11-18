/* A separately versioned pilot. Existing family IDs and payloads are untouched. */
((root)=>{
 const levels={easy:['Easy · guided','容易 · 有引導'],normal:['Normal · apply','一般 · 應用'],difficult:['Difficult · reason','較難 · 推理']};
 const units={'1N1':['Numbers to 20','二十以內的數'],'1N2':['Basic addition and subtraction','基本加法和減法']};
 const questions=[];
 const number=(en,zh,answer)=>({label:[en,zh],answer:String(answer)});
 const choice=(en,zh,options,answer)=>({label:[en,zh],options,answer:String(answer)});
 function add(unit,level,kind,i,prompt,fields,why,visual,meta){questions.push({id:`${unit}-${level}-${kind}-${i+1}`,unit,level,kind,prompt,fields,why,visual,meta});}
 for(let i=0;i<4;i++){
  const n=[4,8,13,17][i];
  add('1N1','easy','count',i,['How many counters are shown? Touch or point to each counter once.','圖中有多少粒圓片？逐粒指着數，每粒只數一次。'],[number('Counters','圓片數量',n)],[`Count each counter once. There are ${n}.`,`每粒只數一次，共有${n}粒。`],{groups:[n]}, {n});
  const start=[3,7,12,17][i];
  add('1N1','easy','onwards',i,[`Count on by one: ${start}, ${start+1}, ___.`,`逐一順數：${start}、${start+1}、___。`],[number('Next number','下一個數',start+2)],[`After ${start+1} comes ${start+2}.`,`${start+1}之後是${start+2}。`],null,{start});
  const a=[2,3,4,5][i],b=[3,4,5,6][i];
  add('1N1','easy','compose',i,['The two pictured groups make one whole. How many counters altogether?','把圖中兩組合成一組，合共有多少粒圓片？'],[number('Whole','總數',a+b)],[`${a} and ${b} make ${a+b}.`,`${a}和${b}合成${a+b}。`],{groups:[a,b]}, {a,b});
  const low=[2,5,10,15][i],values=[low+3,low,low+1];
  add('1N1','normal','order',i,[`Write ${values.join(', ')} from smallest to largest.`,`把${values.join('、')}由小至大排列。`],[number('Smallest','最小',low),number('Middle','中間',low+1),number('Largest','最大',low+3)],[`${low}, ${low+1}, ${low+3}: compare each number with the other two.`,`${low}、${low+1}、${low+3}：把每個數與另外兩個數比較。`],null,{values});
  const top=[7,11,16,20][i];
  add('1N1','normal','backwards',i,[`Count backwards by one: ${top}, ___, ${top-2}, ___.`,`逐一倒數：${top}、___、${top-2}、___。`],[number('First gap','第一個空格',top-1),number('Second gap','第二個空格',top-3)],[`${top}, ${top-1}, ${top-2}, ${top-3}. Each step goes back one.`,`${top}、${top-1}、${top-2}、${top-3}，每次倒數一個。`],null,{top});
  const left=[3,5,7,9][i],right=[5,6,8,9][i];
  add('1N1','normal','part',i,[`The whole is ${left+right}. One part has ${left} counters. How many are in the covered part?`,`總數是${left+right}，其中一部分有${left}粒圓片。蓋着的部分有多少粒？`],[number('Covered part','蓋着的部分',right)],[`${left} and ${right} make ${left+right}.`,`${left}和${right}合成${left+right}。`],{groups:[left],covered:true}, {a:left,b:right});
  const lower=[1,4,9,14][i],parity=lower%2?'odd':'even';
  add('1N1','difficult','clues',i,[`I am larger than ${lower} and smaller than ${lower+4}. I am ${parity}. What number am I?`,`我比${lower}大，比${lower+4}小，而且是${parity==='odd'?'單數':'雙數'}。我是甚麼數？`],[number('Number','數字',lower+2)],[`Try ${lower+1}, ${lower+2}, ${lower+3}. Only ${lower+2} is ${parity}.`,`候選數是${lower+1}、${lower+2}、${lower+3}，只有${lower+2}是${parity==='odd'?'單數':'雙數'}。`],null,{lower,parity});
  const whole=[10,11,12,13][i],shown=[4,5,5,6][i],newPart=[3,4,4,5][i];
  add('1N1','difficult','another',i,[`${shown} and ${whole-shown} make ${whole}. Make the same whole with a different pair: ${newPart} and ___.`,`${shown}和${whole-shown}合成${whole}。用另一組數合成同一總數：${newPart}和___。`],[number('Other part','另一部分',whole-newPart)],[`${newPart} and ${whole-newPart} make ${whole}; this is a different pair.`,`${newPart}和${whole-newPart}合成${whole}，這是一組不同的數。`],{groups:[shown,whole-shown]}, {whole,shown,newPart});
  const length=[7,9,11,13][i],position=[2,3,4,5][i];
  add('1N1','difficult','position',i,['Count the row. What is the starred counter’s position from the RIGHT? How many counters are there altogether?','看看這一排圓片。由右邊數起，有星號的圓片排第幾？全排共有多少粒圓片？'],[number('Position from the right','由右邊數起的位置',length-position+1),number('Number altogether','全排數量',length)],[`Count from the right: the star is in position ${length-position+1}. The whole row still has ${length} counters.`,`由右數起，星號排第${length-position+1}；全排仍共有${length}粒圓片。`],{row:length,star:position}, {length,position});
  const x=[2,3,4,5][i],y=[1,2,3,4][i];
  add('1N2','easy','join',i,['Join the two pictured groups. How many altogether?','把圖中兩組合起來，合共有多少粒？'],[number('Total','總數',x+y)],[`${x} + ${y} = ${x+y}.`,`${x} + ${y} = ${x+y}。`],{groups:[x,y]}, {a:x,b:y});
  const stay=[2,4,3,5][i],away=[2,1,3,2][i];
  add('1N2','easy','take',i,['The crossed-out counters are taken away. How many remain?','劃掉的圓片被拿走了，還剩多少粒？'],[number('Remaining','剩下',stay)],[`${stay+away} − ${away} = ${stay}.`,`${stay+away} − ${away} = ${stay}。`],{groups:[stay+away],cross:away}, {a:stay,b:away});
  const all=[3,5,7,9][i];
  add('1N2','easy','zero',i,['Every counter is taken away. How many remain?','全部圓片都被拿走了，還剩多少粒？'],[number('Remaining','剩下',0)],[`${all} − ${all} = 0. Nothing remains.`,`${all} − ${all} = 0，一粒也沒有剩下。`],{groups:[all],cross:all}, {n:all});
  const u=[5,7,6,9][i],v=[4,3,8,9][i];
  add('1N2','normal','sentence',i,['Use the picture to finish the addition sentence. Fill the total.','看圖完成加法算式，填寫總數。'],[number(`${u} + ${v} =`,`${u} + ${v} =`,u+v)],[`${u} + ${v} = ${u+v}. The two one-digit parts make the whole.`,`${u} + ${v} = ${u+v}，兩個個位數部分組成總數。`],{groups:[u,v]}, {a:u,b:v});
  const more=[8,7,9,6][i],less=[3,2,5,2][i];
  add('1N2','normal','difference',i,['Group A has more counters than Group B. How many MORE? Match one counter from each group first.','甲組比乙組多多少粒圓片？可以先把兩組的圓片逐一配對。'],[number('How many more','多多少粒',more-less)],[`${more} − ${less} = ${more-less}. These counters have no partner.`,`${more} − ${less} = ${more-less}，這些圓片沒有配對。`],{groups:[more,less]}, {a:more,b:less});
  const pa=[3,4,5,6][i],pb=[2,3,2,1][i],subtract=i%2===1,total=pa+pb;
  add('1N2','normal','operation',i,[subtract?'Some counters are taken away. Choose the sign that matches the picture.':'The two groups are joined. Choose the sign that matches the picture.',subtract?'拿走部分圓片，選出符合圖意的符號。':'把兩組合起來，選出符合圖意的符號。'],[choice(subtract?`${total} ___ ${pb} = ${pa}`:`${pa} ___ ${pb} = ${total}`,subtract?`${total} ___ ${pb} = ${pa}`:`${pa} ___ ${pb} = ${total}`,[['+','+'],['−','−']],subtract?'1':'0')],[subtract?`${total} − ${pb} = ${pa}. Taking away uses subtraction.`:`${pa} + ${pb} = ${total}. Joining uses addition.`,subtract?`${total} − ${pb} = ${pa}，拿走用減法。`:`${pa} + ${pb} = ${total}，合起來用加法。`],subtract?{groups:[total],cross:pb}:{groups:[pa,pb]}, {a:pa,b:pb,subtract});
  const ca=[2,3,4,5][i],cb=[3,4,2,3][i],ct=ca+cb,slot=i%3;
  const choices=[`${ct} + ${ca} = ${cb}`,`${ct} − ${cb} = ${ct}`];choices.splice(slot,0,`${ca} + ${cb} = ${ct}`);
  add('1N2','difficult','hiddencheck',i,[`There are ${ct} counters altogether. ${ca} are visible. How many are covered? Choose an addition sentence to check.`,`共有${ct}粒圓片，看見${ca}粒。蓋着多少粒？再選一條加法算式核對。`],[number('Covered','蓋着的數量',cb),choice('Addition check','加法核對',choices.map(s=>[s,s]),slot)],[`${ca} + ${cb} = ${ct}, so ${ct} − ${ca} = ${cb}.`,`${ca} + ${cb} = ${ct}，所以${ct} − ${ca} = ${cb}。`],{groups:[ca],covered:true}, {a:ca,b:cb,slot});
  const sa=[1,2,3,4][i],sb=[4,5,4,5][i];
  add('1N2','difficult','swap',i,[`One tray has ${sa} counters and the other has ${sb}. Swap the trays. Find the new total, then explain.`,`兩盤分別有${sa}粒和${sb}粒圓片。交換兩盤的位置後，找出總數，再選原因。`],[number('Total after swapping','交換後的總數',sa+sb),choice('Why?','為甚麼？',[['Only the order changed; no counters were added or removed.','只改變次序，沒有加入或拿走圓片。'],['Moving a tray adds one counter.','移動一盤會多一粒圓片。'],['The total is the number in the last tray.','總數就是最後一盤的數量。']],0)],[`${sa} + ${sb} = ${sb} + ${sa} = ${sa+sb}. Only the order changes.`,`${sa} + ${sb} = ${sb} + ${sa} = ${sa+sb}，只改變了次序。`],{groups:[sa,sb]}, {a:sa,b:sb});
  const ea=[2,3,4,5][i],eb=[2,2,3,4][i],et=ea+eb,correct=i%3;
  const checks=[`${et} − ${ea} = ${eb+1}`,`${et} + ${ea} = ${eb}`];checks.splice(correct,0,`${et} − ${ea} = ${eb}`);
  add('1N2','difficult','correct',i,[`A pupil says the two groups contain ${et+1} counters altogether. Find the correct total. Choose a subtraction sentence that checks it.`,`一位同學說兩組合共有${et+1}粒圓片。找出正確總數，再選一條減法算式核對。`],[number('Correct total','正確總數',et),choice('Subtraction check','減法核對',checks.map(s=>[s,s]),correct)],[`${ea} + ${eb} = ${et}; ${et} − ${ea} = ${eb}.`,`${ea} + ${eb} = ${et}；${et} − ${ea} = ${eb}。`],{groups:[ea,eb]}, {a:ea,b:eb,slot:correct});
 }
 const pick=(unit,level,set)=>{const qs=questions.filter(q=>q.unit===unit&&q.level===level);return set==='all'?qs:qs.filter((_,i)=>i%4===Number(set));};
 const normalize=s=>String(s).normalize('NFKC').trim();
 const matches=(field,value)=>field.options?normalize(value)===field.answer:/^\+?\d+(?:\.0+)?$/.test(normalize(value))&&Number(normalize(value))===Number(field.answer);
 const api={version:1,levels,units,questions,pick,matches};root.P1Levels=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
