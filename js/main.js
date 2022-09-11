const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
navbar.classList.add("navbar-light"); //вешаем класс navbar-light
logo.style.display =  "block";
logoLight.style.display =  "none";
};

const lightModeOff = (event) => {
navbar.classList.remove("navbar-light"); //удаляем класс navbar-light, если нет скрола >1
logo.style.display =  "none";
logoLight.style.display =  "block";
};
 
const openMenu = (event) => { 
  // функция открытия меню
  menu.classList.add("is-open"); // вешает класс is-open на меню
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // и запрещает прокрутку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => { 
  // функция закрытия меню
  menu.classList.remove("is-open"); // убирает класс is-open на меню
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // и возвращает прокрутку сайта под меню
  this.scrollY < 1 ? lightModeOff() : lightModeOn(); // при отсутствии скролла выключить белый фон, иначе включить
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff(); // if заменяет "?"", после него выполнение условия, ":" - это else, т выполнение условия
});

mMenuToggle.addEventListener("click", (event) => { // на кнопку меню (toggle) вешаем событие (клик) -> запускаем безымянную функцию, которая..
  event.preventDefault(); // ..отменяет стандартные действия при клике по этой ссылке и ..
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
    //содержится ли в меню, в списке классов сожержит ли класс is-open? и если содержит .. то его удали.. если меню закрыто, то открой его
});

const swiper = new Swiper(".swiper", { // инициализируем слайдер
  speed: 400, //скорость перелистывания слайдера
  autoHeight: true, //высота слайдера будет подстраиваться под слайды
  slidesPerView: 1, // кол-во слайдов на экране по умолчанию
  navigation: { //подключаем работу кнопок вперед/назад
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    // when window width is >= px
    768: {
      slidesPerView: 3,
      allowTouchMove: true,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      allowTouchMove: true,
    },
    // when window width is >= 1201px
    1201: {
      slidesPerView: 5,
      allowTouchMove: false,
    },
  }
}); 

const sectionSwiper = new Swiper(".section-swiper", { // инициализируем слайдер
  speed: 400, //скорость перелистывания слайдера
  slidesPerView: 1, // кол-во слайдов на экране по умолчанию
  navigation: { //подключаем работу кнопок вперед/назад
    nextEl: ".section-slider-button-next",
    prevEl: ".section-slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    // when window width is >= 1150px
    1150: {
      slidesPerView: 3,
      allowTouchMove: true,
    },
     // when window width is >= 1201px
     1201: {
      slidesPerView: 4,
      allowTouchMove: false,
    },
  }
}); 