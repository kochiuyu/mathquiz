const assert=require('node:assert/strict'),fs=require('node:fs');
const B=require('../reasoning-data.js'),samples=B.topics.filter(t=>t.single),Q=Object.fromEntries(samples.map(t=>[t.id,B.make(t.id)]));
const range=n=>Array.from({length:n},(_,i)=>i+1),ans=id=>Q[id].fields.map(f=>f.type==='set'?B.setValue(f.answer):Number(f.answer)),eq=(id,v)=>assert.deepEqual(ans(id),v,id);
assert.equal(samples.length,20);assert.equal(samples.filter(t=>t.region==='HK').length,17);
const wallet=[10,5,2,2,1],payments=range(31).map(mask=>wallet.filter((v,i)=>mask&(1<<i))).filter(a=>a.reduce((a,b)=>a+b,0)===14),best=Math.min(...payments.map(a=>a.length));assert.equal(best,3);eq('hk001',[1,0,2,0,wallet.reduce((a,b)=>a+b)-14]);
const costs=[8,11].flatMap(a=>[3,5].map(b=>a+b));eq('hk002',[...costs.map(n=>n<=14?0:1),14-costs[2]]);
assert(Q.hk003.teacher&&Q.hk003.fields.length===0);assert.equal(B.assess(Q.hk003,[]),null);
const arrival=9*60+10+25;eq('hk004',[Math.floor(arrival/60),arrival%60,600-arrival]);
const share=range(19).filter(n=>4*n<=19).at(-1);eq('hk005',[1,share,19-4*share]);
const price=n=>Math.floor(n/3)*50+n%3*25;eq('hk006',[price(2),2*20,price(3),3*20,2]);
const fours=range(60).filter(n=>n%4===0),sixes=range(60).filter(n=>n%6===0);eq('hk007',[fours.length,sixes.length,fours.filter(n=>sixes.includes(n)).length,new Set([...fours,...sixes]).size]);
eq('hk008',[range(999).filter(n=>/^[123]{3}$/.test(String(n))&&String(n)===String(n).split('').reverse().join(''))]);
eq('hk009',[2,3+2,0]);eq('hk010',[range(11).find(n=>n+4===11),0]);
const grid=[[9,2,7],[4,6,9],[5,10,3]],repairs=[];
for(let r=0;r<3;r++)for(let c=0;c<3;c++)for(let n=0;n<=18;n++){const g=grid.map(a=>a.slice());g[r][c]=n;const lines=[...g,...[0,1,2].map(c=>g.map(row=>row[c])),[g[0][0],g[1][1],g[2][2]],[g[0][2],g[1][1],g[2][0]]];if(lines.every(a=>a.reduce((a,b)=>a+b)===18))repairs.push([r+1,c+1,n]);}assert.equal(repairs.length,1);eq('hk011',repairs[0]);
const dates=range(14).filter(n=>[1,3].includes((n-1)%7));eq('hk012',[dates,dates.length,dates.at(-1)+3,2]);
const holders=range(26).find(n=>n*4>=26);eq('hk014',[6*4,26-6*4,holders]);
const raw=['p','r','e','p','p','e','r','p','e','p'];eq('hk015',[...['p','e','r'].map(x=>raw.filter(v=>v===x).length),1]);
function tiles(w,h){const cells=new Set(range(w).flatMap(x=>range(h).map(y=>x+','+y)));let edges=0;for(let x=1;x<=w;x++)for(let y=1;y<=h;y++)for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]])if(!cells.has((x+dx)+','+(y+dy)))edges++;return [cells.size,edges];}
const a=tiles(6,4),b=tiles(8,3);eq('hk017',[a[0],b[0],a[1],b[1],1]);
const round=n=>Math.floor((n+50)/100)*100;eq('hk018',[round(1260),round(1340),1,1340-1260]);
eq('hk019',[120+180+90,1,50*360/120,360]);eq('uk001',[[0,...range(5)].map(t=>10*t+5-t),10-1]);eq('uk002',[Math.floor(7/2),Math.floor(11/2),(7+11)/2,0]);eq('sg001',[139-52,139+(139-52)]);
const resource=JSON.parse(fs.readFileSync(require.resolve('../resources.js'),'utf8').split('=').slice(1).join('=').trim().replace(/;$/,''));let fields=0;
for(const t of samples){assert(resource.units.some(u=>u.code===t.unit&&u.grade===t.grade),t.id+' mapping');const q=Q[t.id];for(const text of [q.prompt,q.why,q.guide])assert(text.length===2&&text.every(s=>s.length>5));if(q.teacher)continue;fields+=q.fields.length;assert(B.assess(q,q.fields.map(f=>f.answer)).every(Boolean));for(const bad of ['', 'NaN','Infinity','<script>','99999','1/0'])assert(B.assess(q,q.fields.map(()=>bad)).every(v=>!v),t.id+bad);for(const f of q.fields){assert(f.label.every(Boolean));if(f.type==='choice')assert.equal(new Set(f.options.map(o=>o[0])).size,f.options.length);if(f.type==='set'){assert(B.matches(f,B.setValue(f.answer).reverse().join('、')));assert(!B.matches(f,f.answer+','+f.answer.split(',')[0]));}}}
console.log(JSON.stringify({passed:20,marked:19,teacher:1,fields,regions:{HK:17,UK:2,SG:1},independentOracles:true}));
