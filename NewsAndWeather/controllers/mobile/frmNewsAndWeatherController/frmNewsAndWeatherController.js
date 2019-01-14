define({
    onNavigate: function(param) {
        this.previewId = "flexCategory1";
        if (param === undefined) {
            this.view.flxLocation.setVisibility(false);
            this.checkLaunchAndSetStore();
            showLoadingScreen("Loading News..");
            this.setSelection("flexCategory1");
        }
    },

    checkLaunchAndSetStore: function() {
       kony.store.setItem("isFirstLaunch", false);
    },

    setSelection: function(id) {
        this.view.segNews.removeAll();
        var categoryNumber = id.split("flexCategory")[1];
        var lastCategoryNumber= this.previewId.split("flexCategory")[1];
        if (id !== this.previewId) {
                this.view["lblCateName"+categoryNumber].skin = "sknCategoryS";
                this.view["lblCateName"+lastCategoryNumber].skin = "sknCategoryUS";
                this.previewId = id;
        }
        var selectedCategory = this.getSelectedCategoryStringFromUI(id);
        this.getSelectedCategory(selectedCategory);
    },
    navigateToKnowledgeFramework: function() {
        var navigat = new kony.mvc.Navigation("frmFramework");
        navigat.navigate();
    },

    getSelectedCategoryStringFromUI: function(id) {
        var lblReference = this.view["lblCateName"+id.split("flexCategory")[1]];
        var lblText = lblReference.text;
        return lblText;
    },
    getSelectedCategory: function(category) {
        showLoadingScreen("Fetching News..");
        this.selectedCategory = category.toLowerCase();
        if (this.selectedCategory === NWContants.CATEGORIES.TOPSTORIES.toLowerCase()) {
            this.view.flexTodayWeather.isVisible = true;
            this.view.flexWeather.isVisible = true;
            this.getLocation();
        } else {
            this.view.flexTodayWeather.isVisible = false;
            this.view.flexWeather.isVisible = false;
            this.getNews();
        }
        this.view.segNews.removeAll();
    },


    getNews: function() {
        kony.print("In Get News");
        var connectivity = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        if (connectivity === false) {
            alert("Please check your network connectivity");
            dismissLoadingScreen();
        } else {
            kony.print("In Get News2");
            try {
                var intgService = KNYMobileFabric.getIntegrationService(NWContants.SERVICES.NEWS.SERVICE_NAME); 
                intgService.invokeOperation(NWContants.SERVICES.NEWS.OPERATION_NAME, {}, {
                    "category": this.selectedCategory
                }, this.getNewsSuccessCallback.bind(this), this.getNewsFailureCallback);
            } catch (excp) {
                dismissLoadingScreen();
                alert("In catch of get News" + JSON.stringify(excp));
            }
        }
    },


    getNewsSuccessCallback: function(response) {
        dismissLoadingScreen();
        kony.print("Success Fetching News For Given Category..");
        kony.print("Start Processing Data to Show News...");
        if(response.articles!==undefined){
          this.processNewsResponse(response.articles);
        }else{
          
        }       	
    },


    getNewsFailureCallback: function(error) {
        dismissLoadingScreen();
        alert("Failed to Fetch News" + JSON.stringify(error));
    },

    processNewsResponse: function(response) {
        var processedData = [];
        var responseLength = response.length;
        for (var i = 0; i < responseLength; i++) {
            var rowData = {};
            
            rowData.shortDesc = this.getShortDescription(response[i]);
            rowData.imgSrc = this.getIcon(response[i]);
            rowData.title = this.getTitle(response[i]);
            rowData.link = this.getLink(response[i]);
            if (rowData.title !== undefined && rowData.link !== undefined) { 
                processedData.push(rowData);
            } else {
                kony.print("There is no title and link, so ignoring this set");
            }
        }
        this.showProcessedDataInSegment(processedData);
    },
  
  
   getShortDescription : function(response){
     var description  = response.description;
     if(description!==undefined){
       if(description.length>NWContants.SDESCLENGTH){
         description = description.substring(0, NWContants.SDESCLENGTH) + "..";
       }else{
         description = "";
       }
     }else{
       description = "";
     }
     return description;
   },
  
   getIcon : function(response){
     var imageSrc = response.urlToImage;
     if(imageSrc === undefined){   
         imageSrc = NWContants.DEFAULTIMAGE;
     }else{
       //Do Nothing
     }
     return imageSrc;
   },
  
   getTitle : function(response){
     var title = response.title;
     if(title!==undefined){
       if(title.length>NWContants.TITLELENGTH){
         title = title.substring(0,NWContants.TITLELENGTH) + "..";
       }
       return title;
     }else{
       return;
     }
   },
  
    getLink : function(response){
     var link = response.url;
     if(link!==undefined){
       return link;
     }else{
       return;
     }
   },
  
    showProcessedDataInSegment: function(processedData) {
        kony.print("The Final ProcessedData is" + JSON.stringify(processedData));
        this.view.segNews.widgetDataMap = {
            "imgNewsIcon": "imgSrc",
            "NewsTitle": "title",
            "newsShortDesc": "shortDesc"
        };
        this.view.segNews.removeAll();
        this.view.segNews.setData(processedData);
    },

    showDetailedNews: function() {
        var selectedNews = this.view.segNews.selectedRowItems[0];
        var navigateToLocal = new kony.mvc.Navigation("frmNewsDetails");
        navigateToLocal.navigate(selectedNews.link);
    },
    getLocation: function() {
        showLoadingScreen("Fetching weather..");
        try {
            var positionoptions = {};
            positionoptions.enableHighAccuracy = true;
            positionoptions.timeout = 10000;
            positionoptions.maximumAge = 10000;
            kony.location.getCurrentPosition(this.geoSuccessCallBack.bind(this), this.geoErrorCallBack.bind(this));
        } catch (exception) {
            this.view.flxLocation.setVisibility(true);
            dismissLoadingScreen();
            alert("Exception is ::" + exception.message);
        }
    },

    geoSuccessCallBack: function(position) {
        this.view.flxLocation.setVisibility(false);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        if (lat === null)
            lat = 0;
        if (lon === null)
            lon = 0;
        kony.print("latitutde:-" + lat);
        kony.print("longitude:-" + lon);
        kony.application.dismissLoadingScreen();
        this.getWeatherForecastAndTopStories(lat, lon);
    },
    geoErrorCallBack: function(error) {
        dismissLoadingScreen();
        this.view.flxLocation.setVisibility(true);
        kony.print("Error in getting Location" + JSON.stringify(error));
    },

    getWeatherForecastAndTopStories: function(lat, lon) {
        try {
            var integretionObj = KNYMobileFabric.getIntegrationService(NWContants.SERVICES.TOPSTORIESANDWEATHER.SERVICE_NAME);
            integretionObj.invokeOperation(NWContants.SERVICES.TOPSTORIESANDWEATHER.OPERATION_NAME, {}, {
                "lat": lat.toString(),
                "lon": lon.toString(),
            }, this.getWeatherSuccessCallback.bind(this), this.getWeatherFailureCallback.bind(this));
        } catch (excp) {
            dismissLoadingScreen();
            kony.print(JSON.stringify(excp));
        }
    },

    getWeatherSuccessCallback: function(response) {
        dismissLoadingScreen();
        kony.print("Success fetching Weather" + JSON.stringify(response));
        this.setTodayData(response);
        this.setForeCastData(response);
        this.setCurrentDate();
        this.processNewsResponse(response.articles);
    },

    getWeatherFailureCallback: function(error) {
        dismissLoadingScreen();
        kony.print("Error in fetching weather" + JSON.stringify(error));
    },

    processForecastData: function(response) {
        var date = new Date();
        var weekDay = date.getDay();
        var processedForecastData = [];
        if (response.forcastdata !== undefined &&
            response.forcastdata.length >= 4) {
            for (var i = 0; i < 7; i++) {
                var dayData = {};
                var dayDataToProcess = response.forcastdata[i];
                dayData.day = days[(weekDay + i) % 7];
                dayData.icon = "http://openweathermap.org/img/w/" + dayDataToProcess.icon + ".png";
                dayData.minTemp = dayDataToProcess.min + "";
                dayData.maxTemp = dayDataToProcess.max + "";
                processedForecastData.push(dayData);
            }
           return processedForecastData;
        } else {
            kony.print("ForeCast Data is not Proper For Processing");
            return;
        }
    },

    setForeCastData: function(response) {
        var processedData = this.processForecastData(response);
        if (processedData!==undefined && processedData.length > 0) {
            for (var i = 0; i < 5; i++) {
                this.view["lblDay" + (i + 1)].text = processedData[i].day;
                this.view["lblMinTemp" + (i + 1)].text = processedData[i].maxTemp;
                this.view["imgWeatherIcon" + (i + 1)].src = processedData[i].icon;
            }
        } else {
            kony.print("There is no Processed Data");
        }

    },
    processTodayData: function(response) {
        var processedTodayData = {};
        processedTodayData.cityName = response.cityname;
        processedTodayData.temp = (response.forcastdata[0].max).toFixed()+"°C";
        processedTodayData.icon = "http://openweathermap.org/img/w/" + response.forcastdata[0].icon + ".png";
        return processedTodayData;
        
    },
    setTodayData: function(response) {
        var processedTodayData = this.processTodayData(response);
        this.view.imgToday.src = processedTodayData.icon;
        this.view.lblTodayTemp.text = (processedTodayData.temp);
        this.view.lblCityName.text = processedTodayData.cityName;
    },
  
    animation: function(object, scaleX, scaleY, left, flag) {
        var controllerScope = this;
        var defaultImage = kony.ui.makeAffineTransform();
        defaultImage.scale(scaleX, scaleY);
        var duration = 0.5;
        if (flag === false) {
            duration = 0;
        }
        object.animate(
            kony.ui.createAnimation({
                100: {
                    "left": left,
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": defaultImage
                }
            }), {
                delay: 0,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: duration
            }, {
                animationEnd: function() {
                    if (controllerScope.view.flxFullPage.left == "0%") {
                        controllerScope.view.skin = "skngreyfrm";
                    }
                    if (isHelpClicked) {
                        isHelpClicked = false;
                        var nav = new kony.mvc.Navigation("frmSplash");
                        nav.navigate();
                    }
                }
            });
    },
    setShadowPosition: function() {
        if (this.view.flxFullPage.left == "-55%") {
            this.view.flxShadow.isVisible = true;
            this.view.flxShadow.left = "-55%";
        } else if (this.view.flxFullPage.left == "55%") {
            this.view.flxShadow.isVisible = true;
            this.view.flxShadow.left = "55%";
        } else {
            this.view.flxShadow.isVisible = false;
        }
    },

    menuClick: function() {
        this.animation(this.view.flxFullPage, 0.7, 0.7, "55%", true);
        this.animation(this.view.flxShadow, 0.7, 0.7, "55%", true);
        this.animateHambuger(0);
        //this.view.hamburger.left = "0%";
        this.view.forceLayout();
    },

    listMenuClick: function() {
        this.view.skin = "sknblueform";
        this.view.flxCover.zIndex = 10;
        this.view.flxCover.isVisible = true;
        this.view.flxCover.left = "55%";
        this.view.flxCover.width = "45%";
        this.view.flxCover.height = "100%";
        this.view.flxShadow.isVisible = true;
        this.view.forceLayout();
        var loginMenuData = [{
                text: "Kony Base Camp",
                src: "selection.png",
                callback: function() {
                    kony.application.openURL("https://basecamp.kony.com");
                } //this.moveToAPIIndexed.bind(this)
            },
            {
                text: "Kony Documentation",
                src: "selection.png",
                callback: function() {
                    kony.application.openURL("https://docs.kony.com");
                } // this.onClickHelp.bind(this)       
            }
        ];

        this.view.hamburger.addMenuItems(loginMenuData);
        /*   if(this.index === 2)
          {
            this.view.flxInterstitial.setVisibility(true);
            // this.view.slidingmenu.setEnabled(false);
            this.setPointer(this.screenData[this.index]);
            //this.index = 0;
          }*/

        this.menuClick();
    },
    navigateToGalleryApp: function() {
        if (kony.os.deviceInfo().name === "android") {
            kony.application.openURL("Gallery://com.orgname.Gallery");
        }
        if (kony.os.deviceInfo().name === "iPhone") {
            kony.application.openURL("Gallery://");
        }



    },
    navigateToEmpDirApp: function() {
        if (kony.os.deviceInfo().name === "android") {
            kony.application.openURL("employee://com.orgname.EmployeeDirectory");
        }
        if (kony.os.deviceInfo().name === "iPhone") {
            kony.application.openURL("EmployeeDirectory://");
        }
    },
    hideHam: function() {
        this.animateHambuger(-100);
        //  this.view.hamburger.left = "-100%";
        this.view.flxCover.isVisible = false;
        this.animation(this.view.flxShadow, 1, 1, "0%", true);
        this.animation(this.view.flxFullPage, 1, 1, "0%", true);
        this.view.flxShadow.isVisible = false;
        this.view.flxFullPage.left = "0%";
        this.view.forceLayout();
    },
    flxCoverOnClick: function() {
        this.view.flxShadow.isVisible = false;
        if (this.view.flxFullPage.left == "-55%" || this.view.flxFullPage.left == "55%") {
            if (this.view.hamburger.left == "0%") {
                this.animateHambuger(-100);
                //this.view.hamburger.left = "-100%";
                this.animation(this.view.flxShadow, 1, 1, "0%", true);
                this.animation(this.view.flxFullPage, 1, 1, "0%", true);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            } else if (this.view.filterMenu.left == "20%") {
                this.view.filterMenu.left = "100%";
                this.animation(this.view.flxShadow, 1, 1, "0%", true);
                this.animation(this.view.flxFullPage, 1, 1, "0%", true);
                this.view.filterMenu.addMenuItems(this.view.flxFullPage.getData());
                this.view.flxFullPage.filterAndSetData([]);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            }
        }
        this.view.flxShadow.isVisible = false;
    },
    animateHambuger: function(left) {
        this.view.hamburger.animate(
            kony.ui.createAnimation({
                100: {
                    left: left + "%",
                    "stepConfig": {}
                }
            }), {
                delay: 0,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: 0.1
            }, {
                animationEnd: function() {


                }
            });
    },
    setCurrentDate: function() {
        this.view.lblToday.text = this.getCurrentDate();
    },
    getCurrentDate: function() {
        var day_list = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
        var months = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var date = new Date();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        var day_name = date.getDay().toString();
        var year = date.getFullYear();
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        var dateOfOrder = day_list[Number(day_name)] + ",  " + months[Number(month) * 1] + " " + day + " " + year;
        return dateOfOrder;
    }

});