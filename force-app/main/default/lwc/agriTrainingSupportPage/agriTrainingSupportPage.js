import { LightningElement } from 'lwc';

export default class AgriTrainingSupportPage extends LightningElement {
    //To show Map
    mapMarkers = [
        {
            location: {
                City: 'Surat',
                Country: 'India',
                PostalCode: '394101',
                State: 'Gujarat',
                Street: 'Boleward,Surat',
            },

            // For onmarkerselect
            value: 'SF1',

            icon: 'standard:account',
            title: 'TCS', 
            // description: 'This is a long description',
        },
        {
            location: {
                // Location Information
                City: 'Surat',
                Country: 'India',
                PostalCode: '394101',
                State: 'Gujarat',
                Street: 'Pratham Circle Road',
            },

            value: 'SF2',

            icon: 'standard:account',
            title: 'Krishi Kendra,Surat',
        },
        {
            location: {
                // Location Information
                City: 'Surat',
                Country: 'India',
                PostalCode: '394101',
                State: 'Gujarat',
                Street: 'Goga chauk, Surat',
            },

            value: 'SF2',

            icon: 'standard:account',
            title: 'Goga Chauk,Surat',
        },
        {
            location: {
                // Location Information
                City: 'Surat',
                Country: 'India',
                PostalCode: '394101',
                State: 'Gujarat',
                Street: 'Railway Station, Surat',
            },

            value: 'SF2',

            icon: 'standard:account',
            title: 'Railway Station, Surat',
        },
        {
            location: {
                // Location Information
                City: 'Surat',
                Country: 'India',
                PostalCode: '394101',
                State: 'Gujarat',
                Street: 'Dumas, Surat',
            },

            value: 'SF2',

            icon: 'standard:account',
            title: 'Dumas, Surat',
        },
 
    ];

    selectedMarkerValue = 'SF1';

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
        console.log('markv',his.selectedMarkerValue)
    }

}