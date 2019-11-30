/**
 * Prototype
 * ---------
 *
 * JS engine attachs object to {hidden property and functions} -> another object
 * __proto__ is that another object which is called as prototype.
 *
 * Definition: Object that is assigned to each and every object in JS.
 *
 * Prototype Chaining:
 *  let arr = [1,2,3];
 * arr.__proto__ === Array.prototype
 * arr.__proto__.__proto__ === Object.prototype
 * arr.__proto__.__proto__.__proto__ === null
 *
 *
 * Prototypal Inheritance
 * ----------------------
 * Inheritance using prototype
 * In JS everything we define inherits something from prototype chain as shown in above chaining.
 *
 */

// This is only to understand the concept, should not be used in production code
let objectA = {
  name: "Name A",
  type: "Type A",
  print: () => {
    console.log(this.name + " - " + this.type);
  }
};

let objectB = {
  name: "Name B"
};

objectB.__proto__ = objectA; // objectB in using prototypal inheritance to inherit objectA properties
