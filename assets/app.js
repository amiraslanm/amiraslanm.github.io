
(()=>{
 const root=document.documentElement, header=document.querySelector('.site-header');
 const langBtn=document.getElementById('langToggle'),themeBtn=document.getElementById('themeToggle'),menuBtn=document.getElementById('menuToggle'),mobileNav=document.getElementById('mobileNav');
 const applyLang=(lang)=>{root.lang=lang;root.dir=lang==='fa'?'rtl':'ltr';document.querySelectorAll('[data-fa][data-en]').forEach(el=>el.textContent=el.dataset[lang]);if(root.dataset['title'+(lang==='fa'?'Fa':'En')])document.title=root.dataset['title'+(lang==='fa'?'Fa':'En')];if(langBtn)langBtn.textContent=lang==='fa'?'EN':'فا';localStorage.setItem('lang',lang)};
 applyLang(localStorage.getItem('lang')||'en');
 const savedTheme=localStorage.getItem('theme');if(savedTheme)root.dataset.theme=savedTheme;
 langBtn?.addEventListener('click',()=>applyLang(root.lang==='fa'?'en':'fa'));
 themeBtn?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme)});
 menuBtn?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open))});
 mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn.classList.remove('open')}));
 const progress=document.getElementById('scrollProgress');
 const onScroll=()=>{header?.classList.toggle('scrolled',scrollY>15);if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%'}};addEventListener('scroll',onScroll,{passive:true});onScroll();
 document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 const counters=document.querySelectorAll('.counter');const countObs=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=Number(el.dataset.target),start=performance.now(),duration=1200;const step=t=>{const p=Math.min((t-start)/duration,1);el.textContent=Math.floor(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);countObs.unobserve(el)}),{threshold:.6});counters.forEach(c=>countObs.observe(c));
 document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.parentElement;group.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;const scope=group.parentElement?.parentElement||document;scope.querySelectorAll('[data-category]').forEach(item=>item.classList.toggle('hidden',f!=='all'&&item.dataset.category!==f))}));
 const glow=document.getElementById('cursorGlow');addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
 const art=document.getElementById('heroArt')?.querySelector('.art-panel');document.getElementById('heroArt')?.addEventListener('pointermove',e=>{if(!art)return;const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`});document.getElementById('heroArt')?.addEventListener('pointerleave',()=>{if(art)art.style.transform=''});
 const toast=document.getElementById('toast');document.querySelectorAll('.copy-email').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.email);toast.textContent=root.lang==='fa'?'ایمیل کپی شد':'Email copied';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}catch{location.href='mailto:'+btn.dataset.email}}));
})();
