/**
 * Polyfill for bind, call and apply method
 */

const employee = {
  name: 'vikas gupta',
  id: 64
};

let employeeDetails = function(count) {
  console.log(this.id + ' : ' + this.name + ' - ' + count);
};

// employeeDetails function is trying to access id and name from this object
// bind / call / apply will basically provide this a definition

employeeDetails.bind(employee)();
employeeDetails.apply(employee);
employeeDetails.call(employee);

// Polyfill for Bind
Function.prototype.customBind = function(context, ...args) {
  // this will correspond to the actual function where obj needs to be bind
  let org = this;
  return function(...args2) {
    org.apply(context, [...args, ...args2]);
  };
};

employeeDetails.customBind(employee, 1)(2);

// Polyfill for Call
Function.prototype.customCall = function(context, ...args) {
  // create a new object, attach fn and context to it and call it with args
  let newObject = Object.create(context, { fn: { value: this } });
  newObject.fn(...args);
};

employeeDetails.customCall(employee, 2);

// Polyfill for Apply
Function.prototype.customApply = function(context, args) {
  // create a new object, attach fn and context to it and call it with args
  let newObject = Object.create(context, { fn: { value: this } });
  newObject.fn(...args);
};

employeeDetails.customApply(employee, [3]);

// Object.create(context, { fn : {value: this }})
