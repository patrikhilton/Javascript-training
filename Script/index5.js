const account = {
  accountName: "Patrik",
  balance: 100,
   isOpen: true,

  getBalance: function () {
    alert(`Your balance is: ${this.balance} kr`);
  },

  getAccountName: function () {
    alert(`Account holder: ${this.accountName}`);
  },

  deposit: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Please enter a valid amount greater than 0");
      return;
    }
    this.balance += amount;
    alert(`You deposited ${amount} kr. New balance: ${this.balance} kr`);
  },

  withdrawal: function (amount) {
    if (isNaN(amount) || amount <= 0) {
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

function atm() {
  const message = parseFloat(
    prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit")
  );

  switch (message) {
    case 1:
    account.getBalance(); break;
    case 2:
    const depositText = prompt("How much do you want to deposit?");
  const depositAmount = parseFloat(depositText);
  account.deposit(depositAmount);
  break;
    case 3:
      const withdrawalText = prompt("How much do you want to withdraw?");
  const withdrawalAmount = parseFloat(withdrawalText);
  account.withdrawal(withdrawalAmount);
  break;
    case 4:
    account.getAccountName(); break;
    case 5:
      account.exitAccount();
  break;
  default:
  account.accountError("Invalid choice. Please choose 1-5.");
  }
    if (account.isOpen) {
    atm();
  }
}

atm();