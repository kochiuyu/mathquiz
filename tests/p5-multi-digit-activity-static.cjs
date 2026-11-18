'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),a=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'activities/p5-multi-digit-numbers.html'),'utf8');
const strip=s=>s.replace(/<[^>]+>/g,'').trim();
// Independent BigInt distance oracle, not the production rounding formula.
function nearest(n,u){n=BigInt(n);u=BigInt(u);const lo=n-n%u,hi=lo+u;return String(n-lo<hi-n?lo:hi);}
a.ok(html.includes('data-unit="5N1"'));a.ok(html.includes('activity-ui.js')&&html.includes('activity-ui.css'));
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
for(const lang of ['en','zh']){
 const section=html.split('<section id="'+lang+'"')[1].split('</section>')[0],p=section.indexOf('class="key" hidden');a.ok(p>0);const pupil=section.slice(0,p),key=section.slice(p);
 a.deepEqual([...pupil.matchAll(/data-task="(\d+)"/g)].map(m=>+m[1]),[1,2,3,4,5,6]);
 a.deepEqual([...key.matchAll(/data-objective="(\d+)"/g)].map(m=>+m[1]),[1,2,3,4]);a.equal((section.match(/class="sheet"/g)||[]).length,5);
 const blanks=[...section.matchAll(/<div class="work" data-observation>([\s\S]*?)<\/div>/g)];a.equal(blanks.length,16);for(const m of blanks)a.equal(strip(m[1]),'');a.ok(!pupil.includes('data-model=')&&!pupil.includes('data-round='));
 for(const [dir,start,step] of [['forward',999998,1],['backward',10000002,-1]]){const m=key.match(new RegExp('data-sequence="'+dir+'">([^<]+)'));a.ok(m);a.deepEqual(m[1].split(',').map(Number),Array.from({length:6},(_,i)=>start+i*step));}
 const rows=[...key.matchAll(/<tr data-round="([^"]+)">([\s\S]*?)<\/tr>/g)];a.equal(rows.length,10);for(const m of rows){const [n,u,v]=m[1].split(',');a.equal(v,nearest(n,u));a.deepEqual([...m[2].matchAll(/<td>(\d+)<\/td>/g)].map(x=>x[1]),[n,u,v]);}a.deepEqual(rows.slice(0,6).map(m=>+m[1].split(',')[1]),[1000,10000,100000,1000000,10000000,100000000]);
 const models={};for(const m of key.matchAll(/<p data-model="([^"]+)" data-values="([^"]+)">([^<]+)<\/p>/g)){const values=m[2].split(',').map(BigInt);models[m[1]]=values;a.deepEqual(m[3].split(': ')[1].split(', ').map(BigInt),values);}
 a.equal(Object.keys(models).length,6);const sum=models.sample;a.equal(sum[0]+sum[1]+sum[2],sum[3]);for(const id of ['representative','lower','upper','group']){const [x,y,z]=models[id];let repeated=0n;for(let i=0n;i<x;i++)repeated+=y;a.equal(repeated,z);}const [x,y,d]=models.difference;a.equal(x-y,d);a.ok(models.lower[2]<=models.representative[2]&&models.representative[2]<=models.upper[2]);
 for(const n of ['100010001','203004050','400020006','70000300'])a.ok(key.includes(n));a.ok(section.includes('EN_KS2_e.pdf#page=30')&&section.includes('pmc2017_e.pdf#page=77'));
 a.ok(lang==='en'?pupil.includes('actual sample')&&pupil.includes('bias')&&pupil.includes('cannot be checked'):pupil.includes('實際')&&pupil.includes('偏差')&&pupil.includes('無法核實'));
}
// Explicit semantic fixtures reviewed separately from rendering. Chinese grouping uses 億/萬, English million/thousand.
a.equal(100000000+10000+1,100010001);a.equal(2*100000000+300*10000+4000+50,203004050);a.equal(4*100000000+2*10000+6,400020006);a.equal(7000*10000+300,70000300);
for(const s of ['one hundred million, ten thousand and one','two hundred and three million, four thousand and fifty','一億零一萬零一','二億零三百萬四千零五十','四億零二萬零六','七千萬零三百'])a.ok(html.includes(s));
a.ok(html.includes('k.hidden=!show')&&html.includes("p.get('key')==='1'"));
console.log('PASS 5N1 activity: bilingual six tasks, four objective records, 32 empty evidence fields, ten rounding rows per language independently checked with BigInt distances, two sequences, six exact model calculations; browser/print/classroom pending.');
