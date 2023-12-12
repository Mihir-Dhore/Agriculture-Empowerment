import { LightningElement, api, track,wire } from 'lwc';
import SMS from '@salesforce/resourceUrl/SMS';
import { NavigationMixin } from 'lightning/navigation';
export default class agriHeaderPage extends NavigationMixin (LightningElement) {

    SMS = SMS;
    toggleMenu(event) {
        console.log('toggleMenu called');
        const menuItems = this.template.querySelector('.menu-items');
        if (menuItems) {
            menuItems.classList.toggle('show');
        }
    }
        

    handleHomeClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/"
            }
        });
    }

    handleTraingSupportClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/training-and-support"
            }
        });
 
    }

    handlemyMaintainanceReqClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/sms/s/maintenance-request-page"
            }
        });
 
    }
     handleUtility(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/sms/s/utility-page"
            }
        });
 
     }

     handlefeedbackClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/sms/s/feedback-page"
            }
        });
 
     }


}