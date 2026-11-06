const shoppingList = [];

let running = true;

// shoppingList.push({
//  name: "milk",
//  shop: "ICA",
//  quantity: 1,
//  isBought: false,
//}); 

function addItem() {
  let itemName = prompt("Which item do you want to add?");
  let shop = prompt("Which shop?");
  let quantityText = prompt("How many?");
  let quantity = parseInt(quantityText);
  shoppingList.push({
    name: itemName,
    shop: shop,
    quantity: quantity,
    isBought: false,
  });
}

function listItems() {
  for (let i = 0; i < shoppingList.length; i++) {
let shoppingItem = shoppingList[i];
console.log(`${shoppingItem.quantity} ${shoppingItem.name} from ${shoppingItem.shop} — bought: ${shoppingItem.isBought}`);
  }
}

addItem();
addItem();
listItems();