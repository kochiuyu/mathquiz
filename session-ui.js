/* A reproducible practice sequence lets a language change retain the same task. */
let practiceSeed;
function practiceRandom(){
  if(practiceSeed===undefined){const url=new URL(location.href),raw=url.searchParams.get('seed');practiceSeed=/^\d{1,10}$/.test(raw||'')?Number(raw)>>>0:crypto.getRandomValues(new Uint32Array(1))[0];window.mathQuizPracticeSeed=practiceSeed;}
  practiceSeed=(practiceSeed+0x6D2B79F5)>>>0;let n=practiceSeed;n=Math.imul(n^(n>>>15),n|1);n^=n+Math.imul(n^(n>>>7),n|61);return ((n^(n>>>14))>>>0)/4294967296;
}
