({
    doInit : function(component, event, helper) {
		helper.helperdoInit(component, event, helper);
        
    },
    
    handleRender : function(component, event, helper) {
		helper.helperhandleRender(component, event, helper);
	},
    
	searchOnClick : function(component, event, helper) {
		var varSearchCarFormSubmit = component.getEvent("searchCarFormSubmit");
        varSearchCarFormSubmit.setParams({
            //get selected cartype id from picklist
            //and pass to event attribute
            "carTypeId" : component.find("carTypeList").get("v.value")
 		});
        varSearchCarFormSubmit.fire();
        console.log('Event fired');
 	},
     
    
    carTypeOnChange : function(component, event, helper) {
        helper.helpercarTypeOnChange(component, event, helper);
    },
    
    createCarTypeRecord : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "CarType__c"
        });
        createRecordEvent.fire();
        
       // helper.helpercreateCarTypeRecord(component, event, helper);
    }
})