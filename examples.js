(() => {
  const ui=MathQuizUI,lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en',t=ui.tr,E=ui.esc,loc=ui.loc;
  const {packs,link}=MathQuizExamples,app=document.getElementById('app');
  const initial=new URLSearchParams(location.search).get('p'),grade=/^[1-6]$/.test(initial)?initial:'';
  ui.shell();document.title=t('Example quizzes','示例小測')+' · MathQuiz';
  document.querySelector('.site-nav [aria-current]')?.removeAttribute('aria-current');
  app.innerHTML='<div class="page-heading"><p class="eyebrow">'+t('READY-MADE QUIZZES · PRIMARY 1–6','現成小測 · 小一至小六')+'</p><h1>'+t('Pick a topic. Try a quiz.','選個主題，試做小測。')+'</h1><p class="intro">'+t('18 themed quizzes, plus the three original mini quizzes. Try one now, or edit the questions for your class.','18份主題小測，加上原有的3份迷你小測。立即試做，或為班級編輯題目。')+'</p><p>'+t('Each themed quiz has six questions. Every quiz is available in English and Traditional Chinese, with a printable paper and worked answers.','每份主題小測有6題。全部小測均提供英文、繁體中文、可列印試卷及解答。')+'</p></div>'+
    '<div class="example-filter"><label for="example-grade">'+t('Choose a year','選擇年級')+'</label><select id="example-grade"><option value="">'+t('All years','所有年級')+'</option>'+[1,2,3,4,5,6].map(g=>'<option value="'+g+'"'+(String(g)===grade?' selected':'')+'>'+ui.year(g)+'</option>').join('')+'</select><p id="example-count" role="status" aria-live="polite"></p></div><div id="example-collection"></div><aside class="example-note"><h2>'+t('Want to practise at a particular level?','想按指定級別練習？')+'</h2><p>'+t('These are fixed topic selections. Choose Easy, Normal or Difficult for individual skills on the practice page.','這些是固定的主題題組。你可在練習頁為個別技能選擇容易、一般或較難級別。')+'</p><a href="skill-levels.html?lang='+lang+'">'+t('Practise by level','按級別練習')+' →</a></aside>';
  function render(){
    const value=document.getElementById('example-grade').value,chosen=packs.filter(p=>!value||p.grade===Number(value));
    document.getElementById('example-count').textContent=chosen.length+t(' quizzes','份小測');
    document.getElementById('example-collection').innerHTML=[1,2,3,4,5,6].filter(g=>chosen.some(p=>p.grade===g)).map(g=>'<section class="example-year" aria-labelledby="year-'+g+'"><h2 id="year-'+g+'">'+ui.year(g)+'</h2><div class="example-grid">'+chosen.filter(p=>p.grade===g).map(p=>'<article class="example-card" data-example="'+p.id+'"><p class="eyebrow">'+(p.items?t('TOPIC QUIZ','主題小測'):t('ORIGINAL MINI QUIZ','原有迷你小測'))+' · '+(p.items?.length||p.count)+t(' QUESTIONS','題')+'</p><h3>'+E(loc(p.title))+'</h3><p class="example-description">'+E(loc(p.description))+'</p><div class="example-actions"><a data-mode="quiz" class="button" href="'+E(link(p,lang))+'">'+t('Try quiz','試做小測')+' →</a>'+(p.items?'<a data-mode="build" href="'+E(link(p,lang,'build'))+'">'+t('Edit quiz','編輯小測')+'</a>':'')+'</div><div class="example-print"><a data-mode="paper" href="'+E(link(p,lang,'paper'))+'">'+t('Student paper','學生試卷')+'</a><a data-mode="key" href="'+E(link(p,lang,'key'))+'">'+t('Worked answers','解答')+'</a></div></article>').join('')+'</div></section>').join('');
    const u=new URL(location.href);if(value)u.searchParams.set('p',value);else u.searchParams.delete('p');history.replaceState(null,'',u);
    for(const l of ['en','zh']){const v=new URL(u);v.searchParams.set('lang',l);document.getElementById(l).href=v.href;}
    app.dataset.ready='true';
  }
  document.getElementById('example-grade').addEventListener('change',render);render();
})();
