define("frmNewsAndWeather", function() {
    return function(controller) {
        function addWidgetsfrmNewsAndWeather() {
            this.setDefaultUnit(kony.flex.DP);
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_f0ca25720a6d458e9a24ee101b6adcbf,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxCover.setDefaultUnit(kony.flex.DP);
            flxCover.add();
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "onClick": controller.AS_FlexContainer_h0b3e2c21f3a4e64a473dfd008b68a42,
                "skin": "CopyslFbox0dec71b42df2447",
                "top": "10%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxFullPage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFullPage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyslFbox0aa31d5bb250149",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxFullPage.setDefaultUnit(kony.flex.DP);
            var headerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "17.34%",
                "id": "headerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "centerX": "50%",
                "height": "50%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "95dp",
                "right": "85dp",
                "skin": "CopyheaderTitleSkinMaster0ea486f7b771a44",
                "text": "News",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flexNewsCatagories = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": false,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "50%",
                "horizontalScrollIndicator": false,
                "id": "flexNewsCatagories",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "48%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexNewsCatagories.setDefaultUnit(kony.flex.DP);
            var category1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_ec9de3ad89974b38a59026d5ade1a514,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category1.setDefaultUnit(kony.flex.DP);
            var cateName1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "45%",
                "height": "75%",
                "id": "cateName1",
                "isVisible": true,
                "left": "0.09%",
                "right": "20dp",
                "skin": "sknCategoryS",
                "text": "Top Stories",
                "top": "0%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category1.add(cateName1);
            var category2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_ebe9f732ce294e338246ad2f5039397b,
                "skin": "slFbox",
                "top": "0.00%",
                "width": "23.15%",
                "zIndex": 1
            }, {}, {});
            category2.setDefaultUnit(kony.flex.DP);
            var cateName2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "45.80%",
                "height": "75%",
                "id": "cateName2",
                "isVisible": true,
                "left": "0.00%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "World",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category2.add(cateName2);
            var category10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_fe46d192b1e2466d92a6739a18e50bae,
                "skin": "slFbox",
                "top": "0%",
                "width": "27.78%",
                "zIndex": 1
            }, {}, {});
            category10.setDefaultUnit(kony.flex.DP);
            var cateName10 = new kony.ui.Label({
                "centerX": "49.91%",
                "centerY": "46.04%",
                "height": "75%",
                "id": "cateName10",
                "isVisible": true,
                "left": "0%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Local",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category10.add(cateName10);
            var category3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_gcfb909feaea436e8c9c1600aff32f29,
                "skin": "slFbox",
                "top": "0%",
                "width": "25.93%",
                "zIndex": 1
            }, {}, {});
            category3.setDefaultUnit(kony.flex.DP);
            var cateName3 = new kony.ui.Label({
                "centerX": "49.91%",
                "centerY": "46.04%",
                "height": "75%",
                "id": "cateName3",
                "isVisible": true,
                "left": "0%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "U.S.",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category3.add(cateName3);
            var category4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_h83b8d3f0c864824823dfa64a11c2c2e,
                "skin": "slFbox",
                "top": "0%",
                "width": "30.56%",
                "zIndex": 1
            }, {}, {});
            category4.setDefaultUnit(kony.flex.DP);
            var cateName4 = new kony.ui.Label({
                "centerX": "50.09%",
                "centerY": "45.8%",
                "height": "75%",
                "id": "cateName4",
                "isVisible": true,
                "left": "0.09%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Business",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category4.add(cateName4);
            var category5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_c46290719f4045a9a7f98fd69444ee55,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category5.setDefaultUnit(kony.flex.DP);
            var cateName5 = new kony.ui.Label({
                "centerX": "48%",
                "centerY": "45.8%",
                "height": "75%",
                "id": "cateName5",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Technology",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category5.add(cateName5);
            var category6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_c052710479194f86b47c0aedd5802a4b,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category6.setDefaultUnit(kony.flex.DP);
            var cateName6 = new kony.ui.Label({
                "centerX": "49.09%",
                "centerY": "45.56%",
                "height": "75%",
                "id": "cateName6",
                "isVisible": true,
                "left": "0.09%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Entertainment",
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category6.add(cateName6);
            var category7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_jf239d94eeaf4f568cdbf5a7b8392b7e,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category7.setDefaultUnit(kony.flex.DP);
            var cateName7 = new kony.ui.Label({
                "centerX": "50.09%",
                "centerY": "45.56%",
                "height": "75%",
                "id": "cateName7",
                "isVisible": true,
                "left": "0.09%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Sports",
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category7.add(cateName7);
            var category8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_gcb796e2383f4dd1ad0abf4731224863,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category8.setDefaultUnit(kony.flex.DP);
            var cateName8 = new kony.ui.Label({
                "centerX": "48.18%",
                "centerY": "45.80%",
                "height": "75%",
                "id": "cateName8",
                "isVisible": true,
                "left": "0.18%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Science",
                "top": "0%",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category8.add(cateName8);
            var category9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "category9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_a0edf95b217f46328142f6392cb3291f,
                "skin": "slFbox",
                "top": "0%",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            category9.setDefaultUnit(kony.flex.DP);
            var cateName9 = new kony.ui.Label({
                "centerX": "47.09%",
                "centerY": "45.8%",
                "height": "75%",
                "id": "cateName9",
                "isVisible": true,
                "left": "3.09%",
                "right": "20dp",
                "skin": "sknCategoryUS",
                "text": "Health",
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            category9.add(cateName9);
            flexNewsCatagories.add(category1, category2, category10, category3, category4, category5, category6, category7, category8, category9);
            var btnHam = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "15.63%",
                "id": "btnHam",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyslButtonGlossBlue0d8459cbb546848",
                "top": "16.88%",
                "width": "4.94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flexHamClick = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0e586f411af6b4b",
                "height": "33.87%",
                "id": "flexHamClick",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2.70%",
                "onClick": controller.AS_FlexContainer_j1c3bfb2e3e14e7bbec3366f1de8645d,
                "skin": "CopyslFbox0b6a42910067c4e",
                "top": "7%",
                "width": "7.71%",
                "zIndex": 1
            }, {}, {});
            flexHamClick.setDefaultUnit(kony.flex.DP);
            flexHamClick.add();
            headerContainer.add(headerTitleLabel, flexNewsCatagories, btnHam, flexHamClick);
            var flexScrollNewsAndWeather = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "82.38%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollNewsAndWeather",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "-0.03%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "17.32%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexScrollNewsAndWeather.setDefaultUnit(kony.flex.DP);
            var flexTodayWeather = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "31.89%",
                "id": "flexTodayWeather",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.03%",
                "skin": "CopyslFbox0a9203d7723214f",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexTodayWeather.setDefaultUnit(kony.flex.DP);
            var imgToday = new kony.ui.Image2({
                "centerX": "14.07%",
                "height": "57dp",
                "id": "imgToday",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_partly_cloudy.png",
                "top": "18.89%",
                "width": "57dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTodayTemp = new kony.ui.Label({
                "centerX": "51.41%",
                "height": "43.89%",
                "id": "lblTodayTemp",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fe8dd22f330e42",
                "text": "29°",
                "top": "45.43%",
                "width": "28.93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCityName = new kony.ui.Label({
                "centerX": "50.00%",
                "height": "24.00%",
                "id": "lblCityName",
                "isVisible": true,
                "left": "142dp",
                "skin": "CopyslLabel0d29cf815c54944",
                "text": "Hyderabad",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToday = new kony.ui.Label({
                "centerX": "50%",
                "height": "16.00%",
                "id": "lblToday",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel0ce0f56ed8ae54a",
                "text": "SATURDAY, NOV 15 2017",
                "top": "51dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexTodayWeather.add(imgToday, lblTodayTemp, lblCityName, lblToday);
            var flexWeather = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "22.23%",
                "id": "flexWeather",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "CopyslFbox0b06371b874564a",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexWeather.setDefaultUnit(kony.flex.DP);
            var flexWeather1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "97.52%",
                "id": "flexWeather1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flexWeather1.setDefaultUnit(kony.flex.DP);
            var imgWeatherIcon1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "47%",
                "height": "40dp",
                "id": "imgWeatherIcon1",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_partly_cloudy.png",
                "top": "29%",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMinTemp1 = new kony.ui.Label({
                "centerX": "50.58%",
                "height": "27.91%",
                "id": "lblMinTemp1",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0c8395529c2db49",
                "text": "29°",
                "top": "67.19%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDay1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "18.60%",
                "id": "lblDay1",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fc9cbde5bb634d",
                "text": "Mon",
                "top": "8%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexWeather1.add(imgWeatherIcon1, lblMinTemp1, lblDay1);
            var flexWeather2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexWeather2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flexWeather2.setDefaultUnit(kony.flex.DP);
            var imgWeatherIcon2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgWeatherIcon2",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_thunderstorms.png",
                "top": "24.00%",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMinTemp2 = new kony.ui.Label({
                "centerX": "50.58%",
                "height": "27.91%",
                "id": "lblMinTemp2",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0c8395529c2db49",
                "text": "18°",
                "top": "67.10%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDay2 = new kony.ui.Label({
                "centerX": "50.29%",
                "height": "18.60%",
                "id": "lblDay2",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fc9cbde5bb634d",
                "text": "Tue",
                "top": "8%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexWeather2.add(imgWeatherIcon2, lblMinTemp2, lblDay2);
            var flexWeather3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexWeather3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "skin": "slFbox",
                "top": "-0.10%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flexWeather3.setDefaultUnit(kony.flex.DP);
            var imgWeatherIcon3 = new kony.ui.Image2({
                "centerX": "50.52%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgWeatherIcon3",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_sunny.png",
                "top": "24.00%",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMinTemp3 = new kony.ui.Label({
                "centerX": "50.58%",
                "height": "27.91%",
                "id": "lblMinTemp3",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0c8395529c2db49",
                "text": "20°",
                "top": "67.10%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDay3 = new kony.ui.Label({
                "centerX": "50.29%",
                "height": "18.60%",
                "id": "lblDay3",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fc9cbde5bb634d",
                "text": "Wed",
                "top": "8%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexWeather3.add(imgWeatherIcon3, lblMinTemp3, lblDay3);
            var flexWeather4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexWeather4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flexWeather4.setDefaultUnit(kony.flex.DP);
            var imgWeatherIcon4 = new kony.ui.Image2({
                "centerX": "50.52%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgWeatherIcon4",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_rain_heavy.png",
                "top": "23.92%",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMinTemp4 = new kony.ui.Label({
                "centerX": "54.19%",
                "height": "27.91%",
                "id": "lblMinTemp4",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0c8395529c2db49",
                "text": "20°",
                "top": "67.10%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDay4 = new kony.ui.Label({
                "centerX": "50.29%",
                "height": "18.60%",
                "id": "lblDay4",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fc9cbde5bb634d",
                "text": "Thu",
                "top": "8%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexWeather4.add(imgWeatherIcon4, lblMinTemp4, lblDay4);
            var flexWeather5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexWeather5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flexWeather5.setDefaultUnit(kony.flex.DP);
            var imgWeatherIcon5 = new kony.ui.Image2({
                "centerX": "50.52%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgWeatherIcon5",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "weather_large_rain_heavy.png",
                "top": "23.92%",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMinTemp5 = new kony.ui.Label({
                "centerX": "54.19%",
                "height": "27.91%",
                "id": "lblMinTemp5",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0c8395529c2db49",
                "text": "20°",
                "top": "67.10%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDay5 = new kony.ui.Label({
                "centerX": "50.29%",
                "height": "18.60%",
                "id": "lblDay5",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyslLabel0fc9cbde5bb634d",
                "text": "Fri",
                "top": "8%",
                "width": "62.26%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexWeather5.add(imgWeatherIcon5, lblMinTemp5, lblDay5);
            flexWeather.add(flexWeather1, flexWeather2, flexWeather3, flexWeather4, flexWeather5);
            var lblStrip = new kony.ui.Label({
                "centerX": "50%",
                "height": "3px",
                "id": "lblStrip",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel0cc5cc75cfe4b47",
                "text": "Label",
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var segNews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "NewsTitle": "",
                    "imgNewsIcon": "",
                    "lblDummy": "",
                    "newsShortDesc": ""
                }],
                "groupCells": false,
                "id": "segNews",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_i39678ebcd89453fa22d80985d2389da,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0eaa088d7e8d844",
                "rowTemplate": "flexMainNews",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "cccccc00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "NewsTitle": "NewsTitle",
                    "flexMainNews": "flexMainNews",
                    "flexTitAndDesc": "flexTitAndDesc",
                    "imgNewsIcon": "imgNewsIcon",
                    "lblDummy": "lblDummy",
                    "newsShortDesc": "newsShortDesc"
                },
                "widgetSkin": "sknsegWidget",
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flexScrollNewsAndWeather.add(flexTodayWeather, flexWeather, lblStrip, segNews);
            var btnFloating = new kony.ui.Button({
                "bottom": "2%",
                "height": "82dp",
                "id": "btnFloating",
                "isVisible": true,
                "onClick": controller.AS_Button_d2f0985dd6384218bea42dc9dea2f3dc,
                "right": "4%",
                "skin": "CopyslButtonGlossBlue0f96a6f66a21a44",
                "width": "82dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "83%",
                "id": "flxLocation",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyslFbox0c120b29c3df142",
                "top": "17%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.DP);
            var Label0a8bf9621e99944 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "55%",
                "height": "20%",
                "id": "Label0a8bf9621e99944",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 3,
                "skin": "CopyslLabel0b0f50d490b3c46",
                "text": "Please turn on location services to see news about your current location.",
                "top": "50%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var Image0c494fa9231444f = new kony.ui.Image2({
                "height": "30%",
                "id": "Image0c494fa9231444f",
                "isVisible": true,
                "left": "30%",
                "skin": "slImage",
                "src": "location.png",
                "top": "15%",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocation.add(Label0a8bf9621e99944, Image0c494fa9231444f);
            flxFullPage.add(headerContainer, flexScrollNewsAndWeather, btnFloating, flxLocation);
            var hamburger = new com.konymp.slidingmenu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyCopyCopyslFbox0c9db05501e544d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            hamburger.headingText = "News & Weather";
            hamburger.headingTop = "30%";
            hamburger.menuControlFlexTop = "28%";
            hamburger.slidingMenuDirection = "\"Left\"";
            hamburger.headerAnimation = "\"Slide In\"";
            hamburger.profileImageType = "\"Circle\"";
            hamburger.footerStyle = "\"only Image\"";
            hamburger.slidingMenuSkin = "sknFlx6342a5SlidingMenu";
            hamburger.headingSkin = "CopyCopysknLblNunitof";
            hamburger.subHeadingSkin = "sknlblwhiteham";
            hamburger.menuItemTextSkin = "sknlblwhiteham";
            hamburger.footerTextSkin = "sknlblnunito";
            hamburger.menuItemHeaderTextSkin = "slFLabel";
            hamburger.btnClickSkin = "sknBtnTransperant";
            hamburger.callbackMode = false;
            hamburger.onClickFooterHelp = controller.AS_UWI_c142c3c0a29d46cca4705a4172b01361;
            hamburger.onClickFooterShare = controller.AS_UWI_hb5b6093d98d4474837702c6bd5f0afa;
            var flexKn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexKn",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "right": "4%",
                "skin": "CopyslFbox0d23e73ed9e4b4d",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flexKn.setDefaultUnit(kony.flex.DP);
            var lblTap = new kony.ui.Label({
                "id": "lblTap",
                "isVisible": true,
                "left": "7.41%",
                "skin": "CopyslLabel0d9d86a5002f04c",
                "text": "Tap this button to explore the knowledge framework",
                "top": "63.05%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var Image0bb251a5f0e434a = new kony.ui.Image2({
                "height": "14%",
                "id": "Image0bb251a5f0e434a",
                "isVisible": true,
                "left": "49.97%",
                "skin": "slImage",
                "src": "arrow1.png",
                "top": "72%",
                "width": "22%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Button0ea466a32c67241 = new kony.ui.Button({
                "height": "4%",
                "id": "Button0ea466a32c67241",
                "isVisible": true,
                "onClick": controller.AS_Button_g563592300b3498a91cbca80bf85ca21,
                "right": "3.97%",
                "skin": "CopyslButtonGlossBlue0j333f3bffb504f",
                "top": "3.25%",
                "width": "6.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flexKn.add(lblTap, Image0bb251a5f0e434a, Button0ea466a32c67241);
            this.add(flxCover, flxShadow, flxFullPage, hamburger, flexKn);
        };
        return [{
            "addWidgets": addWidgetsfrmNewsAndWeather,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmNewsAndWeather",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_i719b3ff2f5745d5a5f32a8fff0609b2,
            "skin": "skngreyfrm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});