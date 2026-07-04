const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function setProgress() {
  const total = $$('.module').length || 1;
  const done = $$('.module.done').length;
  const pct = Math.round((done / total) * 100);
  $$('#progressBar').forEach(el => el.style.width = pct + '%');
  $$('#progressText').forEach(el => el.textContent = pct + '%');
}

function toggleModule(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('done');
  localStorage.setItem('done_' + id, el.classList.contains('done') ? '1' : '0');
  setProgress();
}

function restoreProgress() {
  $$('.module').forEach(el => {
    if (localStorage.getItem('done_' + el.id) === '1') el.classList.add('done');
  });
  setProgress();
}

const answers = {
  q1: 'b', q2: 'c', q3: 'a', q4: 'b', q5: 'c', q6:'a', q7:'b', q8:'c'
};
function checkQuiz(){
  let score = 0;
  Object.keys(answers).forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    const feedback = document.querySelector(`[data-feedback="${q}"]`);
    if (!feedback) return;
    if (selected && selected.value === answers[q]) {
      score++;
      feedback.textContent = 'درست ✅';
      feedback.className = 'feedback ok';
    } else {
      feedback.textContent = 'نیاز به مرور دارد ❌';
      feedback.className = 'feedback bad';
    }
  });
  const box = $('#quizResult');
  if (box) {
    box.innerHTML = `امتیاز شما: <b>${score}</b> از <b>${Object.keys(answers).length}</b>`;
    localStorage.setItem('quiz_score', score);
  }
}

function resetProgress(){
  Object.keys(localStorage).filter(k => k.startsWith('done_') || k === 'quiz_score').forEach(k => localStorage.removeItem(k));
  $$('.module').forEach(el => el.classList.remove('done'));
  $$('.feedback').forEach(el => {el.textContent=''; el.className='feedback';});
  const box = $('#quizResult'); if(box) box.textContent='';
  setProgress();
}

document.addEventListener('DOMContentLoaded', restoreProgress);
