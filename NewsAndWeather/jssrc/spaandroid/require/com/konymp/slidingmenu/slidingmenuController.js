define(function() {
    var controller = require("com/konymp/slidingmenu/userslidingmenuController");
    var actions = require("com/konymp/slidingmenu/slidingmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "profileImageIsVisible", function(val) {
            this.view.flxImage.isVisible = val;
        });
        defineGetter(this, "profileImageIsVisible", function() {
            return this.view.flxImage.isVisible;
        });
        defineSetter(this, "profileImageLeft", function(val) {
            this.view.flxImage.left = val;
        });
        defineGetter(this, "profileImageLeft", function() {
            return this.view.flxImage.left;
        });
        defineSetter(this, "profileImageTop", function(val) {
            this.view.flxImage.top = val;
        });
        defineGetter(this, "profileImageTop", function() {
            return this.view.flxImage.top;
        });
        defineSetter(this, "headingText", function(val) {
            this.view.lblHeaderText1.text = val;
        });
        defineGetter(this, "headingText", function() {
            return this.view.lblHeaderText1.text;
        });
        defineSetter(this, "headingTextIsVisible", function(val) {
            this.view.lblHeaderText1.isVisible = val;
        });
        defineGetter(this, "headingTextIsVisible", function() {
            return this.view.lblHeaderText1.isVisible;
        });
        defineSetter(this, "headingLeft", function(val) {
            this.view.lblHeaderText1.left = val;
        });
        defineGetter(this, "headingLeft", function() {
            return this.view.lblHeaderText1.left;
        });
        defineSetter(this, "headingTop", function(val) {
            this.view.lblHeaderText1.top = val;
        });
        defineGetter(this, "headingTop", function() {
            return this.view.lblHeaderText1.top;
        });
        defineSetter(this, "profileImageHeight", function(val) {
            this.view.flxImage.height = val;
        });
        defineGetter(this, "profileImageHeight", function() {
            return this.view.flxImage.height;
        });
        defineSetter(this, "profileImageWidth", function(val) {
            this.view.flxImage.width = val;
        });
        defineGetter(this, "profileImageWidth", function() {
            return this.view.flxImage.width;
        });
        defineSetter(this, "profileImageSrc", function(val) {
            this.view.imgHeader.src = val;
        });
        defineGetter(this, "profileImageSrc", function() {
            return this.view.imgHeader.src;
        });
        defineSetter(this, "slidingMenuisVisible", function(val) {
            this.view.flxMainSlidingMenu.isVisible = val;
        });
        defineGetter(this, "slidingMenuisVisible", function() {
            return this.view.flxMainSlidingMenu.isVisible;
        });
        defineSetter(this, "headingWidth", function(val) {
            this.view.lblHeaderText1.width = val;
        });
        defineGetter(this, "headingWidth", function() {
            return this.view.lblHeaderText1.width;
        });
        defineSetter(this, "headingHeight", function(val) {
            this.view.lblHeaderText1.height = val;
        });
        defineGetter(this, "headingHeight", function() {
            return this.view.lblHeaderText1.height;
        });
        defineSetter(this, "headerFlexHeight", function(val) {
            this.view.flxHeader.height = val;
        });
        defineGetter(this, "headerFlexHeight", function() {
            return this.view.flxHeader.height;
        });
        defineSetter(this, "menuControlFlexTop", function(val) {
            this.view.flxMenuControl.top = val;
        });
        defineGetter(this, "menuControlFlexTop", function() {
            return this.view.flxMenuControl.top;
        });
        defineSetter(this, "menuControlFlexHeight", function(val) {
            this.view.flxMenuControl.height = val;
        });
        defineGetter(this, "menuControlFlexHeight", function() {
            return this.view.flxMenuControl.height;
        });
        defineSetter(this, "flxBotomIsVisible", function(val) {
            this.view.flxBotom.isVisible = val;
        });
        defineGetter(this, "flxBotomIsVisible", function() {
            return this.view.flxBotom.isVisible;
        });
        defineSetter(this, "imgHamIconCloseIsVisible", function(val) {
            this.view.imgHamIconClose.isVisible = val;
        });
        defineGetter(this, "imgHamIconCloseIsVisible", function() {
            return this.view.imgHamIconClose.isVisible;
        });
        defineSetter(this, "btnClickIsVisible", function(val) {
            this.view.btnClick.isVisible = val;
        });
        defineGetter(this, "btnClickIsVisible", function() {
            return this.view.btnClick.isVisible;
        });
        defineSetter(this, "btnClickLeft", function(val) {
            this.view.btnClick.left = val;
        });
        defineGetter(this, "btnClickLeft", function() {
            return this.view.btnClick.left;
        });
        defineSetter(this, "btnClickTop", function(val) {
            this.view.btnClick.top = val;
        });
        defineGetter(this, "btnClickTop", function() {
            return this.view.btnClick.top;
        });
        defineSetter(this, "btnClickText", function(val) {
            this.view.btnClick.text = val;
        });
        defineGetter(this, "btnClickText", function() {
            return this.view.btnClick.text;
        });
        defineSetter(this, "leftMenuIconSrc", function(val) {
            this.view.imgHamIcon.src = val;
        });
        defineGetter(this, "leftMenuIconSrc", function() {
            return this.view.imgHamIcon.src;
        });
        defineSetter(this, "hamIconIsVisibility", function(val) {
            this.view.flxHamParent.isVisible = val;
        });
        defineGetter(this, "hamIconIsVisibility", function() {
            return this.view.flxHamParent.isVisible;
        });
        defineSetter(this, "btnClickHeight", function(val) {
            this.view.btnClick.height = val;
        });
        defineGetter(this, "btnClickHeight", function() {
            return this.view.btnClick.height;
        });
        defineSetter(this, "btnClickWidth", function(val) {
            this.view.btnClick.width = val;
        });
        defineGetter(this, "btnClickWidth", function() {
            return this.view.btnClick.width;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onProfileClick_h0a282ca17324c44bb1e95890cf93b09 = function() {
        if (this.onProfileClick) {
            this.onProfileClick.apply(this, arguments);
        }
    }
    controller.AS_onApplyButtonClick_h49639a287584900aac84b73b254d6f4 = function() {
        if (this.onApplyButtonClick) {
            this.onApplyButtonClick.apply(this, arguments);
        }
    }
    controller.AS_onClickFooter_e62614a9a84e462fad4cc8bbe1335bdf = function() {
        if (this.onClickFooter) {
            this.onClickFooter.apply(this, arguments);
        }
    }
    controller.AS_onClickFooterShare_h1bd9eb5eb4e40eda0dcd77a624cea62 = function() {
        if (this.onClickFooterShare) {
            this.onClickFooterShare.apply(this, arguments);
        }
    }
    controller.AS_onClickFooterHelp_had295e6815b495e81887fcd29b7c57e = function() {
        if (this.onClickFooterHelp) {
            this.onClickFooterHelp.apply(this, arguments);
        }
    }
    return controller;
});