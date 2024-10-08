const apiKey = "93c404218bb391be3ec7edec77df04d0";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "degree celcius";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images copy/clouds.png";

    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images copy/clear.png";

    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images copy/rain.png";

    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images copy/mist.png";

    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images copy/drizzle.png";

    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "images copy/snow.png";

    }
    document.querySelector(".weather").style.display="block";





}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})
