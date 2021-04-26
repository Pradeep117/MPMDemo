public with sharing class carTypeSearch {
    
    @AuraEnabled
    public static List<CarType__c> getCarTypes(){
       return [Select Id, Name from CarType__c];
               
    }

}