const menuButton = document.querySelector('.nav-toggleBtn');
const menu = document.querySelector('.nav-menu');
const icons = document.querySelector('.nav-icons');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
