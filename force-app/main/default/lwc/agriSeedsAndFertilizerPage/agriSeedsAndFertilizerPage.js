import { LightningElement,track } from 'lwc';
import HeaderSeedsAndFertilizer from '@salesforce/resourceUrl/SeedsandFertilizersss';
import FetchAllFertilizers from '@salesforce/apex/AgricultureEmpowerment.FetchAllFertilizers';
import FetchAllSeeds from '@salesforce/apex/AgricultureEmpowerment.FetchAllSeeds';
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';

export default class AgriSeedsAndFertilizerPage extends LightningElement {
    
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
        @track labelName = 'SeedsAndFertilizers';
        
        handleLanguageChange(event) {
            this.selectedLanguage = event.detail.value;
            console.log('selected vAlue', this.selectedLanguage);
            if(this.selectedLanguage==='Hindi')
            {
                console.log('hindi yes')
    
                this.language = 'hi'
                this.showHindiData = true;
                this.showEnglishData = false;
    
    
            }else {
                console.log('english yes')
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
                        console.log('resuhnidengkish',result);
                        this.storeHindiData = result;
    
                        console.log('storeHindiData ',this.storeHindiData);
                        // this.label = JSON.parse(JSON.stringify(result));
                        // console.log('label result',this.label);
    
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
        this.FetchAllSeedsData();
        this.FetchAllFertilizerData();
    }


    @track HeaderSeedsAndFertilizer = HeaderSeedsAndFertilizer;
    @track StoreAllSeedsData = [];
    @track StoreAllFertilizersData = [];


    // Fetch All Seeds Data
    FetchAllSeedsData() {
        FetchAllSeeds()
            .then((result) => {
                console.log(result);
                this.StoreAllSeedsData = result;
            }).catch((error) => {
                alert(error.body.message)
            });
    }

    //Fetch All Fertilizers Date
    FetchAllFertilizerData() {
        FetchAllFertilizers()
            .then((result) => {
                console.log(result)
                this.StoreAllFertilizersData = result;
            }).catch((error) => {
               alert(error.body.message)
            });
    }


}