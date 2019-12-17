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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./src/Shape/shape.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Shape{\r\n    constructor(width, height){\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n    calculateArea(){}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (Shape);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFwZS9zaGFwZS5qcz84MDEyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoYXBle1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCl7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlQXJlYSgpe31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2hhcGUvc2hhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shape_shape__ = __webpack_require__(/*! ../Shape/shape */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rectangle_rectangle__ = __webpack_require__(/*! ../Rectangle/rectangle */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Triangle_triangle__ = __webpack_require__(/*! ../Triangle/triangle */ 3);\n\r\n\r\n\r\nclass Main{\r\n    static display(shape){\r\n        console.log('Area of shape ' + shape.calculateArea());\r\n    }\r\n}\r\n\r\nvar rectangle = new __WEBPACK_IMPORTED_MODULE_1__Rectangle_rectangle__[\"a\" /* default */](24, 35);\r\nvar triangle = new __WEBPACK_IMPORTED_MODULE_2__Triangle_triangle__[\"a\" /* default */](20, 20);\r\nMain.display(rectangle);\r\nMain.display(triangle);\r\n\r\nconsole.log(typeof __WEBPACK_IMPORTED_MODULE_0__Shape_shape__[\"a\" /* default */]);\r\nconsole.log(triangle instanceof __WEBPACK_IMPORTED_MODULE_0__Shape_shape__[\"a\" /* default */]);\r\nconsole.log(triangle instanceof Object);\r\nconsole.log(rectangle instanceof __WEBPACK_IMPORTED_MODULE_0__Shape_shape__[\"a\" /* default */]);\r\nconsole.log(rectangle instanceof Object);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluL21haW4uanM/NDQxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcGUgZnJvbSAnLi4vU2hhcGUvc2hhcGUnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL1JlY3RhbmdsZS9yZWN0YW5nbGUnO1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi4vVHJpYW5nbGUvdHJpYW5nbGUnO1xyXG5jbGFzcyBNYWlue1xyXG4gICAgc3RhdGljIGRpc3BsYXkoc2hhcGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcmVhIG9mIHNoYXBlICcgKyBzaGFwZS5jYWxjdWxhdGVBcmVhKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgcmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgyNCwgMzUpO1xyXG52YXIgdHJpYW5nbGUgPSBuZXcgVHJpYW5nbGUoMjAsIDIwKTtcclxuTWFpbi5kaXNwbGF5KHJlY3RhbmdsZSk7XHJcbk1haW4uZGlzcGxheSh0cmlhbmdsZSk7XHJcblxyXG5jb25zb2xlLmxvZyh0eXBlb2YgU2hhcGUpO1xyXG5jb25zb2xlLmxvZyh0cmlhbmdsZSBpbnN0YW5jZW9mIFNoYXBlKTtcclxuY29uc29sZS5sb2codHJpYW5nbGUgaW5zdGFuY2VvZiBPYmplY3QpO1xyXG5jb25zb2xlLmxvZyhyZWN0YW5nbGUgaW5zdGFuY2VvZiBTaGFwZSk7XHJcbmNvbnNvbGUubG9nKHJlY3RhbmdsZSBpbnN0YW5jZW9mIE9iamVjdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/Rectangle/rectangle.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shape_shape__ = __webpack_require__(/*! ../Shape/shape */ 0);\n\r\nclass Rectangle extends __WEBPACK_IMPORTED_MODULE_0__Shape_shape__[\"a\" /* default */]{\r\n    constructor(width, height){\r\n        super(width, height);\r\n    }\r\n\r\n    calculateArea(){\r\n        return this.width * this.height;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (Rectangle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9SZWN0YW5nbGUvcmVjdGFuZ2xlLmpzP2RhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXBlIGZyb20gJy4uL1NoYXBlL3NoYXBlJ1xyXG5jbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZXtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUFyZWEoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUmVjdGFuZ2xlL3JlY3RhbmdsZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/Triangle/triangle.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shape_shape__ = __webpack_require__(/*! ../Shape/shape */ 0);\n\r\nclass Triangle extends __WEBPACK_IMPORTED_MODULE_0__Shape_shape__[\"a\" /* default */]{\r\n    constructor(width, height){\r\n        super(width, height);\r\n    }\r\n\r\n    calculateArea(){\r\n        return .5 * this.width * this.height;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (Triangle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZS90cmlhbmdsZS5qcz9mYWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFwZSBmcm9tICcuLi9TaGFwZS9zaGFwZSdcclxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBTaGFwZXtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUFyZWEoKXtcclxuICAgICAgICByZXR1cm4gLjUgKiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvVHJpYW5nbGUvdHJpYW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);