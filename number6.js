/* Scoped P6 scalar responses. Exact BigInt rational arithmetic; no legacy grader changes. */
function parseNumber6(value,mode='decimal'){
 if(typeof value!=='string'||value.length>80||!['decimal','fraction','integer'].includes(mode))return null;
 const s=value.normalize('NFKC').trim(),gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a;};let n,d=1n;
 if(mode==='fraction'){
  const m=s.match(/^(?:(\d{1,9})\s+)?(\d{1,9})\s*\/\s*(\d{1,9})$/);
  if(m){const whole=BigInt(m[1]||0),num=BigInt(m[2]),den=BigInt(m[3]);if(!den||gcd(num,den)!==1n||(m[1]&&num>=den))return null;n=whole*den+num;d=den;}
  else if(/^\d{1,9}$/.test(s))n=BigInt(s);else return null;
 }else{
  if(!new RegExp(mode==='integer'?'^\\d{1,9}$':'^\\d{1,9}(?:\\.\\d{1,9})?$').test(s))return null;
  const parts=s.split('.');d=10n**BigInt((parts[1]||'').length);n=BigInt(parts.join(''));
 }
 const g=gcd(n,d);return[n/g,d/g];
}
function scoreNumber6(value,spec){
 const v=spec&&parseNumber6(value,spec.mode),m=spec&&String(spec.expected).match(/^(\d{1,18})\/(\d{1,18})$/);
 if(!v||!m||BigInt(m[2])===0n)return{correct:false,valid:false};
 return{correct:v[0]*BigInt(m[2])===BigInt(m[1])*v[1],valid:true};
}
