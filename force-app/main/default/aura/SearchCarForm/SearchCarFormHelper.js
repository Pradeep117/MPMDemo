({
    helperdoInit : function(component, event, helper) {
        var createCarTypeRec = $A.get("e.force:createRecord");
        
        if(createCarTypeRec){
            component.set("v.showNew", true);
        } else {
            component.set("v.showNew", false);
        }
       
      /* var action = component.get("c.getCarTypes"); 
       action.setCallback(this,function(Data){
        	var state = Data.getState();
            if(state === "SUCCESS"){
                console.log("Good");
                component.set("v.lstCarType", Data.getReturnValue());
            } else if(state === "Error"){
                alert("Unknown Error");
            }
        });	
        $A.enqueueAction(action);  */
        
    helper.CallServer(component,"c.getCarTypes",function(response){
            					component.set("v.lstCarType",response);
        						}); 
	},
    
    helperhandleRender : function(component, event, helper) {
		// alert("Render Completed"); 
	},
    
	    
    helpercarTypeOnChange : function(component, event, helper) {
    	var carTypeId = component.find("carTypeList").get("v.value"); 
        component.find("carTypeList").set("v.value",carTypeId);
                
    },
    
    helpercreateCarTypeRecord : function(component, event, helper) {
    	var createCarTypeRecord = $A.get("e.force:createRecord");
        
        createCarTypeRecord.setParams({
            "entityAPIName": "CarType__c"
        });
       // console.log("before fire");
        createCarTypeRecord.fire();
	}
})