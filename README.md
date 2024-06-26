<b>Project Description:-</b> 


https://github.com/Mihir-Dhore/Agriculture-Empowerment/assets/83826641/20cfa5af-982b-482a-b503-12305ad046fe


Technical Document:-
[Technical Document AE.pdf](https://github.com/Mihir-Dhore/Agriculture-Empowerment/files/13842271/Technical.Document.AE.pdf)

<h1>Agricultural Empowerment</h1>

At Agricultural Empowerment , we're dedicated to providing farmers with a one-stop solution for all their agricultural needs. Our platform is designed to empower farmers with valuable insights, real-time market data, and a wealth of resources to enhance their farming experience.

<h3>Market Insights:</h3><br>
Stay informed about the current market rates of vegetables specific to your city. Our platform not only displays real-time prices but also highlights the maximum and minimum rates, allowing farmers to make informed decisions and compare market trends effortlessly and also got to view the Historical market Data and Seasonal Calendar.

<h3>Weather Reports:</h3> <br>
Plan your farming activities effectively with our detailed weather reports. Access up-to-date information to make timely decisions, ensuring your crops thrive under optimal conditions.


<h3>Seeds and Fertilizers:</h3> <br>
Discover a curated list of seasonal seeds and fertilizers, complete with details about each product's name, recommended season, and essential information. Make educated choices for your crops' well-being.

<h3>Trending Vegetables:</h3> <br>
Explore what's trending in the market. Get insights into the current popular vegetables, along with their minimum and maximum prices. Additionally, share your perspective through our public feedback system to contribute to the farming community.

<h3>News and Tips:</h3> <br>
Stay ahead in the field with our news and tips section. From the latest agricultural news to valuable tips ranging from crop selection to harvesting, we've got you covered. Empower yourself with knowledge to boost your agricultural practices.

<h3>Training and Support:</h3> <br>
Visit our training and support page for expert guidance. Access training materials tailored for each season, along with informative YouTube videos to enhance your understanding of best practices.

<h3>Feedback:</h3> <br>
We value your input. Share your thoughts, suggestions, and experiences through our anonymous feedback page. Your feedback is essential in helping us continually improve our platform to better serve the farming community. <br><br>
Extra Point: In Feedback I have used service cloud feature that is web to Case to resolve the Users query as when user add the query then it insert into the Case and admin resolve the query.

<h1>API Used</h1>
<h3>Weather API:- </h3> https://api.weatherapi.com/v1/current.json?key=6388b321ff7a4f239de125943230612&q=Surat
<h3>Agricultur API:- </h3>https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001be46e8b8b04c4b746f8c908419d2c4e3&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}  (From Website https://data.gov.in/ )





<h1>Important Code</h1>
Integrate Salesforce with external systems using rest <br>
<b>Steps:-</b> <br>
1. Create a Connected App in Salesforce: <br>
            In Salesforce Setup, navigate to "App Manager." <br>
            Click "New Connected App." <br>
            Fill in the required information, including the API (enable OAuth) settings. <br>
            Make note of the Consumer Key and Consumer Secret generated for the app. <br>
2. Write Apex Class for REST Integration Or We can do With Javascript also as mentioned in below code.

We can also do Integration with the Remote site settings as just need to add API url to the Remote site and need to write Javascript or below apex class
APEX:
```
public class ExternalSystemIntegrationWithoutConnectedApp {

    private static String endpointURL = 'https://api.external-system.com';

    public static String makeRESTCall(String httpMethod, String resource, String requestBody) {
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpointURL + resource);
        request.setMethod(httpMethod);
        request.setHeader('Content-Type', 'application/json');

        if (httpMethod != 'GET' && requestBody != null) {
            request.setBody(requestBody);
        }

        HttpResponse response = new Http().send(request);
        return response.getBody();
    }
}
```
<b>NOTE:</b>
    <i>Using Remote Site Settings is suitable for simple integrations where authentication and authorization are handled by the external API without the need for OAuth. <br>
    If the external API requires OAuth or a specific authentication flow, you may still need to create a Connected App to manage authentication and obtain an access token.<br>
    Connected Apps offer more control over security settings, including OAuth policies, and are often necessary for more complex integrations.
    </i>

Fetch Data of API using Javascript(API Integration In Salesforce Using RestAPI)
```
handleFetchData() {
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
}
```
To find current location of user using Javascript
```
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
}
```
HEADER:
HTML:
```
<template>
    <!-- Header -->
    <div class="header">
        <div class="logo">Agriculture Empowerment</div>
        <div class="nav">
            <div class="menu-items">
                <div class={homeClass} onclick={handleHomeClick}>HOME</div>
                <div class={seedsClass} onclick={handleSeedsAndFertilizerClick}>SEEDS AND FERTILIZERS</div>
                <div class={marketClass} onclick={handleMarketTrendsClick}>MARKET TRENDS</div>
                <div class={newsClass} onclick={handleNewAndTipsClick}>NEWS AND TIPS</div>
                <div class={trainingClass} onclick={handleTraingSupportClick}>TRAINING AND SUPPORT</div>
                <div class={feedbackClass} onclick={handleFeedbackClick}>FEEDBACK</div>
            </div>
        </div>
        <div class="menu-toggle" onclick={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>
```
CSS:
```
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 10px;
 }
 
 .logo {
    font-size: 1.5rem;
    font-weight: bold;
 }
 
 .nav {
    display: flex;
 }
 
 .nav div {
    cursor: pointer;
    padding: 10px;
 }
 
 .nav div:hover {
    background-color: #34495e;
 }
 
 .home {
    background-color: #3498db;
 }
 
 .seeds {
    background-color: #e74c3c;
 }
 
 .market {
    background-color: #2ecc71;
 }
 
 .news {
    background-color: #f39c12;
 }
 
 .training {
    background-color: #16a085;
 }
 
 .feedback {
    background-color: #9b59b6;
 }
 
  /* For Mobile View */
  .menu-items {
    display: flex;
    flex-direction: row;
 }
 
 .menu-toggle .bar {
    height: 3px;
    width: 25px;
    background-color: #dfd6d6;
    margin: 5px 0;
 }
 
 /* For Mobile View */
 @media screen and (max-width: 805px) {
    .menu-items {
       flex-direction: column;
       position: fixed;
       text-align: center;
       align-items: center;
       top: 96px;
       left: 10%;
       width: 80%;
       background-color: #376240;
       display: none;
       z-index: 1;
   }
 
  .menu-items.show {
        display: flex;
    }
 
    .menu-toggle {
        display: block;
        cursor: pointer;
    }
 }
 
 /* For Desktop View */
 @media screen and (min-width: 806px) {
    .menu-toggle {
        display: none;
    }
 
    .menu-items {
        display: flex;
    }
 }
```
JS:
```
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Header extends NavigationMixin (LightningElement) {


    toggleMenu(event) {
        console.log('toggleMenu called');
        const menuItems = this.template.querySelector('.menu-items');
        if (menuItems) {
            menuItems.classList.toggle('show');
        }
    }

    //For active button
    @track homeClass = '';
    @track seedsClass = '';
    @track marketClass = '';
    @track newsClass = '';
    @track trainingClass = '';
    @track feedbackClass = '';

    connectedCallback() {
        this.setActiveTab();
    }

    setActiveTab() {
        const path = window.location.pathname;
        console.log('Current Path:', path);

        this.resetClasses();

        if (path.includes('home')) {
            this.homeClass = 'home';
        } else if (path.includes('AgricultureEmpowerment/s/seeds-and-fertilizers')) {
            this.seedsClass = 'seeds';
        } else if (path.includes('market')) {
            this.marketClass = 'market';
        } else if (path.includes('/agriEmp/s/new-and-tips-page')) {
            this.newsClass = 'news';
        } else if (path.includes('training')) {
            this.trainingClass = 'training';
        } else if (path.includes('/agriEmp/s/feedack-page')) {
            this.feedbackClass = 'feedback';
        }
    }

    resetClasses() {
        this.homeClass = '';
        this.seedsClass = '';
        this.marketClass = '';
        this.newsClass = '';
        this.trainingClass = '';
        this.feedbackClass = '';
    }

    handleHomeClick(){
        this.resetClasses();
        this.homeClass = 'home';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/"
            url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/"

               
            }
        });
    }

    handleTraingSupportClick(){
        this.resetClasses();
        this.trainingClass = 'training';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "	https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/"
            url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/training-and-support"

            }
        });
 
    }

    handleMarketTrendsClick(){
        this.resetClasses();
        this.marketClass = 'market';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/"
               url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/market-trends-page"

            }
        });
 
    }
    handleSeedsAndFertilizerClick(){
        this.resetClasses();
        this.seedsClass = 'seeds';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/seeds-and-fertilizers"
            url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/seeds-and-fertilizers-page"

            }
        });
 
     }

     handleFeedbackClick(){
        this.resetClasses();
        this.feedbackClass = 'feedback';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/"
            url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/"

            }
        });
 
     }
     handleNewAndTipsClick(){
        this.resetClasses();
        this.newsClass = 'news';

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
            //    url: "https://gauravlokhande-dev-ed.develop.my.site.com/AgricultureEmpowerment/s/"
            url: "https://thecodingstudio2-dev-ed.develop.my.site.com/agriEmp/s/new-and-tips-page"

            }
        });
     }

}
```
To Convert the whole lwc Page From English Language to Hindi Using Custom Labels:-
APEX Class:-
```
public without Sharing class AgricultureEmpowerment {
       @AuraEnabled
    public static String getTranslatedLabel(String labelName, String language) {
       // return System.Label.get('', labelName, language);
        String res = System.Label.get('', labelName, language);
        System.debug('result Hindi '+res);
        return res;
    }
}
```
JS:-
```
import getTranslatedLabel from '@salesforce/apex/AgricultureEmpowerment.getTranslatedLabel';
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
```
HTML:-
```
    <lightning-combobox
    name="language"
    label="Select Language"
    value={selectedLanguage}
    options={languageOptions}
    onchange={handleLanguageChange}
></lightning-combobox>
<div class="main">
        <div class="main-container">
         <template if:true={showEnglishData}>
                <h1 class="main-heading">"Smart Farming Starts Here: Market Insights for Success"</h1>
                <p class="main-description">
                    Welcome to the Market Trends page, your gateway to a wealth of insights that can revolutionize your 
                    farming strategy. Stay ahead of the curve by delving into historical data and understanding the dynamic
                    shifts in crop prices.
                </p>
         </template>
        <template if:true={showHindiData}>
            <h1 class="main-heading">"स्मार्ट खेती यहां से शुरू होती है: सफलता के लिए बाजार अंतर्दृष्टि"</h1>
            <p class="main-description">
                {storeHindiData}
            </p>
        </template>
 
        </div>
```
