//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "NewsAndWeather",
    appName: "NewsAndWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.56.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "NewsAndWeather",
    isturlbase: "http://kh2183.kitspl.com:8117/services",
    isMFApp: true,
    appKey: "3609eab0d55954c5655faff4f025e505",
    appSecret: "5f3e4260c3734274bffc7dd79c0b5558",
    serviceUrl: "http://kh2183.kitspl.com:8117/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://kh2183.kitspl.com:8117/authService/100000002/appconfig",
        "identity_meta": {},
        "integsvc": {
            "ZWeatherForeCast": "http://kh2183.kitspl.com:8117/services/ZWeatherForeCast",
            "ZNewsForCategory": "http://kh2183.kitspl.com:8117/services/ZNewsForCategory",
            "News": "http://kh2183.kitspl.com:8117/services/News",
            "ZLocalNewsNWeather": "http://kh2183.kitspl.com:8117/services/ZLocalNewsNWeather",
            "ZCityWeather": "http://kh2183.kitspl.com:8117/services/ZCityWeather",
            "ZLocalNews": "http://kh2183.kitspl.com:8117/services/ZLocalNews"
        },
        "appId": "9348776d-3a79-4031-ba04-4f6e1718a9ab",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "NewsNWeatherDemo",
        "reportingsvc": {
            "session": "http://kh2183.kitspl.com:8117/services/IST",
            "custom": "http://kh2183.kitspl.com:8117/services/CMS"
        },
        "baseId": "f16ff2ad-723e-4289-965f-a013f236ecb3",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "http://kh2183.kitspl.com:8117/authService/100000002"
        }],
        "services_meta": {
            "ZWeatherForeCast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/ZWeatherForeCast"
            },
            "ZNewsForCategory": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/ZNewsForCategory"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/News"
            },
            "ZLocalNewsNWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/ZLocalNewsNWeather"
            },
            "ZCityWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/ZCityWeather"
            },
            "ZLocalNews": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://kh2183.kitspl.com:8117/services/ZLocalNews"
            }
        },
        "Webapp": {
            "url": "http://kh2183.kitspl.com:8117/NewsAndWeather"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "http://kh2183.kitspl.com:8117/admin/NewsAndWeather/MWServlet",
    secureurl: "http://kh2183.kitspl.com:8117/admin/NewsAndWeather/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: applicationController.AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmSplash");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;