let priceTag = prompt("What is the price?");
console.log(priceTag);

let priceWithoutDollar = priceTag.slice(1);
console.log(priceWithoutDollar);

let price = parseFloat(priceWithoutDollar);
console.log(price);
console.log(typeof price);