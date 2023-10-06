// city one results
let cityOneElement = document.querySelector("#city-one");
let cityOneDateElement = cityOneElement.querySelector(".date");
let cityOneTimeElement = cityOneElement.querySelector(".time");
let cityOneTime = moment().tz("America/Los_Angeles");

cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
cityOneTimeElement.innerHTML = cityOneTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// city two results
let cityTwoElement = document.querySelector("#city-two");
let cityTwoDateElement = cityTwoElement.querySelector(".date");
let cityTwoTimeElement = cityTwoElement.querySelector(".time");
let cityTwoTime = moment().tz("Asia/Tokyo");

cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
cityTwoTimeElement.innerHTML = cityTwoTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// drop down functions
function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", showSelectedCity);

function showSelectedCityTwo(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let cityTwoSelect = document.querySelector("#cityTwo");

cityTwoSelect.addEventListener("change", showSelectedCity);
