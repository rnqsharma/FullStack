"use strict";
exports.__esModule = true;
var githubobserver_1 = require("../observer/githubobserver");
var GithubProfile = /** @class */ (function () {
    function GithubProfile(github) {
        var _this = this;
        if (github === void 0) { github = new Array(); }
        this.github = github;
        this.searchNewName = function (name) {
            if (name) {
                _this.apiCall(name).then(function (data) {
                    _this.github.push({
                        avatar_url: data.avatar_url, login: data.login
                    });
                    _this.observer.notify(_this.github);
                });
            }
        };
        this.github = github;
        this.observer = new githubobserver_1["default"]();
    }
    GithubProfile.prototype.apiCall = function (name) {
        return fetch("https://api.github.com/users/" + name)
            .then(function (response) { return response.json(); });
    };
    return GithubProfile;
}());
exports["default"] = GithubProfile;
