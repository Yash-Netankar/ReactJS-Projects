const nav = document.getElementsByTagName("nav");

window.addEventListener("scroll", ()=>{
    if(scrollY>20){
        nav.classList.add("scroll");
    }
})