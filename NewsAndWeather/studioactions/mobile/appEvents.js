define({
    AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5: function AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5(eventobject) {
        var self = this;
        debugger;
        var isFreshLaunch = kony.store.getItem("isFirstTime");
        kony.store.setItem("isFirstLaunch", true);
        /*if(isFreshLaunch!== undefined && isFreshLaunch== null && isFreshLaunch== "false"){

    return "frmNewsAndWeather";
}else{
  return "frmSplash";*/
        if (isFreshLaunch === undefined || isFreshLaunch == null) {
            //fresh launch
            kony.store.setItem("isFirstTime", false);
            return "frmSplash";
        } else {
            //second launch
            return "frmNewsAndWeather";
        }
    }
});