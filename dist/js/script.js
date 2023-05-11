const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav2");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

// const burger = document.querySelector(".toggle__menu");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 50) {
//     header.classList.remove("blue");
//     burger.style="background: $clr-blue; border-radius: .5rem";
//   } else {
//     header.classList.add("blue");
//   }
// });