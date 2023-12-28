import { LightningElement, track } from 'lwc';
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';
import translateTNSsection1 from '@salesforce/apex/AgricultureEmpowerment.translateTNSsection1';
import translateTNSsection2 from '@salesforce/apex/AgricultureEmpowerment.translateTNSsection2';
import translateTNSsection3 from '@salesforce/apex/AgricultureEmpowerment.translateTNSsection3';
import translateTNSsection4 from '@salesforce/apex/AgricultureEmpowerment.translateTNSsection4';



export default class AgriTrainingSupportPage extends LightningElement {

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
      @track labelName = 'TrainingAndSupport';

      @track storeTNSsection1;
      @track storeTNSsection2;
      @track storeTNSsection3;
      @track storeTNSsection4;

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
                  })
                  .catch(error => {
                      console.error('Error fetching translated label:', error);
                  });
          } else {
              this.label = label;
          }
            //TNSsection1
            translateTNSsection1()
            .then(result=>{
                this.storeTNSsection1 = result;
                // console.log('codns ',this.storeTNSsection1);

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //TNSsection2
            translateTNSsection2()
            .then(result=>{
                this.storeTNSsection2 = result;

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //TNSsection1
            translateTNSsection3()
            .then(result=>{
                this.storeTNSsection3 = result;

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })
            //TNSsection1
            translateTNSsection4()
            .then(result=>{
                this.storeTNSsection4 = result;

            }).catch(error=>{
                console.error('Error fetching translated label:', error);
            })

      }
  
      //Convert to Hindi - End
  

    @track mapMarkers;
    @track zoomLevel;
    @track listView;
    connectedCallback() {
      this.mapMarkers = [
        {
          location: {
            City: 'Surat',
            Country: 'India',
            PostalCode: '394101',
            State: 'Gujarat',
            Street: 'Boleward,Surat'
          },
          title: "Boleward,Surat",
          description: "TCS",
          icon: "standard:account"
        },
        {
          location: {
            City: 'Surat',
            Country: 'India',
            PostalCode: '394101',
            State: 'Gujarat',
            Street: 'Goga chauk, Surat',

          },
          title: "Goga chauk, Surat",
          description: "Krishi Kendra,Surat !",
          icon: "standard:account"
        }
      ];
      //Google Maps API supports zoom levels from 1 to 22 in desktop browsers, and from 1 to 20 on mobile.
      this.zoomLevel = 10;
      this.listView = "visible";
    }


}