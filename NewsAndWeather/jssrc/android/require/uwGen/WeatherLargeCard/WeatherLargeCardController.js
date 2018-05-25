define(function() {
    var controller = require("uwGen/WeatherLargeCard/userWeatherLargeCardController");
    var actions = require("uwGen/WeatherLargeCard/WeatherLargeCardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});