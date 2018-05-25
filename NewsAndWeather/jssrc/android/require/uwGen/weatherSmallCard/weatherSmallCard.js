define(function() {
    return function(controller) {
        var weatherSmallCard = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "focusSkin": "skin4450c760",
            "height": "143px",
            "id": "weatherSmallCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin4450c760",
            "top": "0%",
            "width": "110px",
            "zIndex": 1
        }, {}, {});
        weatherSmallCard.setDefaultUnit(kony.flex.DP);
        var weatherSmallCard105827998273792 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "focusSkin": "skin444f19b1",
            "height": "143px",
            "id": "weatherSmallCard105827998273792",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin444f19b1",
            "top": "0%",
            "width": "110px",
            "zIndex": 0
        }, {}, {});
        weatherSmallCard105827998273792.setDefaultUnit(kony.flex.DP);
        var Rectangle2140548320178928 = new kony.ui.Image2({
            "height": "143px",
            "id": "Rectangle2140548320178928",
            "isVisible": true,
            "left": "0%",
            "skin": "skin444f19b1",
            "src": "imgrectangle2140548320178928.png",
            "top": "0%",
            "width": "110px",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTemp140548320061328 = new kony.ui.Label({
            "height": "19px",
            "id": "lblTemp140548320061328",
            "isVisible": true,
            "left": "37.14%",
            "skin": "skin44af6220",
            "text": "23°",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false
            },
            "top": "79.72%",
            "width": "28px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate140548320517280 = new kony.ui.Label({
            "height": "19px",
            "id": "lblDate140548320517280",
            "isVisible": true,
            "left": "8.57%",
            "skin": "skin44af6220",
            "text": "FRI, 6 APR",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false
            },
            "top": "6.29%",
            "width": "92px",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var weatherlargerainheavy106377762565120 = new kony.ui.Image2({
            "height": "40px",
            "id": "weatherlargerainheavy106377762565120",
            "isVisible": true,
            "left": "29.52%",
            "skin": "skin444f19b1",
            "src": "imgweatherlargerainheavy106377762565120.png",
            "top": "36.36%",
            "width": "45px",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        weatherSmallCard105827998273792.add(Rectangle2140548320178928, lblTemp140548320061328, lblDate140548320517280, weatherlargerainheavy106377762565120);
        weatherSmallCard.add(weatherSmallCard105827998273792);
        return weatherSmallCard;
    }
})