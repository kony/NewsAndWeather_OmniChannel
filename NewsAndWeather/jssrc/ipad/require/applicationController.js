define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework1", "KnowledgeFramework1", "KnowledgeFramework1Controller");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework1",
            "name": "com.konycmpt.KnowledgeFramework1"
        });
        kony.mvc.registry.add("com.konycmpt.KnowledgeFrameworkDW", "KnowledgeFrameworkDW", "KnowledgeFrameworkDWController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFrameworkDW",
            "name": "com.konycmpt.KnowledgeFrameworkDW"
        });
        kony.mvc.registry.add("com.konycmpt.KnowledgeFrameworkTablet", "KnowledgeFrameworkTablet", "KnowledgeFrameworkTabletController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFrameworkTablet",
            "name": "com.konycmpt.KnowledgeFrameworkTablet"
        });
        kony.mvc.registry.add("com.konycmpt.SplashScreen", "SplashScreen", "SplashScreenController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "SplashScreen",
            "name": "com.konycmpt.SplashScreen"
        });
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("CopyflxFullSplashScreen0ja52df18a3344e", "CopyflxFullSplashScreen0ja52df18a3344e", "CopyflxFullSplashScreen0ja52df18a3344eController");
        kony.mvc.registry.add("CopyflxFeatureRowTemp0e026b4a919e14e", "CopyflxFeatureRowTemp0e026b4a919e14e", "CopyflxFeatureRowTemp0e026b4a919e14eController");
        kony.mvc.registry.add("flxNewsCatWraper", "flxNewsCatWraper", "flxNewsCatWraperController");
        kony.mvc.registry.add("frmNewsAndWeather", "frmNewsAndWeather", "frmNewsAndWeatherController");
        kony.mvc.registry.add("frmSplash", "frmSplash", "frmSplashController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmSplash").navigate();
    }
});