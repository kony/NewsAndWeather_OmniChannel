define({
  KF_DATA:[
    {
      "title" : "Integration & Orchestration services",
      "desc1" : "<b>Integration Service</b><br>A service is an application component that represents the application interaction with the external data source. A service definition comprises the meta-data or the configurations required to exchange data with the external data source. For example, the configurations can be service type, service ID, input parameters, output parameters, preprocessors and postprocessors, target URL, authentication credentials if required, and type (HTTP/HTTPS).<br><br>The service definition enables the application to exchange data with any external data source. The Kony Fabric provides back-end for connecting to a Web service and an XML service. Even if the external data source does not expose the services to these well-known interfaces, the developer can build a Java service.<br><br><b>Orchestration Service</b><br>Service orchestration is the coordination or integration of several services and exposing them as a single service. The mix of services supports the automation of business processes.Service orchestration helps you make the most of the user experience. You can create work flows and composite services that include custom logic and data processing on the server side to reduce the workload on the device.<br><br>You can also create a <b>composite orchestration service with a combination of objects services.</b> You can select a combination of objects services from one or more objects, or multiple objects services along with integration or orchestration services.",
      "video1": "https://youtu.be/XbmxioVXrVg",
      "image1" : "vizmf.png",
      "desc2" : "This app makes use of the Google News and Google weather APIs to demonstrate usage of Integration and Orchestration Services. The simple UI for the front end of the app has been designed using Kony Visualizer and service calls have been made through Kony Fabric. Kony Fabric in turn makes calls to the Google News API and returns the news items for the appropriate categories sent as parameters in the web service call.<br><br>In the video shown below, we will walk you thru creating your first Kony Fabric application. At the end of this module, you will understand how to use Kony Fabric to connect with backend APIs.",
      "video2" : "https://youtu.be/3fIIVqlnUVM",
      "image2" : "video2.png",
      "link" : 'Please find below the links containing the video tutorials:<br><a href="http://docs.kony.com/konylibrary/konyfabric/mf_video_tutorials/Default.htm#Module/integration_orchestration.htm%3FTocPath%3D_____3"><br>Integration and Orchestration Overview </a><br><a href = "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_online_tra_intro/Default.htm#Using%20Integration%20Services.htm%3FTocPath%3D_____4"> Integration Services </a><br><br>Please find below the links to the documentation site:<br><a href = "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_user_guide/Default.htm#Services.htm%3FTocPath%3DFeatures%7CIntegration%7C_____0">Integration Services </a><br><a href =  "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_user_guide/Default.htm#Orchestration.htm%3FTocPath%3DFeatures%7COrchestration%7C_____0">Orchestration Services </a>'
    }
  ],
  URL_NEWSITEM:null,
  DEVICE_ORIENTATION_LANDSCAPE : 1, 
  DEVICE_ORIENTATION_POTRAIT: 0,
  	frmNewsAndWeatherPostShow:function(){
		
      		//for android tab potrait - 1
        	//landscape is - 2
        	//for ipad potrait - 0
        	//landscape - 1
      if(kony.os.deviceInfo().name == "android"){
      	this.DEVICE_ORIENTATION_LANDSCAPE = 2;
      	this.DEVICE_ORIENTATION_POTRAIT = 1;
      }
      
      this.orientationChangedCallback();
      this.view.flxCat1.onClick(this.view.flxCat1);
      this.view.KnowledgeFrameworkTablet.setData(this.KF_DATA);
    },
	setCategorySelected:function(selectedId){
      
      if(kony.os.getDeviceCurrentOrientation() === this.DEVICE_ORIENTATION_POTRAIT){
        this.showHideHamMenu();
      }
      
      var selectedCatId = selectedId.split("Cat")[1];
      if(this.prevId===selectedCatId){
        return;
      }
      
      if(this.prevId!==undefined &&  this.prevId!==null){
        this.view["flxCatSelect"+this.prevId].isVisible = false;
        this.view["flxCat"+this.prevId].skin = "slFbox";
      }
      
      this.view["flxCatSelect"+selectedCatId].isVisible = true;
      this.view["flxCat"+selectedCatId].skin = "SKNTABCATSELECTED";
      
      this.prevId=selectedCatId;
      
      this.getNewsAndShowForId(Number(selectedCatId));
      
    },
  	getNewsAndShowForId:function(id){
      
      this.view.flxWeather.isVisible = false;
      
      var catName = this.view["lblCat"+id].text;
      this.view.lblBodyTitle.text = catName;
      
      var category;
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
                	  this.view.flxWeather.isVisible = true;
                      return;
                    default:
                      alert("Invalid id");
                      category = null;
     				  return;
                  }      
      showLoadingScreen("Loading...");
      this.getNews(category);
    },
  	getNews: function(category) {
      kony.print("In Get News");
      var connectivity = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
      if(connectivity===false){
        alert("Please check your network connectivity");
        //this.view.flxLocation.setVisibility(true);
        dismissLoadingScreen();
      }else{
        //this.view.flxLocation.setVisibility(false);
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
        //alert("fetch success!!"+JSON.stringify(response));
        this.processResponse(response);
      },
      getNewsFailureCallback: function(error) {
        dismissLoadingScreen();
        alert("Failed to Fetch News" + JSON.stringify(error));
      },
      processResponse:function(response){
        var processedData = [];
        var responseLength=response.news_list.length;

        for (var i = 1; i < responseLength; i++) {
          var rowData = {};
          rowData = this.getImageAndDesc(response.news_list[i].news_item.description);

          if(response.news_list[i].news_item.title !== undefined &&  response.news_list[i].news_item.link!== undefined){// && rowData.shortDesc !== undefined){
            rowData.title =response.news_list[i].news_item.title.substring(0, 40) + "...";
            rowData.link = response.news_list[i].news_item.link;
            rowData.shortDesc = rowData.shortDesc.substring(0,80) + "...";
            processedData.push(rowData);
          }else{
            kony.print("There is no title and link");
          }
        }

        this.curntNews = processedData;
        
        this.showProcessedData(processedData);
        
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
          if(imgSrc.search("https")!==-1)
            desAndImgSrc.imgSrc = imgSrc;
          else{
            desAndImgSrc.imgSrc = "http:" + imgSrc;
          }
        }else{
          kony.print("imgSource Not Found");
        }

        //Getting the short description by parsing the html string
        var shortDesc = description.split("<font size=\"-1\">");
        if(shortDesc[2]!==undefined && shortDesc[2]!== null){
          var descLen = shortDesc[2].length;
          if (descLen > 220) {
            descLen = 220;
          } else {
            kony.print("descLen is Less than 220");
          }
          //desAndImgSrc.shortDesc = shortDesc[2].substring(0, shortDesc[2].search("<b>")) + "...";
          desAndImgSrc.shortDesc = shortDesc[2].substring(0, descLen) + "...";
        }else{
          kony.print("Short description Not Found");
        }
        return desAndImgSrc;
      },
  	  showProcessedData:function(dataTobeDisplayed){
        	if(dataTobeDisplayed===undefined || dataTobeDisplayed===null || dataTobeDisplayed.length===0){
              alert("No news to show!");
              return;
            }
        	this.view.flxNewsWraper.removeAll();
        	for(var i=0;i<dataTobeDisplayed.length;i+=3){
              	var flxNewsRowTemp = this.createNewsRowwithID(this.prevId+"_"+i);
             	for(var j=0;j<3;j++){
                  	if((i+j) <dataTobeDisplayed.length ){
                  		var flxNewsContainer = this.createNewsContainerWithId(this.prevId+"_"+i+"_"+j,dataTobeDisplayed[i+j]);
                  		flxNewsRowTemp.add(flxNewsContainer);
                      	if(j!==0){
                          flxNewsContainer.left = "2%";
                        }
                    }
                }
                this.view.flxNewsWraper.add(flxNewsRowTemp);
            }
      },
  	  createNewsRowwithID:function(idTobeUsed){
        var flxNewsRow = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxNewsRow_"+idTobeUsed,
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewsRow.setDefaultUnit(kony.flex.DP);
        
        return flxNewsRow;
      },
  	  createNewsContainerWithId:function(idToBeUsed,dataToShow){
        
        var flxNewsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96%",
                "id": "flxNewsContainer_"+idToBeUsed,
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNFLXFFFROUND",
                "top": "2%",
                "width": "32%",
                "zIndex": 20
            }, {}, {});
            flxNewsContainer.setDefaultUnit(kony.flex.DP);
        	flxNewsContainer.onClick = function(){
              this.URL_NEWSITEM = dataToShow.link;
              var urlConf = {URL: dataToShow.link, 
                              requestMethod:constants.BROWSER_REQUEST_METHOD_GET, 
                              headers: {}};
              this.view.brwNewsDetails.requestURLConfig = urlConf;
              this.view.flxNewsDetails.isVisible = true;
              //kony.application.openURL(dataToShow.link);
            }.bind(this);
        
        var imgNewsThumb = new kony.ui.Image2({
                "centerX": "50%",
                "height": "25%",
                "id": "imgNewsThumb"+idToBeUsed,
                "isVisible": true,
                "skin": "slImage",
                "src": dataToShow.imgSrc,
                "top": "4%",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNewsTitle = new kony.ui.Label({
                "height": "25%",
                "id": "lblNewsTitle"+idToBeUsed,
                "isVisible": true,
                "left": "8%",
                "skin": "SKNTABNEWSTITLE",
                "text": dataToShow.title,
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "32%",
                "width": "84%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNewsDetail = new kony.ui.Label({
                "height": "38%",
                "id": "lblNewsDetail"+idToBeUsed,
                "isVisible": true,
                "left": "8%",
                "skin": "SKNTABNEWSDETAILS",
                "text": dataToShow.shortDesc,
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "56%",
                "width": "84%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
        
        flxNewsContainer.add(imgNewsThumb,lblNewsTitle,lblNewsDetail);
        
        return flxNewsContainer;
      },
      setCurrentDate : function(){
        var next7Dates = this.get7Dates();

        for(var i=0;i<7;i++){
          this.view["lblDate"+(i+1)].text = next7Dates[i];
        }
      },
      get7Dates: function () {
        var day_list = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var  months =["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        var next7Days = [];
        var date = new Date();

        for (var i = 0; i <= 7; i++) {
          var currentDate = new Date();
          currentDate.setDate(date.getDate() + i);
          //next7Days.push(day_list[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()]);
          next7Days.push(day_list[currentDate.getDay()]);
        }
        return next7Days;
      },
        getLocation : function(){
        showLoadingScreen("Fetching weather..");
        try{
        var positionoptions={};
             positionoptions.enableHighAccuracy=true;
             positionoptions.timeout=10000;
             positionoptions.maximumAge=10000;
             kony.location.getCurrentPosition(this.geoSuccessCallBack.bind(this), this.geoErrorCallBack.bind(this));
      }
      catch(exception){
        dismissLoadingScreen();
        alert("enable location access!!!");
        alert("Exception is ::"+exception.message);
      }
      },
        geoSuccessCallBack : function(position){
          var lat =position.coords.latitude;
          var lon=position.coords.longitude;
          if(lat===null)
            lat=0;
          if(lon===null)
            lon=0;
          kony.print("latitutde:-"+lat);
          kony.print("longitude:-"+lon);
          kony.application.dismissLoadingScreen();
          this.getWeatherForecast(lat,lon);
        },
          geoErrorCallBack : function(error){
            dismissLoadingScreen();
            // this.view.flxLocation.setVisibility(true);
            kony.print("Error in getting Location"+JSON.stringify(error));
          },
          getWeatherForecast : function(lat,lon){    
            try{
              var integretionObj = KNYMobileFabric.getIntegrationService(configObject.services.local.SERVICE_NAME);
              integretionObj.invokeOperation(configObject.services.local.OPERATION_NAME,{},{"lat":lat.toString(),"lon":lon.toString()}, this.getWeatherSuccessCallback.bind(this), this.getWeatherFailureCallback.bind(this));
            }catch(excp){
              dismissLoadingScreen();
              kony.print(JSON.stringify(excp));
            }
          },
          getWeatherSuccessCallback : function(response){
            dismissLoadingScreen();
            kony.print("Success fetching Weather"+JSON.stringify(response));
            this.processForecastData(response);
            this.processResponse(response);
          },
          getWeatherFailureCallback : function(error){
            dismissLoadingScreen();
            if(error.news_list.length>0){
              this.processResponse(error);
            }
            kony.print("Error in fetching weather"+JSON.stringify(error));
          },
  		  processForecastData : function(response){
            var date = new Date();
            var weekDay=date.getDay();
            var processedForecastData = [];
            if(response!==null &&
               response.forcecast!== undefined && 
               response.forcecast[0] !== undefined &&
               response.forcecast[0].list !==undefined && 
               response.forcecast[0].list.length>=4){
              for(var i=0;i<7;i++){
                var dayData = {};
                var dayDataToProcess = response.forcecast[0].list[i];
                dayData.day = days[(weekDay+i)%7];
                dayData.icon = "http://openweathermap.org/img/w/"+dayDataToProcess.weather[0].icon+".png";
                dayData.minTemp = ((dayDataToProcess.temp.min-273.5).toFixed())+"°C";
                dayData.maxTemp = ((dayDataToProcess.temp.max-273.5).toFixed())+"°C";
                processedForecastData.push(dayData);
              }
              this.setForeCastData(processedForecastData);
            }else{
              kony.print("ForeCast Data is not Proper For Processing");
            }
          },
     setForeCastData:function(foreCastData){
        for(var i=0;i<foreCastData.length;i++){
          this.view["lblTemp"+(i+1)].text = foreCastData[i].maxTemp;
          this.view["imgTemp"+(i+1)].src = foreCastData[i].icon;
        }
      },
  	  knowledgeFrameworkOnclick:function(){
        this.view.flxKnowledgeFramework.isVisible = !this.view.flxKnowledgeFramework.isVisible ;
      },
  	  changeNewsDetailsVisibleState:function(){
  			this.view.flxNewsDetails.isVisible = !this.view.flxNewsDetails.isVisible;
    //    	this.view.brwNewsDetails.htmlString = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'><style>.loader {border: 16px solid #f3f3f3;border-radius: 50%;border-top: 16px solid #3498db;width: 120px;height: 120px;-webkit-animation: spin 2s linear infinite; /* Safari */animation: spin 2s linear infinite;}/* Safari */@-webkit-keyframes spin {0% { -webkit-transform: rotate(0deg); }100% { -webkit-transform: rotate(360deg); }}@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}</style></head><body><center><div class='loader'></div></center></body></html>";
	  },
  	  openNewsItemInBrowser:function(){
        if(this.URL_NEWSITEM!==null){
    		kony.application.openURL(this.URL_NEWSITEM);    
        }
      },
  	  orientationChangedCallback:function(eveObject){
        	var curntOrientation  = kony.os.getDeviceCurrentOrientation();
    		if(curntOrientation === this.DEVICE_ORIENTATION_POTRAIT){
              		//alert("in potrait mode");
              		this.view.flxHam.left = "-40%";
              		this.view.flxHam.width = "40%";
              
              		this.view.imgHamMenu.isVisible = true;
              
              		this.view.flxBody.left = "0%";
              		this.view.flxBody.width = "100%";
              
              		this.view.flxHam.zIndex = 30;		
              
            	}else if(curntOrientation === this.DEVICE_ORIENTATION_LANDSCAPE){
              		//alert("in landscape mode");
                  	this.view.flxHam.left = "0%";
                    this.view.flxHam.width = "30%";
                  
                  	this.view.imgHamMenu.isVisible = false;
                  	this.view.imgHamMenu.left = "1%";
                  	this.view.flxBlur.isVisible = false;
                  	this.view.lblBodyTitle.isVisible = true;
                  
                  	this.view.flxBody.left = "30%";
                  	this.view.flxBody.width = "70%";
                  
                  	this.view.flxHam.zIndex = 1;
                  
            	}
        	this.view.forceLayout();
		},
  		showHideHamMenu:function(){          	
          	if( this.view.flxHam.left === "0%" ){
              
               this.view.flxHam.left = "-40%";
               this.view.flxBlur.isVisible = false;
               this.view.imgHamMenu.left = "1%";
               this.view.lblBodyTitle.isVisible = true;
              
            }else{
              
              this.view.flxHam.left = "0%";
              this.view.flxBlur.isVisible = true;
              this.view.imgHamMenu.left = "41%";
              this.view.lblBodyTitle.isVisible = false;
              
            }
        }
 });