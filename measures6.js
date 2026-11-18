/* Scoped P6 diagrams. Boolean language is the production figure() contract. */
function measureSvg6(m,zh){
 const L=a=>a[zh?1:0],esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),text=(x,y,s,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" style="font-size:11px;font-family:sans-serif;fill:#20392f">${esc(s)}</text>`,line=(x,y,X,Y,cl='measure-line',color='#345b47',width=2)=>`<line class="${cl}" x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${color}" stroke-width="${width}"/>`,polar=(cx,cy,r,a)=>[cx+r*Math.cos(a*Math.PI/180),cy-r*Math.sin(a*Math.PI/180)];
 let body='',desc=L(['Use stated units and read the marked geometry; drawings are not physical measuring templates.','按指定單位及圖形標記作答；圖形不是實物量度模板。']);
 const arc=(cx,cy,r,start,turn,cl)=>{const a=polar(cx,cy,r,start),b=polar(cx,cy,r,start+turn);return `<path class="${cl}" d="M${a} A${r},${r} 0 ${Math.abs(turn)>180?1:0},${turn>0?0:1} ${b}" fill="none" stroke="#a74919" stroke-width="2" marker-end="url(#measure6-arrow)"/>`;};
 if(m.type==='protractor'){
  const cx=210,cy=150,r=110,R=m.rotation;const a=polar(cx,cy,r,R),b=polar(cx,cy,r,R+180);body+=`<path class="protractor-outline" d="M${a} A${r},${r} 0 0,0 ${b} Z" fill="#eef5f0" stroke="#345b47"/>`;
  for(let deg=0;deg<=180;deg+=5){const A=polar(cx,cy,r,R+deg),B=polar(cx,cy,r-(deg%30===0?13:deg%10===0?9:5),R+deg);body+=line(...A,...B,'protractor-tick','#62796c',1);if(deg%30===0){const p=polar(cx,cy,130,R+deg),q=polar(cx,cy,88,R+deg);const edge=deg===0||deg===180,dx=edge?8*Math.sin(R*Math.PI/180):0,dy=edge?8*Math.cos(R*Math.PI/180):0;body+=text(p[0]+dx,p[1]+dy+4,deg)+text(q[0]+dx,q[1]+dy+4,180-deg);}}
  for(const [name,deg,len,color]of[['A',m.start,120,'#20392f'],['B',m.end,120,'#326c97']]){const p=polar(cx,cy,len,R+deg),q=polar(cx,cy,len+13,R+deg);body+=line(cx,cy,...p,'angle-ray-'+name,color,3)+text(q[0],q[1]+4,name);}
  body+=arc(cx,cy,55,R+m.start,m.turn,'marked-angle-turn')+text(cx,cy+4,'O')+text(210,322,L(['Start at A; follow the arrow to B.','從A起，沿箭咀至B。']));
 }else if(m.type==='anglepair'){
  m.angles.forEach((a,i)=>{const cx=i?310:110,cy=165,start=m.rotations[i],p=polar(cx,cy,m.lengths[i],start),q=polar(cx,cy,m.lengths[i],start+a);body+=line(cx,cy,...p,'angle-pair-ray')+line(cx,cy,...q,'angle-pair-ray')+arc(cx,cy,32,start,a,'angle-pair-arc')+text(cx,290,(i?'B':'A')+' '+a+'°');});
 }else if(m.type==='cups'){
  m.levels.forEach((level,i)=>{const x=m.levels.length===1?170:70+i*210,y=60,h=200,w=80;body+=`<path class="cup-outline" d="M${x},${y} V${y+h} H${x+w} V${y}" fill="none" stroke="#345b47"/>`;const wh=level/m.maximum*h;body+=`<rect class="water-level" data-level="${level}" x="${x+2}" y="${y+h-wh}" width="${w-4}" height="${wh}" fill="#b5dce8"/>`;for(let n=0;n<=m.maximum;n+=m.step){let yy=y+h-n/m.maximum*h;body+=line(x+w-12,yy,x+w+3,yy,'cup-tick','#345b47',1)+text(x+w+8,yy+4,n,'start');}body+=text(x+w/2,290,m.levels.length===1?L(['Collected (mL)','收集水（mL）']):L([i?'After (mL)':'Before (mL)',i?'之後（mL）':'之前（mL）']));});
 }else if(m.type==='tank'){
  const x=110,y=55,w=200,h=190,max=Math.max(...m.levels)+2;body+=`<path d="M${x},${y} V${y+h} H${x+w} V${y}" fill="none" stroke="#345b47"/>`;m.levels.forEach((v,i)=>{const yy=y+h-v/max*h;body+=line(x,yy,x+w,yy,'tank-water-'+i,i?'#326c97':'#617366',2)+text(325,yy+4,(i?L(['After','後']):L(['Before','前']))+' '+v+' cm','start');});body+=text(210,285,L(['Internal base','內底'])+': '+m.length+' × '+m.width+' cm');
 }else if(m.type==='travel'){
  const x=65,y=265,w=300,h=210;for(let t=0;t<=m.xmax;t++){const X=x+t/m.xmax*w;body+=line(X,y,X,y-h,'travel-grid','#d9e4de',1)+text(X,y+19,t);}for(let d=0;d<=m.ymax;d+=m.ystep){const Y=y-d/m.ymax*h;body+=line(x,Y,x+w,Y,'travel-grid','#d9e4de',1)+text(x-8,Y+4,d,'end');}body+=line(x,y,x+w,y,'travel-x')+line(x,y,x,y-h,'travel-y')+`<polyline class="travel-path" points="${m.points.map(([t,d])=>[x+t/m.xmax*w,y-d/m.ymax*h].join(',')).join(' ')}" fill="none" stroke="#326c97" stroke-width="3"/>`;m.points.forEach(([t,d])=>body+=`<circle class="travel-point" data-time="${t}" data-distance="${d}" cx="${x+t/m.xmax*w}" cy="${y-d/m.ymax*h}" r="4" fill="#20392f"/>`);body+=text(215,315,L(['Time (s)','時間（秒）']))+text(60,30,L(['Distance (m)','距離（米）']),'start');
 }else if(m.type==='boundary'){
  const t=m.shape,scale=Math.min(300/(t===2?m.length+2*m.radius:2*m.radius),190/(t===3?m.length+m.radius:2*m.radius)),r=m.radius*scale,len=m.length*scale,cx=210,cy=170;let d;
  if(t===0)d=`M${cx-r},${cy+r/2} A${r},${r} 0 0,1 ${cx+r},${cy+r/2} Z`;
  if(t===1)d=`M${cx-r/2},${cy+r/2} L${cx+r/2},${cy+r/2} A${r},${r} 0 0,0 ${cx-r/2},${cy-r/2} Z`;
  if(t===2){const x=cx-len/2,y=cy-r;d=`M${x},${y} H${x+len} A${r},${r} 0 0,1 ${x+len},${y+2*r} H${x} A${r},${r} 0 0,1 ${x},${y} Z`;}
  if(t===3){const x=cx-r,y=cy+(r-len)/2;d=`M${x},${y} A${r},${r} 0 0,1 ${x+2*r},${y} V${y+len} H${x} Z`;}
  body+=`<path class="outside-boundary" data-shape="${t}" data-scale="${scale}" d="${d}" fill="#e1efe7" stroke="#345b47" stroke-width="3"/>`;
  body+=text(210,295,'r = '+m.radius+' cm'+(t>=2?'; '+L(['straight length','直邊長'])+' = '+m.length+' cm':''));
 }else if(m.type==='sectors'){
  const n=m.parts,cx=210,cy=160,r=100;body+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#e1efe7" stroke="#345b47"/>`;for(let j=0;j<n;j++){const p=polar(cx,cy,r,j*360/n);body+=line(cx,cy,...p,'equal-sector-ray','#326c97',1);}body+=text(210,300,L([n+' equal parts; rearrange physically.',n+'等份；請實際重排。']));
 }else{
  const cx=210,cy=160,r=95;body+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#345b47"/>`;
  if(m.type==='circlearea'){const parts=m.fraction.split('/').map(Number),f=parts[0]/(parts[1]||1);if(f===1)body+=`<circle class="circle-area-shade" cx="${cx}" cy="${cy}" r="${r}" fill="#c7e0d0" stroke="#345b47"/>`;else{const p=polar(cx,cy,r,0),q=polar(cx,cy,r,360*f);body+=`<path class="circle-area-shade" data-fraction="${esc(m.fraction)}" d="M${cx},${cy} L${p} A${r},${r} 0 ${f>.5?1:0},0 ${q} Z" fill="#c7e0d0" stroke="#345b47"/>`;}body+=line(cx,cy,cx+r,cy,'radius')+text(210,300,'r = '+m.r+' cm');}
  else{if(m.given==='r')body+=line(cx,cy,cx+r,cy,'radius');else if(m.given==='d')body+=line(cx-r,cy,cx+r,cy,'diameter');body+=text(210,300,L(m.label));}
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" class="figure measure6-svg" viewBox="0 0 420 340" width="420" height="340" role="img" aria-label="${esc(desc)}"><title>${esc(desc)}</title><defs><marker id="measure6-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#a74919"/></marker></defs>${body}</svg>`;
}
