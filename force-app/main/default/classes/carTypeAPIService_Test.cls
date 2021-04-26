@isTest
public class carTypeAPIService_Test {
    public static testMethod void unitTest_PostMethod(){
        RestRequest request = new RestRequest();
        request.requestURI = '/services/apexrest/v1/carTypes/';
        request.httpMethod = 'POST';
        
        request.addHeader('Content-Type', 'application/json');
        request.addHeader('Accept', 'application/json');
        
        carType.carTypeInfo carTypInfo = new carType.carTypeInfo();
        carTypInfo.carTypeInfo = new CarType__c(Name='Unit Test Car Type');
        String requestBody = JSON.serialize(carTypInfo);
        
        request.requestBody = Blob.valueOf(requestBody);
        
        Test.startTest();
        	CarType__c carTyp = carType.createCarType(carTypInfo);
        	System.assertEquals('Unit Test Car Type', carTyp.Name);
        	System.assertNotEquals(null, carTyp.Id);
        Test.stopTest();
    }
    @isTest
    public static void unitTest_getMethod(){
        Id testCarTypId = createCarType();
        RestRequest request = new RestRequest();
        request.requestURI = '/services/apexrest/v1/carTypes/';
        request.httpMethod = 'GET';
        
        request.addHeader('Content-Type', 'application/json');
        request.addHeader('Accept', 'application/json');
        
        request.addParameter('Id', testCarTypId);
        
        RestContext.request = request;
        
        Test.startTest();
        	Car__c newTestCar = carType.getCarType();
        	System.assertEquals('Test Car Type', newTestCar.Name);
        	System.assertNotEquals('null', newTestCar.Id);
        Test.stopTest();
        	
    }
    
    public static Id createCarType(){
        Car__c testCar = new Car__c();
        testCar.Name = 'Test Car Type';
        insert testCar;
        return testCar.Id;
    }

}