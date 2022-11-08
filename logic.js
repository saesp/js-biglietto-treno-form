// Calculation of the price of the train ticket


const minPrice = 0.21;
const firstTitle = document.getElementById("first-title");
const button = document.querySelector("button");
const inputKm = document.getElementById("input-km");
const inputAge = document.getElementById("input-age");


button.addEventListener("click",

  function(){
    let numKm = inputKm.value;
    inputKm.value = null;
    let numAge = inputAge.value;
    inputAge.value = null;
    let price = numKm * minPrice;

    if (numAge < 18) { 
        let reducedPrice = price * 80 / 100;
        firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro, ma è scontato del 20% perchè hai meno di 18 anni. Quindi il prezzo del tuo biglietto è di ${reducedPrice} euro.`;
        console.log("reduced price", reducedPrice);
    } else if (numAge > 64) {
        let reducedPrice = price * 60 / 100;
        firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro, ma è scontato del 40% perchè hai più di 65 anni. Quindi il prezzo del tuo biglietto è di ${reducedPrice} euro.`;
        console.log("reduced price", reducedPrice);
    } else {
        firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro.`;
        console.log("price", price);
    }    
  }
);