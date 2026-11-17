// Independent review: exact rational parsing, SVG geometry and legacy isolation.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),a=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const c={};vm.createContext(c);vm.runInContext(read('marking.js')+'\n'+read('fractions4.js'),c);
const score=(v,n,d,more={})=>c.scoreFraction4N6(v,{n,d,...more});
const good=['2 1/2','２　１ ／ ２','002 001/002','\t2\t1 / 2\n'];
for(const v of good)a.equal(score(v,5,2).correct,true,v);
for(const v of ['2.5','2,5','5e-1','2+1/2','2/**/1/2','<svg onload=alert(1)>','2 1/0','2 2/2','0 1/2','2 0/2','2 / 1 / 2','2 1 /','1\u200b/2','1'.repeat(100000),null,{},5])a.equal(c.parseFraction4N6(v),null,String(v).slice(0,30));
a.equal(score('2 2/4',5,2).reason,'equivalent-unreduced');a.equal(score('10/4',5,2).reason,'equivalent-unreduced');a.equal(score('2 2/4',5,2,{lowest:false}).correct,true);
a.equal(score('0/1',0,1).correct,true);a.equal(score('0/4',0,1).reason,'equivalent-unreduced');
a.equal(score('3',6,2,{mode:'mixed',lowest:true}).correct,true,'integral mixed target permits whole form');
a.equal(score('3/1',6,2,{mode:'mixed',lowest:true}).reason,'form');
a.equal(score('9/12',3,4,{mode:'denominator',denominator:12}).correct,true);a.equal(score('3/4',3,4,{mode:'denominator',denominator:12}).reason,'form');
a.equal(score('3',3,1,{mode:'whole'}).correct,true);a.equal(score('3/1',3,1,{mode:'whole'}).reason,'form');
// Adjacent large rational values that floating point cannot safely distinguish.
a.equal(score('999999999998/999999999997','999999999999','999999999998').correct,false);
const huge=c.parseFraction4N6('999999999999 999999999998/999999999999');a.equal(huge.n,999999999998999999999999n);a.equal(huge.d,999999999999n);
const attr=(s,n)=>Number(s.match(new RegExp('(?:^| )'+n+'="([^"]+)"'))[1]);let renderChecks=0;
for(let d=1;d<=100;d++)for(const n of [0,1,d-1,d,d+1,12*d]){
 const svg=c.fractionUnitsSvg4({n,d}),parts=[...svg.matchAll(/<rect class="fraction-part( shaded)?"[^>]*>/g)],rows=Math.max(1,Math.ceil(n/d));
 a.equal(parts.length,rows*d);a.equal(parts.filter(x=>x[1]).length,n);
 const outlines=[...svg.matchAll(/<rect class="fraction-whole-outline"[^>]*>/g)];a.equal(outlines.length,rows);
 const height=Number(svg.match(/viewBox="0 0 360 (\d+)"/)[1]);
 for(let r=0;r<rows;r++){
  const group=parts.slice(r*d,(r+1)*d);let end=30;
  for(const item of group){const x=attr(item[0],'x'),w=attr(item[0],'width'),y=attr(item[0],'y');a.ok(Math.abs(x-end)<0.000002,'adjacent cells');a.equal(y,25+r*50);a.ok(y+30<height);a.ok(x>=30&&x+w<=330.000002);end=x+w;}
  a.ok(Math.abs(end-330)<0.000002,'equal whole width');a.equal(attr(outlines[r][0],'width'),300);
 }
 renderChecks++;
}
for(const f of [{n:1201,d:100},{n:1,d:101},{n:0,d:0},{n:-1,d:2},{n:0.5,d:2},{n:1,d:2.5},{n:Infinity,d:2},{n:1,d:'2'}])a.equal(c.fractionUnitsSvg4(f),'');
// Previous functions are byte-for-byte unchanged, and strict legacy fraction forms remain strict.
const legacyPrefix=Buffer.from(read('marking.js'),'utf8').subarray(0,3246);a.equal(legacyPrefix.length,3246);a.equal(require('crypto').createHash('sha256').update(legacyPrefix).digest('hex'),'a2493e63ddbf494e41545641a9482c9b64671ae3958a23bdc0b84477f5aeb714');
a.equal(c.fractionBarAnswer(['2','4'],{shaded:1,parts:2}),false);a.equal(c.fractionAdditionAnswer(['2','4'],{n:1,den:2}),false);
a.equal(c.fractionBarAnswer(['1','2'],{shaded:1,parts:2}),true);a.equal(c.fractionAdditionAnswer(['1','2'],{n:1,den:2}),true);
console.log(`PASS independent 4N6 malformed/Unicode/bounded BigInt/form/legacy cases and ${renderChecks} geometry fixtures (all denominators1–100, zero/full/12whole bounds).`);
