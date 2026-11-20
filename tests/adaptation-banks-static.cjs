const A=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const B=require('../reasoning-data.js'),topics=B.topics.filter(t=>t.bank),eq=(a,b,id)=>A.deepEqual(a,b,id),range=(a,b)=>Array.from({length:b-a+1},(_,i)=>i+a);
let tasks=0,fields=0;const fingerprints=new Set();
const number=q=>q.fields.map(f=>f.type==='set'?B.setValue(f.answer):Number(f.answer));
const chosen=(q,k)=>q.fields[k].options[+q.fields[k].answer][0];
function perimeter(w,h){let n=0;for(let x=0;x<w;x++)for(let y=0;y<h;y++)for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]])if(x+dx<0||x+dx>=w||y+dy<0||y+dy>=h)n++;return n;}
for(const t of topics)for(const level of ['easy','normal','difficult'])for(let i=0;i<12;i++){
 const q=B.make(t.id,level,i),m=q.meta,e=level==='easy',d=level==='difficult',ans=number(q),id=q.id;tasks++;fields+=q.fields.length;
 const fingerprint=t.id+level+JSON.stringify([q.prompt,q.visual]);A(!fingerprints.has(fingerprint),'Duplicate context '+id);fingerprints.add(fingerprint);
 A(q.prompt.length===2&&q.guide.length===2&&q.why.length===2,id+' bilingual');A(q.fields.length>0,id);A(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean),id+' key');
 for(const bad of ['', 'NaN','Infinity','1/0','<script>','-99999'])A(B.assess(q,q.fields.map(()=>bad)).every(x=>!x),id+' malformed');
 for(const f of q.fields){A(f.label.length===2);if(f.type==='choice'){eq(new Set(f.options.map(o=>o[0])).size,f.options.length,id+' options');A(f.options.every(o=>o.length===2));}else if(f.type==='set'){A(B.matches(f,B.setValue(f.answer).reverse().join('、')));A(!B.matches(f,f.answer+','+f.answer.split(',')[0]));}else A(!B.matches(f,String(Number(f.answer)+1)),id+' nearby wrong');}
 switch(t.id){
 case 'bank-hk001':{
 const actual=[];const dfs=(j,left,used,counts)=>{if(j===4){if(left===0)actual.push({used,counts});return;}for(let n=0;n<=m.counts[j];n++)dfs(j+1,left-n*m.coins[j],used+n,[...counts,n]);};dfs(0,m.target,0,[]);const min=Math.min(...actual.map(x=>x.used)),total=m.coins.reduce((a,v,j)=>a+v*m.counts[j],0);eq(ans,e?[total,total-m.target]:d?[min,actual.filter(x=>x.used===min).length]:[min,total-m.target],id);break;}
 case 'bank-hk002':{const sums=[m.a+m.c,m.a+m.z,m.b+m.c,m.b+m.z],ok=budget=>sums.flatMap((n,j)=>n<=budget?[j+1]:[]);let least=0;while(ok(least).length<3)least++;eq(ans,e?[sums[1],m.budget-sums[1]]:d?[least,ok(least)]:[ok(m.budget)],id);break;}
 case 'bank-hk004':{const date=new Date(Date.UTC(2026,0,1,0,m.start));date.setUTCMinutes(date.getUTCMinutes()+m.trip);const arrival=date.getUTCHours()*60+date.getUTCMinutes();const latest=range(0,m.work).filter(n=>n+m.trip<=m.work).at(-1),answer=d?latest:arrival;eq(ans,[Math.floor(answer/60),answer%60,...(!e?[m.work-arrival]:[])],id);break;}
 case 'bank-hk014':{let holders=0,capacity=0;while(capacity<m.n){capacity+=m.cap;holders++;}const full=holders-1,rem=m.n-full*m.cap;eq(ans,e?[rem,1]:d?[full,holders,capacity-m.n+1]:[holders,capacity-m.n],id);break;}
 case 'bank-hk015':{const tally=[0,0,0];m.list.forEach(x=>tally[x]++);eq(ans.slice(0,e?2:3),e?[m.list.length,tally[0]-tally[2]]:tally,id);if(d)eq(chosen(q,3),'No',id);break;}
 case 'bank-hk011':{const repairs=[];for(let r=0;r<3;r++)for(let c=0;c<3;c++)for(let n=0;n<=m.target;n++){const g=m.wrong.map(a=>a.slice());g[r][c]=n;const lines=[...g,...[0,1,2].map(k=>g.map(row=>row[k])),[g[0][0],g[1][1],g[2][2]],[g[0][2],g[1][1],g[2][0]]];if(lines.every(a=>a.reduce((x,y)=>x+y)===m.target))repairs.push([r+1,c+1,n]);}eq(repairs.length,1,id);eq(ans,e?[repairs[0][2]]:[...repairs[0],...(d?[m.target]:[])],id);break;}
 case 'bank-hk008':{const nums=range(100,999).filter(n=>{const a=String(n).split('').map(Number);return a.every(x=>m.digits.includes(x))&&a[0]===a[2]&&(!e||a[0]===m.digits[0])&&(!d||a[1]!==a[0]);});eq(ans,[nums],id);break;}
 case 'bank-hk007':{let a=0,b=0,both=0,either=0,one=0;for(let n=1;n<=m.max;n++){const x=n%m.a===0,y=n%m.b===0;a+=x;b+=y;both+=x&&y;either+=x||y;one+=x!==y;}eq(ans,e?[a,b]:[d?one:either,both],id);break;}
 case 'bank-hk017':{const p1=perimeter(m.w,m.h),p2=perimeter(m.nw,m.nh),area=Array.from({length:m.h},()=>Array(m.w).fill(1)).flat().length;eq(ans.slice(0,d?2:3),e?[area,area]:d?[p1,p2]:[p1,p2,area],id);if(d)eq(chosen(q,2),p1===p2?'Yes':'No',id);break;}
 case 'bank-hk009':{eq(ans.slice(0,d?1:2),e?[m.gaps]:d?[m.n*2]:[m.shown+m.gaps,m.gaps],id);if(d)eq(chosen(q,1),'No, only the unit changed',id);A(m.n*2<=20);break;}
 case 'bank-hk010':{const start=range(0,20).find(n=>n+m.add===m.end);eq(ans[0],e?m.start+m.add:start,id);if(d)eq(chosen(q,1),`${start} + ${m.add} = ${m.end}`,id);A(m.end<=20);break;}
 case 'bank-hk019':{const angles=m.amounts.map(n=>360*n/m.total);eq(angles.reduce((a,b)=>a+b),360,id);eq(ans,e?angles:[angles[1],d?m.wrong.reduce((a,b)=>a+b):360,...(d?[m.total*30/360]:[])],id);A(angles.every(a=>a>0&&a<360),id);break;}
 case 'bank-hk020':{let costs=[0,0,0];for(let month=1;month<=6;month++){costs[0]+=m.monthly;if(month%2===0)costs[1]+=m.bimonthly;if(month%3===0)costs[2]+=m.quarterly;}const total=costs.reduce((a,b)=>a+b);eq(ans,e?costs.map(x=>x/100):[total/100,d?(6*(m.monthly+m.bimonthly+m.quarterly)-total)/100:1.5],id);break;}
 case 'bank-hk021':{const cents=m.price*100,discounted=cents-cents*m.off/100,Aprice=(discounted-m.coupon*100)/100,Bprice=((cents-m.coupon*100)*(100-m.off)/100)/100;eq(ans,e?[discounted/100]:[Aprice,d?Bprice:m.price-Aprice,...(d?[Number((Bprice-Aprice).toFixed(2))]:[])],id);break;}
 case 'bank-uk003':{const reachable=Array(m.max+1).fill(false);reachable[0]=true;for(let n=1;n<=m.max;n++)reachable[n]=(n>=m.a&&reachable[n-m.a])||(n>=m.b&&reachable[n-m.b]);const ways=[];for(let x=0;x<=m.target;x++)for(let y=0;y<=m.target;y++)if(x*m.a+y*m.b===m.target)ways.push(x+y);eq(ans,e?[2*m.a+m.b,3]:d?[range(1,m.max).filter(n=>reachable[n])]:[Math.min(...ways),ways.length],id);break;}
 case 'bank-sg002':{let total=0;for(let j=0;j<m.groups;j++)total+=m.each;const final=total-m.extra;eq(ans[0],e?total:final,id);if(e)eq(ans[1],final,id);else{if(d)eq(chosen(q,1),m.valid?'Yes':'No',id);eq(chosen(q,d?2:1),`${m.groups} × ${m.each} − ${m.extra} = ${final}`,id);}break;}
 }
}
eq(topics.length,16);eq(tasks,576);eq(topics.filter(t=>t.region==='HK').length,14);
const c={window:{}};vm.runInNewContext(fs.readFileSync(require.resolve('../adaptation-bank-pictures.js'),'utf8'),c);
for(const t of topics)for(const l of ['easy','normal','difficult'])for(let i=0;i<12;i++){const q=B.make(t.id,l,i);if(q.visual)for(const zh of [false,true])for(const view of ['practice','paper','key']){const html=c.window.MathQuizBankPictures(q,zh,view);A(html.includes('<svg')||html.includes('<table'),q.id);A(!/NaN|undefined/.test(html),q.id+' diagram');}}
console.log(JSON.stringify({passed:true,tasks,fields,independentOracles:16,uniqueQuestions:576,seedContexts:192,regions:{HK:14,UK:1,SG:1}}));
