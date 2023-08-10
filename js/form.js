export const form = document.querySelector("form");
export const result = document.querySelector(".result");

window.addEventListener("load", () => {
  form.addEventListener("submit", searchForWeather);
});

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
