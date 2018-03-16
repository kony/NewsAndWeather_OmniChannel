define(function() {
    var controller = require("com/konycmpt/KnowledgeFrameworkDW/userKnowledgeFrameworkDWController");
    var actions = require("com/konycmpt/KnowledgeFrameworkDW/KnowledgeFrameworkDWControllerActions");
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