import { LightningElement,track } from 'lwc';

export default class AgriHomePage extends LightningElement {
     
     @track imageURL;
     @track date;
     @track result;

     //To get Weather Details
     connectedCallback() {
        this.handleCurrentLocation();
    }

    handleCurrentLocation() {
        // Check if geolocation is supported by the browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    console.log('Current Location:', currentLocation);

                    let endPoint = `https://api.weatherapi.com/v1/current.json?key=6388b321ff7a4f239de125943230612&q=${currentLocation.latitude},${currentLocation.longitude}`;

                    fetch(endPoint, {
                        method: 'GET'
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Weather data:', data);
                            this.result = data;
                            this.imageURL = this.result.current.condition.icon;
                            this.date = this.result.location.localtime;
                            console.log('image',this.imageURL);

                        })
                        .catch((error) => {
                            console.error('Error fetching weather data:', error);
                        });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    //For DropDown
    @track options = [
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

    @track showMarketData = false;
    @track searchValue;
    @track agriData;

    handleSearchChange(event){
        this.searchValue = event.detail.value;
        console.log('searcValue',this.searchValue)
        this.showMarketData = true;
        this.fetchMarketData();
     }     

     @track showMarketMsg = false;
     fetchMarketData(){
        // Get current date
        const today = new Date();
        // Get day, month, and year
        const day = today.getDate();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const year = today.getFullYear();

        // Format the date
        const formattedDate = `${day}/${month}/${year}`;

        console.log(formattedDate);
        let endPoint = `https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001be46e8b8b04c4b746f8c908419d2c4e3&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}&filters%5Barrival_date%5D=${formattedDate}`;
        // let endPoint = `https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}&filters%5Barrival_date%5D=${formattedDate}`;
            fetch(endPoint,{
                method: "GET"
            })
            .then((response)=> response.json())
            .then((data) => {
                console.log('data',data);
                if(data.records.length == 0){
                    this.showMarketMsg = true;
                }else{
                    this.showMarketMsg = false;
                }
                this.agriData = data.records;
            }).catch(error=>{
                console.error('Error fetching data:', error);
            });

        }
}