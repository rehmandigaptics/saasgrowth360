function initSite(){
gsap.registerPlugin(ScrollTrigger);

const page = document.body.dataset.page;
if (page) document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');

const nav = document.querySelector('.premium-nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

const orb = document.getElementById('cursorOrb');
window.addEventListener('pointermove', (e) => {
  gsap.to(orb, {x:e.clientX, y:e.clientY, duration:.9, ease:'power3.out'});
});

gsap.from('.premium-nav', {y:-28, opacity:0, duration:.8, ease:'power3.out'});
gsap.from('.hero-premium .reveal-up', {y:34, opacity:0, duration:1, stagger:.12, delay:.15, ease:'power3.out'});
gsap.from('.hero-premium .reveal-scale', {scale:.93, opacity:0, duration:1.25, delay:.35, ease:'power3.out'});
gsap.to('.chart-line', {strokeDashoffset:0, duration:2.1, delay:.65, ease:'power2.out'});

gsap.to('.scan-line', {left:'88%', duration:3.2, repeat:-1, yoyo:true, ease:'sine.inOut'});
gsap.to('.orbit-one', {rotation:360, duration:55, repeat:-1, ease:'none'});
gsap.to('.orbit-two', {rotation:-360, duration:42, repeat:-1, ease:'none'});

gsap.utils.toArray('.reveal-up:not(.hero-premium .reveal-up)').forEach((el) => {
  gsap.from(el, {scrollTrigger:{trigger:el,start:'top 88%'}, y:34, opacity:0, duration:.85, ease:'power3.out'});
});
gsap.utils.toArray('.reveal-right').forEach((el) => {
  gsap.from(el, {scrollTrigger:{trigger:el,start:'top 87%'}, x:60, opacity:0, duration:.95, ease:'power3.out'});
});
gsap.utils.toArray('.reveal-scale:not(.hero-premium .reveal-scale)').forEach((el) => {
  gsap.from(el, {scrollTrigger:{trigger:el,start:'top 88%'}, scale:.96, opacity:0, duration:1, ease:'power3.out'});
});

gsap.to('.hero-spotlight', {y:180, x:-70, scrollTrigger:{trigger:'.hero-premium',start:'top top',end:'bottom top',scrub:1.2}});
gsap.to('.hero-grid', {y:120, scrollTrigger:{trigger:'.hero-premium',start:'top top',end:'bottom top',scrub:1.5}});

gsap.utils.toArray('.bento-card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.setProperty('--mx', `${px*100}%`);
    card.style.setProperty('--my', `${py*100}%`);
    gsap.to(card, {rotateX:(py-.5)*-3.2, rotateY:(px-.5)*4.2, transformPerspective:900, duration:.35});
  });
  card.addEventListener('pointerleave', () => gsap.to(card, {rotateX:0, rotateY:0, duration:.45, ease:'power3.out'}));
});

const tilt = document.querySelector('.tilt-card');
if(tilt){
  tilt.addEventListener('pointermove', e => {
    const r = tilt.getBoundingClientRect();
    const rx = ((e.clientY-r.top)/r.height-.5)*-6;
    const ry = ((e.clientX-r.left)/r.width-.5)*7;
    gsap.to(tilt,{rotateX:rx,rotateY:ry,duration:.35,transformPerspective:1000,transformOrigin:'center'});
  });
  tilt.addEventListener('pointerleave',()=>gsap.to(tilt,{rotateX:0,rotateY:0,duration:.6,ease:'power3.out'}));
}

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  if(id === '#') return;
  const target = document.querySelector(id);
  if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
}));

