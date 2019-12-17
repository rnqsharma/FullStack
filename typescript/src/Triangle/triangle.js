"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("../Shape/shape");
var Triangle = /** @class */ (function (_super) {
    __extends(MyTriangle, _super);
    function MyTriangle(width, height) {
        return _super.call(this, width, height) || this;
    }
    MyTriangle.prototype.calculateArea = function () {
        return .5 * this.width * this.height;
    };
    return MyTriangle;
}(shape_1["default"]));
exports["default"] = Triangle;
