const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('.signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3500);
});
