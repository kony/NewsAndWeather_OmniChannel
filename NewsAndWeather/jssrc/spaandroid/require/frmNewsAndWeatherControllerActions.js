define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f0ca25720a6d458e9a24ee101b6adcbf: function AS_FlexContainer_f0ca25720a6d458e9a24ee101b6adcbf(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    AS_FlexContainer_h0b3e2c21f3a4e64a473dfd008b68a42: function AS_FlexContainer_h0b3e2c21f3a4e64a473dfd008b68a42(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    AS_FlexContainer_ec9de3ad89974b38a59026d5ade1a514: function AS_FlexContainer_ec9de3ad89974b38a59026d5ade1a514(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_ebe9f732ce294e338246ad2f5039397b: function AS_FlexContainer_ebe9f732ce294e338246ad2f5039397b(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_fe46d192b1e2466d92a6739a18e50bae: function AS_FlexContainer_fe46d192b1e2466d92a6739a18e50bae(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_gcfb909feaea436e8c9c1600aff32f29: function AS_FlexContainer_gcfb909feaea436e8c9c1600aff32f29(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_h83b8d3f0c864824823dfa64a11c2c2e: function AS_FlexContainer_h83b8d3f0c864824823dfa64a11c2c2e(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_c46290719f4045a9a7f98fd69444ee55: function AS_FlexContainer_c46290719f4045a9a7f98fd69444ee55(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_c052710479194f86b47c0aedd5802a4b: function AS_FlexContainer_c052710479194f86b47c0aedd5802a4b(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_jf239d94eeaf4f568cdbf5a7b8392b7e: function AS_FlexContainer_jf239d94eeaf4f568cdbf5a7b8392b7e(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_gcb796e2383f4dd1ad0abf4731224863: function AS_FlexContainer_gcb796e2383f4dd1ad0abf4731224863(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_a0edf95b217f46328142f6392cb3291f: function AS_FlexContainer_a0edf95b217f46328142f6392cb3291f(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    AS_FlexContainer_j1c3bfb2e3e14e7bbec3366f1de8645d: function AS_FlexContainer_j1c3bfb2e3e14e7bbec3366f1de8645d(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    AS_Segment_i39678ebcd89453fa22d80985d2389da: function AS_Segment_i39678ebcd89453fa22d80985d2389da(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.showDetailedNews();
    },
    AS_Button_d2f0985dd6384218bea42dc9dea2f3dc: function AS_Button_d2f0985dd6384218bea42dc9dea2f3dc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("KnowledgeFramework/frmFramework");
        ntf.navigate();
    },
    AS_UWI_hb5b6093d98d4474837702c6bd5f0afa: function AS_UWI_hb5b6093d98d4474837702c6bd5f0afa(eventobject) {
        var self = this;
        kony.phone.openEmail([""], [""], [""], 'Functional Preview for News & Weather', "Hi<br>Please preview the News & weather app in Kony Visualizer Functional Preview using the following link:<br>https://www.kony.com/marketplace/app_preview?apptolaunch=FDLWF<br>or<br>Use the cloud code <b>FDLWF<b> in the Kony Visualizer Functional Preview Cloud tab.<br><br><i><b><u>Note:</b></u> If you don’t have Kony Visualizer Functional Preview installed on your mobile, this link will take you to the download page in App Store/Play Store.</i>", true);
    },
    AS_UWI_c142c3c0a29d46cca4705a4172b01361: function AS_UWI_c142c3c0a29d46cca4705a4172b01361(eventobject) {
        var self = this;
        this.flxCoverOnClick();
        isHelpClicked = true;
        kony.store.removeItem("isFirstTime");
    },
    AS_Button_g563592300b3498a91cbca80bf85ca21: function AS_Button_g563592300b3498a91cbca80bf85ca21(eventobject) {
        var self = this;
        this.view.flexKn.isVisible = false;
        kony.store.setItem("isFirstTime", "false");
    },
    AS_Form_i719b3ff2f5745d5a5f32a8fff0609b2: function AS_Form_i719b3ff2f5745d5a5f32a8fff0609b2(eventobject) {
        var self = this;
        if (kony.store.getItem("isFirstTime") !== "false") {
            this.view.flexKn.isVisible = true;
        } else {
            this.view.flexKn.isVisible = false;
        }
    }
});