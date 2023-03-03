window.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"]');
  const burger = document.querySelector('.burger');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();

      const id = anchor.getAttribute('href').substring(1);
      const blockID = document.getElementById(id);
      const abc = window.pageYOffset + blockID.getBoundingClientRect().top;

      const needScroll = abc - 60;

      window.scrollTo({
        top: needScroll,
        behavior: 'smooth',
      });
    });
  }

  // Burger menu
  const burgerMenu = document.querySelector('.burger__menu');
  const close = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu__item a');
  const overlay = document.querySelector('.menu__overlay');

  burgerMenu.addEventListener('click', () => {
    menu.classList.add('active');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  menuLinks.forEach((e) => {
    e.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  // Header
  const header = document.querySelector('.header');
  const headerHeigth = header.clientHeight;

  window.addEventListener('scroll', () => {
    if (this.scrollY > headerHeigth - 80) {
      burger.style.opacity = 1;
    } else if (this.scrollY < headerHeigth) {
      burger.style.opacity = 0;
    }
  });
});
