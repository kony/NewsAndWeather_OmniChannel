define(function() {
    return function(controller) {
        var KnowledgeFrameworkTablet = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "KnowledgeFrameworkTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "SKNFLXKFDWBG",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        KnowledgeFrameworkTablet.setDefaultUnit(kony.flex.DP);
        var flxDeveloperCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "70%",
            "id": "flxDeveloperCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "minWidth": "400px",
            "skin": "CopysknFullFlex",
            "top": "0%",
            "width": "70%",
            "zIndex": 50
        }, {}, {});
        flxDeveloperCode.setDefaultUnit(kony.flex.DP);
        var flxHeadingBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxHeadingBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxHeadingBar.setDefaultUnit(kony.flex.DP);
        var flxHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox3",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "CopysknLabelHeading",
            "text": "Integration & Orchestration services",
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
        flxHeading.add(lblHeading);
        var flexCloseClick = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "CopyslFbox0c6644658c65b4e",
            "height": "48dp",
            "id": "flexCloseClick",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_f9accb5dc3c543f99f2646226d613a45,
            "right": "0%",
            "skin": "CopyslFbox0i77fb336562f4e",
            "top": "12dp",
            "width": "40dp",
            "zIndex": 1
        }, {}, {});
        flexCloseClick.setDefaultUnit(kony.flex.DP);
        var btnClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "btnClose",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_hd8397261cea44a49cc757f7d56d1eda,
            "skin": "slImage",
            "src": "closewhite.png",
            "top": "21dp",
            "width": "13dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexCloseClick.add(btnClose);
        var flexClickBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "CopyslFbox0c6644658c65b4e",
            "height": "40dp",
            "id": "flexClickBack",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_cd6fe403c954465194dabf9189bb8597,
            "skin": "CopyslFbox0i77fb336562f4e",
            "top": "0%",
            "width": "40dp",
            "zIndex": 1
        }, {}, {});
        flexClickBack.setDefaultUnit(kony.flex.DP);
        var btnBack = new kony.ui.Image2({
            "centerX": "50.00%",
            "centerY": "50.28%",
            "height": "20dp",
            "id": "btnBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "back.png",
            "top": "21dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexClickBack.add(btnBack);
        flxHeadingBar.add(flxHeading, flexCloseClick, flexClickBack);
        var flxSegData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxSegData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0e0297f06a37947",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSegData.setDefaultUnit(kony.flex.DP);
        var sgmtApi = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "100%",
            "id": "sgmtApi",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_j8b7147596804cb3bf1f47a8a5b280dd,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0e4139ab9e50143",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxFeatureRowTemp0e026b4a919e14e": "CopyflxFeatureRowTemp0e026b4a919e14e",
                "lblNameOfAPI": "lblNameOfAPI"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        });
        var flxFullScreen = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100.18%",
            "horizontalScrollIndicator": true,
            "id": "flxFullScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopysknFullKnowledge",
            "top": "0dp",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFullScreen.setDefaultUnit(kony.flex.DP);
        var flexAcc1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_hc2e58a0ade940d1af10a96e76d35621,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc1.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc1 = new kony.ui.Label({
            "id": "lblTitleAcc1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "sknlblAccNormal",
            "text": "What's it ?",
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnAccordian1 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian1",
            "isVisible": true,
            "left": "90%",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAcc1.add(lblTitleAcc1, btnAccordian1);
        var flexScrollDesc1 = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flexScrollDesc1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexScrollDesc1.setDefaultUnit(kony.flex.DP);
        var rchDesc1 = new kony.ui.RichText({
            "id": "rchDesc1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslRichText0f4b9963e1dae4f",
            "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flexImageVideo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "120%",
            "id": "flexImageVideo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "top": "5%",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flexImageVideo.setDefaultUnit(kony.flex.DP);
        var imgVideoView1 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "100%",
            "id": "imgVideoView1",
            "isVisible": true,
            "skin": "slImage",
            "src": "vizmf.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnPlay1 = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20%",
            "id": "btnPlay1",
            "isVisible": true,
            "onClick": controller.AS_Button_a644c13a55464052b630dbb560db1766,
            "skin": "CopyslButtonGlossBlue0adf7d460ef824c",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flexImageVideo.add(imgVideoView1, btnPlay1);
        var CopyLabel0g3dc9a1b8ee644 = new kony.ui.Label({
            "height": "12%",
            "id": "CopyLabel0g3dc9a1b8ee644",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "top": "0%",
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
        flexScrollDesc1.add(rchDesc1, flexImageVideo, CopyLabel0g3dc9a1b8ee644);
        var flexAcc2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_ef73ff146b1045f0b7c86f9310888b82,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc2.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc2 = new kony.ui.Label({
            "id": "lblTitleAcc2",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblAccNormal",
            "text": "How to use ?",
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnAccordian2 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian2",
            "isVisible": true,
            "left": "90%",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip1 = new kony.ui.Label({
            "height": "1dp",
            "id": "lblStrip1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexAcc2.add(lblTitleAcc2, btnAccordian2, lblStrip1);
        var flexScrollDesc2 = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flexScrollDesc2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexScrollDesc2.setDefaultUnit(kony.flex.DP);
        var rchDesc2 = new kony.ui.RichText({
            "id": "rchDesc2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslRichText0f4b9963e1dae4f",
            "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flexImageVideo2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "120%",
            "id": "flexImageVideo2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "28dp",
            "skin": "slFbox",
            "top": "5%",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flexImageVideo2.setDefaultUnit(kony.flex.DP);
        var imageVideo2 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "100%",
            "id": "imageVideo2",
            "isVisible": true,
            "skin": "slImage",
            "src": "vizmf.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnPlay2 = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "slButtonGlossRed",
            "height": "36.36%",
            "id": "btnPlay2",
            "isVisible": true,
            "left": "120dp",
            "onClick": controller.AS_Button_bdf2e3dcfd524e0081242e2255aeb7ac,
            "skin": "CopyslButtonGlossBlue0adf7d460ef824c",
            "top": "69dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flexImageVideo2.add(imageVideo2, btnPlay2);
        var Label0ffb83cb7a75b48 = new kony.ui.Label({
            "height": "12%",
            "id": "Label0ffb83cb7a75b48",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "top": "0%",
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
        flexScrollDesc2.add(rchDesc2, flexImageVideo2, Label0ffb83cb7a75b48);
        var flexAcc3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_c144b3432a23424d80f02ade2dab5ef5,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc3.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc3 = new kony.ui.Label({
            "id": "lblTitleAcc3",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblAccNormal",
            "text": "Documentation Link",
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblStrip3 = new kony.ui.Label({
            "height": "1dp",
            "id": "lblStrip3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
            "top": "98%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnAccordian3 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian3",
            "isVisible": true,
            "left": "90%",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip4 = new kony.ui.Label({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblStrip4",
            "isVisible": true,
            "left": "0%",
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexAcc3.add(lblTitleAcc3, lblStrip3, btnAccordian3, lblStrip4);
        var flexScrollDesc3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexScrollDesc3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexScrollDesc3.setDefaultUnit(kony.flex.DP);
        var rchDesc3 = new kony.ui.RichText({
            "id": "rchDesc3",
            "isVisible": true,
            "left": "0%",
            "linkSkin": "CopyslRichText0d02285182d7f42",
            "skin": "CopyslRichText0f4b9963e1dae4f",
            "text": "RichText",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexScrollDesc3.add(rchDesc3);
        flxFullScreen.add(flexAcc1, flexScrollDesc1, flexAcc2, flexScrollDesc2, flexAcc3, flexScrollDesc3);
        flxSegData.add(sgmtApi, flxFullScreen);
        flxDeveloperCode.add(flxHeadingBar, flxSegData);
        KnowledgeFrameworkTablet.add(flxDeveloperCode);
        return KnowledgeFrameworkTablet;
    }
})