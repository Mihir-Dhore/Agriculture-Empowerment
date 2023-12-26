import { LightningElement,api, track,wire } from 'lwc';
import insertViews from '@salesforce/apex/AEInsertViews.insertViews';
import showViews from '@salesforce/apex/AEInsertViews.showViews';
import FetchSeasonalCalendarData from '@salesforce/apex/AEInsertViews.FetchSeasonalCalendarData';

const columns = [
    
    // { label: 'Season Name', fieldName: 'Name', type: 'text' },
    { label: 'Crop Name', fieldName: 'cropName'},
    // { label: 'Season Type', fieldName: 'Types_of_Seasons__c', type: 'text' },
    { label: 'Start Date', fieldName: 'Start_Date__c', type: 'date' },
    { label: 'End Date', fieldName: 'End_Date__c', type: 'date' },
    { label: 'Information', fieldName: 'Information__c', type: 'text' }
];

export default class AgriMarketTrendsPage extends LightningElement {
    
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

     fetchMarketData(){
        // const today = new Date();
        // console.log('today',today)

        // for(let i=1;i<=30;i++){
        //     const previousDate = new Date(today);
        //     previousDate.setDate(today.getDate() - i);
        //     console.log('previousDate',previousDate)

        //     const formattedDate = `${previousDate.getDate()}/${previousDate.getMonth() + 1}/${previousDate.getFullYear()}`;
        //     console.log(formattedDate)
        // }
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