@isTest
public class carSearchController_Test {

	static testMethod void insertCar()
    {
        // 20200714 comment added
        Contact objContact = new Contact();
        objContact.LastName = 'Popular';
        insert objContact;
        
        CarType__c objCarType = new CarType__c();
        objCarType.Name = 'Sedan';
        Insert objCarType;
        
        Car__c objCar = new Car__c();
        objCar.Name = 'Maruti';
        objCar.Contact__c = objContact.Id;
        objCar.CarType__c = objCarType.Id;
        insert objCar;
        
        carSearchController.getCars(objCarType.Id);
        carTypeSearch.getCarTypes(); 
  
        
        
    }
        

}