/* P6 diagrams use model coordinates; labels never replace geometry. */
function shapeDataSvg6(m,zh){
 const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 const text=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle" style="font-size:11px">${esc(s)}</text>`;
 const line=(x1,y1,x2,y2,extra='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#294e49" ${extra}/>`;
 let b='',height=340;
 if(m.mode==='outline'){
  const s=m.s,vertices=[[[0,0],[4,0],[4,4],[0,4]],[[0,0],[6,0],[6,3],[0,3]],[[0,4],[2,0],[4,4]],[[0,2*Math.sqrt(3)],[2,0],[4,2*Math.sqrt(3)]],[[0,2],[3,0],[6,2],[3,4]]][m.type];
  if(m.type===5)b='<circle data-outline="circle" cx="180" cy="160" r="'+(50+s*5)+'" fill="#ecf4ef" stroke="#294e49"/>';
  else{const scale=18+s*3,pts=vertices.map(([x,y])=>[70+x*scale,70+y*scale]);b=`<polygon data-outline="polygon" points="${pts.map(p=>p.join(',')).join(' ')}" fill="#ecf4ef" stroke="#294e49"/>`;}
 }else if(m.mode==='reflection'){
  const X=x=>36+15*x,Y=y=>310-15*y;
  for(let j=0;j<=18;j++)b+=line(X(j),Y(0),X(j),Y(18),'stroke-width="0.4"')+line(X(0),Y(j),X(18),Y(j),'stroke-width="0.4"')+(j%2===0?text(X(j),328,j)+text(21,Y(j)+4,j):'');
  b+=m.vertical?line(X(m.k),Y(0),X(m.k),Y(18),'data-mirror="vertical" stroke-dasharray="5 3" stroke-width="2"'):line(X(0),Y(m.k),X(18),Y(m.k),'data-mirror="horizontal" stroke-dasharray="5 3" stroke-width="2"');
  b+=`<circle data-point="P" cx="${X(m.x)}" cy="${Y(m.y)}" r="4" fill="#a14a25"/>`+text(X(m.x)+10,Y(m.y)-8,'P')+text(175,20,zh?'直欄／橫行方格（每格一單位）':'Numbered columns / rows (one unit per square)');
 }else if(m.mode==='line'||m.mode==='linePlot'){
  const X=j=>60+j*75,Y=v=>280-v/m.scale*22;
  for(let j=0;j<=10;j++)b+=line(48,280-j*22,300,280-j*22,'stroke-width="0.4"')+text(28,284-j*22,j*m.scale);
  b+=line(48,280,310,280)+line(48,60,48,280);
  for(let j=0;j<4;j++)b+=text(X(j),302,j+1);
  b+=text(180,325,zh?'時間（等距時段）':'Time (equal intervals)')+text(180,28,zh?'示例X讀數（單位）':'Example X readings (units)');
  if(m.mode==='line'){b+=`<polyline data-series="X" points="${m.values.map((v,j)=>[X(j),Y(v)].join(',')).join(' ')}" fill="none" stroke="#236697" stroke-width="2"/>`;m.values.forEach((v,j)=>b+=`<circle data-time="${j+1}" cx="${X(j)}" cy="${Y(v)}" r="4" fill="#236697"/>`);}
  else m.points.forEach((v,j)=>b+=`<circle data-proposal="${'ABC'[j]}" cx="${X(m.at)}" cy="${Y(v)}" r="4" fill="#a14a25"/>`+text(X(m.at)+16,Y(v)+4,'ABC'[j]));
 }else if(m.mode==='pie'){
  const total=m.percent?100:360,r=100,cx=180,cy=165;let angle=-Math.PI/2;
  m.parts.forEach((v,j)=>{const next=angle+v/total*2*Math.PI,x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle),x2=cx+r*Math.cos(next),y2=cy+r*Math.sin(next),mid=(angle+next)/2;
   b+=`<path data-sector="${'AB'[j]}" d="M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${v/total>0.5?1:0} 1 ${x2} ${y2} Z" fill="${j?'#e6bd72':'#9ac9d8'}" stroke="#294e49"/>`+text(cx+68*Math.cos(mid),cy+68*Math.sin(mid),'AB'[j]+' '+v+(m.percent?'%':'°'));angle=next;});
  b+=text(180,300,zh?'整個圓代表全部票數':'The whole circle represents all votes');
 }else if(m.mode==='bars'||m.mode==='truncated'){
  const base=m.mode==='truncated'?m.base:0,max=Math.max(...m.values),step=m.mode==='truncated'?1:Math.max(1,Math.ceil(max/10)),Y=v=>280-(v-base)/step*20;
  for(let j=0;j<=10;j++)b+=line(45,280-j*20,310,280-j*20,'stroke-width="0.4"')+text(27,284-j*20,base+j*step);
  m.values.forEach((v,j)=>{const x=70+j*75;b+=`<rect data-bar="${j}" x="${x}" y="${Y(v)}" width="35" height="${280-Y(v)}" fill="#59948b"/>`+text(x+17,301,'ABC'[j])+text(x+17,Y(v)-6,v);});b+=text(180,325,zh?'供比較的示例數據':'Supplied example data');
 }
 return `<svg class="shape-data6-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 ${height}" role="img" aria-label="${zh?'題目所述圖表':'Diagram described in the question'}">${b}</svg>`;
}
