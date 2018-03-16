define("CopyflxFeatureRowTemp0e026b4a919e14e", function() {
    return function(controller) {
        var CopyflxFeatureRowTemp0e026b4a919e14e = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "CopyflxFeatureRowTemp0e026b4a919e14e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        CopyflxFeatureRowTemp0e026b4a919e14e.setDefaultUnit(kony.flex.DP);
        var lblNameOfAPI = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblNameOfAPI",
            "isVisible": true,
            "skin": "CopysknLabelHeading",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyflxFeatureRowTemp0e026b4a919e14e.add(lblNameOfAPI);
        return CopyflxFeatureRowTemp0e026b4a919e14e;
    }
})