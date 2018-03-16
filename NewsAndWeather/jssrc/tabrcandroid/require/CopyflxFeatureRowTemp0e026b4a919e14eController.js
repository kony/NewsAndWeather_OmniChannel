define(function(){
	var controller = require("userCopyflxFeatureRowTemp0e026b4a919e14eController");
	var controllerActions = ["CopyflxFeatureRowTemp0e026b4a919e14eControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})