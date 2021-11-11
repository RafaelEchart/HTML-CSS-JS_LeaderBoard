/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  min-height: 450px;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background:\r\n    radial-gradient(\r\n      ellipse farthest-corner at center top,\r\n      #f39264 0%,\r\n      #f2606f 100%\r\n    );\r\n  color: #fff;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.main_title {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nol {\r\n  padding-left: 0;\r\n  max-height: 280px;\r\n}\r\n\r\n.leaderboard-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  margin: 5px 10px -10px 10px;\r\n}\r\n\r\n.icon {\r\n  font-size: 30px;\r\n  color: #fa6855;\r\n}\r\n\r\n.app_container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n}\r\n\r\n.score-leaderboard {\r\n  width: 285px;\r\n\r\n  /* height: 308px; */\r\n  max-height: 308px;\r\n  background: linear-gradient(to bottom, #3a404d, #181c26);\r\n  border-radius: 10px;\r\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\r\n}\r\n\r\n.score-leaderboard h1 {\r\n  font-size: 18px;\r\n  color: #e1e1e1;\r\n  padding: 3px 13px 2px;\r\n}\r\n\r\n.score-leaderboard ol {\r\n  counter-reset: leaderboard;\r\n}\r\n\r\n.score-leaderboard ol li {\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 14px;\r\n  counter-increment: leaderboard;\r\n  padding: 18px 10px 18px 50px;\r\n  cursor: pointer;\r\n  backface-visibility: hidden;\r\n  transform: translateZ(0) scale(1, 1);\r\n}\r\n\r\n.score-leaderboard ol li::before {\r\n  content: counter(leaderboard);\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 15px;\r\n  left: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #c24448;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.score-leaderboard ol li mark {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 18px 10px 18px 50px;\r\n  margin: 0;\r\n  background: none;\r\n  color: #fff;\r\n}\r\n\r\n.score-leaderboard ol li mark::before,\r\n.score-leaderboard ol li mark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: -11px;\r\n  left: -9px;\r\n  border-top: 10px solid #c24448;\r\n  border-left: 10px solid transparent;\r\n  transition: all 0.1s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::after {\r\n  left: auto;\r\n  right: -9px;\r\n  border-left: none;\r\n  border-right: 10px solid transparent;\r\n}\r\n\r\n.score-leaderboard ol li small {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.score-leaderboard ol li::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #fa6855;\r\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\r\n  transition: all 0.3s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1) {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1)::after {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) {\r\n  background: #e0574f;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2)::after {\r\n  background: #e0574f;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) mark::before,\r\n.score-leaderboard ol li:nth-child(2) mark::after {\r\n  border-top: 6px solid #ba4741;\r\n  bottom: -7px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) {\r\n  background: #d7514d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3)::after {\r\n  background: #d7514d;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) mark::before,\r\n.score-leaderboard ol li:nth-child(3) mark::after {\r\n  border-top: 2px solid #b0433f;\r\n  bottom: -3px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) {\r\n  background: #cd4b4b;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4)::after {\r\n  background: #cd4b4b;\r\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) mark::before,\r\n.score-leaderboard ol li:nth-child(4) mark::after {\r\n  top: -7px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 6px solid #a63d3d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) mark::before,\r\n.score-leaderboard ol li:nth-child(5) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) mark::before,\r\n.score-leaderboard ol li:nth-child(6) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) mark::before,\r\n.score-leaderboard ol li:nth-child(7) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:hover {\r\n  z-index: 2;\r\n  overflow: visible;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputWrapper {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form-class {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  max-width: 360px;\r\n  padding: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.form-wrapper input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-wrapper input:hover {\r\n  background: #f7f7f7;\r\n}\r\n\r\n.form-wrapper button {\r\n  outline: 0;\r\n  background: #4b517f;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-wrapper button:active {\r\n  background: #1f223a;\r\n}\r\n\r\n.form-wrapper button:hover {\r\n  background: #717a9e;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  min-height: 450px;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background:\r\n    radial-gradient(\r\n      ellipse farthest-corner at center top,\r\n      #f39264 0%,\r\n      #f2606f 100%\r\n    );\r\n  color: #fff;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.main_title {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nol {\r\n  padding-left: 0;\r\n  max-height: 280px;\r\n}\r\n\r\n.leaderboard-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  margin: 5px 10px -10px 10px;\r\n}\r\n\r\n.icon {\r\n  font-size: 30px;\r\n  color: #fa6855;\r\n}\r\n\r\n.app_container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n}\r\n\r\n.score-leaderboard {\r\n  width: 285px;\r\n\r\n  /* height: 308px; */\r\n  max-height: 308px;\r\n  background: linear-gradient(to bottom, #3a404d, #181c26);\r\n  border-radius: 10px;\r\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\r\n}\r\n\r\n.score-leaderboard h1 {\r\n  font-size: 18px;\r\n  color: #e1e1e1;\r\n  padding: 3px 13px 2px;\r\n}\r\n\r\n.score-leaderboard ol {\r\n  counter-reset: leaderboard;\r\n}\r\n\r\n.score-leaderboard ol li {\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 14px;\r\n  counter-increment: leaderboard;\r\n  padding: 18px 10px 18px 50px;\r\n  cursor: pointer;\r\n  backface-visibility: hidden;\r\n  transform: translateZ(0) scale(1, 1);\r\n}\r\n\r\n.score-leaderboard ol li::before {\r\n  content: counter(leaderboard);\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 15px;\r\n  left: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #c24448;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.score-leaderboard ol li mark {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 18px 10px 18px 50px;\r\n  margin: 0;\r\n  background: none;\r\n  color: #fff;\r\n}\r\n\r\n.score-leaderboard ol li mark::before,\r\n.score-leaderboard ol li mark::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: -11px;\r\n  left: -9px;\r\n  border-top: 10px solid #c24448;\r\n  border-left: 10px solid transparent;\r\n  transition: all 0.1s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li mark::after {\r\n  left: auto;\r\n  right: -9px;\r\n  border-left: none;\r\n  border-right: 10px solid transparent;\r\n}\r\n\r\n.score-leaderboard ol li small {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.score-leaderboard ol li::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #fa6855;\r\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\r\n  transition: all 0.3s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1) {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(1)::after {\r\n  background: #fa6855;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) {\r\n  background: #e0574f;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2)::after {\r\n  background: #e0574f;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(2) mark::before,\r\n.score-leaderboard ol li:nth-child(2) mark::after {\r\n  border-top: 6px solid #ba4741;\r\n  bottom: -7px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) {\r\n  background: #d7514d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3)::after {\r\n  background: #d7514d;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(3) mark::before,\r\n.score-leaderboard ol li:nth-child(3) mark::after {\r\n  border-top: 2px solid #b0433f;\r\n  bottom: -3px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) {\r\n  background: #cd4b4b;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4)::after {\r\n  background: #cd4b4b;\r\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(4) mark::before,\r\n.score-leaderboard ol li:nth-child(4) mark::after {\r\n  top: -7px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 6px solid #a63d3d;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(5) mark::before,\r\n.score-leaderboard ol li:nth-child(5) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(6) mark::before,\r\n.score-leaderboard ol li:nth-child(6) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) {\r\n  background: #c24448;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7)::after {\r\n  background: #c24448;\r\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.score-leaderboard ol li:nth-child(7) mark::before,\r\n.score-leaderboard ol li:nth-child(7) mark::after {\r\n  top: -9px;\r\n  bottom: auto;\r\n  border-top: none;\r\n  border-bottom: 8px solid #993639;\r\n}\r\n\r\n.score-leaderboard ol li:hover {\r\n  z-index: 2;\r\n  overflow: visible;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputWrapper {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form-class {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  max-width: 360px;\r\n  padding: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.form-wrapper input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-wrapper input:hover {\r\n  background: #f7f7f7;\r\n}\r\n\r\n.form-wrapper button {\r\n  outline: 0;\r\n  background: #4b517f;\r\n  width: 100%;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-wrapper button:active {\r\n  background: #1f223a;\r\n}\r\n\r\n.form-wrapper button:hover {\r\n  background: #717a9e;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/memory.js":
/*!***********************!*\
  !*** ./src/memory.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scoreList = {
  task: [
    {
      name: 'Rafael Echart',
      score: 24,
    },
    {
      name: 'Guillermo Echart',
      score: 77,
    },
    {
      name: 'Brandon Kocher',
      score: 90,
    },
    {
      name: 'Emiliano Felipano',
      score: 123,
    },
    {
      name: 'Guayaco Batracio',
      score: 1,
    },
  ],

  get currentTasks() {
    return this.task;
  },

  set updateTasks(newTask) {
    this.task.push(newTask);
  },

  set newArray(array) {
    this.task = array;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreList);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memory */ "./src/memory.js");



window.onload = () => {
  _memory__WEBPACK_IMPORTED_MODULE_1__["default"].currentTasks.forEach((score) => {
    document.getElementById('scoreList').innerHTML += `<li>
        <mark>${score.name}</mark>
        <small>${score.score}</small>
      </li>`;
  });
};
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map