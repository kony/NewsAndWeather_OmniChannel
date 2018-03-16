define("flxNewsCatWraper", function() {
    return function(controller) {
        var flxNewsCatWraper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxNewsCatWraper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxNewsCatWraper.setDefaultUnit(kony.flex.DP);
        var lblNewsCatName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "lblNewsCatName",
            "isVisible": true,
            "skin": "CopyslLabel0f8bed27bb8c048",
            "text": "World",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "98%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNewsCatWraper.add(lblNewsCatName);
        return flxNewsCatWraper;
    }
})