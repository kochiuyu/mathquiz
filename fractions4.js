// New 4N6 geometry and feedback only; no legacy figure renderer is changed.
function fractionUnitsSvg4(f,zh=false){
  if(!f||!Number.isSafeInteger(f.n)||!Number.isSafeInteger(f.d)||f.n<0||f.d<1||f.d>100)return '';
  const wholes=Math.max(1,Math.ceil(f.n/f.d));if(wholes>12)return '';
  const width=360,left=30,barWidth=300,rowHeight=50,height=wholes*rowHeight+40;
  const description=zh?`${wholes}條等大的整體長條，每條分成${f.d}等份；共有${f.n}小份塗色。`:`${wholes} equal-size whole bars, each divided into ${f.d} equal parts; ${f.n} parts shaded in all.`;
  let body='';for(let w=0;w<wholes;w++){const y=25+w*rowHeight;body+=`<g class="fraction-whole" data-whole="${w}" data-denominator="${f.d}">`;
    for(let part=0;part<f.d;part++){const shaded=w*f.d+part<f.n;body+=`<rect class="fraction-part${shaded?' shaded':''}" data-part="${part}" x="${(left+part*barWidth/f.d).toFixed(6)}" y="${y}" width="${(barWidth/f.d).toFixed(6)}" height="30" fill="${shaded?'#436e59':'#ffffff'}" stroke="#20392f" stroke-width="1"/>`;}
    body+=`<rect class="fraction-whole-outline" x="${left}" y="${y}" width="${barWidth}" height="30" fill="none" stroke="#20392f" stroke-width="2"/></g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" class="figure fraction-units4" viewBox="0 0 ${width} ${height}" role="img" aria-label="${description}"><text x="30" y="16" font-size="12">${zh?'每條完整長條表示1':'Each full bar represents 1'}</text>${body}</svg>`;
}
function fractionFeedback4N6(reason,zh=false){
  const messages={
    'equivalent-unreduced':['The value is equivalent, but the fraction must be in lowest terms.','數值相等，但分數須約至最簡。'],
    form:['The value is equivalent. Use the requested form or denominator.','數值相等，請用題目指定的形式或分母。'],
    wrong:['Check the whole-number part, numerator and denominator.','請檢查整數部分、分子和分母。'],
    invalid:['Use digits for a whole number, n/d, or w n/d. Do not use decimals, negative numbers or calculations.','用數字輸入整數、n/d或w n/d。不可輸入小數、負數或計算式。']
  };return (messages[reason]||['',''])[zh?1:0];
}
