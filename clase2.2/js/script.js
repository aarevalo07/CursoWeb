const menuIconEl=document.querySelector('#menu-icon');
const menuEl=document.querySelector('#menu');
const headerEl = document.querySelector("header");

menuIconEl.addEventListener("click",()=>{
    menuIconEl.classList.toggle('bx-x');
    menuEl.classList.toggle('open');
})
window.onscroll = () =>{
    menuIconEl.classList.remove('bx-x');
    menuEl.classList.remove('open');
}

addEventListener("scroll",()=>{
   headerEl.classList.toggle("sticky",window.scrollY>200)
})