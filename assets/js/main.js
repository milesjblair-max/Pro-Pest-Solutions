/* =======================================================
   Pro Pest Solutions — main.js
   Minimal, dependency-free vanilla JS
   ======================================================= */

(function () {
  'use strict';

  /* ---- Sticky header ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  /* ---- Mobile navigation ---- */
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on overlay click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMobileMenu();
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  function closeMobileMenu() {
    if (!mobileMenu || !toggle) return;
    mobileMenu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ---- Active nav link ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    if (linkPage === currentPath || (currentPath === '' && linkPage === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- Form submission feedback ---- */
  document.querySelectorAll('form[data-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('[type="submit"]');
      if (!submitBtn) return;

      // Let Formspree handle the actual POST; just show loading state
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';

      // Re-enable after timeout in case of client-side error
      setTimeout(() => {
        if (submitBtn.disabled) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }, 8000);
    });
  });

  /* ---- Smooth reveal on scroll (IntersectionObserver) ---- */
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      revealElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
        observer.observe(el);
      });
    }
  }

  /* ---- Year in footer ---- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
