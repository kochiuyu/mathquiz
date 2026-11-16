// Baseline from released v1 questions and every permanent generated family, including purchasestory5a.
// An intentional change to a released variant needs a new ID; do not refresh a digest
// merely to make this page green. Review the old and new mathematics first.
(async function () {
  "use strict";
  const expectedFixedV1 = "c7fb36d698138938a2eaa643d51ccc6aab3db1d3b2f90ad1fe8e4331a263e5ff";
  const expectedFamilies = [
    ["solidname1a",1,15,"6e9c97486be4f178a58d6c000e84d2015e1e61202ebb78b89e650b8b704bfff3"],
    ["coincount1a",1,12,"1ac0c2eeb70330bba087314e13b9dfe6138b28ebb2fa2d0fe330c9b25b5694c5"],
    ["priceword1a",1,12,"b987bcfc5a687ebfa13d6418e6bd2ab6999b00e7295911743f5198bffbe81652"],
    ["coinvalue1a",1,12,"200eba28ea3d5caa12ba66878397a202a23e8099c6e86b414fa2b52733d03a50"],
    ["checksub1a",1,12,"92f6d00eef3b97830a8da905f2bbc8a78476f23911e45a5ac6c42ce1dd9773cb"],
    ["add1",1,7,"a11713e8ba9b9b0435cbadc2269edd2f3adc56ef876c853426a998bf56336018"],
    ["next1",1,12,"03c40866a510fc3f2a61da716663cde4405c765d7bd079d9c2eb0c2c3aab60a0"],
    ["count20a",1,20,"4ec80ce4e7b1a331f37a371df100aa411bbd7e50280640141afcc29765086979"],
    ["parts18a",1,81,"c9599857137bda00c5d9787987b271b635cfca7838e45de16aae0b90196b2b2c"],
    ["pictureadd1",1,81,"ad278ece042dd8d895f0017c53f5aca5de739ac016e87b770cfa0f3ee212790e"],
    ["storyadd1",1,81,"45e4794db6348c1c40fd25877b8ed1123e4ac700537bf609a79e71f7c7795a60"],
    ["otherway1",1,11,"b825d8ff967dfbecef192220635f6b5487270afa9abc8e84838eed42200886e5"],
    ["per1",4,16,"d4ea48975699cce78756be1f7d8b62364d0e1c1534b3d77dae1696ffb71f4605"],
    ["permissing4a",4,12,"70c7f2615fcb37b322baa761f22d44a2fb1898aedde070f66c71a0ab3358e33e"],
    ["factor1",4,12,"9e9a57b5731a52b4fd6bc7f36acd725669d22f690b6aef6df0692a3001c84bd0"],
    ["factorpair4a",4,12,"726d6cafc427204855d74eea6884322ab2014be0f2cf890403146c049dc0c8a3"],
    ["pct1",6,15,"b44b70e6ead240f97995e1e49c3d8149b19dc16a4646c9f3488366803b068efa"],
    ["pct2",6,15,"ba21d27c40ec9c4406e8bccb7cc887ac52bab3a994080c44f3eae22168948a95"],
    ["speed6a",6,12,"f0149b13d43a56aa2f8c921187c613f709415d35c3271b7c5d04205a8299ddbb"],
    ["mean1",6,16,"b36e21806e2994332fb4ee7161529652dfbab4d61db021619d2314dba34071d5"],
    ["triangle1",1,9,"ef63e3281f937f151ad0e4bb64171801b845ceefaa574f0d397ae9a395fffe18"],
    ["compare100a",1,12,"37bb66c799d67fbf282d584065f0f6b1874958469f1a3083b1e6fb1dfa4da021"],
    ["tensones1a",1,12,"eb072f1bf72e46fc55e10c404b65983df9f920d134580b761dd910d108d86986"],
    ["countgroups1a",1,12,"0df8e478d01f1f7bdac6118d5921c2cdfb397900940e8f3d1ca3dc7dfdd1b083"],
    ["sequence100a",1,12,"eb4a51b5e065a724ded0f824b3c09fadded1e862d51e255a09093242000acb53"],
    ["oddeven100a",1,12,"1292cd98c7e299879e994f03fd6ad0767a5ed2f622efa994bff8cc1e30dbbccd"],
    ["ordernums100a",1,12,"76e527337f2a631e559a827e941ffacdb0cae50fcc577c5cb4540bfe65b891c7"],
    ["numberwords100a",1,12,"4c230e0e5865d4b01fa0ef80c5e773bb7be4dedb9c1217af430d90f5b475fefd"],
    ["estimate100a",1,12,"2a17f7f5f22982fdc00e99a06c8ba0d457f43f211debaee19538004d41321d46"],
    ["carryadd1a",1,12,"44f62bbf8b4dfad2eb03b085488282287e63946730fe1e31d33bf0138606603f"],
    ["noborrow1a",1,12,"6e7a63855fbbc79090ea685f174ceea7ef4e30d86765315cb9824c3b66198292"],
    ["threeadd1a",1,12,"c18e93923c6df5f2668e71d8d3270fabe02c169757f9f4955bc714f8334ac744"],
    ["groupadd1a",1,12,"b25457aad1fe944c5f9473a0f3625a2d84d9be5998117ec283aae507becb5512"],
    ["group10p1a",1,12,"f57f52b4f8aa03bf1487f697a2cae9ed4022f7369a743ff1d839ebb629efd00a"],
    ["columnadd1a",1,12,"f5ea5e4f1566fa0f914994aa5d59cf2e2bbd70252a7692e95d8e26d35174a0f7"],
    ["columnsub1a",1,12,"fc7bb15611db807259f94eed6a4a8e9ec8ad03ee20780577c8502cfcc7206cca"],
    ["storyadd1a",1,12,"1d8567cf174391023964f9b9bd4334329fee219a20525ba960d4f3e7124dea5a"],
    ["storysub1a",1,12,"ce3598aa5cdc9e522b7223304f2b2a2be64ae0b34abc51f3ba01e8316002dcbe"],
    ["lengthdirect1a",1,12,"97f7ba465ba22419fb66e2f10a8545ba3859e6492b85e6e307662cedbcb866c1"],
    ["distancedirect1a",1,12,"b6deb77fa3a1bc700780bd070758155b309c87df16922041f281ce6ad18a1a1e"],
    ["lengthunits1a",1,12,"cffe4025a3790ab309a99f173c15934923b35b34a96242ab18dcd5fbd9b464a4"],
    ["distanceunits1a",1,12,"ebe622214cbc013b28b30d21489a9efd6758d760207be3170312360f2f614664"],
    ["lengthcm1a",1,12,"ab0758d495e512b7e1645d5880fd36291169c7ca3edb9b0cb3e1b490f0c7aab8"],
    ["distancecm1a",1,12,"28d345a154baf868ae2ec075c0bbd6168d1e4d118b112f8674357f4c2fbc15ad"],
    ["comparelengthcm1a",1,12,"76631fb8d0f7339dbd72f0fd5c1b4a7e96977408e3fb9a6350103a684d5be806"],
    ["comparedistancecm1a",1,12,"67534cbe839653054d8dec3149cf0bb9e3a31c65eaa1ab4cd45962a0e8dc3e50"],
    ["place3a",2,12,"52863f8ed182b051c8284b003bb0214d2a32a1b8e47e1151fc08c1ae5566746b"],
    ["groups2a",2,16,"0c96f3b94c632a47e75e0850a9999a2b3071536535c3e9687a9ae8dcb60fd369"],
    ["pict2a",2,12,"73dbf17844de056af1ff924197bebb6e2b29d5af0b97aa0da8915806fd60fbbb"],
    ["share2a",2,12,"49c221cb465ec7651156d6423c5473a5f2717dcbbfe7c9dde2ad69707145f0a5"],
    ["frac3a",3,12,"b982b6c4eafc70ccdbbf03a93badc41d5c2e510d46d6ef6516093a214fba4bca"],
    ["cup3a",3,12,"5ac30486d8d127f49b72ee37ea92c57a5fe3853d623a22353f1a8eb5547a736b"],
    ["bar3a",3,12,"ef6534c060e1ace0626224c42ceee848ebfec97550d2898bd47e750aaf5e61d5"],
    ["bar4a",4,12,"7d13e98587598a68c3dbce5c8ae6c2870bd5c1da006956abf6235d2af5d7d337"],
    ["fracadd5a",5,12,"c8d89b1ea481650d2c2bb24e32cfd76f18cf403550075745adc17c430d4afef8"],
    ["equation5a",5,12,"851b768bf0b2b458fca07031b335ee2b836661f2f92ec32b7b4a2140f511340f"],
    ["purchasestory5a",5,12,"58af485106107a5dcfac149bf16dc9d05789b5042283a1ecfb163aec201518e9"],
    ["triarea5a",5,12,"1f2cd92defd0a62de0e87bf651d1839adb1e4404befa560499d95250ec32063c"],
    ["volume5a",5,12,"1e88938772a12cdd9a6055713aceb6af8352fd59d3deae4b98f2eaec10b2e050"],
    ["circle5a",5,9,"6167eb9000a7018a5cd5a3f1bed2a1ff32a0444ddc3708cfad264d061bd29e97"]
  ];
  const sharedSets = [
    {name:"P1 warm-up",grade:1,ids:["count20a-10","next1-5","pictureadd1-21"],answers:[11,9,"4 + 3 = 7"]},
    {name:"P1 exit ticket",grade:1,ids:["count20a-12","next1-10","pictureadd1-38","parts18a-58","storyadd1-70","otherway1-3"],answers:[13,14,"3 + 5 = 8",7,16,"2 + 7 = 9"]},
    {name:"Edited exit ticket",grade:1,ids:["count20a-12","next1-10","pictureadd1-38","parts18a-58","storyadd1-43","otherway1-3"],answers:[13,14,"3 + 5 = 8",7,13,"2 + 7 = 9"]},
    {name:"Older four-question example",grade:1,ids:["add1-3","add1-2","add1-5","next1-10"],answers:[8,10,10,14]},
    {name:"Legacy P6 percentage",grade:6,ids:["pct1-0","mean1-0"],answers:[10,13],codes:["6N3","6D1"]},
    {name:"Corrected P6 percentage",grade:6,ids:["pct2-0","mean1-0"],answers:[10,13],codes:["6N4","6D1"]}
  ];
  const results = document.getElementById("results");
  const summary = document.getElementById("summary");
  let passed = 0, failed = 0;

  function assert(ok, message) {
    if (!ok) throw new Error(message);
  }
  function stable(value) {
    if (Array.isArray(value)) return "["+value.map(stable).join(",")+"]";
    if (value && typeof value === "object") {
      return "{"+Object.keys(value).sort().map(key=>JSON.stringify(key)+":"+stable(value[key])).join(",")+"}";
    }
    return JSON.stringify(value);
  }
  async function digest(value) {
    const bytes = await crypto.subtle.digest("SHA-256",new TextEncoder().encode(stable(value)));
    return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,"0")).join("");
  }
  async function check(label,run) {
    const row = document.createElement("li");
    try {
      await run();
      passed++;
      row.className = "pass";
      row.textContent = "PASS · "+label;
    } catch (error) {
      failed++;
      row.className = "fail";
      row.textContent = "FAIL · "+label+" · "+error.message;
    }
    results.appendChild(row);
    summary.textContent = passed+" passed, "+failed+" failed";
  }
  function expectedQuery(set,language,view,version) {
    return "?v="+version+"&lang="+language+"&p="+set.grade+"&items="+set.ids.join(".")+(view?"&view="+view:"");
  }
  await check("Fixed v1 questions",async()=>{
    assert(await digest(quizzes)===expectedFixedV1,"published fixed questions changed");
  });
  await check("Corrected P6 fixed example",()=>{
    const corrected=fixedQuiz(6,"4");
    assert(quizzes[6][0].code==="6N3" && corrected[0].code==="6N4","old or new P6 label changed");
    assert(stable(corrected.map((q,i)=>i===0?{...q,code:"6N3"}:q))===stable(quizzes[6]),"v4 changed more than the label");
  });
  await check("Family catalogue",()=>{
    assert(families.length===expectedFamilies.length,"family count changed");
    assert(new Set(families.map(f=>f.id)).size===families.length,"duplicate family ID");
    assert(expectedFamilies.reduce((n,f)=>n+f[2],0)===944,"fixture count changed");
  });
  await check("Released bilingual and response contracts · 944 variants",()=>{
    for(const family of families){
      assert(family.label?.length===2 && family.label.every(s=>typeof s==="string" && s.trim()),"family label missing: "+family.id);
      for(let i=0;i<family.count;i++){
        const q=family.make(i),id=family.id+"-"+i,decoded=decodeItems(id,family.grade);
        assert(q.prompt?.length===2 && q.prompt.every(s=>typeof s==="string" && s.trim()),"bilingual prompt missing: "+id);
        assert(q.why?.length===2 && q.why.every(s=>typeof s==="string" && s.trim()),"bilingual worked step missing: "+id);
        assert(Array.isArray(q.answer) && q.answer.length>0 && q.answer.every(v=>typeof v==="number"?Number.isFinite(v):typeof v==="string" && v.trim()),"answer missing: "+id);
        if(q.fields)assert(q.fields.length===q.answer.length && q.fields.every(pair=>Array.isArray(pair) && pair.length===2),"field structure changed: "+id);
        if(q.choices)assert(new Set(q.choices).size===q.choices.length && q.answer.every(v=>q.choices.includes(v)),"choices or key ambiguous: "+id);
        assert(decoded.length===1 && decoded[0].id===id && decoded[0].code===family.code && stable(decoded[0].answer)===stable(q.answer),"stable link mismatch: "+id);
      }
    }
  });
  for (const [id,grade,count,hash] of expectedFamilies) {
    await check(id+" · "+count+" released variants",async()=>{
      const family = families.find(f=>f.id===id);
      assert(family && family.grade===grade && family.count===count,"family metadata changed");
      const variants = Array.from({length:count},(_,i)=>({
        id:id+"-"+i,grade:family.grade,code:family.code,question:family.make(i)
      }));
      assert(await digest(variants)===hash,"released prompt, answer, diagram or marking data changed");
    });
  }
  await check("P1 subtraction checks · inverse operation and balanced choice positions",()=>{
    const f=families.find(f=>f.id==='checksub1a'),positions=[0,0,0];
    for(let i=0;i<f.count;i++){
      const q=f.make(i),{a,b,difference}=q.subtractionCheck;
      assert(a-b===difference && a<100 && a%10>=b%10,'subtraction range or borrowing');
      assert(q.answer[0]===difference+' + '+b+' = '+a,'inverse check key');
      assert(q.choices.filter(v=>{const [x,y,z]=v.match(/\d+/g).map(Number);return x+y===z}).length===1,'ambiguous addition choices');
      positions[q.choices.indexOf(q.answer[0])]++;
    }
    assert(positions.every(n=>n===4),'choice positions not balanced');
  });
  await check("P1 money · integer-cent amounts and bilingual choices",()=>{
    for(const id of ['coinvalue1a','priceword1a','coincount1a']){
      const f=families.find(f=>f.id===id),positions=[0,0,0];
      for(let i=0;i<f.count;i++){
        const q=f.make(i),m=q.money;
        assert(m.cents>0 && m.cents<=1000 && m.cents%10===0,'money bounds');
        assert(q.choices.length===3 && new Set(q.choices).size===3,'money choices unique');
        assert(q.answer[0]===String(m.cents),'money key');
        assert(q.choices.every(k=>q.choiceLabels[k].length===2 && q.choiceLabels[k].every(v=>v && !v.includes('undefined'))),'money bilingual labels');
        if(m.coins)assert(m.coins.every(c=>[10,20,50,100,200,500,1000].includes(c)),'coin denomination');
        if(m.mode==='count')assert(m.coins.reduce((a,b)=>a+b,0)===m.cents,'counted value');
        positions[q.choices.indexOf(q.answer[0])]++;
      }
      assert(positions.every(n=>n===4),'money choice positions');
    }
  });
  await check("P1 money · bilingual pupil, key and practice routes",async()=>{
    const frames=[];
    try{
      for(const language of ['en','zh']){
        for(const id of ['coinvalue1a','priceword1a','coincount1a']){
          const q=families.find(f=>f.id===id).make(0);
          const frame=await shapeFrame('?lang='+language+'&p=1&view=practice&skill='+id);frames.push(frame);
          const d=frame.contentDocument,inputs=[...d.querySelectorAll('input[type="radio"]')];
          assert(inputs.length===3,'money practice choices');
          inputs.find(r=>r.value!==q.answer[0]).click();d.querySelector('button[type="submit"]').click();
          assert(d.getElementById('practice-feedback').textContent===q.money.hint[language==='zh'?1:0],'money targeted hint');
          inputs.find(r=>r.value===q.answer[0]).click();d.querySelector('button[type="submit"]').click();
          assert(!d.getElementById('practice-next').hidden,'money retry');
          const key=await shapeFrame('?v=3&lang='+language+'&p=1&items='+id+'-0&view=key');frames.push(key);
          assert(key.contentDocument.querySelector('fieldset').textContent.includes(q.choiceLabels[q.answer[0]][language==='zh'?1:0]),'money key exposes cents instead of spoken value');
          assert(key.contentDocument.querySelector('svg.money-coins,svg.money-price'),'money figure missing');
        }
        const activity=await shapeFrame('activities/p1-money.html?lang='+language);frames.push(activity);
        assert(!activity.contentDocument.getElementById(language).hidden,'money activity language');
      }
    }finally{frames.forEach(f=>f.remove())}
  });
  await check("P1 money and subtraction check · bilingual paper/key PDF export",async()=>{
    const frames=[];
    try{
      for(const language of ['en','zh'])for(const view of ['paper','key']){
        const frame=await shapeFrame('?v=3&lang='+language+'&p=1&items=coinvalue1a-0.priceword1a-0.coincount1a-0.checksub1a-0&view='+view);frames.push(frame);
        const d=frame.contentDocument;
        assert(d.querySelectorAll('fieldset').length===4,'mixed P1 paper needs four items');
        assert(d.querySelectorAll('svg.money-coins,svg.money-price').length===3,'money figures missing');
        const blob=await frame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
        assert(blob.size>10000 && raw.startsWith('%PDF-') && raw.includes('/ToUnicode'),'P1 PDF missing content/text layer');
        assert((raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,'P1 PDF missing page');
        assert(raw.includes('/Subtype /Image'),'P1 PDF lacks rendered page image');
      }
    }finally{frames.forEach(f=>f.remove())}
  });
  await check("P1 solids · all fifteen variants and five localized choices",()=>{
    const f=families.find(f=>f.id==='solidname1a'),positions=[0,0,0,0,0],types=new Set();
    assert(f.count===15 && f.code==='1S1','solid metadata');
    for(let i=0;i<f.count;i++){
      const q=f.make(i);types.add(q.answer[0]);
      assert(q.choices.length===5 && new Set(q.choices).size===5,'solid choices');
      assert(q.answer[0]===q.figure.solid && q.solidRecognition.solid===q.figure.solid,'solid key');
      assert(q.choices.every(k=>q.choiceLabels[k].length===2 && q.choiceLabels[k].every(Boolean)),'solid localization');
      positions[q.choices.indexOf(q.answer[0])]++;
    }
    assert(types.size===5 && positions.every(n=>n===3),'solid balance');
  });
  await check("P1 solids · bilingual pupil, builder and full five-question practice",async()=>{
    const frames=[];
    try{
      for(const language of ['en','zh']){
        const l=language==='zh'?1:0,f=families.find(f=>f.id==='solidname1a');
        const frame=await shapeFrame('?lang='+language+'&p=1&view=practice&skill=solidname1a');frames.push(frame);
        const d=frame.contentDocument;
        for(let i=0;i<5;i++){
          const q=f.make(i),inputs=[...d.querySelectorAll('input[type="radio"]')];
          assert(inputs.length===5 && d.querySelector('svg.solid-figure'),'solid practice figure/choices');
          for(const input of inputs)assert(input.parentElement.textContent.includes(q.choiceLabels[input.value][l]),'localized choice label');
          inputs.find(x=>x.value!==q.answer[0]).click();d.querySelector('button[type="submit"]').click();
          assert(d.getElementById('practice-feedback').textContent===q.solidRecognition.hint[l],'solid wrong hint');
          inputs.find(x=>x.value===q.answer[0]).click();d.querySelector('button[type="submit"]').click();
          assert(d.getElementById('practice-feedback').textContent.includes(q.why[l]),'solid worked retry');
          assert(!d.getElementById('practice-next').hidden,'solid next hidden');d.getElementById('practice-next').click();
        }
        assert(d.querySelector('h1').textContent===(l?'練習完成':'Practice complete') && d.body.textContent.includes('0 / 5'),'solid completion');
        const ids=Array.from({length:5},(_,i)=>'solidname1a-'+i).join('.');
        const pupil=await shapeFrame('?v=3&lang='+language+'&p=1&items='+ids);frames.push(pupil);
        const pd=pupil.contentDocument;assert(pd.querySelectorAll('svg.solid-figure').length===5,'pupil solid figures');
        for(let i=0;i<5;i++)pd.querySelector('input[name="q'+i+'"][value="'+f.make(i).answer[0]+'"]').checked=true;
        pd.querySelector('form').requestSubmit();assert(pd.getElementById('status').textContent.includes('5 / 5'),'solid pupil marking');
        const builder=await shapeFrame('?v=3&lang='+language+'&p=1&items=solidname1a-0&view=build');frames.push(builder);
        assert(builder.contentDocument.querySelector('select[name="solidname1a"]'),'solid builder selector');
      }
    }finally{frames.forEach(f=>f.remove())}
  });
  await check("P1 solids · bilingual paper, localized key and PDF",async()=>{
    const frames=[];
    try{
      const ids=Array.from({length:5},(_,i)=>'solidname1a-'+i).join('.'),family=families.find(f=>f.id==='solidname1a');
      for(const language of ['en','zh'])for(const view of ['paper','key']){
        const frame=await shapeFrame('?v=3&lang='+language+'&p=1&items='+ids+'&view='+view);frames.push(frame);
        const d=frame.contentDocument,fields=[...d.querySelectorAll('fieldset')];
        assert(fields.length===5 && d.querySelectorAll('svg.solid-figure').length===5,'solid print figures');
        fields.forEach((field,i)=>{
          const q=family.make(i);
          if(view==='key')assert(field.querySelector('p b').textContent===q.choiceLabels[q.answer[0]][language==='zh'?1:0],'solid localized key');
          else assert(field.querySelectorAll('.option').length===5,'solid paper choices');
        });
        const blob=await frame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
        assert(blob.size>10000 && raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && raw.includes('/Subtype /Image'),'solid PDF content/font/image');
        assert((raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,'solid PDF pages');
      }
    }finally{frames.forEach(f=>f.remove())}
  });
  await check("P6 percentage family succession",()=>{
    const legacy=families.find(f=>f.id==="pct1"),current=families.find(f=>f.id==="pct2");
    assert(legacy.retired && legacy.code==="6N3" && !current.retired && current.code==="6N4","P6 family labels changed");
    assert(families.filter(f=>f.grade===6 && !f.retired).map(f=>f.id).join(",")==="pct2,speed6a,mean1","new P6 builder selection changed");
    for(let i=0;i<15;i++)assert(stable(legacy.make(i))===stable(current.make(i)),"percentage mathematics changed at "+i);
  });
  await check("P1 triangle family · unique three-sided answer and varied orientation",()=>{
    const family=families.find(f=>f.id==="triangle1");
    assert(family && family.grade===1 && family.code==="1S2" && family.count===9,"triangle family metadata changed");
    const rotations=new Set(),positions=new Set();
    for(let i=0;i<family.count;i++){
      const q=family.make(i);
      assert(q.choices.join("")==="ABC" && q.shapes.length===3,"shape choices missing");
      const triangles=q.shapes.map((s,j)=>s.kind==="triangle"?j:-1).filter(j=>j>=0);
      assert(triangles.length===1 && q.answer.join("")===q.choices[triangles[0]],"ambiguous triangle answer at "+i);
      assert(new Set(q.shapes.map(s=>s.kind)).size===3,"shape distractors repeat at "+i);
      assert(q.prompt[0].includes("triangle") && q.prompt[1].includes("三角形") && q.why.every(x=>x.includes(q.answer[0])),"bilingual item mismatch at "+i);
      rotations.add(q.shapes[triangles[0]].rotation);positions.add(triangles[0]);
    }
    assert(rotations.size>=5 && rotations.has(0) && positions.size===3,"orientation or answer position lacks variety");
  });
  await check("P1 numbers to 100 · magnitude and boundaries",()=>{
    const family=families.find(f=>f.id==="compare100a"),pairs=new Set(),sameTens=[];
    assert(family && family.grade===1 && family.code==="1N3" && family.count===12,"comparison family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),c=q.numberComparison;
      assert(c.a>=21 && c.a<=100 && c.b>=21 && c.b<=100 && c.a!==c.b,"comparison outside 1N3 range: "+i);
      assert(q.choices.join(",")===[c.a,c.b].join(",") && q.answer[0]===String(Math.max(c.a,c.b)),"comparison answer wrong: "+i);
      assert(q.prompt.every(x=>x.includes(String(c.a)) && x.includes(String(c.b))) && q.why.every(x=>x.includes(q.answer[0])),"comparison bilingual wording mismatch: "+i);
      assert(!q.prompt.join(" ").includes(">") && !q.prompt.join(" ").includes("<"),"P2 comparison symbol introduced early");
      pairs.add(c.a+","+c.b);if(Math.floor(c.a/10)===Math.floor(c.b/10))sameTens.push(i);
    }
    assert(pairs.size===12 && sameTens.length>=3 && family.make(5).numberComparison.larger===100,"comparison boundary cases missing");
    assert(decodeItems("compare100a-0",1).length===1 && !decodeItems("compare100a-0",2).length,"comparison link or grade guard failed");
  });
  await check("P1 numbers to 100 · tens, groups and counting direction",()=>{
    const tens=families.find(f=>f.id==="tensones1a"),groups=families.find(f=>f.id==="countgroups1a"),sequences=families.find(f=>f.id==="sequence100a");
    assert(tens?.count===12 && groups?.count===12 && sequences?.count===12,"1N3 family count wrong");
    for(let i=0;i<12;i++){
      const a=tens.make(i),b=groups.make(i),c=sequences.make(i);
      assert(a.figure.kind==="tensOnes" && a.figure.tens*10+a.figure.ones===a.answer[0] && a.answer[0]>=21 && a.answer[0]<=99,"tens/ones mismatch at "+i);
      assert(b.figure.kind==="countGroups" && b.figure.size*b.figure.groups===b.answer[0] && [2,5,10].includes(b.figure.size) && b.answer[0]<100,"group count mismatch at "+i);
      assert(c.numberSequence.start+3*c.numberSequence.step===c.answer[0] && c.answer[0]>=21 && c.answer[0]<=100,"sequence mismatch at "+i);
      for(const q of [a,b,c])assert(q.numberTo100 && q.why.every(w=>w.includes(String(q.answer[0]))),"bilingual worked answer missing at "+i);
    }
    assert(tens.make(2).figure.ones===0 && tens.make(11).answer[0]===99,"tens/ones boundaries missing");
    assert(groups.make(0).figure.size===2 && groups.make(4).figure.size===5 && groups.make(8).figure.size===10,"group sizes missing");
    assert(sequences.make(3).answer[0]===100 && sequences.make(10).answer[0]===21 && sequences.make(6).numberSequence.step===-1,"sequence boundaries missing");
    for(const id of [tens.id,groups.id,sequences.id])assert(decodeItems(id+"-0",1).length===1 && !decodeItems(id+"-0",2).length,"1N3 link or grade guard failed: "+id);
    assert(pictogramAnswer("２１",21) && !pictogramAnswer("21.0",21) && !pictogramAnswer("021",21),"1N3 number response boundary wrong");
  });
  await check("P1 numbers to 100 · parity, order, words and estimation",()=>{
    const odd=families.find(f=>f.id==="oddeven100a"),order=families.find(f=>f.id==="ordernums100a"),words=families.find(f=>f.id==="numberwords100a"),estimate=families.find(f=>f.id==="estimate100a");
    assert([odd,order,words,estimate].every(f=>f?.count===12 && f.code==="1N3"),"new 1N3 metadata missing");
    for(let i=0;i<12;i++){
      const a=odd.make(i),b=order.make(i),c=words.make(i),d=estimate.make(i);
      assert(a.answer[0]===(a.oddEven100.value%2?"odd":"even") && a.choiceLabels[a.answer[0]][1],"odd/even mismatch "+i);
      assert(b.answer.join(",")===[...b.numberOrder.shown].sort((x,y)=>b.numberOrder.direction*(x-y)).join(",") && b.answer.length===3,"order mismatch "+i);
      assert(c.answer[0]===c.numberWords.value && c.prompt[0].includes(c.numberWords.en) && c.prompt[1].includes(c.numberWords.zh),"number-word mismatch "+i);
      assert(d.estimateCount.count<100 && d.answer[0]===String(Math.round(d.estimateCount.count/10)*10) && d.choices.includes(d.answer[0]),"estimate mismatch "+i);
      for(const f of [odd,order,words,estimate])assert(decodeItems(f.id+"-"+i,1).length===1 && !decodeItems(f.id+"-"+i,2).length,"new 1N3 link guard failed "+f.id);
    }
    assert(odd.make(3).oddEven100.value===50 && order.make(3).answer[0]===100 && words.make(8).answer[0]===100,"new 1N3 boundaries missing");
    assert(pictogramAnswer("１００",100) && !pictogramAnswer("100.0",100),"new 1N3 numeral rule changed");
  });
  await check("P1 addition and subtraction I · carrying and no borrowing",()=>{
    const add=families.find(f=>f.id==="carryadd1a"),subtract=families.find(f=>f.id==="noborrow1a");
    assert(add?.code==="1N4" && subtract?.code==="1N4" && add.count===12 && subtract.count===12,"1N4 family metadata missing");
    for(let i=0;i<12;i++){
      const a=add.make(i),s=subtract.make(i),x=a.carryAddition,y=s.noBorrowSubtraction;
      assert(x.a<100 && x.b<100 && x.a+x.b===x.total && x.total<100 && x.a%10+x.b%10>=10 && a.answer[0]===x.total,"carry addition wrong "+i);
      assert(y.a<100 && y.b<100 && y.a>=y.b && y.a%10>=y.b%10 && y.a-y.b===y.difference && s.answer[0]===y.difference,"no-borrow subtraction wrong "+i);
      assert(a.why.every(w=>w.includes(String(x.total))) && s.why.every(w=>w.includes(String(y.difference)) && w.includes(String(y.a))),"worked steps missing "+i);
      for(const f of [add,subtract])assert(decodeItems(f.id+"-"+i,1).length===1 && !decodeItems(f.id+"-"+i,2).length,"1N4 link guard failed "+f.id);
    }
    assert(pictogramAnswer("４２",42) && !pictogramAnswer("042",42) && !pictogramAnswer("42.0",42),"1N4 answer rule changed");
  });
  await check("P1 three-addend addition · left-to-right results",()=>{
    const family=families.find(f=>f.id==="threeadd1a");
    assert(family?.grade===1 && family.code==="1N4" && family.count===12,"three-addend metadata missing");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),{a,b,c,first,total}=q.threeAddition;
      assert([a,b,c].every(n=>n>0 && n<100) && a+b===first && first+c===total && total<100 && q.answer[0]===total,"three-addend sum wrong "+i);
      assert(q.why[0].includes(`${a} + ${b} = ${first}`) && q.why[1].includes(`${first} + ${c} = ${total}`),"three-addend worked step wrong "+i);
      assert(decodeItems("threeadd1a-"+i,1).length===1 && !decodeItems("threeadd1a-"+i,2).length,"three-addend link guard failed "+i);
    }
  });
  await check("P1 grouping addends · two subtotals and one total",()=>{
    const family=families.find(f=>f.id==="groupadd1a");
    assert(family?.grade===1 && family.code==="1N4" && family.count===12,"grouping family metadata missing");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),{a,b,c,first,last,total}=q.groupedAddition;
      assert([a,b,c].every(n=>n>0 && n<100) && a+b===first && b+c===last && first+c===a+last && total===first+c && total<100,"grouping arithmetic wrong "+i);
      assert(q.answer.join(",")===[first,last,total].join(",") && q.fields.length===3 && q.marks===1,"grouping answer contract wrong "+i);
      assert(q.why[0].includes(`${first} + ${c} = ${total}`) && q.why[1].includes(`${a} + ${last} = ${total}`),"grouping explanation wrong "+i);
      assert(decodeItems("groupadd1a-"+i,1).length===1 && !decodeItems("groupadd1a-"+i,2).length,"grouping link guard failed "+i);
    }
  });
  await check("P1 concrete grouping · one useful adjacent pair in each diagram",()=>{
    const family=families.find(f=>f.id==="group10p1a"),pairs=new Set(),triples=new Set();
    assert(family?.grade===1 && family.code==="1N4" && family.count===12,"concrete grouping metadata missing");
    for(let i=0;i<12;i++){
      const q=family.make(i),{a,b,c,pair,subtotal,total}=q.groupTen,first=a+b,last=b+c;
      assert([a,b,c].every(n=>n>=1 && n<100) && total===a+b+c && total<100,"concrete grouping range wrong "+i);
      assert((first%10===0)!==(last%10===0) && subtotal===(pair==="first"?first:last) && subtotal%10===0,"concrete grouping pair ambiguous "+i);
      assert(q.answer.join(",")===[subtotal,total].join(",") && q.fields.length===2 && q.marks===1,"concrete grouping answer contract wrong "+i);
      assert(q.figure.kind==="groupingBoxes" && q.figure.counts.join(",")===[a,b,c].join(",") && q.why.every(w=>w.includes(String(subtotal)) && w.includes(String(total))),"concrete diagram or key wrong "+i);
      assert(decodeItems("group10p1a-"+i,1).length===1 && !decodeItems("group10p1a-"+i,2).length,"concrete grouping link guard failed "+i);
      pairs.add(pair);triples.add([a,b,c].join(","));
    }
    assert(pairs.size===2 && triples.size===12,"concrete grouping needs both pair positions and distinct triples");
  });
  await check("P1 length and distance I · direct and improvised-unit comparisons",()=>{
    for(const id of ["lengthdirect1a","distancedirect1a","lengthunits1a","distanceunits1a"]){
      const f=families.find(x=>x.id===id),distance=id.startsWith("distance"),units=id.includes("units"),positions=new Set();
      assert(f?.grade===1 && f.code==="1M1" && f.count===12,"1M1 family metadata missing "+id);
      for(let i=0;i<12;i++){
        const q=f.make(i),m=q.measureCompare;
        assert(m.a>=2 && m.b>=2 && m.a<=8 && m.b<=8 && Math.abs(m.a-m.b)>=2 && m.subject===(distance?"distance":"length") && m.units===units,"1M1 diagram data wrong "+id+"-"+i);
        assert(q.figure.kind==="measureCompare" && q.figure.a===m.a && q.figure.b===m.b && q.answer[0]===(m.a>m.b?"A":"B") && q.choices.join("")==="AB","1M1 answer wrong "+id+"-"+i);
        assert(q.prompt.every(s=>s.trim()) && q.why.every(s=>s.includes(q.answer[0])) && decodeItems(id+"-"+i,1).length===1 && !decodeItems(id+"-"+i,2).length,"1M1 bilingual link wrong "+id+"-"+i);
        positions.add(q.answer[0]);
      }
      assert(positions.size===2,"1M1 answer position does not vary "+id);
    }
  });
  await check("P1 length and distance II · centimetre intervals and comparisons",()=>{
    for(const id of ["lengthcm1a","distancecm1a","comparelengthcm1a","comparedistancecm1a"]){
      const f=families.find(x=>x.id===id),compare=id.startsWith("compare"),distance=id.includes("distance"),starts=new Set(),positions=new Set();
      assert(f?.grade===1 && f.code==="1M3" && f.count===12,"1M3 family metadata missing "+id);
      for(let i=0;i<12;i++){
        const q=f.make(i),m=q.centimetre,items=compare?m.items:[{start:m.start,length:m.length}];
        assert(q.figure.kind==="cmRuler" && q.figure.subject===(distance?"distance":"length") && m.subject===q.figure.subject && q.figure.items.length===items.length,"1M3 diagram metadata wrong "+id+"-"+i);
        for(const item of items){assert(item.start>=0 && item.start+item.length<=12 && item.length>=2 && item.length<=9,"1M3 ruler interval outside scale "+id+"-"+i);starts.add(item.start);}
        if(compare){assert(items.length===2 && Math.abs(items[0].length-items[1].length)>=2 && q.answer[0]===(items[0].length>items[1].length?"A":"B") && q.choices.join("")==="AB","1M3 comparison answer wrong "+id+"-"+i);positions.add(q.answer[0]);}
        else assert(m.end===m.start+m.length && q.answer[0]===m.length && q.fields[0].join("/")==="cm/厘米","1M3 numeric answer wrong "+id+"-"+i);
        assert(q.why.every(w=>w.includes(String(items[0].length))) && decodeItems(id+"-"+i,1).length===1 && !decodeItems(id+"-"+i,2).length,"1M3 bilingual key or link wrong "+id+"-"+i);
      }
      assert(starts.has(0) && [...starts].some(n=>n>0) && (!compare || positions.size===2),"1M3 needs zero/nonzero starts and varied answer positions "+id);
    }
  });
  await check("P1 column forms · carrying addition and no-borrow subtraction",()=>{
    const add=families.find(f=>f.id==="columnadd1a"),sub=families.find(f=>f.id==="columnsub1a");
    assert(add?.code==="1N4" && sub?.code==="1N4" && add.count===12 && sub.count===12,"column family metadata missing");
    for(let i=0;i<12;i++)for(const f of [add,sub]){
      const q=f.make(i),{a,b,operation,result}=q.columnForm;
      assert(a>=10 && a<100 && b>=10 && b<100 && result>=10 && result<100 && result===(operation==="add"?a+b:a-b),"column arithmetic wrong "+f.id+"-"+i);
      assert(operation==="add"?a%10+b%10>=10:a%10>=b%10,"column carry/borrow constraint wrong "+f.id+"-"+i);
      assert(q.answer.join("")===""+result && q.answer.every(n=>n>=0 && n<=9) && q.marks===1,"column digit answer wrong "+f.id+"-"+i);
      assert(q.why.every(w=>w.includes(String(result))) && decodeItems(f.id+"-"+i,1).length===1 && !decodeItems(f.id+"-"+i,2).length,"column explanation or link wrong "+f.id+"-"+i);
    }
  });
  await check("P1 two-number stories · operations, limits and bilingual answers",()=>{
    const add=families.find(f=>f.id==="storyadd1a"),sub=families.find(f=>f.id==="storysub1a"),carry=new Set();
    assert(add?.grade===1 && add.code==="1N4" && add.count===12 && sub?.grade===1 && sub.code==="1N4" && sub.count===12,"word-problem family metadata missing");
    for(const f of [add,sub]){
      const scenarios=new Set(),pairs=new Set();
      for(let i=0;i<12;i++){
        const q=f.make(i),{a,b,operation,result,scenario}=q.wordProblem;
        assert(a>=10 && a<100 && b>=10 && b<100 && result>=0 && result<100,"word-problem range wrong "+f.id+"-"+i);
        assert(operation===(f===add?"add":"subtract") && result===(operation==="add"?a+b:a-b),"word-problem operation wrong "+f.id+"-"+i);
        assert(operation==="add" || a%10>=b%10,"word-problem subtraction borrows "+i);
        for(const prompt of q.prompt)assert((prompt.match(/\d+/g)||[]).join(",")===[a,b].join(","),"word-problem prompt must use exactly two numbers "+f.id+"-"+i);
        assert(q.answer[0]===result && q.numberTo100 && q.fields.length===1 && q.why.every(w=>w.includes(String(result))),"word-problem answer wrong "+f.id+"-"+i);
        assert(decodeItems(f.id+"-"+i,1).length===1 && !decodeItems(f.id+"-"+i,2).length,"word-problem link guard failed "+f.id+"-"+i);
        scenarios.add(scenario);pairs.add(a+","+b);if(operation==="add")carry.add(a%10+b%10>=10);
      }
      assert(scenarios.size===4 && pairs.size===12,"word-problem contexts or pairs repeat "+f.id);
    }
    assert(carry.has(true) && carry.has(false),"addition word problems need carry and no-carry examples");
  });
  await check("P2 place value · digits, zero columns and answer formats",()=>{
    const family=families.find(f=>f.id==="place3a"),values=[];
    assert(family && family.grade===2 && family.code==="2N1" && family.count===12,"place-value family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),v=q.answer[0],f=q.figure;
      values.push(v);
      assert(q.placeValue && f.kind==="placeValue" && v===100*f.hundreds+10*f.tens+f.ones,"place-value blocks disagree at "+i);
      assert(v>=100 && v<=999 && [f.hundreds,f.tens,f.ones].every(n=>n>=0 && n<=9),"digits outside scope at "+i);
      assert(q.prompt[0].includes("three-digit") && q.prompt[1].includes("三位數") && q.why.every(x=>x.includes(String(v))),"bilingual item mismatch at "+i);
    }
    assert(values[0]===304 && values.includes(100) && values.includes(999) && values.includes(242) && values.some(v=>v%100===0) && values.some(v=>v%10===0),"place-value cases missing");
    for(const input of ["304"," 304 ","３０４"])assert(threeDigitAnswer(input,304),"valid numeral rejected: "+input);
    for(const input of ["0304","304.0","300+4","608/2","+304","305",""])assert(!threeDigitAnswer(input,304),"invalid numeral accepted: "+input);
    assert(decodeItems("place3a-0",2).length===1 && !decodeItems("place3a-0",1).length,"P2 link or cross-grade guard failed");
  });
  await check("P2 equal groups · pictures, products and both factor orders",()=>{
    const family=families.find(f=>f.id==="groups2a"),pairs=new Set();
    assert(family && family.grade===2 && family.code==="2N3" && family.count===16,"equal-groups family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),g=q.equalGroups;
      assert(g.boxes>=2 && g.boxes<=5 && g.each>=2 && g.each<=5 && g.total===g.boxes*g.each,"group counts outside scope at "+i);
      assert(q.figure.kind==="equalGroups" && q.figure.boxes===g.boxes && q.figure.each===g.each,"picture disagrees at "+i);
      assert(q.marks===1 && q.fields.length===3 && q.answer.join(',')===[g.boxes,g.each,g.total].join(','),"marking data disagrees at "+i);
      assert(q.why[0].includes(Array(g.boxes).fill(g.each).join(' + ')) && q.why[1].includes('所以'),"bilingual key disagrees at "+i);
      assert(equalGroupsAnswer([g.boxes,g.each,g.total],g) && equalGroupsAnswer([g.each,g.boxes,g.total],g),"factor order rejected at "+i);
      assert(!equalGroupsAnswer([g.boxes,g.each,g.total+1],g) && !equalGroupsAnswer([1,g.total,g.total],g),"wrong product or factors accepted at "+i);
      pairs.add(g.boxes+','+g.each);
    }
    assert(pairs.size===16 && pairs.has('3,4') && pairs.has('4,3'),"equal-groups pair coverage changed");
    const g=family.make(0).equalGroups;
    assert(equalGroupsAnswer(['３','４','１２'],g) && !equalGroupsAnswer(['3.0','4','12'],g) && !equalGroupsAnswer(['3','4','4+4+4'],g),"number format rule changed");
    assert(decodeItems('groups2a-0',2).length===1 && !decodeItems('groups2a-0',1).length,"group link or cross-grade guard failed");
  });
  await check("P2 pictograms · one-to-one charts and numeral rule",()=>{
    const family=families.find(f=>f.id==='pict2a'),orientations=new Set(),targets=new Set();
    assert(family && family.grade===2 && family.code==='2D1' && family.count===12,"pictogram family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),p=q.pictogram;
      assert(q.figure.kind==='pictogram' && q.figure.orientation===p.orientation && q.figure.counts.join(',')===p.counts.join(','),"chart record disagreement at "+i);
      assert(p.categories.length===3 && p.counts.length===3 && p.counts.every(n=>n>=0 && n<=6) && q.answer[0]===p.counts[p.target],"chart count outside scope at "+i);
      assert(q.marks===1 && q.fields.length===1 && q.prompt[0].includes(p.categories[p.target][0].toLowerCase()) && q.prompt[1].includes(p.categories[p.target][1]),"bilingual prompt mismatch at "+i);
      assert(q.why.every(x=>x.includes(String(q.answer[0]))) && p.key[0].includes('1 pupil') && p.key[1].includes('1名學生'),"key mismatch at "+i);
      orientations.add(p.orientation);targets.add(q.answer[0]);
    }
    assert(orientations.has('horizontal') && orientations.has('vertical') && targets.has(0) && targets.has(1) && targets.has(6),"orientation or boundary count missing");
    assert(pictogramAnswer('２',2) && pictogramAnswer(' 2 ',2) && pictogramAnswer('0',0),"valid numeral rejected");
    for(const value of ['2.0','1+1','02','3',''])assert(!pictogramAnswer(value,2),"invalid numeral accepted: "+value);
    assert(decodeItems('pict2a-0',2).length===1 && !decodeItems('pict2a-0',1).length,"pictogram link or cross-grade guard failed");
  });
  await check("P2 equal sharing · counts, remainders and numeral rule",()=>{
    const family=families.find(f=>f.id==='share2a'),exact=[],remainders=[],divisors=new Set();
    assert(family && family.grade===2 && family.code==='2N6' && family.count===12,"sharing family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),s=q.equalSharing;
      assert(s.children>=2 && s.children<=5 && s.each>=2 && s.each<=6 && s.total<=30,"sharing counts outside scope at "+i);
      assert(s.left>=0 && s.left<s.children && s.total===s.children*s.each+s.left,"division identity fails at "+i);
      assert(q.figure.kind==='equalSharing' && q.figure.total===s.total && q.figure.children===s.children,"picture disagrees at "+i);
      assert(q.answer.join(',')===[s.each,s.left].join(',') && q.fields.length===2 && q.marks===1,"answer record disagrees at "+i);
      assert(q.prompt[0].includes(String(s.total)) && q.prompt[1].includes(String(s.children)) && q.why.every(x=>x.includes(String(s.total)) && x.includes(String(s.left))),"bilingual prompt or key mismatch at "+i);
      assert(equalSharingAnswer([s.each,s.left],s),"correct sharing answer rejected at "+i);
      if(s.children!==s.each)assert(!equalSharingAnswer([s.children,s.left],s),"divisor mistaken for quotient at "+i);
      (s.left?remainders:exact).push(s.left);divisors.add(s.children);
    }
    assert(exact.length>=4 && remainders.length>=4 && remainders.includes(1) && remainders.some(n=>n>1) && divisors.size===4,"case coverage incomplete");
    assert(equalSharingAnswer(['４','０'],family.make(0).equalSharing) && equalSharingAnswer([' 4 ',' 0 '],family.make(0).equalSharing),"valid numeral rejected");
    for(const pair of [['4',''],['4.0','0'],['12/3','0'],['04','0'],['4','3'],['3','0']])assert(!equalSharingAnswer(pair,family.make(0).equalSharing),"invalid numeral accepted: "+pair);
    assert(decodeItems('share2a-0',2).length===1 && !decodeItems('share2a-0',1).length,"sharing link or cross-grade guard failed");
  });
  await check("P3 shaded fractions · equal cells, boundaries and answer rule",()=>{
    const family=families.find(f=>f.id==='frac3a'),pairs=new Set(),starts=new Set();
    assert(family && family.grade===3 && family.code==='3N5' && family.count===12,"fraction family metadata changed");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),f=q.fractionBar;
      assert([2,3,4,5,6,8].includes(f.parts) && f.shaded>=0 && f.shaded<=f.parts && f.start>=0 && f.start<f.parts,"fraction bounds outside scope at "+i);
      assert(q.figure.kind==='fractionBar' && q.figure.parts===f.parts && q.figure.shaded===f.shaded && q.figure.start===f.start,"fraction figure disagrees at "+i);
      assert(q.answer.join(',')===[f.shaded,f.parts].join(',') && q.fields.length===2 && q.marks===1,"fraction answer record disagrees at "+i);
      assert(q.prompt[0].includes('equal parts shown') && q.prompt[1].includes('圖中等分') && q.why.every(x=>x.includes(f.shaded+'/'+f.parts)),"bilingual fraction prompt or key mismatch at "+i);
      assert(fractionBarAnswer([f.shaded,f.parts],f),"correct fraction rejected at "+i);
      pairs.add(f.shaded+'/'+f.parts);starts.add(f.start);
    }
    assert(pairs.size===12 && ['1/4','2/3','2/4','0/5','6/6'].every(x=>pairs.has(x)) && starts.size>=3,"fraction cases missing");
    const first=family.make(0).fractionBar,reducible=family.make(3).fractionBar;
    assert(fractionBarAnswer(['１','４'],first) && fractionBarAnswer([' 1 ',' 4 '],first),"valid fraction numeral rejected");
    for(const pair of [['','4'],['1',''],['1.0','4'],['1','2+2'],['01','4'],['4','1'],['2','4']])assert(!fractionBarAnswer(pair,first),"invalid fraction accepted: "+pair);
    assert(!fractionBarAnswer(['1','2'],reducible),"equivalent form with different pictured counts scored");
    assert(decodeItems('frac3a-0',3).length===1 && !decodeItems('frac3a-0',2).length,"P3 link or cross-grade guard failed");
  });
  await check("P3 measuring cups · graduations, readings and numeral rule",()=>{
    const family=families.find(f=>f.id==='cup3a');
    assert(family && family.grade===3 && family.code==='3M3' && family.count===12,"measuring-cup metadata changed");
    const readings=new Set();
    for(let i=0;i<12;i++){
      const q=family.make(i),c=q.measuringCup;
      assert(c.max===(i<6?500:1000) && c.step===(i<6?50:100) && c.major===2*c.step,"cup scale changed at "+i);
      assert(c.amount>0 && c.amount<=c.max && c.amount%c.step===0,"water line misses a tick at "+i);
      assert(q.figure.kind==='measuringCup' && q.figure.amount===c.amount && q.answer[0]===c.amount && q.fields[0][0]==='mL',"cup diagram/answer disagreement at "+i);
      assert(q.prompt[0].includes('mL') && q.prompt[1].includes('量杯') && q.why.every(x=>x.includes(c.amount+" mL")),"bilingual cup text missing at "+i);
      assert(measuringCupAnswer(String(c.amount),c.amount),"correct cup reading rejected at "+i);
      readings.add(c.max+':'+c.amount);
    }
    assert(readings.size===12 && family.make(3).answer[0]===250 && family.make(5).answer[0]===500 && family.make(11).answer[0]===1000,"cup cases missing");
    assert(measuringCupAnswer('２５０',250) && measuringCupAnswer(' 250 ',250),"valid cup numeral rejected");
    for(const value of ['','250 mL','250.0','500/2','0250','200'])assert(!measuringCupAnswer(value,250),"invalid cup numeral accepted: "+value);
    assert(decodeItems('cup3a-0',3).length===1 && !decodeItems('cup3a-0',2).length,"cup link or cross-grade guard failed");
  });
  await check("P3 bar charts · scales, orientations and target values",()=>{
    const family=families.find(f=>f.id==='bar3a'),scales=new Set(),orientations=new Set(),targets=new Set();
    assert(family && family.grade===3 && family.code==='3D1' && family.count===12,"bar-chart metadata changed");
    for(let i=0;i<12;i++){
      const q=family.make(i),b=q.barChart;
      assert([1,2,5].includes(b.scale) && ['horizontal','vertical'].includes(b.orientation),"chart scale or orientation outside scope at "+i);
      assert(b.steps.length===3 && b.steps.every(n=>Number.isInteger(n) && n>=0 && n<=6) && b.target>=0 && b.target<3,"chart bar bounds changed at "+i);
      assert(q.answer[0]===b.steps[b.target]*b.scale && q.figure.kind==='barChart' && q.figure.steps.join(',')===b.steps.join(','),"bar answer/figure mismatch at "+i);
      assert(q.prompt[0].includes(b.categories[b.target][0].toLowerCase()) && q.prompt[1].includes(b.categories[b.target][1]) && q.why.every(x=>x.includes(q.answer[0])),"bilingual chart text missing at "+i);
      scales.add(b.scale);orientations.add(b.scale+':'+b.orientation);targets.add(b.target);
    }
    assert(scales.size===3 && orientations.size===6 && targets.size===3 && family.make(0).answer[0]===8 && family.make(0).barChart.orientation==='horizontal',"chart coverage or first practice item missing");
    assert(measuringCupAnswer('８',8) && !measuringCupAnswer('4',8) && !measuringCupAnswer('8 pupils',8),"chart numeral marking rule changed");
    assert(decodeItems('bar3a-0',3).length===1 && !decodeItems('bar3a-0',2).length,"bar-chart link or cross-grade guard failed");
  });
  for (const set of sharedSets) {
    await check(set.name+" · IDs, answers and URL",()=>{
      const selected = decodeItems(set.ids.join("."),set.grade);
      assert(selected.length===set.ids.length,"link no longer decodes");
      assert(selected.map(q=>q.id).join(".")===set.ids.join("."),"order changed");
      assert(selected.map(q=>q.otherWay?q.answer.join(" + ")+" = "+q.otherWay.total:q.answer[0]).join("|")===set.answers.join("|"),
        "published answers changed");
      if(set.codes)assert(selected.map(q=>q.code).join("|")===set.codes.join("|"),"curriculum labels changed");
      for (const language of ["en","zh"]) for (const view of ["","build","paper","key"]) {
        assert(customLink(set.ids,view,set.grade,language,"2")===expectedQuery(set,language,view,"2"),
          "v2 URL changed: "+language+" "+(view||"pupil"));
        assert(customLink(set.ids,view,set.grade,language,"3")===expectedQuery(set,language,view,"3"),
          "v3 URL changed: "+language+" "+(view||"pupil"));
        assert(customLink(set.ids,view,set.grade,language)===expectedQuery(set,language,view,"3"),
          "new-link default changed: "+language+" "+(view||"pupil"));
      }
    });
  }
  await check("Malformed and cross-grade IDs",()=>{
    for (const [raw,grade] of [["count20a-20",1],["count20a-10.count20a-10",1],["per1-0",1],
      ["next1-01",1],["missing-0",1],["otherway1-11",1],["pct2-15",6],["pct2-0",1]]) {
      assert(decodeItems(raw,grade).length===0,"invalid link accepted: "+raw);
    }
  });
  await check("Numeric answer formats · legacy and whole-number",()=>{
    for(const input of ["11"," 11 ","１１","11.0","22/2","+11"])
      assert(numericAnswer(input,11),"v2 should accept "+input);
    for(const input of ["11"," 11 ","１１"])
      assert(numericAnswer(input,11,true),"v3 P1 should accept "+input);
    for(const input of ["11.0","22/2","+11","11 counters","12",""])
      assert(!numericAnswer(input,11,true),"v3 P1 should reject "+input);
    assert(numericAnswer("22/2",11,false),"P4/P6 legacy numeric rule changed");
  });
  await check("P1 counting practice · hint, retry, fresh items and first tries",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("practice view did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("practice view failed to load"));};
        frame.src=new URL("../?lang=en&p=1&view=practice",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const count=()=>doc.querySelectorAll(".figure circle").length;
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([count()]);
      assert(count()===11,"opening practice item changed");
      submit("12");
      assert(/Count each full row/.test(doc.getElementById("practice-feedback").textContent),"wrong answer gave no hint");
      assert(!doc.getElementById("practice-answer").disabled,"hint blocked retry");
      submit("11");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent),"retry not acknowledged");
      assert(/2 complete rows of five \(10\) and 1 more/.test(doc.getElementById("practice-feedback").textContent),"worked counting step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(count()),"follow-up reused the first item");seen.add(count());
      submit("");
      assert(/Enter the number/.test(doc.getElementById("practice-feedback").textContent),"blank response was not prompted");
      submit(String(count()));
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),"first-try success missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(count()),"third item repeated a question");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),"worked answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),"first tries were not counted separately");
    }finally{frame.remove();}
  });
  await check("P1 counting practice · Chinese labels and language link",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=1&view=practice",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習點算圓片","Chinese practice title missing");
      assert(doc.getElementById("en").getAttribute("href").includes("view=practice"),"language switch loses practice");
      doc.getElementById("practice-answer").value="12";
      doc.getElementById("practice-form").requestSubmit();
      assert(/再試一次/.test(doc.getElementById("practice-feedback").textContent),"Chinese hint missing");
    }finally{frame.remove();}
  });
  await check("P1 counting-forwards practice · hint, retry and distinct follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("sequence practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("sequence practice failed to load"));};
        frame.src=new URL("../?lang=en&p=1&view=practice&skill=next1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const answer=()=>Number(prompt().match(/(\d+),\s*$/)?.[1])+1;
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("7, 8, 9") && answer()===10,"opening sequence changed");
      assert(doc.querySelector("legend #practice-answer"),"answer field is outside the sequence");
      submit("9");
      assert(/Look at the last number/.test(doc.getElementById("practice-feedback").textContent),"sequence hint missing");
      assert(!doc.getElementById("practice-answer").disabled,"sequence retry blocked");
      submit("10");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /9 \+ 1 = 10/.test(doc.getElementById("practice-feedback").textContent),"worked step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second sequence repeated");seen.add(prompt());
      submit("");
      assert(/Enter the next number/.test(doc.getElementById("practice-feedback").textContent),"blank sequence was not prompted");
      submit(String(answer()));
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third sequence repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),"answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),"first tries were not recorded separately");
      assert(doc.querySelector('a[href*="skill=next1"]'),"repeat link loses the skill");
    }finally{frame.remove();}
  });
  await check("P1 counting-forwards practice · Chinese prompt and hint",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese sequence practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=1&view=practice&skill=next1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習順數","Chinese sequence title missing");
      assert(doc.querySelector("legend").textContent.includes("7、8、9"),"Chinese sequence prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("skill=next1"),"language switch loses sequence skill");
      doc.getElementById("practice-answer").value="9";
      doc.getElementById("practice-form").requestSubmit();
      assert(/順數一個/.test(doc.getElementById("practice-feedback").textContent),"Chinese sequence hint missing");
    }finally{frame.remove();}
  });
  await check("P1 addition practice · one-group hint, worked step and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("addition practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("addition practice failed to load"));};
        frame.src=new URL("../?lang=en&p=1&view=practice&skill=storyadd1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const answer=()=>doc.querySelectorAll(".figure circle").length;
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("4 red counters") && prompt().includes("5 blue counters") && answer()===9,
        "opening addition story changed");
      submit("4");
      assert(/only one group/.test(doc.getElementById("practice-feedback").textContent),"one-group misconception hint missing");
      assert(!doc.getElementById("practice-answer").disabled,"hint blocked retry");
      submit("9");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /4 \+ 5 = 9/.test(doc.getElementById("practice-feedback").textContent),"addition worked step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second addition story repeated");seen.add(prompt());
      submit(String(answer()));
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),"first-try addition success missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third addition story repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),"addition answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),"first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=storyadd1"]'),"repeat link loses addition skill");
    }finally{frame.remove();}
  });
  await check("P1 addition practice · Chinese hint and numeric format",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese addition practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=1&view=practice&skill=storyadd1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習加法情境題","Chinese addition title missing");
      assert(doc.querySelector("legend").textContent.includes("4粒紅色圓片"),"Chinese addition prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("skill=storyadd1"),"language switch loses addition skill");
      doc.getElementById("practice-answer").value="9.0";
      doc.getElementById("practice-form").requestSubmit();
      assert(/只用數字輸入整數/.test(doc.getElementById("practice-feedback").textContent),"numeric-format hint missing");
      doc.getElementById("practice-answer").value="９";
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent),"full-width correct numeral rejected");
    }finally{frame.remove();}
  });
  await check("P1 missing-part practice · targeted hint, worked step and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("missing-part practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("missing-part practice failed to load"));};
        frame.src=new URL("../?lang=en&p=1&view=practice&skill=parts18a",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("whole has 12 counters") && prompt().includes("part has 5 counters"),
        "opening missing-part question changed");
      assert(doc.querySelector(".figure")?.getAttribute("aria-label").includes("other part unknown"),
        "missing-part diagram is absent");
      submit("");
      assert(/Enter the number of counters in the other part/.test(doc.getElementById("practice-feedback").textContent),
        "blank missing-part answer was accepted");
      submit("12");
      assert(/whole or the part already shown/.test(doc.getElementById("practice-feedback").textContent) &&
        !doc.getElementById("practice-answer").disabled,"whole/part misconception hint missing");
      submit("7");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /12 - 5 = 7/.test(doc.getElementById("practice-feedback").textContent),"missing-part worked step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second missing-part question repeated");seen.add(prompt());
      const numbers=prompt().match(/\d+/g).map(Number);
      submit(String(numbers[0]-numbers[1]));
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),
        "first-try missing-part success missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third missing-part question repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),
        "missing-part answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),
        "missing-part first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=parts18a"]'),"repeat link loses missing-part skill");
    }finally{frame.remove();}
  });
  await check("P1 missing-part practice · Chinese hint and numeral",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese missing-part practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=1&view=practice&skill=parts18a",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習找出另一部分",
        "Chinese missing-part title missing");
      assert(doc.querySelector("legend").textContent.includes("整體有12粒圓片"),"Chinese missing-part prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("skill=parts18a"),
        "language switch loses missing-part skill");
      doc.getElementById("practice-answer").value="5";
      doc.getElementById("practice-form").requestSubmit();
      assert(/已顯示的部分/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese known-part hint missing");
      doc.getElementById("practice-answer").value="７";
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /12 - 5 = 7/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese worked step or full-width numeral failed");
    }finally{frame.remove();}
  });
  await check("P4 perimeter practice · area hint, worked sides and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("perimeter practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("perimeter practice failed to load"));};
        frame.src=new URL("../?lang=en&p=4&view=practice&skill=per1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("18 cm long") && prompt().includes("5 cm wide"),"opening perimeter item changed");
      assert(doc.querySelector(".figure")?.getAttribute("aria-label").includes("opposite sides"),
        "four-sided perimeter diagram missing");
      submit("90");
      assert(/area inside the rectangle/.test(doc.getElementById("practice-feedback").textContent) &&
        !doc.getElementById("practice-answer").disabled,"area misconception hint missing");
      submit("46");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /18 \+ 5 \+ 18 \+ 5 = 46 cm/.test(doc.getElementById("practice-feedback").textContent),
        "worked four-side sum missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second perimeter question repeated");seen.add(prompt());
      const dimensions=prompt().match(/(\d+) cm long and (\d+) cm wide/);
      assert(dimensions,"follow-up dimensions missing");
      submit(String(2*(+dimensions[1]+ +dimensions[2]))+".0");
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),
        "P4 numeric marking changed");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third perimeter question repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),
        "perimeter answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),
        "perimeter first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=per1"]'),"repeat link loses perimeter skill");
    }finally{frame.remove();}
  });
  await check("P4 perimeter practice · Chinese two-side hint",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese perimeter practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=4&view=practice&skill=per1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習長方形周界",
        "Chinese perimeter title missing");
      assert(doc.querySelector("legend").textContent.includes("長18厘米、闊5厘米"),
        "Chinese perimeter prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("p=4&view=practice&skill=per1"),
        "language switch loses perimeter skill");
      doc.getElementById("practice-answer").value="23";
      doc.getElementById("practice-form").requestSubmit();
      assert(/只加了兩條邊/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese two-side hint missing");
      doc.getElementById("practice-answer").value="46";
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /18 \+ 5 \+ 18 \+ 5 = 46/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese worked step missing");
    }finally{frame.remove();}
  });
  await check("P4 factor practice · missing factor, worked pairs and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("factor practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("factor practice failed to load"));};
        frame.src=new URL("../?lang=en&p=4&view=practice&skill=factor1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const boxes=()=>Array.from(doc.querySelectorAll('input[name="factor"]'));
      const submit=()=>doc.getElementById("practice-form").requestSubmit();
      const seen=new Set([prompt()]);
      assert(prompt()==="Select every factor of 12 in the list.","opening factor question changed");
      assert(boxes().map(input=>input.value).join(",")==="2,3,5,7","opening factor choices changed");
      submit();
      assert(/Select at least one/.test(doc.getElementById("practice-feedback").textContent),
        "blank factor selection was accepted");
      boxes()[0].checked=true;submit();
      assert(/another one in the list/.test(doc.getElementById("practice-feedback").textContent) &&
        !boxes()[0].disabled,"missing-factor hint blocked retry");
      boxes()[1].checked=true;submit();
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /2 × 6 = 12; 3 × 4 = 12/.test(doc.getElementById("practice-feedback").textContent),
        "factor worked pairs missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second factor question repeated");seen.add(prompt());
      const target=Number(prompt().match(/\d+/)[0]);
      boxes().filter(input=>target%Number(input.value)===0).forEach(input=>input.checked=true);
      submit();
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),
        "first-try factor success missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third factor question repeated");
      boxes()[0].checked=true;submit();submit();
      assert(/The factors in this list are/.test(doc.getElementById("practice-feedback").textContent),
        "factor answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),
        "factor first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=factor1"]'),"repeat link loses factor skill");
    }finally{frame.remove();}
  });
  await check("P4 factor practice · Chinese nonfactor hint",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese factor practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=4&view=practice&skill=factor1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習辨認因數",
        "Chinese factor title missing");
      assert(doc.querySelector("legend").textContent.includes("12的因數"),"Chinese factor prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("p=4&view=practice&skill=factor1"),
        "language switch loses factor skill");
      const boxes=Array.from(doc.querySelectorAll('input[name="factor"]'));
      boxes.find(input=>input.value==="5").checked=true;
      doc.getElementById("practice-form").requestSubmit();
      assert(/5不是12的因數/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese nonfactor hint missing");
      boxes.find(input=>input.value==="5").checked=false;
      boxes.filter(input=>["2","3"].includes(input.value)).forEach(input=>input.checked=true);
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /2 × 6 = 12/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese worked factor pair missing");
    }finally{frame.remove();}
  });
  await check("P6 percentage practice · pupil-count hint, worked step and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("percentage practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("percentage practice failed to load"));};
        frame.src=new URL("../?lang=en&p=6&view=practice&skill=pct2",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("Of 40 pupils, 12 chose badminton"),"opening percentage question changed");
      submit("");
      assert(/Enter the percentage/.test(doc.getElementById("practice-feedback").textContent),
        "blank percentage answer was accepted");
      submit("12");
      assert(/number of pupils/.test(doc.getElementById("practice-feedback").textContent) &&
        !doc.getElementById("practice-answer").disabled,"pupil-count hint blocked retry");
      submit("30");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /12 ÷ 40 × 100 = 30%/.test(doc.getElementById("practice-feedback").textContent),
        "percentage worked step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second percentage question repeated");seen.add(prompt());
      const [total,part]=prompt().match(/\d+/g).map(Number);
      submit(String(Math.round(part/total*100))+".0");
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),
        "P6 numeric marking changed");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third percentage question repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),
        "percentage answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),
        "percentage first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=pct2"]'),"repeat link loses percentage skill");
    }finally{frame.remove();}
  });
  await check("P6 percentage practice · Chinese decimal-proportion hint",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese percentage practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=6&view=practice&skill=pct2",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習百分比",
        "Chinese percentage title missing");
      assert(doc.querySelector("legend").textContent.includes("40名學生中有12人"),
        "Chinese percentage prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("p=6&view=practice&skill=pct2"),
        "language switch loses percentage skill");
      doc.getElementById("practice-answer").value="0.3";
      doc.getElementById("practice-form").requestSubmit();
      assert(/小數形式的比例/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese proportion hint missing");
      doc.getElementById("practice-answer").value="30";
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /12 ÷ 40 × 100 = 30%/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese worked percentage step missing");
    }finally{frame.remove();}
  });
  await check("P6 arithmetic-mean practice · total hint, worked step and follow-ups",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("arithmetic-mean practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("arithmetic-mean practice failed to load"));};
        frame.src=new URL("../?lang=en&p=6&view=practice&skill=mean1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      const prompt=()=>doc.querySelector("legend").textContent.trim();
      const submit=value=>{doc.getElementById("practice-answer").value=value;doc.getElementById("practice-form").requestSubmit();};
      const seen=new Set([prompt()]);
      assert(prompt().includes("10, 17 and 12 books"),"opening mean question changed");
      submit("");
      assert(/Enter the average/.test(doc.getElementById("practice-feedback").textContent),
        "blank mean answer was accepted");
      submit("39");
      assert(/total for three days/.test(doc.getElementById("practice-feedback").textContent) &&
        !doc.getElementById("practice-answer").disabled,"total hint blocked retry");
      submit("13");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /10 \+ 17 \+ 12 = 39; 39 ÷ 3 = 13 books per day/.test(doc.getElementById("practice-feedback").textContent),
        "mean worked step missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"second mean question repeated");seen.add(prompt());
      const days=prompt().match(/\d+/g).map(Number);
      submit(String(days.reduce((a,b)=>a+b,0)/3)+".0");
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),
        "P6 numeric marking changed");
      doc.getElementById("practice-next").click();
      assert(!seen.has(prompt()),"third mean question repeated");
      submit("0");submit("0");
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),
        "mean answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector("main").textContent),
        "mean first tries were not counted separately");
      assert(doc.querySelector('main a[href*="skill=mean1"]'),"repeat link loses mean skill");
    }finally{frame.remove();}
  });
  await check("P6 arithmetic-mean practice · Chinese one-day hint",async()=>{
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("Chinese mean practice did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=new URL("../?lang=zh&p=6&view=practice&skill=mean1",location.href);
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector("h1").textContent==="練習算術平均數",
        "Chinese mean title missing");
      assert(doc.querySelector("legend").textContent.includes("10、17和12本書"),
        "Chinese mean prompt missing");
      assert(doc.getElementById("en").getAttribute("href").includes("p=6&view=practice&skill=mean1"),
        "language switch loses mean skill");
      doc.getElementById("practice-answer").value="17";
      doc.getElementById("practice-form").requestSubmit();
      assert(/其中一天的數量/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese one-day hint missing");
      doc.getElementById("practice-answer").value="13";
      doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /10 \+ 17 \+ 12 = 39；39 ÷ 3 = 13/.test(doc.getElementById("practice-feedback").textContent),
        "Chinese worked mean step missing");
    }finally{frame.remove();}
  });
  async function shapeFrame(query){
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    await new Promise((resolve,reject)=>{
      let settled=false;
      const finish=(error)=>{if(settled)return;settled=true;clearTimeout(timer);clearInterval(poll);if(error){frame.remove();reject(error);}else resolve();};
      const timer=setTimeout(()=>finish(new Error("shape view did not load: "+query)),60000);
      const poll=setInterval(()=>{try{if(frame.contentDocument?.readyState==="complete" && frame.contentDocument.getElementById("app")?.children.length)finish();}catch{}},100);
      frame.onload=()=>finish();
      frame.onerror=()=>finish(new Error("shape view failed to load"));
      const target=new URL("../"+query,location.href);
      target.searchParams.set("regressionFrame",Date.now()+"-"+Math.random().toString(36).slice(2));
      frame.src=target;
      document.body.appendChild(frame);
    });
    return frame;
  }
  await check("P1 triangle · builder, pupil marking, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query="?v=3&lang=en&p=1&items=triangle1-1";
      const builder=await open(query+"&view=build");
      assert(builder.querySelector('select[name="triangle1"]') && builder.querySelectorAll('.shape-options svg').length===3,
        "triangle family missing from builder preview");
      const pupil=await open(query);
      assert(pupil.querySelectorAll('.shape-options input[type="radio"]').length===3,"pupil choices missing");
      assert([...pupil.querySelectorAll('.shape-options svg')].every(x=>!x.getAttribute("aria-label").includes("triangle")),
        "accessible drawing names the answer");
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById("status").textContent),"blank shape was accepted");
      pupil.querySelector('input[value="B"]').checked=true;pupil.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(pupil.getElementById("status").textContent),"triangle answer did not score");
      const paper=await open(query+"&view=paper");
      const key=await open(query+"&view=key");
      assert(paper.querySelectorAll('.shape-options svg').length===3 && key.querySelectorAll('.shape-options svg').length===3,
        "paper and key do not show the same shapes");
      assert(key.querySelector('fieldset p b')?.textContent==="B" && key.querySelector('fieldset').textContent.includes("three straight sides"),
        "worked key missing triangle answer");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,
        "shape paper and key codes differ");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 triangle practice · hint, retry, distinct follow-ups",async()=>{
    const frame=await shapeFrame("?lang=en&p=1&view=practice&skill=triangle1");
    try{
      const doc=frame.contentDocument,seen=new Set();
      const signature=()=>[...doc.querySelectorAll('.shape-options svg')].map(x=>x.outerHTML).join("");
      const submit=letter=>{if(letter)doc.querySelector('input[value="'+letter+'"]').checked=true;doc.getElementById("practice-form").requestSubmit();};
      seen.add(signature());
      submit();
      assert(/Choose one shape/.test(doc.getElementById("practice-feedback").textContent),"blank shape used an attempt");
      submit("C");
      assert(/four straight sides/.test(doc.getElementById("practice-feedback").textContent) && !doc.querySelector('input[value="B"]').disabled,
        "four-side hint blocked retry");
      submit("B");
      assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) &&
        /three straight sides/.test(doc.getElementById("practice-feedback").textContent),"worked shape feedback missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(signature()),"second shape repeated");seen.add(signature());
      const letter=doc.querySelector('.shape-option svg[aria-label*="three straight sides"]').parentElement.querySelector('input').value;
      submit(letter);
      assert(/Correct on the first try/.test(doc.getElementById("practice-feedback").textContent),"first-try shape success missing");
      doc.getElementById("practice-next").click();
      assert(!seen.has(signature()),"third shape repeated");
      const wrong=doc.querySelector('.shape-option svg[aria-label*="four straight sides"]').parentElement.querySelector('input').value;
      submit(wrong);submit(wrong);
      assert(/The answer is/.test(doc.getElementById("practice-feedback").textContent),"shape worked answer missing after retry");
      doc.getElementById("practice-next").click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"shape first tries not separate");
    }finally{frame.remove();}
  });
  await check("P1 triangle practice · Chinese curved-outline hint",async()=>{
    const frame=await shapeFrame("?lang=zh&p=1&view=practice&skill=triangle1");
    try{
      const doc=frame.contentDocument;
      assert(doc.documentElement.lang==="zh-HK" && doc.querySelector('h1').textContent==="練習辨認三角形","Chinese shape title missing");
      assert(doc.getElementById("en").getAttribute("href").includes("skill=triangle1"),"language link loses shape skill");
      doc.querySelector('input[value="A"]').checked=true;doc.getElementById("practice-form").requestSubmit();
      assert(/彎曲的/.test(doc.getElementById("practice-feedback").textContent),"Chinese curved hint missing");
      doc.querySelector('input[value="B"]').checked=true;doc.getElementById("practice-form").requestSubmit();
      assert(/看提示後答對/.test(doc.getElementById("practice-feedback").textContent) &&
        /三條直邊/.test(doc.getElementById("practice-feedback").textContent),"Chinese worked shape step missing");
    }finally{frame.remove();}
  });
  await check("P1 numbers to 100 · builder, pupil, paper, key and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query="?v=3&lang=en&p=1&items=compare100a-0";
      const builder=await open(query+"&view=build");
      assert(builder.querySelector('select[name="compare100a"]'),"P1 comparison builder family missing");
      const pupil=await open(query);
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank comparison accepted");
      const correct=await open(query);
      correct.querySelector('input[value="42"]').checked=true;correct.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(correct.getElementById('status').textContent),"larger number rejected");
      const paper=await open(query+"&view=paper"),key=await open(query+"&view=key");
      assert(paper.querySelectorAll('.option').length===2 && key.querySelector('fieldset').textContent.includes('42 is larger'),"comparison paper or key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"comparison paper/key codes differ");
      const zh=await open("?v=3&lang=zh&p=1&items=compare100a-0&view=key");
      assert(zh.querySelector('fieldset').textContent.includes('先比較十位'),"Chinese comparison key missing");
      const pdf=await frames[frames.length-1].contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese comparison PDF lacks a selectable A4 page");
      const practice=await open("?lang=en&p=1&view=practice&skill=compare100a");
      assert(practice.getElementById('zh').getAttribute('href').includes('skill=compare100a'),"practice language link missing");
      practice.querySelector('input[value="37"]').checked=true;practice.getElementById('practice-form').requestSubmit();
      assert(practice.getElementById('practice-feedback').textContent.includes('Compare the tens'),"comparison hint missing");
      practice.querySelector('input[value="42"]').checked=true;practice.getElementById('practice-form').requestSubmit();
      assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"comparison retry missing");
      practice.getElementById('practice-next').click();
      assert(practice.querySelector('legend').textContent.includes('58'),"comparison follow-up repeated");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 numbers to 100 · new builder, pupil, paper, key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["tensones1a","countgroups1a","sequence100a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]'),"1N3 builder missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"blank accepted "+id);
        const pupil=await open(base);pupil.querySelector('input[name="q0f0"]').value=String(q.answer[0]);pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"correct answer rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");
        assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent && key.querySelector('fieldset').textContent.includes(String(q.answer[0])),"paper/key mismatch "+id);
        const chinese=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(chinese.documentElement.lang==="zh-HK" && chinese.querySelector('fieldset').textContent.includes(String(q.answer[0])),"Chinese key missing "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),input=practice.getElementById('practice-answer');
        assert(input && practice.getElementById('zh').getAttribute('href').includes(id),"practice route missing "+id);
        input.value="1";practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.length>10,"practice hint missing "+id);
        input.value=String(q.answer[0]);practice.getElementById('practice-form').requestSubmit();assert(/Correct after a hint/.test(practice.getElementById('practice-feedback').textContent),"practice retry missing "+id);
        practice.getElementById('practice-next').click();assert(practice.getElementById('practice-answer') && practice.querySelector('.practice-progress').textContent.includes('2'),"distinct follow-up missing "+id);
        const svg=paper.querySelector('svg');if(id!=="sequence100a")assert(svg && svg.querySelectorAll(id==="tensones1a"?'g[transform]':'circle').length>0,"group diagram missing "+id);
      }
      const f=frames.find(f=>f.contentDocument?.querySelector('.count-groups') && f.contentDocument?.documentElement.lang==="zh-HK");
      assert(f,"Chinese grouped-count PDF frame missing");
      const pdf=await f.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length<=2,"grouped-count PDF text or pages missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 numbers to 100 · four new families in builder, quiz, print and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["oddeven100a","ordernums100a","numberwords100a","estimate100a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]'),"builder missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"blank accepted "+id);
        const pupil=await open(base);
        if(q.choices)pupil.querySelector('input[value="'+q.answer[0]+'"]').checked=true;
        else pupil.querySelectorAll('input[name^="q0f"]').forEach((el,j)=>el.value=String(q.answer[j]));
        pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"correct answer rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");
        assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"paper/key mismatch "+id);
        const zh=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes(q.why[1]),"Chinese key missing "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id);
        assert(practice.getElementById('zh').getAttribute('href').includes(id) && practice.getElementById('practice-form'),"practice route missing "+id);
        if(q.choices){
          practice.querySelector('input[value="'+q.choices.find(x=>x!==q.answer[0])+'"]').checked=true;
          practice.getElementById('practice-form').requestSubmit();
          assert(practice.getElementById('practice-feedback').textContent.length>20,"choice hint missing "+id);
          practice.querySelector('input[value="'+q.answer[0]+'"]').checked=true;
        }else{
          practice.querySelectorAll('input').forEach(el=>el.value="1");practice.getElementById('practice-form').requestSubmit();
          assert(practice.getElementById('practice-feedback').textContent.length>20,"number hint missing "+id);
          practice.querySelectorAll('input').forEach((el,j)=>el.value=String(q.answer[j]));
        }
        practice.getElementById('practice-form').requestSubmit();
        assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"retry missing "+id);
        practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2'),"follow-up missing "+id);
        if(id==="estimate100a")assert(paper.querySelectorAll('.estimate-counters circle').length===10+q.figure.count,"estimate reference or target dot count wrong");
      }
      const f=frames.find(f=>f.contentDocument?.querySelector('.estimate-counters') && f.contentDocument?.documentElement.lang==="zh-HK");
      const pdf=await f.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese estimate PDF text or page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 addition and subtraction I · builder, quiz, key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["carryadd1a","noborrow1a","threeadd1a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]'),"1N4 builder missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"blank accepted "+id);
        const wrong=await open(base);wrong.querySelector('input[name="q0f0"]').value="1";wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"wrong answer accepted "+id);
        const pupil=await open(base);pupil.querySelector('input[name="q0f0"]').value=String(q.answer[0]);pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"correct answer rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent && key.querySelector('fieldset').textContent.includes(String(q.answer[0])),"paper/key mismatch "+id);
        const zh=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes(q.why[1]),"Chinese 1N4 key missing "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),input=practice.getElementById('practice-answer');assert(input && practice.getElementById('zh').getAttribute('href').includes(id),"1N4 practice missing "+id);
        input.value="1";practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.length>20,"1N4 hint missing "+id);
        input.value=String(q.answer[0]);practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"1N4 retry missing "+id);
        practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2'),"1N4 follow-up missing "+id);
      }
      const f=frames.find(f=>f.contentDocument?.documentElement.lang==="zh-HK" && f.contentDocument.querySelector('fieldset')?.textContent.includes('把10個一換成1個十'));
      assert(f,"Chinese carry key frame missing");
      const pdf=await f.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese carry PDF text or page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 word problems · builder, marking, bilingual key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["storyadd1a","storysub1a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]'),"story builder missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"story blank accepted "+id);
        const wrong=await open(base);wrong.querySelector('input[name="q0f0"]').value="1";wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"story wrong answer accepted "+id);
        const pupil=await open(base);pupil.querySelector('input[name="q0f0"]').value=String(q.answer[0]).replace(/\d/g,d=>String.fromCharCode(d.charCodeAt(0)+65248));pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"story full-width answer rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent && key.querySelector('fieldset').textContent.includes(q.why[0]),"story paper/key mismatch "+id);
        const zh=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes(q.why[1]),"Chinese story key missing "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),input=practice.getElementById('practice-answer');assert(input && practice.getElementById('zh').getAttribute('href').includes(id),"story practice missing "+id);
        input.value="1";practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes(id==="storyadd1a"?"come together":"taken away"),"story hint missing "+id);
        input.value=String(q.answer[0]);practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"story retry missing "+id);
        practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2'),"story follow-up missing "+id);
      }
      const f=frames.find(f=>f.contentDocument?.documentElement.lang==="zh-HK" && f.contentDocument.querySelector('fieldset')?.textContent.includes('驗算'));
      assert(f,"Chinese subtraction story key frame missing");
      const pdf=await f.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese word-problem PDF text or page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 grouping · builder, marking, bilingual key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const id="groupadd1a",q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
      const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]'),"grouping builder missing");
      const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"grouping blank accepted");
      const wrong=await open(base);wrong.querySelectorAll('input[name^="q0f"]').forEach((el,j)=>el.value=String(j===1?q.answer[j]+1:q.answer[j]));wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"grouping partial accepted");
      const pupil=await open(base);pupil.querySelectorAll('input[name^="q0f"]').forEach((el,j)=>el.value=String(q.answer[j]));pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"grouping correct rejected");
      const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelectorAll('fieldset .blank').length===3 && paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent && key.querySelector('fieldset').textContent.includes(q.why[0]),"grouping paper/key mismatch");
      const zh=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes(q.why[1]),"Chinese grouping key missing");
      const pdf=await frames.at(-1).contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese grouping PDF missing text or page");
      const practice=await open("?lang=en&p=1&view=practice&skill="+id),inputs=[...practice.querySelectorAll('#practice-form input')];assert(inputs.length===3 && practice.getElementById('zh').getAttribute('href').includes(id),"grouping practice missing");
      inputs.forEach(el=>el.value="1");practice.getElementById('practice-form').requestSubmit();assert(/first two/.test(practice.getElementById('practice-feedback').textContent),"grouping hint missing");
      inputs.forEach((el,j)=>el.value=String(q.answer[j]));practice.getElementById('practice-form').requestSubmit();assert(/Correct after a hint/.test(practice.getElementById('practice-feedback').textContent),"grouping retry missing");
      practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2'),"grouping follow-up missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 concrete grouping · diagram, scoring, bilingual PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const id="group10p1a",q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
      const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]') && builder.querySelector('.grouping-boxes'),"concrete grouping builder missing");
      const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"concrete grouping blank accepted");
      const wrong=await open(base);wrong.querySelectorAll('input[name^="q0f"]').forEach((el,j)=>el.value=String(j?q.answer[j]:q.answer[j]+1));wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"concrete grouping partial answer accepted");
      const pupil=await open(base);pupil.querySelectorAll('input[name^="q0f"]').forEach((el,j)=>el.value=String(q.answer[j]));pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"concrete grouping correct answer rejected");
      const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelector('.grouping-boxes') && paper.querySelectorAll('fieldset .blank').length===2 && key.querySelector('fieldset').textContent.includes(q.why[0]),"concrete grouping paper/key mismatch");
      const zh=await open("?v=3&lang=zh&p=1&items="+id+"-1&view=key"),zhq=families.find(f=>f.id===id).make(1);assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('.grouping-boxes[aria-label*="三個盒子"]') && zh.querySelector('fieldset').textContent.includes(zhq.why[1]),"Chinese concrete grouping key missing");
      const pdf=await frames.at(-1).contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese concrete grouping PDF missing text or page");
      const practice=await open("?lang=en&p=1&view=practice&skill="+id),inputs=[...practice.querySelectorAll('#practice-form input')];assert(inputs.length===2 && practice.querySelector('.grouping-boxes') && practice.getElementById('zh').href.includes(id),"concrete grouping practice missing");
      inputs.forEach(el=>el.value="1");practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('ending in 0'),"concrete grouping hint missing");
      inputs.forEach((el,j)=>el.value=String(q.answer[j]));practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"concrete grouping retry missing");
      practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2') && practice.querySelector('.grouping-boxes[aria-label*="25, 7, 3"]'),"concrete grouping follow-up missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 columns · aligned fields, scoring, key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["columnadd1a","columnsub1a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]') && builder.querySelector('.column-form'),"column builder missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"column blank accepted "+id);
        const wrong=await open(base);wrong.querySelectorAll('.column-result input').forEach((el,j)=>el.value=String(j?q.answer[j]+1:q.answer[j]));wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"column partial accepted "+id);
        const pupil=await open(base);pupil.querySelectorAll('.column-result input').forEach((el,j)=>el.value=String(q.answer[j]));pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"column correct rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelectorAll('.column-result .column-blank').length===2 && key.querySelectorAll('.column-result b').length===2 && paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"column paper/key mismatch "+id);
        const zh=await open("?v=3&lang=zh&p=1&items="+id+"-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes(q.why[1]),"Chinese column key missing "+id);
        const pdf=await frames.at(-1).contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese column PDF missing text or page "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),inputs=[...practice.querySelectorAll('#practice-form input')];assert(inputs.length===2 && practice.getElementById('zh').getAttribute('href').includes(id),"column practice missing "+id);
        inputs.forEach(el=>el.value="9");practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.length>30,"column hint missing "+id);
        inputs.forEach((el,j)=>el.value=String(q.answer[j]));practice.getElementById('practice-form').requestSubmit();assert(/Correct after a hint/.test(practice.getElementById('practice-feedback').textContent),"column retry missing "+id);
        practice.getElementById('practice-next').click();assert(practice.querySelector('.practice-progress').textContent.includes('2'),"column follow-up missing "+id);
      }
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 length and distance I · builder, quiz, paper, key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["lengthdirect1a","distancedirect1a","lengthunits1a","distanceunits1a"]){
        const q=families.find(f=>f.id===id).make(0),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build");assert(builder.querySelector('select[name="'+id+'"]') && builder.querySelector('.measure-compare'),"1M1 builder missing "+id);
        if(id.startsWith("distance")){
          const diagram=builder.querySelector('.measure-compare'),rays=[...diagram.querySelectorAll('.distance-ray')];
          assert(rays.length===2 && rays.every(ray=>ray.getAttribute('transform').startsWith('translate(48 80)')) && diagram.querySelectorAll('.distance-start').length===1,"distance rays must share one Start point "+id);
          if(q.measureCompare.units)assert(diagram.querySelectorAll('.distance-ray ellipse').length===q.measureCompare.a+q.measureCompare.b,"distance units must be equal-length segments "+id);
        }
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"1M1 blank accepted "+id);
        const wrong=await open(base);wrong.querySelector('input[value="'+(q.answer[0]==="A"?"B":"A")+'"]').checked=true;wrong.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"1M1 wrong choice accepted "+id);
        const pupil=await open(base);pupil.querySelector('input[value="'+q.answer[0]+'"]').checked=true;pupil.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(pupil.getElementById('status').textContent),"1M1 correct choice rejected "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");assert(paper.querySelector('.measure-compare') && paper.querySelectorAll('fieldset .option').length===2 && key.querySelector('fieldset').textContent.includes(q.why[0]),"1M1 paper/key mismatch "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),choice=practice.querySelector('input[value="'+(q.answer[0]==="A"?"B":"A")+'"]');assert(choice && practice.querySelector('.measure-compare') && practice.getElementById('zh').href.includes(id),"1M1 practice missing "+id);
        choice.checked=true;practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.length>15,"1M1 hint missing "+id);
        practice.querySelector('input[value="'+q.answer[0]+'"]').checked=true;practice.getElementById('practice-form').requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"1M1 retry missing "+id);
      }
      const zh=await open("?v=3&lang=zh&p=1&items=distanceunits1a-0&view=key");assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('fieldset').textContent.includes('回形針'),"Chinese 1M1 key missing");
      const pdf=await frames.at(-1).contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese 1M1 PDF text or page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 length and distance II · builder, scoring, paper, key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      for(const id of ["lengthcm1a","distancecm1a","comparelengthcm1a","comparedistancecm1a"]){
        const q=families.find(f=>f.id===id).make(0),compare=id.startsWith("compare"),base="?v=3&lang=en&p=1&items="+id+"-0";
        const builder=await open(base+"&view=build"),ruler=builder.querySelector('.cm-ruler');
        assert(builder.querySelector('select[name="'+id+'"]') && ruler && ruler.querySelectorAll('.cm-ruler-row').length===(compare?2:1) && ruler.querySelectorAll('.cm-ruler-ticks text').length===(compare?26:13),"1M3 builder/ruler missing "+id);
        const blank=await open(base);blank.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(blank.getElementById('status').textContent),"1M3 blank accepted "+id);
        const wrong=await open(base),right=await open(base);
        if(compare){
          wrong.querySelector('input[value="'+(q.answer[0]==="A"?"B":"A")+'"]').checked=true;
          right.querySelector('input[value="'+q.answer[0]+'"]').checked=true;
        }else{
          wrong.querySelector('input[name="q0f0"]').value="99";
          right.querySelector('input[name="q0f0"]').value=String(q.answer[0]);
        }
        wrong.querySelector('form').requestSubmit();right.querySelector('form').requestSubmit();
        assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent) && /Score 1 \/ 1/.test(right.getElementById('status').textContent),"1M3 scoring wrong "+id);
        const paper=await open(base+"&view=paper"),key=await open(base+"&view=key");
        assert(paper.querySelector('.cm-ruler') && key.querySelector('.cm-ruler') && key.querySelector('fieldset').textContent.includes(q.why[0]),"1M3 paper/key mismatch "+id);
        const practice=await open("?lang=en&p=1&view=practice&skill="+id),form=practice.getElementById('practice-form');
        assert(practice.querySelector('.cm-ruler') && practice.getElementById('zh').href.includes(id),"1M3 practice missing "+id);
        if(compare){form.querySelector('input[value="'+(q.answer[0]==="A"?"B":"A")+'"]').checked=true;}
        else form.querySelector('#practice-answer').value="99";
        form.requestSubmit();assert(practice.getElementById('practice-feedback').textContent.length>30,"1M3 targeted hint missing "+id);
        if(compare){form.querySelector('input[value="'+q.answer[0]+'"]').checked=true;}
        else form.querySelector('#practice-answer').value=String(q.answer[0]);
        form.requestSubmit();assert(practice.getElementById('practice-feedback').textContent.includes('Correct after a hint'),"1M3 practice retry failed "+id);
      }
      const zh=await open("?v=3&lang=zh&p=1&items=lengthcm1a-6&view=key");
      assert(zh.documentElement.lang==="zh-HK" && zh.querySelector('.cm-ruler') && zh.querySelector('fieldset').textContent.includes('厘米'),"Chinese 1M3 key missing");
      const pdf=await frames.at(-1).contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await pdf.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"Chinese 1M3 PDF missing text or page");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 place value · builder, pupil, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query="?v=3&lang=en&p=2&items=place3a-0";
      const builder=await open(query+"&view=build");
      assert(builder.querySelector('select[name="place3a"]') && builder.querySelector('.place-value'),"P2 builder preview missing");
      const pupil=await open(query);
      assert(pupil.querySelector('.place-value[aria-label*="0 ten rods"]') && !pupil.querySelector('.place-value').getAttribute('aria-label').includes('304'),"P2 accessible counts missing or disclose answer");
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank P2 answer accepted");
      pupil.querySelector('input[name="q0f0"]').value="304.0";pupil.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(pupil.getElementById('status').textContent),"decimal P2 answer accepted");
      const correct=await open(query);
      correct.querySelector('input[name="q0f0"]').value="３０４";correct.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(correct.getElementById('status').textContent),"full-width P2 numeral rejected");
      const paper=await open(query+"&view=paper"),key=await open(query+"&view=key");
      assert(paper.querySelector('.place-value') && key.querySelector('.place-value') && paper.querySelector('.blank'),"P2 paper or key drawing missing");
      assert(key.querySelector('fieldset p b')?.textContent==='304' && key.querySelector('fieldset').textContent.includes('3 × 100 + 0 × 10 + 4 = 304'),"P2 worked key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"P2 paper and key codes differ");
      const chinese=await open('?v=3&lang=zh&p=2&items=place3a-0&view=key');
      assert(chinese.querySelector('.place-value[aria-label*="0個十"]') && chinese.querySelector('fieldset').textContent.includes('三位數'),"Chinese P2 key missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 place value practice · hint, retry and distinct follow-ups",async()=>{
    const frame=await shapeFrame('?lang=en&p=2&view=practice&skill=place3a');
    try{
      const doc=frame.contentDocument,seen=new Set();
      const signature=()=>doc.querySelector('.place-value').outerHTML;
      const submit=v=>{doc.getElementById('practice-answer').value=v;doc.getElementById('practice-form').requestSubmit();};
      seen.add(signature());submit('');
      assert(/Write the three-digit number/.test(doc.getElementById('practice-feedback').textContent),"blank P2 practice answer accepted");
      submit('314');
      assert(/no tens/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer').disabled,"P2 zero-place hint missing");
      submit('304');
      assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent) && doc.getElementById('practice-feedback').textContent.includes('3 × 100 + 0 × 10 + 4 = 304'),"P2 worked retry missing");
      doc.getElementById('practice-next').click();
      assert(!seen.has(signature()),"P2 follow-up repeated");seen.add(signature());
      const counts=doc.querySelector('.place-value').getAttribute('aria-label').match(/\d+/g).map(Number);
      submit(String(100*counts[0]+10*counts[1]+counts[2]));
      assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"P2 first-try result missing");
      doc.getElementById('practice-next').click();
      assert(!seen.has(signature()),"third P2 question repeated");
      submit('1');submit('1');doc.getElementById('practice-next').click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"P2 first-try count missing");
    }finally{frame.remove();}
  });
  await check("P2 place value · Chinese practice and home links",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const practice=await open('?lang=zh&p=2&view=practice&skill=place3a');
      assert(practice.documentElement.lang==='zh-HK' && practice.querySelector('h1').textContent==='練習三位數位值',"Chinese P2 practice missing");
      assert(practice.getElementById('en').getAttribute('href').includes('skill=place3a'),"P2 language switch lost skill");
      practice.getElementById('practice-answer').value='314';practice.getElementById('practice-form').requestSubmit();
      assert(/十位要填0/.test(practice.getElementById('practice-feedback').textContent),"Chinese P2 hint missing");
      const home=await open('?lang=en');
      assert([...home.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Create a P2 quiz') && a.href.includes('p=2')),"P2 builder home link missing");
      assert([...home.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise place value') && a.href.includes('skill=place3a')),"P2 practice home link missing");
      assert([...home.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise equal groups') && a.href.includes('skill=groups2a')),"P2 group practice home link missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 place value · Chinese direct PDF",async()=>{
    const frame=await shapeFrame('?v=3&lang=zh&p=2&items=place3a-0&view=paper');
    try{
      const code=await frame.contentWindow.mathQuizPdf.paperCode();
      assert(/^P2-V3-[0-9A-F]{10}$/.test(code),"P2 paper code missing");
      const blob=await frame.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
      assert(raw.startsWith('%PDF-') && raw.includes(code),"P2 PDF or paper code missing");
      assert(raw.includes('/ToUnicode') && raw.includes('/FontFile2'),"P2 PDF selectable text missing");
      assert((raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"P2 paper does not fit one A4 page");
    }finally{frame.remove();}
  });
  await check("P2 equal groups · builder, pupil marking, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=2&items=groups2a-0';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="groups2a"]') && builder.querySelector('.equal-groups'),"group family missing from builder");
      const pupil=await open(query);
      const fields=()=>[...pupil.querySelectorAll('.group-equation input')];
      assert(fields().length===3 && pupil.querySelector('.equal-groups[aria-label="3 boxes, 4 counters in each box."]'),"group picture or answer fields missing");
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank group answer accepted");
      [3,4,13].forEach((v,j)=>fields()[j].value=String(v));pupil.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(pupil.getElementById('status').textContent),"wrong group product scored");
      const reverse=await open(query);
      [4,3,12].forEach((v,j)=>reverse.querySelectorAll('.group-equation input')[j].value=String(v));reverse.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(reverse.getElementById('status').textContent),"reversed factor order rejected");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelector('.equal-groups') && key.querySelector('.equal-groups') && paper.querySelectorAll('.group-blank').length===3,"group paper or key missing");
      assert(key.querySelector('fieldset p b')?.textContent==='3 × 4 = 12' && key.querySelector('fieldset').textContent.includes('4 + 4 + 4 = 12'),"group worked key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"group paper and key codes differ");
      const chinese=await open('?v=3&lang=zh&p=2&items=groups2a-0&view=key');
      assert(chinese.querySelector('.equal-groups[aria-label*="每盒4粒圓片"]') && chinese.querySelector('fieldset').textContent.includes('所以'),"Chinese group key missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 equal-groups practice · hint, retry and follow-ups",async()=>{
    const frame=await shapeFrame('?lang=en&p=2&view=practice&skill=groups2a');
    try{
      const doc=frame.contentDocument,seen=new Set(),signature=()=>doc.querySelector('.equal-groups').outerHTML;
      const submit=values=>{values.forEach((v,j)=>doc.getElementById('practice-answer-'+j).value=String(v));doc.getElementById('practice-form').requestSubmit();};
      seen.add(signature());submit([3,'',12]);
      assert(/Complete all three boxes/.test(doc.getElementById('practice-feedback').textContent),"blank group field accepted");
      submit([3,4,13]);
      assert(/Count the equal boxes/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer-0').disabled,"group hint or retry missing");
      submit([4,3,12]);
      assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent) && doc.getElementById('practice-feedback').textContent.includes('4 + 4 + 4 = 12'),"group worked retry missing");
      doc.getElementById('practice-next').click();
      assert(!seen.has(signature()),"group follow-up repeated");seen.add(signature());
      const counts=doc.querySelector('.equal-groups').getAttribute('aria-label').match(/\d+/g).map(Number);
      submit([counts[0],counts[1],counts[0]*counts[1]]);
      assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"group first try missing");
      doc.getElementById('practice-next').click();
      assert(!seen.has(signature()),"third group picture repeated");
      submit([1,1,1]);submit([1,1,1]);doc.getElementById('practice-next').click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"group first-try count missing");
    }finally{frame.remove();}
  });
  await check("P2 equal groups · Chinese practice and direct PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=2&view=practice&skill=groups2a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習等量分組' && doc.getElementById('en').getAttribute('href').includes('groups2a'),"Chinese group practice missing");
      [3,4,13].forEach((v,j)=>doc.getElementById('practice-answer-'+j).value=String(v));doc.getElementById('practice-form').requestSubmit();
      assert(/先數盒子/.test(doc.getElementById('practice-feedback').textContent),"Chinese group hint missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=2&items=groups2a-0&view=paper');frames.push(paper);
      const code=await paper.contentWindow.mathQuizPdf.paperCode();
      const blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
      assert(/^P2-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"group PDF or code missing");
      assert(raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"group PDF text or A4 page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 pictogram · builder, pupil, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=2&items=pict2a-0';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="pict2a"]') && builder.querySelector('.pictogram'),"pictogram missing from builder");
      const pupil=await open(query),svg=pupil.querySelector('.pictogram');
      assert(svg && svg.querySelectorAll('.pict-symbol').length===9 && svg.getAttribute('aria-label').includes('Banana: pupil symbol, pupil symbol') && !svg.getAttribute('aria-label').includes('2 pupils'),"chart or accessible symbols missing");
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank pictogram answer accepted");
      pupil.querySelector('input[name="q0f0"]').value='3';pupil.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(pupil.getElementById('status').textContent),"wrong category count scored");
      const correct=await open(query);
      correct.querySelector('input[name="q0f0"]').value='２';correct.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(correct.getElementById('status').textContent),"full-width pictogram answer rejected");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelector('.pictogram') && key.querySelector('.pictogram') && paper.querySelector('.blank'),"pictogram paper or key missing");
      assert(key.querySelector('fieldset p b')?.textContent==='2' && key.querySelector('fieldset').textContent.includes('Each picture stands for 1 pupil'),"pictogram worked key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"pictogram paper/key code differs");
      const vertical=await open('?v=3&lang=zh&p=2&items=pict2a-6&view=key');
      assert(vertical.querySelector('.pictogram').querySelectorAll('.pict-symbol').length===9 && vertical.querySelector('.pictogram[aria-label*="學生圖案"]') && vertical.querySelector('fieldset').textContent.includes('每個圖案代表1名學生'),"Chinese vertical chart missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 pictogram practice · hint, zero, vertical and first tries",async()=>{
    const frame=await shapeFrame('?lang=en&p=2&view=practice&skill=pict2a');
    try{
      const doc=frame.contentDocument,submit=v=>{doc.getElementById('practice-answer').value=v;doc.getElementById('practice-form').requestSubmit();};
      assert(doc.querySelector('.pictogram').querySelectorAll('.pict-symbol').length===9,"opening chart changed");
      submit('');assert(/Enter the number/.test(doc.getElementById('practice-feedback').textContent),"blank practice answer accepted");
      submit('4');assert(/Find the Banana category/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer').disabled,"category hint missing");
      submit('2');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent),"retry feedback missing");
      doc.getElementById('practice-next').click();
      assert(doc.querySelector('.pictogram').querySelectorAll('.pict-symbol').length===8,"zero-count chart missing");
      submit('0');assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"zero answer rejected");
      doc.getElementById('practice-next').click();
      assert(doc.querySelector('.pictogram').getAttribute('viewBox')==='0 0 420 250',"vertical follow-up missing");
      submit('2');submit('2');doc.getElementById('practice-next').click();
      assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"first-try total missing");
    }finally{frame.remove();}
  });
  await check("P2 pictogram · Chinese practice, home link and direct PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=2&view=practice&skill=pict2a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習閱讀象形圖' && doc.getElementById('en').getAttribute('href').includes('pict2a'),"Chinese pictogram practice missing");
      doc.getElementById('practice-answer').value='4';doc.getElementById('practice-form').requestSubmit();
      assert(/找出香蕉一類/.test(doc.getElementById('practice-feedback').textContent),"Chinese category hint missing");
      const home=await shapeFrame('?lang=en');frames.push(home);
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise pictograms') && a.href.includes('skill=pict2a')),"pictogram home link missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=2&items=pict2a-6&view=paper');frames.push(paper);
      const code=await paper.contentWindow.mathQuizPdf.paperCode(),blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
      assert(/^P2-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"pictogram PDF or code missing");
      assert(raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"pictogram PDF text or A4 page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 equal sharing · builder, pupil, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=2&items=share2a-0.share2a-1';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="share2a"]') && builder.querySelectorAll('.equal-sharing').length===2,"sharing family missing from builder");
      const pupil=await open(query),figures=[...pupil.querySelectorAll('.equal-sharing')];
      assert(figures.length===2 && figures[0].querySelectorAll('circle').length===12 && figures[1].querySelectorAll('circle').length===13,"starting counters wrong");
      assert(figures[0].querySelectorAll('rect').length===4 && figures[1].querySelectorAll('rect').length===5,"empty trays wrong");
      assert(figures.every(svg=>svg.getAttribute('aria-label').includes('empty trays') && !svg.getAttribute('aria-label').includes('left over')),"accessible start picture reveals answer");
      assert(pupil.querySelectorAll('fieldset:first-of-type input').length===2 && pupil.querySelector('input[name="q0f0"]').getAttribute('aria-label')==='Each child gets' && pupil.querySelector('input[name="q0f1"]').getAttribute('aria-label')==='Left over',"sharing fields missing labels");
      pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank sharing fields accepted");
      pupil.querySelector('input[name="q0f0"]').value='4';pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank remainder accepted");
      pupil.querySelector('input[name="q0f1"]').value='0';pupil.querySelector('input[name="q1f0"]').value='3';pupil.querySelector('input[name="q1f1"]').value='1';pupil.querySelector('form').requestSubmit();
      assert(/Score 2 \/ 2/.test(pupil.getElementById('status').textContent),"exact and remainder answers did not score");
      const wrong=await open('?v=3&lang=en&p=2&items=share2a-1');
      wrong.querySelector('input[name="q0f0"]').value='4';wrong.querySelector('input[name="q0f1"]').value='1';wrong.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"wrong quotient scored");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelectorAll('.sharing-blank').length===4 && key.querySelectorAll('.equal-sharing').length===2,"paper or key missing sharing items");
      assert(key.querySelectorAll('fieldset')[0].textContent.includes('3 × 4 + 0 = 12') && key.querySelectorAll('fieldset')[1].textContent.includes('4 × 3 + 1 = 13'),"worked division checks missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"sharing paper/key codes differ");
      const chinese=await open('?v=3&lang=zh&p=2&items=share2a-1&view=key');
      assert(chinese.querySelector('.equal-sharing[aria-label*="空盤子"]') && chinese.querySelector('fieldset').textContent.includes('餘數1'),"Chinese sharing key missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P2 equal sharing practice · hint, retry and distinct follow-ups",async()=>{
    const frame=await shapeFrame('?lang=en&p=2&view=practice&skill=share2a');
    try{
      const doc=frame.contentDocument,submit=(a,b)=>{doc.getElementById('practice-answer-0').value=a;doc.getElementById('practice-answer-1').value=b;doc.getElementById('practice-form').requestSubmit();};
      const count=()=>doc.querySelector('.equal-sharing').querySelectorAll('circle').length;
      assert(count()===12 && doc.querySelectorAll('.sharing-response input').length===2,"opening sharing practice changed");
      submit('4','');assert(/Complete both boxes/.test(doc.getElementById('practice-feedback').textContent),"blank remainder used an attempt");
      submit('3','0');assert(/Give one counter to each child/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer-0').disabled,"sharing hint blocked retry");
      submit('4','0');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent) && doc.getElementById('practice-feedback').textContent.includes('3 × 4 + 0 = 12'),"worked retry feedback missing");
      doc.getElementById('practice-next').click();assert(count()===13,"first remainder follow-up missing");
      submit('３','１');assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"full-width remainder answer rejected");
      doc.getElementById('practice-next').click();assert(count()===23,"second distinct remainder follow-up missing");
      submit('0','0');submit('0','0');assert(/The answer is/.test(doc.getElementById('practice-feedback').textContent),"worked result after second try missing");
      doc.getElementById('practice-next').click();assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"first tries not tracked separately");
    }finally{frame.remove();}
  });
  await check("P2 equal sharing · Chinese practice, phone width and direct PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=2&view=practice&skill=share2a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習平均分配' && doc.getElementById('en').getAttribute('href').includes('share2a'),"Chinese sharing practice missing");
      doc.getElementById('practice-answer-0').value='3';doc.getElementById('practice-answer-1').value='0';doc.getElementById('practice-form').requestSubmit();
      assert(/輪流給每人一粒/.test(doc.getElementById('practice-feedback').textContent),"Chinese sharing hint missing");
      const home=await shapeFrame('?lang=en');frames.push(home);
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise equal sharing') && a.href.includes('skill=share2a')),"sharing home link missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=2&items=share2a-0.share2a-1&view=paper');frames.push(paper);
      paper.style.width='360px';
      assert(paper.contentDocument.documentElement.scrollWidth<=360,"sharing phone paper overflows");
      const code=await paper.contentWindow.mathQuizPdf.paperCode(),blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
      assert(/^P2-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"sharing PDF or code missing");
      assert(raw.includes('/ToUnicode') && (raw.match(/\/Type\s*\/Page\b/g)||[]).length===1,"sharing PDF text or A4 page missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 shaded fractions · builder, marking, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=3&items=frac3a-0.frac3a-3';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="frac3a"]') && builder.querySelectorAll('.fraction-bar').length===2,"P3 fraction family missing from builder");
      const pupil=await open(query),bars=[...pupil.querySelectorAll('.fraction-bar')];
      assert(bars.length===2 && bars[0].querySelectorAll('rect').length===4 && bars[1].querySelectorAll('rect').length===4,"equal-part cells missing");
      assert(bars[0].querySelectorAll('rect[data-shaded="true"]').length===1 && bars[1].querySelectorAll('rect[data-shaded="true"]').length===2,"shaded cells disagree with answer");
      assert(bars[0].getAttribute('aria-label').includes('shaded') && !bars[0].getAttribute('aria-label').includes('1/4'),"fraction alt text missing or reveals answer");
      assert(pupil.querySelector('input[name="q0f0"]').getAttribute('aria-label')==='Shaded parts (numerator)' && pupil.querySelector('input[name="q0f1"]').getAttribute('aria-label')==='Equal parts shown (denominator)',"fraction fields missing labels");
      pupil.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank fraction accepted");
      pupil.querySelector('input[name="q0f0"]').value='1';pupil.querySelector('form').requestSubmit();
      assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank denominator accepted");
      pupil.querySelector('input[name="q0f1"]').value='4';pupil.querySelector('input[name="q1f0"]').value='2';pupil.querySelector('input[name="q1f1"]').value='4';pupil.querySelector('form').requestSubmit();
      assert(/Score 2 \/ 2/.test(pupil.getElementById('status').textContent),"pictured fraction counts did not score");
      const wrong=await open('?v=3&lang=en&p=3&items=frac3a-3');
      wrong.querySelector('input[name="q0f0"]').value='1';wrong.querySelector('input[name="q0f1"]').value='2';wrong.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent) && wrong.querySelector('fieldset').textContent.includes('same amount'),"equivalent fraction rule or feedback missing");
      const fullwidth=await open('?v=3&lang=en&p=3&items=frac3a-0');
      fullwidth.querySelector('input[name="q0f0"]').value='１';fullwidth.querySelector('input[name="q0f1"]').value='４';fullwidth.querySelector('form').requestSubmit();
      assert(/Score 1 \/ 1/.test(fullwidth.getElementById('status').textContent),"full-width fraction numerals rejected");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelectorAll('.fraction-blank').length===4 && key.querySelectorAll('.fraction-bar').length===2,"fraction paper or key missing");
      assert(key.querySelectorAll('fieldset')[0].querySelector('p b')?.textContent==='1/4' && key.querySelectorAll('fieldset')[1].querySelector('p b')?.textContent==='2/4',"fraction key answers missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"fraction paper and key codes differ");
      const chinese=await open('?v=3&lang=zh&p=3&items=frac3a-7.frac3a-8&view=key');
      assert(chinese.querySelectorAll('fieldset')[0].textContent.includes('0/5') && chinese.querySelectorAll('fieldset')[1].textContent.includes('6/6') && chinese.querySelector('.fraction-bar[aria-label*="等分"]'),"Chinese zero or whole key missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 shaded fraction practice · hint, equivalence and distinct follow-ups",async()=>{
    const frame=await shapeFrame('?lang=en&p=3&view=practice&skill=frac3a');
    try{
      const doc=frame.contentDocument,submit=(a,b)=>{doc.getElementById('practice-answer-0').value=a;doc.getElementById('practice-answer-1').value=b;doc.getElementById('practice-form').requestSubmit();};
      const shaded=()=>doc.querySelectorAll('.fraction-bar rect[data-shaded="true"]').length;
      assert(shaded()===1 && doc.querySelectorAll('.fraction-bar rect').length===4,"opening practice diagram changed");
      submit('1','');assert(/Complete both fraction boxes/.test(doc.getElementById('practice-feedback').textContent),"blank fraction used an attempt");
      submit('2','4');assert(/Count all the equal parts/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer-0').disabled,"fraction hint blocked retry");
      submit('1','4');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent) && doc.getElementById('practice-feedback').textContent.includes('1/4'),"fraction worked retry missing");
      doc.getElementById('practice-next').click();assert(shaded()===2 && doc.querySelectorAll('.fraction-bar rect').length===3,"first follow-up repeated");
      submit('２','３');assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"full-width practice fraction rejected");
      doc.getElementById('practice-next').click();assert(shaded()===2 && doc.querySelectorAll('.fraction-bar rect').length===4,"second follow-up repeated");
      submit('1','2');assert(/same value/.test(doc.getElementById('practice-feedback').textContent),"equivalent fraction hint missing");
      submit('2','4');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent),"fraction retry missing");
      doc.getElementById('practice-next').click();assert(/Correct on the first try: 1 \/ 3/.test(doc.querySelector('main').textContent),"fraction first tries not separate");
    }finally{frame.remove();}
  });
  await check("P3 shaded fractions · Chinese practice, home links and PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=3&view=practice&skill=frac3a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習塗色分數' && doc.getElementById('en').getAttribute('href').includes('frac3a'),"Chinese fraction practice missing");
      doc.getElementById('practice-answer-0').value='2';doc.getElementById('practice-answer-1').value='4';doc.getElementById('practice-form').requestSubmit();
      assert(/先數所有等分/.test(doc.getElementById('practice-feedback').textContent),"Chinese fraction hint missing");
      const home=await shapeFrame('?lang=en');frames.push(home);
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Create a P3 quiz') && a.href.includes('p=3')),"P3 builder home link missing");
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise fractions') && a.href.includes('skill=frac3a')),"fraction practice home link missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=3&items=frac3a-7.frac3a-8.frac3a-3&view=paper');frames.push(paper);
      paper.style.width='360px';assert(paper.contentDocument.documentElement.scrollWidth<=360,"fraction phone paper overflows");
      const code=await paper.contentWindow.mathQuizPdf.paperCode(),blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer());
      assert(/^P3-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"P3 fraction PDF or code missing");
      const pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(raw.includes('/ToUnicode') && pages>=1 && pages<=2,"P3 fraction PDF text or A4 pages missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 measuring cups · builder, pupil, paper and key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=3&items=cup3a-3.cup3a-8';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="cup3a"]') && builder.querySelectorAll('.measuring-cup').length===2,"cup family missing from builder");
      const pupil=await open(query),cups=[...pupil.querySelectorAll('.measuring-cup')];
      assert(cups.length===2 && cups[0].querySelectorAll('text').length>=7 && cups[1].querySelectorAll('text').length>=7,"cup scale labels missing");
      assert(cups[0].getAttribute('aria-label').includes('tick number') && !cups[0].getAttribute('aria-label').includes('250 mL'),"cup accessible scale reveals answer");
      assert(pupil.querySelector('input[name="q0f0"]')?.getAttribute('aria-label')==='Amount of water in millilitres',"cup field label missing");
      pupil.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank cup answer accepted");
      pupil.querySelector('input[name="q0f0"]').value='250';pupil.querySelector('input[name="q1f0"]').value='３００';pupil.querySelector('form').requestSubmit();
      assert(/Score 2 \/ 2/.test(pupil.getElementById('status').textContent),"cup readings did not score");
      const wrong=await open('?v=3&lang=en&p=3&items=cup3a-3');wrong.querySelector('input[name="q0f0"]').value='250 mL';wrong.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"typed unit scored");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelectorAll('.measuring-cup').length===2 && paper.querySelectorAll('.measuring-response .blank').length===2,"cup paper blank missing");
      assert(key.querySelectorAll('fieldset')[0].querySelector('p b')?.textContent==='250 mL' && key.querySelectorAll('fieldset')[1].querySelector('p b')?.textContent==='300 mL',"cup worked key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"cup paper/key code differs");
      const chinese=await open('?v=3&lang=zh&p=3&items=cup3a-5.cup3a-11&view=key');
      assert(chinese.querySelectorAll('fieldset')[0].textContent.includes('500 mL') && chinese.querySelectorAll('fieldset')[1].textContent.includes('1000 mL') && chinese.querySelector('.measuring-cup[aria-label*="量杯"]'),"Chinese full-scale cup key missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 measuring-cup practice · hint, retry and first tries",async()=>{
    const frame=await shapeFrame('?lang=en&p=3&view=practice&skill=cup3a');
    try{
      const doc=frame.contentDocument,submit=value=>{doc.getElementById('practice-answer').value=value;doc.getElementById('practice-form').requestSubmit();};
      assert(doc.querySelector('.measuring-cup') && doc.querySelector('h1').textContent==='Practise reading a measuring cup',"cup practice missing");
      submit('');assert(/Write the water amount/.test(doc.getElementById('practice-feedback').textContent),"blank cup used attempt");
      submit('300');assert(/Count each equally spaced tick/.test(doc.getElementById('practice-feedback').textContent) && !doc.getElementById('practice-answer').disabled,"cup hint blocked retry");
      submit('250');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent),"cup worked retry missing");
      doc.getElementById('practice-next').click();assert(doc.querySelector('.measuring-cup').getAttribute('aria-label').includes('500'),"cup first follow-up missing");
      submit('１００');assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"full-width cup practice rejected");
      doc.getElementById('practice-next').click();assert(doc.querySelector('.measuring-cup').getAttribute('aria-label').includes('1000'),"cup second follow-up missing");
      submit('300');doc.getElementById('practice-next').click();
      assert(/Correct on the first try: 2 \/ 3/.test(doc.querySelector('main').textContent),"cup first tries not separate");
    }finally{frame.remove();}
  });
  await check("P3 measuring cups · Chinese practice, home link and PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=3&view=practice&skill=cup3a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習讀取量杯刻度' && doc.getElementById('en').getAttribute('href').includes('cup3a'),"Chinese cup practice missing");
      doc.getElementById('practice-answer').value='300';doc.getElementById('practice-form').requestSubmit();
      assert(/從有數字的刻度開始/.test(doc.getElementById('practice-feedback').textContent),"Chinese cup hint missing");
      const home=await shapeFrame('?lang=en');frames.push(home);
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise measuring cups') && a.href.includes('skill=cup3a')),"cup home link missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=3&items=cup3a-3.cup3a-8&view=paper');frames.push(paper);
      paper.style.width='360px';assert(paper.contentDocument.documentElement.scrollWidth<=360,"cup phone paper overflows");
      const code=await paper.contentWindow.mathQuizPdf.paperCode(),blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer()),pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(/^P3-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"cup PDF or code missing");
      assert(raw.includes('/ToUnicode') && pages>=1 && pages<=2,"cup PDF text or A4 pages missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 bar charts · builder, pupil, paper, key and marking",async()=>{
    const frames=[];
    try{
      const open=async query=>{const f=await shapeFrame(query);frames.push(f);return f.contentDocument;};
      const query='?v=3&lang=en&p=3&items=bar3a-0.bar3a-9';
      const builder=await open(query+'&view=build');
      assert(builder.querySelector('select[name="bar3a"]') && builder.querySelectorAll('.bar-chart').length===2,"bar-chart family missing from builder");
      const pupil=await open(query),charts=[...pupil.querySelectorAll('.bar-chart')];
      assert(charts.length===2 && charts[0].querySelectorAll('.bar-mark').length===3 && charts[1].querySelectorAll('.bar-mark').length===3,"chart bars missing");
      assert(charts[0].getAttribute('aria-label').includes('counts pupils by 2') && charts[1].getAttribute('aria-label').includes('Vertical'),"chart accessible scale/orientation missing");
      assert(pupil.querySelector('input[name="q0f0"]')?.getAttribute('aria-label')==='Number of pupils',"chart field label missing");
      pupil.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"blank bar answer accepted");
      pupil.querySelector('input[name="q0f0"]').value='８';pupil.querySelector('input[name="q1f0"]').value='5';pupil.querySelector('form').requestSubmit();
      assert(/Score 2 \/ 2/.test(pupil.getElementById('status').textContent),"bar values did not score");
      const wrong=await open('?v=3&lang=en&p=3&items=bar3a-0');wrong.querySelector('input[name="q0f0"]').value='4';wrong.querySelector('form').requestSubmit();
      assert(/Score 0 \/ 1/.test(wrong.getElementById('status').textContent),"bare step count scored as pupils");
      const paper=await open(query+'&view=paper'),key=await open(query+'&view=key');
      assert(paper.querySelectorAll('.bar-chart').length===2 && paper.querySelectorAll('.bar-response .blank').length===2,"bar-chart paper blank missing");
      assert(key.querySelectorAll('fieldset')[0].querySelector('p b')?.textContent==='8 pupils' && key.querySelectorAll('fieldset')[1].querySelector('p b')?.textContent==='5 pupils',"bar-chart key missing");
      assert(paper.querySelector('.paper-code')?.textContent===key.querySelector('.paper-code')?.textContent,"bar-chart paper/key code differs");
      const chinese=await open('?v=3&lang=zh&p=3&items=bar3a-2.bar3a-11&view=key');
      assert(chinese.querySelectorAll('fieldset')[0].textContent.includes('0 名學生') && chinese.querySelector('.bar-chart[aria-label*="棒形圖"]'),"Chinese chart key or zero case missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 bar-chart practice · hint, three scales and first tries",async()=>{
    const frame=await shapeFrame('?lang=en&p=3&view=practice&skill=bar3a');
    try{
      const doc=frame.contentDocument,submit=value=>{doc.getElementById('practice-answer').value=value;doc.getElementById('practice-form').requestSubmit();};
      assert(doc.querySelector('h1').textContent==='Practise reading bar charts' && doc.querySelector('.bar-chart[aria-label*="counts pupils by 2"]'),"opening bar practice missing");
      submit('');assert(/Write the number of pupils/.test(doc.getElementById('practice-feedback').textContent),"blank bar used attempt");
      submit('4');assert(/Check what one axis step represents/.test(doc.getElementById('practice-feedback').textContent),"bar scale hint missing");
      submit('8');assert(/Correct after a hint/.test(doc.getElementById('practice-feedback').textContent),"bar retry missing");
      doc.getElementById('practice-next').click();assert(doc.querySelector('.bar-chart[aria-label*="counts pupils by 1"]'),"scale-one follow-up missing");
      submit('2');assert(/Correct on the first try/.test(doc.getElementById('practice-feedback').textContent),"bar scale-one answer rejected");
      doc.getElementById('practice-next').click();assert(doc.querySelector('.bar-chart[aria-label*="Vertical"][aria-label*="counts pupils by 5"]'),"vertical scale-five follow-up missing");
      submit('５');doc.getElementById('practice-next').click();
      assert(/Correct on the first try: 2 \/ 3/.test(doc.querySelector('main').textContent),"bar first tries not separate");
    }finally{frame.remove();}
  });
  await check("P3 bar charts · Chinese practice, home link and PDF",async()=>{
    const frames=[];
    try{
      const practice=await shapeFrame('?lang=zh&p=3&view=practice&skill=bar3a');frames.push(practice);
      const doc=practice.contentDocument;
      assert(doc.documentElement.lang==='zh-HK' && doc.querySelector('h1').textContent==='練習閱讀棒形圖' && doc.getElementById('en').getAttribute('href').includes('bar3a'),"Chinese bar practice missing");
      doc.getElementById('practice-answer').value='4';doc.getElementById('practice-form').requestSubmit();assert(/找出題目指定的棒形/.test(doc.getElementById('practice-feedback').textContent),"Chinese bar hint missing");
      const home=await shapeFrame('?lang=en');frames.push(home);
      assert([...home.contentDocument.querySelectorAll('.home-actions a')].some(a=>a.textContent.includes('Practise bar charts') && a.href.includes('skill=bar3a')),"bar home link missing");
      const paper=await shapeFrame('?v=3&lang=zh&p=3&items=bar3a-0.bar3a-9&view=paper');frames.push(paper);
      paper.style.width='360px';assert(paper.contentDocument.documentElement.scrollWidth<=360,"bar phone paper overflows");
      const code=await paper.contentWindow.mathQuizPdf.paperCode(),blob=await paper.contentWindow.mathQuizPdf.generate();
      const raw=new TextDecoder('latin1').decode(await blob.arrayBuffer()),pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(/^P3-V3-[0-9A-F]{10}$/.test(code) && raw.startsWith('%PDF-') && raw.includes(code),"bar PDF or code missing");
      assert(raw.includes('/ToUnicode') && pages>=1 && pages<=2,"bar PDF text or A4 pages missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P3 mixed pack · fraction, capacity and chart on one paper",async()=>{
    const frames=[];
    try{
      const query='?v=3&lang=zh&p=3&items=frac3a-0.cup3a-3.bar3a-0';
      const paper=await shapeFrame(query+'&view=paper');frames.push(paper);
      const key=await shapeFrame(query+'&view=key');frames.push(key);
      assert(paper.contentDocument.querySelectorAll('fieldset').length===3 && paper.contentDocument.querySelector('.fraction-bar') && paper.contentDocument.querySelector('.measuring-cup') && paper.contentDocument.querySelector('.bar-chart'),"mixed P3 paper missing a family");
      assert(key.contentDocument.querySelectorAll('fieldset').length===3 && key.contentDocument.querySelectorAll('fieldset')[1].textContent.includes('250 mL') && key.contentDocument.querySelectorAll('fieldset')[2].textContent.includes('8 名學生'),"mixed P3 key missing worked answers");
      assert(paper.contentDocument.querySelector('.paper-code')?.textContent===key.contentDocument.querySelector('.paper-code')?.textContent,"mixed P3 paper and key codes differ");
      paper.style.width='360px';assert(paper.contentDocument.documentElement.scrollWidth<=360,"mixed P3 phone paper overflows");
      const blob=await paper.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder('latin1').decode(await blob.arrayBuffer()),pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(raw.startsWith('%PDF-') && raw.includes('/ToUnicode') && pages>=1 && pages<=3,"mixed P3 A4/PDF or selectable text missing");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P1 counting practice is linked from the home page",async()=>{
    const home=new URL("../?lang=en",location.href);
    home.searchParams.set("practiceLinkCheck",String(Date.now()));
    const response=await fetch(home);
    assert(response.ok,"home page unavailable");
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("home page did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.src=home;
        document.body.appendChild(frame);
      });
      const link=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise counting"));
      assert(link && link.href.includes("p=1") && link.href.includes("view=practice"),"home practice entry missing");
      const sequences=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise counting forwards"));
      assert(sequences && sequences.href.includes("skill=next1"),"home sequence entry missing");
      const addition=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.trim()==="Practise addition →");
      assert(addition && addition.href.includes("skill=storyadd1"),"home addition entry missing");
      const missingPart=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise missing parts"));
      assert(missingPart && missingPart.href.includes("skill=parts18a"),"home missing-part entry missing");
      const triangles=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise triangles"));
      assert(triangles && triangles.href.includes("skill=triangle1"),"home triangle entry missing");
      const perimeter=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise perimeter"));
      assert(perimeter && perimeter.href.includes("p=4") && perimeter.href.includes("skill=per1"),
        "home perimeter entry missing");
      const factors=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise factors"));
      assert(factors && factors.href.includes("p=4") && factors.href.includes("skill=factor1"),
        "home factor entry missing");
      const percentages=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise percentages"));
      assert(percentages && percentages.href.includes("p=6") && percentages.href.includes("skill=pct2"),
        "home percentage entry missing");
      const means=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise averages"));
      assert(means && means.href.includes("p=6") && means.href.includes("skill=mean1"),
        "home mean entry missing");
    }finally{frame.remove();}
  });
  async function checkPrintLayout(language,sheet) {
    const frame=document.createElement("iframe");
    frame.setAttribute("aria-hidden","true");
    frame.style.cssText="position:absolute;left:-10000px;top:0;width:176mm;height:269mm;border:0";
    try {
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("print view did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("print view failed to load"));};
        const url=new URL("../?v=4&lang="+language+"&p=6&sheet="+sheet,location.href);
        url.searchParams.set("layoutCheck",String(Date.now()));
        frame.src=url;
        document.body.appendChild(frame);
      });
      const doc=frame.contentDocument;
      assert(doc && doc.querySelector("main"),"print view did not render");
      await doc.fonts.ready;
      const printRules=[];
      let hasA4=false;
      for(const styleSheet of doc.styleSheets) {
        for(const rule of styleSheet.cssRules) {
          if(rule.type===frame.contentWindow.CSSRule.PAGE_RULE && /size:\s*a4/i.test(rule.cssText))hasA4=true;
          if(rule.type===frame.contentWindow.CSSRule.MEDIA_RULE && rule.conditionText.trim()==="print")
            printRules.push(...Array.from(rule.cssRules,inner=>inner.cssText));
        }
      }
      assert(hasA4 && printRules.length,"A4 print styles are missing");
      const printStyle=doc.createElement("style");
      printStyle.textContent=printRules.join("\n");
      doc.head.appendChild(printStyle);
      const fields=Array.from(doc.querySelectorAll("fieldset"));
      assert(fields.length===3,"expected three printed questions");
      assert(fields.map(field=>field.textContent.match(/6(?:N4|M4|D1)/)?.[0]).join(",")==="6N4,6M4,6D1",
        "printed curriculum labels changed");
      assert(frame.contentWindow.getComputedStyle(doc.querySelector(".print-tools")).display==="none",
        "print controls remain visible");
      const page=doc.documentElement;
      assert(page.scrollWidth<=page.clientWidth+1,"content exceeds A4 printable width");
      assert(page.scrollHeight<=page.clientHeight+1,"content exceeds one A4 printable page");
      const last=fields[fields.length-1].getBoundingClientRect();
      assert(last.bottom<=page.clientHeight+1,"last question is clipped");
      for(const field of fields) {
        const box=field.getBoundingClientRect();
        assert(box.left>=-1 && box.right<=page.clientWidth+1,"a question exceeds the printable width");
      }
    } finally {
      frame.remove();
    }
  }
  for(const language of ["en","zh"])for(const sheet of ["paper","key"])
    await check("P6 "+language+" "+sheet+" · A4 print layout",()=>checkPrintLayout(language,sheet));
  await check("P1 exit-ticket PDF downloads",async()=>{
    for(const language of ["en","zh"])for(const view of ["paper","key"]){
      const url=new URL("../papers/p1-exit-ticket-"+language+"-"+view+".pdf",location.href);
      const response=await fetch(url,{method:"HEAD"});
      assert(response.ok && response.headers.get("content-type")?.includes("application/pdf"),
        "PDF unavailable: "+language+" "+view);
    }
  });
  await check("On-demand PDF controls on edited custom sets",async()=>{
    for(const query of [
      "?v=3&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3&view=key",
      "?v=3&lang=zh&p=6&items=pct2-0.mean1-0&view=paper"
    ]) {
      const frame=document.createElement("iframe");
      frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
      try {
        await new Promise((resolve,reject)=>{
          const timer=setTimeout(()=>reject(new Error("custom print view did not load")),30000);
          frame.onload=()=>{clearTimeout(timer);resolve();};
          const url=new URL("../"+query,location.href);
          url.searchParams.set("pdfControlCheck",String(Date.now()));
          frame.src=url;
          document.body.appendChild(frame);
        });
        assert(frame.contentDocument.querySelector("#download-pdf"),"edited set has no PDF control");
        assert(typeof frame.contentWindow.mathQuizPdf?.generate==="function","PDF generator unavailable");
      } finally {
        frame.remove();
      }
    }
  });
  await check("Paper and key share a versioned identifying code",async()=>{
    const codes=[];
    const ids="count20a-12.next1-10";
    for(const query of [
      "?v=3&lang=en&p=1&items="+ids+"&view=paper",
      "?v=3&lang=zh&p=1&items="+ids+"&view=key",
      "?v=2&lang=en&p=1&items="+ids+"&view=key",
      "?v=3&lang=en&p=1&items=next1-10.count20a-12&view=paper"
    ]) {
      const frame=document.createElement("iframe");
      frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
      try {
        await new Promise((resolve,reject)=>{
          const timer=setTimeout(()=>reject(new Error("coded view did not load")),30000);
          frame.onload=()=>{clearTimeout(timer);resolve();};
          frame.onerror=()=>{clearTimeout(timer);reject(new Error("coded view failed to load"));};
          const url=new URL("../"+query,location.href);
          url.searchParams.set("paperCodeCheck",String(Date.now()));
          frame.src=url;
          document.body.appendChild(frame);
        });
        codes.push(await frame.contentWindow.mathQuizPdf.paperCode());
      } finally {
        frame.remove();
      }
    }
    assert(/^P1-V3-[0-9A-F]{10}$/.test(codes[0]),"invalid paper code format");
    assert(codes[0]===codes[1],"paper and key codes differ across languages");
    assert(codes[0]!==codes[2],"link version is absent from the code");
    assert(codes[0]!==codes[3],"question order is absent from the code");
  });
  await check("Browser-print paper and key show the shared code",async()=>{
    const cases=[
      ["?v=3&lang=en&p=1&items=count20a-12.next1-10&view=paper","P1-V3-"],
      ["?v=3&lang=zh&p=1&items=count20a-12.next1-10&view=key","P1-V3-"],
      ["?v=3&lang=en&p=4&items=per1-0.factor1-0&view=key","P4-V3-"],
      ["?v=3&lang=zh&p=6&items=pct2-0.mean1-0&view=paper","P6-V3-"]
    ];
    const codes=[];
    for(const [query,prefix] of cases) {
      const frame=document.createElement("iframe");
      frame.style.cssText="position:absolute;left:-10000px;top:0;width:176mm;height:269mm;border:0";
      try {
        await new Promise((resolve,reject)=>{
          const timer=setTimeout(()=>reject(new Error("print view did not load")),30000);
          frame.onload=()=>{clearTimeout(timer);resolve();};
          frame.onerror=()=>{clearTimeout(timer);reject(new Error("print view failed to load"));};
          const url=new URL("../"+query,location.href);
          url.searchParams.set("paperCodePrintCheck",String(Date.now()));
          frame.src=url;
          document.body.appendChild(frame);
        });
        const doc=frame.contentDocument;
        const code=await frame.contentWindow.mathQuizPdf.codeReady;
        const label=doc.querySelector("#paper-code");
        assert(code && code.startsWith(prefix) && label?.textContent.includes(code),"print code is missing");
        assert(label.closest("h2"),"print code is outside the paper heading");
        codes.push(code);
        await doc.fonts.ready;
        const rules=[];
        for(const sheet of doc.styleSheets)for(const rule of sheet.cssRules)
          if(rule.type===frame.contentWindow.CSSRule.MEDIA_RULE && rule.conditionText.trim()==="print")
            rules.push(...Array.from(rule.cssRules,inner=>inner.cssText));
        assert(rules.length,"print styles are missing");
        const style=doc.createElement("style");
        style.textContent=rules.join("\n");
        doc.head.appendChild(style);
        const box=label.getBoundingClientRect();
        assert(box.width>0 && box.left>=-1 && box.right<=doc.documentElement.clientWidth+1,
          "printed code is clipped horizontally");
        assert(frame.contentWindow.getComputedStyle(label).display!=="none","printed code is hidden");
        assert(frame.contentWindow.getComputedStyle(doc.querySelector(".print-tools")).display==="none",
          "print controls remain visible");
      } finally {
        frame.remove();
      }
    }
    assert(codes[0]===codes[1],"paper and key print different codes");
  });
  await check("Browser-print paper and key use numbered A4 pages",async()=>{
    const url=new URL("../quiz.css?v=7",location.href);
    url.searchParams.set("paginationCheck",String(Date.now()));
    const response=await fetch(url);
    assert(response.ok,"print stylesheet is unavailable");
    const sheet=new CSSStyleSheet();
    sheet.replaceSync(await response.text());
    const rules=Array.from(sheet.cssRules);
    const page=rules.find(rule=>rule.type===CSSRule.PAGE_RULE && rule.selectorText==="quiz-sheet");
    assert(page && /size:\s*a4/i.test(page.cssText),"numbered A4 page is missing");
    assert(/@bottom-right\s*\{[^}]*counter\(page\)[^}]*counter\(pages\)/i.test(page.cssText),
      "page and total counters are missing from the footer");
    assert(rules.some(rule=>rule.type===CSSRule.MEDIA_RULE && rule.conditionText.trim()==="print" &&
      Array.from(rule.cssRules).some(inner=>inner.selectorText==="body:has(.print-tools)" &&
        inner.style.page==="quiz-sheet")),"numbered pages are not scoped to print views");
  });
  await check("12-question mixed Chinese PDF · A4 selectable text",async()=>{
    const frame=document.createElement("iframe");
    frame.setAttribute("aria-hidden","true");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try {
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("mixed paper did not load")),30000);
        frame.onload=()=>{clearTimeout(timer);resolve();};
        frame.onerror=()=>{clearTimeout(timer);reject(new Error("mixed paper failed to load"));};
        const ids="count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3.add1-2.count20a-19.pictureadd1-70.parts18a-80.storyadd1-80.otherway1-10";
        const url=new URL("../?v=3&lang=zh&p=1&items="+ids+"&view=paper",location.href);
        url.searchParams.set("mixedPdfCheck",String(Date.now()));
        frame.src=url;
        document.body.appendChild(frame);
      });
      assert(frame.contentDocument.querySelectorAll("main fieldset").length===12,"mixed paper lost questions");
      const code=await frame.contentWindow.mathQuizPdf.paperCode();
      const blob=await frame.contentWindow.mathQuizPdf.generate();
      const bytes=new Uint8Array(await blob.arrayBuffer());
      const raw=new TextDecoder("latin1").decode(bytes);
      assert(raw.startsWith("%PDF-"),"mixed paper is not a PDF");
      const pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(pages>=3 && pages<=5,"mixed paper has an unexpected page count: "+pages);
      assert(raw.includes("/ToUnicode") && raw.includes("/FontFile2"),"mixed PDF lacks embedded selectable text");
      assert(raw.includes(code),"mixed PDF metadata lacks its paper code");
    } finally {
      frame.remove();
    }
  });
  await check("P5 fraction addition · twelve exact simplest answers",()=>{
    const family=families.find(f=>f.id==="fracadd5a");
    assert(family && family.count===12,"fraction family missing");
    for(let i=0;i<12;i++){
      const q=family.make(i),f=q.fractionAddition;
      assert(f.b!==f.d && f.a*f.d*f.den+f.c*f.b*f.den===f.n*f.b*f.d,"fraction sum is wrong");
      assert(f.n<=f.den && fractionAdditionAnswer(q.answer,f) && fractionAdditionAnswer(q.answer.map(String),f),"fraction answer rejected");
      assert(!fractionAdditionAnswer([f.n*2,f.den*2],f) && !fractionAdditionAnswer(["1.0",f.den],f),"unsimplified or decimal fraction accepted");
      assert(q.prompt[0] && q.prompt[1] && q.why[0] && q.why[1],"bilingual fraction text missing");
    }
    assert(decodeItems("fracadd5a-0",5).length===1 && !decodeItems("fracadd5a-0",3).length,"fraction link guard failed");
  });
  await check("P5 equations · twelve balanced whole-number answers",()=>{
    const family=families.find(f=>f.id==="equation5a");
    assert(family && family.count===12,"equation family missing");
    for(let i=0;i<12;i++){
      const q=family.make(i),e=q.simpleEquation;
      assert((e.subtract?e.x-e.b:e.x+e.b)===e.c && q.answer[0]===e.x,"equation answer is wrong");
      assert(simpleEquationAnswer(String(e.x),e.x) && simpleEquationAnswer(String(e.x).replace(/[0-9]/g,c=>"０１２３４５６７８９"[+c]),e.x),"equation answer rejected");
      assert(!simpleEquationAnswer(e.x+".0",e.x) && !simpleEquationAnswer("x = "+e.x,e.x),"equation format accepted");
      assert(q.prompt[0] && q.prompt[1] && q.why[0] && q.why[1],"bilingual equation text missing");
    }
    assert(decodeItems("equation5a-0",5).length===1 && !decodeItems("equation5a-0",3).length,"equation link guard failed");
  });
  await check("P5 mixed builder, pupil, key, practice and PDF",async()=>{
    const frames=[];
    try{
      const builder=await shapeFrame("?v=3&lang=en&p=5&view=build");frames.push(builder);
      assert(builder.contentDocument.querySelector('select[name="fracadd5a"]') && builder.contentDocument.querySelector('select[name="equation5a"]'),"P5 builder missing families");
      const query="?v=3&lang=zh&p=5&items=fracadd5a-0.equation5a-0";
      const pupil=await shapeFrame(query);frames.push(pupil);
      assert(pupil.contentDocument.querySelectorAll("fieldset").length===2,"P5 pupil quiz missing questions");
      const key=await shapeFrame(query+"&view=key");frames.push(key);
      assert(key.contentDocument.querySelector("fieldset").textContent.includes("3/4") && key.contentDocument.querySelectorAll("fieldset")[1].textContent.includes("x = 12"),"P5 key missing worked answers");
      const paper=await shapeFrame(query+"&view=paper");frames.push(paper);
      assert(paper.contentDocument.querySelectorAll("fieldset").length===2 && paper.contentDocument.querySelector(".paper-code").textContent===key.contentDocument.querySelector(".paper-code").textContent,"P5 paper/key mismatch");
      paper.style.width="360px";assert(paper.contentDocument.documentElement.scrollWidth<=360,"P5 phone paper overflows");
      for(const skill of ["fracadd5a","equation5a"]){
        const practice=await shapeFrame("?lang=en&p=5&view=practice&skill="+skill);frames.push(practice);
        const doc=practice.contentDocument,answer=doc.querySelector("#practice-answer-0");
        assert(answer && doc.querySelector("#practice-next"),skill+" practice missing");
        if(skill==="fracadd5a"){
          answer.value="6";doc.querySelector("#practice-answer-1").value="8";doc.getElementById("practice-form").requestSubmit();
          assert(/Reduce it to lowest terms/.test(doc.getElementById("practice-feedback").textContent),"fraction reduction hint missing");
          answer.value="3";doc.querySelector("#practice-answer-1").value="4";
        }else{
          answer.value="7";doc.getElementById("practice-form").requestSubmit();
          assert(/Subtract the same number/.test(doc.getElementById("practice-feedback").textContent),"equation inverse hint missing");
          answer.value="１２";
        }
        doc.getElementById("practice-form").requestSubmit();
        assert(!doc.getElementById("practice-next").hidden && /Correct after a hint/.test(doc.getElementById("practice-feedback").textContent),skill+" retry failed");
      }
      const blob=await paper.contentWindow.mathQuizPdf.generate();const raw=new TextDecoder("latin1").decode(await blob.arrayBuffer());
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && (raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,"P5 PDF lacks A4/selectable text");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P5 triangle areas · twelve perpendicular-base products",()=>{
    const family=families.find(f=>f.id==="triarea5a"),seen=new Set();
    assert(family && family.grade===5 && family.code==="5M1" && family.count===12,"triangle-area family missing");
    for(let i=0;i<12;i++){
      const q=family.make(i),v=q.triangleArea;
      assert(q.figure.kind==="triangleArea" && v.base*v.height/2===q.answer[0] && Number.isInteger(q.answer[0]),"triangle-area arithmetic disagrees");
      assert(q.prompt[0].includes("perpendicular height") && q.prompt[1].includes("垂直高") && q.why.every(s=>s.includes(String(q.answer[0]))),"triangle-area bilingual text missing");
      seen.add(v.base+","+v.height);
    }
    assert(seen.size===12 && measureAnswer(" ２０ ",20) && !measureAnswer("20 cm²",20) && !measureAnswer("20.0",20),"triangle-area marking rule failed");
    assert(decodeItems("triarea5a-0",5).length===1 && !decodeItems("triarea5a-0",3).length,"triangle-area link guard failed");
  });
  await check("P5 cuboid volumes · twelve three-dimension products",()=>{
    const family=families.find(f=>f.id==="volume5a"),seen=new Set();
    assert(family && family.grade===5 && family.code==="5M2" && family.count===12,"cuboid-volume family missing");
    for(let i=0;i<12;i++){
      const q=family.make(i),v=q.cuboidVolume;
      assert(q.figure.kind==="cuboidVolume" && v.length*v.width*v.height===q.answer[0],"cuboid-volume arithmetic disagrees");
      assert(q.prompt[0].includes("cuboid") && q.prompt[1].includes("長方體") && q.why.every(s=>s.includes(String(q.answer[0]))),"cuboid-volume bilingual text missing");
      seen.add([v.length,v.width,v.height].join(","));
    }
    assert(seen.size===12 && measureAnswer("２４",24) && !measureAnswer("24 cm³",24) && !measureAnswer("4×3×2",24),"volume marking rule failed");
    assert(decodeItems("volume5a-0",5).length===1 && !decodeItems("volume5a-0",3).length,"volume link guard failed");
  });
  await check("P5 area and volume · bilingual paper, key, practice and PDF",async()=>{
    const frames=[];let run=0;
    try{
      const open=async query=>{const f=await shapeFrame(query+"&regressionRun="+Date.now()+"-"+(++run));frames.push(f);return f.contentDocument;};
      const builder=await open("?v=3&lang=en&p=5&view=build");
      assert(builder.querySelector('select[name="triarea5a"]') && builder.querySelector('select[name="volume5a"]'),"P5 measure builder choices missing");
      const query="?v=3&lang=zh&p=5&items=triarea5a-0.volume5a-0";
      const pupil=await open(query);
      assert(pupil.querySelector(".triangle-area[aria-label*='垂直高']") && pupil.querySelector(".cuboid-volume[aria-label*='長方體']"),"accessible P5 diagrams missing");
      pupil.querySelector('input[name="q0f0"]').value="２０";pupil.querySelector('input[name="q1f0"]').value="２４";pupil.querySelector("form").requestSubmit();
      assert(/得分 2 \/ 2/.test(pupil.getElementById("status").textContent),"P5 measure full-width marking failed");
      const key=await open(query+"&view=key"),paper=await open(query+"&view=paper");
      assert(key.querySelectorAll("fieldset").length===2 && key.querySelector("fieldset").textContent.includes("20 平方厘米") && key.querySelectorAll("fieldset")[1].textContent.includes("24立方厘米"),"P5 worked key missing");
      assert(paper.querySelector(".triangle-area") && paper.querySelector(".cuboid-volume") && paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"P5 paper/diagram/code mismatch");
      const paperFrame=frames[frames.length-1];paperFrame.style.width="360px";
      assert(paper.documentElement.scrollWidth<=360,"P5 measure phone paper overflows");
      for(const [skill,wrong,answer,hint] of [["triarea5a","40","20","一半"],["volume5a","12","24","一層"]]){
        const doc=await open("?lang=zh&p=5&view=practice&skill="+skill),input=doc.getElementById("practice-answer");
        assert(input && doc.querySelector("svg.figure"),skill+" practice missing");
        input.value=wrong;doc.getElementById("practice-form").requestSubmit();
        assert(doc.getElementById("practice-feedback").textContent.includes(hint),skill+" targeted hint missing");
        input.value=answer;doc.getElementById("practice-form").requestSubmit();
        assert(!doc.getElementById("practice-next").hidden,skill+" retry failed");
      }
      const blob=await paperFrame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await blob.arrayBuffer());
      const pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && pages>=1 && pages<=2,"P5 measure PDF missing A4/selectable text");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P5 circle parts · nine radii, diameters and noncentral chords",()=>{
    const family=families.find(f=>f.id==="circle5a"),answers=new Set(),rotations=new Set();
    assert(family && family.grade===5 && family.code==="5S1" && family.count===9,"circle family metadata missing");
    for(let i=0;i<9;i++){
      const q=family.make(i),c=q.circleParts;
      assert(q.figure.kind==="circleParts" && c.radius===75 && c.centre.join(",")==="150,120","circle geometry changed at "+i);
      assert(q.choices.join("")==="ABC" && c.segments.map(s=>s.letter).join("")==="ABC","circle labels missing at "+i);
      assert(c.segments.map(s=>s.kind).sort().join(",")==="chord,diameter,radius","circle parts ambiguous at "+i);
      assert(c.segments.find(s=>s.kind==="radius").letter===q.answer[0],"radius answer mismatch at "+i);
      assert(q.prompt[0].includes("radius") && q.prompt[1].includes("半徑") && q.why.every(s=>s.includes(q.answer[0])),"bilingual circle text missing at "+i);
      answers.add(q.answer[0]);rotations.add(c.rotation);
    }
    assert(answers.size===3 && rotations.size===4,"circle answer positions or rotations lack variety");
    assert(decodeItems("circle5a-0",5).length===1 && !decodeItems("circle5a-0",4).length,"circle link or cross-grade guard failed");
  });
  await check("P5 circle parts · bilingual quiz, paper, key, practice and PDF",async()=>{
    const frames=[];let run=0;
    try{
      const open=async query=>{const f=await shapeFrame(query+"&regressionRun="+Date.now()+"-circle-"+(++run));frames.push(f);return f.contentDocument;};
      const builder=await open("?v=3&lang=en&p=5&view=build");
      assert(builder.querySelector('select[name="circle5a"]'),"P5 circle builder choice missing");
      const query="?v=3&lang=zh&p=5&items=circle5a-0";
      const pupil=await open(query),svg=pupil.querySelector("svg.circle-parts");
      assert(svg && svg.getAttribute("aria-label").includes("圓心") && !svg.getAttribute("aria-label").includes("A由"),"circle SVG access label missing or reveals answer");
      const parts=[...svg.querySelectorAll("g path")],point=s=>s.match(/M([\d.]+) ([\d.]+) L([\d.]+) ([\d.]+)/).slice(1).map(Number);
      assert(parts.length===3 && [...svg.querySelectorAll("g text")].map(t=>t.textContent).join("")==="ABC","circle drawing labels or segments missing");
      const d=parts.map(p=>point(p.getAttribute("d"))),dist=(x,y)=>(x-150)**2+(y-120)**2;
      assert(dist(d[0][0],d[0][1])===0 && dist(d[0][2],d[0][3])===75**2,"radius endpoints disagree");
      assert(dist(d[1][0],d[1][1])===75**2 && dist(d[1][2],d[1][3])===75**2 && (d[1][0]+d[1][2])/2===150 && (d[1][1]+d[1][3])/2===120,"diameter geometry disagrees");
      assert(dist(d[2][0],d[2][1])===75**2 && dist(d[2][2],d[2][3])===75**2 && ((d[2][0]+d[2][2])/2!==150 || (d[2][1]+d[2][3])/2!==120),"chord geometry disagrees");
      assert(pupil.querySelectorAll('input[type="radio"][name="q0"]').length===3,"circle radio choices missing");
      pupil.querySelector("form").requestSubmit();
      assert(pupil.getElementById("status").textContent.includes("請完成第 1 題") && pupil.activeElement===pupil.querySelector('input[type="radio"]'),"blank circle choice not requested or focused");
      pupil.querySelector('input[type="radio"][value="A"]').click();pupil.querySelector("form").requestSubmit();
      assert(pupil.getElementById("status").textContent.includes("得分 1 / 1"),"circle pupil marking failed");
      const key=await open(query+"&view=key"),paper=await open(query+"&view=paper");
      assert(key.querySelector("fieldset").textContent.includes("A由圓心O") && paper.querySelector("svg.circle-parts") && paper.querySelectorAll(".option").length===3,"circle paper or worked key missing");
      assert(paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"circle paper/key codes disagree");
      const paperFrame=frames[frames.length-1];paperFrame.style.width="360px";
      assert(paper.documentElement.scrollWidth<=360,"circle phone paper overflows");
      const practice=await open("?lang=zh&p=5&view=practice&skill=circle5a"),form=practice.getElementById("practice-form");
      assert(form && practice.querySelector("svg.circle-parts") && form.querySelectorAll('input[type="radio"]').length===3,"circle practice missing");
      form.querySelector('input[value="B"]').click();form.requestSubmit();
      assert(practice.getElementById("practice-feedback").textContent.includes("直徑"),"diameter hint missing");
      form.querySelector('input[value="A"]').click();form.requestSubmit();
      assert(!practice.getElementById("practice-next").hidden,"circle retry failed");
      practice.getElementById("practice-next").click();
      assert(practice.querySelector("svg.circle-parts") && practice.querySelector('input[value="C"]') && practice.getElementById("practice-next").hidden,"circle follow-up missing");
      const blob=await paperFrame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await blob.arrayBuffer());
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && (raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,"circle PDF lacks page or selectable text");
    }finally{frames.forEach(f=>f.remove());}
  });
  await check("P4 scaled bar charts · all values, scales and links",()=>{
    const family=families.find(f=>f.id==="bar4a"),scales=new Set(),orientations=new Set(),targets=new Set();
    assert(family && family.grade===4 && family.code==="4D1" && family.count===12,"P4 chart metadata missing");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),b=q.barChart;
      assert([10,50,100].includes(b.scale) && ["horizontal","vertical"].includes(b.orientation),"P4 chart scale or direction wrong: "+i);
      assert(b.steps.length===3 && b.steps.every(n=>Number.isInteger(n)&&n>=0&&n<=6) && b.target>=0&&b.target<3,"P4 chart step bounds wrong: "+i);
      assert(q.answer[0]===b.steps[b.target]*b.scale && q.figure.kind==="barChart" && q.figure.scale===b.scale,"P4 chart answer and picture differ: "+i);
      assert(q.prompt[0].includes(b.categories[b.target][0].toLowerCase()) && q.prompt[1].includes(b.categories[b.target][1]) && q.why.every(s=>s.includes(q.answer[0])),"P4 bilingual question or key missing: "+i);
      scales.add(b.scale);orientations.add(b.scale+":"+b.orientation);targets.add(b.target);
    }
    assert(scales.size===3 && orientations.size===6 && targets.size===3,"P4 chart variation incomplete");
    assert(decodeItems("bar4a-0",4).length===1 && !decodeItems("bar4a-0",3).length && measuringCupAnswer("５０",50) && !measuringCupAnswer("5",50) && !measuringCupAnswer("50 pupils",50),"P4 chart link or marking failed");
  });
  await check("P4 scaled bar charts · builder, practice and Chinese key",async()=>{
    const frames=[];
    try{
      const open=async query=>{const frame=await shapeFrame(query);frames.push(frame);return frame.contentDocument;};
      const builder=await open("?v=3&lang=en&p=4&view=build");
      assert(builder.querySelector('select[name="bar4a"]'),"P4 chart not in builder");
      const practice=await open("?lang=en&p=4&view=practice&skill=bar4a"),input=practice.getElementById("practice-answer");
      assert(practice.querySelector(".bar-chart") && practice.querySelector("h1").textContent.includes("scaled bar charts"),"P4 chart practice missing");
      input.value="5";practice.getElementById("practice-form").requestSubmit();
      assert(/Check what one axis step represents/.test(practice.getElementById("practice-feedback").textContent),"P4 chart scale hint missing");
      input.value="50";practice.getElementById("practice-form").requestSubmit();
      assert(/Correct after a hint/.test(practice.getElementById("practice-feedback").textContent),"P4 chart retry failed");
      practice.getElementById("practice-next").click();
      assert(practice.querySelector('.bar-chart[aria-label*="50"]'),"P4 scale-50 follow-up missing");
      const key=await open("?v=3&lang=zh&p=4&items=bar4a-0.bar4a-8&view=key");
      assert(key.querySelectorAll("fieldset").length===2 && key.querySelector("fieldset").textContent.includes("50 名學生") && key.querySelectorAll("fieldset")[1].textContent.includes("600 名學生"),"P4 Chinese key missing");
      const paper=await open("?v=3&lang=zh&p=4&items=bar4a-0.bar4a-8&view=paper");
      assert(paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"P4 paper/key codes differ");
      frames[frames.length-1].style.width="360px";
      assert(paper.documentElement.scrollWidth<=360,"P4 chart phone paper overflows");
      const blob=await frames[frames.length-1].contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await blob.arrayBuffer());
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && (raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,"P4 chart PDF lacks a page or selectable text");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P1 remaining families · practice hints, marking and follow-ups",async()=>{
    const frames=[];
    try{
      for(const [skill,wrong,correct,hint] of [
        ["add1","1","2","Add both bead groups"],
        ["pictureadd1","7","4 + 3 = 7","Count the red and blue groups"],
        ["otherway1",["8","1"],["2","7"],"Swapping the pictured groups"]
      ]){
        const frame=await shapeFrame("?lang=en&p=1&view=practice&skill="+skill);frames.push(frame);
        const doc=frame.contentDocument,form=doc.getElementById("practice-form"),inputs=[...form.querySelectorAll("input")];
        assert(inputs.length===(skill==="otherway1"?2:1) && doc.querySelector("h1") && doc.getElementById("zh").href.includes(skill),skill+" practice route missing");
        form.requestSubmit();assert(/Complete every answer box/.test(doc.getElementById("practice-feedback").textContent),skill+" blank answer consumed an attempt");
        (Array.isArray(wrong)?wrong:[wrong]).forEach((value,i)=>inputs[i].value=value);
        form.requestSubmit();assert(doc.getElementById("practice-feedback").textContent.includes(hint),skill+" targeted hint missing");
        (Array.isArray(correct)?correct:[correct]).forEach((value,i)=>inputs[i].value=value);
        form.requestSubmit();assert(/Correct after a hint/.test(doc.getElementById("practice-feedback").textContent) && !doc.getElementById("practice-next").hidden,skill+" retry or worked step failed");
        doc.getElementById("practice-next").click();
        assert(doc.querySelector(".practice-progress").textContent.includes("2 of 3") && doc.getElementById("practice-next").hidden,skill+" distinct follow-up missing");
      }
      const chinese=await shapeFrame("?lang=zh&p=1&view=practice&skill=otherway1");frames.push(chinese);
      assert(chinese.contentDocument.documentElement.lang==="zh-HK" && chinese.contentDocument.querySelector("h1").textContent.includes("另一種組合方法"),"Chinese other-way practice missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P4 missing side · twelve inverse perimeter cases and answer rule",()=>{
    const family=families.find(f=>f.id==="permissing4a"),hidden=new Set(),answers=new Set();
    assert(family && family.grade===4 && family.code==="4M1" && family.count===12,"missing-side family metadata wrong");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),s=q.missingSide;
      assert(s.length>s.width && s.perimeter===2*(s.length+s.width),"perimeter or dimensions wrong: "+i);
      assert(s.known===(s.missing==="width"?s.length:s.width),"known side mismatch: "+i);
      assert(q.answer[0]===s.perimeter/2-s.known && q.answer[0]===(s.missing==="width"?s.width:s.length),"missing-side answer wrong: "+i);
      assert(q.figure.kind==="missingSide" && q.figure.missing===s.missing && q.prompt.every(v=>v.includes(String(s.perimeter)) && v.includes(String(s.known))) && q.why.every(v=>v.includes(String(q.answer[0]))),"diagram or bilingual record wrong: "+i);
      hidden.add(s.missing);answers.add(q.answer[0]);
    }
    assert(hidden.size===2 && answers.size>=6,"missing-side variation too narrow");
    assert(decodeItems("permissing4a-0",4).length===1 && !decodeItems("permissing4a-0",3).length,"missing-side link scope wrong");
    assert(measureAnswer("５",5) && measureAnswer(" 5 ",5) && !measureAnswer("5.0",5) && !measureAnswer("10/2",5) && !measureAnswer("5 cm",5),"missing-side numeral policy wrong");
  });
  await check("P4 missing side · builder, bilingual paper/key and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const frame=await shapeFrame(query);frames.push(frame);return frame.contentDocument;};
      const builder=await open("?v=3&lang=en&p=4&view=build");
      assert(builder.querySelector('select[name="permissing4a"]'),"missing-side builder family absent");
      const pupil=await open("?v=3&lang=en&p=4&items=permissing4a-0");
      pupil.querySelector('form').requestSubmit();assert(/Please complete question 1/.test(pupil.getElementById('status').textContent),"missing-side blank answer accepted");
      pupil.querySelector('input[name="q0f0"]').value="5.0";pupil.querySelector('form').requestSubmit();assert(/Score 0 \/ 1/.test(pupil.getElementById('status').textContent),"missing-side decimal scored");
      const correct=await open("?v=3&lang=en&p=4&items=permissing4a-0");correct.querySelector('input[name="q0f0"]').value="５";correct.querySelector('form').requestSubmit();assert(/Score 1 \/ 1/.test(correct.getElementById('status').textContent),"missing-side full-width numeral rejected");
      const paper=await open("?v=3&lang=zh&p=4&items=permissing4a-0.permissing4a-1&view=paper");
      const key=await open("?v=3&lang=zh&p=4&items=permissing4a-0.permissing4a-1&view=key");
      assert(paper.querySelectorAll("svg.missing-side").length===2 && paper.querySelectorAll("fieldset").length===2,"Chinese missing-side paper absent");
      assert(key.querySelector(".paper-code").textContent===paper.querySelector(".paper-code").textContent && key.body.textContent.includes("46 ÷ 2") && key.body.textContent.includes("5厘米"),"Chinese missing-side key or code wrong");
      frames[frames.length-2].style.width="360px";assert(paper.documentElement.scrollWidth<=360,"missing-side phone paper overflows");
      const pdf=await frames[frames.length-2].contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await pdf.arrayBuffer());
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && (raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,"missing-side Chinese PDF lacks a page or selectable text");
      const practice=await open("?lang=en&p=4&view=practice&skill=permissing4a"),input=practice.getElementById("practice-answer"),form=practice.getElementById("practice-form");
      assert(practice.querySelector("svg.missing-side") && form && practice.getElementById("zh").href.includes("permissing4a"),"missing-side practice route absent");
      input.value="23";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("subtract the known side"),"half-perimeter hint missing");
      input.value="5";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("Correct after a hint") && !practice.getElementById("practice-next").hidden,"missing-side retry failed");
      practice.getElementById("practice-next").click();assert(practice.querySelector(".practice-progress").textContent.includes("2 of 3") && practice.querySelector("svg.missing-side").getAttribute("aria-label").includes("short side"),"hidden-long follow-up missing");
      const zh=await open("?lang=zh&p=4&view=practice&skill=permissing4a");assert(zh.querySelector("h1").textContent.includes("未知邊長"),"Chinese missing-side practice missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P4 factor pairs · twelve exact products and numeral rule",()=>{
    const family=families.find(f=>f.id==="factorpair4a"),targets=new Set(),pairs=new Set();
    assert(family && family.grade===4 && family.code==="4N3" && family.count===12,"factor-pair family metadata wrong");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),p=q.factorPair;
      assert(p.target>0 && p.target<=100 && p.factor>0 && Number.isInteger(p.other) && p.factor*p.other===p.target,"factor pair not exact: "+i);
      assert(q.inlineAnswer && q.answer[0]===p.other && q.prompt.every(s=>s.includes("___") && s.includes(String(p.target)) && s.includes(String(p.factor))) && q.why.every(s=>s.includes(String(p.other))),"factor-pair prompt or key wrong: "+i);
      targets.add(p.target);pairs.add(p.factor+":"+p.other);
    }
    assert(targets.size===12 && pairs.size===12 && family.make(1).factorPair.factor===family.make(1).factorPair.other && family.make(10).factorPair.factor===1 && family.make(11).factorPair.other===1,"factor-pair cases lack square or unity variation");
    assert(decodeItems("factorpair4a-0",4).length===1 && !decodeItems("factorpair4a-0",3).length,"factor-pair share link scope wrong");
    assert(measureAnswer("４",4) && !measureAnswer("4.0",4) && !measureAnswer("8/2",4) && !measureAnswer("4 cm",4),"factor-pair numeral rule wrong");
  });
  await check("P4 factor pairs · builder, pupil, Chinese paper/key, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const frame=await shapeFrame(query);frames.push(frame);return frame.contentDocument;};
      const builder=await open("?v=3&lang=en&p=4&view=build");assert(builder.querySelector('select[name="factorpair4a"]'),"factor-pair builder family missing");
      const pupil=await open("?v=3&lang=en&p=4&items=factorpair4a-0");
      assert(pupil.querySelector(".inline-answer") && pupil.querySelector(".prompt").textContent.includes("3 ×"),"factor-pair pupil item missing");
      pupil.querySelector("form").requestSubmit();assert(/Please complete question 1/.test(pupil.getElementById("status").textContent),"factor-pair blank accepted");
      pupil.querySelector(".inline-answer").value="4.0";pupil.querySelector("form").requestSubmit();assert(/Score 0 \/ 1/.test(pupil.getElementById("status").textContent),"factor-pair decimal scored");
      const correct=await open("?v=3&lang=en&p=4&items=factorpair4a-0");correct.querySelector(".inline-answer").value="４";correct.querySelector("form").requestSubmit();assert(/Score 1 \/ 1/.test(correct.getElementById("status").textContent),"factor-pair full-width answer rejected");
      const paper=await open("?v=3&lang=zh&p=4&items=factorpair4a-0.factorpair4a-1&view=paper"),paperFrame=frames[frames.length-1];
      const key=await open("?v=3&lang=zh&p=4&items=factorpair4a-0.factorpair4a-1&view=key");
      assert(paper.querySelectorAll(".inline-blank").length===2 && key.querySelectorAll(".inline-solution").length===2 && key.body.textContent.includes("沒有餘數"),"Chinese paper/key factor pair missing");
      assert(paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"factor-pair paper/key code differs");
      paperFrame.style.width="360px";assert(paper.documentElement.scrollWidth<=360,"factor-pair phone paper overflows");
      const pdf=await paperFrame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await pdf.arrayBuffer());assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode"),"factor-pair PDF lacks text layer");
      const practice=await open("?lang=en&p=4&view=practice&skill=factorpair4a"),input=practice.getElementById("practice-answer"),form=practice.getElementById("practice-form");
      assert(input && practice.getElementById("zh").href.includes("factorpair4a"),"factor-pair practice route missing");
      input.value="9";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("subtraction"),"factor-pair misconception hint missing");
      input.value="4";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("Correct after a hint") && !practice.getElementById("practice-next").hidden,"factor-pair retry failed");
      practice.getElementById("practice-next").click();assert(practice.querySelector(".practice-progress").textContent.includes("2 of 3") && practice.querySelector("legend").textContent.includes("4 ×"),"factor-pair square follow-up missing");
      const zh=await open("?lang=zh&p=4&view=practice&skill=factorpair4a");assert(zh.querySelector("h1").textContent.includes("因數配對"),"Chinese factor-pair practice missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P5 purchase stories · twelve direct equations and answer boundaries",()=>{
    const family=families.find(f=>f.id==="purchasestory5a"),seen=new Set();
    assert(family && family.grade===5 && family.code==="5A2" && family.count===12,"purchase family metadata wrong");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),s=q.purchaseEquation;
      assert(s && s.b>0 && s.c>0 && s.x>0 && s.subtract===(i>=6),"purchase amounts or operation wrong: "+i);
      assert((s.subtract?s.x-s.b:s.x+s.b)===s.c && q.answer[0]===`x ${s.subtract?"−":"+"} ${s.b} = ${s.c}`,"purchase equation disagrees with story: "+i);
      assert(q.prompt[0].includes(String(s.b)) && q.prompt[0].includes(String(s.c)) && q.prompt[1].includes(String(s.b)) && q.prompt[1].includes(String(s.c)) && q.why.every(v=>v.includes(String(s.x))),"bilingual purchase prompt or check wrong: "+i);
      assert(purchaseEquationAnswer(q.answer[0],s) && purchaseEquationAnswer(`${s.c} = x ${s.subtract?"−":"+"} ${s.b}`,s),"valid equation rejected: "+i);
      seen.add(q.answer[0]);
    }
    assert(seen.size===12 && decodeItems("purchasestory5a-0",5).length===1 && !decodeItems("purchasestory5a-0",4).length,"purchase variation or share link wrong");
    const add=family.make(0).purchaseEquation,sub=family.make(6).purchaseEquation;
    assert(purchaseEquationAnswer("ｘ＋７＝１９",add) && purchaseEquationAnswer("7+x=19",add),"equivalent addition rejected");
    for(const wrong of ["x=19-7","x-7=19","x+7=20","x+7","x+07=19","12+7=19"])
      assert(!purchaseEquationAnswer(wrong,add),"invalid equation accepted: "+wrong);
    assert(purchaseEquationAnswer(`x-${sub.b}=${sub.c}`,sub) && !purchaseEquationAnswer(`x=${sub.b}+${sub.c}`,sub) && !purchaseEquationAnswer(`${sub.b}-x=${sub.c}`,sub),"subtraction boundary wrong");
  });
  await check("P5 purchase stories · builder, marking, paper, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const frame=await shapeFrame(query);frames.push(frame);return frame.contentDocument;};
      const builder=await open("?v=3&lang=en&p=5&view=build");
      assert(builder.querySelector('select[name="purchasestory5a"]'),"purchase family missing from builder");
      const blank=await open("?v=3&lang=en&p=5&items=purchasestory5a-0");
      blank.querySelector("form").requestSubmit();assert(blank.getElementById("status").textContent.includes("Please complete question 1"),"blank purchase equation accepted");
      blank.querySelector('input[name="q0f0"]').value="x=19-7";blank.querySelector("form").requestSubmit();assert(blank.getElementById("status").textContent.includes("Score 0 / 1"),"solved form scored");
      const correct=await open("?v=3&lang=en&p=5&items=purchasestory5a-0");correct.querySelector('input[name="q0f0"]').value="ｘ＋７＝１９";correct.querySelector("form").requestSubmit();assert(correct.getElementById("status").textContent.includes("Score 1 / 1"),"purchase full-width equation rejected");
      const paper=await open("?v=3&lang=zh&p=5&items=purchasestory5a-0.purchasestory5a-6&view=paper"),paperFrame=frames[frames.length-1];
      const key=await open("?v=3&lang=zh&p=5&items=purchasestory5a-0.purchasestory5a-6&view=key");
      assert(paper.querySelectorAll(".equation-space").length===2 && key.body.textContent.includes("x + 7 = 19") && key.body.textContent.includes("x − 8 = 15"),"Chinese purchase paper or key missing");
      assert(paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"purchase paper/key code mismatch");
      paperFrame.style.width="360px";assert(paper.documentElement.scrollWidth<=360,"purchase phone paper overflows");
      const pdf=await paperFrame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await pdf.arrayBuffer());
      assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode") && (raw.match(/\/Type\s*\/Page\b/g)||[]).length>=1,"purchase Chinese PDF lacks page or text layer");
      const practice=await open("?lang=en&p=5&view=practice&skill=purchasestory5a"),input=practice.getElementById("practice-answer"),form=practice.getElementById("practice-form");
      assert(input && practice.getElementById("zh").href.includes("purchasestory5a"),"purchase practice route missing");
      input.value="x=12";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("calculates x"),"purchase modelling hint missing");
      input.value="x+7=19";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("Correct after a hint") && !practice.getElementById("practice-next").hidden,"purchase practice retry failed");
      practice.getElementById("practice-next").click();assert(practice.querySelector(".practice-progress").textContent.includes("2 of 3") && practice.querySelector("legend").textContent.includes("before buying"),"purchase subtraction follow-up missing");
      const zh=await open("?lang=zh&p=5&view=practice&skill=purchasestory5a");assert(zh.querySelector("h1").textContent.includes("購物方程"),"Chinese purchase practice missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P6 speed · twelve minute conversions and exact speeds",()=>{
    const family=families.find(f=>f.id==="speed6a"),pairs=new Set(),times=new Set();
    assert(family && family.grade===6 && family.code==="6M4" && family.count===12,"speed family metadata wrong");
    for(let i=0;i<family.count;i++){
      const q=family.make(i),s=q.speedTime;
      assert(s && s.minutes>0 && s.minutes!==60 && s.hours===s.minutes/60 && Number.isInteger(s.speed) && s.speed===s.distance/s.hours,"speed arithmetic wrong: "+i);
      assert(q.answer[0]===s.speed && q.fields[0][0]==="km/h" && q.prompt.every(x=>x.includes(String(s.minutes)) && x.includes(String(s.distance))) && q.why.every(x=>x.includes(String(s.hours)) && x.includes(String(s.speed))),"speed wording or unit wrong: "+i);
      pairs.add(s.minutes+":"+s.distance);times.add(s.minutes);
    }
    assert(pairs.size===12 && times.has(15) && times.has(180) && decodeItems("speed6a-0",6).length===1 && !decodeItems("speed6a-0",5).length,"speed boundaries or link wrong");
    assert(measureAnswer("４８",48) && !measureAnswer("48.0",48) && !measureAnswer("48 km/h",48) && !measureAnswer("24/0.5",48),"speed numeral policy wrong");
  });
  await check("P6 speed · builder, marking, paper, PDF and practice",async()=>{
    const frames=[];
    try{
      const open=async query=>{const frame=await shapeFrame(query);frames.push(frame);return frame.contentDocument;};
      const builder=await open("?v=3&lang=en&p=6&view=build");assert(builder.querySelector('select[name="speed6a"]'),"speed builder family missing");
      const blank=await open("?v=3&lang=en&p=6&items=speed6a-0");blank.querySelector("form").requestSubmit();assert(blank.getElementById("status").textContent.includes("Please complete question 1"),"speed blank accepted");
      blank.querySelector('input[name="q0f0"]').value="48.0";blank.querySelector("form").requestSubmit();assert(blank.getElementById("status").textContent.includes("Score 0 / 1"),"speed decimal scored");
      const correct=await open("?v=3&lang=en&p=6&items=speed6a-0");correct.querySelector('input[name="q0f0"]').value="４８";correct.querySelector("form").requestSubmit();assert(correct.getElementById("status").textContent.includes("Score 1 / 1"),"speed full-width answer rejected");
      const paper=await open("?v=3&lang=zh&p=6&items=speed6a-0.speed6a-2&view=paper"),paperFrame=frames[frames.length-1];
      const key=await open("?v=3&lang=zh&p=6&items=speed6a-0.speed6a-2&view=key");
      assert(paper.querySelectorAll("fieldset").length===2 && paper.body.textContent.includes("公里／小時") && key.body.textContent.includes("30 ÷ 60 = 0.5") && key.body.textContent.includes("90 ÷ 60 = 1.5"),"Chinese speed paper/key missing");
      assert(paper.querySelector(".paper-code").textContent===key.querySelector(".paper-code").textContent,"speed paper/key code mismatch");
      paperFrame.style.width="360px";assert(paper.documentElement.scrollWidth<=360,"speed phone paper overflows");
      const pdf=await paperFrame.contentWindow.mathQuizPdf.generate(),raw=new TextDecoder("latin1").decode(await pdf.arrayBuffer());assert(raw.startsWith("%PDF-") && raw.includes("/ToUnicode"),"speed Chinese PDF lacks selectable text");
      const practice=await open("?lang=en&p=6&view=practice&skill=speed6a"),input=practice.getElementById("practice-answer"),form=practice.getElementById("practice-form");
      assert(input && practice.getElementById("zh").href.includes("speed6a"),"speed practice route missing");
      input.value="0.8";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("divides by minutes"),"speed conversion hint missing");
      input.value="48";form.requestSubmit();assert(practice.getElementById("practice-feedback").textContent.includes("Correct after a hint") && !practice.getElementById("practice-next").hidden,"speed retry failed");
      practice.getElementById("practice-next").click();assert(practice.querySelector(".practice-progress").textContent.includes("2 of 3") && practice.querySelector("legend").textContent.includes("90 minutes"),"speed follow-up missing");
      const zh=await open("?lang=zh&p=6&view=practice&skill=speed6a");assert(zh.querySelector("h1").textContent.includes("速率"),"Chinese speed practice missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("Coverage page · live counts, planned work and home link",async()=>{
    const frames=[];
    try{
      const home=await shapeFrame("?lang=en&coverageCheck="+Date.now());frames.push(home);
      assert([...home.contentDocument.querySelectorAll("a")].some(a=>a.href.includes("coverage.html?lang=en")),"coverage link missing from home");
      const page=await shapeFrame("coverage.html?lang=en&coverageCheck="+Date.now());frames.push(page);
      const doc=page.contentDocument;
      assert(doc.querySelectorAll("section.card").length===6 && doc.querySelectorAll("section.card li a").length===59,"grade coverage counts wrong");
      assert(doc.querySelector('section.card a[href*="p1-length-distance-i.html?lang=en"]'),"P1 practical activity link missing");
      assert(doc.querySelector('section.card a[href*="p1-length-distance-ii.html?lang=en"]'),"P1 centimetre activity link missing");
      for(const file of ['p1-early-number-review','p1-number-sense-review','p1-addition-subtraction-review','p1-money','p1-time','p1-length-distance-i','p1-length-distance-ii','p1-3d-shapes','p1-2d-shapes','p1-directions','p1-inquiry'])assert(doc.querySelector('a[href*="'+file+'.html?lang=en"]'),'missing P1 unit resource '+file);
      assert(doc.body.textContent.includes("Planned example") && doc.body.textContent.includes("3 units touched"),"live/planned distinction missing");
      assert([...doc.querySelectorAll("section.card li a")].some(a=>a.href.includes("bar4a-0")),"P4 scaled chart missing from coverage");
      const zh=await shapeFrame("coverage.html?lang=zh&coverageCheck="+Date.now());frames.push(zh);
      assert(zh.contentDocument.documentElement.lang==="zh-HK" && zh.contentDocument.querySelector("h1").textContent.includes("各年級") && zh.contentDocument.querySelector("section.card h2").textContent==="小一" && !zh.contentDocument.querySelector("section.card").textContent.includes("identify"),"Chinese coverage missing or untranslated");
      const activity=await shapeFrame("activities/p1-length-distance-i.html?lang=en");frames.push(activity);
      assert(!activity.contentDocument.getElementById('en').hidden && activity.contentDocument.getElementById('zh').hidden && activity.contentDocument.querySelector('#en .key'),"English practical activity missing");
      const activityZh=await shapeFrame("activities/p1-length-distance-i.html?lang=zh");frames.push(activityZh);
      assert(activityZh.contentDocument.documentElement.lang==='zh-HK' && activityZh.contentDocument.getElementById('en').hidden && !activityZh.contentDocument.getElementById('zh').hidden && activityZh.contentDocument.querySelector('#zh .key'),"Chinese practical activity missing");
      const cmActivity=await shapeFrame("activities/p1-length-distance-ii.html?lang=en");frames.push(cmActivity);
      assert(!cmActivity.contentDocument.getElementById('en').hidden && cmActivity.contentDocument.getElementById('zh').hidden && cmActivity.contentDocument.querySelector('#en .key'),"English centimetre activity missing");
      const cmActivityZh=await shapeFrame("activities/p1-length-distance-ii.html?lang=zh");frames.push(cmActivityZh);
      assert(cmActivityZh.contentDocument.documentElement.lang==='zh-HK' && cmActivityZh.contentDocument.getElementById('en').hidden && !cmActivityZh.contentDocument.getElementById('zh').hidden && cmActivityZh.contentDocument.querySelector('#zh .key'),"Chinese centimetre activity missing");
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P1 subtraction-check routes and bilingual teacher activities",async()=>{
    const frames=[];
    try{
      for(const language of ['en','zh']){
        const frame=await shapeFrame('?lang='+language+'&p=1&view=practice&skill=checksub1a');frames.push(frame);
        const doc=frame.contentDocument,radios=[...doc.querySelectorAll('input[type="radio"]')];
        assert(radios.length===3,'check practice needs three choices');
        radios.find(r=>r.value!=='34 + 24 = 58').click();
        doc.querySelector('button[type="submit"]').click();
        assert(doc.getElementById('practice-feedback').textContent.includes(language==='en'?'difference':'差'),'targeted inverse hint absent');
        radios.find(r=>r.value==='34 + 24 = 58').click();doc.querySelector('button[type="submit"]').click();
        assert(!doc.getElementById('practice-next').hidden && radios.every(r=>r.disabled),'retry state incorrect');
        for(const file of ['p1-numbers-oral','p1-addition-subtraction-review']){
          const activity=await shapeFrame('activities/'+file+'.html?lang='+language);frames.push(activity);
          const d=activity.contentDocument;
          assert(d.documentElement.lang===(language==='zh'?'zh-HK':'en'),'activity document language');
          assert(!d.getElementById(language).hidden && d.getElementById(language==='en'?'zh':'en').hidden,'activity language visibility');
        }
      }
    }finally{frames.forEach(frame=>frame.remove());}
  });
  await check("P1 teacher activity routes, keys and phone layout",async()=>{
    const frames=[];
    try{
      for(const file of ['p1-early-number-review','p1-time','p1-length-distance-i','p1-length-distance-ii','p1-2d-shapes','p1-3d-shapes','p1-directions','p1-inquiry'])for(const language of ['en','zh']){
        const frame=await shapeFrame('activities/'+file+'.html?lang='+language);frames.push(frame);
        const d=frame.contentDocument,w=frame.contentWindow,section=d.getElementById(language);
        assert(section && !section.hidden && d.getElementById(language==='en'?'zh':'en').hidden,'activity language');
        const keys=[...d.querySelectorAll('.key')],button=d.getElementById('key-toggle');
        assert(keys.length===2 && keys.every(k=>k.hidden),'teacher key leaks by default');
        button.click();assert(keys.every(k=>!k.hidden) && button.getAttribute('aria-expanded')==='true','key reveal');
        button.click();assert(keys.every(k=>k.hidden) && button.getAttribute('aria-expanded')==='false','key re-hide');
        frame.style.width='360px';await new Promise(r=>setTimeout(r,80));
        assert(d.documentElement.scrollWidth<=d.documentElement.clientWidth+1,file+' phone overflow');
        button.click();await new Promise(r=>setTimeout(r,80));
        assert(d.documentElement.scrollWidth<=d.documentElement.clientWidth+1,file+' phone key overflow');
        button.click();
        if(file==='p1-time'){
          assert(section.querySelectorAll('.clock svg').length===4,'four clocks missing');
          assert(section.querySelectorAll('.calendar tbody td').length>=30,'calendar missing');
          assert(w.getComputedStyle(section.querySelector('.clocks')).display==='grid','phone clocks not two-column');
        }
        const keyed=await shapeFrame('activities/'+file+'.html?lang='+language+'&key=1');frames.push(keyed);
        assert([...keyed.contentDocument.querySelectorAll('.key')].every(k=>!k.hidden),'direct key route');
      }
    }finally{frames.forEach(f=>f.remove())}
  });
  await check("Practice catalogue · 59 distinct live home links",async()=>{
    const frame=await shapeFrame("?lang=en&regressionRun="+Date.now()+"-practice-catalogue");
    try{
      const links=[...frame.contentDocument.querySelectorAll(".home-actions .home-feature:last-child .home-links a")];
      assert(links.length===59 && new Set(links.map(a=>a.href)).size===59,"practice links missing or repeated");
      for(const link of links){
        const url=new URL(link.href),grade=Number(url.searchParams.get("p")),skill=url.searchParams.get("skill");
        assert(url.searchParams.get("view")==="practice" && (skill?families.some(f=>f.id===skill && f.grade===grade && !f.retired):grade===1),"home practice route lacks a live family: "+link.href);
      }
    }finally{frame.remove();}
  });
  window.regressionResult = {passed,failed};
  document.documentElement.dataset.result = failed?"fail":"pass";
  document.title = (failed?"FAIL":"PASS")+" · MathQuiz regression checks";
})();


