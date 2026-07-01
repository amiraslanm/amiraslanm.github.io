
(() => {
  const root = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const themeBtn = document.getElementById('themeToggle');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.main-nav');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  const applyLanguage = (lang) => {
    root.lang = lang;
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-fa][data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    if (langBtn) langBtn.textContent = lang === 'fa' ? 'EN' : 'فا';
    localStorage.setItem('lang', lang);
  };
  applyLanguage(localStorage.getItem('lang') || 'fa');

  langBtn?.addEventListener('click', () => applyLanguage(root.lang === 'fa' ? 'en' : 'fa'));
  themeBtn?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
  menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));

  document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const filters = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('.blog-item');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    items.forEach(item => item.hidden = cat !== 'all' && item.dataset.category !== cat);
  }));
})();
