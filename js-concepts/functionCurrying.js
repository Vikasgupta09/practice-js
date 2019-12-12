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

/**
 * Implement a generic curry function
 * that converts a given function with n arguments
 */

var curry = function(fn, ...args) {
  if (fn.length <= args.length) {
    return fn(...args);
  } else {
    return function(...more) {
      return curry(fn, ...args, ...more);
    };
  }
};

let volume = function(l, w, h) {
  console.log(l * w * h);
};

let curried = curry(volume);
curried(1)(2)(3);
