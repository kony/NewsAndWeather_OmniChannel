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
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        KnowledgeFrameworkDW.setDefaultUnit(kony.flex.DP);
        var flxKFDevCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxKFDevCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKFDevCode.setDefaultUnit(kony.flex.DP);
        flxKFDevCode.add();
        KnowledgeFrameworkDW.add(flxKFDevCode);
        return KnowledgeFrameworkDW;
    }
})