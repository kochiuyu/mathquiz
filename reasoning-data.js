/* Deterministic original MathQuiz tasks. Source ideas are linked, never transcribed. */
((root)=>{
 'use strict';
 const topics=root.MathQuizReasoningCatalogue||(typeof require==='function'?require('./reasoning-catalogue.js'):[]);
 const P=(a,b)=>[a,b],N=(a,b,v,type='number')=>({label:P(a,b),answer:String(v),type});
 const C=(a,b,opts,answer,i)=>{const shift=i%opts.length,order=opts.map((_,j)=>(j+shift)%opts.length);return {label:P(a,b),type:'choice',options:order.map(j=>opts[j]),answer:String(order.indexOf(answer))};};
 const yesno=(a,b,yes,i)=>C(a,b,[P('Yes','是'),P('No','否')],yes?0:1,i);
 const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i),diff=(a,b)=>Math.abs(a-b);
 function permutations(xs){if(!xs.length)return [[]];return xs.flatMap((v,i)=>permutations(xs.filter((_,j)=>i!==j)).map(p=>[v,...p]));}
 function numeric(v){const s=String(v??'').normalize('NFKC').trim();if(!/^[+-]?(?:\d+(?:\.\d+)?|\d+\s*\/\s*[1-9]\d*)$/.test(s))return NaN;const a=s.split('/');return a.length===2?Number(a[0])/Number(a[1]):Number(s);}
 function setValue(v){const s=String(v??'').normalize('NFKC').trim();if(!s)return null;const parts=s.split(/[,、;；，\s]+/).map(numeric);return parts.every(Number.isInteger)&&new Set(parts).size===parts.length?parts.sort((a,b)=>a-b):null;}
 function matches(f,v){if(f.type==='choice')return String(v)===f.answer;if(f.type==='set'){const a=setValue(v),b=setValue(f.answer);return !!a&&JSON.stringify(a)===JSON.stringify(b);}const x=numeric(v),a=numeric(f.answer);return Number.isFinite(x)&&Math.abs(x-a)<1e-10;}
 function assess(q,values){if(q.teacher)return null;const marks=q.fields.map((f,i)=>matches(f,values[i]));if(q.rule==='digits'){const a=numeric(values[0]),b=numeric(values[1]);const valid=Number.isInteger(a)&&Number.isInteger(b)&&a>=10&&a<=99&&b>=10&&b<=99&&[...String(a)+String(b)].sort().join('')===[...q.meta.digits].sort().join('')&&Math.abs(a+b-q.meta.target)===q.meta.best;marks[0]=marks[1]=valid;}return marks;}
 function make(id,level='easy',i=0){
  const topic=topics.find(t=>t.id===id);if(!topic||!['easy','normal','difficult'].includes(level)||!Number.isInteger(i)||i<0||i>11)throw Error('Unknown reasoning task');
  const d=level==='difficult',e=level==='easy',q={id:`reason-${id}-${level}-${i+1}`,topic:id,level,index:i,fields:[],meta:{},prompt:[],why:[],guide:[]};
  const F=q.fields;
  switch(id){
  case 'tower':{
   const a=8+i%5,b=1+i%4,c=5+Math.floor(i/4),left=diff(a,b),right=diff(b,c),top=diff(left,right);
   q.meta={a,b,c,left,right,top};q.visual={kind:'tower',rows:d?[[top],[left,right],[a,'?',c]]:[[d?'?':top],[e?'?':'?',e?right:'?'],[a,b,c]]};
   if(!e&&!d)q.visual.rows[0]=['?'];
   q.prompt=d?P(`Each upper box is the difference of the two boxes below. The middle row is ${left}, ${right}. The bottom ends are ${a}, ${c}. Find EVERY possible bottom-middle whole number from 0 to 20.`, `中層是${left}、${right}，底層兩端是${a}、${c}。找出0至20內所有可能的底層中間整數。`):P('Each upper box is the larger minus the smaller of the two boxes directly below. Fill the missing boxes.','每個上層方格是正下方相鄰兩數中較大的減去較小的。填上空格。');
   if(d){const vals=range(0,20).filter(x=>diff(a,x)===left&&diff(x,c)===right);F.push(N('All possible middle numbers (comma separated)','所有可能的中間數（用逗號分隔）',vals.join(','),'set'));}
   else {F.push(N('Left middle box','中層左格',left));if(!e)F.push(N('Right middle box','中層右格',right),N('Top box','頂格',top));}
   q.guide=P('Compare the two lower numbers before subtracting. Check both neighbouring differences.','先比較下方兩數，再以大減小。核對左右兩邊的差。');
   q.why=P(`${a} − ${b} = ${left}; |${b} − ${c}| = ${right}; |${left} − ${right}| = ${top}. ${d?'Testing each integer 0–20 gives: '+F[0].answer+'.':''}`,`${a} − ${b} = ${left}；${b}與${c}的差是${right}；${left}與${right}的差是${top}。${d?'逐一檢查0至20，答案為：'+F[0].answer+'。':''}`);break;
  }
  case 'shapes':{
   q.teacher=true;q.visual={kind:'shapes'};q.prompt=P(e?'Compare the circle and triangle. Describe a difference in their boundaries.':d?'For the circle, triangle and square, give a different mathematical reason for choosing EACH as the odd one out.':'Choose one of the circle, triangle and square that differs from the others. Explain a mathematical reason. Can someone choose another?',e?'比較圓形和三角形，說出邊界的一個分別。':d?'對圓形、三角形、正方形各提出一個數學理由，說明它為甚麼與其他不同。':'在圓形、三角形和正方形中，選一個與其他不同，並說出數學理由。別人能否選另一個？');
   q.guide=P('Talk about straight or curved boundaries and the number of sides. There can be more than one valid answer.','可談直線或曲線邊界，以及邊數。可以有多個合理答案。');q.why=P('Examples: circle—curved boundary; triangle—three straight sides; square—four straight sides. Accept any correct distinguishing property. Teacher: check that the reason fits the chosen shape and distinguishes it; invite another reason. This is not automatically scored.','例子：圓形有曲線邊界；三角形有三條直邊；正方形有四條直邊。接受任何正確且能區分圖形的性質。教師核對理由是否符合圖形，並邀請提出另一理由。本題不自動評分。');break;
  }
  case 'digits':{
   const sets=[[1,3,6,8],[2,3,5,9],[1,4,7,8],[2,4,6,9],[1,2,5,8],[3,4,6,7],[1,4,5,9],[2,5,6,8],[1,3,7,9],[2,3,4,8],[3,5,7,8],[1,2,6,9]],digits=sets[i],target=100;
   const pairs=[...new Map(permutations(digits).map(p=>{const v=[10*p[0]+p[1],10*p[2]+p[3]].sort((a,b)=>a-b);return [v.join(','),v];})).values()];const best=Math.min(...pairs.map(([a,b])=>Math.abs(a+b-target))),winners=pairs.filter(([a,b])=>Math.abs(a+b-target)===best),[a,b]=winners[0];q.meta={digits:digits.join(''),target,best,winners};
   q.prompt=e?P(`Two arrangements using ${digits.join(', ')} are ${pairs[0].join(' + ')} and ${pairs[1].join(' + ')}. Find each total and its distance from 100.`,`用${digits.join('、')}排成${pairs[0].join(' + ')}及${pairs[1].join(' + ')}。求各自的和及與100相差多少。`):P(`Use ${digits.join(', ')} once each to make two two-digit numbers with a sum as close as possible to 100.${d?' Count every different best pair; swapping the two numbers is not a new pair.':''}`,`把${digits.join('、')}各用一次，組成兩個兩位數，使和最接近100。${d?'數出所有不同的最佳數對；兩數交換不算新數對。':''}`);
   if(e)for(let j=0;j<2;j++){const sum=pairs[j][0]+pairs[j][1];F.push(N(`Total ${j+1}`,`第${j+1}個和`,sum),N(`Distance ${j+1} from 100`,`第${j+1}個和與100之差`,Math.abs(sum-100)));}else{q.rule='digits';F.push(N('First two-digit number','第一個兩位數',a),N('Second two-digit number','第二個兩位數',b),N('Distance from 100','與100之差',best));if(d)F.push(N('Number of different best pairs','不同最佳數對的數目',winners.length));}
   q.guide=P('Choose tens first, then place the unused digits as ones. Compare the total with 100.','先選十位，再把餘下數字放在個位，把和與100比較。');q.why=P(`Best distance: ${best}. Best pairs: ${winners.map(p=>p.join(' + ')).join('; ')}. Each pair uses all four digits once. Listing all arrangements proves none is closer.`,`最小差距：${best}。最佳數對：${winners.map(p=>p.join(' + ')).join('；')}。每對把四數字各用一次，列出所有排法可確認沒有更接近的。`);break;
  }
  case 'sort':{
   const boundary=200+i*10,nums=[boundary-6,boundary-3,boundary+8,boundary+15,boundary],labels=[P(`Even, below ${boundary}`,`雙數，小於${boundary}`),P(`Odd, below ${boundary}`,`單數，小於${boundary}`),P(`Even, at least ${boundary}`,`雙數，大於或等於${boundary}`),P(`Odd, at least ${boundary}`,`單數，大於或等於${boundary}`)];q.meta={boundary,nums};
   q.prompt=P(`Sort the numbers using BOTH properties: even/odd and below ${boundary}/at least ${boundary}.${d?' Then find the smallest positive odd number in the at-least group.':''}`,`按兩種性質分類：單雙數，以及小於${boundary}／大於或等於${boundary}。${d?'再找出「大於或等於」組最小的正單數。':''}`);
   const shown=e?nums.slice(0,2):nums;shown.forEach(n=>F.push(C(String(n),String(n),labels,(n>=boundary?2:0)+(n%2),i)));
   if(d)F.push(N('Smallest odd number at least the boundary','不小於分界數的最小單數',boundary+1));
   q.guide=P('Decide odd/even first, then compare with the boundary. Equality belongs to “at least”.','先判斷單雙，再比較分界數。等於分界數屬「大於或等於」。');q.why=P(shown.map(n=>`${n}: ${labels[(n>=boundary?2:0)+n%2][0]}`).join('; ')+`. The boundary ${boundary} is even, so the next odd number is ${boundary+1}.`,shown.map(n=>`${n}：${labels[(n>=boundary?2:0)+n%2][1]}`).join('；')+`。分界數${boundary}是雙數，下一個單數是${boundary+1}。`);break;
  }
  case 'clues':{
   const k=i,max=9+k,sums=[11+2*k,9+2*k,7+2*k],solutions=range(1,max).map(a=>[a,sums[0]-a,sums[1]-sums[0]+a,sums[2]-sums[1]+sums[0]-a]).filter(xs=>xs.every(x=>x>=1&&x<=max)&&new Set(xs).size===4&&xs[0]<xs[3]);const sol=solutions[0];q.meta={max,sums,solutions};
   q.prompt=P(`Four different whole numbers from 1 to ${max} have adjacent totals ${sums.join(', ')} from left to right. The first is smaller than the last.${e?' The first number is '+sol[0]+'. Find the other three.':d?' List EVERY possible first number (comma separated).':' Choose the valid sequence.'}`,`四個不同的整數由1至${max}，相鄰兩數之和由左至右是${sums.join('、')}。第一數小於最後一數。${e?'第一數為'+sol[0]+'，求其餘三數。':d?'列出所有可能的第一數（用逗號分隔）。':'選出正確數鏈。'}`);
   if(e)sol.slice(1).forEach((n,j)=>F.push(N(`Number ${j+2}`,`第${j+2}個數`,n)));else if(d)F.push(N('All possible first numbers','所有可能的第一數',solutions.map(s=>s[0]).join(','),'set'),N('Number of solutions','解的數目',solutions.length));else F.push(C('Sequence','數鏈',[P(sol.join(' → '),sol.join(' → ')),P([sol[0],sol[1]+1,sol[2],sol[3]].join(' → '),[sol[0],sol[1]+1,sol[2],sol[3]].join(' → ')),P([...sol].reverse().join(' → '),[...sol].reverse().join(' → '))],0,i));
   q.guide=P('Try a first number. Subtract it from the first total, then continue. Reject repeats and numbers outside the range.','試第一個數，從第一個和減去它，再依次推算。排除重複或超出範圍的數。');q.why=P(`All valid sequences: ${solutions.map(s=>s.join(' → ')).join('; ')}. Every other first number fails at least one rule.`,`所有正確數鏈：${solutions.map(s=>s.join(' → ')).join('；')}。其他第一數都至少違反一項規則。`);break;
  }
  case 'whole':{
   const shaded=1+i,wholeA=2*shaded,wholeB=3*shaded;q.meta={shaded,wholeA,wholeB};q.visual={kind:'tiles',shaded,totals:e?[wholeA]:[wholeA,wholeB]};q.prompt=P(`Each outlined rectangle is one whole; ${shaded} equal tiles are shaded in each.${d?' Which whole makes the shaded fraction larger? Also find the whole size that would make it one quarter.':' Write the shaded fraction using shaded tiles over total tiles.'}`,`每個有外框的長方形是一個整體，各有${shaded}個相同方格被塗色。${d?'哪個整體的塗色分數較大？再求整體有多少格時，塗色部分是四分之一。':'用塗色格數作分子、總格數作分母，寫出分數。'}`);
   F.push(N('Fraction of whole A','整體A的分數',`${shaded}/${wholeA}`));if(!e)F.push(N('Fraction of whole B','整體B的分數',`${shaded}/${wholeB}`));if(d)F.push(C('Larger shaded fraction','較大的塗色分數',[P('A','A'),P('B','B'),P('Equal','相等')],0,i),N('Tiles in a whole for one quarter','塗色為四分之一時整體的格數',4*shaded));
   q.guide=P('The denominator counts all equal tiles in ONE outlined whole. The numerator counts shaded tiles.','分母是同一外框整體內所有等大方格的數目，分子是塗色格數。');q.why=P(`A is ${shaded}/${wholeA} = 1/2; B would be ${shaded}/${wholeB} = 1/3. The same shaded count can represent different fractions because the wholes differ. For one quarter, the whole needs ${4*shaded} tiles.`,`A是${shaded}/${wholeA}=1/2；B則是${shaded}/${wholeB}=1/3。塗色格數相同，但整體不同，所以分數不同。四分之一所需整體為${4*shaded}格。`);break;
  }
  case 'garden':{
   const half=8+i,p=2*half,pairs=range(1,Math.floor(half/2)).map(a=>[a,half-a]),best=pairs.at(-1),area=best[0]*best[1];q.meta={p,pairs,best,area};
   q.prompt=P(`A rectangular garden has perimeter ${p} m. Side lengths are positive whole metres; squares count as rectangles.${e?` Compare a 1 m × ${half-1} m garden with a 2 m × ${half-2} m garden.`:' Find the dimensions giving the greatest area.'}${d?' How many different side pairs are possible, ignoring rotations?':''}`,`長方形花圃周界${p}米，邊長為正整數米，正方形也算長方形。${e?`比較1米×${half-1}米與2米×${half-2}米的面積。`:'找出面積最大的尺寸。'}${d?'不計旋轉，共有多少種邊長組合？':''}`);
   if(e){F.push(N('Area of first garden (m²)','第一個花圃面積（平方米）',half-1),N('Area of second garden (m²)','第二個花圃面積（平方米）',2*(half-2)));}else F.push(N('Shorter side (m)','較短邊（米）',best[0]),N('Longer side (m)','較長邊（米）',best[1]),N('Greatest area (m²)','最大面積（平方米）',area));if(d)F.push(N('Number of unordered side pairs','不計次序的邊長組合數',pairs.length));
   q.guide=P(`Length + width = ${half}. List each pair once, then multiply.`,`長＋闊=${half}。每對只列一次，再求乘積。`);q.why=P(`Side pairs and areas: ${pairs.map(([a,b])=>`${a} × ${b} = ${a*b}`).join('; ')}. Maximum ${area} m².`,`邊長組合及面積：${pairs.map(([a,b])=>`${a} × ${b} = ${a*b}`).join('；')}。最大面積為${area}平方米。`);break;
  }
  case 'chain':{
   const a=12+i*2,b=18+i*3,max=36+i*3,valid=range(2,max).filter(n=>n!==a&&n!==b&&(a%n===0||n%a===0)&&(b%n===0||n%b===0));q.meta={a,b,max,valid};
   q.prompt=P(`Complete ${a} → ? → ${b}. Neighbours must be factors or multiples. Use a whole number 2–${max}, different from both ends.${d?' Give ALL possible middle numbers.':e?' Test the three candidates.':' Give the smallest possible middle number.'}`,`完成${a} → ? → ${b}。相鄰數須有因數或倍數關係。中間數為2至${max}的整數，不能與兩端相同。${d?'列出所有可能的中間數。':e?'檢查三個候選數。':'求最小的中間數。'}`);
   if(e)[2,5,valid.at(-1)].forEach((n,j)=>F.push(yesno(`Can ${n} fill the gap?`,`${n}能填在中間嗎？`,valid.includes(n),i+j)));else F.push(N(d?'All possible numbers (comma separated)':'Smallest possible number',d?'所有可能數（逗號分隔）':'最小可能數',d?valid.join(','):valid[0],d?'set':'number'));
   q.guide=P('Test BOTH links by exact division; a remainder means that link fails.','用整除檢查左右兩條連接；有餘數表示不符合。');q.why=P(`Testing the permitted range gives ${valid.join(', ')}. Each connects to both ${a} and ${b}; neither endpoint can be reused.`,`檢查指定範圍得${valid.join('、')}；每個數都與${a}和${b}符合關係，且沒有重用兩端數。`);break;
  }
  case 'operations':{
   const den=4+i,a=den-1,b=2+i%3,prod=`${a}/${den*b}`,remain=`${a*b-den}/${den*b}`;q.meta={a,den,b};
   q.prompt=P(`A tank is ${a}/${den} full. A: use 1/${b} of the water currently in it. B: remove water equal to 1/${b} of the full tank capacity. Find the fraction of full capacity USED in A and REMAINING in B.`,`水箱有全箱容量${a}/${den}的水。A：用去現有水量的1/${b}。B：取走相等於全箱容量1/${b}的水。求A的用水量及B的剩水量各佔全箱容量幾分之幾。`);
   const ops=[P('Multiply','乘'),P('Subtract','減'),P('Add','加')];if(!e)F.push(C('Operation for A','A的運算',ops,0,i),C('Operation for B','B的運算',ops,1,i+1));F.push(N('Fraction used in A','A用去的分數',prod),N('Fraction remaining in B','B剩下的分數',remain));if(d)F.push(C('Why are operations different?','為甚麼運算不同？',[P('A uses part of the current water; B subtracts a fraction of full capacity.','A取現有水量的一部分；B減去全箱容量的分數。'),P('Every question with fractions requires multiplication.','所有分數題都用乘法。'),P('The numbers have different values in A and B.','兩題的數字數值不同。')],0,i));
   q.guide=P(`A: ${a}/${den} × 1/${b}. B: ${a}/${den} − 1/${b}. Identify what each fraction refers to.`,`A：${a}/${den} × 1/${b}；B：${a}/${den} − 1/${b}。先辨認各分數的參照量。`);q.why=P(`A uses ${prod} of capacity. B leaves ${remain}. In A, “one part” refers to existing water; in B it refers to the entire tank. Equivalent fractions are accepted.`,`A用去全箱容量的${prod}，B剩${remain}。A以現有水量為參照，B以全箱容量為參照。接受等值分數。`);break;
  }
  case 'cube':{
   const labels=Array.from({length:6},(_,j)=>String.fromCharCode(65+(j+i%6)%6)),[a,b,c,d1,f,g]=labels;const neighbors=[b,c,d1,f];q.meta={labels};
   // Labels follow the six cell positions shown in the net below.
   q.visual={kind:'cubeNet',labels:[a,b,c,d1,f,g]};
   q.prompt=e?P(`On this cube net, ${a} will share an edge with ${neighbors.join(', ')}. Which face is opposite ${a}?`,`摺成正方體後，${a}面與${neighbors.join('、')}共棱。哪面與${a}相對？`):P(`The net folds into a cube. Find the opposite face for each named face.${d?' Then decide whether the stated faces share an edge.':''}`,`此展開圖可摺成正方體。找出指定面的相對面。${d?'再判斷指定兩面是否共棱。':''}`);
   // Net: top=f, row=b a c g, below=d1. Opposites: a/g,b/c,f/d1.
   const opts=labels.map(x=>P(x,x));F.push(C(`Opposite ${a}`,`${a}的相對面`,opts,labels.indexOf(g),i));if(!e)F.push(C(`Opposite ${b}`,`${b}的相對面`,opts,labels.indexOf(c),i+1),C(`Opposite ${f}`,`${f}的相對面`,opts,labels.indexOf(d1),i+2));if(d)F.push(yesno(`${b} and ${c} share an edge?`,`${b}與${c}共棱嗎？`,false,i),yesno(`${a} and ${f} share an edge?`,`${a}與${f}共棱嗎？`,true,i+1));
   q.guide=P('Imagine folding along each shared edge. Opposite faces never share an edge.','想像沿共用邊摺起。相對面不共棱。');q.why=P(`Opposite pairs: ${a}/${g}, ${b}/${c}, ${f}/${d1}. Each face has four edge-neighbours and one opposite face.`,`相對面：${a}與${g}、${b}與${c}、${f}與${d1}。每面有四個共棱鄰面及一個相對面。`);break;
  }
  case 'mean':{
   const mean=6+i,a=mean-3,b=mean+1,sum=4*mean-a-b,pairs=range(1,Math.floor((sum-1)/2)).filter(x=>![a,b].includes(x)&&![a,b].includes(sum-x)).map(x=>[x,sum-x]);q.meta={mean,a,b,sum,pairs};
   q.prompt=P(`Four DIFFERENT positive whole numbers have mean ${mean}. Two are ${a} and ${b}.${e?` A third is ${pairs[0][0]}. Find the fourth.`:d?' List ALL possible smaller numbers in the missing unordered pair.':' Choose a valid pair for the other two numbers.'}`,`四個不同的正整數平均數為${mean}，其中兩個是${a}和${b}。${e?'第三個是'+pairs[0][0]+'，求第四個。':d?'列出其餘兩數每一組中所有可能的較小數。':'選出其餘兩數的正確組合。'}`);
   if(e)F.push(N('Fourth number','第四個數',pairs[0][1]));else if(d)F.push(N('All possible smaller numbers (comma separated)','所有可能較小數（逗號分隔）',pairs.map(p=>p[0]).join(','),'set'),N('Number of unordered pairs','不計次序的組合數',pairs.length));else F.push(C('Missing pair','其餘兩數',[P(pairs[0].join(', '),pairs[0].join('、')),P(`${a}, ${sum-a}`,`${a}、${sum-a}`),P(`${pairs[0][0]}, ${pairs[0][1]+1}`,`${pairs[0][0]}、${pairs[0][1]+1}`)],0,i));
   q.guide=P(`The total is 4 × ${mean}. Subtract ${a} and ${b}. Reject repeats; list the smaller number first.`,`總和是4 × ${mean}，減去${a}和${b}。排除重複，先列較小數。`);q.why=P(`Missing pair total: ${sum}. All pairs: ${pairs.map(p=>p.join(', ')).join('; ')}. Their sum with ${a} and ${b} is ${4*mean}.`,`其餘兩數之和為${sum}。所有組合：${pairs.map(p=>p.join('、')).join('；')}。加上${a}、${b}後總和為${4*mean}。`);break;
  }
  case 'match':{
   const values=[[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,10],[3,10],[7,10],[9,10],[1,20]], [n,b]=values[i],pct=100*n/b;q.meta={n,b,pct};
   q.prompt=P(`A fraction card shows ${n}/${b}.${d?` Someone pairs it with ${(pct+5)/100} and ${pct+5}%. Correct BOTH cards and identify the mistake.`:' Complete its equal-value cards.'}`,`分數卡是${n}/${b}。${d?`有人配上${(pct+5)/100}及${pct+5}%。改正兩張卡，並指出錯誤。`:'完成與它等值的數卡。'}`);
   F.push(N('Decimal','小數',n/b));if(!e)F.push(N('Percentage number (without %)','百分數數值（不用輸入%）',pct));if(d)F.push(C('Explanation','解釋',[P(`Divide ${n} by ${b}, then multiply by 100 for the percentage.`,`先用${n}除以${b}，再乘100求百分數數值。`),P('Add 5 to every percentage.','所有百分數都加5。'),P('Use the denominator as the percentage.','把分母當作百分數。')],0,i));q.guide=P('Divide numerator by denominator. A percentage counts parts per hundred.','分子除以分母得到小數；百分數表示每一百份中的份數。');q.why=P(`${n}/${b} = ${n/b} = ${pct}%. The reference whole is the same for every card.`,`${n}/${b} = ${n/b} = ${pct}%。各卡的參照整體相同。`);break;
  }
  }
  return q;
 }
 const api={topics,make,assess,matches,numeric,setValue};root.MathQuizReasoning=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
