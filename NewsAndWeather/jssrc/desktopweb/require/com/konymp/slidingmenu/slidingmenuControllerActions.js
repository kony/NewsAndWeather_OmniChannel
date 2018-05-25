define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxMainSlidingMenu **/
    AS_FlexContainer_c051a9d2c48e4ca28722835199deec66: function AS_FlexContainer_c051a9d2c48e4ca28722835199deec66(eventobject) {
        var self = this;
        var t = '';
    },
    /** onClick defined for flxHamParent **/
    AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13: function AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13(eventobject) {
        var self = this;
        this.showSlidingMenu();
    },
    /** onClick defined for flxCover **/
    AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499: function AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499(eventobject) {
        var self = this;
        //this.hideSlidingMenu();
    },
    /** postShow defined for slidingmenu **/
    AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df: function AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df(eventobject) {
        var self = this;
        if (this._hamburgerDirection == "Left") {
            this.view.flxMainSlidingMenu.isVisible = true;
            this.view.flxMainSlidingMenu.left = "-20%";
            this.view.flxHamParent.left = "67.5%";
            this.view.imgHamIcon.setVisibility(false);
            this.view.flxCover.isVisible = true;
            this.view.forceLayout();
        } else {
            this.view.flxMainSlidingMenu.isVisible = true;
            this.view.flxMainSlidingMenu.left = "0%";
            this.view.flxHamParent.left = "20%";
            this.view.imgHamIcon.setVisibility(false);
            this.view.flxCover.isVisible = true;
            this.view.forceLayout();
        }
    }
});