define(function() {
    var controller = require("uwGen1/NewsBanner/userNewsBannerController");
    var actions = require("uwGen1/NewsBanner/NewsBannerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "titleText", function(val) {
            this.view.NewsTitle140548320498864.text = val;
        });
        defineGetter(this, "titleText", function() {
            return this.view.NewsTitle140548320498864.text;
        });
        defineSetter(this, "descText", function(val) {
            this.view.NewsDesc140548320024832.text = val;
        });
        defineGetter(this, "descText", function() {
            return this.view.NewsDesc140548320024832.text;
        });
        defineSetter(this, "imgsrc", function(val) {
            this.view.NewsImage106377760457216.src = val;
        });
        defineGetter(this, "imgsrc", function() {
            return this.view.NewsImage106377760457216.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});