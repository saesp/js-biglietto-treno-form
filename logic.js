// Calculation of the price of the train ticket


const minPrice = 0.21;
let namePass = document.getElementById("name-pass");
let offerTic = document.getElementById("offer-tic");
let priceTic = document.getElementById("price-tic");

const inputName = document.getElementById("input-name");
const inputKm = document.getElementById("input-km");
const inputAge = document.getElementById("input-age");

const button = document.querySelector("button");


button.addEventListener("click",

  function(){
    let nameVal = inputName.value;
    let numKm = inputKm.value;
    inputKm.value = null;
    let numAge = inputAge.value;
    inputAge.value = null;
    let price = numKm * minPrice;

    if (numAge < 18) { 
        let reducedPrice = price * 80 / 100;
        namePass.innerHTML = nameVal;
        offerTic.innerHTML = "- 20%";
        priceTic.innerHTML = `${reducedPrice} invece di ${price}`;
        console.log("reduced price", reducedPrice);
    } else if (numAge > 64) {
        let reducedPrice = price * 60 / 100;
        namePass.innerHTML = inputName;
        offerTic.innerHTML = "- 40%";
        priceTic.innerHTML = `${reducedPrice} invece di ${price}`;
        console.log("reduced price", reducedPrice);
    } else {
        namePass.innerHTML = inputName;
        offerTic.innerHTML = "standart";
        priceTic.innerHTML = price;
        console.log("price", price);
    }    
  }
)

