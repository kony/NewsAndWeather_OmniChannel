define("frmSplash", function() {
    return function(controller) {
        function addWidgetsfrmSplash() {
            this.setDefaultUnit(kony.flex.DP);
            var SplashScreen = new com.konycmpt.SplashScreen({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "SplashScreen",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0de457026748347",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            SplashScreen.frmNameToNavigate = "frmNewsAndWeather";
            this.add(SplashScreen);
        };
        return [{
            "addWidgets": addWidgetsfrmSplash,
            "enabledForIdleTimeout": false,
            "id": "frmSplash",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ja36b7d0c2c943ad8659adc73e749f3c,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});