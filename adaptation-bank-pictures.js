/* Original figures. Text alternatives describe supplied information, not hidden answers. */
((root)=>{
'use strict';root.MathQuizBankPictures=(q,zh,view)=>{
const t=(a,b)=>zh?b:a,L=a=>Array.isArray(a)?a[zh?1:0]:a,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),v=q.visual;
const text=(x,y,s)=>`<text x="${x}" y="${y}" font-size="15" text-anchor="middle" fill="#234b43">${esc(s)}</text>`,rect=(x,y,w,h,color='#d8e9d0')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}" stroke="#345f4c"/>`;
const svg=(body,w,h,title)=>`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title>${body}</svg>`;
const table=(heads,rows)=>'<table class="reason-table"><thead><tr>'+heads.map(h=>'<th scope="col">'+esc(L(h))+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((x,i)=>(i?'<td>':'<th scope="row">')+esc(L(x))+(i?'</td>':'</th>')).join('')+'</tr>').join('')+'</tbody></table>';
if(v.kind==='table')return table(L(v.headers),v.rows);
if(v.kind==='grid')return svg(v.rows.flatMap((row,j)=>row.map((n,k)=>rect(65+k*60,5+j*50,60,50)+text(95+k*60,36+j*50,n))).join(''),320,165,t('Rows: ','各行：')+v.rows.map(r=>r.join(', ')).join('; '));
if(v.kind==='pictogramBank'){
 if(q.level==='normal')return table([t('Category','類別'),t('Your tally','你的點算')],v.names.map(n=>[n,'?']));
 let out='';v.counts.forEach((n,j)=>{out+=text(40,30+j*40,L(v.names[j]));for(let k=0;k<n;k++)out+=rect(90+k*29,12+j*40,18,18,['#efdab4','#eacbc2','#c5dce6'][j]);});
 return '<p>'+t(q.level==='difficult'?'Proposed chart · one symbol = one item':'One symbol = one item',q.level==='difficult'?'建議圖 · 每圖形一件':'每圖形一件')+'</p>'+svg(out,320,130,t('Category counts: ','各類數目：')+v.counts.join(', '));
}
if(v.kind==='rectBank'){
 const scale=110/Math.max(v.w,v.h,v.nw,v.nh),y=35;
 return svg(rect(20,y,v.w*scale,v.h*scale)+rect(20,y,v.w*scale/2,v.h*scale,'#a9cc97')+rect(185,y,v.nw*scale,v.nh*scale)+rect(185,y,v.nw*scale/2,v.nh*scale,'#a9cc97')+text(75,20,`${v.w} × ${v.h} cm`)+text(240,20,`${v.nw} × ${v.nh} cm`)+text(75,175,t('Before','原圖'))+text(240,175,t('After','新圖')),330,190,t('Two rectangles drawn at the same scale, joins shown.','兩個長方形按同一比例繪畫，線表示接縫。'));
}
if(v.kind==='gapBank'){
 const w=300/v.n;return svg(rect(10,5,300,18,'#efdab4')+Array.from({length:v.n},(_,i)=>rect(10+i*w,42,w,44,i<v.gaps?'#fff':'#a9cc97')+text(10+(i+.5)*w,70,i<v.gaps?'?':'▣')).join(''),320,100,t(`${v.n} equal spaces; ${v.gaps} gaps indicated by question marks.`,`${v.n}個等長位置，${v.gaps}個空位用問號表示。`));
}
if(v.kind==='partBank')return svg(rect(20,12,280,42)+text(160,39,v.end)+rect(20,68,175,42,'#fff')+rect(195,68,105,42)+text(107,95,v.start)+text(247,95,v.add),320,125,t('Part–whole schematic, not to scale. Whole: ','部分整體示意，非按比例。整體：')+v.end+t('; parts: ','；部分：')+v.start+', '+v.add);
if(v.kind==='budgetBank'){
 const heads=[t('Category','類別'),t('Amount ($)','金額（元）')];if(v.angles)heads.push(t('Proposed angle','建議角度'));
 let out=table(heads,v.amounts.map((n,j)=>[L(v.labels)[j],n.toFixed(2),...(v.angles?[v.angles[j]+'°']:[])]));
 if(view==='key'){
 let a=-Math.PI/2,b='';q.meta.angles.forEach((deg,i)=>{const z=a+deg*Math.PI/180,x1=160+65*Math.cos(a),y1=78+65*Math.sin(a),x2=160+65*Math.cos(z),y2=78+65*Math.sin(z);b+=`<path d="M160 78L${x1} ${y1}A65 65 0 ${deg>180?1:0} 1 ${x2} ${y2}Z" fill="${['#bfdab3','#f1d8a1','#b9dce5'][i]}" stroke="#345f4c"/>`+text(160+43*Math.cos((a+z)/2),83+43*Math.sin((a+z)/2),deg+'°');a=z;});out+='<p>'+t('Corrected chart','正確圖')+'</p>'+svg(b,320,155,t('Correct angles: ','正確角度：')+q.meta.angles.join(', '));
 }return out;
}return '';
};})(typeof window!=='undefined'?window:globalThis);
