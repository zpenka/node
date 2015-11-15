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
  // Only accept a number
  if (typeof amount === "number") {
    return account.balance += amount;
  } else {
    console.log("Error: not a number");
  }
}

// Create a function called withdraw
function withdraw (account, amount) {
  // Only accept a number
  if (typeof amount === "number") {
    return account.balance -= amount;
  } else {
    console.log("Error: not a number");
  }
}

// Create a function called getBalance
function getBalance (account) {
  return account.balance;
}

// Use closures to create a balance getter
function createBalanceGetter (username) {
  return function () {
    if (getAccount(username)) {
      return getBalance(getAccount(username));
    } else {
      console.log("Error: Account not found");
    }
  }
}

var zacksAccount = createAccount({
  username: "Zack",
  balance: 99999
});

var getZacksBalance = createBalanceGetter("Zack");
console.log(getZacksBalance());
