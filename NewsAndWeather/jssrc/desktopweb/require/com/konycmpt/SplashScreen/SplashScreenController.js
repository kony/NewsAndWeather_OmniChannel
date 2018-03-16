define(function() {
    var controller = require("com/konycmpt/SplashScreen/userSplashScreenController");
    var actions = require("com/konycmpt/SplashScreen/SplashScreenControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});