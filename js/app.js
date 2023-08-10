import { form } from "./form.js";
import { consultApi } from "./api.js";
import { showErrorAlert } from "./alert.js";

form.addEventListener("submit", searchForWeather);

function searchForWeather(e) {
  e.preventDefault();
  const city = document.querySelector("#city").value.trim();
  const country = document.querySelector("#country").value;

  if (city === "" || country === "") {
    showErrorAlert("Please enter a city and country");
    return;
  }
  consultApi(city, country);
  form.reset();
}
