define(function() {
    return function(controller) {
        var NewsCard = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "focusSkin": "skin4450c760",
            "height": "306px",
            "id": "NewsCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin4450c760",
            "top": "0%",
            "width": "306px",
            "zIndex": 0
        }, {}, {});
        NewsCard.setDefaultUnit(kony.flex.DP);
        var NewsCard105827998296576 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "focusSkin": "skin444f19b1",
            "height": "306px",
            "id": "NewsCard105827998296576",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin444f19b1",
            "top": "0%",
            "width": "306px",
            "zIndex": 0
        }, {}, {});
        NewsCard105827998296576.setDefaultUnit(kony.flex.DP);
        var Rectangle2 = new kony.ui.Image2({
            "height": "306px",
            "id": "Rectangle2",
            "isVisible": true,
            "left": "0%",
            "skin": "skin444f19b1",
            "src": "imgrectangle2140548381914848.png",
            "top": "0%",
            "width": "306px",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var NewsTitle = new kony.ui.Label({
            "height": "58px",
            "id": "NewsTitle",
            "isVisible": true,
            "left": "4.25%",
            "skin": "skin444fdd00",
            "text": "Apple’s redesigned Mac Pro is coming in 2019",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false
            },
            "top": "42.48%",
            "width": "278px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var NewsDesc = new kony.ui.Label({
            "height": "95px",
            "id": "NewsDesc",
            "isVisible": true,
            "left": "4.58%",
            "skin": "skin44505230",
            "text": "Apple’s long-awaited update to the 2013 Mac Pro won’t be released until sometime next year, the company confirmed in an interview with TechCrunch…",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false
            },
            "top": "63.4%",
            "width": "278px",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var NewsImage = new kony.ui.Image2({
            "height": "108px",
            "id": "NewsImage",
            "isVisible": true,
            "left": "4.25%",
            "skin": "skin444f19b1",
            "src": "imgnewsimage106377760453120.png",
            "top": "4.25%",
            "width": "278px",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        NewsCard105827998296576.add(Rectangle2, NewsTitle, NewsDesc, NewsImage);
        NewsCard.add(NewsCard105827998296576);
        return NewsCard;
    }
})