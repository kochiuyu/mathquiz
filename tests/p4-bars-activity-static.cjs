// Independent supplied-example and construction audit; no generator helpers/sibling paths.
const fs=require('node:fs'),path=require('node:path'),a=require('node:assert/strict');
const html=fs.readFileSync(path.resolve(__dirname,'../activities/p4-bar-charts-ii.html'),'utf8');
a(html.includes('<body data-unit="4D1">'));
a(html.includes('activity-ui.css')&&html.includes('activity-ui.js'));
const attr=(s,k)=>{const m=s.match(new RegExp('(?:^|\\s)'+k+'="([^"]*)"'));a(m,'missing '+k);return m[1];};
const sections=['en','zh'].map(lang=>html.split('<section id="'+lang+'"')[1].split('</section>')[0]);
for(const [i,sec]of sections.entries()){
 a.equal((sec.match(/data-task=/g)||[]).length,8);a.deepEqual([...sec.matchAll(/data-task="(\d+)"/g)].map(m=>+m[1]),[1,2,3,4,5,6,7,8]);
 a.equal((sec.match(/class="sheet"/g)||[]).length,6);a(sec.includes('<div class="key" hidden>'));
 const charts=[...sec.matchAll(/<svg class="chart"([^>]*)>([\s\S]*?)<\/svg>/g)];a.equal(charts.length,3);
 a.deepEqual(charts.map(m=>+attr(m[1],'data-scale')),[10,50,100]);
 a.deepEqual(charts.map(m=>attr(m[1],'data-orientation')),['horizontal','vertical','horizontal']);
 for(const [,attrs,svg]of charts){
  const scale=+attr(attrs,'data-scale'),horizontal=attr(attrs,'data-orientation')==='horizontal',counts=attr(attrs,'data-counts').split(',').map(Number);a.deepEqual(counts,[2,4,6].map(n=>n*scale));
  a(attr(attrs,'aria-label').includes(i?'非學生實際調查':'not a pupil survey'));
  const paths=[...svg.matchAll(/<path d="([^"]+)"\/>/g)].map(m=>m[1]);a.equal(paths.length,7);
  const ticks=[...svg.matchAll(/<text ([^>]+)>(\d+)<\/text>/g)];a.equal(ticks.length,7);
  ticks.forEach(([,at,value],n)=>{a.equal(+value,n*scale);a.equal(+attr(at,horizontal?'x':'y'),horizontal?100+40*n:194-25*n);a.equal(paths[n],horizontal?'M'+(100+40*n)+' 40V190':'M60 '+(190-25*n)+'H360');});
  const bars=[...svg.matchAll(/<rect class="bar-mark"([^>]*)\/>/g)];a.equal(bars.length,3);
  bars.forEach(([,at],j)=>{const coordinates=Object.fromEntries(['x','y','width','height'].map(k=>[k,+attr(at,k)]));a.deepEqual(coordinates,horizontal?{x:100,y:55+j*45,width:counts[j]/scale*40,height:25}:{x:100+j*90,y:190-counts[j]/scale*25,width:40,height:counts[j]/scale*25});});
 }
 const grids=[...sec.matchAll(/<div class="construction"([^>]*)>([\s\S]*?)<\/div>/g)];a.equal(grids.length,3);
 a.deepEqual(grids.map(m=>attr(m[1],'data-orientation')),['choice','horizontal','vertical']);
 for(const [,at,grid] of grids){a.equal(attr(at,'data-intervals'),'6');a(!grid.includes('<rect'),'pupil bars must not be prefilled');const paths=[...grid.matchAll(/<path d="([^"]+)"/g)].map(m=>m[1]);a.equal(paths.length,15);a.deepEqual(paths.slice(0,7),Array.from({length:7},(_,n)=>'M60 '+(40+25*n)+'H360'));a.deepEqual(paths.slice(7,14),Array.from({length:7},(_,n)=>'M'+(60+50*n)+' 40V190'));a.equal(paths[14],'M60 40V190H360');}
 const observations=[...sec.matchAll(/data-observation="blank">([\s\S]*?)<\//g)].map(m=>m[1]);a(observations.length>=40);a(observations.every(x=>x===''||x==='____'),'observations not fabricated');
 const key=sec.split('<div class="key" hidden>')[1];for(const n of [1,2,3,4])a.equal((key.match(new RegExp('4D1\\.'+n+'\\b','g'))||[]).length,1,'four objective rubric rows');
 a(key.includes(i?'獨立完成／提示後／尚未／未觀察':'independent / prompted / not yet / not observed'));
 a(key.includes('EN_KS2_e.pdf#page=28')&&key.includes('pmc2017_e.pdf#page=74'));
 for(const pair of ['44→40','45→50','46→50','249→200','250→300','251→300'])a(key.includes(pair),pair+' key missing');
 a(key.includes('435')&&key.includes('440')&&key.includes('450'));
 a(key.includes(i?'尚未確認資源完成':'not resource-complete'));a(key.includes(i?'屏幕閱讀器':'screen-reader'));
}
// Tally by independent token enumeration, then check the actual bilingual source list/key.
const responses='Art Music Art Sport Music Art Sport Music Art Music Sport Art'.split(' '),counts={};for(const v of responses)counts[v]=(counts[v]||0)+1;
a.deepEqual(counts,{Art:5,Music:4,Sport:3});a.equal(responses.length,12);
a(sections[0].includes(responses.join(', ')));a(sections[1].includes(responses.map(v=>({Art:'美術',Music:'音樂',Sport:'體育'})[v]).join('、')));
a(sections[0].includes('Art5, Music4, Sport3, total12'));a(sections[1].includes('美術5、音樂4、體育3，共12'));
for(const [values,expected]of [[[20,40,60],[10]],[[100,200,300],[50,100]],[[200,400,600],[100]]]){
 const feasible=[10,50,100].filter(s=>values.every(v=>v/s<=6&&Number.isInteger(v/s)));a.deepEqual(feasible,expected);
}
a(sections[0].includes('whole-tick endpoints')&&sections[1].includes('完整格線'));a(sections[0].includes('50 or100')&&sections[1].includes('50或100'));
// Closest-multiple distance oracle is deliberately distinct from a floor(n+half) generator.
const near=(n,u)=>[Math.floor(n/u)*u,(Math.floor(n/u)+1)*u].sort((x,y)=>Math.abs(n-x)-Math.abs(n-y)||y-x)[0];
a.deepEqual([[44,10],[45,10],[46,10],[249,100],[250,100],[251,100]].map(([n,u])=>near(n,u)),[40,50,50,200,300,300]);
a.equal([145,145,145].map(n=>near(n,10)).reduce((x,y)=>x+y,0),450);a.equal(near(145*3,10),440);
console.log('PASS 4D1 activity: bilingual8tasks/6sheets/3blankgrids/3models/4rubricrows; independent geometry,ticks,tallies,scale constraints,rounding and empty observations.');
