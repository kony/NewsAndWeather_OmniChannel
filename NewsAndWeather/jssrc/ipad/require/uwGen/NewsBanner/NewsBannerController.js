define(function() {
    var controller = require("uwGen/NewsBanner/userNewsBannerController");
    var actions = require("uwGen/NewsBanner/NewsBannerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});