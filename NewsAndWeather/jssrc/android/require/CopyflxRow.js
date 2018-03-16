define("CopyflxRow", function() {
    return function(controller) {
        var CopyflxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyflxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopysknRowTemp"
        }, {}, {});
        CopyflxRow.setDefaultUnit(kony.flex.DP);
        var lblAPIName = new kony.ui.Label({
            "centerY": "50.41%",
            "id": "lblAPIName",
            "isVisible": true,
            "left": "40dp",
            "skin": "Copysknlbltemp0ac2d7635b4d94f",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var AngleRight = new kony.ui.Label({
            "centerY": "50%",
            "id": "AngleRight",
            "isVisible": true,
            "right": "5%",
            "skin": "CopyslFontAwesomeIcon",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyflxRow.add(lblAPIName, AngleRight);
        return CopyflxRow;
    }
})