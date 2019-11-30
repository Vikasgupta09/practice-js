/**
 * Currying is the process of taking a function with multiple arguments
 * and returning a series of function that takes one arg and resolve it to a value
 */

/**
 * Using Closure
 * -------------
 */
const multiply = function(x) {
  return function(y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(3);

/**
 * Using Bind
 * ----------
 */
const divide = function(x, y) {
  console.log(y / x);
};

let divideByTwo = divide.bind(null, 2);
divideByTwo(4);

let divideByThree = divide.bind(null, 3);
divideByThree(9);