// Seamless audience marquee: clean text-only loop on the right side.
(() => {
  const section = document.querySelector('.audience-loop');
  const track = section?.querySelector('.marquee-track');
  if (!section || !track || typeof gsap === 'undefined') return;

  const groups = [...track.querySelectorAll('.marquee-group')];
  if (groups.length < 2) return;

  const first = groups[0];
  const second = groups[1];
  const baseMarkup = first.innerHTML;
  let tween;
  let resizeTimer;

  function rebuildMarquee() {
    if (tween) tween.kill();
    gsap.set(track, { x: 0 });

    first.innerHTML = baseMarkup;
    second.innerHTML = '';

    // Make one cycle wider than the visible marquee area so no empty tail can appear.
    const minWidth = section.clientWidth * 1.35;
    let guard = 0;
    while (first.scrollWidth < minWidth && guard < 20) {
      first.insertAdjacentHTML('beforeend', baseMarkup);
      guard++;
    }

    second.innerHTML = first.innerHTML;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const distance = first.getBoundingClientRect().width;
    const speed = window.innerWidth < 768 ? 42 : 48;

    tween = gsap.to(track, {
      x: -distance,
      duration: distance / speed,
      ease: 'none',
      repeat: -1,
      force3D: true
    });

    section.onmouseenter = () => tween?.pause();
    section.onmouseleave = () => tween?.resume();
  }

  rebuildMarquee();

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuildMarquee, 180);
  });
})();

// About section orbital motion and subtle depth.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.to('.system-orbit-one', {rotation:360, duration:30, repeat:-1, ease:'none'});
  gsap.to('.system-orbit-two', {rotation:-360, duration:22, repeat:-1, ease:'none'});
  gsap.to('.system-core', {y:-7, duration:2.8, repeat:-1, yoyo:true, ease:'sine.inOut'});
}


// Scroll-driven horizontal Services experience.
// On desktop, normal page scrolling pins the Services section and moves
// the cards horizontally. Once the last card is reached, vertical page
// scrolling resumes naturally. Mobile keeps native swipe behavior.
(() => {
  const section = document.querySelector('#services');
  const rail = document.querySelector('#services .services-grid');
  const progress = document.querySelector('#services .services-scroll-rail i');
  const viewport = document.querySelector('#services .services-viewport');
  if (!section || !rail || !viewport || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const setProgress = (ratio = 0) => {
    const value = Math.min(1, Math.max(0, ratio));
    if (progress) progress.style.width = `${22 + value * 78}%`;
  };

  const mm = gsap.matchMedia();

  mm.add('(min-width: 768px)', () => {
    const getDistance = () => Math.max(0, rail.scrollWidth - viewport.clientWidth);

    gsap.set(rail, { x: 0 });
    setProgress(0);

    const tween = gsap.to(rail, {
      x: () => -getDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(700, getDistance() * 1.05)}`,
        pin: true,
        scrub: 0.9,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => setProgress(self.progress),
        onRefresh: self => setProgress(self.progress)
      }
    });

    // Recalculate after fonts/layout settle and on viewport changes.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });
    window.addEventListener('resize', refresh);

    return () => {
      window.removeEventListener('resize', refresh);
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(rail, { clearProps: 'transform' });
      setProgress(0);
    };
  });

  mm.add('(max-width: 767px)', () => {
    gsap.set(rail, { clearProps: 'transform' });
    const updateMobileProgress = () => {
      const max = Math.max(1, rail.scrollWidth - rail.clientWidth);
      setProgress(rail.scrollLeft / max);
    };
    rail.addEventListener('scroll', updateMobileProgress, { passive: true });
    updateMobileProgress();
    return () => rail.removeEventListener('scroll', updateMobileProgress);
  });
})();




// System section: engagement-style scroll-linked card entrances from the right.
(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  const cards = gsap.utils.toArray('#system .system-stage-card');

  cards.forEach((card, index) => {
    // Keep the first card more immediately available, then make each following card
    // glide in under direct scroll control as it enters the viewport.
    gsap.fromTo(card,
      {
        x: index === 0 ? 90 : 190,
        y: index === 0 ? 6 : 14,
        autoAlpha: index === 0 ? 0.35 : 0.08,
        scale: 0.985
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: index === 0 ? 'top 92%' : 'top 96%',
          end: index === 0 ? 'top 66%' : 'top 62%',
          scrub: 0.65,
          invalidateOnRefresh: true
        }
      }
    );
  });
})();

}

if (window.__includesReady || !document.querySelector('[data-include]')) { initSite(); }
else { document.addEventListener('site:includes-loaded', initSite, {once:true}); }
