define(function() {
    return function(controller) {
        var SplashScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SplashScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_f1bef0092c2d47778962efa6e1bd8c9e,
            "preShow": controller.AS_FlexContainer_bb41b71cf12c417ca335e843845f2288,
            "skin": "CopyslFbox0de457026748347",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        SplashScreen.setDefaultUnit(kony.flex.DP);
        var segGetStarted = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgGetStart": "img1.png",
                "lblAppTitle": "Label",
                "lblSplashDesc": "RichText",
                "lblStrip": "Label"
            }, {
                "imgGetStart": "img1.png",
                "lblAppTitle": "Label",
                "lblSplashDesc": "RichText",
                "lblStrip": "Label"
            }],
            "groupCells": false,
            "height": "75%",
            "id": "segGetStarted",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "pageOffDotImage": "dot_normal.png",
            "pageOnDotImage": "dot_active.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0a43167f6bc544a",
            "rowTemplate": "flxFullSplashScreen",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "5%",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flexAppName": "flexAppName",
                "flxDescription": "flxDescription",
                "flxFullSplashScreen": "flxFullSplashScreen",
                "flxImgContainer": "flxImgContainer",
                "imgGetStart": "imgGetStart",
                "lblAppTitle": "lblAppTitle",
                "lblSplashDesc": "lblSplashDesc",
                "lblStrip": "lblStrip"
            },
            "widgetSkin": "Copyseg0d1fa573c0ae143",
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxToolbar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxToolbar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknSplashToolbar",
            "top": "100%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxToolbar.setDefaultUnit(kony.flex.DP);
        var btnGetStarted = new kony.ui.Button({
            "bottom": "90%",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopyslButtonGlossRed0fe5876ce62d441",
            "height": "100%",
            "id": "btnGetStarted",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_f924edd1b0184befa1005251278b1ee4,
            "skin": "CopyslButtonGlossBlue0aa3c0d242ead4e",
            "text": "Get Started",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxToolbar.add(btnGetStarted);
        SplashScreen.add(segGetStarted, flxToolbar);
        return SplashScreen;
    }
})