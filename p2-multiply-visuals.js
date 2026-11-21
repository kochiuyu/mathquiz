((root)=>{'use strict';const E=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(v,lang='en'){const T=(a,b)=>lang==='zh'?b:a;
 if(v.kind==='multgroups')return `<div class="p2-mult-groups" role="img" aria-label="${E(T('Trays contain, in order: '+v.counts.join(', ')+' counters.','各盤依次有'+v.counts.join('、')+'個圓片。'))}">${v.counts.map((n,i)=>`<figure class="p2-mult-tray" aria-hidden="true"><div class="p2-mult-dots">${Array.from({length:n},(_,j)=>`<i data-counter="${i}-${j}"></i>`).join('')}</div><figcaption>${T('Tray','盤')} ${i+1}</figcaption></figure>`).join('')}</div>`;
 if(v.kind!=='multarray')return '';
 const rows=v.turned?v.cols:v.rows,cols=v.turned?v.rows:v.cols,w=48+24*(cols-1),h=48+24*(rows-1);let dots='';
 for(let r=0;r<v.rows;r++)for(let c=0;c<v.cols;c++){const rr=v.turned?c:r,cc=v.turned?v.rows-1-r:c;dots+=`<circle data-counter="${r}-${c}" cx="${24+24*cc}" cy="${24+24*rr}" r="7" fill="#33745c" ${r===0&&c===0?'stroke="#162f25" stroke-width="4"':''}/>`;}
 return `<figure class="p2-mult-array" data-mult-array="${E(JSON.stringify(v))}"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${E(T(`${rows} rows with ${cols} counters in each row. One counter has a dark ring so you can track it.`,`${rows}行，每行${cols}個圓片。一個圓片有深色圈，可追蹤它的位置。`))}" xmlns="http://www.w3.org/2000/svg">${dots}</svg><figcaption>${T(`${rows} rows · ${cols} in each row`,`${rows}行 · 每行${cols}個`)}</figcaption><button type="button" data-turn-array>${T('Turn array','轉動排列')}</button><p class="p2-array-status" role="status">${T('Follow the ringed counter as the whole array turns.','轉動整個排列時，追蹤有深色圈的圓片。')}</p></figure>`;
}
root.MathQuizP2MultiplyVisuals={render};if(typeof module!=='undefined')module.exports=root.MathQuizP2MultiplyVisuals;
})(typeof window!=='undefined'?window:globalThis);
