// Object containing the cities with their respective latitude and longitude coordinates
const cities = {
    tokyo: { lat: 35.6895, lon: 139.6917 },
    paris: { lat: 48.8534, lon: 2.3488 },
    gjovik: { lat: 60.7957, lon: 10.6915 },
    london: { lat: 51.5085, lon: -0.1257 },
    newyork: { lat: 40.7143, lon: -74.006 },
    oslo: { lat: 59.9127, lon: 10.7461 }
};

// Asynchronous function to fetch weather data for a specific city
async function fetchWeather(city) {
    const { lat, lon } = cities[city];

    // Construct API URL for the Open-Meteo weather API, including the latitude and longitude of the city
    const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    try {
        // Fetch weather data from the API
        const response = await fetch(apiURL);
        const data = await response.json();

        // Update the weather information in the HTML
        document.getElementById(`${city}-temperature`).textContent = `${data.current_weather.temperature} °C`;
        document.getElementById(`${city}-windspeed`).textContent = `${data.current_weather.windspeed} km/h`;
        document.getElementById(`${city}-condition`).textContent = `${data.current_weather.weathercode}`;
        document.getElementById(`${city}-time`).textContent = new Date(data.current_weather.time).toLocaleTimeString();
    } catch (error) {
        console.error(`Failed to fetch weather data for ${city}:`, error);
    }
}

// Fetch weather data for all cities
function fetchAllWeather() {
    for (let city in cities) {
        fetchWeather(city);
    }
}
// Fetch weather data for all cities every minute
setInterval(fetchAllWeather, 60000);

// Fetch weather data for all cities when the page is loaded
fetchAllWeather();
