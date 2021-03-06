define({
    prevId: 1,
    curntCategory: "h",
    curntScreenWidth: 1360,
    curntNews: [],
    KF_DATA: [{
        "title": "Integration & Orchestration services",
        "desc1": "<b>Integration Service</b><br>A service is an application component that represents the application interaction with the external data source. A service definition comprises the meta-data or the configurations required to exchange data with the external data source. For example, the configurations can be service type, service ID, input parameters, output parameters, preprocessors and postprocessors, target URL, authentication credentials if required, and type (HTTP/HTTPS).<br><br>The service definition enables the application to exchange data with any external data source. The Kony Fabric provides back-end for connecting to a Web service and an XML service. Even if the external data source does not expose the services to these well-known interfaces, the developer can build a Java service.<br><br><b>Orchestration Service</b><br>Service orchestration is the coordination or integration of several services and exposing them as a single service. The mix of services supports the automation of business processes.Service orchestration helps you make the most of the user experience. You can create work flows and composite services that include custom logic and data processing on the server side to reduce the workload on the device.<br><br>You can also create a <b>composite orchestration service with a combination of objects services.</b> You can select a combination of objects services from one or more objects, or multiple objects services along with integration or orchestration services.",
        "video1": "https://youtu.be/XbmxioVXrVg",
        "image1": "vizmf.png",
        "desc2": "This app makes use of the Google News and Google weather APIs to demonstrate usage of Integration and Orchestration Services. The simple UI for the front end of the app has been designed using Kony Visualizer and service calls have been made through Kony Fabric. Kony Fabric in turn makes calls to the Google News API and returns the news items for the appropriate categories sent as parameters in the web service call.<br><br>In the video shown below, we will walk you thru creating your first Kony Fabric application. At the end of this module, you will understand how to use Kony Fabric to connect with backend APIs.",
        "video2": "https://youtu.be/3fIIVqlnUVM",
        "image2": "video2.png",
        "link": 'Please find below the links containing the video tutorials:<br><a href="http://docs.kony.com/konylibrary/konyfabric/mf_video_tutorials/Default.htm#Module/integration_orchestration.htm%3FTocPath%3D_____3"><br>Integration and Orchestration Overview </a><br><a href = "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_online_tra_intro/Default.htm#Using%20Integration%20Services.htm%3FTocPath%3D_____4"> Integration Services </a><br><br>Please find below the links to the documentation site:<br><a href = "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_user_guide/Default.htm#Services.htm%3FTocPath%3DFeatures%7CIntegration%7C_____0">Integration Services </a><br><a href =  "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_user_guide/Default.htm#Orchestration.htm%3FTocPath%3DFeatures%7COrchestration%7C_____0">Orchestration Services </a>'
    }],
    form1PresShow: function() {
        for (var i = 1; i <= 10; i++) {
            this.view["btnCat" + i].cursorType = "pointer";
        }
        this.view.HamburgerMenu.cursorType = "pointer";

    },
    form1PostShow: function() {
        this.view.btnCat1.onClick(this.view.btnCat1);
    },
    screenResized: function(eventObject, screenWidth) {
        kony.print("---$$$ on resize triggeed!!!! $$$ --- new width is :" + screenWidth);
        this.curntScreenWidth = screenWidth;
        if (screenWidth > 0 && screenWidth <= 470) {
            this.showProcessedDataInSegment(this.curntNews, 1);
        } else if (screenWidth > 470 && screenWidth <= 685) {
            this.showProcessedDataInSegment(this.curntNews, 2);
        } else if (screenWidth > 685 && screenWidth <= 1015) {
            this.showProcessedDataInSegment(this.curntNews, 3);
        } else if (screenWidth > 1015 && screenWidth <= 1340) {
            this.showProcessedDataInSegment(this.curntNews, 4);
        } else {
            this.showProcessedDataInSegment(this.curntNews, 5);
        }
        this.view.forceLayout();
    },
    showHideHamMenu: function() {
        if (this.view.flxHamMenu.isVisible) {
            this.view.flxHamMenu.isVisible = false;
        } else {
            this.view.flxHamMenu.isVisible = true;
        }
        this.view.forceLayout();
    },
    setCategorySelected: function(id) {
        //showLoadingScreen("Loading News......");
        id = id.split("Cat")[1];
        this.selectedCategory = this.view["btnCat" + id].text;
        if (id !== this.prevId) {

            this.view["btnCat" + this.prevId].skin = "skin4589e3a0";
            this.view["btnCat" + id].skin = "skin4588f940";

            this.view["bntHamCat" + this.prevId].skin = "skin4589e3a0";
            this.view["bntHamCat" + this.prevId].padding = [0, 0, 0, 0];
            this.view["bntHamCat" + this.prevId].right = "10dp";
            this.view["bntHamCat" + id].skin = "skin4588f940";
            this.view["bntHamCat" + id].padding = [0, 0, 5, 0];
            this.view["bntHamCat" + id].right = "0dp";

            this.view.flxWeatherNewsWrapper.isVisible = false;
            this.prevId = id;
        }
        this.view.flxHamMenu.isVisible = false;
        this.getSelectedCategoryNews(id);

    },
    getSelectedCategoryNews: function(id) {
        showLoadingScreen("Loading...");
        var catName = this.view["btnCat" + id].text;
        this.selectedCategory = catName.toLowerCase();
        this.curntCategory = this.selectedCategory;
        if (this.selectedCategory === NWContants.CATEGORIES.TOPSTORIES.toLowerCase()) {
            this.setCurrentDate();
            this.curntCategory = "";
            this.getLocation();
        } else {
            this.getNews();
        }
    },
    getNews: function(category) {
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
        if (response.articles !== undefined) {
            this.processResponse(response.articles);
        }
    },
    getNewsFailureCallback: function(error) {
        dismissLoadingScreen();
        alert("Failed to Fetch News" + JSON.stringify(error));
    },
    processResponse: function(response) {
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

        this.curntNews = processedData;

        this.screenResized(this.view, kony.application.getCurrentBreakpoint());
    },
    getShortDescription: function(response) {
        var description = response.description;
        if (description !== undefined) {
            if (description.length > 120){
                description = description.substring(0, 120)+"..";
            } else {
                description = description;
            }
        } else {
            description = "";
        }
        return description;
    },

    getIcon: function(response) {
        var imageSrc = response.urlToImage;
        if (imageSrc === undefined) {
            imageSrc = NWContants.DEFAULTIMAGE;
        } else {
            //Do Nothing
        }
        return imageSrc;
    },

    getTitle: function(response) {
        var title = response.title;
        if (title !== undefined) {
            if (title.length > 70){
                title = title.substring(0, 70) + "..";
            }
            return title;
        } else {
            return;
        }
    },

    getLink: function(response) {
        var link = response.url;
        if (link !== undefined) {
            return link;
        } else {
            return;
        }
    },
    showProcessedDataInSegment: function(dataToBeDisplayed, cardsPerRow) {
        //  alert("NEWS :"+JSON.stringify(dataToBeDisplayed));
        if (dataToBeDisplayed.length === undefined || dataToBeDisplayed.length === 0) {
            kony.print("there is no data to show!!!!!!!");
            return;
        }


        this.view.CardBoard.removeAll();
        if (dataToBeDisplayed.length === 0) {
            return;
        }
        var noOfRows = 0;
        for (var i = 0; i < dataToBeDisplayed.length; i += cardsPerRow) {

            var Row1 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "306px",
                "id": "flxRow" + i + "_" + this.curntCategory,
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Row1.setDefaultUnit(kony.flex.DP);

            for (var j = 0; j < cardsPerRow; j++) {
                var flxOthrNews = this.createOtherNewsFlex(i + "_" + j + "_" + this.curntCategory, dataToBeDisplayed[i + j]);
                if (flxOthrNews !== null) {
                    if (j !== 0) {
                        flxOthrNews.left = "10px";
                    }
                    Row1.add(flxOthrNews);
                }
            }

            //this.view.NewsBoard.width = (270 + (280 * (cardsPerRow - 1))) +"px";
            this.view.NewsBoard.width = (215 + (225 * (cardsPerRow - 1))) + 10 + "px";
            this.view.NewsBoard.centerX = "50%";

            if (i > 1) {
                Row1.top = "10dp";
            }
            this.view.CardBoard.add(Row1);
            noOfRows++;
        }

        this.view.CardBoard.height = (306 + (316 * (noOfRows - 1))) + "dp";

        this.view.forceLayout();
    },
    createOtherNewsFlex: function(flxIdPostFix, newsData) {
        //	alert("flx for :"+JSON.stringify(newsData));
        if (newsData === null || newsData === undefined) {
            return null;
        }
        var NewsCard105553122548992 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "306px",
            "id": "flxOtherNewsWrap" + flxIdPostFix,
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "top": "0%",
            //"width": "270px",
            "width": "215px",
            "zIndex": 0
        }, {}, {
            "cursorType": "pointer",
            "hoverSkin": "SKNNEWSHOVER"
        });
        NewsCard105553122548992.setDefaultUnit(kony.flex.DP);

        NewsCard105553122548992.onclick = function() {
            kony.application.openURL(newsData.link);
        };

        var Rectangle2140548213894848 = new kony.ui.Image2({
            "height": "306px",
            "id": "Rectangle2140548213894848",
            "isVisible": true,
            "left": "0%",
            "skin": "skin444f19b1",
            "src": "imgrectangle2140548213894848.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});

        var NewsTitle140548383678992 = new kony.ui.Label({
            "height": "58px",
            "id": "lblOtherNewsTitle" + flxIdPostFix,
            "isVisible": true,
            "left": "4.25%",
            "skin": "skin444fdd00",
            "text": newsData.title,
            "top": "42.48%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});


        var NewsDesc140548383679344 = new kony.ui.Label({
            "height": "95px",
            "id": "lblOtherNewsDetails" + flxIdPostFix,
            "isVisible": true,
            "left": "4.58%",
            "skin": "skin44505230",
            "text": newsData.shortDesc,
            "top": "63.4%",
            "width": "90%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});

        var NewsImage105553122542592 = new kony.ui.Image2({
            "height": "108px",
            "id": "imgOtherNews" + flxIdPostFix,
            "isVisible": true,
            "left": "4.25%",
            "skin": "skin444f19b1",
            "src": newsData.imgSrc,
            "imageWhenFailed" : "newselected.png",
            "imageWhileDownloading" : "newshalfwhite.png",
            "top": "4.25%",
            "width": "90%",
            "zIndex": 3
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});


        NewsCard105553122548992.add(Rectangle2140548213894848, NewsTitle140548383678992, NewsDesc140548383679344, NewsImage105553122542592);
        //flxOtherNewsWrap.add(imgOtherNews, lblOtherNewsTitle, lblOtherNewsDetails);
        NewsCard105553122548992.hoverSkin = "SKNNEWSHOVER";
        //flxOtherNewsWrap.hoverSkin = "SKNNEWSHOVER";
        //return flxOtherNewsWrap;
        return NewsCard105553122548992;
    },
    setCurrentDate: function() {
        var next7Dates = this.get7Dates();

        for (var i = 0; i < 7; i++) {
            this.view["lblDate" + i].text = next7Dates[i];
        }
        this.view.flxWeatherNewsWrapper.isVisible = true;
        this.view.forceLayout();
    },
    get7Dates: function() {
        var day_list = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        var next7Days = [];
        var date = new Date();

        for (var i = 0; i <= 7; i++) {
            var currentDate = new Date();
            currentDate.setDate(date.getDate() + i);
            next7Days.push(day_list[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()]);
        }
        return next7Days;
    },
    getLocation: function() {
        //    showLoadingScreen("Fetching weather..");
        try {
            var positionoptions = {};
            positionoptions.enableHighAccuracy = true;
            positionoptions.timeout = 10000;
            positionoptions.maximumAge = 10000;
            kony.location.getCurrentPosition(this.geoSuccessCallBack.bind(this), this.geoErrorCallBack.bind(this));
        } catch (exception) {
            // this.view.flxLocation.setVisibility(true);
            alert("enable location access!!!");
            dismissLoadingScreen();
            alert("Exception is ::" + exception.message);
        }
    },
    geoSuccessCallBack: function(position) {
        // this.view.flxLocation.setVisibility(false);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        if (lat === null)
            lat = 0;
        if (lon === null)
            lon = 0;
        kony.print("latitutde:-" + lat);
        kony.print("longitude:-" + lon);
        kony.application.dismissLoadingScreen();
        this.getWeatherForecast(lat, lon);
    },
    geoErrorCallBack: function(error) {
        dismissLoadingScreen();
        // this.view.flxLocation.setVisibility(true);
        kony.print("Error in getting Location" + JSON.stringify(error));
    },
    getWeatherForecast: function(lat, lon) {
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
        this.processForecastData(response);
        if (response.articles !== undefined) {
            this.processResponse(response.articles);
        }
    },
    getWeatherFailureCallback: function(error) {
        dismissLoadingScreen();
        if (error.news_list.length > 0) {
            this.processResponse(error);
        }
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
                dayData.minTemp = dayDataToProcess.min + "°C";
                dayData.maxTemp = dayDataToProcess.max + "°C";
                processedForecastData.push(dayData);
            }
            this.setForeCastData(processedForecastData);
        } else {
            kony.print("ForeCast Data is not Proper For Processing");
        }
    },
    setForeCastData: function(foreCastData) {
        for (var i = 0; i < foreCastData.length; i++) {
            this.view["lblTemp" + (i + 1)].text = foreCastData[i].maxTemp;
            this.view["imgTemp" + (i + 1)].src = foreCastData[i].icon;
        }
    },
    closeKnowledgeFramework: function() {
        this.view.flxKnowledgeFramework.isVisible = false;
        this.view.forceLayout();
    }
});