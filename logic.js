// Calculation of the price of the train ticket



const minPrice = 0.21;
const firstTitle = document.getElementById("first-title");
const inputKm = document.getElementById("input-km");
// const inputAge = document.getElementById("input-age");
const button = document.querySelector("button");
let price = inputKm * minPrice;

button.addEventListener("click",

  function(){
    firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro.`;
  }

);