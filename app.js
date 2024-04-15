const burgerBtn = document.querySelector("#burgerButton");
const navList = document.querySelector("#nav-list");
const closeBruger = document.querySelector("#closeBurger");

burgerBtn.addEventListener("click", () => {
  navList.classList.add("active");
});
closeBruger.addEventListener("click", () => {
  navList.classList.remove("active");
});
