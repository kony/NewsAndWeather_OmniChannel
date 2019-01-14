isHelpClicked = false;
var NWContants = {
    SDESCLENGTH : 100,
    TITLELENGTH : 50,
    CATEGORIES: {
        "BUSINESS": "Business",
        "ENTERTAINMENT": "Entertainment",
        "GENERAL": "General",
        "HEALTH": "Health",
        "SCIENCE": "science",
        "SPORTS": "Sports",
        "TECHNOLOGY": "Technology",
        "TOPSTORIES" : "Top Stories"
    },
    SERVICES: {
        NEWS: {
            "SERVICE_NAME": "NewsAndWeatherService",
            "OPERATION_NAME": "CategorizedNews"
        },
        TOPSTORIESANDWEATHER: {
            "SERVICE_NAME": "TopStoriesandWeather",
            "OPERATION_NAME": "getStoriesAndWeather"
        }
    }
};

var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function showLoadingScreen(text) {
    kony.application.showLoadingScreen("frmLoading",
        text,
        constants.LOADING_SCREEN_POSITION_ONLY_CENTER,
        false,
        true,
        null);
}

function dismissLoadingScreen() {
    kony.application.dismissLoadingScreen();
}