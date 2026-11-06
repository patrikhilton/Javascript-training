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


function markAsBought(name) {
for (let i = 0; i < shoppingList.length; i++) {
    let shoppingItem = shoppingList[i];
    if (shoppingItem.name === name) {
      shoppingItem.isBought = true;
      break;
    }
  }
}


while (running) {
  const choice = prompt(`
Shopping List
1. Add Item
2. List Items
3. Mark Item as Bought
4. Exit
Enter your choice:`);

  switch (choice) {
    case "1":
      addItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      const name = prompt("Enter the name of the item to mark as bought:");
      markAsBought(name);
      break;
    case "4":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}