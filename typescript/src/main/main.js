"use strict";
exports.__esModule = true;
var shape_1 = require("../Shape/shape");
var rectangle_1 = require("../Rectangle/rectangle");
var triangle_1 = require("../Triangle/triangle");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.display = function (shape) {
        console.log('Area of shape ' + shape.calculateArea());
    };
    return Main;
}());
var rectangle = new rectangle_1["default"](24, 35);
var triangle = new triangle_1["default"](20, 20);
Main.display(rectangle);
Main.display(triangle);
console.log(typeof shape_1["default"]);
console.log(triangle instanceof shape_1["default"]);
console.log(triangle instanceof Object);
console.log(rectangle instanceof shape_1["default"]);
console.log(rectangle instanceof Object);
