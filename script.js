// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Contact form (static demo — no backend wired up yet)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const name = form.querySelector('#name').value.trim();
    if (!name) {
      status.textContent = 'Please add your name before sending.';
      status.style.color = '#F2A65A';
      return;
    }
    // NOTE: This form has no backend connected yet.
    // Wire it up to Formspree, Netlify Forms, or your own endpoint —
    // see README.md "Contact form" section for instructions.
    status.style.color = '#4FD1C5';
    status.textContent = `Thanks, ${name.split(' ')[0]} — this demo form isn't connected to email yet. See README.md to enable it.`;
    form.reset();
  });
}
