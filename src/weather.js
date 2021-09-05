const API_KEY = "5f3dee7f49b0c46f4ddea4f28ba36d38";

const weather = document.querySelector("#weather span:first-child");
const temperature = document.querySelector("#weather span:nth-of-type(2)");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main}`;
      temperature.innerText = `${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find where you are. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
