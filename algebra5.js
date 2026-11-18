// Scoped P5 algebra responses only. No eval, arbitrary identifiers or global grader changes.
function parseAlgebra5(text,variable='x'){
 if(typeof text!=='string'||text.length>80||!['x','n','k'].includes(variable))return null;
 text=text.replace(/[０-９]/g,c=>String.fromCharCode(c.charCodeAt(0)-65248)).replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/[−–]/g,'-').replace(/\s+/g,'');
 if(!text||!/^[0-9xnk+*/()\-]+$/.test(text))return null;
 const raw=text.match(/\d+|[xnk+*/()\-]/g);if(!raw||raw.join('')!==text||raw.length>31||raw.some(t=>/^\d/.test(t)&&t.length>6))return null;
 const tokens=[];for(let i=0;i<raw.length;i++){if(i&&/^\d+$/.test(raw[i-1])&&(raw[i]===variable||raw[i]==='('))tokens.push('*');tokens.push(raw[i]);}
 const gcd=(a,b)=>{a=a<0n?-a:a;while(b)[a,b]=[b,a%b];return a;},R=(n,d=1n)=>{if(!d)throw Error('zero');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];},plus=(x,y)=>R(x[0]*y[1]+y[0]*x[1],x[1]*y[1]),times=(x,y)=>R(x[0]*y[0],x[1]*y[1]),neg=x=>[-x[0],x[1]],zero=()=>R(0n),one=()=>R(1n);
 let at=0;
 const op=(x,o,y)=>{if(o==='+')return{a:plus(x.a,y.a),b:plus(x.b,y.b)};if(o==='-')return{a:plus(x.a,neg(y.a)),b:plus(x.b,neg(y.b))};if(o==='*'){if(x.a[0]&&y.a[0])throw Error('nonlinear');return{a:plus(times(x.a,y.b),times(y.a,x.b)),b:times(x.b,y.b)};}if(y.a[0]||!y.b[0])throw Error('variable/zero divisor');const inv=R(y.b[1],y.b[0]);return{a:times(x.a,inv),b:times(x.b,inv)};};
 function primary(depth){if(depth>3)throw Error('depth');const t=tokens[at++];if(t==='+'||t==='-'){const v=primary(depth+1);return t==='-'?{a:neg(v.a),b:neg(v.b)}:v;}if(t==='('){const v=sum(depth+1);if(tokens[at++]!==')')throw Error('close');return v;}if(t===variable)return{a:one(),b:zero()};if(/^\d+$/.test(t||''))return{a:zero(),b:R(BigInt(t))};throw Error('operand');}
 function product(depth){let v=primary(depth);while(['*','/'].includes(tokens[at])){const o=tokens[at++];v=op(v,o,primary(depth));}return v;}
 function sum(depth){let v=product(depth);while(['+','-'].includes(tokens[at])){const o=tokens[at++];v=op(v,o,product(depth));}return v;}
 try{const v=sum(0);if(at!==tokens.length)return null;return v;}catch{return null;}
}
function scoreAlgebra5(value,spec){
 const same=(a,b)=>!!a&&!!b&&a.a[0]*b.a[1]===b.a[0]*a.a[1]&&a.b[0]*b.b[1]===b.b[0]*a.b[1];
 if(!spec||!['expression','equation'].includes(spec.mode))return false;
 if(spec.mode==='expression')return !String(value).includes('=')&&same(parseAlgebra5(value,spec.variable),parseAlgebra5(spec.expected,spec.variable));
 if(typeof value!=='string'||value.length>80)return false;const parts=value.split('='),wanted=spec.expected.split('=');if(parts.length!==2||wanted.length!==2)return false;
 const v=parts.map(x=>parseAlgebra5(x,spec.variable)),w=wanted.map(x=>parseAlgebra5(x,spec.variable));
 // Context construction requires the stated relation on each side, not merely its solved value.
 return same(v[0],w[0])&&same(v[1],w[1])||same(v[0],w[1])&&same(v[1],w[0]);
}
