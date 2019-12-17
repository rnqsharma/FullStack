"use strict";
exports.__esModule = true;
var Observer = /** @class */ (function () {
    function Observer(observers) {
        if (observers === void 0) { observers = new Array(); }
        this.observers = observers;
        // this.observers = observers;
    }
    Observer.prototype.notify = function (newState) {
        this.observers.forEach(function (fn) {
            fn(newState);
        });
    };
    Observer.prototype.subscribe = function (fn) {
        this.observers.push(fn);
    };
    return Observer;
}());
exports["default"] = Observer;
