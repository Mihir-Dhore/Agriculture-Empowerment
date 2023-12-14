public without Sharing class AEInsertViews {
    @AuraEnabled
    public static String insertViews(String view){
        List<Market_Trend__c> marketList = [Select Id,View__c From Market_Trend__c];

            Market_Trend__c market  = new Market_Trend__c();
            market.View__c = view;
            market.Submission_Date__c = System.Today();
            insert market;
            return 'View Added Succesfully';
    }
    
    @AuraEnabled
    public static List<Market_Trend__c> showViews(){
        List<Market_Trend__c> viewList = [Select View__c,Submission_Date__c From Market_Trend__c];
        return viewList;
    }
    
}