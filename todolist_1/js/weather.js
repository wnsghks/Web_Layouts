const API_KEY = "";

function onGeoOk(position)  {
    const lat = position.coords.latitude;
    const lon =position.coords.longitude;
    const url = ``;
    fetch(url);
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);