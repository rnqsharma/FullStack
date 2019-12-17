"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calc(a, b) {
        this.a = a;
        this.b = b;
    }
    Calc.prototype.add = function () {
        return this.a + this.b;
    };
    Calc.prototype.mult = function () {
        return this.a * this.b;
    };
    Calc.prototype.div = function () {
        return this.a / this.b;
    };
    Calc.prototype.sub = function () {
        return this.a - this.b;
    };
    Calc.prototype.addSub = function () {
        this.a = this.a + this.b;
        return this;
    };
    return Calc;
}());
exports["default"] = Calculator;
