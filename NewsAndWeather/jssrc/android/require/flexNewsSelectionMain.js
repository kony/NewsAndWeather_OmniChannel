define("flexNewsSelectionMain", function() {
    return function(controller) {
        var flexNewsSelectionMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flexNewsSelectionMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flexNewsSelectionMain.setDefaultUnit(kony.flex.DP);
        var lblNewsType = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblNewsType",
            "isVisible": true,
            "left": "7%",
            "skin": "CopyslLabel0a60450052aee40",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "44.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgSelection = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSelection",
            "isVisible": true,
            "right": "7%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexNewsSelectionMain.add(lblNewsType, imgSelection);
        return flexNewsSelectionMain;
    }
})