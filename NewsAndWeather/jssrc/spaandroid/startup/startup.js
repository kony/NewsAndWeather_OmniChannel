//startup.js file
var appConfig = {
    appId: "NewsAndWeather",
    appName: "NewsAndWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.56.1",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "https://mfcdemo2.konycloud.com/services",
    isMFApp: true,
    appKey: "a8fc1df06eca545636ff34b077b5e5ec",
    appSecret: "d8aa9eb30b73efb4428f7538dccdbdb6",
    serviceUrl: "https://100000117.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100000117.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "ZWeatherForeCast": "https://mfcdemo2.konycloud.com/services/ZWeatherForeCast",
            "ZNewsForCategory": "https://mfcdemo2.konycloud.com/services/ZNewsForCategory",
            "News": "https://mfcdemo2.konycloud.com/services/News",
            "ZLocalNewsNWeather": "https://mfcdemo2.konycloud.com/services/ZLocalNewsNWeather",
            "ZCityWeather": "https://mfcdemo2.konycloud.com/services/ZCityWeather",
            "ZLocalNews": "https://mfcdemo2.konycloud.com/services/ZLocalNews"
        },
        "appId": "cc630738-ea97-46dd-ad72-e1ce97b34843",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "NewsNWeatherDemo",
        "reportingsvc": {
            "session": "https://mfcdemo2.konycloud.com/services/IST",
            "custom": "https://mfcdemo2.konycloud.com/services/CMS"
        },
        "baseId": "ec83b839-8192-4f12-8906-d09b54e16337",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100000117.auth.konycloud.com"
        }],
        "services_meta": {
            "ZWeatherForeCast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/ZWeatherForeCast"
            },
            "ZNewsForCategory": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/ZNewsForCategory"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/News"
            },
            "ZLocalNewsNWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/ZLocalNewsNWeather"
            },
            "ZCityWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/ZCityWeather"
            },
            "ZLocalNews": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfcdemo2.konycloud.com/services/ZLocalNews"
            }
        },
        "Webapp": {
            "url": "https://mfcdemo2.konycloud.com/NewsAndWeather"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://mfcdemo2.konycloud.com/NewsAndWeather/MWServlet",
    secureurl: "https://mfcdemo2.konycloud.com/NewsAndWeather/MWServlet",
    middlewareContext: "NewsAndWeather"
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
        isMVC: true,
        retainSpaceOnHide: true,
        APILevel: 8000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
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
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default", "Theme0ha3194ff0cff4f"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								