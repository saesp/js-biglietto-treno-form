// Calculation of the price of the train ticket


// chiedere il numero di km da percorrere
let numberKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("number Km", numberKm);

// chiedere la sua età
let age = parseInt(prompt("Quanti anni hai?"));
console.log("age", age);

// calcolare il costo del biglietto
const minPrice = 0.21;
let price = numberKm * minPrice;

console.log("price", price);

const firstTitle = document.getElementById("first-title");

// output
if (age < 18) { // 20% sconto minorenni
    let reducedPrice = price * 80 / 100;
    firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro, ma è scontato del 20% perchè hai meno di 18 anni. Quindi il prezzo del tuo biglietto è di ${reducedPrice} euro.`;
    console.log("reduced price", reducedPrice);
} else if (age > 65) { // 40% sconto over 65
    let reducedPrice = price * 60 / 100;
    firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro, ma è scontato del 40% perchè hai più di 65 anni. Quindi il prezzo del tuo biglietto è di ${reducedPrice} euro.`;
    console.log("reduced price", reducedPrice);
} else {
    price;
    firstTitle.innerHTML = `Il prezzo del tuo biglietto è di ${price} euro.`;
}