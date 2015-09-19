var isValid = false;

if (!isValid) {
  console.log('Data is valid!');
} else {
  console.log('Data is not valid!');
}

// Challenge

function toggleBoolean(input) {
  if (typeof input === 'boolean') {
    return !input;
  } else {
    return "Not a bool!";
  }
}

console.log(toggleBoolean(true));
console.log(toggleBoolean(false));
console.log(toggleBoolean(6));


