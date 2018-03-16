define(function() {
    return function(controller) {
        var slidingmenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "slidingmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df,
            "skin": "CopyCopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        slidingmenu.setDefaultUnit(kony.flex.DP);
        var flxMainSlidingMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSlidingMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-20.00%",
            "onClick": controller.AS_FlexContainer_c051a9d2c48e4ca28722835199deec66,
            "skin": "sknMainSliding",
            "top": "-5dp",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxMainSlidingMenu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "14.63%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20%",
            "skin": "CopyCopyCopyslFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxImage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "onClick": controller.AS_onProfileClick_h0a282ca17324c44bb1e95890cf93b09,
            "skin": "CopyCopyCopyslFbox",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.PERCENTAGE);
        var imgHeader = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyslImage3",
            "src": "profile.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgHeader);
        var lblHeaderText1 = new kony.ui.Label({
            "id": "lblHeaderText1",
            "isVisible": true,
            "left": "14%",
            "skin": "CopyCopysknLblNunitof",
            "text": "API Discovery",
            "top": "30%",
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
        var btnClick = new kony.ui.Button({
            "focusSkin": "CopybtnTranslucent",
            "height": "40%",
            "id": "btnClick",
            "isVisible": false,
            "left": "70%",
            "onClick": controller.AS_onApplyButtonClick_h49639a287584900aac84b73b254d6f4,
            "skin": "CopysknBtnTransperant",
            "text": "Click",
            "top": "35%",
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
        flxHeader.add(flxImage, lblHeaderText1, btnClick);
        var flxMenuControl = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "31.68%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20.00%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "22%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenuControl.setDefaultUnit(kony.flex.PERCENTAGE);
        flxMenuControl.add();
        var flxBotom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1.88%",
            "clipBounds": true,
            "height": "14%",
            "id": "flxBotom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20%",
            "onClick": controller.AS_onClickFooter_e62614a9a84e462fad4cc8bbe1335bdf,
            "skin": "CopyCopyCopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBotom.setDefaultUnit(kony.flex.DP);
        var imgFooter = new kony.ui.Image2({
            "height": "0dp",
            "id": "imgFooter",
            "isVisible": false,
            "left": "26dp",
            "skin": "CopyslImage1",
            "src": "imagedrag.png",
            "top": "9dp",
            "width": "0dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var textFooter = new kony.ui.Label({
            "id": "textFooter",
            "isVisible": false,
            "left": "5dp",
            "skin": "CopyslLabel",
            "top": "12dp",
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
        var btnShare = new kony.ui.Button({
            "centerY": "52%",
            "focusSkin": "CopyslButtonGlossRed0acca9baaaf734e",
            "height": "65dp",
            "id": "btnShare",
            "isVisible": true,
            "left": "7.50%",
            "onClick": controller.AS_onClickFooterShare_h1bd9eb5eb4e40eda0dcd77a624cea62,
            "skin": "CopyslButtonGlossBlue0i32866fdbcea42",
            "width": "65dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        var btnHelp = new kony.ui.Button({
            "centerY": "52%",
            "focusSkin": "CopyslButtonGlossRed0a86eec7dc0c147",
            "height": "65dp",
            "id": "btnHelp",
            "isVisible": true,
            "left": "6%",
            "onClick": controller.AS_onClickFooterHelp_had295e6815b495e81887fcd29b7c57e,
            "skin": "CopyslButtonGlossBlue0b290248f3ee540",
            "width": "65dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flxBotom.add(imgFooter, textFooter, btnShare, btnHelp);
        var flxHeader2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5.96%",
            "id": "flxHeader2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "skin": "CopyslFbox4",
            "top": "51%",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxHeader2.setDefaultUnit(kony.flex.DP);
        var lblHeaderOtherText1 = new kony.ui.Label({
            "id": "lblHeaderOtherText1",
            "isVisible": true,
            "left": "15%",
            "skin": "CopyCopysknLblNunitof0cfb8b4dfd21348",
            "text": "OTHER APPS",
            "top": "15%",
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
        var flxLine2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "11%",
            "skin": "sknMenuLine",
            "top": "88%",
            "width": "63%",
            "zIndex": 1
        }, {}, {});
        flxLine2.setDefaultUnit(kony.flex.DP);
        flxLine2.add();
        flxHeader2.add(lblHeaderOtherText1, flxLine2);
        var flxMenuControl2 = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "23%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20.04%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopyslFSbox",
            "top": "57%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenuControl2.setDefaultUnit(kony.flex.PERCENTAGE);
        flxMenuControl2.add();
        flxMainSlidingMenu.add(flxHeader, flxMenuControl, flxBotom, flxHeader2, flxMenuControl2);
        var flxHamParent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHamParent",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13,
            "skin": "CopyCopyCopyslFbox",
            "top": "0%",
            "width": "50dp",
            "zIndex": 4
        }, {}, {});
        flxHamParent.setDefaultUnit(kony.flex.DP);
        var imgHamIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIcon",
            "isVisible": true,
            "skin": "CopyCopyslImage3",
            "src": "menu_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHamIconClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIconClose",
            "isVisible": false,
            "src": "close_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHamParent.add(imgHamIcon, imgHamIconClose);
        var flxCover = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499,
            "skin": "CopyCopyflxCoverSkin",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCover.setDefaultUnit(kony.flex.DP);
        var flxsknroundedCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsknroundedCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopySlidingMenuRoundedCornerImage",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxsknroundedCorner.setDefaultUnit(kony.flex.DP);
        flxsknroundedCorner.add();
        var flxskncircle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxskncircle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "CopyCopySlidingMenuCircleImage",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxskncircle.setDefaultUnit(kony.flex.DP);
        flxskncircle.add();
        var flxfocus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfocus",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "skin": "CopyCopyflxfocusSkin",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxfocus.setDefaultUnit(kony.flex.DP);
        flxfocus.add();
        var lbl34px = new kony.ui.Label({
            "id": "lbl34px",
            "isVisible": false,
            "left": "66dp",
            "skin": "CopyCopysknlblnunitoLightf",
            "top": "217dp",
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
        var lblnunito = new kony.ui.Label({
            "id": "lblnunito",
            "isVisible": false,
            "left": "76dp",
            "skin": "CopyCopysknlblnunito",
            "top": "227dp",
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
        var imgChevron = new kony.ui.Image2({
            "height": "1dp",
            "id": "imgChevron",
            "isVisible": false,
            "left": "73dp",
            "skin": "CopyCopyslImage3",
            "src": "chevron_right.png",
            "top": "244dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCover.add(flxsknroundedCorner, flxskncircle, flxfocus, lbl34px, lblnunito, imgChevron);
        var flexSecret = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0%",
            "id": "flexSecret",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "42dp",
            "skin": "CopysknFlxED",
            "top": "114dp",
            "width": "0%",
            "zIndex": 4
        }, {}, {});
        flexSecret.setDefaultUnit(kony.flex.DP);
        flexSecret.add();
        var lblSecret1 = new kony.ui.Label({
            "id": "lblSecret1",
            "isVisible": false,
            "left": "81dp",
            "skin": "CopysknLblHeaderWhiteffffff",
            "text": "Label",
            "top": "55dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblSecret2 = new kony.ui.Label({
            "id": "lblSecret2",
            "isVisible": false,
            "left": "76dp",
            "skin": "CopysknLblffb",
            "text": "Label",
            "top": "106dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnSecret = new kony.ui.Button({
            "focusSkin": "CopyCopyslButtonGlossRed",
            "height": "50dp",
            "id": "btnSecret",
            "isVisible": false,
            "left": "57dp",
            "skin": "CopyCopysknBtn",
            "text": "Button",
            "top": "113dp",
            "width": "260dp",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        slidingmenu.add(flxMainSlidingMenu, flxHamParent, flxCover, flexSecret, lblSecret1, lblSecret2, btnSecret);
        return slidingmenu;
    }
})