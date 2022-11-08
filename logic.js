// Calculation of the price of the train ticket



const minPrice = 0.21;
const firstTitle = document.getElementById("first-title");

// const inputAge = document.getElementById("input-age");
const button = document.querySelector("button");

button.addEventListener("click",

  function(){
    const inputKm = document.getElementById("input-km");
    let price = inputKm * minPrice;
    firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro.`;
  }

);