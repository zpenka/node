var i = 0;
var countLimit = 8;

while (i < countLimit) {
  console.log('while: ' + i);
  i++;
}

for (i = 0; i < countLimit; i++) {
  console.log('for: ' + i);
}

// Challenge

function countDownFor (startingPoint, stoppingPoint) {
  for (var i = startingPoint; i > stoppingPoint; i--) {
    console.log("for: " + i);
  }
}

function countDownWhile (startingPoint, stoppingPoint) {
  while (startingPoint > stoppingPoint) {
    console.log("while: " + startingPoint);
    startingPoint--;
  }
}

console.log(countDownWhile(10, 1));
console.log(countDownFor(10, 1));
