/**
 * Deep Clone JS object/function
 * ---------
 */

// PS: Don't use arrow function, they don't have this scope defined
Function.prototype.clone = function() {
  let that = this;
  let temp = function temporary() {
    return that.apply(this, arguments);
  };
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      temp[key] = this[key];
    }
  }
  return temp;
};

// To deep clone array/object
let deepClone = function(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    result[key] = typeof obj === "Object" ? deepClone(obj[key]) : obj[key];
  }
  return result;
};
