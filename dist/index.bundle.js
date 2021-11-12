/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.r(e),t.d(e,{default:()=>B});var i={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError:function(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map((function(t){return t.detail})).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;o(this,t),Object.assign(this,this.defaultsDeep(n,e))}var e,a;return e=t,a=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"duration",value:function(t){var e=this.durations[t];return null===e?this.durations.global:e}},{key:"toSecs",value:function(t){return"".concat(t/1e3,"s")}},{key:"applyReplacements",value:function(t,e){if(!t)return this.messages[e]||"";for(var n=0,o=["general",e];n<o.length;n++){var r=o[n];if(this.replacements[r])for(var i in this.replacements[r])t=t.replace(i,this.replacements[r][i])}return t}},{key:"override",value:function(e){return e?new t(e,this):this}},{key:"defaultsDeep",value:function(t,e){var o={};for(var r in t)e.hasOwnProperty(r)?o[r]="object"===n(t[r])&&null!==t[r]?this.defaultsDeep(t[r],e[r]):e[r]:o[r]=t[r];return o}}],a&&r(e.prototype,a),t}(),c="awn",s={popup:"".concat(c,"-popup"),toast:"".concat(c,"-toast"),btn:"".concat(c,"-btn"),confirm:"".concat(c,"-confirm")},u={prefix:s.toast,klass:{label:"".concat(s.toast,"-label"),content:"".concat(s.toast,"-content"),icon:"".concat(s.toast,"-icon"),progressBar:"".concat(s.toast,"-progress-bar"),progressBarPause:"".concat(s.toast,"-progress-bar-paused")},ids:{container:"".concat(s.toast,"-container")}},l={prefix:s.popup,klass:{buttons:"".concat(c,"-buttons"),button:s.btn,successBtn:"".concat(s.btn,"-success"),cancelBtn:"".concat(s.btn,"-cancel"),title:"".concat(s.popup,"-title"),body:"".concat(s.popup,"-body"),content:"".concat(s.popup,"-content"),dotAnimation:"".concat(s.popup,"-loading-dots")},ids:{wrapper:"".concat(s.popup,"-wrapper"),confirmOk:"".concat(s.confirm,"-ok"),confirmCancel:"".concat(s.confirm,"-cancel")}},f={klass:{hiding:"".concat(c,"-hiding")},lib:c};function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e,n,o,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement("div"),n&&(this.newNode.id=n),o&&(this.newNode.className=o),r&&(this.newNode.style.cssText=r),this.parent=e,this.options=i}var e,n;return e=t,n=[{key:"beforeInsert",value:function(){}},{key:"afterInsert",value:function(){}},{key:"insert",value:function(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}},{key:"replace",value:function(t){var e=this;if(this.getElement())return this.beforeDelete().then((function(){return e.updateType(t.type),e.parent.replaceChild(t.newNode,e.el),e.el=e.getElement(t.newNode),e.afterInsert(),e}))}},{key:"beforeDelete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el,n=0;return this.start&&(n=this.options.minDurations[this.type]+this.start-Date.now())<0&&(n=0),new Promise((function(o){setTimeout((function(){e.classList.add(f.klass.hiding),setTimeout(o,t.options.animationDuration)}),n)}))}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(e)?this.beforeDelete(e).then((function(){e.remove(),t.afterDelete()})):null}},{key:"afterDelete",value:function(){}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t?document.getElementById(t.id):null}},{key:"addEvent",value:function(t,e){this.el.addEventListener(t,e)}},{key:"toggleClass",value:function(t){this.el.classList.toggle(t)}},{key:"updateType",value:function(t){this.type=t,this.duration=this.options.duration(this.type)}}],n&&p(e.prototype,n),t}();function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.remaining=n,this.resume()}var e,n;return e=t,(n=[{key:"pause",value:function(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout((function(){window.clearTimeout(t.timerId),t.callback()}),this.remaining)}},{key:"toggle",value:function(){this.paused?this.resume():this.pause()}}])&&y(e.prototype,n),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function k(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(r){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(t,e,n,o){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,o,"".concat(u.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(u.prefix," ").concat(u.prefix,"-").concat(e),"animation-duration: ".concat(n.toSecs(n.animationDuration),";"),n)).updateType(e),r.setInnerHtml(t),r}return e=a,n=[{key:"setInnerHtml",value:function(t){"alert"===this.type&&t&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML='<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label,'<div class="').concat(u.klass.content,'">').concat(t,'</div><span class="').concat(u.klass.icon,'">').concat(this.options.icon(this.type),"</span></div>")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var e=Array.from(this.parent.getElementsByClassName(u.prefix));this.delete(e.find((function(e){return!t.isDeleted(e)})))}}},{key:"afterInsert",value:function(){var t=this;if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",(function(){return t.delete()})),!(this.duration<=0)){this.timer=new h((function(){return t.delete()}),this.duration);for(var e=0,n=["mouseenter","mouseleave"];e<n.length;e++){var o=n[e];this.addEvent(o,(function(){t.isDeleted()||(t.toggleClass(u.klass.progressBarPause),t.timer.toggle())}))}}}},{key:"isDeleted",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t.classList.contains(f.klass.hiding)}},{key:"progressBar",get:function(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(u.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}},{key:"label",get:function(){return'<b class="'.concat(u.klass.label,'">').concat(this.options.label(this.type),"</b>")}}],n&&v(e.prototype,n),a}(d);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function a(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modal",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0;T(this,a);var s="animation-duration: ".concat(o.toSecs(o.animationDuration),";");return(e=i.call(this,document.body,l.ids.wrapper,null,s,o))[l.ids.confirmOk]=r,e[l.ids.confirmCancel]=c,e.className="".concat(l.prefix,"-").concat(n),["confirm","async-block","modal"].includes(n)||(n="modal"),e.updateType(n),e.setInnerHtml(t),e.insert(),e}return e=a,(n=[{key:"setInnerHtml",value:function(t){var e=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":var n=["<button class='".concat(l.klass.button," ").concat(l.klass.successBtn,"'id='").concat(l.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button>")];!1!==this[l.ids.confirmCancel]&&n.push("<button class='".concat(l.klass.button," ").concat(l.klass.cancelBtn,"'id='").concat(l.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button>")),e="".concat(this.options.icon(this.type),"<div class='").concat(l.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(l.klass.content,'">').concat(e,"</div><div class='").concat(l.klass.buttons," ").concat(l.klass.buttons,"-").concat(n.length,"'>").concat(n.join(""),"</div>");break;case"async-block":e="".concat(e,'<div class="').concat(l.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(l.klass.body," ").concat(this.className,'">').concat(e,"</div>")}},{key:"keyupListener",value:function(t){if("async-block"===this.type)return t.preventDefault();switch(t.code){case"Escape":t.preventDefault(),this.delete();case"Tab":if(t.preventDefault(),"confirm"!==this.type||!1===this[l.ids.confirmCancel])return!0;var e=this.okBtn;t.shiftKey?document.activeElement.id==l.ids.confirmOk&&(e=this.cancelBtn):document.activeElement.id!==l.ids.confirmCancel&&(e=this.cancelBtn),e.focus()}}},{key:"afterInsert",value:function(){var t=this;switch(this.listener=function(e){return t.keyupListener(e)},window.addEventListener("keydown",this.listener),this.type){case"async-block":this.start=Date.now();break;case"confirm":this.okBtn.focus(),this.addEvent("click",(function(e){if("BUTTON"!==e.target.nodeName)return!1;t.delete(),t[e.target.id]&&t[e.target.id]()}));break;default:document.activeElement.blur(),this.addEvent("click",(function(e){e.target.id===t.newNode.id&&t.delete()}))}}},{key:"afterDelete",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"okBtn",get:function(){return document.getElementById(l.ids.confirmOk)}},{key:"cancelBtn",get:function(){return document.getElementById(l.ids.confirmCancel)}}])&&E(e.prototype,n),a}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D(this,t),this.options=new a(e)}var e,n;return e=t,(n=[{key:"tip",value:function(t,e){return this._addToast(t,"tip",e).el}},{key:"info",value:function(t,e){return this._addToast(t,"info",e).el}},{key:"success",value:function(t,e){return this._addToast(t,"success",e).el}},{key:"warning",value:function(t,e){return this._addToast(t,"warning",e).el}},{key:"alert",value:function(t,e){return this._addToast(t,"alert",e).el}},{key:"async",value:function(t,e,n,o,r){var i=this._addToast(o,"async",r);return this._afterAsync(t,e,n,r,i)}},{key:"confirm",value:function(t,e,n,o){return this._addPopup(t,"confirm",o,e,n)}},{key:"asyncBlock",value:function(t,e,n,o,r){var i=this._addPopup(o,"async-block",r);return this._afterAsync(t,e,n,r,i)}},{key:"modal",value:function(t,e,n){return this._addPopup(t,e,n)}},{key:"closeToasts",value:function(){for(var t=this.container;t.firstChild;)t.removeChild(t.firstChild)}},{key:"_addPopup",value:function(t,e,n,o,r){return new P(t,e,this.options.override(n),o,r)}},{key:"_addToast",value:function(t,e,n,o){n=this.options.override(n);var r=new w(t,e,n,this.container);return o?o instanceof P?o.delete().then((function(){return r.insert()})):o.replace(r):r.insert()}},{key:"_afterAsync",value:function(t,e,n,o,r){return t.then(this._responseHandler(e,"success",o,r),this._responseHandler(n,"alert",o,r))}},{key:"_responseHandler",value:function(t,e,n,o){var r=this;return function(i){switch(C(t)){case"undefined":case"string":var a="alert"===e?t||i:t;r._addToast(a,e,n,o);break;default:o.delete().then((function(){t&&t(i)}))}}}},{key:"_createContainer",value:function(){return new d(document.body,u.ids.container,"awn-".concat(this.options.position)).insert().el}},{key:"container",get:function(){return document.getElementById(u.ids.container)||this._createContainer()}}])&&x(e.prototype,n),t}();return e})()}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  min-height: 450px;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background:\r\n    radial-gradient(\r\n      ellipse farthest-corner at center top,\r\n      #f39264 0%,\r\n      #f2606f 100%\r\n    );\r\n  color: #fff;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.main_title {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nol {\r\n  padding-left: 0;\r\n  max-height: 280px;\r\n}\r\n\r\n.leaderboard-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin: 5px 10px 0 10px;\r\n}\r\n\r\n.leaderboard-title-inner {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  font-size: 30px;\r\n  color: #fa6855;\r\n}\r\n\r\n.icon-refresh {\r\n  font-size: 25px;\r\n  color: lightgray;\r\n  cursor: pointer;\r\n}\r\n\r\n.app_container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n}\r\n\r\n.score-leaderboard {\r\n  width: 285px;\r\n\r\n  /* height: 308px; */\r\n  max-height: 308px;\r\n  background: linear-gradient(to bottom, #3a404d, #181c26);\r\n  border-radius: 10px;\r\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\r\n}\r\n\r\n.score-leaderboard ol li::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #fa6855;\r\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\r\n  transition: all 0.3s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::before,\r\n.score-leaderboard ol li mark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: -11px;\r\n  left: -9px;\r\n  border-top: 10px solid #c24448;\r\n  border-left: 10px solid transparent;\r\n  transition: all 0.1s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::after {\r\n  left: auto;\r\n  right: -9px;\r\n  border-left: none;\r\n  border-right: 10px solid transparent;\r\n}\r\n\r\n.score-leaderboard h1 {\r\n  font-size: 18px;\r\n  color: #e1e1e1;\r\n  padding: 3px 13px 2px;\r\n}\r\n\r\n.score-leaderboard ol {\r\n  counter-reset: leaderboard;\r\n}\r\n\r\n.score-leaderboard ol li {\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 14px;\r\n  counter-increment: leaderboard;\r\n  padding: 18px 10px 18px 50px;\r\n  cursor: pointer;\r\n  backface-visibility: hidden;\r\n  transform: translateZ(0) scale(1, 1);\r\n}\r\n\r\n.score-leaderboard ol li::before {\r\n  content: counter(leaderboard);\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 15px;\r\n  left: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #c24448;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.score-leaderboard ol li mark {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 18px 10px 18px 50px;\r\n  margin: 0;\r\n  background: none;\r\n  color: #fff;\r\n}\r\n\r\n.score-leaderboard ol li:hover::after {\r\n  opacity: 1;\r\n  transform: scaleX(1.06) scaleY(1.03);\r\n}\r\n\r\n.score-leaderboard ol li:hover mark::before,\r\n.score-leaderboard ol li:hover mark::after {\r\n  opacity: 1;\r\n  transition: all 0.35s ease-in-out;\r\n}\r\n\r\n.score-leaderboard ol li small {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1) {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1)::after {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) {\r\n  background: #e0574f;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2)::after {\r\n  background: #e0574f;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) mark::before,\r\n.score-leaderboard ol li:nth-child(2) mark::after {\r\n  border-top: 6px solid #ba4741;\r\n  bottom: -7px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) {\r\n  background: #d7514d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3)::after {\r\n  background: #d7514d;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) mark::before,\r\n.score-leaderboard ol li:nth-child(3) mark::after {\r\n  border-top: 2px solid #b0433f;\r\n  bottom: -3px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) {\r\n  background: #cd4b4b;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4)::after {\r\n  background: #cd4b4b;\r\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) mark::before,\r\n.score-leaderboard ol li:nth-child(4) mark::after {\r\n  top: -7px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 6px solid #a63d3d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) mark::before,\r\n.score-leaderboard ol li:nth-child(5) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) mark::before,\r\n.score-leaderboard ol li:nth-child(6) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) mark::before,\r\n.score-leaderboard ol li:nth-child(7) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:hover {\r\n  z-index: 2;\r\n  overflow: visible;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputWrapper {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form-class {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  max-width: 360px;\r\n  padding: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.form-wrapper input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  max-height: 260px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-wrapper input:hover {\r\n  background: #f7f7f7;\r\n}\r\n\r\n.form-wrapper button {\r\n  outline: 0;\r\n  background: #4b517f;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-wrapper button:active {\r\n  background: #1f223a;\r\n}\r\n\r\n.form-wrapper button:hover {\r\n  background: #717a9e;\r\n}\r\n\r\n.ErrorMessage {\r\n  color: red;\r\n  height: 0;\r\n  margin: 10px 0 0 0;\r\n  display: none;\r\n}\r\n\r\n.initialScoreContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #c24448;\r\n  border-radius: 10px;\r\n}\r\n\r\n.insideScoreContainer {\r\n  width: 325px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n}\r\n\r\n.insideScoreContainer::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.scoreListContainer {\r\n  margin: 0;\r\n  width: 285px;\r\n}\r\n\r\n.loading {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 285px;\r\n  height: 250px;\r\n  opacity: 1;\r\n  background-color: transparent;\r\n  z-index: 99;\r\n}\r\n\r\n.loading-form {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 360px;\r\n  height: 283px;\r\n  opacity: 0.5;\r\n  background-color: #373d4a;\r\n  z-index: 99;\r\n  border-radius: 10px;\r\n}\r\n\r\n.loading-image {\r\n  z-index: 100;\r\n}\r\n\r\n.loader,\r\n.loader::after {\r\n  border-radius: 50%;\r\n  width: 5em;\r\n  height: 5em;\r\n}\r\n\r\n.loader {\r\n  margin: 60px auto;\r\n  font-size: 10px;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-left: 1.1em solid #fff;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load8 1.1s infinite linear;\r\n  animation: load8 1.1s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.notDisplay {\r\n  display: none;\r\n}\r\n\r\n.auto-refresh {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.auto-refresh label {\r\n  color: black;\r\n  font-size: 12px;\r\n}\r\n.auto-refresh input {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 25px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  min-height: 450px;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background:\r\n    radial-gradient(\r\n      ellipse farthest-corner at center top,\r\n      #f39264 0%,\r\n      #f2606f 100%\r\n    );\r\n  color: #fff;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.main_title {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nol {\r\n  padding-left: 0;\r\n  max-height: 280px;\r\n}\r\n\r\n.leaderboard-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin: 5px 10px 0 10px;\r\n}\r\n\r\n.leaderboard-title-inner {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  font-size: 30px;\r\n  color: #fa6855;\r\n}\r\n\r\n.icon-refresh {\r\n  font-size: 25px;\r\n  color: lightgray;\r\n  cursor: pointer;\r\n}\r\n\r\n.app_container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n}\r\n\r\n.score-leaderboard {\r\n  width: 285px;\r\n\r\n  /* height: 308px; */\r\n  max-height: 308px;\r\n  background: linear-gradient(to bottom, #3a404d, #181c26);\r\n  border-radius: 10px;\r\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\r\n}\r\n\r\n.score-leaderboard ol li::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #fa6855;\r\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\r\n  transition: all 0.3s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::before,\r\n.score-leaderboard ol li mark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: -11px;\r\n  left: -9px;\r\n  border-top: 10px solid #c24448;\r\n  border-left: 10px solid transparent;\r\n  transition: all 0.1s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::after {\r\n  left: auto;\r\n  right: -9px;\r\n  border-left: none;\r\n  border-right: 10px solid transparent;\r\n}\r\n\r\n.score-leaderboard h1 {\r\n  font-size: 18px;\r\n  color: #e1e1e1;\r\n  padding: 3px 13px 2px;\r\n}\r\n\r\n.score-leaderboard ol {\r\n  counter-reset: leaderboard;\r\n}\r\n\r\n.score-leaderboard ol li {\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 14px;\r\n  counter-increment: leaderboard;\r\n  padding: 18px 10px 18px 50px;\r\n  cursor: pointer;\r\n  backface-visibility: hidden;\r\n  transform: translateZ(0) scale(1, 1);\r\n}\r\n\r\n.score-leaderboard ol li::before {\r\n  content: counter(leaderboard);\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 15px;\r\n  left: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #c24448;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.score-leaderboard ol li mark {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 18px 10px 18px 50px;\r\n  margin: 0;\r\n  background: none;\r\n  color: #fff;\r\n}\r\n\r\n.score-leaderboard ol li:hover::after {\r\n  opacity: 1;\r\n  transform: scaleX(1.06) scaleY(1.03);\r\n}\r\n\r\n.score-leaderboard ol li:hover mark::before,\r\n.score-leaderboard ol li:hover mark::after {\r\n  opacity: 1;\r\n  transition: all 0.35s ease-in-out;\r\n}\r\n\r\n.score-leaderboard ol li small {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1) {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1)::after {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) {\r\n  background: #e0574f;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2)::after {\r\n  background: #e0574f;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) mark::before,\r\n.score-leaderboard ol li:nth-child(2) mark::after {\r\n  border-top: 6px solid #ba4741;\r\n  bottom: -7px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) {\r\n  background: #d7514d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3)::after {\r\n  background: #d7514d;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) mark::before,\r\n.score-leaderboard ol li:nth-child(3) mark::after {\r\n  border-top: 2px solid #b0433f;\r\n  bottom: -3px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) {\r\n  background: #cd4b4b;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4)::after {\r\n  background: #cd4b4b;\r\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) mark::before,\r\n.score-leaderboard ol li:nth-child(4) mark::after {\r\n  top: -7px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 6px solid #a63d3d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) mark::before,\r\n.score-leaderboard ol li:nth-child(5) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) mark::before,\r\n.score-leaderboard ol li:nth-child(6) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) mark::before,\r\n.score-leaderboard ol li:nth-child(7) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:hover {\r\n  z-index: 2;\r\n  overflow: visible;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputWrapper {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form-class {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  max-width: 360px;\r\n  padding: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.form-wrapper input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  max-height: 260px;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-wrapper input:hover {\r\n  background: #f7f7f7;\r\n}\r\n\r\n.form-wrapper button {\r\n  outline: 0;\r\n  background: #4b517f;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-wrapper button:active {\r\n  background: #1f223a;\r\n}\r\n\r\n.form-wrapper button:hover {\r\n  background: #717a9e;\r\n}\r\n\r\n.ErrorMessage {\r\n  color: red;\r\n  height: 0;\r\n  margin: 10px 0 0 0;\r\n  display: none;\r\n}\r\n\r\n.initialScoreContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #c24448;\r\n  border-radius: 10px;\r\n}\r\n\r\n.insideScoreContainer {\r\n  width: 325px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n}\r\n\r\n.insideScoreContainer::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.scoreListContainer {\r\n  margin: 0;\r\n  width: 285px;\r\n}\r\n\r\n.loading {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 285px;\r\n  height: 250px;\r\n  opacity: 1;\r\n  background-color: transparent;\r\n  z-index: 99;\r\n}\r\n\r\n.loading-form {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 360px;\r\n  height: 283px;\r\n  opacity: 0.5;\r\n  background-color: #373d4a;\r\n  z-index: 99;\r\n  border-radius: 10px;\r\n}\r\n\r\n.loading-image {\r\n  z-index: 100;\r\n}\r\n\r\n.loader,\r\n.loader::after {\r\n  border-radius: 50%;\r\n  width: 5em;\r\n  height: 5em;\r\n}\r\n\r\n.loader {\r\n  margin: 60px auto;\r\n  font-size: 10px;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-left: 1.1em solid #fff;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load8 1.1s infinite linear;\r\n  animation: load8 1.1s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.notDisplay {\r\n  display: none;\r\n}\r\n\r\n.auto-refresh {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.auto-refresh label {\r\n  color: black;\r\n  font-size: 12px;\r\n}\r\n.auto-refresh input {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 25px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/getScores.js":
/*!**************************!*\
  !*** ./src/getScores.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_0__);


const getScores = async () => {
  let leaderboardScores;
  let leaderboardAPIrequest;
  const scoreListContainer = document.getElementById('scoreList');
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.style.visibility = 'hidden'
  scoreListContainer.innerHTML = '';

  const loading = document.getElementById('loading');
  loading.style.display = 'flex';

  try {
    leaderboardAPIrequest = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/afMNT2NsfBzm4rDRXx1A/scores/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    leaderboardScores = await leaderboardAPIrequest.json();
  } catch (err) {
    console.log('Error from initial petition: Check console.');
  }

  if (leaderboardScores.result.length) {
    leaderboardScores.result.sort((a, b) => {
      return b.score - a.score;
  });

    loading.style.display = 'none';
    leaderboardScores.result.forEach((score) => {
      scoreListContainer.innerHTML += `<li>
          <mark>${score.user}</mark>
          <small>${score.score}</small>
        </li>`;
    });
  } else {
    scoreListContainer.innerHTML += "<h5 style='text-align: center; text-decoration: underline; cursor: wait'>Please add a score</h5>";
  }
  refreshButton.style.visibility = 'visible'
  let notifier = new (awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default())()
  notifier.success('Your custom message')
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);

/***/ }),

/***/ "./src/postNewScore.js":
/*!*****************************!*\
  !*** ./src/postNewScore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getScores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScores */ "./src/getScores.js");


