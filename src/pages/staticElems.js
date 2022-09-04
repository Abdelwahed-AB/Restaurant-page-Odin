import { loadPage } from "./pageLoad";

function header(){
    let h = document.createElement("header");
    h.classList.add("header")

    let logo = document.createElement("h1");
    logo.classList.add("rest-name", "fancy-text", "underline-gold");
    logo.textContent = "Bob's Burgers";

    let nav = document.createElement("nav");
    let btns = [];

    for(let i = 0; i<3; i++){
        let b = document.createElement("button");
        b.classList.add("button-nav");
        switch(i){
            case 0:
                b.textContent = "Home";
                b.setAttribute("data-page", "0");
                b.classList.add("button-nav-active");
                break;
            case 1:
                b.textContent = "Menu";
                b.setAttribute("data-page", "1");
                break;
            case 2:
                b.textContent = "Contact";
                b.setAttribute("data-page", "2");
                break;
        }

        b.addEventListener("click", (e)=>{
            btns.forEach((b)=>{
                b.classList.remove("button-nav-active");
            });
            b.classList.add("button-nav-active");

            loadPage(parseInt(b.dataset.page));
        });
        btns.push(b);
    }

    nav.append(...btns);
    h.append(logo, nav);

    return h;
}

function footer(){
    let foot = document.createElement("footer");
    let p = document.createElement("p");
    p.textContent = "&copy Abd-AB";

    foot.append(p);
    return foot;
}

export {header, footer};