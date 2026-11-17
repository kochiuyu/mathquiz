// Version 2 links retain their original numeric marking. Version 3 P1 links
// require a whole-number numeral; other grades keep the version 2 rule.
function numericAnswer(value,expected,wholeNumberOnly=false) {
  const text=String(value).normalize("NFKC").trim();
  if(wholeNumberOnly) return /^\d+$/.test(text) && Number(text)===expected;
  const parts=text.split("/");
  if(parts.length>2 || parts.some(p=>!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(p.trim()))) return false;
  return Number(parts[0])/(parts.length===2?Number(parts[1]):1)===expected;
}
function threeDigitAnswer(value,expected){
  const numeral=String(value).normalize("NFKC").trim();
  return /^[1-9][0-9]{2}$/.test(numeral) && Number(numeral)===expected;
}
function pictogramAnswer(value,expected){
  const numeral=String(value).normalize("NFKC").trim();
  return /^(?:0|[1-9][0-9]*)$/.test(numeral) && Number(numeral)===expected;
}
function equalGroupsAnswer(values,groups){
  if(values.length!==3)return false;
  const digits=values.map(v=>String(v).normalize("NFKC").trim());
  if(!digits.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)))return false;
  const [first,second,total]=digits.map(Number);
  return total===groups.total && ((first===groups.boxes && second===groups.each) || (first===groups.each && second===groups.boxes));
}
function equalSharingAnswer(values,sharing){
  if(values.length!==2)return false;
  const digits=values.map(v=>String(v).normalize("NFKC").trim());
  if(!digits.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)))return false;
  return Number(digits[0])===sharing.each && Number(digits[1])===sharing.left;
}
function fractionBarAnswer(values,fraction){
  if(values.length!==2)return false;
  const digits=values.map(v=>String(v).normalize("NFKC").trim());
  if(!digits.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)))return false;
  return Number(digits[0])===fraction.shaded && Number(digits[1])===fraction.parts;
}
function measuringCupAnswer(value,expected){
  const numeral=String(value).normalize("NFKC").trim();
  return /^(?:0|[1-9][0-9]*)$/.test(numeral) && Number(numeral)===expected;
}
function fractionAdditionAnswer(values,fraction){
  if(values.length!==2)return false;
  const digits=values.map(v=>String(v).normalize("NFKC").trim());
  if(!digits.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)))return false;
  return Number(digits[0])===fraction.n && Number(digits[1])===fraction.den;
}
function simpleEquationAnswer(value,expected){
  const numeral=String(value).normalize("NFKC").trim();
  return /^(?:0|[1-9][0-9]*)$/.test(numeral) && Number(numeral)===expected;
}
function purchaseEquationAnswer(value,story){
  const written=String(value).normalize("NFKC").replace(/\s/g,"").replace(/[−–]/g,"-").toLowerCase();
  const canonical=`x${story.subtract?"-":"+"}${story.b}=${story.c}`;
  const reversed=`${story.c}=x${story.subtract?"-":"+"}${story.b}`;
  if(story.subtract)return written===canonical || written===reversed;
  const swapped=`${story.b}+x=${story.c}`;
  return written===canonical || written===reversed || written===swapped || written===`${story.c}=${story.b}+x`;
}
function measureAnswer(value,expected){
  const numeral=String(value).normalize("NFKC").trim();
  return /^(?:0|[1-9][0-9]*)$/.test(numeral) && Number(numeral)===expected;
}

// Isolated 4N6 response contract. Earlier marking functions above remain unchanged.
function parseFraction4N6(value){
  if(typeof value!=='string'||value.length>80)return null;
  const text=value.normalize('NFKC').trim();if(!text||text.length>80)return null;
  const digits='[0-9]{1,12}';let m;
  if((m=text.match(new RegExp('^('+digits+')$')))){const n=BigInt(m[1]);return {n,d:1n,form:'whole',whole:n,partN:0n,partD:1n};}
  if((m=text.match(new RegExp('^('+digits+')\\s*\\/\\s*('+digits+')$')))){const n=BigInt(m[1]),d=BigInt(m[2]);return d>0n?{n,d,form:'fraction',whole:0n,partN:n,partD:d}:null;}
  if((m=text.match(new RegExp('^('+digits+')\\s+('+digits+')\\s*\\/\\s*('+digits+')$')))){const w=BigInt(m[1]),n=BigInt(m[2]),d=BigInt(m[3]);return w>=1n&&n>0n&&n<d?{n:w*d+n,d,form:'mixed',whole:w,partN:n,partD:d}:null;}
  return null;
}
function scoreFraction4N6(value,spec){
  const invalid={correct:false,reason:'invalid'},p=parseFraction4N6(value);if(!p||!spec)return invalid;
  const integer=v=>{if(typeof v==='number'&&!Number.isSafeInteger(v))return null;const s=String(v);return /^[0-9]{1,12}$/.test(s)?BigInt(s):null;};
  const n=integer(spec.n),d=integer(spec.d),mode=spec.mode||'general';
  if(n===null||d===null||d===0n||!['general','mixed','improper','whole','denominator'].includes(mode))return invalid;
  const required=mode==='denominator'?integer(spec.denominator):null;if(mode==='denominator'&&(required===null||required===0n))return invalid;
  if(p.n*d!==n*p.d)return {correct:false,reason:'wrong'};
  if((mode==='mixed'&&p.form!=='mixed'&&!(n%d===0n&&p.form==='whole'))||(mode==='whole'&&p.form!=='whole')||(mode==='improper'&&(p.form!=='fraction'||p.n<p.d))||(mode==='denominator'&&(p.form!=='fraction'||p.d!==required)))return {correct:false,reason:'form'};
  const lowest=spec.lowest===true||(mode==='general'&&spec.lowest!==false);
  let a=p.form==='mixed'?p.partN:p.n,b=p.d;while(b){const next=a%b;a=b;b=next;}
  if(lowest&&a!==1n)return {correct:false,reason:'equivalent-unreduced'};
  return {correct:true,reason:'correct'};
}
