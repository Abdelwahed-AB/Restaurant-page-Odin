import {header, footer} from "./staticElems.js"
import home from "./homepage.js"
import menu from "./menuPage.js"
import contact from "./contactPage.js"

function init(){
    let body = document.body;
    body.append(header(), document.createElement("main"), footer());
    loadPage(0);
}
function clearPage(){
    let main = document.querySelector("main");
    let child = main.lastChild;
    while(child){
        main.removeChild(child);
        child = main.lastChild;
    }
}

function loadPage(page){
    clearPage();
    let main = document.querySelector("main");

    switch(page){
        case 1:
            //Menu page
            main.append(menu());
            break;
        case 2:
            //contact page
            main.append(contact());
            break;
        default:
            //main page
            main.append(home());
    }
}

export {loadPage, init}