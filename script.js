let weatherData; 
async function getCity() {
    var inputCity = document.getElementById("city").value;
    document.getElementById("outputCity").innerText =
        "Current weather for " + inputCity;

    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a267729d5793ec95d4ce97539474ea26"
        );

        if (!response.ok) {
            throw Error(response.statusText);
        }

        weatherData = await response.json();
        displayWeather(weatherData); 

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    let currTemp = Math.round(data.main.temp - 273.15); 
    let highTemp = Math.round(data.main.temp_max - 273.15); 
    let lowTemp = Math.round(data.main.temp_min- 273.15); 
    let conditions; 
    document.getElementById("Temperature").innerText =
    "Temperatures (current, high, low): " + currTemp + highTemp + lowTemp;
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
