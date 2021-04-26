public with sharing class carSearchController {
    @AuraEnabled
    public static List<Car__c> getCars(String carTypeId){
        //To test rollback
        //If all type selected in UI
        if(carTypeId == null && carTypeId.equalsIgnoreCase('')){
           /* return [SELECT id, Name, Picture__c, Contact__r.Name, Geolocation_latitude__s, Geolocation_longitude__s
                   FROM Car__c
                   WHERE Available_For_Rent__C = true]; */
              return [SELECT Id, Name, Picture__c, Contact__r.Name
                   FROM Car__c
                   WHERE Available_For_Rent__C = true];
        } else {
           /* return [SELECT id, Name, Picture__c, Contact__r.Name, Geolocation_latitude__s, Geolocation_longitude__s
                   FROM Car__c
                   WHERE Car_Type__c = :carTypeId
                   AND Available_For_Rent__C = true];   */
            
            		List<Car__c> carData = [SELECT Id, Name, Picture__c, Contact__r.Name
                   FROM Car__c
                   WHERE CarType__c = :carTypeId
                   AND Available_For_Rent__C = true];
                   
                 /*  return [SELECT id, Name, Picture__c, Contact__r.Name
                   FROM Car__c
                   WHERE CarType__c = :carTypeId
                   AND Available_For_Rent__C = true];*/
                        
            System.debug('Apex Car Type id' + carData);
            return carData;

        }
    }

}