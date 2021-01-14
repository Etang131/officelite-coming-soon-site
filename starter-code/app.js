let daysLeft = document.getElementById("daysUnit");
let hoursLeft = document.getElementById("hoursUnit");
let minsLeft = document.getElementById("minsUnit");
let secoundsLeft = document.getElementById("secoundsUnit");
let countDownDayDisplay = document.getElementById("timeTextBold");

//Get Current Date
let currentDate = new Date();
console.log(currentDate);

//Set countDownDayDisplay be the day we want
var future = new Date();
future.setDate(future.getDate() + 30);

countDownDayDisplay = `${future.getDate} + " " + ${future.getMonth} + " " `;

//store future date to be 30 days from current date to make count dynamic
let futureDate = currentDate + 30;

//Set html to be 30 days from current date
//countdown from date
//stop counting down when you reach the date

var distance = futureDate - currentDate;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// FORM Validator

const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const company = document.getElementById("company");

form.addEventListener("submit", (e) => {
  /*if I change submit to input it could be better */
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get value from inputs and trim values
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const companyValue = company.value.trim();

  if (fullNameValue === "") {
    //show error
    // add error class
    setErrorFor(fullName, "Text Field Error");
  } else {
    setSuccessFor(fullName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "Phone number cannot be empty");
  } else {
    setSuccessFor(phoneNumber);
  }

  if (companyValue === "") {
    setErrorFor(company, "Company name cannot be empty");
  } else {
    setSuccessFor(company);
  }
}

//STILL NEED TO ADJUST NEW CODE TO THIS PROJECT  V

function setErrorFor(input, message) {
  const formBlock = input.parentElement; // .formBlock
  const small = formBlock.querySelector("small");

  // add error message inside small tag
  small.innerText = message;

  //add error class
  formBlock.className = "formBlock failure";
}

function setSuccessFor(input) {
  const formBlock = input.parentElement;
  formBlock.className = "formBlock";
}

function isEmail(email) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}