/* ═══════════════════════════════════
   IMAR MEDICAL GROUP — JS
═══════════════════════════════════ */

// ── NAVBAR scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target >= 1000
        ? (target / 1000).toFixed(0) + 'K'
        : target;
      clearInterval(timer);
    } else {
      el.textContent = target >= 1000
        ? (current / 1000).toFixed(1)
        : Math.floor(current);
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// ── SMOOTH ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => activeObserver.observe(s));

// ── WHATSAPP FORM ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('fname').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const email   = document.getElementById('femail').value.trim();
    const service = document.getElementById('fservice').value;
    const message = document.getElementById('fmessage').value.trim();

    if (!name || !phone) {
      alert('Por favor ingresa tu nombre y teléfono.');
      return;
    }

    // Build WhatsApp message
    let text = `Hola, me comunico desde el sitio web de IMAR Medical Group.%0A%0A`;
    text += `*Nombre:* ${name}%0A`;
    text += `*Teléfono:* ${phone}%0A`;
    if (email) text += `*Correo:* ${email}%0A`;
    if (service) text += `*Servicio de interés:* ${service}%0A`;
    if (message) text += `%0A*Mensaje:* ${message}`;

    // Replace with real WhatsApp number when available
    const waNumber = '521234567890';
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  });
}
