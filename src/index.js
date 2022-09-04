import { loadPage, init } from "./pages/pageLoad";

init();

let navBtns = document.querySelectorAll(".button-nav");

navBtns.forEach((b)=>{
    if(b.dataset.page == "0") b.classList.add("button-nav-active");
    b.addEventListener("click", (e)=>{
        navBtns.forEach((b)=>{
            b.classList.remove("button-nav-active");
        });
        b.classList.add("button-nav-active");

        loadPage(parseInt(b.dataset.page));
    });
});

let orderNow =  document.querySelector(".order-btn");
orderNow.addEventListener("click",(e)=>{
    loadPage(2);
    navBtns.forEach((b)=>{
        b.classList.remove("button-nav-active");
        if(b.dataset.page == "2") b.classList.add("button-nav-active");
    });
});