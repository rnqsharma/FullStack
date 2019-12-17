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
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_cityview__ = __webpack_require__(/*! ../view/cityview */ 1);\n\r\n\r\nconst elements = {\r\n    cityList : document.querySelector('#cityList'),\r\n    addBtn : document.querySelector('#addBtn'),\r\n    removeBtn : document.querySelector('#removeBtn'),\r\n}\r\n\r\nconst view = new __WEBPACK_IMPORTED_MODULE_0__view_cityview__[\"a\" /* default */](elements);\r\nview.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluL21haW4uanM/NDQxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2l0eVZpZXcgZnJvbSAnLi4vdmlldy9jaXR5dmlldyc7XHJcblxyXG5jb25zdCBlbGVtZW50cyA9IHtcclxuICAgIGNpdHlMaXN0IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHlMaXN0JyksXHJcbiAgICBhZGRCdG4gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnRuJyksXHJcbiAgICByZW1vdmVCdG4gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlQnRuJyksXHJcbn1cclxuXHJcbmNvbnN0IHZpZXcgPSBuZXcgQ2l0eVZpZXcoZWxlbWVudHMpO1xyXG52aWV3LmluaXQoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./src/view/cityview.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_city__ = __webpack_require__(/*! ../model/city */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_citycontroller__ = __webpack_require__(/*! ../controller/citycontroller */ 4);\n\r\n\r\n\r\nclass CityView{\r\n    constructor(elements = {}){\r\n        this.elements = elements;\r\n        this.city = new __WEBPACK_IMPORTED_MODULE_0__model_city__[\"a\" /* default */]();\r\n        this.cityController = new __WEBPACK_IMPORTED_MODULE_1__controller_citycontroller__[\"a\" /* default */](this.city);\r\n    }\r\n\r\n    init(){\r\n\r\n        this.render(this.city.cities);\r\n\r\n        this.city.cityAdded.subscribe((newCities)=>{\r\n            this.render(newCities);\r\n        })\r\n        this.city.cityRemoved.subscribe((newCities)=>{\r\n            this.render(newCities);\r\n        })\r\n        this.elements.addBtn.addEventListener('click', ()=>{\r\n            console.log(\"jsdgfgds\");\r\n            let city = prompt('Enter a new city');\r\n            if(city)\r\n            this.cityController.addCity(city);\r\n        })\r\n        this.elements.removeBtn.addEventListener('click', ()=>{\r\n            console.log(\"ahgdf\");\r\n            let index = this.elements.cityList.options.selectedIndex;\r\n            if(index != -1)\r\n            this.cityController.removeCity(index);\r\n            \r\n        })\r\n    }\r\n\r\n    render(newCities){\r\n        this.elements.cityList.innerHTML='';\r\n        newCities.forEach((city)=>{\r\n            let option = new Option(city, city);\r\n            this.elements.cityList.appendChild(option);\r\n        })\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = CityView;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3L2NpdHl2aWV3LmpzPzgxMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpdHkgZnJvbSAnLi4vbW9kZWwvY2l0eSc7XHJcbmltcG9ydCBDaXR5Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL2NpdHljb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdHlWaWV3e1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMgPSB7fSl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IG5ldyBDaXR5KCk7XHJcbiAgICAgICAgdGhpcy5jaXR5Q29udHJvbGxlciA9IG5ldyBDaXR5Q29udHJvbGxlcih0aGlzLmNpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jaXR5LmNpdGllcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2l0eS5jaXR5QWRkZWQuc3Vic2NyaWJlKChuZXdDaXRpZXMpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKG5ld0NpdGllcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNpdHkuY2l0eVJlbW92ZWQuc3Vic2NyaWJlKChuZXdDaXRpZXMpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKG5ld0NpdGllcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwianNkZ2ZnZHNcIik7XHJcbiAgICAgICAgICAgIGxldCBjaXR5ID0gcHJvbXB0KCdFbnRlciBhIG5ldyBjaXR5Jyk7XHJcbiAgICAgICAgICAgIGlmKGNpdHkpXHJcbiAgICAgICAgICAgIHRoaXMuY2l0eUNvbnRyb2xsZXIuYWRkQ2l0eShjaXR5KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhaGdkZlwiKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5lbGVtZW50cy5jaXR5TGlzdC5vcHRpb25zLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgICB0aGlzLmNpdHlDb250cm9sbGVyLnJlbW92ZUNpdHkoaW5kZXgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihuZXdDaXRpZXMpe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuY2l0eUxpc3QuaW5uZXJIVE1MPScnO1xyXG4gICAgICAgIG5ld0NpdGllcy5mb3JFYWNoKChjaXR5KT0+e1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihjaXR5LCBjaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5jaXR5TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3L2NpdHl2aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./src/model/city.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observer_cityobserver__ = __webpack_require__(/*! ../observer/cityobserver */ 3);\n\r\n\r\nclass City{\r\n    constructor(cities=['Bengaluru', 'Delhi', 'Mumbai']){\r\n        this.cities = cities;\r\n        this.cityAdded = new __WEBPACK_IMPORTED_MODULE_0__observer_cityobserver__[\"a\" /* default */]();\r\n        this.cityRemoved = new __WEBPACK_IMPORTED_MODULE_0__observer_cityobserver__[\"a\" /* default */]();\r\n    }\r\n\r\n    addNewCity(city){\r\n        if(city)\r\n            this.cities.push(city);\r\n            this.cityAdded.notify(this.cities);\r\n    }\r\n\r\n    removeCity(index){\r\n        if(index != -1)\r\n        this.cities.splice(index, 1);\r\n        this.cityRemoved.notify(this.cities);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = City;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC9jaXR5LmpzP2JjOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9ic2VydmVyIGZyb20gXCIuLi9vYnNlcnZlci9jaXR5b2JzZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdHl7XHJcbiAgICBjb25zdHJ1Y3RvcihjaXRpZXM9WydCZW5nYWx1cnUnLCAnRGVsaGknLCAnTXVtYmFpJ10pe1xyXG4gICAgICAgIHRoaXMuY2l0aWVzID0gY2l0aWVzO1xyXG4gICAgICAgIHRoaXMuY2l0eUFkZGVkID0gbmV3IE9ic2VydmVyKCk7XHJcbiAgICAgICAgdGhpcy5jaXR5UmVtb3ZlZCA9IG5ldyBPYnNlcnZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld0NpdHkoY2l0eSl7XHJcbiAgICAgICAgaWYoY2l0eSlcclxuICAgICAgICAgICAgdGhpcy5jaXRpZXMucHVzaChjaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5jaXR5QWRkZWQubm90aWZ5KHRoaXMuY2l0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaXR5KGluZGV4KXtcclxuICAgICAgICBpZihpbmRleCAhPSAtMSlcclxuICAgICAgICB0aGlzLmNpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuY2l0eVJlbW92ZWQubm90aWZ5KHRoaXMuY2l0aWVzKTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZGVsL2NpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/observer/cityobserver.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Observer{\r\n    constructor(observers=[]){\r\n        this.observers = observers;\r\n    }\r\n\r\n    notify(newState){\r\n        this.observers.forEach(function(fn){\r\n            fn(newState);\r\n        })\r\n    }\r\n\r\n    subscribe(fn){\r\n        this.observers.push(fn);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Observer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9vYnNlcnZlci9jaXR5b2JzZXJ2ZXIuanM/YWEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZlcntcclxuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVycz1bXSl7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBvYnNlcnZlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KG5ld1N0YXRlKXtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKGZuKXtcclxuICAgICAgICAgICAgZm4obmV3U3RhdGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKGZuKXtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL29ic2VydmVyL2NpdHlvYnNlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************************!*\
  !*** ./src/controller/citycontroller.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class CityController{\r\n    constructor(model){\r\n        this.model = model;\r\n    }\r\n\r\n    addCity(city){\r\n        this.model.addNewCity(city);\r\n    }\r\n\r\n    removeCity(index){\r\n        this.model.removeCity(index);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = CityController;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2NpdHljb250cm9sbGVyLmpzPzhkODAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2l0eUNvbnRyb2xsZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCl7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENpdHkoY2l0eSl7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hZGROZXdDaXR5KGNpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNpdHkoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlQ2l0eShpbmRleCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyL2NpdHljb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);