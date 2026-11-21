((root)=>{'use strict';
function render(v,lang='en'){
 const T=(a,b)=>lang==='zh'?b:a,E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),price=c=>'$'+Math.floor(c/100)+'.'+String(c%100).padStart(2,'0');
 const token=([kind,c])=>`<span class="money-token ${kind}" data-money-kind="${kind}" data-cents="${c}"><small>${T(kind==='note'?'Note':'Coin',kind==='note'?'紙幣':'硬幣')}</small><b>${c<100?c+' '+T('cents','分'):'$'+c/100}</b></span>`;
 const tray=ps=>`<div class="money-tokens">${ps.map(token).join('')}</div>`;
 const modelNote=`<p class="learn-note">${T('Labelled value tokens, not pictures of real notes or coins. Observe real examples with an adult.','註明面值的模型卡，不是真紙幣或硬幣圖片，請與成人觀察真實例子。')}</p>`;
 const priceTag=(c,item)=>`<div class="money-price"><span>${E(item[lang==='zh'?1:0])}</span><strong>${price(c)}</strong><small>${T('Hong Kong dollars','港元')}</small></div>`;
 if(v.kind==='moneyobserve')return `<aside class="money-observe"><h3>${T('Look at official note examples','觀察官方紙幣例子')}</h3><p><a href="https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/">${T('HKMA: notes in circulation and different designs','金管局：流通紙幣及不同設計')}</a></p><p>${T('With an adult, inspect each denomination and same-value examples from different issuers. Record real handling and image viewing separately; missing examples remain unobserved.','與成人觀察各種面值，以及不同發行機構的同面值例子，分別記錄實物操作或看圖，欠缺例子仍屬未觀察。')}</p></aside>`;
 if(v.kind==='moneyprice')return `<figure class="money-model">${priceTag(v.cents,v.item)}</figure>`;
 if(v.kind==='moneytray')return `<figure class="money-model"><figcaption>${T(v.catalogue?'Everyday note values — a catalogue, not a total to count':'Point to each token once',v.catalogue?'日常紙幣面值目錄：不是要點算的總額':'每張模型卡只點一次')}</figcaption>${tray(v.pieces)}${modelNote}</figure>`;
 if(v.kind==='moneyexchange')return `<figure class="money-model money-exchange"><figcaption>${T('Only these note values in this exchange:','本次兌換只用以下紙幣面值：')} ${v.group===1?'$10 · $20 · $50 · $100':'$100 · $500 · $1000'}</figcaption><section><h4>${T('Giving tray','付出盤')}</h4>${tray(v.give.map(n=>['note',n*100]))}</section><section><h4>${T('Receiving tray — same total value','接收盤：總值相同')}</h4>${tray(v.fixed.map(n=>['note',n*100]))}${v.unit?`<p class="money-gap">? × ${T('$'+v.unit+' note(s)','$'+v.unit+'紙幣')}</p>`:''}</section>${modelNote}</figure>`;
 if(v.kind==='moneyexact')return `<figure class="money-model">${priceTag(v.cents,v.item)}<div class="money-trays">${v.trays.map((ps,i)=>`<section><h4>${T('Tray','盤')} ${i+1}</h4>${tray(ps)}</section>`).join('')}</div>${modelNote}</figure>`;
 return '';
}
root.MathQuizP2MoneyVisuals={render};if(typeof module!=='undefined')module.exports=root.MathQuizP2MoneyVisuals;
})(typeof window!=='undefined'?window:globalThis);
