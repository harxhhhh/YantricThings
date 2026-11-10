/** contact page inline script (mobile navigation), wrapped for onMount(). */
export function initContactNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const contactNav = document.querySelector('.contact-nav');

  if (navToggle && contactNav) {

      navToggle.addEventListener('click', function () {

          contactNav.classList.toggle('open');

          navToggle.classList.toggle('open');

      });

  }

}
