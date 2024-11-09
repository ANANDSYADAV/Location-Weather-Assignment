
// The function fetches weather data based on the user's geolocation and saves it to LocalStorage.

async function fetchWeather() {
    let lat, long;
    navigator.geolocation.getCurrentPosition(
        position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
        });

    const key = 'API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

    const data = await fetch(url).then((res) => res.json());

    if (data) {
        localStorage.setItem('weatherData', JSON.stringify(data));
        console.log('Weather data saved to LocalStorage!');
    } else {
        console.log('Please fetch weather data first.');
    }

}

fetchWeather();