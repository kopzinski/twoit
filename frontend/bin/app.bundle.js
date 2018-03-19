/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _angular = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular-ui-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _app = __webpack_require__(1);

var _components = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/components.module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _common = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./common/common.module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppModule = exports.AppModule = _angular2.default.module('app', [_components.ComponentsModule, _common.CommonModule, _angularUiRouter2.default]).component('app', _app.AppComponent).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var AppComponent = exports.AppComponent = {
    template: "\n    <header>\n        Hello world\n    </header>\n    <div>\n        <div ui-view></div>\n    </div>\n    <footer>\n        Copyright MyApp 2016.\n    </footer>\n  "
};

/***/ })
/******/ ]);