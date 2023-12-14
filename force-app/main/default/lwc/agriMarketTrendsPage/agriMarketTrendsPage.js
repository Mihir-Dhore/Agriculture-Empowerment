import { LightningElement,api, track } from 'lwc';
import insertViews from '@salesforce/apex/AEInsertViews.insertViews';
import showViews from '@salesforce/apex/AEInsertViews.showViews';

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
            }
            showViews(){
                showViews()
                .then(result=>{
                    this.viewsData = JSON.parse(JSON.stringify(result));
                    console.log('View Shownnnn',this.viewsData);
                })
            }

            @api myRecordId;

            get encryptedToken() {
                //use apex to get
            }
        
            get acceptedFormats() {
                return ['.pdf', '.png'];
            }
        
            handleUploadFinished(event) {
                // Get the list of uploaded files
                const uploadedFiles = event.detail.files;
                alert('No. of files uploaded : ' + uploadedFiles.length);
            }
        
}