import { result } from "./form.js";
import { showErrorAlert } from "./alert.js";

export function consultApi(city, country) {
  const appId = "tu keyAPI";
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

  fetch(urlApi).then((response) =>
    response.json().then((data) => {
      clearHTML();
      if (data.cod === "404") {
        showErrorAlert("City not found");
        return;
      }
      showWeather(data);
    })
  );
}

export function showWeather(data) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  const centigrade = kelvinToCentigrade(temp);
  const max = kelvinToCentigrade(temp_max);
  const min = kelvinToCentigrade(temp_min);
  const cityName = document.querySelector(".city-search");
  cityName.textContent = name;
  const currentTemperature = document.createElement("p");
  currentTemperature.innerHTML = `${centigrade} &#8451;`;
  currentTemperature.classList.add("current-temperature");

  const maxTemperature = document.createElement("p");
  maxTemperature.innerHTML = `Max: ${max} &#8451;`;

  const minTemperature = document.createElement("p");
  minTemperature.innerHTML = `Min: ${min} &#8451;`;

  const divResult = document.createElement("div");
  divResult.classList.add("div-result");
  divResult.appendChild(currentTemperature);
  divResult.appendChild(maxTemperature);
  divResult.appendChild(minTemperature);
  result.appendChild(divResult);
}

const kelvinToCentigrade = (kelvin) => parseInt(kelvin - 273.15);

export function clearHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
