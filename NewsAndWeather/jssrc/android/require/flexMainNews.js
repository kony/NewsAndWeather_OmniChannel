define("flexMainNews", function() {
    return function(controller) {
        var flexMainNews = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexMainNews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flexMainNews.setDefaultUnit(kony.flex.DP);
        var imgNewsIcon = new kony.ui.Image2({
            "height": "90dp",
            "id": "imgNewsIcon",
            "isVisible": true,
            "left": "15dp",
            "skin": "slImage",
            "src": "konymp_pl_shoe_1_list.png",
            "top": "14dp",
            "width": "90dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexTitAndDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexTitAndDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "120dp",
            "skin": "slFbox",
            "top": "13dp",
            "width": "65.74%",
            "zIndex": 1
        }, {}, {});
        flexTitAndDesc.setDefaultUnit(kony.flex.DP);
        var NewsTitle = new kony.ui.Label({
            "id": "NewsTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblNewsTitlr",
            "text": "Suspected Terrorist truck attack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var newsShortDesc = new kony.ui.RichText({
            "id": "newsShortDesc",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslRichText0bca9d3eda8404a",
            "text": "RichText",
            "top": "4dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDummy = new kony.ui.Label({
            "height": "14dp",
            "id": "lblDummy",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslLabel0g6855e79add941",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexTitAndDesc.add(NewsTitle, newsShortDesc, lblDummy);
        flexMainNews.add(imgNewsIcon, flexTitAndDesc);
        return flexMainNews;
    }
})