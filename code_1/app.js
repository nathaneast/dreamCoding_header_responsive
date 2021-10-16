const menuIcon = document.querySelector('.menuIcon');
const list = document.querySelector('.list-wrapper');
const icons = document.querySelector('.icon-wrapper');

let isOpenAccordion = false;

menuIcon.addEventListener('click', () => {
  isOpenAccordion = !isOpenAccordion;

  if (isOpenAccordion) {
    list.style.display = 'flex';
    icons.style.display = 'flex';
    icons.style.justifyContent = 'center';
  } else {
    list.style.display = 'none';
    icons.style.display = 'none';
  }
});
