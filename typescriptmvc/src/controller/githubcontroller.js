"use strict";
exports.__esModule = true;
var GithubController = /** @class */ (function () {
    function GithubController(model) {
        var _this = this;
        this.model = model;
        this.searchProfile = function (name) {
            _this.model.searchNewName(name);
        };
        // this.model = model;   public para so no need to initialise
    }
    return GithubController;
}());
exports["default"] = GithubController;
