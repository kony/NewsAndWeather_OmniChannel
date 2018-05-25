define("frmNewsAndWeather", function() {
    return function(controller) {
        function addWidgetsfrmNewsAndWeather() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHam = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHam",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "SKNFLX343e48",
                "top": "0%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxHam.setDefaultUnit(kony.flex.DP);
            var flxHamHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHamHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamHeader.setDefaultUnit(kony.flex.DP);
            var flxLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgLogo",
                "isVisible": true,
                "left": "26dp",
                "skin": "slImage",
                "src": "news_dw.png",
                "top": "18dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogo.add(imgLogo);
            var lblTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "20%",
                "skin": "SKNTOPSTORYTITLE",
                "text": "News & Weather",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHamHeader.add(flxLogo, lblTitle);
            var flxHamHeadShdw = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2px",
                "id": "flxHamHeadShdw",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNTOPSHADOW",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamHeadShdw.setDefaultUnit(kony.flex.DP);
            flxHamHeadShdw.add();
            var flxHamWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "91%",
                "horizontalScrollIndicator": true,
                "id": "flxHamWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamWrapper.setDefaultUnit(kony.flex.DP);
            var lblCategories = new kony.ui.Label({
                "id": "lblCategories",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyslLabel0f41e11f4d5f24a",
                "text": "Categories",
                "top": "1%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatWraper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCatWraper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCatWraper.setDefaultUnit(kony.flex.DP);
            var flxCat1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_ba96cc0f463d40e0802fe8b397f6f7df,
                "skin": "SKNTABCATSELECTED",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat1.setDefaultUnit(kony.flex.DP);
            var lblCat1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat1",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "TOP STORIES",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect1.setDefaultUnit(kony.flex.DP);
            flxCatSelect1.add();
            flxCat1.add(lblCat1, flxCatSelect1);
            var flxCat2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_c83103e0eb9841ebb9d8e78ead92d38c,
                "skin": "slFbox",
                "top": "0",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat2.setDefaultUnit(kony.flex.DP);
            var lblCat2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat2",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "WORLD",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect2.setDefaultUnit(kony.flex.DP);
            flxCatSelect2.add();
            flxCat2.add(lblCat2, flxCatSelect2);
            var flxCat10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_h31b14fa63d1480499e969cd8a6dd179,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat10.setDefaultUnit(kony.flex.DP);
            var lblCat10 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat10",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "LOCAL",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect10 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect10",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect10.setDefaultUnit(kony.flex.DP);
            flxCatSelect10.add();
            flxCat10.add(lblCat10, flxCatSelect10);
            var flxCat3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_j4202fcf7c534bfdb07171954681eda7,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat3.setDefaultUnit(kony.flex.DP);
            var lblCat3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat3",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "U.S.",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect3.setDefaultUnit(kony.flex.DP);
            flxCatSelect3.add();
            flxCat3.add(lblCat3, flxCatSelect3);
            var flxCat4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_d9c0e75c332a45548f58f9cd414a4b2c,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat4.setDefaultUnit(kony.flex.DP);
            var lblCat4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat4",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "BUSINESS",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect4.setDefaultUnit(kony.flex.DP);
            flxCatSelect4.add();
            flxCat4.add(lblCat4, flxCatSelect4);
            var flxCat5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_j7adce38f3b0483f8dcb78cc260aa934,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat5.setDefaultUnit(kony.flex.DP);
            var lblCat5 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat5",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "TECHNOLOGY",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect5.setDefaultUnit(kony.flex.DP);
            flxCatSelect5.add();
            flxCat5.add(lblCat5, flxCatSelect5);
            var flxCat6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_cad9c5aba370422e93c0b5d771a59b16,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat6.setDefaultUnit(kony.flex.DP);
            var lblCat6 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat6",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "ENTERTAINMENT",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect6.setDefaultUnit(kony.flex.DP);
            flxCatSelect6.add();
            flxCat6.add(lblCat6, flxCatSelect6);
            var flxCat7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_f75158fba6c2409f867555e9df4b199a,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat7.setDefaultUnit(kony.flex.DP);
            var lblCat7 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat7",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "SPORTS",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect7",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect7.setDefaultUnit(kony.flex.DP);
            flxCatSelect7.add();
            flxCat7.add(lblCat7, flxCatSelect7);
            var flxCat8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_be1c200fc622495894c4b38c4acd27d9,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat8.setDefaultUnit(kony.flex.DP);
            var lblCat8 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat8",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "SCIENCE",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect8",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect8.setDefaultUnit(kony.flex.DP);
            flxCatSelect8.add();
            flxCat8.add(lblCat8, flxCatSelect8);
            var flxCat9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxCat9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_f2e650d16b3943d39669dfaa512760af,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxCat9.setDefaultUnit(kony.flex.DP);
            var lblCat9 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCat9",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "HEALTH",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCatSelect9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCatSelect9",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "2%",
                "zIndex": 1
            }, {}, {});
            flxCatSelect9.setDefaultUnit(kony.flex.DP);
            flxCatSelect9.add();
            flxCat9.add(lblCat9, flxCatSelect9);
            flxCatWraper.add(flxCat1, flxCat2, flxCat10, flxCat3, flxCat4, flxCat5, flxCat6, flxCat7, flxCat8, flxCat9);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1px",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXWHITE",
                "top": "1%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxKonyDocumentation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxKonyDocumentation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_a549d267ea0540629204a9b07db11c06,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxKonyDocumentation.setDefaultUnit(kony.flex.DP);
            var lblDocumentation = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDocumentation",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "Kony Documentation",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxKonyDocumentation.add(lblDocumentation);
            var flxBaseCamp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "SKNTABCATSELECTED",
                "height": "50dp",
                "id": "flxBaseCamp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_g39e5478db6c40c08cd962e2038e20b9,
                "skin": "slFbox",
                "top": 0,
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flxBaseCamp.setDefaultUnit(kony.flex.DP);
            var lblBaseCamp = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBaseCamp",
                "isVisible": true,
                "left": "10%",
                "skin": "SKNWHITESMALL",
                "text": "Kony Base Camp",
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxBaseCamp.add(lblBaseCamp);
            var rtCopyRights = new kony.ui.RichText({
                "id": "rtCopyRights",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0e36e90045ec743",
                "text": "Copyrights 2018 @ <b>Kony.com</b>\n All rights reserved.\n",
                "top": "2px",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHamWrapper.add(lblCategories, flxCatWraper, flxSeperator1, flxKonyDocumentation, flxBaseCamp, rtCopyRights);
            flxHam.add(flxHamHeader, flxHamHeadShdw, flxHamWrapper);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "30%",
                "skin": "SKNFLXGRAY",
                "top": "0%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxBodyHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBodyHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyHeader.setDefaultUnit(kony.flex.DP);
            var lblBodyTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblBodyTitle",
                "isVisible": true,
                "skin": "SKNLBLSELECTEDNEWS",
                "text": "TOP STORIES",
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
            var imgHamMenu = new kony.ui.Image2({
                "centerY": "50%",
                "height": "70px",
                "id": "imgHamMenu",
                "isVisible": false,
                "left": "1%",
                "onTouchEnd": controller.AS_Image_jed09c85c0014676b5580430d4ba2f03,
                "skin": "slImage",
                "src": "menuicon.png",
                "top": "18dp",
                "width": "50px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBodyHeader.add(lblBodyTitle, imgHamMenu);
            var flxBodyHeaderShdw = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2px",
                "id": "flxBodyHeaderShdw",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNTOPSHADOW",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyHeaderShdw.setDefaultUnit(kony.flex.DP);
            flxBodyHeaderShdw.add();
            var flxBodyWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "91%",
                "horizontalScrollIndicator": true,
                "id": "flxBodyWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyWrapper.setDefaultUnit(kony.flex.DP);
            var flxWeather = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxWeather",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "skin": "slFbox",
                "top": "1%",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            flxWeather.setDefaultUnit(kony.flex.DP);
            var flxDay1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "FLXWETDAY1",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxDay1.setDefaultUnit(kony.flex.DP);
            var lblDate1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate1",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "MON",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp1",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp1 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp1",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay1.add(lblDate1, imgTemp1, lblTemp1);
            var flxDay2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY2",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay2.setDefaultUnit(kony.flex.DP);
            var lblDate2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate2",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "TUE",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp2",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp2 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp2",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay2.add(lblDate2, imgTemp2, lblTemp2);
            var flxDay3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY3",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay3.setDefaultUnit(kony.flex.DP);
            var lblDate3 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate3",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "WED",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp3 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp3",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp3 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp3",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay3.add(lblDate3, imgTemp3, lblTemp3);
            var flxDay4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY4",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay4.setDefaultUnit(kony.flex.DP);
            var lblDate4 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate4",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "THU",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp4 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp4",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp4 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp4",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay4.add(lblDate4, imgTemp4, lblTemp4);
            var flxDay5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY5",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay5.setDefaultUnit(kony.flex.DP);
            var lblDate5 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate5",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "FRI",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp5 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp5",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp5 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp5",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay5.add(lblDate5, imgTemp5, lblTemp5);
            var flxDay6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY6",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay6.setDefaultUnit(kony.flex.DP);
            var lblDate6 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate6",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "SAT",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp6 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp6",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp6 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp6",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay6.add(lblDate6, imgTemp6, lblTemp6);
            var flxDay7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDay7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "FLXWETDAY7",
                "top": "0%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxDay7.setDefaultUnit(kony.flex.DP);
            var lblDate7 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDate7",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "SUN",
                "top": "8%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgTemp7 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100dp",
                "id": "imgTemp7",
                "isVisible": true,
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "width": "100dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp7 = new kony.ui.Label({
                "bottom": "8%",
                "centerX": "50%",
                "id": "lblTemp7",
                "isVisible": true,
                "skin": "SKNLBLWHITETAB",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDay7.add(lblDate7, imgTemp7, lblTemp7);
            flxWeather.add(flxDay1, flxDay2, flxDay3, flxDay4, flxDay5, flxDay6, flxDay7);
            var flxNewsWraper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "99%",
                "horizontalScrollIndicator": true,
                "id": "flxNewsWraper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "1%",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            flxNewsWraper.setDefaultUnit(kony.flex.DP);
            var flxNewsRow = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxNewsRow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewsRow.setDefaultUnit(kony.flex.DP);
            var flxNewsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopySKNFLXFFFROUND0d509cb1fa9ce47",
                "height": "96%",
                "id": "flxNewsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            flxNewsContainer.setDefaultUnit(kony.flex.DP);
            var imgNewsThumb = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "imgNewsThumb",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNewsTitle = new kony.ui.Label({
                "height": "25%",
                "id": "lblNewsTitle",
                "isVisible": true,
                "left": "6%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNewsDetail = new kony.ui.Label({
                "height": "38%",
                "id": "lblNewsDetail",
                "isVisible": true,
                "left": "6%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNewsContainer.add(imgNewsThumb, lblNewsTitle, lblNewsDetail);
            var CopyflxNewsContainer0e2ce7c7e38c445 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0e2ce7c7e38c445",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0e2ce7c7e38c445.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0h806359bcb2946 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0h806359bcb2946",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0df0540cfe54c43 = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0df0540cfe54c43",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0i8a5df680f954d = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0i8a5df680f954d",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0e2ce7c7e38c445.add(CopyimgNewsThumb0h806359bcb2946, CopylblNewsTitle0df0540cfe54c43, CopylblNewsDetail0i8a5df680f954d);
            var CopyflxNewsContainer0e4664b597bf241 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0e4664b597bf241",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0e4664b597bf241.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0c9c301df619045 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0c9c301df619045",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0g454c8a358d740 = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0g454c8a358d740",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0b04ed317168e43 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0b04ed317168e43",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0e4664b597bf241.add(CopyimgNewsThumb0c9c301df619045, CopylblNewsTitle0g454c8a358d740, CopylblNewsDetail0b04ed317168e43);
            flxNewsRow.add(flxNewsContainer, CopyflxNewsContainer0e2ce7c7e38c445, CopyflxNewsContainer0e4664b597bf241);
            var CopyflxNewsRow0c4a936a4cf594e = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "CopyflxNewsRow0c4a936a4cf594e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsRow0c4a936a4cf594e.setDefaultUnit(kony.flex.DP);
            var CopyflxNewsContainer0d07e0a612ba343 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0d07e0a612ba343",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0d07e0a612ba343.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0d6b48a9a65334c = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0d6b48a9a65334c",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0daf55ff6b4c04c = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0daf55ff6b4c04c",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0dca776554c7645 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0dca776554c7645",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0d07e0a612ba343.add(CopyimgNewsThumb0d6b48a9a65334c, CopylblNewsTitle0daf55ff6b4c04c, CopylblNewsDetail0dca776554c7645);
            var CopyflxNewsContainer0j2964d8be9314e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0j2964d8be9314e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0j2964d8be9314e.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0d617b82a829449 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0d617b82a829449",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0b8c16fb0f50c4c = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0b8c16fb0f50c4c",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0i7f644369c044f = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0i7f644369c044f",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0j2964d8be9314e.add(CopyimgNewsThumb0d617b82a829449, CopylblNewsTitle0b8c16fb0f50c4c, CopylblNewsDetail0i7f644369c044f);
            var CopyflxNewsContainer0ac96c72869b949 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0ac96c72869b949",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0ac96c72869b949.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0c469895f334344 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0c469895f334344",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0g4367a6db8ff4b = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0g4367a6db8ff4b",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0bbfc9e40fda946 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0bbfc9e40fda946",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0ac96c72869b949.add(CopyimgNewsThumb0c469895f334344, CopylblNewsTitle0g4367a6db8ff4b, CopylblNewsDetail0bbfc9e40fda946);
            CopyflxNewsRow0c4a936a4cf594e.add(CopyflxNewsContainer0d07e0a612ba343, CopyflxNewsContainer0j2964d8be9314e, CopyflxNewsContainer0ac96c72869b949);
            var CopyflxNewsRow0ebaabb4999be4f = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "CopyflxNewsRow0ebaabb4999be4f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsRow0ebaabb4999be4f.setDefaultUnit(kony.flex.DP);
            var CopyflxNewsContainer0cc6d7fd026fc4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0cc6d7fd026fc4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0cc6d7fd026fc4f.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0f71b16f490c544 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0f71b16f490c544",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0e30422c7801e44 = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0e30422c7801e44",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0bee26120b40448 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0bee26120b40448",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0cc6d7fd026fc4f.add(CopyimgNewsThumb0f71b16f490c544, CopylblNewsTitle0e30422c7801e44, CopylblNewsDetail0bee26120b40448);
            var CopyflxNewsContainer0he084b798b9340 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0he084b798b9340",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0he084b798b9340.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0c1232d54f7c44e = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0c1232d54f7c44e",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0i3ce46a0628841 = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0i3ce46a0628841",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0eb992086ef8b48 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0eb992086ef8b48",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0he084b798b9340.add(CopyimgNewsThumb0c1232d54f7c44e, CopylblNewsTitle0i3ce46a0628841, CopylblNewsDetail0eb992086ef8b48);
            var CopyflxNewsContainer0e4442f21c3754d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxNewsContainer0e4442f21c3754d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 1
            }, {}, {});
            CopyflxNewsContainer0e4442f21c3754d.setDefaultUnit(kony.flex.DP);
            var CopyimgNewsThumb0d5bc97b6bd8745 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "CopyimgNewsThumb0d5bc97b6bd8745",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNewsTitle0hd6d650f404b45 = new kony.ui.Label({
                "height": "25%",
                "id": "CopylblNewsTitle0hd6d650f404b45",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSTITLE",
                "text": "News Title: so and so goes like this as never before...",
                "top": "32%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopylblNewsDetail0f0ee2e840a8a44 = new kony.ui.Label({
                "height": "38%",
                "id": "CopylblNewsDetail0f0ee2e840a8a44",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTABNEWSDETAILS",
                "text": "News Details..... ........ ..... ......... ...... ...................... ....... ................... ................ .......... .......... ...",
                "top": "56%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxNewsContainer0e4442f21c3754d.add(CopyimgNewsThumb0d5bc97b6bd8745, CopylblNewsTitle0hd6d650f404b45, CopylblNewsDetail0f0ee2e840a8a44);
            CopyflxNewsRow0ebaabb4999be4f.add(CopyflxNewsContainer0cc6d7fd026fc4f, CopyflxNewsContainer0he084b798b9340, CopyflxNewsContainer0e4442f21c3754d);
            flxNewsWraper.add(flxNewsRow, CopyflxNewsRow0c4a936a4cf594e, CopyflxNewsRow0ebaabb4999be4f);
            flxBodyWrapper.add(flxWeather, flxNewsWraper);
            flxBody.add(flxBodyHeader, flxBodyHeaderShdw, flxBodyWrapper);
            var flxKnowledgeFramework = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxKnowledgeFramework",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_d0fe206ab9ad42fc82718eb604463cd9,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxKnowledgeFramework.setDefaultUnit(kony.flex.DP);
            var KnowledgeFrameworkTablet = new com.konycmpt.KnowledgeFrameworkTablet({
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFrameworkTablet",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "SKNFLXKFDWBG",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            var imgCloseKF = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgCloseKF",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_a6e35d038bda4dc2a83a64df998893b4,
                "right": "5%",
                "skin": "slImage",
                "src": "closewhite.png",
                "top": "5%",
                "width": "20dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKnowledgeFramework.add(KnowledgeFrameworkTablet, imgCloseKF);
            var btnKnowledgeFramework = new kony.ui.Button({
                "bottom": "50dp",
                "focusSkin": "CopyslButtonGlossRed0fed1ff9fa70342",
                "height": "70dp",
                "id": "btnKnowledgeFramework",
                "isVisible": true,
                "onClick": controller.AS_Button_hff7959ff68e42de95fefed19d6c8650,
                "right": "50dp",
                "skin": "CopyslButtonGlossBlue0hcd2ce0edaee4c",
                "width": "70dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxNewsDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNewsDetails",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_f009c2c093754b6692273652b1e5ccd5,
                "skin": "SKNFLXBGSHADOW",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewsDetails.setDefaultUnit(kony.flex.DP);
            var flxFullNewsWrap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxFullNewsWrap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "102dp",
                "skin": "slFbox",
                "top": "107dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxFullNewsWrap.setDefaultUnit(kony.flex.DP);
            var brwNewsDetails = new kony.ui.Browser({
                "centerX": "50%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "90%",
                "id": "brwNewsDetails",
                "isVisible": true,
                "requestURLConfig": {
                    "URL": "spinner.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            var ButtonRound = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "BTNBRWBTM",
                "height": "10%",
                "id": "ButtonRound",
                "isVisible": true,
                "onClick": controller.AS_Button_j335c743e10643d4850db366fb3143ff,
                "skin": "BTNBRWBTM",
                "text": "Open in browser",
                "top": "90%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxFullNewsWrap.add(brwNewsDetails, ButtonRound);
            var imgCloseND = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgCloseND",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_fba6298b646f422f838f0450e03a2d63,
                "right": "5%",
                "skin": "slImage",
                "src": "closewhite.png",
                "top": "5%",
                "width": "20dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNewsDetails.add(flxFullNewsWrap, imgCloseND);
            var flxBlur = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxBlur",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITEBLUR",
                "top": "8%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBlur.setDefaultUnit(kony.flex.DP);
            flxBlur.add();
            this.add(flxHam, flxBody, flxKnowledgeFramework, btnKnowledgeFramework, flxNewsDetails, flxBlur);
        };
        return [{
            "addWidgets": addWidgetsfrmNewsAndWeather,
            "enabledForIdleTimeout": false,
            "id": "frmNewsAndWeather",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "onOrientationChange": controller.AS_Form_i99526dd1f824638ae6bdec5ce71376d,
            "postShow": controller.AS_Form_j7284119aec84b5cb84bed3d422957e6,
            "skin": "FRMLIGHTGRAY",
            "statusBarHidden": false
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NONE,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});