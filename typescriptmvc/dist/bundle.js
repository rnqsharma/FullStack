!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),u=n(r(2)),i=n(r(4)),s={list:document.querySelector("#list"),search:document.querySelector("#search")},c=new u.default,a=new o.default(c);new i.default(s,c,a).init()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=this;this.model=e,this.searchProfile=function(e){t.model.searchNewName(e)}};t.default=n},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(3)),u=function(){function e(e){var t=this;void 0===e&&(e=new Array),this.github=e,this.searchNewName=function(e){e&&t.apiCall(e).then(function(e){t.github.push({avatar_url:e.avatar_url,login:e.login}),t.observer.notify(t.github)})},this.github=e,this.observer=new o.default}return e.prototype.apiCall=function(e){return fetch("https://api.github.com/users/"+e).then(function(e){return e.json()})},e}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){void 0===e&&(e=new Array),this.observers=e}return e.prototype.notify=function(e){this.observers.forEach(function(t){t(e)})},e.prototype.subscribe=function(e){this.observers.push(e)},e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r){var n=this;this.elements=e,this.model=t,this.controller=r,this.render=function(e){n.elements.list.innerHTML="";var t=document.querySelector("#list");e.forEach(function(e){t.appendChild(n.createElements("img","src",e.avatar_url))})}}return e.prototype.init=function(){var e=this;this.model.observer.subscribe(function(t){e.render(t)}),this.elements.search.addEventListener("blur",function(t){var r=t.target.value;e.controller.searchProfile(r)})},e.prototype.createElements=function(e,t,r){var n=document.createElement(e);return n.setAttribute(t,r),n},e}();t.default=n}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9naXRodWJjb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9naXRodWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29ic2VydmVyL2dpdGh1Ym9ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2dpdGh1YnZpZXcudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJlbGVtZW50cyIsImxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2giLCJtb2RlbCIsImNvbnRyb2xsZXIiLCJpbml0Iiwic2VhcmNoUHJvZmlsZSIsInNlYXJjaE5ld05hbWUiLCJnaXRodWIiLCJBcnJheSIsImFwaUNhbGwiLCJ0aGVuIiwiZGF0YSIsInB1c2giLCJhdmF0YXJfdXJsIiwibG9naW4iLCJvYnNlcnZlciIsIm5vdGlmeSIsInRoaXMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIm9ic2VydmVycyIsIm5ld1N0YXRlIiwiZm9yRWFjaCIsImZuIiwic3Vic2NyaWJlIiwicmVuZGVyIiwibmV3UHJvZmlsZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByb2ZpbGUiLCJ0YXJnZXQiLCJlbGVtZW50IiwiYXR0cmlidXRlIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0Qlgs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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdpdGh1YkNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9naXRodWJjb250cm9sbGVyJztcclxuaW1wb3J0IEdpdGh1YlByb2ZpbGUgZnJvbSAnLi4vbW9kZWwvZ2l0aHViJztcclxuaW1wb3J0IEdpdGh1YlZpZXcgZnJvbSAnLi4vdmlldy9naXRodWJ2aWV3JztcclxuaW1wb3J0IHtJVmlld0VsZW1lbnRzfSBmcm9tICcuLi92aWV3L2dpdGh1YnZpZXcnO1xyXG5jb25zdCBlbGVtZW50czogSVZpZXdFbGVtZW50cyA9IHtcclxuICAgIGxpc3QgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2VhcmNoIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbn07XHJcblxyXG5jb25zdCBtb2RlbCA9IG5ldyBHaXRodWJQcm9maWxlKCk7XHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgR2l0aHViQ29udHJvbGxlcihtb2RlbCk7XHJcbmNvbnN0IHZpZXcgPSBuZXcgR2l0aHViVmlldyhlbGVtZW50cywgbW9kZWwsIGNvbnRyb2xsZXIpO1xyXG52aWV3LmluaXQoKTtcclxuIiwiaW1wb3J0IEdpdGh1YlByb2ZpbGUgZnJvbSAnLi4vbW9kZWwvZ2l0aHViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YkNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGVsOiBHaXRodWJQcm9maWxlKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RlbCA9IG1vZGVsOyAgIHB1YmxpYyBwYXJhIHNvIG5vIG5lZWQgdG8gaW5pdGlhbGlzZVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNlYXJjaFByb2ZpbGUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiAge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2VhcmNoTmV3TmFtZShuYW1lKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnLi4vb2JzZXJ2ZXIvZ2l0aHVib2JzZXJ2ZXInO1xyXG5pbXBvcnQgSUdpdGh1Yk1vZGVsIGZyb20gJy4vZ2l0aHViTW9kZWwnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWJQcm9maWxlIHtcclxuICAgIHB1YmxpYyBvYnNlcnZlcjogT2JzZXJ2ZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2l0aHViPSBuZXcgQXJyYXk8SUdpdGh1Yk1vZGVsPigpKSB7XHJcbiAgICAgICAgdGhpcy5naXRodWIgPSBnaXRodWI7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBPYnNlcnZlcigpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBhcGlDYWxsKG5hbWU6IHN0cmluZyk6IFByb21pc2U8SUdpdGh1Yk1vZGVsPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX1gKVxyXG4udGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuICAgIH1cclxucHVibGljIHNlYXJjaE5ld05hbWUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICB0aGlzLmFwaUNhbGwobmFtZSkudGhlbigoZGF0YTogSUdpdGh1Yk1vZGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2l0aHViLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyX3VybDogZGF0YS5hdmF0YXJfdXJsLCBsb2dpbjogZGF0YS5sb2dpbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIubm90aWZ5KHRoaXMuZ2l0aHViKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG59XHJcbiIsImltcG9ydCBJR2l0aHViTW9kZWwgZnJvbSAnLi4vbW9kZWwvZ2l0aHViTW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmVycz0gbmV3IEFycmF5PChtb2RlbDogSUdpdGh1Yk1vZGVsW10pID0+IHZvaWQ+KCkpIHtcclxuICAgICAgICAvLyB0aGlzLm9ic2VydmVycyA9IG9ic2VydmVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm90aWZ5KG5ld1N0YXRlOiBJR2l0aHViTW9kZWwgW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChmbikgPT4ge1xyXG4gICAgICAgICAgICBmbihuZXdTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZShmbjogKG1vZGVsOiBJR2l0aHViTW9kZWxbXSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBHaXRodWJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvZ2l0aHViY29udHJvbGxlcic7XHJcbmltcG9ydCBHaXRodWJQcm9maWxlIGZyb20gJy4uL21vZGVsL2dpdGh1Yic7XHJcbmltcG9ydCBJR2l0aHViTW9kZWwgZnJvbSAnLi4vbW9kZWwvZ2l0aHVibW9kZWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmlld0VsZW1lbnRzIHtcclxuICAgIHNlYXJjaDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGxpc3Q6IEhUTUxEaXZFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YlZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRzOiBJVmlld0VsZW1lbnRzLCBwdWJsaWMgbW9kZWw6IEdpdGh1YlByb2ZpbGUsIHB1YmxpYyBjb250cm9sbGVyOiBHaXRodWJDb250cm9sbGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5vYnNlcnZlci5zdWJzY3JpYmUoKG5ld1Byb2ZpbGU6IElHaXRodWJNb2RlbFtdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIobmV3UHJvZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgICAgICgnYmx1cicsIChlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNlYXJjaFByb2ZpbGUocHJvZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlciA9IChuZXdQcm9maWxlOiBJR2l0aHViTW9kZWxbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKSBhcyBIVE1MRGl2RWxlbWVudCk7XHJcbiAgICAgICAgbmV3UHJvZmlsZS5mb3JFYWNoKCAobW9kZWw6IElHaXRodWJNb2RlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnRzKCdpbWcnLCAnc3JjJywgbW9kZWwuYXZhdGFyX3VybCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50cyhlbGVtZW50OiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=