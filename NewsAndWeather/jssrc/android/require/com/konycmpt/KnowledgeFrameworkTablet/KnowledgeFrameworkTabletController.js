define(function() {
    var controller = require("com/konycmpt/KnowledgeFrameworkTablet/userKnowledgeFrameworkTabletController");
    var actions = require("com/konycmpt/KnowledgeFrameworkTablet/KnowledgeFrameworkTabletControllerActions");
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