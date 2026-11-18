const fs=require('fs'),vm=require('vm'),a=require('assert/strict'),path=require('path');const root=path.resolve(__dirname,'..'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'builder.js'),'utf8')+';globalThis.bank=families;',c);vm.runInContext(fs.readFileSync(path.join(root,'measures5.js'),'utf8'),c);
const P=([x,y,z])=>[x-.55*y,-z-.4*y],verts=b=>{const[x,y,z]=b.origin,[l,w,h]=b.size;return [[x,y,z],[x+l,y,z],[x+l,y+w,z],[x,y+w,z],[x,y,z+h],[x+l,y,z+h],[x+l,y+w,z+h],[x,y+w,z+h]]},area=p=>Math.abs(p.reduce((s,v,i)=>{let w=p[(i+1)%p.length];return s+v[0]*w[1]-v[1]*w[0]},0)/2),near=(v,w)=>a.ok(Math.abs(v-w)<1e-7,`${v} != ${w}`);let cases=0;
for(const f of c.bank.filter(f=>['volumeconcept5a','cubevolume5a','compositevol5a'].includes(f.id)))for(let i=0;i<f.count;i++)for(const ch of [0,1]){const q=f.make(i),m=q.figure,svg=c.measureSvg5(m,ch),got=[...svg.matchAll(/class="measure-block-face" points="([^"]+)"/g)].map(x=>x[1].split(' ').map(v=>v.split(',').map(Number)));let at=0,scales=[];const groups=m.separate?m.blocks.map(b=>[b]):[m.blocks];for(const blocks of groups){const faces=[];for(const b of [...blocks].sort((a,b)=>b.origin[0]-a.origin[0])){const v=verts(b).map(P);for(const indices of [[0,1,5,4],[0,3,7,4],[4,5,6,7]])faces.push(indices.map(k=>v[k]));}const first=got[at],raw=faces[0],scale=(first[1][0]-first[0][0])/(raw[1][0]-raw[0][0]),dx=first[0][0]-raw[0][0]*scale,dy=first[0][1]-raw[0][1]*scale;scales.push(scale);for(const face of faces){const actual=got[at++];face.forEach((v,j)=>{near(actual[j][0],v[0]*scale+dx);near(actual[j][1],v[1]*scale+dy)});}if(blocks.length===1){const v=verts(blocks[0]).map(P),silhouette=[v[0],v[1],v[5],v[6],v[7],v[3]];near(faces.reduce((s,f)=>s+area(f),0),area(silhouette));}else{a.ok(blocks.every(b=>b.origin[1]===0&&b.origin[2]===0));a.equal(blocks[1].origin[0],blocks[0].size[0]);a.equal(blocks[0].size[1],blocks[1].size[1]);}}a.equal(at,got.length);if(m.separate)near(scales[0],scales[1]);cases++;}
console.log(`PASS ${cases} bilingual block SVG cases: exact front/left/top projected faces, closed single-block silhouette area, right-to-left composite occlusion order, common comparison scale.`);

// Exercise the actual quiz.figure route, whose language argument is boolean,
// not merely the numeric 0/1 fixture convention used by earlier isolated tests.
const quizSource=fs.readFileSync(path.join(root,'quiz.js'),'utf8');
vm.runInContext(quizSource.slice(quizSource.indexOf('function figure(type)'),quizSource.indexOf('function points(q)')),c);
const escaped=s=>String(s).replace(/[&<>"']/g,v=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[v]));
let routed=0,polygonLabels=0;
for(const f of c.bank.filter(f=>['heightmatch5a','paraarea5a','traparea5a','polyarea5a','volumeconcept5a','cubevolume5a','compositevol5a'].includes(f.id)))for(let i=0;i<f.count;i++)for(const language of [false,true]){
 const q=f.make(i);c.ch=language;const svg=c.figure(q.figure);a(!/undefined|NaN|Infinity/.test(svg),f.id+'-'+i+' boolean '+language);
 for(const pair of q.figure.labels||[]){a(svg.includes('>'+escaped(pair[language?1:0])+'</text>'),f.id+'-'+i+' missing actual language label');polygonLabels++;}
 a(svg.includes(language?'按題目尺寸理解圖形':'Use stated dimensions'),f.id+' language description');routed++;
}
a.equal(routed,192);a.equal(polygonLabels,204);
// Regression sensitivity: the former numeric-index-only renderer must fail
// when called through the same production route with a boolean language flag.
const fixedRenderer=fs.readFileSync(path.join(root,'measures5.js'),'utf8');a(fixedRenderer.includes('l[ch?1:0]'));
vm.runInContext(fixedRenderer.replace('l[ch?1:0]','l[ch]'),c);c.ch=false;
a(c.figure(c.bank.find(f=>f.id==='paraarea5a').make(0).figure).includes('undefined'));
vm.runInContext(fixedRenderer,c);
console.log(`PASS ${routed} actual quiz.figure boolean-language calls and ${polygonLabels} visible EN/繁中 polygon labels; old index mutation detected.`);
