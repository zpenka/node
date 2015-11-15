function greetMaker (name) {
  function greet () {
    console.log('Hello ' + name + '!');
  }

  return greet;
}

var greetZack = greetMaker('Zack');
var greetWorld = greetMaker('World');

// Challenge
function createAdder (baseNumber) {
  return function add (n) {
    return n + baseNumber;
  }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
