({
	helperDoSearchCarFormSubmit : function(component, event, helper) {
		//fetching carTypeID attribute value from event
		var varCarTypeID = event.getParam("carTypeId");
        console.log('Selected car type ID: ' + varCarTypeID);
        var carSearchResultComp = component.find("carSearchResult");
        
        //calling aura method in the carSearchResult child component and passing selected carTypeId
        var carSearchAMresult = carSearchResultComp.searchCars(varCarTypeID);
        console.log("aura method result:" + carSearchAMresult);
        
	}
})