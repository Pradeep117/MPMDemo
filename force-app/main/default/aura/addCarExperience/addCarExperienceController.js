({
	doInit : function(component, event, helper) {
        helper.doInitHelper(component, event, helper);
	},
    
    onSave : function(component, event, helper){
        console.log("Calling car Experience onSave Helper");
       helper.onSaveHelper(component, event, helper);
    },
    onRecordUpdated : function(component, event, helper){
        helper.onRecordUpdatedHelper(component, event, helper);
    },
})