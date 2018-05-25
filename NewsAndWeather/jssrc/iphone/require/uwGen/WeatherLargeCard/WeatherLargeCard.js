define(function() {
    return function(controller) {
        var WeatherLargeCard = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "focusSkin": "skin4450c760",
            "height": "143px",
            "id": "WeatherLargeCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin4450c760",
            "top": "0%",
            "width": "259px",
            "zIndex": 0
        }, {}, {});
        WeatherLargeCard.setDefaultUnit(kony.flex.DP);
        var WeatherCard = new kony.ui.FlexContainer({
            "clipBounds": true,
            "focusSkin": "skin444f19b1",
            "height": "143px",
            "id": "WeatherCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "skin444f19b1",
            "top": "0%",
            "width": "259px",
            "zIndex": 0
        }, {}, {});
        WeatherCard.setDefaultUnit(kony.flex.DP);
        var Rectangle2140548382173936 = new kony.ui.Image2({
            "height": "143px",
            "id": "Rectangle2140548382173936",
            "isVisible": true,
            "left": "0%",
            "skin": "skin444f19b1",
            "src": "imgrectangle2140548382173936.png",
            "top": "0%",
            "width": "259px",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTemp = new kony.ui.Label({
            "height": "19px",
            "id": "lblTemp",
            "isVisible": true,
            "left": "43.24%",
            "skin": "skin44af6220",
            "text": "23°",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false,
                "baseline": 0
            },
            "top": "80.42%",
            "width": "27px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDate = new kony.ui.Label({
            "height": "19px",
            "id": "lblDate",
            "isVisible": true,
            "left": "33.2%",
            "skin": "skin44af6220",
            "text": "FRI, 6 APR",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": "null",
                "strikeThrough": false,
                "baseline": 0
            },
            "top": "8.39%",
            "width": "88px",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var weatherlargerainheavy = new kony.ui.Image2({
            "height": "62px",
            "id": "weatherlargerainheavy",
            "isVisible": true,
            "left": "37.45%",
            "skin": "skin444f19b1",
            "src": "imgweatherlargerainheavy106377762543104.png",
            "top": "27.97%",
            "width": "65px",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        WeatherCard.add(Rectangle2140548382173936, lblTemp, lblDate, weatherlargerainheavy);
        WeatherLargeCard.add(WeatherCard);
        return WeatherLargeCard;
    }
})