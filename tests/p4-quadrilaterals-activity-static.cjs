'use strict';
// Independent reconstruction of the authored activity polygons. No application helpers or sibling checkout.
const fs=require('node:fs'),path=require('node:path'),a=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const html=read('activities/p4-quadrilaterals-iii.html');
const cross=(u,v)=>u[0]*v[1]-u[1]*v[0],dot=(u,v)=>u[0]*v[0]+u[1]*v[1],sub=(u,v)=>[u[0]-v[0],u[1]-v[1]];
const expected={A:{sides:[4,4,4,4],classes:[true,true,true]},B:{sides:[6,3,6,3],classes:[false,true,true]},C:{sides:[5,5,5,5],classes:[true,false,true]},D:{sides:[6,5,6,5],classes:[false,false,true]},E:{sides:[13,13,15,15],classes:[false,false,false]},F:{sides:[5,5,5,5],classes:[true,true,true]}};
let rendered=0;
for(const lang of ['en','zh']){
 const section=html.split('<section id="'+lang+'">')[1]?.split('</section>')[0];a.ok(section,'language section');
 a.equal((section.match(/data-task="[1-6]"/g)||[]).length,6);for(let i=1;i<=6;i++)a.equal((section.match(new RegExp('data-task="'+i+'"','g'))||[]).length,1);
 a.equal((section.match(/class="sheet"/g)||[]).length,5);a.ok(section.includes('<div class="key" hidden>'));
 const rubric=section.match(/<table class="record">([\s\S]*?)<\/table>/)?.[1];a.ok(rubric);
 const rows=[...rubric.matchAll(/<tr><td>4S1\.([1-3]) ([\s\S]*?)<\/tr>/g)];a.equal(rows.length,3);a.deepEqual(rows.map(x=>+x[1]),[1,2,3]);
 for(const row of rows){a.equal((row[2].match(/data-observation="blank">____<\/td>/g)||[]).length,2);a.ok(!/checked|selected/.test(row[2]));}
 a.equal((section.match(/<div class="work" data-observation="blank"><\/div>/g)||[]).length,6);
 const cards=[...section.matchAll(/<figure><svg class="quad-card" data-card="([A-F])" data-vertices='([^']+)' data-scale="([^"]+)" viewBox="0 0 240 185"([\s\S]*?)<\/svg><figcaption>([\s\S]*?)<\/figcaption><\/figure>/g)];
 a.deepEqual(cards.map(x=>x[1]),['A','B','C','D','E','F']);
 for(const [,name,rawVertices,rawScale,svg,caption] of cards){
  const v=JSON.parse(rawVertices),scale=+rawScale; a.equal(v.length,4);a.equal(new Set(v.map(p=>p.join(','))).size,4);a.ok(v.flat().every(Number.isInteger));a.ok(scale>0&&Number.isFinite(scale));
  const edges=v.map((p,i)=>sub(v[(i+1)%4],p)),norms=edges.map(e=>dot(e,e)),turns=edges.map((e,i)=>cross(e,edges[(i+1)%4]));
  a.ok(turns.every(x=>x>0)||turns.every(x=>x<0),'strict convexity guarantees simple nondegenerate outline');
  a.notEqual(v.reduce((n,p,i)=>n+cross(p,v[(i+1)%4]),0),0,'nonzero shoelace area');
  const classes=[new Set(norms).size===1,edges.every((e,i)=>dot(e,edges[(i+1)%4])===0),cross(edges[0],edges[2])===0&&cross(edges[1],edges[3])===0];
  a.deepEqual(classes,expected[name].classes,name+' rhombus/rectangle/parallelogram');a.deepEqual(norms,expected[name].sides.map(n=>n*n));
  const captionSides=caption.match(/([\d]+), ([\d]+), ([\d]+), ([\d]+)/);a.ok(captionSides);a.deepEqual(captionSides.slice(1).map(Number),expected[name].sides,'visible side facts match exact geometry');
  const points=svg.match(/<polygon points="([^"]+)"/)?.[1].split(' ').map(p=>p.split(',').map(Number));a.equal(points?.length,4);
  const translation=sub(points[0],v[0].map(n=>n*scale));
  for(let i=0;i<4;i++){
   a.ok(points[i].every(Number.isFinite));a.ok(points[i][0]>=20&&points[i][0]<=220&&points[i][1]>=30&&points[i][1]<=155,'positive viewport margin');
   for(let axis=0;axis<2;axis++)a.ok(Math.abs(points[i][axis]-v[i][axis]*scale-translation[axis])<1e-9,'one uniform affine mapping');
   const edge=sub(points[(i+1)%4],points[i]);a.ok(Math.abs(dot(edge,edge)-norms[i]*scale*scale)<1e-6,'rendered norm preserves exact lengths');
  }
  a.ok(svg.includes('text-anchor="middle" style="font-size:14px"'),'CSS-safe short label');rendered++;
 }
}
a.ok(html.includes('data-unit="4S1"'));a.ok(html.includes('setAttribute(\'aria-expanded\',String(show))'));a.ok(html.includes("document.querySelectorAll('.key').forEach(k=>k.hidden=!show)"));
for(const term of ['not calibrated','Separately make models','Draw different rhombuses','Independent / prompted / not yet / not observed','製作不能用繪圖或選擇題代替','原作、工具、日期及下一步']){a.ok(html.includes(term),term);}
for(const source of ['EN_KS2_e.pdf#page=25','pmc2017_e.pdf#page=72'])a.equal(html.split(source).length-1,2);
const data=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,''));
a.equal(data.units.length,85);a.equal(data.units.find(x=>x.code==='4S1').complete,true);a.equal(data.activities.filter(x=>x.path==='activities/p4-quadrilaterals-iii.html').length,1);a.deepEqual(data.activities.find(x=>x.path==='activities/p4-quadrilaterals-iii.html').units,['4S1']);
a.ok(read('tools/build-pdf-font.py').includes('activities/p4-quadrilaterals-iii.html'));
console.log('PASS 4S1 activity: '+rendered+' exact bilingual convex cards, visible lengths/classes, isotropic SVG/margins, six tasks/five sheets per language, three blank objectives and hidden teacher key.');
