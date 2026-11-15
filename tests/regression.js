// Baseline from released v1 questions, 352 legacy variants, and corrected pct2 variants.
// An intentional change to a released variant needs a new ID; do not refresh a digest
// merely to make this page green. Review the old and new mathematics first.
(async function () {
  "use strict";
  const expectedFixedV1 = "c7fb36d698138938a2eaa643d51ccc6aab3db1d3b2f90ad1fe8e4331a263e5ff";
  const expectedFamilies = [
    ["add1",1,7,"a11713e8ba9b9b0435cbadc2269edd2f3adc56ef876c853426a998bf56336018"],
    ["next1",1,12,"03c40866a510fc3f2a61da716663cde4405c765d7bd079d9c2eb0c2c3aab60a0"],
    ["count20a",1,20,"4ec80ce4e7b1a331f37a371df100aa411bbd7e50280640141afcc29765086979"],
    ["parts18a",1,81,"c9599857137bda00c5d9787987b271b635cfca7838e45de16aae0b90196b2b2c"],
    ["pictureadd1",1,81,"ad278ece042dd8d895f0017c53f5aca5de739ac016e87b770cfa0f3ee212790e"],
    ["storyadd1",1,81,"45e4794db6348c1c40fd25877b8ed1123e4ac700537bf609a79e71f7c7795a60"],
    ["otherway1",1,11,"b825d8ff967dfbecef192220635f6b5487270afa9abc8e84838eed42200886e5"],
    ["per1",4,16,"d4ea48975699cce78756be1f7d8b62364d0e1c1534b3d77dae1696ffb71f4605"],
    ["factor1",4,12,"9e9a57b5731a52b4fd6bc7f36acd725669d22f690b6aef6df0692a3001c84bd0"],
    ["pct1",6,15,"b44b70e6ead240f97995e1e49c3d8149b19dc16a4646c9f3488366803b068efa"],
    ["pct2",6,15,"ba21d27c40ec9c4406e8bccb7cc887ac52bab3a994080c44f3eae22168948a95"],
    ["mean1",6,16,"b36e21806e2994332fb4ee7161529652dfbab4d61db021619d2314dba34071d5"]
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
    assert(expectedFamilies.reduce((n,f)=>n+f[2],0)===367,"fixture count changed");
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
  await check("P6 percentage family succession",()=>{
    const legacy=families.find(f=>f.id==="pct1"),current=families.find(f=>f.id==="pct2");
    assert(legacy.retired && legacy.code==="6N3" && !current.retired && current.code==="6N4","P6 family labels changed");
    assert(families.filter(f=>f.grade===6 && !f.retired).map(f=>f.id).join(",")==="pct2,mean1","new P6 builder selection changed");
    for(let i=0;i<15;i++)assert(stable(legacy.make(i))===stable(current.make(i)),"percentage mathematics changed at "+i);
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
        const timer=setTimeout(()=>reject(new Error("practice view did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("Chinese practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("sequence practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("Chinese sequence practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("addition practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("Chinese addition practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("missing-part practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("Chinese missing-part practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("perimeter practice did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("Chinese perimeter practice did not load")),10000);
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
  await check("P1 counting practice is linked from the home page",async()=>{
    const home=new URL("../?lang=en",location.href);
    home.searchParams.set("practiceLinkCheck",String(Date.now()));
    const response=await fetch(home);
    assert(response.ok,"home page unavailable");
    const frame=document.createElement("iframe");
    frame.style.cssText="position:absolute;left:-10000px;width:640px;height:480px;border:0";
    try{
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("home page did not load")),10000);
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
        .find(a=>a.textContent.includes("Practise addition"));
      assert(addition && addition.href.includes("skill=storyadd1"),"home addition entry missing");
      const missingPart=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise missing parts"));
      assert(missingPart && missingPart.href.includes("skill=parts18a"),"home missing-part entry missing");
      const perimeter=Array.from(frame.contentDocument.querySelectorAll(".home-actions a"))
        .find(a=>a.textContent.includes("Practise perimeter"));
      assert(perimeter && perimeter.href.includes("p=4") && perimeter.href.includes("skill=per1"),
        "home perimeter entry missing");
    }finally{frame.remove();}
  });
  async function checkPrintLayout(language,sheet) {
    const frame=document.createElement("iframe");
    frame.setAttribute("aria-hidden","true");
    frame.style.cssText="position:absolute;left:-10000px;top:0;width:176mm;height:269mm;border:0";
    try {
      await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>reject(new Error("print view did not load")),10000);
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
          const timer=setTimeout(()=>reject(new Error("custom print view did not load")),10000);
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
          const timer=setTimeout(()=>reject(new Error("coded view did not load")),10000);
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
          const timer=setTimeout(()=>reject(new Error("print view did not load")),10000);
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
        const timer=setTimeout(()=>reject(new Error("mixed paper did not load")),10000);
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
  window.regressionResult = {passed,failed};
  document.documentElement.dataset.result = failed?"fail":"pass";
  document.title = (failed?"FAIL":"PASS")+" · MathQuiz regression checks";
})();


