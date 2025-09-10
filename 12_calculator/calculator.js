const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
	  return array.reduce((acc, currNumber) => acc + currNumber);
  }
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
	return array.reduce((acc, currNumber) => acc * currNumber);
  }
};

const power = function(a, b) {
    let numberArray = [];
    for (let i = 0; i < b; i++) {
      numberArray.push(a)
    }

	if (b > 0) {
    return numberArray.reduce((acc, currNumber) => acc * currNumber);

  } else if (b < 0) {
    let divisor = numberArray.reduce((acc, currNumber) => acc * currNumber);
    return 1 / divisor;

  } else if (b === 0) {
    return 1;
  }
};

const factorial = function(a) {
  if (a === 0) {
    return 1
  } else if (a > 0) {
      let numberArray = [];
      for (let i = a; i > 0; i--) {
        numberArray.push(a);
        a--;
      }
      return numberArray.reduce((acc, currNumber) => acc * currNumber);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
