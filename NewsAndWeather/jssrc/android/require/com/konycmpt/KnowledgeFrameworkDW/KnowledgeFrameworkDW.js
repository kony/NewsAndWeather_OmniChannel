define(function() {
    return function(controller) {
        var KnowledgeFrameworkDW = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "KnowledgeFrameworkDW",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "SKNFLXKFDWBG",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        KnowledgeFrameworkDW.setDefaultUnit(kony.flex.DP);
        var flxDeveloperCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxDeveloperCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "minWidth": "400px",
            "skin": "CopysknFullFlex",
            "top": "0%",
            "width": "50%",
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "onClick": controller.AS_FlexContainer_j349e728f1ec4db68b5d155839e02d9a,
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
            "onTouchEnd": controller.AS_Image_d320d00c85004d1bb1e06a8e56d810f0,
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
            "onClick": controller.AS_FlexContainer_bcebdc170fde410b8ac13ec7ca37a509,
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
            "onRowClick": controller.AS_Segment_ce4cc9572abe4dfc97fe8c0a08a08411,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0e4139ab9e50143",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFeatureRowTemp": "flxFeatureRowTemp",
                "lblNameOfAPI": "lblNameOfAPI"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
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
            "onClick": controller.AS_FlexContainer_d40d33aab67d4319bfcbe00231aff726,
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
        }, {});
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
            "onClick": controller.AS_Button_ifc70f744faa4573b02b453683ce8fcf,
            "skin": "CopyslButtonGlossBlue0adf7d460ef824c",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexImageVideo.add(imgVideoView1, btnPlay1);
        var CopyLabel0g3dc9a1b8ee644 = new kony.ui.Label({
            "height": "12%",
            "id": "CopyLabel0g3dc9a1b8ee644",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "onClick": controller.AS_FlexContainer_e9ec08ecba9e4a38a34e1f84788fad57,
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
        }, {});
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
            "onClick": controller.AS_Button_c5b644cc89214b9b91e0ec4ae2c90260,
            "skin": "CopyslButtonGlossBlue0adf7d460ef824c",
            "top": "69dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexImageVideo2.add(imageVideo2, btnPlay2);
        var Label0ffb83cb7a75b48 = new kony.ui.Label({
            "height": "12%",
            "id": "Label0ffb83cb7a75b48",
            "isVisible": true,
            "left": "0%",
            "skin": "slLabel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "onClick": controller.AS_FlexContainer_h3222d9aeccd4c388a760c960bc88189,
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6px",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStrip3 = new kony.ui.Label({
            "height": "1dp",
            "id": "lblStrip3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "98%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
        }, {});
        flexScrollDesc3.add(rchDesc3);
        flxFullScreen.add(flexAcc1, flexScrollDesc1, flexAcc2, flexScrollDesc2, flexAcc3, flexScrollDesc3);
        flxSegData.add(sgmtApi, flxFullScreen);
        flxDeveloperCode.add(flxHeadingBar, flxSegData);
        KnowledgeFrameworkDW.add(flxDeveloperCode);
        return KnowledgeFrameworkDW;
    }
})