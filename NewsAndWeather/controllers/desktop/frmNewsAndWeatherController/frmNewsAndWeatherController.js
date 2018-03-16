define({ 
  		prevId:1,
  		curntCategory:"h",
  		curntScreenWidth:1360,
  		curntNews:[],
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
  		form1PresShow:function(){
          	for(var i=1;i<=10;i++){
              this.view["btnCat"+i].cursorType = "pointer";
            }
          	this.view.flxMenu.cursorType = "pointer";
          	this.view.flxCloseKF.cursorType = "pointer";
          	this.view.flxFloating.cursorType = "pointer";
        },
  		form1PostShow:function(){
          	this.view.KnowledgeFrameworkDW.setData(this.KF_DATA);
          	this.view.btnCat1.onClick(this.view.btnCat1);
 			this.view.flxTopNews.cursorType ="pointer";
            this.view.onResize = this.screenResized;
		},
  		screenResized:function(eventObject,screenWidth){
          	
          kony.print("---$$$ on resize triggeed!!!! $$$ --- new width is :"+screenWidth);
          	this.curntScreenWidth = screenWidth;
          	if(screenWidth>0 && screenWidth<=685){
              	  this.showProcessedDataInSegment(this.curntNews, 1);
            	}else if(screenWidth>685 && screenWidth<=1015){
              		  this.showProcessedDataInSegment(this.curntNews, 2);
            		 }else if(screenWidth>1015 && screenWidth<=1340){
                  	 	  this.showProcessedDataInSegment(this.curntNews, 3);
                		}else{
                            this.showProcessedDataInSegment(this.curntNews, 4);
                        }
          
          		if(screenWidth<=1160){
                  		this.view.flxCategories.isVisible = false;
                  		this.view.flxHamCats.isVisible = true;
                		}else{
                          		this.view.flxCategories.isVisible = true;
                  				this.view.flxHamCats.isVisible = false;
                        	}
          	this.view.forceLayout();
        },
		showHideHamMenu:function(){
          if(this.view.flxHamMenu.isVisible){
            this.view.flxHamMenu.isVisible=false;
          }else{
            this.view.flxHamMenu.isVisible=true;
          }
          this.view.forceLayout();
        },
  		setCategorySelected:function(id){
          	//showLoadingScreen("Loading News......");
            id = id.split("Cat")[1];
          	if(id !== this.prevId){
              this.view["btnCat"+this.prevId].skin = "SKNBTNCAT";
              this.view["btnCat"+id].skin = "SKNBTNCATACTIVE";
  				this.view.flxWeatherNewsWrapper.isVisible=false;
              this.prevId = id;
            }
          this.view.flxHamMenu.isVisible = false;
          this.getSelectedCategoryNews(Number(id));
          	
        },
  		getSelectedCategoryNews:function(id)
        {
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
                      return;
                    default:
                      alert("Invalid id");
                      category = null;
     				  return;
                  }
          this.curntCategory = category;
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
              	//alert("fetch success!!");
                this.processResponse(response);
              },
  			getNewsFailureCallback: function(error) {
              dismissLoadingScreen();
              alert("Failed to Fetch News" + JSON.stringify(error));
            },
  			processResponse:function(response){
              	var processedData = [];
                var responseLength=response.news_list.length;
              
              var topData = this.getImageAndDesc(response.news_list[1].news_item.description);
              if(response.news_list[1].news_item.title !== undefined &&  response.news_list[1].news_item.link!== undefined){
                    topData.title =response.news_list[1].news_item.title;//.substring(0, 60) + "...";
                    topData.link = response.news_list[1].news_item.link;
                    topData.shortDesc = topData.shortDesc;//.substring(0,120) + "...";
                    processedData.push(topData);
                  }else{
                    kony.print("There is no title and link");
                    //processedData.push(topData);
                  }
              
                for (var i = 2; i < responseLength; i++) {
                  var rowData = {};
                  rowData = this.getImageAndDesc(response.news_list[i].news_item.description);
                  
                  if(response.news_list[i].news_item.title !== undefined &&  response.news_list[i].news_item.link!== undefined){// && rowData.shortDesc !== undefined){
                    rowData.title =response.news_list[i].news_item.title.substring(0, 60) + "...";
                    rowData.link = response.news_list[i].news_item.link;
                    rowData.shortDesc = rowData.shortDesc.substring(0,120) + "...";
                    processedData.push(rowData);
                  }else{
                    kony.print("There is no title and link");
                  }
                }
              
              	this.curntNews = processedData;
                //this.showProcessedDataInSegment(processedData,4);
              	this.screenResized(this.view, this.curntScreenWidth);
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
                showProcessedDataInSegment:function(dataToBeDisplayed,cardsPerRow){
                  //  alert("NEWS :"+JSON.stringify(dataToBeDisplayed));
                  	if(dataToBeDisplayed.length===undefined || dataToBeDisplayed.length===0){
                      kony.print("there is no data to show!!!!!!!");
                       return;
                    }
                  
					var topStory = dataToBeDisplayed[0];
                  
                  	this.view.lblTopStoryTitle.text = topStory.title;
                  	topStory.shortDesc = topStory.shortDesc.substring(0,topStory.shortDesc.length-3);
                  	this.view.lblTopStoryNews.text = topStory.shortDesc.substring(0, topStory.shortDesc.length / (4 - (cardsPerRow - 1) ) ) + "..." ;
                  	this.view.imgTopStory.src = topStory.imgSrc;
					this.view.flxTopNews.onTouchEnd = function(){
                      kony.application.openURL(topStory.link);
                    };
                  
                    this.view.lblTopOthNT.text = topStory.title;
                    this.view.lblTopOthND.text = topStory.shortDesc+"...";
                    this.view.imgTopOthNews.src = topStory.imgSrc;
                    this.view.flxTopOthrNews.onTouchEnd = function(){
                        kony.application.openURL(topStory.link);
                      };
                  
                  if(cardsPerRow === 1){
                    this.view.flxTopOthrNews.isVisible = true;
                    this.view.flxTopNews.isVisible = false;
                  }else{
                    this.view.flxTopOthrNews.isVisible = false;
                    this.view.flxTopNews.isVisible = true;
                  }
                  
                  	this.view.flxOtherNews.removeAll();
                	if(dataToBeDisplayed.length===1){
                      	return;
                    }
                  	//this.view.flxNewsWraper.removeAll();
                  	for(var i=1;i<dataToBeDisplayed.length;i+=cardsPerRow){
                      
                      var flxOtherNewsRow = new kony.ui.FlexContainer({
                        "autogrowMode": kony.flex.AUTOGROW_NONE,
                        "clipBounds": true,
                        "height": "300px",
                        "id": "flxOtherNewsRow"+i+"_"+this.curntCategory,
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        //"left": "0px",
                        "skin": "slFbox",
                        "top": "10px",
                        "centerX":"50%",
                        "width": kony.flex.USE_PREFERRED_SIZE,
                        "zIndex": 1
                    }, {}, {});
                      
                      for(var j=0;j<cardsPerRow;j++){
                       	var flxOthrNews = this.createOtherNewsFlex(i+"_"+j+"_"+this.curntCategory, dataToBeDisplayed[i+j]);
                        if(flxOthrNews!==null){
                          	  if(j!==0){
                                flxOthrNews.left="10px";
                              }
                        	flxOtherNewsRow.add(flxOthrNews);
                        }
                      }
                      flxOtherNewsRow.width = (270 + (280 * (cardsPerRow - 1))) +"px";
                      flxOtherNewsRow.centerX = "50%";
                      this.view.flxOtherNews.add(flxOtherNewsRow); 
                      
                    }
                  	this.view.flxTopNews.width =this.view[this.view.flxOtherNews.children[0]].width;
                  	this.view.flxWeatherNewsWrapper.width = this.view.flxTopNews.width;
                  	var noOfWrappers = this.view.flxOtherNews.children.length;
                  	for(var k=0;k<noOfWrappers;k++){
                      var newsWrapper = this.view.flxOtherNews.children[k];
                      var newsItemsInRow = this.view[newsWrapper].children.length;
                      	for(var nk=0;nk<newsItemsInRow;nk++){
                          var newsItemRef = this.view[newsWrapper].children[nk];
                          this.view[newsItemRef].hoverSkin = "SKNNEWSHOVER";
                        }
                    }
                  	this.view.forceLayout();
                },	
  				createOtherNewsFlex:function(flxIdPostFix,newsData){
  					//	alert("flx for :"+JSON.stringify(newsData));
						if(newsData===null || newsData===undefined){
                          return null;
                        }
                       var flxOtherNewsWrap = new kony.ui.FlexContainer({
                            //"autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                         	"height":"100%",
                            "clipBounds": true,
                            "id": "flxOtherNewsWrap"+flxIdPostFix,
                            "isVisible": true,
                            "layoutType": kony.flex.FLOW_VERTICAL,
                         	"right":"0px",
                         	"left":"0px",
                            "skin": "SKNFLXFFFROUND",
                            "top": "0px",
                            "width": "270px",
                            "zIndex": 1
                        }, {}, {"cursorType":"pointer","hoverSkin":"SKNNEWSHOVER"});
                  		
                        flxOtherNewsWrap.setDefaultUnit(kony.flex.DP);
                  		flxOtherNewsWrap.onclick = function(){
                          kony.application.openURL(newsData.link);
                        };
                        var imgOtherNews = new kony.ui.Image2({
                            "centerX": "50%",
//                            "height": "150dp",
                            "id": "imgOtherNews"+flxIdPostFix,
                            "isVisible": true,
                            "left": "57dp",
                            "skin": "slImage",
                            "src": newsData.imgSrc,
                            "top": "7px",
                            "width": "40%",
                            "zIndex": 1
                        }, {
                            //"imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                            "padding": [0, 0, 0, 0],
                            "paddingInPixel": false
                        }, {});
                        var lblOtherNewsTitle = new kony.ui.Label({
                            "id": "lblOtherNewsTitle"+flxIdPostFix,
                            "isVisible": true,
                            "left": "4%",
                            "skin": "SKNTOPSTORYTITLE",
                            "text": newsData.title,
                            "top": "4dp",
                          	"height":"70px",
                            "width": "92%",
                            "zIndex": 1
                        }, {
                            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                            "padding": [0, 0, 0, 0],
                            "paddingInPixel": false
                        }, {});
                        var lblOtherNewsDetails = new kony.ui.Label({
                            "id": "lblOtherNewsDetails"+flxIdPostFix,
                            "isVisible": true,
                            "left": "4%",
                            "skin": "SKNLBLNEWSDETAILSTOP",
                            "text": newsData.shortDesc,
                            "top": "4dp",
                          	"height":"100px",
                            "width": "92%",
                            "zIndex": 1
                        }, {
                            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                            "padding": [0, 0, 0, 2],
                            "paddingInPixel": false
                        }, {});
                        flxOtherNewsWrap.add(imgOtherNews, lblOtherNewsTitle, lblOtherNewsDetails);
                  		flxOtherNewsWrap.hoverSkin = "SKNNEWSHOVER";
                  		return flxOtherNewsWrap;
				},
  				setCurrentDate : function(){
                  var next7Dates = this.get7Dates();
                  
                  for(var i=0;i<7;i++){
                    this.view["lblDay"+(i+1)].text = next7Dates[i];
                  }                  
                  this.view.flxWeatherNewsWrapper.isVisible = true;
                  //this.view.forceLayout();
                },
                get7Dates: function () {
                  var day_list = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
                  var  months =["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                  
                  var next7Days = [];
                  var date = new Date();
                  
                  for (var i = 0; i <= 7; i++) {
                          var currentDate = new Date();
                          currentDate.setDate(date.getDate() + i);
                          next7Days.push(day_list[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()]);
                      }
                  return next7Days;
                },
                getLocation : function(){
              //    showLoadingScreen("Fetching weather..");
                  try{
                    var positionoptions={};
                    positionoptions.enableHighAccuracy=true;
                    positionoptions.timeout=10000;
                    positionoptions.maximumAge=10000;
                    kony.location.getCurrentPosition(this.geoSuccessCallBack.bind(this), this.geoErrorCallBack.bind(this));
                  }
                  catch(exception){
                   // this.view.flxLocation.setVisibility(true);
					alert("enable location access!!!");
                    dismissLoadingScreen();
                    alert("Exception is ::"+exception.message);
                  }
                },
  				geoSuccessCallBack : function(position){
                   // this.view.flxLocation.setVisibility(false);
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
                      var integretionObj = KNYMobileFabric.getIntegrationService(configObject.services.local.SERVICE_NAME);//Accounts is service name and accountsClient is Accounts integration service instance
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
                  closeKnowledgeFramework:function(){
						this.view.flxKnowledgeFramework.isVisible = false;
                    	this.view.forceLayout();
                  }
  					
});