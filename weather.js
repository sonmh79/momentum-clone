const API_KEY = '039166bf049ca5e2f07f2876f6d55736'
const COORDS = 'coords'
const weather = document.querySelector(".js-weather")
const info = document.querySelector(".more-information");


function getWeather(lat,lng){
    // fetch() -> 'response' obj
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){  
        return response.json();
    })
    .then(function(json){
        console.log(json)
        const temperature =  Math.floor(json.main.temp);
        const place = json.name;
        weather.innerText = `${temperature}℃ , ${place}`
        const span1 = document.createElement("span"),
        span2 = document.createElement("span"),
        span3 = document.createElement("span");
        span1.innerText = `▶Feels like: ${Math.floor(json.main.feels_like)}℃`
        span2.innerText = `▶Temp: ${json.main.temp_min}℃ / ${json.main.temp_max}℃`
        span3.innerText = `▶wind: ${json.wind.speed} m/s`
        info.appendChild(span1)
        info.appendChild(span2)
        info.appendChild(span3)
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj)); // Save data to localStorage, {coords : coordsObj}
}

function handleGeoSucces(position){
    // Get latitude, longitude data and save
    const latitude = position.coords.latitude,
    longitude = position.coords.longitude,
    coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}
function handleGeoError(){
    // If errors occur..
};

function askForCoords() {
    // Ask for location data
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}
function init(){
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

init()