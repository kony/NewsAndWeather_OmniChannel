define(function(){
	var controller = require("userCopyflxFullSplashScreen0ja52df18a3344eController");
	var controllerActions = ["CopyflxFullSplashScreen0ja52df18a3344eControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})