({
	doInit : function(component, event, helper) {
		helper.onSearch(component,helper);	
	},
    
    // aura method called from parent component
    doSearch : function(component, event, helper){
     	 //Get all the arguments passed to the aura method
        var params = event.getParam('arguments');
        if(params){
            //getting carTypeId from the argument list and setting the component argument value
            component.set("v.carTypeId",params.am_carTypeId);
        }
        helper.onSearch(component,helper);
    },
    
    //Finction to get the selected car ID
    onCarSelect : function(component, event, helper){
        helper.onCarSelectHelper(component, event, helper);
    }
    
})