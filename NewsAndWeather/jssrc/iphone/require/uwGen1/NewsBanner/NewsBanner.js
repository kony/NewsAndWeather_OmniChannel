define(function() {
    return function(controller) {
        var NewsBanner = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "focusSkin": "skin4450c760",
            "height": "200px",
            "id": "NewsBanner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin4450c760",
            "top": "0%",
            "width": "949px",
            "zIndex": 2
        }, {}, {});
        NewsBanner.setDefaultUnit(kony.flex.DP);
        var NewsBanner105827998242304 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "focusSkin": "skin444f19b1",
            "height": "200px",
            "id": "NewsBanner105827998242304",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin444f19b1",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, {}, {});
        NewsBanner105827998242304.setDefaultUnit(kony.flex.DP);
        var Rectangle2140548320279472 = new kony.ui.Image2({
            "height": "200px",
            "id": "Rectangle2140548320279472",
            "isVisible": true,
            "left": "0%",
            "skin": "skin444f19b1",
            "src": "imgrectangle2140548320279472.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var NewsTitle140548320498864 = new kony.ui.Label({
            "height": "58px",
            "id": "NewsTitle140548320498864",
            "isVisible": true,
            "left": "2.53%",
            "skin": "skin444fdd00",
            "text": "Apple’s redesigned Mac Pro is coming in 2019",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false,
                "baseline": 0
            },
            "top": "6%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var NewsDesc140548320024832 = new kony.ui.Label({
            "height": "95px",
            "id": "NewsDesc140548320024832",
            "isVisible": true,
            "left": "2.53%",
            "skin": "skin44505230",
            "text": "Apple’s long-awaited update to the 2013 Mac Pro won’t be released until sometime next year, the company confirmed in an interview with TechCrunch. We’ve known since a press roundtable in April 2017 that Apple was “completely rethinking” the Mac Pro…",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false,
                "baseline": 0
            },
            "top": "38.5%",
            "width": "45%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var NewsImage106377760457216 = new kony.ui.Image2({
            "height": "175px",
            "id": "NewsImage106377760457216",
            "isVisible": true,
            "left": "48.47%",
            "skin": "skin444f19b1",
            "src": "imgnewsimage106377760457216.png",
            "top": "5.5%",
            "width": "50%",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        NewsBanner105827998242304.add(Rectangle2140548320279472, NewsTitle140548320498864, NewsDesc140548320024832, NewsImage106377760457216);
        NewsBanner.add(NewsBanner105827998242304);
        return NewsBanner;
    }
})