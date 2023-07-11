

document.addEventListener("DOMContentLoaded",()=>{

    const hamburger = document.querySelector(".hamburger")//hamburger
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",
()=>{
    /*hamburger.classList.remove("remove");
    navMenu.classList.remove("active");*/

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}))

})