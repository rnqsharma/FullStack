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
var Rectangle = /** @class */ (function (_super) {
    __extends(MyRectangle, _super);
    function MyRectangle(width, height) {
        return _super.call(this, width, height) || this;
    }
    MyRectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return MyRectangle;
}(shape_1["default"]));
exports["default"] = Rectangle;
