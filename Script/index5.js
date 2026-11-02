const account = {
  accountName: "Patrik",
  balance: 100,

  getBalance: function () {
    alert(`Your balance is: ${this.balance} kr`);
  },

  getAccountName: function () {
    alert(`Account holder: ${this.accountName}`);
  },

  deposit: function (amount) {
    if (amount <= 0) {
      this.accountError("The amount must be more than 0");
      return;
    }
    this.balance += amount;
    alert(`You deposited ${amount} kr. New balance: ${this.balance} kr`);
  },

  withdrawal: function (amount) {
    if (amount <= 0) {
      this.accountError("The amount must be more than 0");
      return;
    }
    if (amount > this.balance) {
      this.accountError(`Not enough money. Your balance is ${this.balance} kr`);
      return;
    }
    this.balance -= amount;
    alert(`You withdrew ${amount} kr. New balance: ${this.balance} kr`);
  },

  accountError: function (message) {
    alert(`Error: ${message}`);
  },

    exitAccount: function () {
    this.isOpen = false;
    alert(`Goodbye, ${this.accountName}! You have left your account.`);
  },

};

account.getAccountName();   // Account holder: Patrik
account.getBalance();       // Your balance is: 100 kr
account.deposit(50);        // You deposited 50 kr. New balance: 150 kr
account.withdrawal(500);    // Error: Not enough money. Your balance is 150 kr
account.deposit(-20);       // Error: The amount must be more than 0
account.withdrawal(30);     // You withdrew 30 kr. New balance: 120 kr
account.getBalance();       // Your balance is: 120 kr
account.exitAccount();      // Goodbye, Patrik! You have left your account.

console.log(account.accountName);
console.log(account.balance);