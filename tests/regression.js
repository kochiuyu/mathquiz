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
          frame.src=new URL("../"+query,location.href);
          document.body.appendChild(frame);
        });
        assert(frame.contentDocument.querySelector("#download-pdf"),"edited set has no PDF control");
        assert(typeof frame.contentWindow.mathQuizPdf?.generate==="function","PDF generator unavailable");
      } finally {
        frame.remove();
      }
    }
  });
  window.regressionResult = {passed,failed};
  document.documentElement.dataset.result = failed?"fail":"pass";
  document.title = (failed?"FAIL":"PASS")+" · MathQuiz regression checks";
})();


