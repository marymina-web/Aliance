const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
navbar.classList.add("navbar-light"); //вешаем класс navbar-light
logo.href.baseVal = "img/sprite.svg#logo";
};

const lightModeOff = (event) => {
navbar.classList.remove("navbar-light"); //удаляем класс navbar-light, если нет скрола >1
logo.href.baseVal = "img/sprite.svg#logo-light";
};
 
const openMenu = (event) => { 
  // функция открытия меню
  menu.classList.add("is-open") // вешает класс is-open на меню
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // и запрещает прокрутку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => { 
  // функция закрытия меню
  menu.classList.remove("is-open") // убирает класс is-open на меню
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