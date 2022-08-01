import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay, Lazy } from 'swiper';
import * as flsFunctions from './modules/fucntions.js';
import $ from 'jquery';

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

const carSlider = new Swiper('.car__slider', {
  modules: [Navigation, Pagination, Lazy],

  speed: 500,

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,

  spaceBetween: 25,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },

  pagination: {
    el: '.car-button-pag',
    clickable: true,
  },

  navigation: {
    nextEl: '.car-button-next',
    prevEl: '.car-button-prev',
  },
});

// Модалка

const orderButtons = document.querySelectorAll('.order-car__button');
const carModal = document.getElementById('orderCar');
const modalCloseButton = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
const modalCheck = document.querySelector('.modal__check');

const carsTitle = document.querySelectorAll('.car__title');
const carsColor = document.querySelectorAll('.car__color');

function closeModalCar() {
  carModal.childNodes[1].style.transform = 'rotateX(90deg)';
  setTimeout(() => {
    carModal.style.display = 'none';
  }, 500);
}

modalCloseButton.addEventListener('click', () => {
  closeModalCar();
});

carModal.addEventListener('click', () => {
  closeModalCar();
});

carModal.childNodes[1].addEventListener('click', (e) => {
  e.stopPropagation();
});

for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function (e) {
    e.preventDefault();
    carModal.style.display = 'flex';
    setTimeout(() => {
      carModal.childNodes[1].style.transform = 'rotate(0)';
    }, 10);
  });
}

$('#orderCarForm').on('submit', function (event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'php/mailCarForm.php',
    data: $(this).serialize(),
  }).done(function () {
    modalForm.style.display = 'none';
    modalCheck.style.display = 'flex';
  });
  return false;
});

$('#footerForm').on('submit', function (event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'php/mailFeedbackForm.php',
    data: $(this).serialize(),
  }).done(function () {
    $('#footerForm').trigger('reset');
  });
  return false;
});
