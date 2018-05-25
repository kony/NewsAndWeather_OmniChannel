define("frmNewsAndWeather444c3380", function() {
    return function(controller) {
        function addWidgetsfrmNewsAndWeather444c3380() {
            this.setDefaultUnit(kony.flex.DP);
            var DesktopHD = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "skin45907352",
                "height": "100%",
                "id": "DesktopHD",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "skin45907352",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {}, {});
            DesktopHD.setDefaultUnit(kony.flex.DP);
            var NewsBoard = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "1007px",
                "horizontalScrollIndicator": true,
                "id": "NewsBoard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "11.17%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "7.78%",
                "verticalScrollIndicator": true,
                "width": "82%",
                "zIndex": 0
            }, {}, {});
            NewsBoard.setDefaultUnit(kony.flex.DP);
            var topStoryBanner = new uwGen1.NewsBanner({
                "clipBounds": true,
                "focusSkin": "skin4450c760",
                "height": "200px",
                "id": "topStoryBanner",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "skin4450c760",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            var flxWeatherNewsWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "220dp",
                "horizontalScrollIndicator": true,
                "id": "flxWeatherNewsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "42dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxWeatherNewsWrapper.setDefaultUnit(kony.flex.DP);
            var WeatherCard1 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "WeatherCard1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "276px",
                "zIndex": 0
            }, {}, {});
            WeatherCard1.setDefaultUnit(kony.flex.DP);
            var Rectangle2140548382173936 = new kony.ui.Image2({
                "height": "143px",
                "id": "Rectangle2140548382173936",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548382173936.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp1",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "textStyle": {},
                "top": "80%",
                "width": "27px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate0 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate0",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "textStyle": {},
                "top": "8.39%",
                "width": "88px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp1 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "62px",
                "id": "imgTemp1",
                "isVisible": true,
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
            WeatherCard1.add(Rectangle2140548382173936, lblTemp1, lblDate0, imgTemp1);
            var weatherCard2 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard2.setDefaultUnit(kony.flex.DP);
            var Rectangle2140548320178928 = new kony.ui.Image2({
                "height": "143px",
                "id": "Rectangle2140548320178928",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp2 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp2",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate1",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp2 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp2",
                "isVisible": true,
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
            weatherCard2.add(Rectangle2140548320178928, lblTemp2, lblDate1, imgTemp2);
            var weatherCard3 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard3.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0fed85cac37fb45 = new kony.ui.Image2({
                "height": "143px",
                "id": "CopyRectangle0fed85cac37fb45",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp3 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp3",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate2 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate2",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp3 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp3",
                "isVisible": true,
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
            weatherCard3.add(CopyRectangle0fed85cac37fb45, lblTemp3, lblDate2, imgTemp3);
            var weatherCard4 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard4.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0g2785f6b4a6c4b = new kony.ui.Image2({
                "height": "143px",
                "id": "CopyRectangle0g2785f6b4a6c4b",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp4 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp4",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate3 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate3",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp4 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp4",
                "isVisible": true,
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
            weatherCard4.add(CopyRectangle0g2785f6b4a6c4b, lblTemp4, lblDate3, imgTemp4);
            var weatherCard5 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard5.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0g1c63fd7ab5d43 = new kony.ui.Image2({
                "height": "143px",
                "id": "CopyRectangle0g1c63fd7ab5d43",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp5 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp5",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate4 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate4",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp5 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp5",
                "isVisible": true,
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
            weatherCard5.add(CopyRectangle0g1c63fd7ab5d43, lblTemp5, lblDate4, imgTemp5);
            var weatherCard6 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard6.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0b38715d9a4b148 = new kony.ui.Image2({
                "height": "143px",
                "id": "CopyRectangle0b38715d9a4b148",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp6 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp6",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate5 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate5",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp6 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp6",
                "isVisible": true,
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
            weatherCard6.add(CopyRectangle0b38715d9a4b148, lblTemp6, lblDate5, imgTemp6);
            var weatherCard7 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "focusSkin": "skin444f19b1",
                "height": "143px",
                "id": "weatherCard7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1px",
                "skin": "skin444f19b1",
                "top": "0%",
                "width": "130px",
                "zIndex": 0
            }, {}, {});
            weatherCard7.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0h639e87120144f = new kony.ui.Image2({
                "height": "143px",
                "id": "CopyRectangle0h639e87120144f",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320178928.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp7 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblTemp7",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "23°",
                "top": "79.72%",
                "width": "28px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDate6 = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "lblDate6",
                "isVisible": true,
                "skin": "skin44af6220",
                "text": "FRI, 6 APR",
                "top": "6.29%",
                "width": "92px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp7 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40px",
                "id": "imgTemp7",
                "isVisible": true,
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
            weatherCard7.add(CopyRectangle0h639e87120144f, lblTemp7, lblDate6, imgTemp7);
            flxWeatherNewsWrapper.add(WeatherCard1, weatherCard2, weatherCard3, weatherCard4, weatherCard5, weatherCard6, weatherCard7);
            var CardBoard = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "628px",
                "id": "CardBoard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "top": "1%",
                "width": "100%",
                "zIndex": 0
            }, {}, {});
            CardBoard.setDefaultUnit(kony.flex.DP);
            var Row1 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "306px",
                "id": "Row1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Row1.setDefaultUnit(kony.flex.DP);
            var NewsCard105553122548992 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "306px",
                "id": "NewsCard105553122548992",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            NewsCard105553122548992.setDefaultUnit(kony.flex.DP);
            var Rectangle2140548213894848 = new kony.ui.Image2({
                "height": "306px",
                "id": "Rectangle2140548213894848",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548213894848.png",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NewsTitle140548383678992 = new kony.ui.Label({
                "height": "58px",
                "id": "NewsTitle140548383678992",
                "isVisible": true,
                "left": "4.25%",
                "skin": "skin444fdd00",
                "text": "Apple’s redesigned Mac Pro is coming in 2019",
                "top": "42.48%",
                "width": "278px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NewsDesc140548383679344 = new kony.ui.Label({
                "height": "95px",
                "id": "NewsDesc140548383679344",
                "isVisible": true,
                "left": "4.58%",
                "skin": "skin44505230",
                "text": "Apple’s long-awaited update to the 2013 Mac Pro won’t be released until sometime next year, the company confirmed in an interview with TechCrunch…",
                "top": "63.4%",
                "width": "278px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NewsImage105553122542592 = new kony.ui.Image2({
                "height": "108px",
                "id": "NewsImage105553122542592",
                "isVisible": true,
                "left": "4.25%",
                "skin": "skin444f19b1",
                "src": "imgnewsimage105553122542592.png",
                "top": "4.25%",
                "width": "278px",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            NewsCard105553122548992.add(Rectangle2140548213894848, NewsTitle140548383678992, NewsDesc140548383679344, NewsImage105553122542592);
            var NewsCard1106377762542080 = new uwGen.NewsCard({
                "clipBounds": true,
                "focusSkin": "skin4450c760",
                "height": "306px",
                "id": "NewsCard1106377762542080",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "skin4450c760",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            NewsCard1106377762542080.height = "306px";
            NewsCard1106377762542080.left = "2%";
            NewsCard1106377762542080.top = "0%";
            NewsCard1106377762542080.width = "306px";
            NewsCard1106377762542080.zIndex = 1;
            var NewsCard3106377762538240 = new uwGen.NewsCard({
                "clipBounds": true,
                "focusSkin": "skin4450c760",
                "height": "306px",
                "id": "NewsCard3106377762538240",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "skin4450c760",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            NewsCard3106377762538240.height = "306px";
            NewsCard3106377762538240.left = "2%";
            NewsCard3106377762538240.top = "0%";
            NewsCard3106377762538240.width = "306px";
            NewsCard3106377762538240.zIndex = 2;
            Row1.add(NewsCard105553122548992, NewsCard1106377762542080, NewsCard3106377762538240);
            var Row2 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "306px",
                "id": "Row2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Row2.setDefaultUnit(kony.flex.DP);
            var CopyNewsCard0g245f933189243 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "306px",
                "id": "CopyNewsCard0g245f933189243",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            CopyNewsCard0g245f933189243.setDefaultUnit(kony.flex.DP);
            var CopyRectangle0bc28145f2a6340 = new kony.ui.Image2({
                "height": "306px",
                "id": "CopyRectangle0bc28145f2a6340",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548213894848.png",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyNewsTitle0hc307a05b5fe4b = new kony.ui.Label({
                "height": "58px",
                "id": "CopyNewsTitle0hc307a05b5fe4b",
                "isVisible": true,
                "left": "4.25%",
                "skin": "skin444fdd00",
                "text": "Apple’s redesigned Mac Pro is coming in 2019",
                "top": "42.48%",
                "width": "278px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyNewsDesc0a57fad794c414e = new kony.ui.Label({
                "height": "95px",
                "id": "CopyNewsDesc0a57fad794c414e",
                "isVisible": true,
                "left": "4.58%",
                "skin": "skin44505230",
                "text": "Apple’s long-awaited update to the 2013 Mac Pro won’t be released until sometime next year, the company confirmed in an interview with TechCrunch…",
                "top": "63.4%",
                "width": "278px",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyNewsImage0f4e2a5f57ef046 = new kony.ui.Image2({
                "height": "108px",
                "id": "CopyNewsImage0f4e2a5f57ef046",
                "isVisible": true,
                "left": "4.25%",
                "skin": "skin444f19b1",
                "src": "imgnewsimage105553122542592.png",
                "top": "4.25%",
                "width": "278px",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyNewsCard0g245f933189243.add(CopyRectangle0bc28145f2a6340, CopyNewsTitle0hc307a05b5fe4b, CopyNewsDesc0a57fad794c414e, CopyNewsImage0f4e2a5f57ef046);
            var CopyNewsCard0be9a12c29cb042 = new uwGen.NewsCard({
                "clipBounds": true,
                "focusSkin": "skin4450c760",
                "height": "306px",
                "id": "CopyNewsCard0be9a12c29cb042",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "skin4450c760",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            CopyNewsCard0be9a12c29cb042.height = "306px";
            CopyNewsCard0be9a12c29cb042.left = "2%";
            CopyNewsCard0be9a12c29cb042.top = "0%";
            CopyNewsCard0be9a12c29cb042.width = "306px";
            CopyNewsCard0be9a12c29cb042.zIndex = 1;
            var CopyNewsCard0c96bbb3da1f54c = new uwGen.NewsCard({
                "clipBounds": true,
                "focusSkin": "skin4450c760",
                "height": "306px",
                "id": "CopyNewsCard0c96bbb3da1f54c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "skin4450c760",
                "top": "0%",
                "width": "306px",
                "zIndex": 0
            }, {}, {});
            CopyNewsCard0c96bbb3da1f54c.height = "306px";
            CopyNewsCard0c96bbb3da1f54c.left = "2%";
            CopyNewsCard0c96bbb3da1f54c.top = "0%";
            CopyNewsCard0c96bbb3da1f54c.width = "306px";
            CopyNewsCard0c96bbb3da1f54c.zIndex = 2;
            Row2.add(CopyNewsCard0g245f933189243, CopyNewsCard0be9a12c29cb042, CopyNewsCard0c96bbb3da1f54c);
            CardBoard.add(Row1, Row2);
            NewsBoard.add(topStoryBanner, flxWeatherNewsWrapper, CardBoard);
            var bottombar = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "60px",
                "id": "bottombar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "93%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            bottombar.setDefaultUnit(kony.flex.DP);
            var Rectangle = new kony.ui.Image2({
                "height": "60px",
                "id": "Rectangle",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle140548382193520.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var copyRights = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "20px",
                "id": "copyRights",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "36.64%",
                "top": "33.33%",
                "width": "262px",
                "zIndex": 1
            }, {}, {});
            copyRights.setDefaultUnit(kony.flex.DP);
            var Copyrights2018 = new kony.ui.Label({
                "centerY": "50%",
                "height": "19px",
                "id": "Copyrights2018",
                "isVisible": true,
                "left": "0%",
                "skin": "skin44505230",
                "text": "Copyrights 2018 @",
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Konycom = new kony.ui.Label({
                "centerY": "50%",
                "height": "19px",
                "id": "Konycom",
                "isVisible": true,
                "left": "40.64%",
                "skin": "skin4585ec00",
                "text": "Kony.com",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Allrightsreserved = new kony.ui.Label({
                "centerY": "50%",
                "height": "19px",
                "id": "Allrightsreserved",
                "isVisible": true,
                "left": "62.28%",
                "skin": "skin44505230",
                "text": "All rights reserved",
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            copyRights.add(Copyrights2018, Konycom, Allrightsreserved);
            bottombar.add(Rectangle, copyRights);
            var NavBar = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "60px",
                "id": "NavBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0.11%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            NavBar.setDefaultUnit(kony.flex.DP);
            var Rectangle140548320167488 = new kony.ui.Image2({
                "height": "60px",
                "id": "Rectangle140548320167488",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle140548320167488.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Logo = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "40px",
                "id": "Logo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "11.25%",
                "top": "16.67%",
                "width": "216px",
                "zIndex": 1
            }, {}, {});
            Logo.setDefaultUnit(kony.flex.DP);
            var Name = new kony.ui.Label({
                "height": "26px",
                "id": "Name",
                "isVisible": true,
                "left": "23.61%",
                "skin": "skin45880ee0",
                "text": "News & Weather",
                "top": "12.5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LogoImage = new kony.ui.Image2({
                "height": "40px",
                "id": "LogoImage",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imglogoimage106377764552960.png",
                "top": "0%",
                "width": "40px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Logo.add(Name, LogoImage);
            var CategoriesBar = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "40px",
                "id": "CategoriesBar",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29.92%",
                "top": "16.67%",
                "width": "652px",
                "zIndex": 2
            }, {}, {});
            CategoriesBar.setDefaultUnit(kony.flex.DP);
            var btnCat1 = new kony.ui.Button({
                "focusSkin": "skin4588f940",
                "height": "40px",
                "id": "btnCat1",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_j987567d588f4699b33c7c594b330f36,
                "skin": "skin4588f940",
                "text": "TOP STORIES",
                "top": "0%",
                "width": "167px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat2 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat2",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_de5abf71aa46477aa48c8340b89d3856,
                "skin": "skin4589e3a0",
                "text": "World",
                "width": "58px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat10 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat10",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_a5470fc16c344a5f9810000c28e6fe0d,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat3 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat3",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_c4ea74c4856d4e6d85e7cdb392cfe523,
                "skin": "skin4589e3a0",
                "text": "U.S.",
                "top": "0%",
                "width": "43px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat4 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat4",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_j61c8968a91346c99c03d07609c74c6a,
                "skin": "skin4589e3a0",
                "text": "LOCAL",
                "top": "0%",
                "width": "98px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat5 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat5",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_d1e09c16e64d44c0bf41f86bfb37c26f,
                "skin": "skin4589e3a0",
                "text": "SPORTS",
                "top": "0%",
                "width": "152px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat6 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat6",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_j6371bee6c754b0eb02b7b5d894d9c88,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat7 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat7",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_e9b36a5bdbd7467ca9eb65ed063f1151,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat8 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat8",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_c9a9488bfaf34af2835815e7c0ba6db4,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCat9 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "btnCat9",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_h5e727dd43964f2e932921f90eff9044,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CategoriesBar.add(btnCat1, btnCat2, btnCat10, btnCat3, btnCat4, btnCat5, btnCat6, btnCat7, btnCat8, btnCat9);
            var HamburgerMenu = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "20px",
                "id": "HamburgerMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "82.66%",
                "onClick": controller.AS_FlexContainer_gf3eed6d9c024518aca267ab4e9329d9,
                "top": "33.33%",
                "width": "31px",
                "zIndex": 3
            }, {}, {});
            HamburgerMenu.setDefaultUnit(kony.flex.DP);
            var menuicon = new kony.ui.Image2({
                "height": "20px",
                "id": "menuicon",
                "isVisible": true,
                "left": "2.78%",
                "skin": "skin444f19b1",
                "src": "imgmenuicon106377762554624.png",
                "top": "0%",
                "width": "30px",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            HamburgerMenu.add(menuicon);
            NavBar.add(Rectangle140548320167488, Logo, CategoriesBar, HamburgerMenu);
            var flxHamMenu = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "94px",
                "id": "flxHamMenu",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "70.47%",
                "skin": "SKNFLXWHITE1px",
                "top": "5.56%",
                "width": "190px",
                "zIndex": 3
            }, {}, {});
            flxHamMenu.setDefaultUnit(kony.flex.DP);
            var KonyBaseCamp = new kony.ui.Label({
                "height": "40px",
                "id": "KonyBaseCamp",
                "isVisible": true,
                "left": "10%",
                "onTouchStart": controller.AS_Label_e74f2ba18de84dc78a7c0b7ceb25ae0a,
                "skin": "skin4585ec00",
                "text": "Kony Base Camp",
                "top": "2dp",
                "width": "80%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var KonyDocumentation = new kony.ui.Label({
                "centerX": "50%",
                "height": "19px",
                "id": "KonyDocumentation",
                "isVisible": true,
                "left": "10%",
                "onTouchStart": controller.AS_Label_b4de26875e5d4c2698ca52e3fcbd8d53,
                "skin": "skin4585ec00",
                "text": "Kony Documentation",
                "top": "17.02%",
                "width": "80%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Line = new kony.ui.Image2({
                "height": "3px",
                "id": "Line",
                "isVisible": true,
                "left": "10.05%",
                "skin": "skin444f19b1",
                "src": "imgline140548212518656.png",
                "top": "2dp",
                "width": "150px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxHamCats = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "40px",
                "id": "flxHamCats",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "29.92%",
                "top": "16.67%",
                "width": "652px",
                "zIndex": 2
            }, {}, {});
            flxHamCats.setDefaultUnit(kony.flex.DP);
            var bntHamCat1 = new kony.ui.Button({
                "focusSkin": "skin4588f940",
                "height": "40px",
                "id": "bntHamCat1",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_f32608689d6047b29b47c55f47942b8d,
                "skin": "skin4588f940",
                "text": "TOP STORIES",
                "top": "0%",
                "width": "167px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat2 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat2",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_ic85edbca48f466d96cb49ba92197f31,
                "skin": "skin4589e3a0",
                "text": "World",
                "width": "58px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat10 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat10",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_ee98c2451e4b44b68e5a345138c42476,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat3 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat3",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_bf584ffe6ad24a64b26627bda0d82bad,
                "skin": "skin4589e3a0",
                "text": "U.S.",
                "top": "0%",
                "width": "43px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat4 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat4",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_ae4e5fe9aeea4969800458136c548302,
                "skin": "skin4589e3a0",
                "text": "LOCAL",
                "top": "0%",
                "width": "98px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat5 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat5",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_ga27ba4d628243f5ad26042bcbe3ff4c,
                "skin": "skin4589e3a0",
                "text": "SPORTS",
                "top": "0%",
                "width": "152px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat6 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat6",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_g827b606cc6848d68fa93b476e3f8a55,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat7 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat7",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_gd499ad416954ae9a8c87032f7c16de5,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat8 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat8",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_i19176c4a447496bb64103831f749a5f,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bntHamCat9 = new kony.ui.Button({
                "focusSkin": "skin4589e3a0",
                "id": "bntHamCat9",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_de481ac29b664efab2b8708697d23dfe,
                "skin": "skin4589e3a0",
                "text": "HEALTH",
                "top": "0%",
                "width": "144px",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHamCats.add(bntHamCat1, bntHamCat2, bntHamCat10, bntHamCat3, bntHamCat4, bntHamCat5, bntHamCat6, bntHamCat7, bntHamCat8, bntHamCat9);
            flxHamMenu.add(KonyBaseCamp, KonyDocumentation, Line, flxHamCats);
            var KnowledgeFramework = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "900px",
                "id": "KnowledgeFramework",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0%",
                "width": "1280px",
                "zIndex": 4
            }, {}, {});
            KnowledgeFramework.setDefaultUnit(kony.flex.DP);
            var floatingbtn = new kony.ui.Image2({
                "height": "60px",
                "id": "floatingbtn",
                "isVisible": true,
                "left": "92.19%",
                "skin": "skin444f19b1",
                "src": "imgfloatingbtn106377762539008.png",
                "top": "85%",
                "width": "60px",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Knowledgewraper = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "900px",
                "id": "Knowledgewraper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "top": "0%",
                "width": "1280px",
                "zIndex": 1
            }, {}, {});
            Knowledgewraper.setDefaultUnit(kony.flex.DP);
            var Rectangle2140548320915968 = new kony.ui.Image2({
                "height": "900px",
                "id": "Rectangle2140548320915968",
                "isVisible": true,
                "left": "0%",
                "skin": "skin444f19b1",
                "src": "imgrectangle2140548320915968.png",
                "top": "0%",
                "width": "1280px",
                "zIndex": 0
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Rectangle3 = new kony.ui.Image2({
                "height": "540px",
                "id": "Rectangle3",
                "isVisible": true,
                "left": "20%",
                "skin": "skin444f19b1",
                "src": "imgrectangle3140548320598384.png",
                "top": "20%",
                "width": "768px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var closewhite = new kony.ui.Image2({
                "height": "30px",
                "id": "closewhite",
                "isVisible": true,
                "left": "93.2%",
                "skin": "skin444f19b1",
                "src": "imgclosewhite106377762510848.png",
                "top": "7.78%",
                "width": "30px",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Knowledgewraper.add(Rectangle2140548320915968, Rectangle3, closewhite);
            KnowledgeFramework.add(floatingbtn, Knowledgewraper);
            DesktopHD.add(NewsBoard, bottombar, NavBar, flxHamMenu, KnowledgeFramework);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1280,
                "470": {
                    "CategoriesBar": {
                        "isVisible": false
                    },
                    "flxHamMenu": {
                        "height": {
                            "type": "string",
                            "value": "520px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "SKNFLXWHITE1px"
                    },
                    "flxHamCats": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "400px"
                        },
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "KnowledgeFramework": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        }
                    }
                },
                "685": {
                    "NewsBoard": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "80%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "topStoryBanner": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxWeatherNewsWrapper": {
                        "height": {
                            "type": "string",
                            "value": "143px"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10dp"
                        }
                    },
                    "CardBoard": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        }
                    },
                    "copyRights": {},
                    "CategoriesBar": {
                        "isVisible": false
                    },
                    "HamburgerMenu": {
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "flxHamMenu": {
                        "height": {
                            "type": "string",
                            "value": "520px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "SKNFLXWHITE1px"
                    },
                    "KonyBaseCamp": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    },
                    "KonyDocumentation": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "flxHamCats": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "400px"
                        },
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "bntHamCat1": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat2": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "skin": "skin4589e3a0",
                        "text": "World",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat10": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "LOCAL",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat3": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat4": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "BUSINESS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat5": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "TECHNOLOGY",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat6": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "ENTERTAINMENT",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat7": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SPORTS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat8": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SCIENCE",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat9": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "HEALTH",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "KnowledgeFramework": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        }
                    }
                },
                "1015": {
                    "NewsBoard": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "80%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "topStoryBanner": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxWeatherNewsWrapper": {
                        "height": {
                            "type": "string",
                            "value": "143px"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10dp"
                        }
                    },
                    "CardBoard": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        }
                    },
                    "NewsCard105553122548992": {
                        "width": {
                            "type": "string",
                            "value": "200px"
                        }
                    },
                    "CopyNewsCard0g245f933189243": {
                        "width": {
                            "type": "string",
                            "value": "200px"
                        }
                    },
                    "copyRights": {
                        "layoutType": kony.flex.FLOW_HORIZONTAL
                    },
                    "CategoriesBar": {
                        "isVisible": false
                    },
                    "btnCat1": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "110px"
                        }
                    },
                    "btnCat2": {},
                    "btnCat10": {},
                    "btnCat3": {},
                    "btnCat4": {},
                    "btnCat5": {},
                    "btnCat6": {},
                    "btnCat7": {},
                    "btnCat8": {},
                    "btnCat9": {},
                    "HamburgerMenu": {
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "flxHamMenu": {
                        "height": {
                            "type": "string",
                            "value": "520px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "SKNFLXWHITE1px"
                    },
                    "KonyBaseCamp": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    },
                    "KonyDocumentation": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "flxHamCats": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "400px"
                        },
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "bntHamCat1": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat2": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "skin": "skin4589e3a0",
                        "text": "World",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat10": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "LOCAL",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat3": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat4": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "BUSINESS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat5": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "TECHNOLOGY",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat6": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "ENTERTAINMENT",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat7": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SPORTS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat8": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SCIENCE",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat9": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "HEALTH",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "KnowledgeFramework": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        }
                    }
                },
                "1280": {
                    "DesktopHD": {},
                    "NewsBoard": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "80%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "topStoryBanner": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxWeatherNewsWrapper": {
                        "height": {
                            "type": "string",
                            "value": "143px"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10dp"
                        }
                    },
                    "WeatherCard1": {},
                    "weatherCard2": {},
                    "weatherCard3": {},
                    "weatherCard4": {},
                    "weatherCard5": {},
                    "weatherCard6": {},
                    "weatherCard7": {},
                    "CardBoard": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        }
                    },
                    "Row1": {
                        "layoutType": kony.flex.FLOW_HORIZONTAL
                    },
                    "NewsCard105553122548992": {
                        "width": {
                            "type": "string",
                            "value": "306px"
                        }
                    },
                    "Row2": {
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "top": {
                            "type": "string",
                            "value": "10dp"
                        }
                    },
                    "CopyNewsCard0g245f933189243": {
                        "width": {
                            "type": "string",
                            "value": "306px"
                        }
                    },
                    "copyRights": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "Copyrights2018": {
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "Konycom": {
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "Allrightsreserved": {
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "Rectangle140548320167488": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "CategoriesBar": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "26%"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        }
                    },
                    "btnCat1": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "110px"
                        }
                    },
                    "btnCat2": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "skin": "skin4589e3a0",
                        "text": "World",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "btnCat10": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "LOCAL",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "btnCat3": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "btnCat4": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "BUSINESS",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "75px"
                        }
                    },
                    "btnCat5": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "TECHNOLOGY",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "95px"
                        }
                    },
                    "btnCat6": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "ENTERTAINMENT",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "110px"
                        }
                    },
                    "btnCat7": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "SPORTS",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "btnCat8": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "SCIENCE",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "70px"
                        }
                    },
                    "btnCat9": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "text": "HEALTH",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "HamburgerMenu": {
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "flxHamMenu": {
                        "height": {
                            "type": "string",
                            "value": "85px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "SKNFLXWHITE1px"
                    },
                    "KonyBaseCamp": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    },
                    "KonyDocumentation": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "Line": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "zIndex": 6
                    },
                    "flxHamCats": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "400px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "bntHamCat1": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat2": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "skin": "skin4589e3a0",
                        "text": "World",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat10": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "LOCAL",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat3": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat4": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "BUSINESS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat5": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "TECHNOLOGY",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat6": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "ENTERTAINMENT",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat7": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SPORTS",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat8": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "SCIENCE",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "bntHamCat9": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "right": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "text": "HEALTH",
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        }
                    },
                    "KnowledgeFramework": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        }
                    }
                }
            }
            this.add(DesktopHD);
        };
        return [{
            "addWidgets": addWidgetsfrmNewsAndWeather444c3380,
            "enabledForIdleTimeout": false,
            "id": "frmNewsAndWeather444c3380",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a7f526e98c254597935a8494341c8d23,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [470, 685, 1015, 1280],
            "onBreakpointChange": controller.AS_Form_a877e42730da4f8a9138baa7ad4e1823
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});