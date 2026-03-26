const add = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return 'ERROR';
  } else {
    return a + b;
  }
};

const subtract = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return 'ERROR';
  } else {
    return a - b;
  }
};

const sum = function (numbers) {
  let sumResult = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumResult += numbers[i];
  }
  return Number(sumResult);
};

const multiply = function (numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return Number(product);
};

const power = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return 'ERROR';
  } else {
    return Math.pow(a, b);
  }
};

const factorial = function (n) {
  if (typeof n != 'number') {
    return 'ERROR';
  } else {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
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
