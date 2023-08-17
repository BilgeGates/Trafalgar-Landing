// show/hide nav menu

const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector("#open-menu-btn");
const navCloseBtn = document.querySelector("#close-menu-btn");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navOpenBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
};

navOpenBtn.addEventListener("click", openNavHandler);
navCloseBtn.addEventListener("click", closeNavHandler);

//  Close nav menu on click of nav link small screens

const navItems = navMenu.querySelectorAll("a");

if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}
