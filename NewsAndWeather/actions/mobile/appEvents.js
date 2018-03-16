define({
    AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5: function AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5(eventobject) {
        var self = this;
        if (kony.store.getItem("isFirstTime") !== undefined && kony.store.getItem("isFirstTime") !== null && kony.store.getItem("isFirstTime") == "false") {
            return "frmNewsAndWeather";
        } else {
            return "frmSplash";
        }
    }
});