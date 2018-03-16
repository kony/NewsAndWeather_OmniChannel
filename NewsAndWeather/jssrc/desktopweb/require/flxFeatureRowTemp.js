define("flxFeatureRowTemp", function() {
    return function(controller) {
        var flxFeatureRowTemp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxFeatureRowTemp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxFeatureRowTemp.setDefaultUnit(kony.flex.DP);
        var lblNameOfAPI = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblNameOfAPI",
            "isVisible": true,
            "skin": "CopysknLabelHeading",
            "text": "Label",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFeatureRowTemp.add(lblNameOfAPI);
        return flxFeatureRowTemp;
    }
})