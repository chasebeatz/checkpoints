const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');

// OpenWeatherMap API Key
const apiKey = 'fb1c0a431b8623d27c5d5a096ce0c692';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();

    // Update the UI with weather data
    locationEl.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperatureEl.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionEl.textContent = `Description: ${data.weather[0].description}`;
  } catch (error) {
    alert('Error fetching weather data. Please try again.');
    console.error(error);
  }
}

// Event listener for button click
searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a valid city name');
  }
});
