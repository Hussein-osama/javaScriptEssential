function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    const apiKey = 'f17ed40e0236fe2a1182b7faed87b96c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); // Debug output
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
