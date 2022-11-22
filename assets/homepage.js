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




var getWeather = function(user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={926c276ea1495a672d9998464ba53a27"
    };
  
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayRepos(data, user);
          });
        } else {
          alert('Error: GitHub User Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to GitHub");
      });

  
  var showWeather = function(repos, searchTerm) {
    if (repos.length === 0) {
      repoContainerEl.textContent = "No repositories found.";
      return;
    }
}
  
    repoSearchTerm.textContent = searchTerm;
  
    // loop over repos
    for (var i = 0; i < repos.length; i++) {
      // format repo name
      var repoName = repos[i].owner.login + "/" + repos[i].name;
    };