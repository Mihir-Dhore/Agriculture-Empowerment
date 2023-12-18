import { LightningElement, track } from 'lwc';

export default class AgriTrainingSupportPage extends LightningElement {
    //To show Map
    // mapMarkers = [
    //     {
    //         location: {
    //             City: 'Surat',
    //             Country: 'India',
    //             PostalCode: '394101',
    //             State: 'Gujarat',
    //             Street: 'Boleward,Surat',
    //         },

    //         // For onmarkerselect
    //         value: 'SF1',

    //         icon: 'standard:account',
    //         title: 'TCS', 
    //         // description: 'This is a long description',
    //     },
    //     {
    //         location: {
    //             // Location Information
    //             City: 'Surat',
    //             Country: 'India',
    //             PostalCode: '394101',
    //             State: 'Gujarat',
    //             Street: 'Pratham Circle Road',
    //         },

    //         value: 'SF2',

    //         icon: 'standard:account',
    //         title: 'Krishi Kendra,Surat',
    //     },
    //     {
    //         location: {
    //             // Location Information
    //             City: 'Surat',
    //             Country: 'India',
    //             PostalCode: '394101',
    //             State: 'Gujarat',
    //             Street: 'Goga chauk, Surat',
    //         },

    //         value: 'SF2',

    //         icon: 'standard:account',
    //         title: 'Goga Chauk,Surat',
    //     },
    //     {
    //         location: {
    //             // Location Information
    //             City: 'Surat',
    //             Country: 'India',
    //             PostalCode: '394101',
    //             State: 'Gujarat',
    //             Street: 'Railway Station, Surat',
    //         },

    //         value: 'SF2',

    //         icon: 'standard:account',
    //         title: 'Railway Station, Surat',
    //     },
    //     {
    //         location: {
    //             // Location Information
    //             City: 'Surat',
    //             Country: 'India',
    //             PostalCode: '394101',
    //             State: 'Gujarat',
    //             Street: 'Dumas, Surat',
    //         },

    //         value: 'SF2',

    //         icon: 'standard:account',
    //         title: 'Dumas, Surat',
    //     },
 
    // ];

    // @track mapValue;
    // selectedMarkerValue = 'SF1';
    // handleMapSearch(event){
    //     this.mapValue = event.target.value;
    //     console.log(this.mapValue)


    // }

    // handleMarkerSelect() {
    //     this.selectedMarkerValue = this.mapValue;
    //     console.log('markv',this.selectedMarkerValue)
    // }
    

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