({
	onCarClickHelper : function(component, event, helper) {
		var car = component.get("v.attCar")
        /*
         * Create carSelect event and pass required carID field
         * Fire the event so that the parent carSearchResult
         * can handle the event
         */
        
        var evt = component.getEvent("onCarSelect");
        evt.setParams({
            "carId" : car.Id
        });
        evt.fire();
        
            /*
         * Now firing application Event to 
         * notify other components when a car is selected.
         * Other components can get the car attribute value.
         * and handle the event accordingly
         */
        
        var appEvent = $A.get("e.c:CarSelectedApplicationEvent")
        if(appEvent){
            appEvent.setParams({
                "carSelectedAppEvtAttr" : car,
            });
            appEvent.fire();
        }else{
            
        }
    
	}
})