// Form elements
const ageInput = document.getElementById("age-input");
const kmInput = document.getElementById("km-input");
const formInput = document.getElementById("form-input");
const buttonInput = document.getElementById("button-input");

// Button trigger
buttonInput.addEventListener("click", function () {
  // Get value from input
  const age = ageInput.value;
  const km = kmInput.value;

  // Calculations
  const ticketPrice = km * 0.21;
  const discount20 = (ticketPrice * 20) / 100;
  const discount40 = (ticketPrice * 40) / 100;
  const underageDiscount = ticketPrice - discount20;
  const seniorDiscount = ticketPrice - discount40;

  // Check values
  console.log("km:", km);
  console.log("age:", age);
  // console.log("ticket price", ticketPrice);
  // console.log("ticket for underage", underageDiscount);
  // console.log("ticket for senior", seniorDiscount);

  if (age < 18) {
    console.log("con sconto del 20%:", underageDiscount.toFixed(2));
  } else if (age > 65) {
    console.log("con sconto del 40%:", seniorDiscount.toFixed(2));
  } else {
    console.log("ticket prize:", ticketPrice.toFixed(2));
  }
});
