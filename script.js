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

// Contact form — submits to Formspree via fetch (no page reload)
const form = document.querySelector('.contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnDefaultText = submitBtn ? submitBtn.textContent : '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    if (!name) {
      status.style.color = '#F2A65A';
      status.textContent = 'Please add your name before sending.';
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }
    status.style.color = '#8B98A5';
    status.textContent = 'Sending your message…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.style.color = '#4FD1C5';
        status.textContent = `Thanks, ${name.split(' ')[0]} — your message has been sent. I'll reply within one business day.`;
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const message = data && data.errors
          ? data.errors.map(err => err.message).join(', ')
          : 'Something went wrong. Please try again or email me directly.';
        status.style.color = '#F2A65A';
        status.textContent = message;
      }
    } catch (err) {
      status.style.color = '#F2A65A';
      status.textContent = 'Network error — please try again or email me directly.';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtnDefaultText;
      }
    }
  });
}