const postNewScore = async () => {
  let scoreInput = document.getElementById('scoreInput');
  let score = scoreInput.value;

  const name = document.getElementById('nameInput');
  const refresh = document.getElementById('auto-refresh');

  const loading = document.getElementById('loading-form');
  
  const error = document.getElementById('ErrorMessage');
  error.style.display = 'none';
  
  if (score.length > 9) {score = score.slice(0, 8)}

  if (name.value.length && score.length) {
    try {
      loading.style.display = 'flex';
      await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/afMNT2NsfBzm4rDRXx1A/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: name.value,
            score,
          }),
        },
      );
      scoreInput.value = '';
      name.value = '';
    } catch (err) {
      console.log(err);
    }
  } else {
    error.style.display = 'block';
  }
  
  if(refresh.checked){
    (0,_getScores__WEBPACK_IMPORTED_MODULE_0__["default"])()
  }

  loading.style.display = 'none';



};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postNewScore);

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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _postNewScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postNewScore */ "./src/postNewScore.js");
/* harmony import */ var _getScores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getScores */ "./src/getScores.js");





window.onload = async () => {
  const submitButton = document.getElementById('submitButton');
  const refreshButton = document.getElementById('refreshButton');

  (0,_getScores__WEBPACK_IMPORTED_MODULE_2__["default"])();

  submitButton.addEventListener('click', _postNewScore__WEBPACK_IMPORTED_MODULE_1__["default"]);
  refreshButton.addEventListener('click', _getScores__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map