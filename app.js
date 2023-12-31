// city one results
let cityOneElement = document.querySelector("#city-one");
let cityOneDateElement = cityOneElement.querySelector(".date");
let cityOneTimeElement = cityOneElement.querySelector(".time");
let cityOneTime = moment().tz("America/Los_Angeles");

cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
cityOneTimeElement.innerHTML = cityOneTime.format("h:mm [<small>]A[</small>]");

// city two results
let cityTwoElement = document.querySelector("#city-two");
let cityTwoDateElement = cityTwoElement.querySelector(".date");
let cityTwoTimeElement = cityTwoElement.querySelector(".time");
let cityTwoTime = moment().tz("Europe/London");

cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
cityTwoTimeElement.innerHTML = cityTwoTime.format("h:mm [<small>]A[</small>]");

// city three results
let cityThreeElement = document.querySelector("#city-three");
let cityThreeDateElement = cityThreeElement.querySelector(".date");
let cityThreeTimeElement = cityThreeElement.querySelector(".time");
let cityThreeTime = moment().tz("Asia/Seoul");

cityThreeDateElement.innerHTML = cityThreeTime.format("MMMM Do YYYY");
cityThreeTimeElement.innerHTML = cityThreeTime.format(
  "h:mm [<small>]A[</small>]"
);

// city one update
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let firstCityElement = document.querySelector("#city-one");
  firstCityElement.innerHTML = `
  <div class="city" id="city-one" >
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time" class="align-right">${cityTime.format(
      "h:mm"
    )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

let firstCitySelected = document.querySelector("#city-one-select");
firstCitySelected.addEventListener("change", updateCity);

// city two update
function updateCityTwo(event) {
  let cityTwoTimeZone = event.target.value;
  if (cityTwoTimeZone === "current") {
    cityTwoTimeZone = moment.tz.guess();
  }
  let cityTwoName = cityTwoTimeZone.replace("_", " ").split("/")[1];
  let cityTwoTime = moment().tz(cityTwoTimeZone);
  let secondCityElement = document.querySelector("#city-two");
  secondCityElement.innerHTML = `
  <div class="city" id"city-two">
    <div>
      <h2>${cityTwoName}</h2>
      <div class="date">${cityTwoTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTwoTime.format("h:mm")} <small>${cityTwoTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let secondCitySelected = document.querySelector("#city-two-select");
secondCitySelected.addEventListener("change", updateCityTwo);

// city three update
function updateCityThree(event) {
  let cityThreeTimeZone = event.target.value;
  if (cityThreeTimeZone === "current") {
    cityThreeTimeZone = moment.tz.guess();
  }
  let cityThreeName = cityThreeTimeZone.replace("_", " ").split("/")[1];
  let cityThreeTime = moment().tz(cityThreeTimeZone);
  let thirdCityElement = document.querySelector("#city-three");
  thirdCityElement.innerHTML = `
  <div class="city" id"city-three">
    <div>
      <h2>${cityThreeName}</h2>
      <div class="date">${cityThreeTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityThreeTime.format(
      "h:mm"
    )} <small>${cityThreeTime.format("A")}</small></div>
  </div>
  `;
}

let thirdCitySelected = document.querySelector("#city-three-select");
thirdCitySelected.addEventListener("change", updateCityThree);
