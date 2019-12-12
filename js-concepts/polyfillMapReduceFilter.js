/**
 * Polyfill for map, reduce and filter method
 */

let employees = [
  { id: 20, name: 'Vikas G', exp: 5, team: 'storefront' },
  { id: 24, name: 'Gurpinder S', exp: 5, team: 'backoffice' },
  { id: 56, name: 'Harish', exp: 2, team: 'storefront' },
  { id: 88, name: 'Sahil', exp: 1, team: 'backoffice' }
];

// Let's say we need - [20, 24, 56, 88]
// Simply using map we can return array of id
let employeIds = employees.map(obj => obj.id);
console.log(employeIds);

// Let's say we need total experience of all employees
// Simply using reduce we can compute the total and return
// reduce use an accumulator and pass that every time to callback
let totalExp = employees.reduce((accumulator, obj) => accumulator + obj.exp, 0);
console.log(totalExp);

// Let's say we need the most experienced one
let oldestEmp = employees.reduce((accumulator, obj) => {
  return obj.exp > (accumulator.exp || 0) ? obj : accumulator;
}, {});
console.log(oldestEmp);

// Let's say we need employees working with storefront team
let storefrontEmp = employees.filter(obj => obj.team === 'storefront');
console.log(storefrontEmp);

// Custom Map
Array.prototype.myMap = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

// Custom Reduce
Array.prototype.myReduce = function(callback, initialVal) {
  let result = initialVal;
  for (let i = 0; i < this.length; i++) {
    if (result === undefined) {
      result = this[i];
    } else {
      result = callback(result, this[i]);
    }
  }
  return result;
};

// Custom Filter
Array.prototype.myFilter = function(callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// Let's say we need - [20, 24, 56, 88]
// Simply using map we can return array of id
employeIds = employees.myMap(obj => obj.id);
console.log(employeIds);

// Let's say we need total experience of all employees
// Simply using reduce we can compute the total and return
// reduce use an accumulator and pass that every time to callback
totalExp = employees.myReduce((accumulator, obj) => accumulator + obj.exp, 0);
console.log(totalExp);

// Let's say we need the most experienced one
oldestEmp = employees.myReduce((accumulator, obj) => {
  return obj.exp > (accumulator.exp || 0) ? obj : accumulator;
}, {});
console.log(oldestEmp);

// Let's say we need employees working with storefront team
storefrontEmp = employees.myFilter(obj => obj.team === 'storefront');
console.log(storefrontEmp);
