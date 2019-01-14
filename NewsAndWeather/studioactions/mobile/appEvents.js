define({
    AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5: function AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5(eventobject) {
        var self = this;
        var isFreshLaunch = kony.store.getItem("isFirstLaunch");
        if (isFreshLaunch === undefined || isFreshLaunch == null) {
            //fresh launch
            return "frmSplash";
        } else {
            //second launch
            return "frmNewsAndWeather";
        }
    }
});