({
	doInitHelper : function(component, event, helper) {
        component.find("service").getNewRecord(
        	"Car_Experience__c",
            null,
            false,
            $A.getCallback(function(){
                var rec = component.get("v.carExperience");
                var error = component.get("v.recordError");
                var carAddExp = component.get("v.attrCarAddExp");
                if(error || (rec === null)){
                    console.log("Error intialising record template" + error);
                } else {
                    component.set("v.carExperience.Car__c",carAddExp.Id);
                    console.log("carExpId:" + carAddExp.Id);
                } 
            })
            
        );
        		
	},
    
    /* 
     * This function is called when the experience is saved
     */
    onSaveHelper : function(component, event, helper){
        component.set("v.carExperience.Car__c", component.get("v.attrCarAddExp.Id"));
        component.find("service").saveRecord($A.getCallback(function(saveResult) {
            console.log("Save state " + saveResult.state);
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                helper.showToast(component, event, helper, {
                    "title" : "Record Saved!",
                    "type" : "success",
                    "message" : "Record successfully saved"
                });
                var resultsToast = $A.get("e.force:showToast");
                if(saveResult){
                    resultsToast.setParams({
                        "title":"Saved",
                        "message": "Car Expereince Added"
                    });
                    resultsToast.fire();
                }
                else{
                    alert('Car Experience Added');
                }
                helper.doInitHelper(component, event, helper);
            }else if(saveResult.state === "INCOMPLETE"){
                helper.showToast(component,event,helper,{
                    "title" : "ERROR!",
                    "type" : "error",
                    "message" : "Device does not support Draft"
                });
            }else if(saveResult.state === "ERROR"){
                helper.showToast(component,event,helper,{
                    "title" : "ERROR!",
                    "type" : "error",
                    "message" : "Problem saving record"
                });
            
        	} else {
                helper.showToast(component,event,helper,{
                    "title" : "ERROR!",
                    "type" : "error",
                    "message" : "Problem saving record"
                });
            
        	}
        }));
    },
    
    onRecordUpdatedHelper : function(component,event,helper){
    	var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED"){
            //get the fields that changed for this record
            var changedFields = eventParams.changedFields;
            helper.showToast(component,event,helper,{
                "title" : "saved",
                "type" : "error",
                "message" : "The record was updated."
            });
        } else if(eventParams.changeType === "LOADED"){
            //record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED"){
            //record is deleted and removed from cache
        } else if(eventParams.changeType === "ERROR"){
            //there's an error while loading, saving or deleting the record
        }
    },
     
})