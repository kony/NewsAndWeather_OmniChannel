define("frmNewsAndWeather", function() {
    return function(controller) {
        function addWidgetsfrmNewsAndWeather() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "skin": "SKNFLXWHITE",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderContentWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxHeaderContentWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxHeaderContentWrapper.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgLogo",
                "isVisible": true,
                "left": "0px",
                "skin": "slImage",
                "src": "news_dw.png",
                "top": "18dp",
                "width": "60px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "65px",
                "skin": "SKNWEBTITLE",
                "text": "News & Weather",
                "width": "170px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCategories = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCategories",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "240px",
                "skin": "slFbox",
                "top": "7dp",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxCategories.setDefaultUnit(kony.flex.DP);
            var btnCat1 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat1",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_h818d3ba5c174e54b0566512f4281b85,
                "skin": "SKNBTNCATACTIVE",
                "text": "TOP STORIES",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat2 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat2",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_i8aa7caa5b0e40288f907d293df39ec9,
                "skin": "SKNBTNCAT",
                "text": "WORLD",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat10 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat10",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_hc6a7f0dc0b14568a3fddd4dd520c480,
                "skin": "SKNBTNCAT",
                "text": "LOCAL",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat3 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat3",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_d4439ebe012b4a9e8ce6fc291e238e27,
                "skin": "SKNBTNCAT",
                "text": "U.S.",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat4 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat4",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_a9e406af7c3a406b825ee36b29b10b3c,
                "skin": "SKNBTNCAT",
                "text": "BUSINESS",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat5 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat5",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_h18e3b32d8f34c3899f9f6ddf32aa56b,
                "skin": "SKNBTNCAT",
                "text": "TECHNOLOGY",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat6 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat6",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_e7e265d183ab4b7a98b42f591d9200ce,
                "skin": "SKNBTNCAT",
                "text": "ENTERTAINMENT",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat7 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat7",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_b26062a68e45468cb8cb7f12b1bbb705,
                "skin": "SKNBTNCAT",
                "text": "SPORTS",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat8 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat8",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_idc2a8928ffb4e66a2406074829f5937,
                "skin": "SKNBTNCAT",
                "text": "SCIENCE",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var btnCat9 = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "SKNCATFOCUS",
                "height": "80%",
                "id": "btnCat9",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_g7077d3f46a64fb38ff90fed0f9fbd98,
                "skin": "SKNBTNCAT",
                "text": "HEALTH",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxCategories.add(btnCat1, btnCat2, btnCat10, btnCat3, btnCat4, btnCat5, btnCat6, btnCat7, btnCat8, btnCat9);
            var flxMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_f5324683470f4a489a4a81cbf92b72f3,
                "right": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "65px",
                "zIndex": 1
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
            var imgMenu = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgMenu",
                "isVisible": true,
                "skin": "slImage",
                "src": "menuicon.png",
                "width": "20px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMenu.add(imgMenu);
            flxHeaderContentWrapper.add(imgLogo, lblTitle, flxCategories, flxMenu);
            flxHeader.add(flxHeaderContentWrapper);
            var flxTopShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxTopShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNTOPSHADOW",
                "top": "7%",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxTopShadow.setDefaultUnit(kony.flex.DP);
            flxTopShadow.add();
            var flxHamMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHamMenu",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "8%",
                "skin": "SKNFLXFFFROUND",
                "top": "6%",
                "width": "250px",
                "zIndex": 30
            }, {}, {});
            flxHamMenu.setDefaultUnit(kony.flex.DP);
            var flxHamCats = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHamCats",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamCats.setDefaultUnit(kony.flex.DP);
            var btnHamCat1 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat1",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_iac7a76a707248a5a6d9af86803739fa,
                "skin": "SKNBTNCAT",
                "text": "      TOP STORIES",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat2 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat2",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_c3959ed4474c4c3a9b11a6f15a3282dc,
                "skin": "SKNBTNCAT",
                "text": "      WORLD",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat10 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat10",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_i75f0102a20b4ff38f28b6d21e0268e7,
                "skin": "SKNBTNCAT",
                "text": "      LOCAL",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat3 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat3",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_f7270c42370e436a9cfffa1aa4a8b9c3,
                "skin": "SKNBTNCAT",
                "text": "      U.S",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat4 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat4",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_dde86348c87245fb902b27b8c1a4b83d,
                "skin": "SKNBTNCAT",
                "text": "      BUSINESS",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat5 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat5",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_b20268caa6cf45d3ae209970048c3415,
                "skin": "SKNBTNCAT",
                "text": "      TECHNOLOGY",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat6 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat6",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_c9e7f409dbeb49fa904fa44499e0dff8,
                "skin": "SKNBTNCAT",
                "text": "      ENTERTAINMENT",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat7 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat7",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_i201542757c54cd7a4075f86132281e7,
                "skin": "SKNBTNCAT",
                "text": "      SPORTS",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat8 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat8",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_d9a74fb08e48442b9b44cded8abf3b85,
                "skin": "SKNBTNCAT",
                "text": "      SCIENCE",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var btnHamCat9 = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnHamCat9",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_bd14de4142cb4dca8db48e193c1c4382,
                "skin": "SKNBTNCAT",
                "text": "      HEALTH",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            flxHamCats.add(btnHamCat1, btnHamCat2, btnHamCat10, btnHamCat3, btnHamCat4, btnHamCat5, btnHamCat6, btnHamCat7, btnHamCat8, btnHamCat9);
            var btnDocumentation = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnDocumentation",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_eb075f34a88b491ea98a257f8d543a88,
                "skin": "SKNBTNCAT",
                "text": "      Kony Documentation",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            var CopyflxMenuSeperator0fc469db527364c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "CopyflxMenuSeperator0fc469db527364c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "SKNFLXF2F1F1",
                "top": "3dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            CopyflxMenuSeperator0fc469db527364c.setDefaultUnit(kony.flex.DP);
            CopyflxMenuSeperator0fc469db527364c.add();
            var btnBaseCamp = new kony.ui.Button({
                "focusSkin": "SKNCATFOCUS",
                "height": "40dp",
                "id": "btnBaseCamp",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_iecaa4e2c0a642d2aa7a8cbe4dee224e,
                "skin": "SKNBTNCAT",
                "text": "      Kony Base Camp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopySKNBTNCAT0cf3c813e57074b"
            });
            flxHamMenu.add(flxHamCats, btnDocumentation, CopyflxMenuSeperator0fc469db527364c, btnBaseCamp);
            var flxMainWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "93%",
                "id": "flxMainWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXCHARCOAL",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainWrapper.setDefaultUnit(kony.flex.DP);
            var flxBdy = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxBdy",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "184dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBdy.setDefaultUnit(kony.flex.DP);
            var flxTopNewsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTopNewsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0px",
                "skin": "slFbox",
                "top": "5px",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxTopNewsWrapper.setDefaultUnit(kony.flex.DP);
            var flxTopNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "110px",
                "id": "flxTopNews",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "SKNFLXFFFROUND",
                "top": "0px",
                "width": "82%",
                "zIndex": 1
            }, {}, {
                "hoverSkin": "SKNNEWSHOVER"
            });
            flxTopNews.setDefaultUnit(kony.flex.DP);
            var flxTopStoryNewsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxTopStoryNewsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "skin": "slFbox",
                "top": "4%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxTopStoryNewsWrapper.setDefaultUnit(kony.flex.DP);
            var lblTopStoryTitle = new kony.ui.Label({
                "id": "lblTopStoryTitle",
                "isVisible": true,
                "left": "0.00%",
                "skin": "SKNTOPSTORYTITLE",
                "text": "This is Top Story Title which spans to next lines .....",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTopStoryNews = new kony.ui.Label({
                "id": "lblTopStoryNews",
                "isVisible": true,
                "left": "0%",
                "skin": "SKNLBLNEWSDETAILSTOP",
                "text": "This is the news ",
                "top": "2%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopStoryNewsWrapper.add(lblTopStoryTitle, lblTopStoryNews);
            var imgTopStory = new kony.ui.Image2({
                "centerY": "50%",
                "height": "80px",
                "id": "imgTopStory",
                "isVisible": true,
                "right": "15px",
                "skin": "slImage",
                "src": "banner_top_story.jpg",
                "width": "108px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopNews.add(flxTopStoryNewsWrapper, imgTopStory);
            var flxTopOthrNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "300px",
                "id": "flxTopOthrNews",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "140dp",
                "skin": "SKNFLXFFFROUND",
                "top": "0dp",
                "width": "270px",
                "zIndex": 1
            }, {}, {
                "hoverSkin": "SKNNEWSHOVER"
            });
            flxTopOthrNews.setDefaultUnit(kony.flex.DP);
            var imgTopOthNews = new kony.ui.Image2({
                "centerX": "50%",
                "height": "80px",
                "id": "imgTopOthNews",
                "isVisible": true,
                "left": "46dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "7px",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTopOthNT = new kony.ui.Label({
                "height": "70px",
                "id": "lblTopOthNT",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNTOPSTORYTITLE",
                "text": "Label",
                "top": "4dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTopOthND = new kony.ui.Label({
                "height": "100px",
                "id": "lblTopOthND",
                "isVisible": true,
                "left": "4%",
                "skin": "SKNLBLNEWSDETAILSTOP",
                "text": "Label",
                "top": "4dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopOthrNews.add(imgTopOthNews, lblTopOthNT, lblTopOthND);
            flxTopNewsWrapper.add(flxTopNews, flxTopOthrNews);
            var flxWeatherNewsWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "150dp",
                "horizontalScrollIndicator": false,
                "id": "flxWeatherNewsWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "5px",
                "verticalScrollIndicator": false,
                "width": "82%",
                "zIndex": 1
            }, {}, {});
            flxWeatherNewsWrapper.setDefaultUnit(kony.flex.DP);
            var flxWethDay1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWethDay1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "FLXWETDAY1",
                "width": "250px",
                "zIndex": 1
            }, {}, {});
            flxWethDay1.setDefaultUnit(kony.flex.DP);
            var lblDay1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay1",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp1",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_small_partly_cloudy.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp1 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp1",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWethDay1.add(lblDay1, imgTemp1, lblTemp1);
            var flxWeathDay2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY2",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay2.setDefaultUnit(kony.flex.DP);
            var lblDay2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay2",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp2",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_thunderstorms.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp2 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp2",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay2.add(lblDay2, imgTemp2, lblTemp2);
            var flxWeathDay3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY3",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay3.setDefaultUnit(kony.flex.DP);
            var lblDay3 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay3",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp3 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp3",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp3 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp3",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_cloudy.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay3.add(lblDay3, lblTemp3, imgTemp3);
            var flxWeathDay4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY4",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay4.setDefaultUnit(kony.flex.DP);
            var lblDay4 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay4",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp4 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp4",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp4 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp4",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_mist.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay4.add(lblDay4, lblTemp4, imgTemp4);
            var flxWeathDay5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY5",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay5.setDefaultUnit(kony.flex.DP);
            var lblDay5 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay5",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp5 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp5",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp5 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp5",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_snow_heavy.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay5.add(lblDay5, lblTemp5, imgTemp5);
            var flxWeathDay6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY6",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay6.setDefaultUnit(kony.flex.DP);
            var lblDay6 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay6",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp6 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp6",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp6 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp6",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_sunny.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay6.add(lblDay6, lblTemp6, imgTemp6);
            var flxWeathDay7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxWeathDay7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2px",
                "skin": "FLXWETDAY7",
                "width": "140px",
                "zIndex": 1
            }, {}, {});
            flxWeathDay7.setDefaultUnit(kony.flex.DP);
            var lblDay7 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDay7",
                "isVisible": true,
                "skin": "SKNWHITESMALL",
                "text": "Mon, 22 JAN",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTemp7 = new kony.ui.Label({
                "bottom": "4%",
                "centerX": "50%",
                "id": "lblTemp7",
                "isVisible": true,
                "skin": "SKNLBLWHITE",
                "text": "23°",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemp7 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgTemp7",
                "isVisible": true,
                "left": "69dp",
                "skin": "slImage",
                "src": "weather_large_rain_heavy.png",
                "top": "51dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWeathDay7.add(lblDay7, lblTemp7, imgTemp7);
            flxWeatherNewsWrapper.add(flxWethDay1, flxWeathDay2, flxWeathDay3, flxWeathDay4, flxWeathDay5, flxWeathDay6, flxWeathDay7);
            var flxOtherNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxOtherNews",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "0px",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxOtherNews.setDefaultUnit(kony.flex.DP);
            flxOtherNews.add();
            var flxBottomShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5px",
                "id": "flxBottomShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXBOTTOMSHADOW",
                "top": "5px",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBottomShadow.setDefaultUnit(kony.flex.DP);
            flxBottomShadow.add();
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXWHITE",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var flxFooterContentWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxFooterContentWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooterContentWrapper.setDefaultUnit(kony.flex.DP);
            var rtCopyRights = new kony.ui.RichText({
                "centerX": "50%",
                "height": "45dp",
                "id": "rtCopyRights",
                "isVisible": true,
                "skin": "CopyslRichText0d62142a7333b45",
                "text": "Copyrights 2018 @ <b style='color:rgba(0,0,0,0.8)'>Kony.com</b>\n All rights reserved.",
                "top": "15px",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooterContentWrapper.add(rtCopyRights);
            flxFooter.add(flxFooterContentWrapper);
            flxBdy.add(flxTopNewsWrapper, flxWeatherNewsWrapper, flxOtherNews, flxBottomShadow, flxFooter);
            flxMainWrapper.add(flxBdy);
            var flxKnowledgeFramework = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxKnowledgeFramework",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0j87d25ba570d41",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxKnowledgeFramework.setDefaultUnit(kony.flex.DP);
            var KnowledgeFrameworkDW = new com.konycmpt.KnowledgeFrameworkDW({
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFrameworkDW",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "minWidth": "400px",
                "skin": "SKNFLXKFDWBG",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            var flxCloseKF = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxCloseKF",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c7b85a31f54a49e996a780d3119c572c,
                "right": "5%",
                "skin": "slFbox",
                "top": "5%",
                "width": "5%",
                "zIndex": 1
            }, {}, {});
            flxCloseKF.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgClose",
                "isVisible": true,
                "left": "31dp",
                "skin": "slImage",
                "src": "closewhite.png",
                "top": "29dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseKF.add(imgClose);
            flxKnowledgeFramework.add(KnowledgeFrameworkDW, flxCloseKF);
            var flxFloating = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "80px",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFloating",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_g3b61cb7a6b348639e1660888549db6e,
                "right": "30px",
                "skin": "CopyslFbox0b69dadc4c83146",
                "width": "80px",
                "zIndex": 30
            }, {}, {});
            flxFloating.setDefaultUnit(kony.flex.DP);
            var Image0ed6dbfa06efa47 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "Image0ed6dbfa06efa47",
                "isVisible": true,
                "skin": "slImage",
                "src": "floatingbtn.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFloating.add(Image0ed6dbfa06efa47);
            this.add(flxHeader, flxTopShadow, flxHamMenu, flxMainWrapper, flxKnowledgeFramework, flxFloating);
        };
        return [{
            "addWidgets": addWidgetsfrmNewsAndWeather,
            "enabledForIdleTimeout": false,
            "id": "frmNewsAndWeather",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f1e952e551f7495e80012684b648f3e9,
            "preShow": controller.AS_Form_dd992d2e8c6d4c24b43fcaf1aa714701,
            "skin": "slForm"
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