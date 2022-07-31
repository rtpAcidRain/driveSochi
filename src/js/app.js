import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import * as flsFunctions from './modules/fucntions.js';

flsFunctions.isWebp();

// BURGER

const burger = document.querySelector('.burger');
const burgerContainer = document.querySelector('.burger__container');
const burgerOpen = document.querySelector('.burger__icon');
const burgerClose = document.querySelector('.burger__icon--close');

function closeBurger() {
  burgerContainer.setAttribute('style', 'right: -100%');
  setTimeout(() => {
    burger.classList.remove('open');
  }, 400);
}

burger.addEventListener('click', () => {
  closeBurger();
});

burgerContainer.addEventListener('click', (e) => {
  e.stopPropagation();
});

burgerClose.addEventListener('click', closeBurger);

burgerOpen.addEventListener('click', () => {
  setTimeout(() => {
    burger.classList.add('open');
  }, 0);
  setTimeout(() => {
    burgerContainer.setAttribute('style', 'right: 0');
  }, 10);
});

// Навигация
const navigate = document.querySelectorAll('.navigate');

navigate.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const blockID = el.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeBurger();
  });
});

// ОТКРЫТИЕ/ЗАКРЫТИЕ СПИСКА
const answer = document.querySelectorAll('.answer');

answer.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('opened');
  });
});

// Swiper
const reviews = new Swiper('.reviews__slider', {
  modules: [Navigation, EffectCoverflow, Autoplay],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: '.reviews__slider-button-next',
    prevEl: '.reviews__slider-button-prev',
  },
});

const fordGreen = new Swiper('#fordGreen', {
  modules: [Navigation, Pagination],

  speed: 500,

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,

  spaceBetween: 60,

  pagination: {
    el: '.fordGreen-pag',
    clickable: true,
  },

  navigation: {
    nextEl: '.fordGreen-next',
    prevEl: '.fordGreen-prev',
  },
});
