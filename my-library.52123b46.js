!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequirea226;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequirea226=u);var c={watched:document.querySelector(".js-btn-watched"),queue:document.querySelector(".js-btn-queue")};c.watched.addEventListener("click",(function(){c.queue.classList.contains("library__btn--current")?(c.queue.classList.remove("library__btn--current"),c.watched.classList.add("library__btn--current")):c.watched.classList.add("library__btn--current")})),c.queue.addEventListener("click",(function(){c.watched.classList.contains("library__btn--current")?(c.watched.classList.remove("library__btn--current"),c.queue.classList.add("library__btn--current")):c.queue.classList.add("library__btn--current")}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l.default(e,t,r[t])}))}return e};var a,l=(a=u("hKHmD"))&&a.__esModule?a:{default:a};var i=u("4LMMA"),d=u("lXd85"),s=document.querySelector(".listFilm");function f(t){var r=(0,i.getStorage)(t);if(void 0===r||0===r.length)console.log("error: нічого не добавлено ");else{var n=r.map((function(t){console.log(t),(0,d.headMarkup)(e(o)({},t))}));s.innerHTML="",s.insertAdjacentHTML("beforeend",n),console.log("ответ для рендера",r)}}document.querySelector(".library_watched").addEventListener("click",(function(){return f("watchedList")})),document.querySelector(".library_queue").addEventListener("click",(function(){return f("queueList")})),u("5YNLl"),u("4uNB6")}();
//# sourceMappingURL=my-library.52123b46.js.map
