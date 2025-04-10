// RACCOLTA DATI
const km = parseInt(
  prompt("Quale è il numero di km che devi percorrere?", "c")
);
const age = parseInt(prompt("Quale è la tua età?", "30"));
const ticketPrice = km * 0.21;
const discount20 = (ticketPrice * 20) / 100;
const discount40 = (ticketPrice * 40) / 100;
const underageDiscount = ticketPrice - discount20;
const seniorDiscount = ticketPrice - discount40;

console.log("km", km);
console.log("age", age);

let outputPrice;

// SVOLGIMENTO

// Verifica se i dati inseriti sono corretti
if (!isNaN(age) && !isNaN(km)) {
  if (age < 18) {
    console.log("con sconto del 20%", underageDiscount);
    outputPrice = "$" + underageDiscount.toFixed(2);
  } else if (age > 65) {
    console.log("con sconto del 40%", seniorDiscount);
    outputPrice = "$" + seniorDiscount.toFixed(2);
  } else {
    console.log("ticket prize", ticketPrice);
    outputPrice = "$" + ticketPrice.toFixed(2);
  }
  // Se non sono corretti
} else {
  outputPrice = "Inserisci solo numeri!";
}
// OUTPUT
alert(outputPrice);
