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
        kony.mvc.registry.add("flxFeatureRowTemp", "flxFeatureRowTemp", "flxFeatureRowTempController");
        kony.mvc.registry.add("frmNewsAndWeather", "frmNewsAndWeather", "frmNewsAndWeatherController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {
        return applicationController.AS_AppEvents_bd6a68c68fc846a38eeae091a302680a();
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmNewsAndWeather").navigate();
    }
});