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

countDownDayDisplay = future.textContent;

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
