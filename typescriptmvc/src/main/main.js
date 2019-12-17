"use strict";
exports.__esModule = true;
var githubcontroller_1 = require("../controller/githubcontroller");
var github_1 = require("../model/github");
var githubview_1 = require("../view/githubview");
var elements = {
    list: document.querySelector('#list'),
    search: document.querySelector('#search')
};
var model = new github_1["default"]();
var controller = new githubcontroller_1["default"](model);
var view = new githubview_1["default"](elements, model, controller);
view.init();
