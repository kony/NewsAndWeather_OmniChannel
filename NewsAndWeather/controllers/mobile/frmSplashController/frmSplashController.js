define({ 

setGetStartedData : function(){
    var data = [{
      			 "image" : "intro1.png", 
                 "appTitle" : "Kony News & Weather",
                 "desc" : "Explore updates on daily news <br> and local weather"
                },{
                  "image" : "intro2.png", 
                 "appTitle" : "News & Weather",
                 "desc" : "Browse Knowledge Framework to <br> learn and share implementation <br>  of Key Features"
                }];
    this.view.SplashScreen.setSplashScreenData(data);
  }
 });