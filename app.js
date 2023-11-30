const burgerBtn = document.querySelector('#burgerButton');
const burgerList = document.querySelector('.burger-list');
const closeBruger = document.querySelector('#closeBurger');

burgerBtn.addEventListener('click', ()=>{
    burgerList.style.transform = "translateX(0)";
})
closeBruger.addEventListener('click', ()=>{
    burgerList.style.transform = "translateX(100%)";
})