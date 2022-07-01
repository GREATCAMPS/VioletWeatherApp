const key = "c4e5177d9b4e3609676c3fdf074d8f03";

let cityID = "5780993"

let response = fetch (
    "https://api.openweathermap.org/data/2.5/weather/?id=" +
    cityID +
    "&appid=" +
    key
)

.then((resp) => {
    return resp.json();

})
.then((resp) => {
    displayWeather(resp);

});

function displayWeather (data){
    document.querySelector(".location").innerHTML = `Weather for ${data.name}`;
    document.querySelector(".temp").innerHTML =
    "Temperature" +
    ((9.0 * (parseFloat(data.main.temp) - 273.15)) / 5.0 + 32).toFixed(0) +
    "&degF";

    document.querySelector(".condition").innerHTML = 
    "Conditions" + data.weather[0].description;
    document.querySelector(".humidity").innerHTML =
    "Humidity" + data.main.humidity + "%";
}