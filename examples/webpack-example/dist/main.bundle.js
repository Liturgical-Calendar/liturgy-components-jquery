/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/unplugged/liturgy-components-jquery-virtual-c3524971ac/node_modules/liturgy-components-jquery/dist/liturgy-components-jquery.bundle.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/unplugged/liturgy-components-jquery-virtual-c3524971ac/node_modules/liturgy-components-jquery/dist/liturgy-components-jquery.bundle.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*! For license information please see liturgy-components-jquery.bundle.js.LICENSE.txt */\n!function(e,t){ true?module.exports=t(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jQuery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))):0}(this,(e=>(()=>{var t={634:function(e,t){var a,n;void 0===(n=\"function\"==typeof(a=function(){class e{static apiUrl=\"https://litcal.johnromanodorazio.com/api/dev\";static paths=Object.freeze({calendars:\"/calendars\",calendar:\"/calendar\",events:\"/events\",easter:\"/easter\",decrees:\"/decrees\",data:\"/data\",missals:\"/missals\",tests:\"/tests\",schemas:\"/schemas\"});static metadata=null;static getCalendars(){return fetch(`${this.apiUrl}${this.paths.calendars}`).then((e=>{if(e.ok)return e.json()})).then((e=>{const{litcal_metadata:t}=e;return this.metadata=t,this.metadata})).catch((e=>(console.error(e),!1)))}static getCalendar(e=null){return fetch(`${this.apiUrl}${this.paths.calendar}${e?`/${e}`:\"\"}`)}static getNationalCalendar(e,t=null){return fetch(`${this.apiUrl}${this.paths.calendar}/nation/${e}${t?`/${t}`:\"\"}`)}static getDiocesanCalendar(e,t=null){return fetch(`${this.apiUrl}${this.paths.calendar}/diocese/${e}${t?`/${t}`:\"\"}`)}static init(){return this.getCalendars()}}return e})?a.apply(t,[]):a)||(e.exports=n)},83:(e,t,a)=>{var n,i,s;i=[a(786)],void 0===(s=\"function\"==typeof(n=function(e){let t=null;class a{static#e=[];static#t=[];static#a=[];#n=[];#i={};#s=[];#o=null;optionsBuilt=!1;constructor(e=\"en\"){this.#o=new Intl.DisplayNames([e],{type:\"region\"})}static hasNationalCalendarWithDioceses(e){return a.#a.filter((t=>t?.calendar_id===e)).length>0}static addNationalCalendarWithDioceses(e){const t=a.#e.find((t=>t.calendar_id===e));a.#a.push(t)}static setNationalCalendars(e){a.#e=e}static setDiocesanCalendars(e){a.#t=e}addNationOption(e,t=!1){let a=`<option data-calendartype=\"national\" value=\"${e.calendar_id}\"${t?\" selected\":\"\"}>${this.#o.of(e.calendar_id)}</option>`;this.#n.push(a)}addDioceseOption(e){let t=`<option data-calendartype=\"diocesan\" value=\"${e.calendar_id}\">${e.diocese}</option>`;this.#i[e.nation].push(t)}buildAllOptions(){this.optionsBuilt=!0,a.#t.forEach((e=>{!1===a.hasNationalCalendarWithDioceses(e.nation)&&a.addNationalCalendarWithDioceses(e.nation),!1===this.#i.hasOwnProperty(e.nation)&&(this.#i[e.nation]=[]),this.addDioceseOption(e)})),a.#e.sort(((e,t)=>this.#o.of(e.calendar_id).localeCompare(this.#o.of(t.calendar_id)))),a.#e.forEach((e=>{!1===a.hasNationalCalendarWithDioceses(e.calendar_id)&&(\"VA\"===e.calendar_id?this.addNationOption(e,!0):this.addNationOption(e))})),a.#a.sort(((e,t)=>this.#o.of(e.calendar_id).localeCompare(this.#o.of(t.calendar_id)))),a.#a.forEach((e=>{this.addNationOption(e);let t=`<optgroup label=\"${this.#o.of(e.calendar_id)}\">${this.#i[e.calendar_id].join(\"\")}</optgroup>`;this.#s.push(t)}))}get nationsInnerHtml(){return this.#n.join(\"\")}get diocesesInnerHtml(){return this.#s.join(\"\")}}return e.fn.liturgicalCalendarsSelect=function(n){const i={selectClass:\"\",filter:\"none\",locale:\"en\"},s={};return this.each((function(){const o=e(this),l=e.extend({},i,n,o.data());let r=e(\"<select/>\");if(this.classList.length&&r.addClass(this.className),!1===s.hasOwnProperty(l.locale)&&(s[l.locale]=new a(l.locale)),l.selectClass&&r.addClass(l.selectClass),null===t){if(\"undefined\"==typeof LitCalApiClient&&\"undefined\"==typeof LiturgicalCalendarComponents)throw new Error(\"The LitCalApiClient class is not available. Please include the litcal-api-client.js file.\");null===LitCalApiClient.metadata&&LitCalApiClient.init().then((e=>{if(!1===e)throw new Error(\"The LitCalApiClient class was unable to initialize.\");if(\"object\"!=typeof e)throw new Error(\"The LitCalApiClient class was unable to initialize: expected object, found \"+typeof e+\".\");if(!1===e.hasOwnProperty(\"national_calendars\")||!1===e.hasOwnProperty(\"diocesan_calendars\"))throw new Error(\"The LitCalApiClient class was unable to initialize: expected object with `national_calendars` and `diocesan_calendars` properties.\");t=LitCalApiClient.metadata;const{national_calendars:n,diocesan_calendars:i}=t;a.setNationalCalendars(n),a.setDiocesanCalendars(i),!1===s[l.locale].optionsBuilt&&s[l.locale].buildAllOptions(),c()}))}else!1===s[l.locale].optionsBuilt&&s[l.locale].buildAllOptions(),c();function c(){\"nations\"===l.filter?r.html(s[l.locale].nationsInnerHtml):\"dioceses\"===l.filter?r.html(s[l.locale].diocesesInnerHtml):r.html(s[l.locale].nationsInnerHtml+s[l.locale].diocesesInnerHtml),o.replaceWith(r)}}))},e})?n.apply(t,i):n)||(e.exports=s)},786:t=>{\"use strict\";t.exports=e}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})};var i={};return(()=>{\"use strict\";n.r(i),n.d(i,{LitCalApiClient:()=>s.a,default:()=>t.a});var e=n(786),t=n.n(e),a=n(634),s=n.n(a);n(83),window.jQuery||(window.jQuery=t(),window.$=t())})(),i})()));\n\n//# sourceURL=webpack://jquery-liturgical-calendars-select-webpack-example/./.yarn/unplugged/liturgy-components-jquery-virtual-c3524971ac/node_modules/liturgy-components-jquery/dist/liturgy-components-jquery.bundle.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var liturgy_components_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! liturgy-components-jquery */ \"./.yarn/unplugged/liturgy-components-jquery-virtual-c3524971ac/node_modules/liturgy-components-jquery/dist/liturgy-components-jquery.bundle.js\");\n/* harmony import */ var liturgy_components_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(liturgy_components_jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n(function($) {\n  liturgy_components_jquery__WEBPACK_IMPORTED_MODULE_0__.LitcalApiClient.apiUrl = 'http://localhost:8000';\n  $(document).ready(function() {\n    $('.litcal-calendars-select').liturgicalCalendarsSelect({\n      selectClass: 'my-select'\n    });\n  });\n})((liturgy_components_jquery__WEBPACK_IMPORTED_MODULE_0___default()));\n\n\n//# sourceURL=webpack://jquery-liturgical-calendars-select-webpack-example/./main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;