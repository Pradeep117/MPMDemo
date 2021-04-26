({
	doInit : function(component, event, helper) {
		console.log("Calling Helper");
        helper.doInitHelper(component, event, helper);
        
	},
    
    onFullDetails : function(component, event, helper){
        helper.onFullDetailsHelper(component, event, helper);
    }
})