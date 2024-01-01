import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import InstaLogoPng from '@salesforce/resourceUrl/InstaLogoPng';
import linkedinLogoPng from '@salesforce/resourceUrl/linkedinLogoPng';

export default class agriAboutUsPage extends NavigationMixin(LightningElement) {


    @track InstaLogoPng = InstaLogoPng;
    @track linkedinLogoPng = linkedinLogoPng;


    onclickofinsta() {
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "https://www.salesforce.com/trailblazer/mdhore1"
            }
        });
    }

    onclickoflinkedin() {
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "https://www.linkedin.com/in/mihir-dhore"
            }
        });
    }
}