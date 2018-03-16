define("flxFullSplashScreen", function() {
    return function(controller) {
        var flxFullSplashScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFullSplashScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknSplash",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFullSplashScreen.setDefaultUnit(kony.flex.DP);
        var flxDescription = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30%",
            "id": "flxDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "9%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDescription.setDefaultUnit(kony.flex.DP);
        var flexAppName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flexAppName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexAppName.setDefaultUnit(kony.flex.DP);
        var lblAppTitle = new kony.ui.Label({
            "height": "62.76%",
            "id": "lblAppTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslLabel0j7c2049037d747",
            "text": "Kony News & Weather",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblStrip = new kony.ui.Label({
            "centerX": "50%",
            "height": "3px",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslLabel0d565e312de5e4b",
            "top": "23%",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexAppName.add(lblAppTitle, lblStrip);
        var lblSplashDesc = new kony.ui.RichText({
            "centerX": "50.03%",
            "height": "58%",
            "id": "lblSplashDesc",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslRichText0jdb8aff0f4954b",
            "text": "RichText",
            "top": "39.97%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxDescription.add(flexAppName, lblSplashDesc);
        var flxImgContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "47.98%",
            "id": "flxImgContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0a6ecafe6593845",
            "top": "4%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxImgContainer.setDefaultUnit(kony.flex.DP);
        var imgGetStart = new kony.ui.Image2({
            "centerX": "50.00%",
            "centerY": "50%",
            "height": "80%",
            "id": "imgGetStart",
            "isVisible": true,
            "skin": "slImage",
            "src": "img1.png",
            "width": "80%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgContainer.add(imgGetStart);
        flxFullSplashScreen.add(flxDescription, flxImgContainer);
        return flxFullSplashScreen;
    }
})