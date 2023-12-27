import { LightningElement,track } from 'lwc';
import FetchAllNewsData from '@salesforce/apex/AgricultureEmpowerment.FetchAllNewsData';
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';

export default class AgriNewsAndTips extends LightningElement {

        //Convert to Hindi - Start
        @track selectedLanguage = 'English'; // Default language
        @track languageOptions = [
            { label: 'English', value: 'English' },
            { label: 'Hindi', value: 'Hindi' },
        ];
    
        @track showHindiData = false;
        @track storeHindiData;
        @track showEnglishData = true;
        @track language;
        @track labelName = 'NewsAndTips';
        handleLanguageChange(event) {
            this.selectedLanguage = event.detail.value;
            console.log('selected vAlue', this.selectedLanguage);
            if(this.selectedLanguage==='Hindi')
            {    
                this.language = 'hi'
                this.showHindiData = true;
                this.showEnglishData = false;
            }else {
                this.language = 'en'
                this.showEnglishData = true;
                this.showHindiData = false;
    
            }
            this.loadTranslatedLabels();
        }
        loadTranslatedLabels() {
            if (this.selectedLanguage === this.selectedLanguage) {
                getTranslatedLabel( {labelName:this.labelName, language: this.language })
                    .then(result => {
                        this.storeHindiData = result;
    
                        console.log('storeHindiData ',this.storeHindiData);
                    })
                    .catch(error => {
                        console.error('Error fetching translated label:', error);
                    });
            } else {
                this.label = label;
            }
        }
    
        //Convert to Hindi - End
    
    connectedCallback() {
        this.FetchNewsTipsData();
    }


    @track StoreNewsTipsData;



    // Fetch News And Tips Data
    FetchNewsTipsData() {
        FetchAllNewsData()
            .then((result) => {
                this.StoreNewsTipsData = result;
            }).catch((error) => {

            });
    }
}