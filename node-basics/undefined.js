var name = 'Zack';
name = undefined;

console.log(name);

function doesNothing(age) {
  return age;
}

console.log(doesNothing());

var variable = undefined;

if (typeof x === 'undefined') {
  console.log("x is undefined");
}

// Challenge

function greetUser(name) {
  if (typeof name === 'undefined') {
    return 'Hello World!';
  } else {
    return 'Hello ' + name + '!';
  }
}

console.log(greetUser());
console.log(greetUser('Zack'));
