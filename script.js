document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.menu-toggle');
  var overlay = document.querySelector('.menu-overlay');
  var menuLinks = overlay ? overlay.querySelectorAll('a') : [];

  /* Nav scroll */
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* Hero animation */
  var heroLines = document.querySelectorAll('.hero-line');
  var heroSub = document.querySelector('.hero-sub');
  var heroCta = document.querySelector('.hero-cta-wrap');
  var heroScroll = document.querySelector('.hero-scroll');

  if (heroLines.length) {
    heroLines.forEach(function (line, i) {
      setTimeout(function () { line.classList.add('visible'); }, 400 + i * 220);
    });
  }
  if (heroSub) setTimeout(function () { heroSub.classList.add('visible'); }, 950);
  if (heroCta) setTimeout(function () { heroCta.classList.add('visible'); }, 1150);
  if (heroScroll) setTimeout(function () { heroScroll.classList.add('visible'); }, 1600);

  /* Page hero animation (subpages) */
  var pageHero = document.querySelector('.page-hero');
  if (pageHero) {
    pageHero.style.opacity = '0';
    pageHero.style.transform = 'translateY(20px)';
    pageHero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(function () {
      pageHero.style.opacity = '1';
      pageHero.style.transform = 'translateY(0)';
    }, 100);
  }

  /* Scroll reveals */
  var reveals = document.querySelectorAll('.scroll-reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  reveals.forEach(function (el) { revealObserver.observe(el); });

  /* Fade-in on scroll */
  var fadeEls = document.querySelectorAll('.fade-in');
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    fadeObserver.observe(el);
  });

  /* Mobile menu */
  if (toggle && overlay) {
    function toggleMenu() {
      var isOpen = overlay.classList.toggle('open');
      toggle.classList.toggle('active');
      nav.classList.toggle('menu-open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    }

    toggle.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (!overlay.classList.contains('open')) return;
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          toggleMenu();
          setTimeout(function () {
            var target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }, 350);
        } else {
          toggleMenu();
        }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) toggleMenu();
    });
  }
});
