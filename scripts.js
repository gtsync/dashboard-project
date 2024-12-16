// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Display the date
    const todayDate = document.getElementById('today-date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    todayDate.innerText = now.toLocaleDateString('en-US', options);

    // Function to add clocks
    function addClock(timezone, label, isBig) {
        const clockDiv = document.createElement('div');
        const time = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
        clockDiv.innerText = `${label}: ${time}`;
        if (isBig) clockDiv.style.fontSize = '1.5em';
        document.getElementById('clocks').appendChild(clockDiv);
    }

    // Add clocks for different time zones
    addClock('Pacific/Honolulu', 'Hawaii', false);
    addClock('America/Los_Angeles', 'Pacific', false);
    addClock('America/Denver', 'Mountain', false);
    addClock('America/Chicago', 'Central', true); // Bigger text for Central
    addClock('America/New_York', 'Eastern', false);
    addClock('Europe/Berlin', 'Central European', false);
    addClock('Asia/Tokyo', 'Japan', false);

// Replace the dummy weather data with the fetched data
const apiKey = '2e4d90d4530dbb7d8282948209783cf4EY';
const city = 'Chesterfield';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const currentWeather = document.getElementById('current-weather');
        currentWeather.innerText = `${data.main.temp}°F, ${data.weather[0].description}`;
        // Add more code here to display hourly and daily weather...
    })
    .catch(error => console.error('Error fetching weather data:', error));

});
