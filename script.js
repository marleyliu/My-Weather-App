let weatherData; 
async function getCity() {
    var inputCity = document.getElementById("city").value;
    document.getElementById("conditions").innerHTML = ``

    //document.getElementById("outputCity").innerText =
        //"Current weather for " + inputCity;

    try {
       const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=a267729d5793ec95d4ce97539474ea26`
        );
        //if (!response.ok) {
        //    throw Error(response.statusText);
        //}

        weatherData = await response.json();

        if (weatherData.cod != 200){
            alert("City not found");
            return;
        }
        displayWeather(weatherData); 

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    let currTemp = Math.round(data.main.temp); 
    let highTemp = Math.round(data.main.temp_max); 
    let lowTemp = Math.round(data.main.temp_min); 
    let feelsLike = Math.round(data.main.feels_like);
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed; 
    let description = data.weather[0].description; 

    document.getElementById("conditions").innerHTML = 
    `
    <strong>${data.name}</strong><br>
    ${description.toUpperCase()}<br><br>
    Current: ${currTemp}°C<br>
    High: ${highTemp}°C<br>
    Low: ${lowTemp}°C<br>
    Feels Like: ${feelsLike}°C<br>
    Humidity: ${humidity}%<br>
    Wind Speed: ${windSpeed} m/s

    `; 

    const iconCode = data.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherIcon").src = iconUrl; 
}
/*
function getCity() {
    var inputCity = document.getElementById("city").value;
    document.getElementById("outputCity").innerText = "Current weather for " + inputCity
    let weatherData; 

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a267729d5793ec95d4ce97539474ea26 ")
        .then(response => {

            if (!response.ok){
                throw Error(response.statusText);
            }

            return response.json()
        })
        .then(data => {console.log(data)
            weatherData = data
        })
        .catch(error => console.log(error));
    
    console.log(weatherData)
}
*/
