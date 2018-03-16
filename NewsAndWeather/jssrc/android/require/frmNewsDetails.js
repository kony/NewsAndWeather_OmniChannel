define("frmNewsDetails", function() {
    return function(controller) {
        function addWidgetsfrmNewsDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var headerContainer01 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "56dp",
                "id": "headerContainer01",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer01.setDefaultUnit(kony.flex.DP);
            var category = new kony.ui.Label({
                "height": "100%",
                "id": "category",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "headerTitleSkinMaster",
                "text": "News",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerIconLeft = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_e2dd0e980662446a819c9ffcfafd3b31,
                "skin": "headerButtonClearSkin",
                "text": "Back",
                "top": "0dp",
                "width": "76dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer01.add(category, headerIconLeft, headerButtonLeft);
            var browserDetails = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "91.06%",
                "htmlString": "Browser",
                "id": "browserDetails",
                "isVisible": true,
                "left": "0%",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            this.add(headerContainer01, browserDetails);
        };
        return [{
            "addWidgets": addWidgetsfrmNewsDetails,
            "enabledForIdleTimeout": false,
            "id": "frmNewsDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknblueform"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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