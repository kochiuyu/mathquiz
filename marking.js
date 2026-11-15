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
function equalGroupsAnswer(values,groups){
  if(values.length!==3)return false;
  const digits=values.map(v=>String(v).normalize("NFKC").trim());
  if(!digits.every(v=>/^(?:0|[1-9][0-9]*)$/.test(v)))return false;
  const [first,second,total]=digits.map(Number);
  return total===groups.total && ((first===groups.boxes && second===groups.each) || (first===groups.each && second===groups.boxes));
}
