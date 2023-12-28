import { LightningElement,api, track,wire } from 'lwc';
import insertViews from '@salesforce/apex/AgricultureEmpowerment.insertViews';
import showViews from '@salesforce/apex/AgricultureEmpowerment.showViews';
import FetchSeasonalCalendarData from '@salesforce/apex/AgricultureEmpowerment.FetchSeasonalCalendarData';
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';

const columns = [
    
    // { label: 'Season Name', fieldName: 'Name', type: 'text' },
    { label: 'Crop Name', fieldName: 'cropName'},
    // { label: 'Season Type', fieldName: 'Types_of_Seasons__c', type: 'text' },
    { label: 'Start Date', fieldName: 'Start_Date__c', type: 'date' },
    { label: 'End Date', fieldName: 'End_Date__c', type: 'date' },
    { label: 'Information', fieldName: 'Information__c', type: 'text' }
];

export default class AgriMarketTrendsPage extends LightningElement {
    
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
        @track labelName = 'Agriculture_Empowerment';
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
                    })
                    .catch(error => {
                        console.error('Error fetching translated label:', error);
                    });
            } else {
                this.label = label;
            }
        }
    
        //Convert to Hindi - End
    
    @track options = [
        { label: '---', value: '---' },
        { label: 'Pune', value: 'Pune' },
        { label: 'Surat', value: 'Surat' },
        { label: 'Nashik', value: 'Nashik' },
        { label: 'Ahmednagar', value: 'Ahmednagar' },
        { label: 'Chandrapur', value: 'Chandrapur' },
        { label: 'Banaskanth', value: 'Banaskanth' },
        { label: 'Bikaner', value: 'Bikaner' },
        { label: 'Ganganagar', value: 'Ganganagar' },
        { label: 'Fatehgarh', value: 'Fatehgarh' },
        { label: 'Bhatinda', value: 'Bhatinda' },
        { label: 'Bankura', value: 'Bankura' },
        { label: 'Birbhum', value: 'Birbhum' },
        { label: 'Darjeeling', value: 'Darjeeling' },
        { label: 'Indore', value: 'Indore' },
        { label: 'Harda', value: 'Harda' },
        { label: 'Dewas', value: 'Dewas' },
        { label: 'Adilabad', value: 'Adilabad' },
        { label: 'Hyderabad', value: 'Hyderabad' },
        { label: 'Erode', value: 'Erode' },
    ];
    @track searchValue;
    @track agriData;
    @track showMarketData = false;
    handleCityChange(event){
        this.searchValue = event.detail.value;
        console.log(this.searchValue);
        this.fetchMarketData();
        this.showMarketData = true;
    }

    @track commodities = [
        {label:'Maize', value:'Maize'},
        {label:'Beans', value:'Beans'},
        {label:'Beetroot', value:'Beetroot'},
        {label:'Drumstick', value:'Drumstick'},
        {label:'Methi(Leaves)', value:'Methi(Leaves)'},
        {label:'Mint(Pudina)', value:'Mint(Pudina)'},
        {label:'Rajgir', value:'Rajgir'},
        {label:'Methi(Leaves)', value:'Methi(Leaves)'},
        {label:'Onion', value:'Onion'},
        {label:'Bottle gourd', value:'Bottle gourd'},
        {label:'Ginger(Green)', value:'Ginger(Green)'},
        {label:'Guar', value:'Guar'},
        {label:'Soyabean', value:'Soyabean'},
        {label:'Carrot', value:'Carrot'},
        {label:'Chilly Capsicum', value:'Chilly Capsicum'},

    ];

    @track searchCommodity;
    handleCommodityChange(event){
        this.searchCommodity = event.detail.value;
        console.log(this.searchCommodity);
        this.fetchMarketDataUsingCommodity();

    }

     fetchMarketData(){
            let endPoint = `https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001be46e8b8b04c4b746f8c908419d2c4e3&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}`;

                fetch(endPoint,{
                    method: "GET"
                })
                .then((response)=> response.json())
                .then((data) => {
                    console.log('data',data);
                    this.agriData = data.records;
                }).catch(error=>{
                    console.error('Error fetching data:', error);
                });

            }

            fetchMarketDataUsingCommodity(){
                let endPoint = `https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001be46e8b8b04c4b746f8c908419d2c4e3&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}&filters%5Bcommodity%5D=${this.searchCommodity}`
    
                    fetch(endPoint,{
                        method: "GET"
                    })
                    .then((response)=> response.json())
                    .then((data) => {
                        console.log('data',data);
                        this.agriData = data.records;
                    }).catch(error=>{
                        console.error('Error fetching data:', error);
                    });
    
                }
    
            //to insert View
            @track viewValue;
            handleViewChange(event){
                this.viewValue = event.target.value;
            }
            handleSubmitClick(){
                insertViews({view:this.viewValue})
                .then(result=>{
                    console.log(result)
                    this.showViews();
                    this.viewValue = '';

                }).catch(error=>{

                })
            }

            //to Show Views
            @track viewsData;
            connectedCallback(){
                this.showViews();
                this.FetchSeasonalCalendarData();
            }
            showViews(){
                showViews()
                .then(result=>{
                    this.viewsData = JSON.parse(JSON.stringify(result));
                    console.log('View Shownnnn',this.viewsData);
                })
            }

            //For Seasonal Calendar
            seasonalItems;
            columns = columns;
            sortDirection = 'asc';
            sortedBy;
        
            FetchSeasonalCalendarData(){
                FetchSeasonalCalendarData()
                .then(result=>{
                    console.log('result',result);
                    this.seasonalItems = result.map(record =>({
                        ...record,
                        cropName: record.Crop__r.Name,
                    }));
                     console.log(this.seasonalItems);
                })
                .catch(error=>{
                    console.log('error',error);
                })
            }
        
            // handleSort(event) {
            //     this.sortedBy = event.detail.fieldName;
            //     this.sortDirection = event.detail.sortDirection;
            //     this.sortData(event.detail.fieldName, event.detail.sortDirection);
            // }                
}