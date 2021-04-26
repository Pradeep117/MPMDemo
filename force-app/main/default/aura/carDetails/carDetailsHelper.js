({
	doInitHelper : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            component.set("v.showCardAction", true);
        }
        else{
            component.set("v.showCardAction", false);
        }
        console.log("Inside helper testing" + navEvt);
	},
    
    onFullDetailsHelper : function(component, event, helper){
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams({
                "recordId" : component.get("v.carDetails").Id,
                "slideDevName" : "detail"
            });
            navEvt.fire();
            console.log("'e.force:navigateToObject' event is supported in this context");
        }else{
            console.log("'e.force:navigateToObject' event is not supported in this context");
           /* showToast(component,{
                "title" : "Error",
                "type" : "error",
                "message" : "Event not supported"
            });*/
        }
    }
   
})