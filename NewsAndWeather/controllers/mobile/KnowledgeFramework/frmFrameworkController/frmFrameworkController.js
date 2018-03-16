define({ 

  onPreshow : function(){
    try{
      var data = [
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
    ];
    this.view.KnowledgeFramework1.setData(data);
    }catch(err){
      alert("error");
    }
    
  }
 });