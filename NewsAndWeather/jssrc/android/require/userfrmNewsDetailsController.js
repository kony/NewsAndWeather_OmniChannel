define({
    onNavigate: function(URL) {
        this.view.browserDetails.requestURLConfig = {
            "URL": URL,
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        };
    }
});