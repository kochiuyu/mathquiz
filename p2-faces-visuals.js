/* Right solids, with selected bases marked; projection is not a net. */
((root)=>{'use strict';
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ring=(n,cx,cy,rx,ry,angle=-Math.PI/6)=>Array.from({length:n},(_,i)=>{const a=angle+i*2*Math.PI/n;return [cx+rx*Math.cos(a),cy+ry*Math.sin(a)];});
function render(v,lang='en'){
 const T=(a,b)=>lang==='zh'?b:a;if(v.kind==='solidset')return '<div class="p2-solid-set">'+v.items.map(x=>render(x,lang)).join('')+'</div>';
 if(v.kind!=='solidfaces')return '';
 const n=v.n||4,f=v.family,turn=v.turn||0,outline=v.outline&&['prism','pyramid'].includes(f),rot=([x,y])=>{const a=turn*Math.PI/180;return [110+(x-110)*Math.cos(a)-(y-120)*Math.sin(a),120+(x-110)*Math.sin(a)+(y-120)*Math.cos(a)];},pts=a=>a.map(rot).map(p=>p.map(x=>x.toFixed(2)).join(',')).join(' '),poly=(a,fill,cls='')=>`<polygon class="${cls}" points="${pts(a)}" fill="${fill}" stroke="#264457" stroke-width="2"/>`,line=(a,b,dash=false)=>{const x=rot(a),y=rot(b);return `<path d="M${x} L${y}" fill="none" stroke="#264457" stroke-width="2" ${dash?'stroke-dasharray="5 4"':''}/>`;},label=(p,t)=>{const a=rot(p);return `<text x="${a[0]}" y="${a[1]}" text-anchor="middle" dominant-baseline="middle" fill="#152d3c" stroke="white" stroke-width="4" paint-order="stroke" font-size="18" font-weight="700">${t}</text>`;};
 let art='',description='';const family=T(f,{prism:'柱體',pyramid:'錐體',cylinder:'圓柱體',cone:'圓錐體',sphere:'球體'}[f]);
 if(f==='prism'||f==='pyramid'){
  const bottom=ring(n,110,165,62,26),top=ring(n,110,75,62,26),apex=[110,43];
  // Dashed rear geometry is drawn first, behind opaque visible faces.
  art+=`<polygon points="${pts(bottom)}" fill="none" stroke="#264457" stroke-width="2" stroke-dasharray="5 4"/>`;
  for(let i=0;i<n;i++)if(bottom[i][1]<165)art+=line(f==='prism'?top[i]:apex,bottom[i],true);
  for(let i=0;i<n;i++){const j=(i+1)%n,front=(bottom[i][1]+bottom[j][1])/2>=165;
   if(front)art+=poly(f==='prism'?[top[i],top[j],bottom[j],bottom[i]]:[apex,bottom[i],bottom[j]],i%2?'#f7dfb3':'#c9e2ee','p2-lateral');
  }
  if(f==='prism'){art+=poly(top,'#b9dfc5','p2-base');art+=label([110,75],'B')+label([110,182],'B′');}
  else{art+=line([110,191],[110,174]);art+=label([110,205],'B');}
  const frontIndex=bottom.map((p,i)=>p[1]+bottom[(i+1)%n][1]).reduce((best,y,i,a)=>y>a[best]?i:best,0),i=frontIndex,j=(i+1)%n;
  const lateral=f==='prism'?[(top[i][0]+top[j][0])/2,(top[i][1]+top[j][1])/2+49]:[(apex[0]+bottom[i][0]+bottom[j][0])/3,(apex[1]+bottom[i][1]+bottom[j][1])/3];art+=label(lateral,'L');
  description=T(`${family}, shown in a turned view. The marked ${f==='prism'?'matching bases B and B′ have':'base B has'} ${n} sides. L marks one ${f==='prism'?'quadrilateral':'triangular'} lateral face.`,`${family}的圖畫已轉向。標示的${f==='prism'?'一對相同的底B和B′各':'底B'}有${n}條邊。L標示一個${f==='prism'?'四邊形':'三角形'}側面。`);
  if(outline){const p=ring(n,310,112,54,54,(-90+turn)*Math.PI/180);art+=`<polygon data-base-sides="${n}" points="${p.map(x=>x.map(k=>k.toFixed(2)).join(',')).join(' ')}" fill="#eaf4ed" stroke="#264457" stroke-width="3"/><text x="310" y="200" text-anchor="middle" font-size="15">${T('Trace of B','B的描圖')}</text>`;}
 }else{
  let body='';if(f==='cylinder')body='<path d="M55 75 L55 165 A55 23 0 0 0 165 165 L165 75" fill="#c9e2ee" stroke="#264457" stroke-width="2"/><ellipse cx="110" cy="75" rx="55" ry="23" fill="#b9dfc5" stroke="#264457" stroke-width="2"/><path d="M55 165 A55 23 0 0 1 165 165" stroke="#264457" stroke-dasharray="5 4" fill="none"/>';
  if(f==='cone')body='<path d="M110 48 L55 165 A55 23 0 0 0 165 165 Z" fill="#c9e2ee" stroke="#264457" stroke-width="2"/><path d="M55 165 A55 23 0 0 1 165 165" stroke="#264457" stroke-dasharray="5 4" fill="none"/>';
  if(f==='sphere')body='<circle cx="110" cy="120" r="65" fill="#d7eaf4" stroke="#264457" stroke-width="2"/><path d="M78 84 Q53 120 78 156" stroke="#8bb3c8" stroke-width="5" fill="none"/>';
  art+=`<g transform="rotate(${turn} 110 120)">${body}</g>`;
  if(f==='cylinder')art+=label([110,75],'B')+label([110,193],'B′')+line([110,186],[110,174]);
  if(f==='cone')art+=label([110,200],'B')+line([110,190],[110,172]);
  art+=label([110,128],'C');
  description=T(`${family}. ${f==='cylinder'?'B and B′ mark two circular flat bases; C marks the curved surface.':f==='cone'?'B marks the circular flat base; C marks the curved surface.':'C marks the curved surface; there is no flat base.'}`,`${family}。${f==='cylinder'?'B和B′標示兩個圓形的平底，C標示曲面。':f==='cone'?'B標示圓形的平底，C標示曲面。':'C標示曲面，沒有平的底。'}`);
 }
 const caption=T('B: selected base · L: lateral face · C: curved surface. Dashed lines show hidden parts.','B：指定的底 · L：側面 · C：曲面。虛線表示被遮擋的部分。');
 return `<figure class="p2-solid-figure" data-solid-model="${esc(JSON.stringify(v))}"><svg role="img" aria-label="${esc(description)}" viewBox="0 0 ${outline?410:220} 240" xmlns="http://www.w3.org/2000/svg">${art}</svg><figcaption>${caption}${outline?' '+T('The separate trace is one face, not the whole solid.','旁邊的描圖是一個面，不是整個立體。'):''}</figcaption><button type="button" data-turn-solid>${T('Turn model','轉動模型')}</button><span class="p2-turn-status" role="status"></span></figure>`;
}
root.MathQuizP2FacesVisuals={render,ring};if(typeof module!=='undefined')module.exports=root.MathQuizP2FacesVisuals;
})(typeof window!=='undefined'?window:globalThis);
