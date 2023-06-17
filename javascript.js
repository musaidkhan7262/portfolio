const nav=document.querySelector(".nav")
const header=document.querySelector("main")
console.log(nav)
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>header.offsetTop){
        nav.classList.remove("nav")
        nav.classList.add("new_nav")
    }else{
        nav.classList.remove("new_nav")
        nav.classList.add("nav")
    }
})
const menu=document.querySelector(".hide_menu")
const menu_btn=document.querySelector(".bi-list")
const close_menu_btn=document.querySelector(".bi-x-lg")
menu_btn.addEventListener("click",()=>{
    menu.classList.toggle("main_menu")
})
close_menu_btn.addEventListener("click",()=>{
    menu.classList.toggle("main_menu")
})