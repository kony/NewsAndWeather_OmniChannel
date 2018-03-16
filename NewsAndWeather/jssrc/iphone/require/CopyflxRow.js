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
            "top": "1dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        CopyflxRow.add(lblAPIName);
        return CopyflxRow;
    }
})