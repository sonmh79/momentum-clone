const API_KEY = '039166bf049ca5e2f07f2876f6d55736'
const COORDS = 'coords'
const weather = document.querySelector(".js-weather")

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){  // fetch() -> 'response' obj
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}ºC , ${place}`
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
