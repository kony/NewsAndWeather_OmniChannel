define(function() {
    var controller = require("uwGen/weatherSmallCard/userweatherSmallCardController");
    var actions = require("uwGen/weatherSmallCard/weatherSmallCardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});