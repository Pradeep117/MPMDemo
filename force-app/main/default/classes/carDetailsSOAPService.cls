global class carDetailsSOAPService{
    
    global class carDetailsWrapper{
        webservice String Name;
        webservice String CarType;
        webservice Boolean AvailableForRent;
        webservice Integer BuildYear;
        webservice String Contact;
        webservice String Description;
        webservice String CarId;
        
    }
    webservice static carDetailsWrapper addCarDetails(carDetailsWrapper carDetails){
        Car__c car = new Car__c();
       
        car.Name = carDetails.Name;
        car.CarType__c = carDetails.CarType;
        car.Available_For_rent__c = carDetails.AvailableForRent;
        car.Build_Year__c = carDetails.BuildYear;
        car.Contact__c = carDetails.Contact;
        car.Description__c = carDetails.Description;
       
        insert car;
        carDetails.CarId = car.Id;
        return carDetails;
      
    }
}