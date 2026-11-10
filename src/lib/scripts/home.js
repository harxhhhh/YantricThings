/**
 * Scripts of the main page (/), moved out of index.html unchanged except for being
 * wrapped in init functions that +page.svelte calls from onMount():
 *   - initMain()        <- js/main.js (menu, reveal-on-scroll, hero slider, image guards, footer tagline fit)
 *   - initSecretLogo()  <- inline script #1 (drag the logo right to open the staff login)
 *   - initDevPopup()    <- inline script #2 ("Website under development" popup)
 * The inline scripts used a DOMContentLoaded listener; onMount() already runs after the DOM
 * exists, so their bodies run directly.
 */

/** js/main.js */
export function initMain() {
  const cleanups = [];
  const on = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  



  const setMenuOpen = (open) => {
    header?.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    toggle?.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  if (toggle && header) {
    toggle.addEventListener('click', () => {
      setMenuOpen(!header.classList.contains('open'));
    });
  }

  if (nav && header) {
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
  }

  on(window, 'resize', () => {
    if (window.innerWidth > 900) setMenuOpen(false);
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* Hero carousel (4 slides from mockup dots) */
  const hero = document.querySelector('[data-hero-slider]');
  if (hero) {
    const copies = [...hero.querySelectorAll('.hero-slide-copy')];
    const visuals = [...hero.querySelectorAll('.hero-slide-visual')];
    const dots = [...hero.querySelectorAll('.hero-dots button')];
    let index = 0;
    let timer;
    cleanups.push(() => clearInterval(timer));

    const show = (next) => {
      index = (next + copies.length) % copies.length;
      copies.forEach((el, i) => {
        const on = i === index;
        el.hidden = !on;
        el.classList.toggle('is-active', on);
      });
      visuals.forEach((el, i) => {
        const on = i === index;
        el.hidden = !on;
        el.classList.toggle('is-active', on);
      });
      dots.forEach((btn, i) => btn.classList.toggle('active', i === index));
    };

    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => show(index + 1), 6000);
    };

    dots.forEach((btn) => {
      btn.addEventListener('click', () => {
        show(Number(btn.dataset.goto) || 0);
        restart();
      });
    });

    show(0);
    restart();
  }

  /* Brand / media deterrents (not DRM — reduces casual save/drag) */
  const guard = (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (
      t.closest('.brand') ||
      t.closest('.footer-lockup') ||
      t.closest('.protected-asset') ||
      t.matches('img.hero-car, .product-art img, .product-orb img, .brand-mark, .footer-lockup-mark')
    ) {
      e.preventDefault();
    }
  };
  on(document, 'contextmenu', guard);
  on(document, 'dragstart', guard);

  /* Fit tagline edges exactly to "YANTRIC THINGS" */
  const fitFooterTagline = () => {
    const block = document.querySelector('.footer-lockup-textblock');
    const name = document.querySelector('.footer-lockup-name');
    const tag = document.querySelector('.footer-lockup-tag');
    if (!block || !name || !tag) return;

    block.style.width = 'max-content';
    tag.style.width = 'max-content';
    tag.style.fontSize = '11px';
    tag.style.letterSpacing = '0';
    tag.style.transform = 'none';

    const target = name.getBoundingClientRect().width;
    if (!target) return;

    block.style.width = `${Math.ceil(target)}px`;
    tag.style.width = '100%';
    tag.style.overflow = 'hidden';
    tag.style.whiteSpace = 'nowrap';

    let lo = 6;
    let hi = 12;
    let best = 7;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      tag.style.fontSize = `${mid}px`;
      tag.style.transform = 'none';
      if (tag.scrollWidth <= target + 0.25) {
        best = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }
    tag.style.fontSize = `${best}px`;

    // Final exact edge align
    const tw = tag.scrollWidth || 1;
    if (Math.abs(tw - target) > 0.5) {
      tag.style.transform = `scaleX(${target / tw})`;
    }
  };

  const scheduleFit = () => {
    requestAnimationFrame(() => requestAnimationFrame(fitFooterTagline));
  };
  scheduleFit();
  on(window, 'resize', scheduleFit);
  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleFit);
  }
  on(window, 'load', scheduleFit);

  return () => cleanups.forEach((fn) => fn());
}

/** index.html inline script #1 */
export function initSecretLogo() {
    const logo = document.getElementById("yantricSecretLogo");

    if (!logo) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    // Desktop
    logo.addEventListener("mousedown", function (e) {
        startX = e.clientX;
        currentX = 0;
        isDragging = true;
        logo.classList.add("secret-dragging");
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;

        currentX = e.clientX - startX;

        if (currentX > 0) {
            logo.style.transform = `translateX(${Math.min(currentX, 100)}px)`;
        }
    });

    document.addEventListener("mouseup", function (e) {
        if (!isDragging) return;

        const distance = e.clientX - startX;
        isDragging = false;

        if (distance > 80) {
            window.location.href = "vehicleiq-web/login/";
            return;
        }

        logo.style.transform = "";
        logo.classList.remove("secret-dragging");
    });

    // Mobile
    logo.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        currentX = 0;
        logo.classList.add("secret-dragging");
    }, { passive: true });

    logo.addEventListener("touchmove", function (e) {
        currentX = e.touches[0].clientX - startX;

        if (currentX > 0) {
            logo.style.transform = `translateX(${Math.min(currentX, 100)}px)`;
        }
    }, { passive: true });

    logo.addEventListener("touchend", function (e) {
        const distance = e.changedTouches[0].clientX - startX;

        if (distance > 80) {
        window.location.href = "vehicleiq-web/login/";
            return;
        }

        logo.style.transform = "";
        logo.classList.remove("secret-dragging");
    }, { passive: true });
}

/** index.html inline script #2 */
export function initDevPopup() {
    const popup = document.getElementById("devPopup");
    const closeBtn = document.getElementById("devPopupClose");
    const continueBtn = document.getElementById("continueWebsite");

    const closePopup = () => {
        popup.style.display = "none";
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closePopup);
    continueBtn.addEventListener("click", closePopup);

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    document.body.style.overflow = "hidden";
}
