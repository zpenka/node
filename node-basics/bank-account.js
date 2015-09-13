var account = {
  balance: 0
};

// Create a function called deposit
function deposit(account, amount) {
  return account.balance += amount;
}

// Create a function called withdraw
function withdraw(account, amount) {
  return account.balance -= amount;
}

// Create a function called getBalance
function getBalance(account) {
  return account.balance;
}

// Test deposit and getBalance
deposit(account, 1000);
console.log(getBalance(account));

// Test withdraw
withdraw(account, 121);
console.log(getBalance(account));

