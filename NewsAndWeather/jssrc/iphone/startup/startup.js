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
    isturlbase: "https://mfreddy.konycloud.com/services",
    isMFApp: true,
    appKey: "80e71eb248286ed79221eeeed7bc17bc",
    appSecret: "de64004f5188e1cbae8df2eb4d2633db",
    serviceUrl: "https://100006023.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100006023.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "ZWeatherForeCast": "https://mfreddy.konycloud.com/services/ZWeatherForeCast",
            "ZNewsForCategory": "https://mfreddy.konycloud.com/services/ZNewsForCategory",
            "News": "https://mfreddy.konycloud.com/services/News",
            "ZLocalNewsNWeather": "https://mfreddy.konycloud.com/services/ZLocalNewsNWeather",
            "ZCityWeather": "https://mfreddy.konycloud.com/services/ZCityWeather",
            "ZLocalNews": "https://mfreddy.konycloud.com/services/ZLocalNews"
        },
        "appId": "f8837a48-862d-4752-95a6-35da5035ea4d",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "NewsNWeatherDemoSample",
        "reportingsvc": {
            "session": "https://mfreddy.konycloud.com/services/IST",
            "custom": "https://mfreddy.konycloud.com/services/CMS"
        },
        "baseId": "a5e8ac4b-8e0f-4a75-8568-884d4a74ee1f",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100006023.auth.konycloud.com"
        }],
        "services_meta": {
            "ZWeatherForeCast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZWeatherForeCast"
            },
            "ZNewsForCategory": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZNewsForCategory"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/News"
            },
            "ZLocalNewsNWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZLocalNewsNWeather"
            },
            "ZCityWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZCityWeather"
            },
            "ZLocalNews": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZLocalNews"
            }
        },
        "Webapp": {
            "url": "https://mfreddy.konycloud.com/NewsAndWeather"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://mfreddy.konycloud.com/NewsAndWeather/MWServlet",
    secureurl: "https://mfreddy.konycloud.com/NewsAndWeather/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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
kony.i18n.setDefaultLocaleAsync("null", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;