function getCity() {
    let inputCity = document.getElementById("city");

    let value = inputCity.value;
        alert(value);

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a267729d5793ec95d4ce97539474ea26 ")
        .then(response => {

            if (!response.ok){
                throw new Error("Error");
            }

        })
        .then(data => console.log(data.id))
        .catch(error => console.error(error));
}

