function updateTime() {
  // city one results
  let cityOneElement = document.querySelector("#city-one");
  if (cityOneElement) {
    let cityOneDateElement = cityOneElement.querySelector(".date");
    let cityOneTimeElement = cityOneElement.querySelector(".time");
    let cityOneTime = moment().tz("America/Los_Angeles");

    cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
    cityOneTimeElement.innerHTML = cityOneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // city two results
  let cityTwoElement = document.querySelector("#city-two");
  if (cityTwoElement) {
    let cityTwoDateElement = cityTwoElement.querySelector(".date");
    let cityTwoTimeElement = cityTwoElement.querySelector(".time");
    let cityTwoTime = moment().tz("Asia/Tokyo");

    cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
    cityTwoTimeElement.innerHTML = cityTwoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// drop down functions
// function showSelectedCityOne(event) {
//   if (event.target.value.length > 0) {
//     let currentTime = moment()
//       .tz(event.target.value)
//       .format("dddd, MMMM D, YYYY h:mm A");

//     alert(`It is ${currentTime} in ${event.target.value}`);
//   }
// }
// let citySelect = document.querySelector("#cityOne");

// citySelect.addEventListener("change", showSelectedCityOne);

// function showSelectedCityTwo(event) {
//   if (event.target.value.length > 0) {
//     let currentTime = moment()
//       .tz(event.target.value)
//       .format("dddd, MMMM D, YYYY h:mm A");

//     alert(`It is ${currentTime} in ${event.target.value}`);
//   }
// }
// let cityTwoSelect = document.querySelector("#cityTwo");

// cityTwoSelect.addEventListener("change", showSelectedCityTwo);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let firstCityElement = document.querySelector("#city-one");
  firstCityElement.innerHTML = `
  <div id="city-one">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let firstCitySelected = document.querySelector("#cityOne");
firstCitySelected.addEventListener("change", updateCity);
