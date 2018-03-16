isHelpClicked = false;
var configObject = {
	services : {
		news : {
              "SERVICE_NAME" : "News",
			"OPERATION_NAME" : "GetNewsForCategory"
		},
		local : {
			"SERVICE_NAME" : "ZLocalNewsNWeather",
			"OPERATION_NAME" : "getLocalNewsWeather"
		}
	}
   
};

var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function showLoadingScreen(text){
  kony.application.showLoadingScreen("frmLoading",
                                     text,
                                     constants.LOADING_SCREEN_POSITION_ONLY_CENTER, 
                                     false,
                                     true,
                                     null);
}
function dismissLoadingScreen(){
  kony.application.dismissLoadingScreen();
}