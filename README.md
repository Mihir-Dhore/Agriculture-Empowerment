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
