define(function(){
	var controller = require("userfrmNewsAndWeather444c3380Controller");
	var controllerActions = ["frmNewsAndWeather444c3380ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})