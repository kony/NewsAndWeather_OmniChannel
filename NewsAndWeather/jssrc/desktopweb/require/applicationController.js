define({
    AS_AppEvents_bd6a68c68fc846a38eeae091a302680a: function AS_AppEvents_bd6a68c68fc846a38eeae091a302680a(eventobject) {
        var self = this;
        desktopwebPostAppInit();
    },
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
        kony.mvc.registry.add("uwGen.NewsBanner", "NewsBanner", "NewsBannerController");
        kony.application.registerMaster({
            "namespace": "uwGen",
            "classname": "NewsBanner",
            "name": "uwGen.NewsBanner"
        });
        kony.mvc.registry.add("uwGen.NewsCard", "NewsCard", "NewsCardController");
        kony.application.registerMaster({
            "namespace": "uwGen",
            "classname": "NewsCard",
            "name": "uwGen.NewsCard"
        });
        kony.mvc.registry.add("uwGen.WeatherLargeCard", "WeatherLargeCard", "WeatherLargeCardController");
        kony.application.registerMaster({
            "namespace": "uwGen",
            "classname": "WeatherLargeCard",
            "name": "uwGen.WeatherLargeCard"
        });
        kony.mvc.registry.add("uwGen.weatherSmallCard", "weatherSmallCard", "weatherSmallCardController");
        kony.application.registerMaster({
            "namespace": "uwGen",
            "classname": "weatherSmallCard",
            "name": "uwGen.weatherSmallCard"
        });
        kony.mvc.registry.add("uwGen1.NewsBanner", "NewsBanner", "NewsBannerController");
        kony.application.registerMaster({
            "namespace": "uwGen1",
            "classname": "NewsBanner",
            "name": "uwGen1.NewsBanner"
        });
        kony.mvc.registry.add("CopyflxFeatureRowTemp0e026b4a919e14e", "CopyflxFeatureRowTemp0e026b4a919e14e", "CopyflxFeatureRowTemp0e026b4a919e14eController");
        kony.mvc.registry.add("CopyflxFullSplashScreen0ja52df18a3344e", "CopyflxFullSplashScreen0ja52df18a3344e", "CopyflxFullSplashScreen0ja52df18a3344eController");
        kony.mvc.registry.add("CopyflxRow", "CopyflxRow", "CopyflxRowController");
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("flexMainNews", "flexMainNews", "flexMainNewsController");
        kony.mvc.registry.add("flexNewsSelectionMain", "flexNewsSelectionMain", "flexNewsSelectionMainController");
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("flxNewsCatWraper", "flxNewsCatWraper", "flxNewsCatWraperController");
        kony.mvc.registry.add("frmNewsAndWeather444c3380", "frmNewsAndWeather444c3380", "frmNewsAndWeather444c3380Controller");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_bd6a68c68fc846a38eeae091a302680a(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmNewsAndWeather444c3380").navigate();
    }
});