"use strict";
exports.__esModule = true;
var GithubView = /** @class */ (function () {
    function GithubView(elements, model, controller) {
        var _this = this;
        this.elements = elements;
        this.model = model;
        this.controller = controller;
        this.render = function (newProfile) {
            // tslint:disable-next-line:no-unused-expression
            var list = document.querySelector('#list');
            newProfile.forEach(function (model) {
                list.appendChild(_this.createElements('img', 'src', model.avatar_url));
            });
        };
    }
    GithubView.prototype.init = function () {
        var _this = this;
        this.model.observer.subscribe(function (newProfile) {
            _this.render(newProfile);
        });
        this.elements.search.addEventListener('blur', function (e) {
            var profile = e.target.value;
            _this.controller.searchProfile(profile);
        });
    };
    GithubView.prototype.createElements = function (element, attribute, value) {
        var elem = document.createElement(element);
        elem.setAttribute(attribute, value);
        return elem;
    };
    return GithubView;
}());
exports["default"] = GithubView;
