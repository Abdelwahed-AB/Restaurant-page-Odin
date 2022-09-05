/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactPage(){
    let container = document.createElement("div");
    container.classList.add("contactPage", "container");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.textContent = "📌 Under the Sea, Nowhere.";
    p2.innerHTML = '<span class="gold-text">☎</span> 12 34 56 78 91';

    let map = document.createElement("iframe");
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13750.518065150349!2d-10.831717311064747!3d30.50323370891378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8071585bc18af765!2zMzDCsDMwJzExLjYiTiAxMMKwNDknMjIuNyJX!5e0!3m2!1sen!2sma!4v1662219405665!5m2!1sen!2sma");
    map.setAttribute("width", "75%");
    map.setAttribute("height", "450px");
    map.setAttribute("style", "border:0;");
    map.setAttribute("loading", "lazy");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    map.setAttribute("allowfullscreen", "");


    container.append(p1, p2, map);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homepage(){
    let container = document.createElement("div");
    container.classList.add("home", "container", "white-text");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.textContent = "Best burgers in the whole wide world";
    p2.innerHTML = 'Made with <span class="gold-text">love</span> and <span class="gold-text">passion</span> since 1988.';

    let img = document.createElement("img");
    img.setAttribute("src", "images/chef.jpg");
    img.setAttribute("alt", "Bob");

    let btn = document.createElement("button");
    btn.classList.add("order-btn","fancy-text");
    btn.textContent = "Order Now";


    container.append(p1, p2, img, btn);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu(){
    let items = [
        menuItem("HotBurg", "images/hot_burg.jpg", "A spicy burger for the brave."),
        menuItem("ChickBurg", "images/Chicken_burg.jpg", "A burger for the weak of hearts."),
        menuItem("ItalianBurg", "images/italian_burg.jpg", "A circular burger, italians are weird."),
        menuItem("LongBurg", "images/not_a_burg.jpg", "Extra long burger."),
        menuItem("VeggieBurg", "images/Veggie_burg.jpg", "Scared are we?"),
    ];

    let menu = document.createElement("div");
    menu.classList.add("menuPage", "container");

    items.forEach((item)=>{
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        let img = document.createElement("img");
        img.setAttribute("src", item.image);

        let name = document.createElement("h2");
        name.classList.add("menu-item-title", "gold-text", "fancy-text");
        name.textContent = item.name;

        let desc = document.createElement("p");
        desc.textContent = item.desc;

        menuItem.append(img, name, desc);
        menu.append(menuItem);
    });

    return menu;
}

let menuItem = (name, image, desc)=>{ return {name, image, desc} };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/pages/pageLoad.js":
/*!*******************************!*\
  !*** ./src/pages/pageLoad.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _staticElems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticElems.js */ "./src/pages/staticElems.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/pages/homepage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/pages/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage.js */ "./src/pages/contactPage.js");





function init(){
    let body = document.body;
    body.append((0,_staticElems_js__WEBPACK_IMPORTED_MODULE_0__.header)(), document.createElement("main"), (0,_staticElems_js__WEBPACK_IMPORTED_MODULE_0__.footer)());
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
            main.append((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
            break;
        case 2:
            //contact page
            main.append((0,_contactPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
            break;
        default:
            //main page
            main.append((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }
}



/***/ }),

/***/ "./src/pages/staticElems.js":
/*!**********************************!*\
  !*** ./src/pages/staticElems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
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
        btns.push(b);
    }

    nav.append(...btns);
    h.append(logo, nav);

    return h;
}

function footer(){
    let foot = document.createElement("footer");
    let p = document.createElement("p");
    p.textContent = "Abd-AB";

    foot.append(p);
    return foot;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageLoad */ "./src/pages/pageLoad.js");


(0,_pages_pageLoad__WEBPACK_IMPORTED_MODULE_0__.init)();

let navBtns = document.querySelectorAll(".button-nav");

navBtns.forEach((b)=>{
    if(b.dataset.page == "0") b.classList.add("button-nav-active");
    b.addEventListener("click", (e)=>{
        navBtns.forEach((b)=>{
            b.classList.remove("button-nav-active");
        });
        b.classList.add("button-nav-active");

        (0,_pages_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)(parseInt(b.dataset.page));
    });
});

let orderNow =  document.querySelector(".order-btn");
orderNow.addEventListener("click",(e)=>{
    (0,_pages_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)(2);
    navBtns.forEach((b)=>{
        b.classList.remove("button-nav-active");
        if(b.dataset.page == "2") b.classList.add("button-nav-active");
    });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3pCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkM0QjtBQUNmO0FBQ0E7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQU0sb0NBQW9DLHVEQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFJO0FBQzVCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNsRDtBQUNBLHFEQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSx5REFBUTtBQUNoQixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9zdGF0aWNFbGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0UGFnZVwiLCBcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAxLnRleHRDb250ZW50ID0gXCLwn5OMIFVuZGVyIHRoZSBTZWEsIE5vd2hlcmUuXCI7XHJcbiAgICBwMi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJnb2xkLXRleHRcIj7imI48L3NwYW4+IDEyIDM0IDU2IDc4IDkxJztcclxuXHJcbiAgICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMzc1MC41MTgwNjUxNTAzNDkhMmQtMTAuODMxNzE3MzExMDY0NzQ3ITNkMzAuNTAzMjMzNzA4OTEzNzghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDgwNzE1ODViYzE4YWY3NjUhMnpNekRDc0RNd0p6RXhMallpVGlBeE1NS3dORGtuTWpJdU55SlghNWUwITNtMiExc2VuITJzbWEhNHYxNjYyMjE5NDA1NjY1ITVtMiExc2VuITJzbWFcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI3NSVcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDUwcHhcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXI6MDtcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwicmVmZXJyZXJwb2xpY3lcIiwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiKTtcclxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJcIik7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQocDEsIHAyLCBtYXApO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyIsImZ1bmN0aW9uIGhvbWVwYWdlKCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiLCBcImNvbnRhaW5lclwiLCBcIndoaXRlLXRleHRcIik7XHJcblxyXG4gICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiQmVzdCBidXJnZXJzIGluIHRoZSB3aG9sZSB3aWRlIHdvcmxkXCI7XHJcbiAgICBwMi5pbm5lckhUTUwgPSAnTWFkZSB3aXRoIDxzcGFuIGNsYXNzPVwiZ29sZC10ZXh0XCI+bG92ZTwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzPVwiZ29sZC10ZXh0XCI+cGFzc2lvbjwvc3Bhbj4gc2luY2UgMTk4OC4nO1xyXG5cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImltYWdlcy9jaGVmLmpwZ1wiKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJCb2JcIik7XHJcblxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJ0blwiLFwiZmFuY3ktdGV4dFwiKTtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQocDEsIHAyLCBpbWcsIGJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2U7IiwiZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgbGV0IGl0ZW1zID0gW1xyXG4gICAgICAgIG1lbnVJdGVtKFwiSG90QnVyZ1wiLCBcImltYWdlcy9ob3RfYnVyZy5qcGdcIiwgXCJBIHNwaWN5IGJ1cmdlciBmb3IgdGhlIGJyYXZlLlwiKSxcclxuICAgICAgICBtZW51SXRlbShcIkNoaWNrQnVyZ1wiLCBcImltYWdlcy9DaGlja2VuX2J1cmcuanBnXCIsIFwiQSBidXJnZXIgZm9yIHRoZSB3ZWFrIG9mIGhlYXJ0cy5cIiksXHJcbiAgICAgICAgbWVudUl0ZW0oXCJJdGFsaWFuQnVyZ1wiLCBcImltYWdlcy9pdGFsaWFuX2J1cmcuanBnXCIsIFwiQSBjaXJjdWxhciBidXJnZXIsIGl0YWxpYW5zIGFyZSB3ZWlyZC5cIiksXHJcbiAgICAgICAgbWVudUl0ZW0oXCJMb25nQnVyZ1wiLCBcImltYWdlcy9ub3RfYV9idXJnLmpwZ1wiLCBcIkV4dHJhIGxvbmcgYnVyZ2VyLlwiKSxcclxuICAgICAgICBtZW51SXRlbShcIlZlZ2dpZUJ1cmdcIiwgXCJpbWFnZXMvVmVnZ2llX2J1cmcuanBnXCIsIFwiU2NhcmVkIGFyZSB3ZT9cIiksXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIsIFwiY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tdGl0bGVcIiwgXCJnb2xkLXRleHRcIiwgXCJmYW5jeS10ZXh0XCIpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcclxuXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGltZywgbmFtZSwgZGVzYyk7XHJcbiAgICAgICAgbWVudS5hcHBlbmQobWVudUl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmxldCBtZW51SXRlbSA9IChuYW1lLCBpbWFnZSwgZGVzYyk9PnsgcmV0dXJuIHtuYW1lLCBpbWFnZSwgZGVzY30gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSBcIi4vc3RhdGljRWxlbXMuanNcIlxyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiXHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVQYWdlLmpzXCJcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFBhZ2UuanNcIlxyXG5cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgYm9keS5hcHBlbmQoaGVhZGVyKCksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCBmb290ZXIoKSk7XHJcbiAgICBsb2FkUGFnZSgwKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhclBhZ2UoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgICBsZXQgY2hpbGQgPSBtYWluLmxhc3RDaGlsZDtcclxuICAgIHdoaWxlKGNoaWxkKXtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICBjaGlsZCA9IG1haW4ubGFzdENoaWxkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZShwYWdlKXtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbiAgICBzd2l0Y2gocGFnZSl7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAvL01lbnUgcGFnZVxyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIC8vY29udGFjdCBwYWdlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGNvbnRhY3QoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vbWFpbiBwYWdlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGhvbWUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9hZFBhZ2UsIGluaXR9IiwiZnVuY3Rpb24gaGVhZGVyKCl7XHJcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcclxuXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcInJlc3QtbmFtZVwiLCBcImZhbmN5LXRleHRcIiwgXCJ1bmRlcmxpbmUtZ29sZFwiKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIkJvYidzIEJ1cmdlcnNcIjtcclxuXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGxldCBidG5zID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaTwzOyBpKyspe1xyXG4gICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xyXG4gICAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhZ2VcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlXCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICAgICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtcGFnZVwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRucy5wdXNoKGIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQoLi4uYnRucyk7XHJcbiAgICBoLmFwcGVuZChsb2dvLCBuYXYpO1xyXG5cclxuICAgIHJldHVybiBoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXIoKXtcclxuICAgIGxldCBmb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCImY29weSBBYmQtQUJcIjtcclxuXHJcbiAgICBmb290LmFwcGVuZChwKTtcclxuICAgIHJldHVybiBmb290O1xyXG59XHJcblxyXG5leHBvcnQge2hlYWRlciwgZm9vdGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRQYWdlLCBpbml0IH0gZnJvbSBcIi4vcGFnZXMvcGFnZUxvYWRcIjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmxldCBuYXZCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpO1xyXG5cclxubmF2QnRucy5mb3JFYWNoKChiKT0+e1xyXG4gICAgaWYoYi5kYXRhc2V0LnBhZ2UgPT0gXCIwXCIpIGIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXYtYWN0aXZlXCIpO1xyXG4gICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgICAgbmF2QnRucy5mb3JFYWNoKChiKT0+e1xyXG4gICAgICAgICAgICBiLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tbmF2LWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2LWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgbG9hZFBhZ2UocGFyc2VJbnQoYi5kYXRhc2V0LnBhZ2UpKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmxldCBvcmRlck5vdyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLWJ0blwiKTtcclxub3JkZXJOb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBsb2FkUGFnZSgyKTtcclxuICAgIG5hdkJ0bnMuZm9yRWFjaCgoYik9PntcclxuICAgICAgICBiLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tbmF2LWFjdGl2ZVwiKTtcclxuICAgICAgICBpZihiLmRhdGFzZXQucGFnZSA9PSBcIjJcIikgYi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdi1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9