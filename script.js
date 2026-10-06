document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- VIEW SWITCHING ---------- */
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

function showView(name) {
  views.forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'auto' });
  closeMobileMenu();
}

document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    showView(el.dataset.view);
  });
});

document.getElementById('logoHome').addEventListener('click', (e) => {
  e.preventDefault();
  showView('home');
});

/* ---------- MOBILE MENU ---------- */
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const menuToggle = document.getElementById('menuToggle');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileMenuOverlay.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  mobileMenuOverlay.classList.add('open');
});
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

/* ---------- SEARCH OVERLAY ---------- */
const searchOverlay = document.getElementById('searchOverlay');
const searchToggle = document.getElementById('searchToggle');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
  searchOverlay.classList.add('open');
  searchInput.focus();
});
searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('open');
  searchInput.value = '';
});

/* ---------- SCROLL-REVEAL ---------- */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.obser
  ve(el));
