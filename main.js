// Sunrise on the landing page hero: rises right after load or on first scroll/wheel/touch, whichever comes first.
(function () {
  var sun = document.querySelector('.sun');
  if (!sun) return;
  var events = ['scroll', 'wheel', 'touchmove'];
  var timer;

  function rise() {
    sun.classList.add('is-risen');
    clearTimeout(timer);
    events.forEach(function (e) { window.removeEventListener(e, rise); });
  }

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rise();
    return;
  }
  timer = setTimeout(rise, 300);
  events.forEach(function (e) { window.addEventListener(e, rise, { passive: true }); });
})();

// Navbar: mark the link for the section currently under the header.
(function () {
  var links = document.querySelectorAll('.nav-link[data-section]');
  if (!links.length) return;
  var bar = document.querySelector('.site-top');
  var sections = [];
  links.forEach(function (link) {
    var el = document.getElementById(link.dataset.section);
    if (el) sections.push({ el: el, link: link });
  });
  var current;

  function update() {
    var line = bar.offsetHeight + window.innerHeight * 0.3;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    var active = null;
    sections.forEach(function (s) {
      if (atBottom || s.el.getBoundingClientRect().top <= line) active = s.link;
    });
    if (active === current) return;
    if (current) { current.classList.remove('is-active'); current.removeAttribute('aria-current'); }
    if (active) { active.classList.add('is-active'); active.setAttribute('aria-current', 'location'); }
    current = active;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// Navbar: drop a soft shadow once the page has scrolled under it.
(function () {
  var bar = document.querySelector('.site-top');
  if (!bar) return;
  function update() { bar.classList.toggle('is-stuck', window.scrollY > 4); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
