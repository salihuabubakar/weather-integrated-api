async function getWeather(city) {
  const apiKey = "3235ba993beab95d8d78253ce5c0ba1a";
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city  
        + "&units=metric&appid="  
        + apiKey);
   const data = await response.json();
   console.log(data); 
   
   const { country } = data.sys;
   const { name } = data;
   const { icon, description } = data.weather[0];
   const { temp, humidity } = data.main;
   const { speed } = data.wind;

    document.querySelector(".country").innerHTML = "Weather in " + name + ", " + country;
    document.querySelector(".country").classList.remove("skeleton-loading");

    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".icon").classList.remove("skeleton-loading");

    document.querySelector(".description").innerHTML = description;
    document.querySelector(".description").classList.remove("skeleton-loading");

    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".temp").classList.remove("skeleton-loading");

    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    document.querySelector(".humidity").classList.remove("skeleton-loading");

    document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
    document.querySelector(".wind").classList.remove("skeleton-loading");

    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function search() {
  getWeather(document.querySelector(".search-bar").value).catch((err) => {
    console.error(err);
  });
}

  document.querySelector(".search-bar").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      search();
    }
  }) 

  document.querySelector(".search button").addEventListener("click", function () {
    search();
});