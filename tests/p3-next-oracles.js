/* Independent finite oracles shared by Node gate and browser regression. No payload answer is used to compute its oracle. */
function runNextP3Oracle(code,bank){
 const ok=(x,m)=>{if(!x)throw Error(code+': '+m)},eq=(a,b,m)=>ok(JSON.stringify(a)===JSON.stringify(b),m);
 function solve(s){const ts=s.match(/\d+|[()+*\-]/g);let i=0;function atom(){if(ts[i]==='('){i++;const n=sum();ok(ts[i++ ]===')','close bracket');return n;}return Number(ts[i++]);}function product(){let n=atom();while(ts[i]==='*'){i++;n*=atom();ok(n>=0&&n<=9999,'product bound');}return n;}function sum(){let n=product();while(ts[i]==='+'||ts[i]==='-'){const op=ts[i++],b=product();n=op==='+'?n+b:n-b;ok(n>=0&&n<=9999,'sum bound');}return n;}const n=sum();ok(i===ts.length,'parser consumed expression');return n;}
 const fraction=s=>{const [n,d]=s.split('/').map(Number);ok(Number.isInteger(n)&&Number.isInteger(d)&&n>=0&&n<=d&&d>0,'rational option');return[n,d];};
 const timeLabel=n=>{let h=0;while(n>=60){h++;n-=60;}return `${h%12||12}:${String(n).padStart(2,'0')}`+(h===12&&n===0?' noon':h<12?' a.m.':' p.m.');};
 const selected=bank.filter(f=>f.code===code&&!f.retired&&f.id!=='frac3a'),ids=new Set();let count=0;const positions=[0,0,0,0],relations=new Set();
 for(const f of selected){ok(!ids.has(f.id),'duplicate ID');ids.add(f.id);for(let i=0;i<f.count;i++){
  const q=f.make(i);let expected;const m=q.operations3N4||q.fraction3N5||q.length3M1||q.time3M2;
  ok(q.marks===1,'one mark');for(const pair of [q.prompt,q.why,q.practiceHint||m.hint,...(q.fields||[])])ok(pair.length===2&&pair.every(s=>typeof s==='string'&&s.trim()),'bilingual metadata');
  if(q.fields)eq(q.answerUnitLabels,q.fields,'labelled unit key');
  if(code==='3N4'){
   if(m.expression){ok(!m.expression.includes('/'),'no division');let depth=0;for(const ch of m.expression){if(ch==='(')ok(++depth<=1,'no nesting');if(ch===')')depth--;}ok(depth===0,'balanced brackets');const nums=m.expression.match(/\d+/g).map(Number);ok(nums.length<=4&&nums.every(n=>n<=9999),'operand limits');if(m.kind==='addsub')ok(nums.length===3,'three addends');expected=solve(m.expression);}
   else{let betty=m.andy;for(let j=0;j<m.difference;j++)betty+=m.andyHasMore?-1:1;expected=m.andy+betty;ok(betty>=0&&expected<=9999,'story bounds');}
  }
  if(code==='3N5'){
   const svg=fractionsEvidenceSvg3(q.figure);ok(!/NaN|undefined/.test(svg),'fraction SVG');
   if(m.kind==='set'||m.kind==='operation'){
    let n;if(m.kind==='set'){n=(svg.match(/>X<\/text>/g)||[]).length;ok((svg.match(/<circle/g)||[]).length===m.d,'whole set');}
    else{ok(m.ns.length>=2&&m.ns.length<=3,'operation arity');let v=m.ns[0];for(const z of m.ns.slice(1)){v+=m.op==='+'?z:-z;ok(v>=0&&v<=m.d,'intermediate fraction bound');}n=q.figure.items[0].tags.filter(x=>m.op==='+'?Boolean(x):x==='X').length;ok(n===v,'diagram operation');}
    const opts=q.choices.map(c=>fraction(q.choiceLabels[c][0]));for(let a=0;a<opts.length;a++)for(let b=a+1;b<opts.length;b++)ok(opts[a][0]*opts[b][1]!==opts[b][0]*opts[a][1],'unique rational choices');expected=q.choices[opts.findIndex(([num,den])=>num*m.d===n*den)];
   }else{ok(m.kind==='equivalence'||m.a===m.c||m.b===m.d,'comparison limits');let left=0,right=0;for(let k=0;k<m.d;k++)left+=m.a;for(let k=0;k<m.b;k++)right+=m.c;expected=m.kind==='equivalence'?(left===right?'yes':'no'):(left===right?'=':left<right?'<':'>');if(m.kind==='compare')relations.add(expected);}
  }
  if(code==='3M1'){
   if(m.kind==='compound'){expected=m.mm;for(let j=0;j<m.cm;j++)expected+=10;ok(m.mm>=0&&m.mm<10,'mm part');}
   else if(m.kind==='kmCompare'){expected=m.a===m.b?'=':m.a<m.b?'<':'>';relations.add(expected);}
   else{expected=0;for(let j=m.start;j<m.end;j++)expected++;ok(m.start>=0&&m.end<=40&&m.start<m.end,'ruler endpoints');const svg=rulerMillimetresSvg3(q.figure);ok((svg.match(/<line /g)||[]).length===41,'41 millimetre ticks');const rect=[...svg.matchAll(/<rect x="(\d+)" y="(\d+)" width="(\d+)"/g)][1];ok((Number(rect[1])-30)/7===m.start&&Number(rect[3])/7===expected,'represented endpoints');}
  }
  if(code==='3M2'){
   let start=m.endMinutes;for(let j=0;j<m.durationMinutes;j++)start--;ok(start===m.startMinutes&&start>=0&&start<1440,'backward time');ok(m.durationMinutes>0&&(m.kind==='minutes'?m.durationMinutes<=60:m.durationMinutes%60===0&&m.durationMinutes<=720),'duration bound');ok(new Set(m.optionMinutes).size===4,'unique times');m.optionMinutes.forEach((n,j)=>{ok(n>=0&&n<1440,'same-day options');ok(q.choiceLabels[q.choices[j]][0]===timeLabel(n),'full time label');});expected=q.choices[m.optionMinutes.indexOf(start)];positions[q.choices.indexOf(expected)]++;ok(!/\b1 (minutes|hours)\b/.test(q.prompt[0]+q.why[0]),'singular grammar');
  }
  eq(q.answer,[expected],'answer '+f.id+'-'+i);count++;
 }}
 ok(count===({'3N4':48,'3N5':48,'3M1':36,'3M2':24})[code],'count');if(code==='3N5'||code==='3M1')ok(relations.size===3,'all comparison relations');if(code==='3M2')eq(positions,[6,6,6,6],'balanced choices');return count;
}
