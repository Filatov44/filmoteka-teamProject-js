var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequirea226;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequirea226=o);var a=o("d7HNs");var l=o("9kkjz");const i=document.querySelector(".pagination-btn");function s(t,e){let n="",o="",a=e-1,l=e+1;e>1&&(n+=`<li class="btn prev" onclick="pagination(totalPage, ${e-1})" >\n          <span><i class="fa-solid fa-arrow-left"></i> </span>\n        </li>`),e>2&&(n+='<li class="numb" onclick="pagination(totalPage, 1)"><span>1</span></li>',e>3&&(n+='<li class="dots"><span>...</span></li>')),e==t?a-=2:e==t-1&&(a-=1),1==e?l+=2:2==e&&(l+=1);for(let i=a;i<=l;i++)i>t||(0==i&&(i+=1),o=e==i?"active":"",n+=`<li class="numb ${o}"  onclick="pagination(totalPage, ${i})"><span>${i}</span></li>`);e<t-1&&(e<t-2&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="numb" onclick="pagination(totalPage, ${t})"><span>${t}</span></li>`),e<t&&(n+=`<li class="btn next" onclick="pagination(totalPage, ${e+1})">\n          <span> <i class="fa-solid fa-arrow-right"></i></span>\n        </li>`),i.innerHTML=n}o("b5rV1"),o("bO1YF");a=o("d7HNs");o("b5rV1");var d=o("kYzA7");const r=document.querySelector(".listFilm"),c=document.querySelector(".modal-card"),u=new(0,a.default);function p(){window.removeEventListener("keydown",_),document.body.classList.remove("show-modal"),document.body.style.overflow="auto"}function m(t){t.target===t.currentTarget&&p()}function _(t){"Escape"===t.code&&p()}r.addEventListener("click",(function(t){if("IMG"!==t.target.nodeName&&"H2"!==t.target.nodeName)return;let e=t.target.dataset.id;u.getMoviesById(e).then((t=>{!function(t){const e=(n=t,console.log(n),console.log(`https://image.tmdb.org/t/p/original/${n.poster_path}`),`\n      <div class="modal__backdrop  js-backdrop">\n\n        <div class="modal__container">\n\n            <button class="close-button" data-action="close-modal">\n            </button>\n            <div class="modal__content">\n                <div class="film__poster">\n                    <img class="film__image"\n                        src="https://image.tmdb.org/t/p/original/${n.poster_path}" alt="${n.title}">\n            </div>\n            <div class=" film_description">\n                    <h2 class="film__title">${n.title}</h2>\n\n                    <div class="grid-container">\n                        <table>\n                            <tr>\n                                <td class="film__info">Vote / Votes</td>\n                                <td class="film__vote">${n.vote_average.toFixed(1)}/${n.vote_count}</td>\n                            </tr>\n                            <tr>\n                                <td class="film__info">Popularity</td>\n                                <td class="film__value">${n.popularity.toFixed(1)}</td>\n                            </tr>\n                            <tr>\n                                <td class="film__info">Original Title</td>\n                                <td class="film__original">${n.original_title}</td>\n                            </tr>\n                            <tr>\n                                <td class="film__info">Genre</td>\n                                <td class="film__value">${n.genres.map((t=>t.name)).join(", ")}</td>\n                            </tr>\n                        </table>\n                    </div>\n\n                    <h3 class="film__about">About</h3>\n                    <p class="film__overview">${n.overview}</p>\n\n                    <div class="modal__buttons">\n                        <button type="button" class="film__button btn__watch btnWatchedModal">Add to watched</button>\n                        <button type="button" class="film__button btn__queue btnQueueModal">Add to queue</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n `);var n;c.innerHTML=e,c.classList.add("is-open"),document.body.style.overflow="hidden"}(t);const e=document.querySelector(".close-button");window.addEventListener("keydown",_),e.addEventListener("click",p);document.querySelector(".modal__backdrop").addEventListener("click",m),document.body.classList.add("show-modal");const n=document.querySelector(".btnQueueModal"),o=document.querySelector(".btnWatchedModal");n.addEventListener("click",(()=>(0,d.addToStorage)("queueList",t))),o.addEventListener("click",(()=>(0,d.addToStorage)("watchedList",t)))}))}));const f={listFilm:document.querySelector(".listFilm")};document.querySelector(".preloader-overlay").classList.add("is-open");const v=new(0,a.default);v.getGenres(),v.getMovies(1).then((({results:t,total_results:e,total_pages:n,page:o})=>{const a=t.reduce(((t,e)=>t+(0,l.headMarkup)(e)),"");s(n,o),f.listFilm.insertAdjacentHTML("beforeend",a),document.querySelector(".preloader-overlay").classList.remove("is-open")}));
//# sourceMappingURL=index.7e233c09.js.map
