import { LightningElement,track } from 'lwc';
import FetchAllNewsData from '@salesforce/apex/AgricultureEmpowerment.FetchAllNewsData';
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';
import translateNewsAndTips from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips';
import translateNewsAndTips2 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips2';
import translateNewsAndTips3 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips3';
import translateNewsAndTips4 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips4';
import translateNewsAndTips5 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips5';
import translateNewsAndTips6 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips6';
import translateNewsAndTips7 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips7';
import translateNewsAndTips8 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips8';
import translateNewsAndTips9 from '@salesforce/apex/AgricultureEmpowerment.translateNewsAndTips9';

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

        @track storeHindiDatatips1;
        @track storeHindiDatatips2;
        @track storeHindiDatatips3;
        @track storeHindiDatatips4;
        @track storeHindiDatatips5;
        @track storeHindiDatatips6;
        @track storeHindiDatatips7;
        @track storeHindiDatatips8;
        @track storeHindiDatatips9;

        handleLanguageChange(event) {
            this.selectedLanguage = event.detail.value;
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
                    })
                    .catch(error => {
                        console.error('Error fetching translated label:', error);
                    });
            } else {
                this.label = label;
            }

            //tip-1
            translateNewsAndTips()
            .then(result=>{
                this.storeHindiDatatips1 = result;

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-2
            translateNewsAndTips2()
            .then(result=>{
                this.storeHindiDatatips2 = result;
                // console.log('dsf',this.storeHindiDatatips1)

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-3
            translateNewsAndTips3()
                .then(result=>{
                    this.storeHindiDatatips3 = result;
                    // console.log('dsf',this.storeHindiDatatips1)
                }).catch(error=>{
                    console.error('Error fetching translated label:', error);
                })
            //tip-4
            translateNewsAndTips4()
            .then(result=>{
                this.storeHindiDatatips4 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-5
            translateNewsAndTips5()
            .then(result=>{
                this.storeHindiDatatips5 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-6
            translateNewsAndTips6()
            .then(result=>{
                this.storeHindiDatatips6 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-7
            translateNewsAndTips7()
            .then(result=>{
                this.storeHindiDatatips7 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-8
            translateNewsAndTips8()
            .then(result=>{
                this.storeHindiDatatips8 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //tip-9
            translateNewsAndTips9()
            .then(result=>{
                this.storeHindiDatatips9 = result;
                // console.log('dsf',this.storeHindiDatatips1)
            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
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