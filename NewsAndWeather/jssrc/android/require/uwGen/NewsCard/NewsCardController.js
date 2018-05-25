define(function() {
    var controller = require("uwGen/NewsCard/userNewsCardController");
    var actions = require("uwGen/NewsCard/NewsCardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});