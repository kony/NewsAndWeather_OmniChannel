define({
    previewId: "1",
    lastOpenedID: "1",
    onNavigate: function(param) {
        this.view.flxLocation.setVisibility(false);
        debugger;
        var temp = kony.store.getItem("isFirstLaunch");
        if (temp === true) {
            kony.store.setItem("isFirstLaunch", false);
        } else if (temp === false) {
            return;
        }
        showLoadingScreen("Loading News..");
        this.setSelection("category1");
    },
    setSelection: function(id) {
        this.lastOpenedID = id;
        this.view.segNews.removeAll();
        id = id.split("category")[1];
        if (id !== this.previewId) {
            this.view["cateName" + id].skin = "sknCategoryS";
            this.view["cateName" + this.previewId].skin = "sknCategoryUS";
            this.previewId = id;
        }
        this.getSelectedCategory(Number(id));
    },
    navigateToKnowledgeFramework: function() {
        var navigat = new kony.mvc.Navigation("frmFramework");
        navigat.navigate();
    },
    getSelectedCategory: function(id) {
        showLoadingScreen("Fetching News..");
        var category;
        if (id == 10) {
            this.view.flexTodayWeather.isVisible = true;
            this.view.flexWeather.isVisible = true;
            this.view.lblStrip.isVisible = true;
        } else {
            this.view.flexTodayWeather.isVisible = false;
            this.view.flexWeather.isVisible = false;
            this.view.lblStrip.isVisible = false;
        }
        switch (id) {
            case 1:
                category = "h";
                break;
            case 2:
                category = "w";
                break;
            case 3:
                category = "n";
                break;
            case 4:
                category = "b";
                break;
            case 5:
                category = "tc";
                break;
            case 6:
                category = "e";
                break;
            case 7:
                category = "s";
                break;
            case 8:
                category = "snc";
                break;
            case 9:
                category = "m";
                break;
            case 10:
                this.setCurrentDate();
                this.getLocation();
                return;
            default:
                alert("Invalid id");
                category = null;
        }
        alert(category);
        this.getNews(category);
        this.view.flxLocation.setVisibility(false);
        this.view.segNews.removeAll();
    },
    getNews: function(category) {
        kony.print("In Get News");
        var connectivity = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        if (connectivity === false) {
            alert("Please check your network connectivity");
            //this.view.flxLocation.setVisibility(true);
            dismissLoadingScreen();
        } else {
            this.view.flxLocation.setVisibility(false);
            kony.print("In Get News2");
            try {
                var intgService = KNYMobileFabric.getIntegrationService(configObject.services.news.SERVICE_NAME); //Accounts is service name and accountsClient is Accounts integration service instance
                intgService.invokeOperation(configObject.services.news.OPERATION_NAME, {}, {
                    "category": category
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
        this.processResponse(response);
    },
    getNewsFailureCallback: function(error) {
        dismissLoadingScreen();
        alert("Failed to Fetch News" + JSON.stringify(error));
    },
    processResponse: function(response) {
        var processedData = [];
        var responseLength = response.news_list.length;
        for (var i = 1; i < responseLength; i++) {
            var rowData = {};
            rowData = this.getImageAndDesc(response.news_list[i].news_item.description);
            if (response.news_list[i].news_item.title !== undefined && response.news_list[i].news_item.link !== undefined) { // && rowData.shortDesc !== undefined){
                rowData.title = ((response.news_list[i].news_item.title).substring(0, 50)) + "..";
                rowData.link = response.news_list[i].news_item.link;
                processedData.push(rowData);
            } else {
                kony.print("There is no title and link");
            }
        }
        this.showProcessedDataInSegment(processedData);
    },
    getImageAndDesc: function(description) {
        var desAndImgSrc = {};
        //Getting the img source by parsing the html string
        var startPosition = description.search('img src=');
        if (startPosition !== -1) {
            var endPosition = startPosition + 10;
            kony.print("\n--start-->" + startPosition);
            while (description[endPosition] != '"') {
                endPosition++;
            }
            var imgSrc = description.substring(startPosition + 9, endPosition);
            //imgSrc = "http:" + imgSrc;
            if (imgSrc.search("https") !== -1) desAndImgSrc.imgSrc = imgSrc;
            else {
                desAndImgSrc.imgSrc = "http:" + imgSrc;
            }
        } else {
            kony.print("imgSource Not Found");
        }
        //Getting the short description by parsing the html string
        var shortDesc = description.split("<font size=\"-1\">");
        if (shortDesc[2] !== undefined && shortDesc[2] !== null) {
            var descLen = shortDesc[2].length;
            if (descLen > 60) {
                descLen = 60;
            } else {
                kony.print("descLen is Less than 120");
            }
            desAndImgSrc.shortDesc = shortDesc[2].substring(0, descLen) + "..";
        } else {
            kony.print("Short description Not Found");
        }
        return desAndImgSrc;
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
        if (lat === null) lat = 0;
        if (lon === null) lon = 0;
        kony.print("latitutde:-" + lat);
        kony.print("longitude:-" + lon);
        kony.application.dismissLoadingScreen();
        this.getWeatherForecast(lat, lon);
    },
    geoErrorCallBack: function(error) {
        dismissLoadingScreen();
        this.view.flxLocation.setVisibility(true);
        kony.print("Error in getting Location" + JSON.stringify(error));
    },
    getWeatherForecast: function(lat, lon) {
        try {
            var integretionObj = KNYMobileFabric.getIntegrationService(configObject.services.local.SERVICE_NAME); //Accounts is service name and accountsClient is Accounts integration service instance
            integretionObj.invokeOperation(configObject.services.local.OPERATION_NAME, {}, {
                "lat": lat.toString(),
                "lon": lon.toString()
            }, this.getWeatherSuccessCallback.bind(this), this.getWeatherFailureCallback.bind(this));
        } catch (excp) {
            dismissLoadingScreen();
            kony.print(JSON.stringify(excp));
        }
    },
    getWeatherSuccessCallback: function(response) {
        dismissLoadingScreen();
        kony.print("Success fetching Weather" + JSON.stringify(response));
        this.processForecastData(response);
        this.processResponse(response);
        this.processAndSetTodayData(response);
    },
    getWeatherFailureCallback: function(error) {
        dismissLoadingScreen();
        kony.print("Error in fetching weather" + JSON.stringify(error));
    },
    processForecastData: function(response) {
        var date = new Date();
        var weekDay = date.getDay();
        var processedForecastData = [];
        if (response !== null && response.forcecast !== undefined && response.forcecast[0] !== undefined && response.forcecast[0].list !== undefined && response.forcecast[0].list.length >= 4) {
            for (var i = 0; i < 7; i++) {
                var dayData = {};
                var dayDataToProcess = response.forcecast[0].list[i];
                dayData.day = days[(weekDay + i) % 7];
                dayData.icon = "http://openweathermap.org/img/w/" + dayDataToProcess.weather[0].icon + ".png";
                dayData.minTemp = ((dayDataToProcess.temp.min - 273.5).toFixed()) + "°C";
                dayData.maxTemp = ((dayDataToProcess.temp.max - 273.5).toFixed()) + "°C";
                processedForecastData.push(dayData);
            }
            this.setForeCastData(processedForecastData);
        } else {
            kony.print("ForeCast Data is not Proper For Processing");
        }
    },
    setForeCastData: function(processedData) {
        if (processedData.length > 0) {
            for (var i = 0; i < 5; i++) {
                this.view["lblDay" + (i + 1)].text = processedData[i].day;
                this.view["lblMinTemp" + (i + 1)].text = processedData[i].minTemp;
                // this.view["lblMaxTemp"+(i+1)].text = processedData[i].maxTemp;
                this.view["imgWeatherIcon" + (i + 1)].src = processedData[i].icon;
            }
        } else {
            kony.print("There is no Processed Data");
        }
    },
    processAndSetTodayData: function(response) {
        var processedTodayData = {};
        //processedTodayData.cityName = response.cityName;
        processedTodayData.cityName = response.weather[0].name;
        processedTodayData.temp = response.weather[0].main.temp;
        processedTodayData.icon = "http://openweathermap.org/img/w/" + response.weather[0].weather[0].icon + ".png";
        this.setTodayData(processedTodayData);
    },
    setTodayData: function(processedTodayData) {
        this.view.imgToday.src = processedTodayData.icon;
        this.view.lblTodayTemp.text = ((processedTodayData.temp - 273.5).toFixed()) + "°C";
        //this.view.lblTodayTemp.text = Number(processedTodayData.temp);//-273.5).toFixed()); //+"°C";
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
        object.animate(kony.ui.createAnimation({
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
        }, {
            text: "Kony Documentation",
            src: "selection.png",
            callback: function() {
                    kony.application.openURL("https://docs.kony.com");
                } // this.onClickHelp.bind(this)       
        }];
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
        this.view.hamburger.animate(kony.ui.createAnimation({
            100: {
                left: left + "%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
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