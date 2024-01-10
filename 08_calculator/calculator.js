const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current);
};

const multiply = function() {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	return (n === 0 ? 1 : (() => {
    let product = 1;
    for (i = n; i > 0; i--){ 
      product *= i;
    }

    return product;
  }));
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
