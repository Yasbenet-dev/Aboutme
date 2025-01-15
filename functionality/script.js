const menu = document.querySelector("menu")
const nav = document.querySelector(".links")

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classLis.toggle('active');
}