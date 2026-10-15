let priceTag = prompt("What is the price?");
console.log(priceTag);

let priceWithoutDollar = priceTag.slice(1);
console.log(priceWithoutDollar);

let price = parseFloat(priceWithoutDollar);
console.log(price);
console.log(typeof price);

let discount = price * 0.1;
console.log(discount);

let newPrice = price - discount;
console.log(newPrice);

