/*! For license information please see liturgy-components-jquery.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jQuery")):"function"==typeof define&&define.amd?define(["jQuery"],t):"object"==typeof exports?exports.LiturgicalCalendarComponents=t(require("jQuery")):e.LiturgicalCalendarComponents=t(e.jQuery)}(this,(e=>(()=>{var t={634:function(e,t){var a,n;void 0===(n="function"==typeof(a=function(){class e{static apiUrl="https://litcal.johnromanodorazio.com/api/dev";static paths=Object.freeze({calendars:"/calendars",calendar:"/calendar",events:"/events",easter:"/easter",decrees:"/decrees",data:"/data",missals:"/missals",tests:"/tests",schemas:"/schemas"});static metadata=null;static getCalendars(){return fetch(`${this.apiUrl}${this.paths.calendars}`).then((e=>{if(e.ok)return e.json()})).then((e=>{const{litcal_metadata:t}=e;return this.metadata=t,this.metadata})).catch((e=>(console.error(e),!1)))}static getCalendar(e=null){return fetch(`${this.apiUrl}${this.paths.calendar}${e?`/${e}`:""}`)}static getNationalCalendar(e,t=null){return fetch(`${this.apiUrl}${this.paths.calendar}/nation/${e}${t?`/${t}`:""}`)}static getDiocesanCalendar(e,t=null){return fetch(`${this.apiUrl}${this.paths.calendar}/diocese/${e}${t?`/${t}`:""}`)}static init(){return this.getCalendars()}}return e})?a.apply(t,[]):a)||(e.exports=n)},83:(e,t,a)=>{var n,i,s;i=[a(786)],void 0===(s="function"==typeof(n=function(e){let t=null;class a{static#e=[];static#t=[];static#a=[];#n=[];#i={};#s=[];#o=null;optionsBuilt=!1;constructor(e="en"){this.#o=new Intl.DisplayNames([e],{type:"region"})}static hasNationalCalendarWithDioceses(e){return a.#a.filter((t=>t?.calendar_id===e)).length>0}static addNationalCalendarWithDioceses(e){const t=a.#e.find((t=>t.calendar_id===e));a.#a.push(t)}static setNationalCalendars(e){a.#e=e}static setDiocesanCalendars(e){a.#t=e}addNationOption(e,t=!1){let a=`<option data-calendartype="national" value="${e.calendar_id}"${t?" selected":""}>${this.#o.of(e.calendar_id)}</option>`;this.#n.push(a)}addDioceseOption(e){let t=`<option data-calendartype="diocesan" value="${e.calendar_id}">${e.diocese}</option>`;this.#i[e.nation].push(t)}buildAllOptions(){this.optionsBuilt=!0,a.#t.forEach((e=>{!1===a.hasNationalCalendarWithDioceses(e.nation)&&a.addNationalCalendarWithDioceses(e.nation),!1===this.#i.hasOwnProperty(e.nation)&&(this.#i[e.nation]=[]),this.addDioceseOption(e)})),a.#e.sort(((e,t)=>this.#o.of(e.calendar_id).localeCompare(this.#o.of(t.calendar_id)))),a.#e.forEach((e=>{!1===a.hasNationalCalendarWithDioceses(e.calendar_id)&&("VA"===e.calendar_id?this.addNationOption(e,!0):this.addNationOption(e))})),a.#a.sort(((e,t)=>this.#o.of(e.calendar_id).localeCompare(this.#o.of(t.calendar_id)))),a.#a.forEach((e=>{this.addNationOption(e);let t=`<optgroup label="${this.#o.of(e.calendar_id)}">${this.#i[e.calendar_id].join("")}</optgroup>`;this.#s.push(t)}))}get nationsInnerHtml(){return this.#n.join("")}get diocesesInnerHtml(){return this.#s.join("")}}return e.fn.liturgicalCalendarsSelect=function(n){const i={selectClass:"",filter:"none",locale:"en"},s={};return this.each((function(){const o=e(this),l=e.extend({},i,n,o.data());let r=e("<select/>");if(this.classList.length&&r.addClass(this.className),!1===s.hasOwnProperty(l.locale)&&(s[l.locale]=new a(l.locale)),l.selectClass&&r.addClass(l.selectClass),null===t){if("undefined"==typeof LitCalApiClient&&"undefined"==typeof LiturgicalCalendarComponents)throw new Error("The LitCalApiClient class is not available. Please include the litcal-api-client.js file.");null===LitCalApiClient.metadata&&LitCalApiClient.init().then((e=>{if(!1===e)throw new Error("The LitCalApiClient class was unable to initialize.");if("object"!=typeof e)throw new Error("The LitCalApiClient class was unable to initialize: expected object, found "+typeof e+".");if(!1===e.hasOwnProperty("national_calendars")||!1===e.hasOwnProperty("diocesan_calendars"))throw new Error("The LitCalApiClient class was unable to initialize: expected object with `national_calendars` and `diocesan_calendars` properties.");t=LitCalApiClient.metadata;const{national_calendars:n,diocesan_calendars:i}=t;a.setNationalCalendars(n),a.setDiocesanCalendars(i),!1===s[l.locale].optionsBuilt&&s[l.locale].buildAllOptions(),c()}))}else!1===s[l.locale].optionsBuilt&&s[l.locale].buildAllOptions(),c();function c(){"nations"===l.filter?r.html(s[l.locale].nationsInnerHtml):"dioceses"===l.filter?r.html(s[l.locale].diocesesInnerHtml):r.html(s[l.locale].nationsInnerHtml+s[l.locale].diocesesInnerHtml),o.replaceWith(r)}}))},e})?n.apply(t,i):n)||(e.exports=s)},786:t=>{"use strict";t.exports=e}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{LitCalApiClient:()=>s.a,default:()=>t.a});var e=n(786),t=n.n(e),a=n(634),s=n.n(a);n(83),window.jQuery||(window.jQuery=t(),window.$=t())})(),i})()));