var person = {
  gender: 'male',
  eyeColor: 'brown'
};

person.firstName = 'Zack';
person['lastName'] = 'Penka';
person.age = 24;

delete person.age;

function greetUser(person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName + '!';
}

console.log(greetUser(person));

// Challenge
var animal = {
  name: 'Bruin',
  type: 'dog'
};

function printAnimal(animal) {
  return 'You own a ' + animal.type + ' named ' + animal.name;
}

console.log(printAnimal(animal));
