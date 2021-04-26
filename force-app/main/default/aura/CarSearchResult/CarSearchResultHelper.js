({
	onSearch : function(component,helper) {
        helper.CallServer(component,"c.getCars",
                          function(response){
                            if(response.length > 0){
            					component.set("v.cars", response);
            					component.set("v.carFound", true);
        					} else{
            					component.set("v.carFound", false);
        					}
                          },{
                              carTypeId : component.get("v.carTypeId")
                          });
        
        
	},
    
    onCarSelectHelper : function(component, event, helper){
     	//getting the attribute value from the event
     	component.set("v.selectedCarId",event.getParam("carId"));
    }
    
})