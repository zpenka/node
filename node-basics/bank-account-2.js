var accounts = [];

// Create an account
function createAccount (account) {
  accounts.push(account);
  return account;
}

// Get account
function getAccount (username) {
  var foundAccount;

  // Get matching account
  accounts.forEach(function(account) {
    if (account.username === username) {
      foundAccount = account;
    }
  });

  return foundAccount;
}

// Create a function called deposit
function deposit (account, amount) {
  return account.balance += amount;
}

// Create a function called withdraw
function withdraw (account, amount) {
  return account.balance -= amount;
}

// Create a function called getBalance
function getBalance (account) {
  return account.balance;
}

// Test accounts
var zacksAccount = createAccount({
  username: "Zack",
  balance: 0
});

deposit(zacksAccount, 100);
console.log(getBalance(zacksAccount));

withdraw(zacksAccount, 11);
console.log(getBalance(zacksAccount));

var existingAccount = getAccount("Zack");
console.log(getBalance(existingAccount));

var jessicasAccount = createAccount({
  username: "Jessica",
  balance: 12
});

console.log(accounts);

var existingJessAccount = getAccount("Jessica");
console.log(existingJessAccount);
