var burger = document.querySelector(".menu-burger"); 
var menu = document.querySelector(".menu");
burger.addEventListener('click', showMenu);

function showMenu(){
    burger.classList.toggle("rotate");
    menu.classList.toggle("display");
}