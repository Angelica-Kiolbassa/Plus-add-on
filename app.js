// function updateTime() {
// city one results
let cityOneElement = document.querySelector("#city-one");

let cityOneDateElement = cityOneElement.querySelector(".date");
let cityOneTimeElement = cityOneElement.querySelector(".time");
let cityOneTime = moment().tz(" ");

cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
cityOneTimeElement.innerHTML = cityOneTime.format("h:mm:ss A");

// city two results
let cityTwoElement = document.querySelector("#city-two");

let cityTwoDateElement = cityTwoElement.querySelector(".date");
let cityTwoTimeElement = cityTwoElement.querySelector(".time");
let cityTwoTime = moment().tz("Asia/Tokyo");

cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
cityTwoTimeElement.innerHTML = cityTwoTime.format("h:mm:ss A");

// function updateCity(event) {
//   let cityTimeZone = event.target.value;
//   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
//   let cityTime = moment().tz(cityTimeZone);
//   let firstCityElement = document.querySelector("#city-one");
//   firstCityElement.innerHTML = `
//   <div id"city-one">
//     <div>
//       <h2>${cityName}</h2>
//       <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
//     </div>
//     <div class="time">${cityTime.format("h:mm:ss")}</div>
//   </div>
//   `;
// }

// updateTime();
// setInterval(updateTime, 1000);

// let firstCitySelected = document.querySelector("#city-one-select");
// firstCitySelected.addEventListener("change", updateCity);

// drop down functions
function showSelectedCityOne(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    let cityElement = document.querySelector("#city-one");

    cityElement.innerHTML = `It is ${currentTime} in ${event.target.value}`;
  }
}
let citySelect = document.querySelector("#city-one-select");

citySelect.addEventListener("change", showSelectedCityOne);

function showSelectedCityTwo(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    let cityTwoElement = document.querySelector("#city-two");

    cityTwoElement.innerHTML = `It is ${currentTime} in ${event.target.value}`;
  }
}
let cityTwoSelect = document.querySelector("#city-two-select");

cityTwoSelect.addEventListener("change", showSelectedCityTwo);
