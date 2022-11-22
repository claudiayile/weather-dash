/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/

// GIVEN a weather dashboard with form inputs

// api routes 
var weatherContainerEl = document.querySelector('#weather-container');
var cityInputEl = document.querySelector('#city-search-input');

var searchSubmitHandler = function(event) {
    event.preventDefault();
}

var city = cityInputEl.value.trim();

if(city){
    getWeather(city);
}

  


var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={926c276ea1495a672d9998464ba53a27"
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            showWeather(data, user);
          });
        } else {
          alert("this city doesnt have weather sorry");
        }
      })
      .catch(function(error) {
        alert("this city doesnt have weather...sorry");
      });

      fetch(apiUrl)
      .then(function(response){
          if(response.ok) {
              console.log(response);
              response.json().then(function(data){
                console.log(data);
                showWeather(data, city);
              });
          } else {
              alert("this city doesnt have weather sorry");
          }
      })
    };
  
    
      
    var showWeather = function(city) {
        if (city.length === 0) {
            weatherContainerEl.textContent = "we don't have weather here? no solar system whatsoever lol";
        }
    }

    var cityResultEl = document.createElement("div");
    cityResultEl.classList = "list-item flex-row align-center";

    var cityNameEl = document.createElement("span");
    cityNameEl.textContent = city;

    weatherContainerEl.append(cityResultEl);
    weatherContainerEl.append(cityNameEl);

    
    cityInputEl.addEventListener("submit", searchSubmitHandler)