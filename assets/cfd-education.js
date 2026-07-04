
(()=>{
  const key=document.body.dataset.courseKey||'cfdCourseProgressV1';
  const completed=new Set(JSON.parse(localStorage.getItem(key)||'[]').map(String));
  const buttons=[...document.querySelectorAll('.cfd-complete')];
  const bar=document.getElementById('cfdProgressBar');
  const value=document.getElementById('cfdProgressValue');
  const update=()=>{
    buttons.forEach(btn=>{
      const done=completed.has(String(btn.dataset.module));
      btn.classList.toggle('done',done);
      btn.textContent=done?'Completed':'Mark complete';
    });
    const pct=buttons.length?Math.round(completed.size/buttons.length*100):0;
    if(bar) bar.style.width=pct+'%';
    if(value) value.textContent=pct+'%';
    localStorage.setItem(key,JSON.stringify([...completed]));
  };
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    const id=String(btn.dataset.module);
    completed.has(id)?completed.delete(id):completed.add(id);
    update();
  }));
  update();

  document.getElementById('cfdCheckQuiz')?.addEventListener('click',()=>{
    const qs=[...document.querySelectorAll('.quiz-card-cfd .q')];
    let score=0;
    qs.forEach(q=>{
      const chosen=q.querySelector('input:checked');
      if(chosen?.value===q.dataset.answer) score++;
    });
    const s=document.getElementById('cfdQuizScore');
    const r=document.getElementById('cfdQuizResult');
    if(s) s.textContent=`${score} / ${qs.length}`;
    if(r) r.textContent=score===qs.length?'Excellent. This is a solid CFD foundation.':`${score} correct out of ${qs.length}. Review the related modules.`;
  });
})();
