define(function() {
    var controller = require("com/konycmpt/KnowledgeFramework1/userKnowledgeFramework1Controller");
    var actions = require("com/konycmpt/KnowledgeFramework1/KnowledgeFramework1ControllerActions");
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