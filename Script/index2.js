let priceTag = prompt("Enter a price tag:");

let priceWithoutDollar = priceTag.slice(1);

let price = parseFloat(priceWithoutDollar);

let discount = price * 0.1;

let newPrice = price - discount;

console.log(newPrice);
