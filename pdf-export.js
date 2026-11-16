// Browser-only PDF export for a custom paper or key. The image pages preserve
// the print layout; an invisible font-backed layer makes their wording usable
// for selection, copy, and search.
(function () {
  "use strict";
  const libraryUrl="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  const libraryIntegrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==";
  const fontUrl="fonts/mathquiz-text.ttf?v=28";

  async function paperCode() {
    const params=new URLSearchParams(location.search);
    const grade=params.get("p"),version=params.get("v"),ids=params.get("items");
    if(!/^[123456]$/.test(grade) || !/^[23]$/.test(version) || !ids)
      throw new Error("This paper has no valid identifying code.");
    const digest=new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ids)));
    const short=Array.from(digest.slice(0,5),n=>n.toString(16).padStart(2,"0")).join("").toUpperCase();
    return "P"+grade+"-V"+version+"-"+short;
  }

  async function showPaperCode() {
    const target=document.getElementById("paper-code");
    if(!target)return null;
    const code=await paperCode();
    target.textContent=(document.documentElement.lang.startsWith("zh")?"卷號 ":"Paper code ")+code;
    return code;
  }

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

  function collectTextRuns(doc,container,pageHeight) {
    const origin=container.getBoundingClientRect();
    const runs=[];
    const walker=doc.createTreeWalker(container,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())) {
      if(!node.textContent.trim())continue;
      const parent=node.parentElement;
      if(!parent || parent.closest("script,style,template"))continue;
      const style=doc.defaultView.getComputedStyle(parent);
      if(style.display==="none" || style.visibility==="hidden")continue;
      const size=parseFloat(style.fontSize);
      const range=doc.createRange();
      let offset=0,run=null;
      for(const character of node.textContent) {
        range.setStart(node,offset);
        offset+=character.length;
        range.setEnd(node,offset);
        const rect=range.getBoundingClientRect();
        if(rect.width<0.01 || rect.height<0.01)continue;
        const top=rect.top-origin.top;
        const page=Math.floor(top/pageHeight);
        if(page<0 || Math.floor((rect.bottom-origin.top-0.1)/pageHeight)!==page)continue;
        if(run && run.page===page && Math.abs(run.top-top)<1 && rect.left-run.right<3) {
          run.text+=character;
          run.right=rect.right;
        } else {
          if(run && run.text.trim())runs.push(run);
          run={text:character,left:rect.left-origin.left,right:rect.right,top,height:rect.height,size,page};
        }
      }
      if(run && run.text.trim())runs.push(run);
      range.detach();
    }
    if(!runs.length)throw new Error("The PDF has no selectable text.");
    return runs;
  }

  async function addTextLayer(pdf,runs,pageSize) {
    const response=await fetch(fontUrl);
    if(!response.ok)throw new Error("The PDF text font is unavailable.");
    const bytes=new Uint8Array(await response.arrayBuffer());
    let binary="";
    for(let i=0;i<bytes.length;i+=8192)
      binary+=String.fromCharCode(...bytes.subarray(i,i+8192));
    pdf.addFileToVFS("mathquiz-text.ttf",binary);
    pdf.addFont("mathquiz-text.ttf","MathQuizText","normal");
    pdf.setFont("MathQuizText","normal");
    const pageHeight=pageSize.inner.px.height;
    const width=pageSize.inner.width;
    const xScale=width/pageSize.inner.px.width;
    const yScale=pageSize.inner.height/pageHeight;
    const hidden=new pdf.GState({opacity:0});
    for(const run of runs) {
      if(run.page>=pdf.getNumberOfPages())continue;
      const x=17+run.left*xScale;
      const y=14+(run.top-run.page*pageHeight+run.height*0.8)*yScale;
      if(x<17 || x>193 || y<14 || y>283)continue;
      pdf.setPage(run.page+1);
      pdf.saveGraphicsState();
      pdf.setGState(hidden);
      pdf.setFontSize(run.size*72/96);
      pdf.text(run.text,x,y);
      pdf.restoreGraphicsState();
    }
  }

  function addFooters(pdf,code,chinese) {
    const total=pdf.getNumberOfPages();
    pdf.setProperties({title:"MathQuiz "+code});
    for(let page=1;page<=total;page++) {
      pdf.setPage(page);
      pdf.setFont("MathQuizText","normal");
      pdf.setFontSize(8);
      pdf.setTextColor(60,70,65);
      pdf.setDrawColor(178,190,180);
      pdf.setLineWidth(0.2);
      pdf.line(17,285,193,285);
      pdf.text((chinese?"卷號 ":"Paper code ")+code,17,289);
      pdf.text(chinese?"第 "+page+" / "+total+" 頁":"Page "+page+" of "+total,193,289,{align:"right"});
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
      await frame.contentWindow.mathQuizPdf.codeReady;
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
      const worker=frame.contentWindow.html2pdf().set(options).from(doc.body).toContainer();
      const container=await worker.get("container");
      const pageSize=await worker.get("pageSize");
      const textRuns=collectTextRuns(doc,container,pageSize.inner.px.height);
      await worker.toPdf();
      const pdf=await worker.get("pdf");
      // html2pdf can leave a blank final image page after padding a fieldset.
      // Every real page in a paper or key has a printed question label.
      const lastTextPage=Math.max(...textRuns.map(run=>run.page))+1;
      while(pdf.getNumberOfPages()>lastTextPage)
        pdf.deletePage(pdf.getNumberOfPages());
      await addTextLayer(pdf,textRuns,pageSize);
      addFooters(pdf,await paperCode(),document.documentElement.lang.startsWith("zh"));
      const blob=pdf.output("blob");
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
      const filename="mathquiz-"+(await paperCode()).toLowerCase()+"-"+(chinese?"zh":"en")+"-"+view+".pdf";
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

  const codeReady=showPaperCode();
  window.mathQuizPdf={generate,download,paperCode,codeReady};
})();
