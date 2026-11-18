/* Scoped P5 diagrams: all dimensions and occupied blocks are explicitly supplied. */
function measureSvg5(m,ch){
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const text=(x,y,s,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" style="font-size:12px;font-family:sans-serif;fill:#20392f">${esc(s)}</text>`;
 let body='',desc=ch?'按題目尺寸理解圖形，圖形不代表實際大小。':'Use stated dimensions; drawings are not physical-scale models.';
 if(m.mode==='polygon'){
  const pts=[...m.vertices,...(m.segments||[]).flatMap(x=>x.points),...(m.base||[])],xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),scale=Math.min(220/(maxX-minX||1),130/(maxY-minY||1)),cx=(minX+maxX)/2,cy=(minY+maxY)/2,P=p=>[170+(p[0]-cx)*scale,100-(p[1]-cy)*scale],str=p=>P(p).join(',');
  body+=`<polygon class="measure-polygon" points="${m.vertices.map(str).join(' ')}" fill="#e1efe7" stroke="#345b47" stroke-width="2"/>`;
  if(m.base){const [a,b]=m.base,A=P(a),B=P(b);body+=`<line class="measure-base" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke="#20392f" stroke-width="5"/>`;if(m.foot){const F=P(m.foot);body+=`<line x1="${A[0]}" y1="${A[1]}" x2="${F[0]}" y2="${F[1]}" stroke="#64766a" stroke-dasharray="4 3"/>`;}}
  for(const line of m.segments||[]){const A=P(line.points[0]),B=P(line.points[1]);body+=`<line class="measure-segment" data-label="${esc(line.label)}" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke="#326c97" stroke-width="2" stroke-dasharray="5 3"/>`;body+=text((A[0]+B[0])/2+10,(A[1]+B[1])/2-7,line.label);
   if(line.right&&m.base){const baseA=P(m.base[0]),baseB=P(m.base[1]),len=Math.hypot(baseB[0]-baseA[0],baseB[1]-baseA[1]),ux=(baseB[0]-baseA[0])/len,uy=(baseB[1]-baseA[1])/len,L=Math.hypot(B[0]-A[0],B[1]-A[1]),vx=(B[0]-A[0])/L,vy=(B[1]-A[1])/L;body+=`<polyline class="measure-right" points="${[A[0]+8*ux,A[1]+8*uy]} ${[A[0]+8*(ux+vx),A[1]+8*(uy+vy)]} ${[A[0]+8*vx,A[1]+8*vy]}" fill="none" stroke="#20392f"/>`;}}
  (m.labels||[]).forEach((l,i)=>body+=text(170,196+i*18,l[ch?1:0]));
 }else{
  const project=([x,y,z])=>[x-y*.55,-z-y*.4];let all=[];
  const blockVerts=b=>{const[x,y,z]=b.origin,[l,w,h]=b.size;return [[x,y,z],[x+l,y,z],[x+l,y+w,z],[x,y+w,z],[x,y,z+h],[x+l,y,z+h],[x+l,y+w,z+h],[x,y+w,z+h]];};
  const extents=blocks=>{const p=blocks.flatMap(blockVerts).map(project);return [Math.max(...p.map(v=>v[0]))-Math.min(...p.map(v=>v[0])),Math.max(...p.map(v=>v[1]))-Math.min(...p.map(v=>v[1]))]};
  const sharedScale=m.separate?Math.min(...m.blocks.flatMap(b=>{const [w,h]=extents([b]);return [132/w,125/h]})):null;
  const draw=(blocks,x0,x1,label)=>{const vv=blocks.flatMap(blockVerts).map(project),xs=vv.map(p=>p[0]),ys=vv.map(p=>p[1]),xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(...ys),ymax=Math.max(...ys),scale=sharedScale??Math.min((x1-x0-26)/(xmax-xmin),125/(ymax-ymin)),P=p=>{const[x,y]=project(p);return[(x0+x1)/2+(x-(xmin+xmax)/2)*scale,100+(y-(ymin+ymax)/2)*scale]};[...blocks].sort((a,b)=>b.origin[0]-a.origin[0]).forEach((b,j)=>{const v=blockVerts(b).map(P);for(const face of [[0,1,5,4],[0,3,7,4],[4,5,6,7]])body+=`<polygon class="measure-block-face" points="${face.map(k=>v[k].join(',')).join(' ')}" fill="${['#dbe9df','#b7d0c3','#edf5ef'][j%3]}" stroke="#345b47" stroke-width="1.5"/>`;});body+=text((x0+x1)/2,184,label);};
  if(m.separate){draw([m.blocks[0]],8,166,'A');draw([m.blocks[1]],174,332,'B');m.blocks.forEach((b,i)=>body+=text(i?253:87,207,b.size.join(' × ')));}else{draw(m.blocks,10,330,m.blocks.length>1?(ch?'接合模型':'Joined model'):(ch?'立方體':'Cube'));m.blocks.forEach((b,i)=>body+=text(170,205+i*18,`${m.blocks.length>1?'AB'[i]+': ':''}${b.size.join(' × ')} ${m.unit||''}`));}
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" class="figure measure5-svg" viewBox="0 0 340 250" width="340" height="250" role="img" aria-label="${esc(desc)}"><title>${esc(desc)}</title>${body}</svg>`;
}
