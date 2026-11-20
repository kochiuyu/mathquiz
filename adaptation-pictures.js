/* Original vector figures; text alternatives repeat the supplied information. */
((root)=>{
'use strict';
root.MathQuizExamplePictures=(q,zh,view)=>{
 const t=(a,b)=>zh?b:a,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const text=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="16" fill="#234b43">${esc(s)}</text>`;
 const rect=(x,y,w,h,fill='#e0edda')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#345f4c"/>`;
 const svg=(body,w,h,label)=>`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${body}</svg>`;
 const table=(headers,rows)=>'<table class="reason-table"><thead><tr>'+headers.map(s=>'<th scope="col">'+esc(s)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((s,i)=>(i?'<td>':'<th scope="row">')+esc(s)+(i?'</td>':'</th>')).join('')+'</tr>').join('')+'</tbody></table>';
 const circle=(x,y)=>`<circle cx="${x}" cy="${y}" r="7" fill="#9bc98c" stroke="#345f4c"/>`;
 switch(q.visual?.kind){
 case 'wallet':return svg([10,5,2,2,1].map((v,i)=>`<circle cx="${32+i*62}" cy="35" r="26" fill="#f1e3bf" stroke="#76653d"/>`+text(32+i*62,41,'$'+v)).join(''),320,74,t('Wallet: $10, $5, $2, $2, $1','銀包：10、5、2、2、1元'));
 case 'timeline':return svg('<path d="M25 65H295" stroke="#345f4c" stroke-width="3"/>'+[25,155,295].map(x=>`<path d="M${x} 57v16" stroke="#345f4c"/>`).join('')+text(35,90,'9:10')+text(155,90,'?')+text(285,90,'10:00')+text(90,40,t('25 min','25分鐘'))+text(220,40,t('Wait ?','等候？')),320,110,t('9:10 departure; travel 25 minutes; unknown arrival; workshop 10:00. Not to scale.','9時10分出發，車程25分鐘，到達時間未知，10時工作坊開始。非按比例。'));
 case 'gaps':return svg(rect(10,10,300,22,'#f1e3bf')+text(160,27,t('Strip','紙帶'))+[0,1,2,3,4].map(i=>rect(10+i*60,48,60,50,i%2?'#fff':'#9bc98c')+text(40+i*60,80,i%2?t('gap','空隙'):t('tile','方塊'))).join(''),320,112,t('Five equal spaces: tile, gap, tile, gap, tile. Strip ends align.','五個等闊位置：方塊、空隙、方塊、空隙、方塊。與紙帶兩端對齊。'));
 case 'parts':return svg(rect(20,25,280,45)+text(160,54,'11')+rect(20,80,178,45,'#fff')+rect(198,80,102,45)+text(109,109,'?')+text(249,109,'4'),320,140,t('The whole is 11; parts are unknown and 4. Schematic, not a ruler.','整體11，兩部分為未知數及4。示意圖，非尺規。'));
 case 'grid':return svg(q.visual.rows.flatMap((row,j)=>row.map((n,k)=>rect(65+k*60,5+j*50,60,50)+text(95+k*60,37+j*50,n))).join(''),320,165,t('Rows: 9,2,7; 4,6,9; 5,10,3.','各行：9、2、7；4、6、9；5、10、3。'));
 case 'calendar':{
 const heads=zh?['一','二','三','四','五','六','日']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
 return '<div class="example-calendar"><p>'+t('Fictional month · 30 days','虛構月份 · 30天')+'</p>'+table(heads,Array.from({length:5},(_,r)=>Array.from({length:7},(_,c)=>r*7+c+1<=30?r*7+c+1:'')))+'</div>';
 }
 case 'pictogram':{
 const labels=[t('Pencils','鉛筆'),t('Erasers','擦膠'),t('Rulers','間尺')],ns=[5,2,3];let out='';
 ns.forEach((n,j)=>{out+=text(43,30+j*42,labels[j]);for(let k=0;k<n;k++){const x=95+k*36,y=10+j*42;if(j===0)out+=`<path d="M${x} ${y+24}l4 -24h8l4 24Z" fill="#e9c77f" stroke="#345f4c"/>`;else out+=rect(x,y+3,24,j===1?17:10,j===1?'#efc9bb':'#c9e4ec');}});
 return '<p>'+t('Proposed chart · one symbol = one item','建議圖 · 每個圖形表示一件物品')+'</p>'+svg(out,320,136,t('Proposed chart: pencils 5, erasers 2, rulers 3. Check against the list.','建議圖：鉛筆5、擦膠2、間尺3。請用原記錄核對。'));
 }
 case 'rectangles':return svg(rect(15,40,120,80)+rect(15,40,60,80,'#b8d7a8')+text(75,25,'6 cm')+text(75,144,t('Before: height 4 cm','原圖：高4 cm'))+rect(155,40,160,60)+rect(155,40,80,60,'#b8d7a8')+text(235,25,'8 cm')+text(235,144,t('After: height 3 cm','新圖：高3 cm')),330,160,t('6 by 4 rectangle split into two 3 by 4 pieces; rotated pieces joined to make 8 by 3.','6乘4分成兩塊3乘4，轉動後拼成8乘3。'));
 case 'budget':{
 let out=table([t('Use','用途'),t('Amount ($)','金額（元）'),t('Proposed angle','建議角度')],[[t('Save','儲起'),40,'120°'],[t('Materials','材料'),50,'180°'],[t('Travel','交通'),30,'90°']]);
 if(view==='key'){
 let a=-Math.PI/2,body='';[120,150,90].forEach((deg,i)=>{const b=a+deg*Math.PI/180,x1=160+70*Math.cos(a),y1=80+70*Math.sin(a),x2=160+70*Math.cos(b),y2=80+70*Math.sin(b);body+=`<path d="M160 80L${x1} ${y1}A70 70 0 0 1 ${x2} ${y2}Z" fill="${['#bddbb0','#f1d8a1','#bfdae3'][i]}" stroke="#345f4c"/>`;body+=text(160+43*Math.cos((a+b)/2),85+43*Math.sin((a+b)/2),deg+'°');a=b;});
 out+=svg(body,320,165,t('Corrected chart: save 120 degrees, materials 150, travel 90.','正確圖：儲起120度、材料150度、交通90度。'));
 }return out;
 }
 case 'place':return svg(rect(10,28,150,95,'#fff')+rect(160,28,150,95,'#fff')+text(85,20,t('Tens','十位'))+text(235,20,t('Ones','個位'))+Array.from({length:5},(_,i)=>circle(185+i*25,65)).join(''),320,135,t('Starting position: zero counters in Tens, five in Ones.','開始：十位0粒，個位5粒。'));
 case 'pairs':{
 let out='';[7,11].forEach((n,row)=>{out+=text(35,35+row*60,String(n));for(let i=0;i<n;i++)out+=circle(70+Math.floor(i/2)*37,20+row*60+(i%2)*20);});return svg(out,320,120,t('Seven counters and eleven counters, arranged in pairs with one single in each tray.','7粒及11粒圓片各自兩粒一組，每盤有一粒落單。'));
 }
 case 'bars':return svg(text(30,43,t('Red','紅'))+rect(60,15,240,40)+text(180,42,'139')+text(30,107,t('Blue','藍'))+rect(60,80,150,40,'#c6dfe7')+text(135,107,'?')+`<path d="M210 80h90v40h-90Z" fill="none" stroke="#345f4c" stroke-dasharray="4"/>`+text(255,107,'52'),320,140,t('Red 139 equals the unknown blue amount plus 52.','紅盒139等於未知藍盒數量加52。'));
 default:return '';
 }
};
})(typeof window!=='undefined'?window:globalThis);
