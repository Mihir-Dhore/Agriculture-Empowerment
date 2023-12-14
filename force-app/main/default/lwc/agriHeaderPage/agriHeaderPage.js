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

    handleMarketTrendsClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/market-trends-page"
            }
        });
 
    }
    handleSeedsAndFertilizerClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/seeds-and-fertilizers-page"
            }
        });
 
     }

     handleFeedbackClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/feedack-page"
            }
        });
 
     }
     handleNewAndTipsClick(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
               url: "thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/new-and-tips-page"
            }
        });
     }

}