console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
  username: 'Zack',
  balance: 0
}]);

var accounts = storage.getItemSync('accounts');

accounts.push({
  username: "Jessica",
  balance: 75
});

storage.setItemSync('accounts', accounts);

console.log(accounts);
