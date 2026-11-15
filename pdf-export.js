// Browser-only PDF export for a custom paper or key. The print button remains
// available for native, selectable-text output.
(function () {
  "use strict";
  const libraryUrl="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  const libraryIntegrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==";

  function waitForFrame(frame) {
    return new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>reject(new Error("The PDF view did not load.")),15000);
      frame.onload=()=>{clearTimeout(timeout);resolve();};
      frame.onerror=()=>{clearTimeout(timeout);reject(new Error("The PDF view failed to load."));};
      const url=new URL(location.href);
      url.searchParams.set("pdfRender",String(Date.now()));
      frame.src=url.href;
      document.body.appendChild(frame);
    });
  }

  function loadLibrary(doc) {
    return new Promise((resolve,reject)=>{
      const script=doc.createElement("script");
      script.src=libraryUrl;
      script.integrity=libraryIntegrity;
      script.crossOrigin="anonymous";
      script.referrerPolicy="no-referrer";
      const timeout=setTimeout(()=>{script.remove();reject(new Error("The PDF generator timed out."));},20000);
      script.onload=()=>{clearTimeout(timeout);resolve();};
      script.onerror=()=>{clearTimeout(timeout);reject(new Error("The PDF generator could not load."));};
      doc.head.appendChild(script);
    });
  }

  function applyPrintStyles(doc) {
    const win=doc.defaultView;
    const rules=[];
    for(const sheet of doc.styleSheets) {
      if(!sheet.href || new URL(sheet.href).origin===location.origin) {
        for(const rule of sheet.cssRules) {
          if(rule.type===win.CSSRule.MEDIA_RULE && rule.conditionText.trim()==="print")
            rules.push(...Array.from(rule.cssRules,inner=>inner.cssText));
        }
      }
    }
    if(!rules.length)throw new Error("Print styles are unavailable.");
    const style=doc.createElement("style");
    style.textContent=rules.join("\n")+"\nbody{width:176mm!important;margin:0!important}header,main{width:176mm!important;max-width:176mm!important;margin:0!important;padding:0!important}";
    doc.head.appendChild(style);
  }

  async function rasterizeDiagrams(doc) {
    for(const svg of Array.from(doc.querySelectorAll("main svg"))) {
      const box=svg.getBoundingClientRect();
      const viewBox=svg.viewBox.baseVal;
      const width=viewBox.width || box.width;
      const height=viewBox.height || box.height;
      const copy=svg.cloneNode(true);
      copy.setAttribute("xmlns","http://www.w3.org/2000/svg");
      copy.setAttribute("width",width);
      copy.setAttribute("height",height);
      const font=doc.createElementNS("http://www.w3.org/2000/svg","style");
      font.textContent='text{font:16px "Segoe UI","Microsoft JhengHei",sans-serif;fill:#192b24}';
      copy.prepend(font);
      const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(copy)],{type:"image/svg+xml"}));
      try {
        const source=new Image();
        source.src=url;
        await source.decode();
        const canvas=doc.createElement("canvas");
        canvas.width=Math.ceil(width*2);
        canvas.height=Math.ceil(height*2);
        const context=canvas.getContext("2d");
        context.scale(2,2);
        context.drawImage(source,0,0,width,height);
        const image=new Image();
        image.src=canvas.toDataURL("image/png");
        image.className=svg.getAttribute("class") || "";
        image.alt=svg.getAttribute("aria-label") || "";
        image.style.width=box.width+"px";
        image.style.height=box.height+"px";
        await image.decode();
        svg.replaceWith(image);
      } finally {
        URL.revokeObjectURL(url);
      }
    }
  }

  async function generate() {
    const frame=document.createElement("iframe");
    frame.setAttribute("aria-hidden","true");
    frame.style.cssText="position:fixed;left:-20000px;top:0;width:176mm;height:269mm;border:0";
    try {
      await waitForFrame(frame);
      const doc=frame.contentDocument;
      if(!doc || !doc.querySelector("main form"))throw new Error("The PDF view is unavailable.");
      await doc.fonts.ready;
      applyPrintStyles(doc);
      await rasterizeDiagrams(doc);
      await loadLibrary(doc);
      const options=frame.contentWindow.JSON.parse(JSON.stringify({
        margin:[14,17,14,17],
        image:{type:"jpeg",quality:0.95},
        html2canvas:{scale:2,useCORS:true},
        jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},
        pagebreak:{mode:["css","legacy"],avoid:"fieldset"}
      }));
      const blob=await frame.contentWindow.html2pdf().set(options).from(doc.body).outputPdf("blob");
      const signature=new TextDecoder("ascii").decode(await blob.slice(0,5).arrayBuffer());
      if(signature!=="%PDF-" || blob.size<1000)throw new Error("The PDF could not be created.");
      return new Blob([await blob.arrayBuffer()],{type:"application/pdf"});
    } finally {
      frame.remove();
    }
  }

  async function download(button) {
    const status=document.getElementById("pdf-status");
    const chinese=document.documentElement.lang.startsWith("zh");
    button.disabled=true;
    if(status)status.textContent=chinese?"正在製作 PDF…":"Creating PDF…";
    try {
      const blob=await generate();
      const params=new URLSearchParams(location.search);
      const view=params.get("view")==="key"?"key":"paper";
      const ids=params.get("items") || "";
      const hash=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ids)))).slice(0,4).map(n=>n.toString(16).padStart(2,"0")).join("");
      const filename="mathquiz-p"+params.get("p")+"-"+(chinese?"zh":"en")+"-"+view+"-"+hash+".pdf";
      const url=URL.createObjectURL(blob);
      const link=document.createElement("a");
      link.href=url;
      link.download=filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),60000);
      if(status)status.textContent=chinese?"PDF 已備妥。":"PDF is ready.";
    } catch(error) {
      if(status)status.textContent=(chinese?"無法製作 PDF，請使用列印功能。":"Could not create PDF. Use Print / Save as PDF.")+" "+error.message;
    } finally {
      button.disabled=false;
    }
  }

  window.mathQuizPdf={generate,download};
})();
