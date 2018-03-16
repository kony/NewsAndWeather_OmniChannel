//startup.js file
var appConfig = {
    appId: "NewsAndWeather",
    appName: "NewsAndWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.56.1",
    serverPort: "80",
    secureServerPort: "443",
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
            "ZLocalNewsNWeather": "https://mfreddy.konycloud.com/services/ZLocalNewsNWeather",
            "News": "https://mfreddy.konycloud.com/services/News",
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
            "ZLocalNewsNWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/ZLocalNewsNWeather"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/News"
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
    secureurl: "https://mfreddy.konycloud.com/NewsAndWeather/MWServlet",
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
        baseUrl: "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            postappinit: applicationController.AS_AppEvents_bd6a68c68fc846a38eeae091a302680a,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("frmNewsAndWeather");
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
								