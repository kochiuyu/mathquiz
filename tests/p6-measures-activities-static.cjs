const fs=require('fs'),path=require('path'),a=require('assert/strict');const root=path.join(__dirname,'..');let tasks=0,objectives=0;
for(const [code,slug,n,objectivesCount] of [['6M1','angle-degree',6,3],['6M2','volume-ii',6,2],['6M3','perimeter-ii',6,2],['6M4','speed',9,9],['6M5','area-iii',6,2]]){
 const html=fs.readFileSync(path.join(root,'activities/p6-'+slug+'.html'),'utf8');
 a(html.includes('data-unit="'+code+'"'));a.equal((html.match(/class="key" hidden/g)||[]).length,2);
 for(const lang of ['en','zh']){const section=html.split('<section id="'+lang+'">')[1].split('</section>')[0];a.equal((section.match(/data-task=/g)||[]).length,n);a.equal((section.match(/data-model=/g)||[]).length,n);a.equal((section.match(/data-objective=/g)||[]).length,objectivesCount);a.equal((section.match(/<div class="work" data-observation="blank"><\/div>/g)||[]).length,n+objectivesCount);for(let j=1;j<=objectivesCount;j++)a(section.includes('data-objective="'+code+'.'+j+'"'));}
 a(html.includes('aria-expanded="false"'));a(html.includes('window.print()'));a(!/\b(?:cmwith|cmfor|Lusing|mLmarked|raysBAandBCmeet)\b/.test(html));tasks+=n;objectives+=objectivesCount;
}
a.equal(tasks,33);a.equal(objectives,18);
console.log('PASS 5 bilingual practicals: 66 visible task groups, 36 objective records and 102 genuinely blank observation areas; hidden keys and print/toggle wiring. Physical/browser checks remain separate.');
