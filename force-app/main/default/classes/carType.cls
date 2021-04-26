@RestResource(urlMapping='/v1/carTypes/')
global class carType {
    @httpGet
    global static Car__c getCarType() {
        String carId;
        Car__c car = new Car__c();
        Map<String,String> mapParams = RestContext.request.params;
        carId = mapParams.get('Id');
        car = [Select Id,Name from Car__c where Id =: carId];
        return car;
    }
    @httpPost
    global static CarType__c createCarType(carTypeInfo carTypeInformation){
      
        CarType__c carType = carTypeInformation.carTypeInfo;
        insert carType;
        return carType;
    }
    
    global class carTypeInfo{
        @TestVisible CarType__c carTypeInfo {get; set;}
    }

}