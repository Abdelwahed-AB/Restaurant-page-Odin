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
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pages/pageLoad.js");


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

            (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)(parseInt(b.dataset.page));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3pCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkM0QjtBQUNmO0FBQ0E7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQU0sb0NBQW9DLHVEQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFJO0FBQzVCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxtREFBUTtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDbEQ7QUFDQSxxREFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9zdGF0aWNFbGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0UGFnZVwiLCBcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAxLnRleHRDb250ZW50ID0gXCLwn5OMIFVuZGVyIHRoZSBTZWEsIE5vd2hlcmUuXCI7XHJcbiAgICBwMi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJnb2xkLXRleHRcIj7imI48L3NwYW4+IDEyIDM0IDU2IDc4IDkxJztcclxuXHJcbiAgICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMzc1MC41MTgwNjUxNTAzNDkhMmQtMTAuODMxNzE3MzExMDY0NzQ3ITNkMzAuNTAzMjMzNzA4OTEzNzghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDgwNzE1ODViYzE4YWY3NjUhMnpNekRDc0RNd0p6RXhMallpVGlBeE1NS3dORGtuTWpJdU55SlghNWUwITNtMiExc2VuITJzbWEhNHYxNjYyMjE5NDA1NjY1ITVtMiExc2VuITJzbWFcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI3NSVcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDUwcHhcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXI6MDtcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7XHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKFwicmVmZXJyZXJwb2xpY3lcIiwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiKTtcclxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJcIik7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQocDEsIHAyLCBtYXApO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyIsImZ1bmN0aW9uIGhvbWVwYWdlKCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiLCBcImNvbnRhaW5lclwiLCBcIndoaXRlLXRleHRcIik7XHJcblxyXG4gICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiQmVzdCBidXJnZXJzIGluIHRoZSB3aG9sZSB3aWRlIHdvcmxkXCI7XHJcbiAgICBwMi5pbm5lckhUTUwgPSAnTWFkZSB3aXRoIDxzcGFuIGNsYXNzPVwiZ29sZC10ZXh0XCI+bG92ZTwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzPVwiZ29sZC10ZXh0XCI+cGFzc2lvbjwvc3Bhbj4gc2luY2UgMTk4OC4nO1xyXG5cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImltYWdlcy9jaGVmLmpwZ1wiKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJCb2JcIik7XHJcblxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJ0blwiLFwiZmFuY3ktdGV4dFwiKTtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQocDEsIHAyLCBpbWcsIGJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2U7IiwiZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgbGV0IGl0ZW1zID0gW1xyXG4gICAgICAgIG1lbnVJdGVtKFwiSG90QnVyZ1wiLCBcImltYWdlcy9ob3RfYnVyZy5qcGdcIiwgXCJBIHNwaWN5IGJ1cmdlciBmb3IgdGhlIGJyYXZlLlwiKSxcclxuICAgICAgICBtZW51SXRlbShcIkNoaWNrQnVyZ1wiLCBcImltYWdlcy9DaGlja2VuX2J1cmcuanBnXCIsIFwiQSBidXJnZXIgZm9yIHRoZSB3ZWFrIG9mIGhlYXJ0cy5cIiksXHJcbiAgICAgICAgbWVudUl0ZW0oXCJJdGFsaWFuQnVyZ1wiLCBcImltYWdlcy9pdGFsaWFuX2J1cmcuanBnXCIsIFwiQSBjaXJjdWxhciBidXJnZXIsIGl0YWxpYW5zIGFyZSB3ZWlyZC5cIiksXHJcbiAgICAgICAgbWVudUl0ZW0oXCJMb25nQnVyZ1wiLCBcImltYWdlcy9ub3RfYV9idXJnLmpwZ1wiLCBcIkV4dHJhIGxvbmcgYnVyZ2VyLlwiKSxcclxuICAgICAgICBtZW51SXRlbShcIlZlZ2dpZUJ1cmdcIiwgXCJpbWFnZXMvVmVnZ2llX2J1cmcuanBnXCIsIFwiU2NhcmVkIGFyZSB3ZT9cIiksXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIsIFwiY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tdGl0bGVcIiwgXCJnb2xkLXRleHRcIiwgXCJmYW5jeS10ZXh0XCIpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcclxuXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGltZywgbmFtZSwgZGVzYyk7XHJcbiAgICAgICAgbWVudS5hcHBlbmQobWVudUl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmxldCBtZW51SXRlbSA9IChuYW1lLCBpbWFnZSwgZGVzYyk9PnsgcmV0dXJuIHtuYW1lLCBpbWFnZSwgZGVzY30gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSBcIi4vc3RhdGljRWxlbXMuanNcIlxyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiXHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVQYWdlLmpzXCJcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFBhZ2UuanNcIlxyXG5cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgYm9keS5hcHBlbmQoaGVhZGVyKCksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCBmb290ZXIoKSk7XHJcbiAgICBsb2FkUGFnZSgwKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhclBhZ2UoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgICBsZXQgY2hpbGQgPSBtYWluLmxhc3RDaGlsZDtcclxuICAgIHdoaWxlKGNoaWxkKXtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICBjaGlsZCA9IG1haW4ubGFzdENoaWxkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZShwYWdlKXtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbiAgICBzd2l0Y2gocGFnZSl7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAvL01lbnUgcGFnZVxyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIC8vY29udGFjdCBwYWdlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGNvbnRhY3QoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vbWFpbiBwYWdlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGhvbWUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9hZFBhZ2UsIGluaXR9IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCl7XHJcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcclxuXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcInJlc3QtbmFtZVwiLCBcImZhbmN5LXRleHRcIiwgXCJ1bmRlcmxpbmUtZ29sZFwiKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIkJvYidzIEJ1cmdlcnNcIjtcclxuXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGxldCBidG5zID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaTwzOyBpKyspe1xyXG4gICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xyXG4gICAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhZ2VcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgYi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhZ2VcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgICAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgICAgICAgIGJ0bnMuZm9yRWFjaCgoYik9PntcclxuICAgICAgICAgICAgICAgIGIuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi1uYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdi1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICBsb2FkUGFnZShwYXJzZUludChiLmRhdGFzZXQucGFnZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ0bnMucHVzaChiKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kKC4uLmJ0bnMpO1xyXG4gICAgaC5hcHBlbmQobG9nbywgbmF2KTtcclxuXHJcbiAgICByZXR1cm4gaDtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9vdGVyKCl7XHJcbiAgICBsZXQgZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiJmNvcHkgQWJkLUFCXCI7XHJcblxyXG4gICAgZm9vdC5hcHBlbmQocCk7XHJcbiAgICByZXR1cm4gZm9vdDtcclxufVxyXG5cclxuZXhwb3J0IHtoZWFkZXIsIGZvb3Rlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkUGFnZSwgaW5pdCB9IGZyb20gXCIuL3BhZ2VzL3BhZ2VMb2FkXCI7XHJcblxyXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9