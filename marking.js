// Version 2 links retain their original numeric marking. Version 3 P1 links
// require a whole-number numeral; other grades keep the version 2 rule.
function numericAnswer(value,expected,wholeNumberOnly=false) {
  const text=String(value).normalize("NFKC").trim();
  if(wholeNumberOnly) return /^\d+$/.test(text) && Number(text)===expected;
  const parts=text.split("/");
  if(parts.length>2 || parts.some(p=>!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(p.trim()))) return false;
  return Number(parts[0])/(parts.length===2?Number(parts[1]):1)===expected;
}
