// Friendly toggle for mobile menu
const menu = document.getElementById('menu');
const nav = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

// Footer footer: dynamic dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
