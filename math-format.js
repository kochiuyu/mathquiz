/* Display only. Inputs, original prompts, answer parsers and bank data are untouched. */
window.MathQuizNotation = (() => {
 const fractionPattern=/(?<![\p{L}\d/])(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)(?![\d/])/gu;
 function parts(text){const out=[];let from=0;for(const m of String(text).matchAll(fractionPattern)){if(Number(m[2])===0)continue;out.push(String(text).slice(from,m.index),{numerator:m[1],denominator:m[2]});from=m.index+m[0].length;}out.push(String(text).slice(from));return out;}
 function decorate(scope=document){
  const zh=document.documentElement.lang.startsWith('zh');
  scope.querySelectorAll('fieldset>p:first-of-type,.prompt,.key-explanation,.smart-method,.feedback,.sample-question p,.task p,[data-model],.builder-question p').forEach(p=>{
   if(p.closest('svg,math,.question-reference'))return;
   const walk=document.createTreeWalker(p,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('input,select,textarea,svg,math,.math-fraction,script,style')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
   for(const n of nodes){const value=n.nodeValue.replace(/(?<=[\d)x])\*(?=[\d(x])/g,' × ');const runs=parts(value);if(runs.length===1){if(value!==n.nodeValue)n.nodeValue=value;continue;}const frag=document.createDocumentFragment();for(const r of runs){if(typeof r==='string'){frag.append(document.createTextNode(r));continue;}const s=document.createElement('span');s.className='math-fraction';s.setAttribute('role','math');s.setAttribute('aria-label',zh?r.denominator+'分之'+r.numerator:r.numerator+' over '+r.denominator);const top=document.createElement('span'),slash=document.createElement('span'),bottom=document.createElement('span');top.className='math-numerator';bottom.className='math-denominator';slash.className='math-slash';top.textContent=r.numerator;slash.textContent='/';bottom.textContent=r.denominator;for(const e of [top,slash,bottom])e.setAttribute('aria-hidden','true');s.append(top,slash,bottom);frag.append(s);}n.replaceWith(frag);}
  });
 }
 return {parts,decorate};
})();
