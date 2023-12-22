<b>Project Description:-</b> 

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
We value your input. Share your thoughts, suggestions, and experiences through our anonymous feedback page. Your feedback is essential in helping us continually improve our platform to better serve the farming community.


<h1>API Used</h1>
<h3>Weather API:- </h3> https://api.weatherapi.com/v1/current.json?key=6388b321ff7a4f239de125943230612&q=${currentLocation.latitude},${currentLocation.longitude}
<h3>Agricultur API:- </h3>https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001be46e8b8b04c4b746f8c908419d2c4e3&format=json&limit=1000&filters%5Bdistrict%5D=${this.searchValue}  (From Website https://data.gov.in/ )





<h1>Important Code</h1>


Fetch Data of API using Javascript
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
