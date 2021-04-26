({
	onCarSelectedHelper : function(component, event) {
		component.set("v.Id",event.getParam("carSelectedAppEvtAttr").Id);
        console.log("car id-- " + event.getParam("carSelectedAppEvtAttr").Id );
        component.find("service").reloadRecord();
	}
})