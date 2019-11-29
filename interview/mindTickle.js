/**
 * let debouncedFn =  debuonce(fn, 300)
 * debouncedFn(1)
 * debouncedFn(12)
 * debouncedFn(123)
 */
let debounce = (fn, delay) => {
  let prevDebounce;
  return function() {
    const args = arguments;
    clearTimeout(prevDebounce);
    prevDebounce = setTimeout(() => fn.apply(this,args),delay);
  }
}


// function log(...args) {
//   console.log(...args)
// }

// let debouncedLog = debounce(log)

// debouncedLog(1)
// debouncedLog(2)
// debouncedLog(3)

// setTimeout(() => {
//   debouncedLog(4)
// }, 1)

// 

// [...obj];

// let a = {
//   b: {
//     c: function abc() {
      
//     },
//     d: 1
//   }
// }

// console.log(a)

// console.log(JSON.parse(JSON.stringify(a)))

function deepClone(input) {
  let result;
  result = Array.isArray(input) ? []: {};
  
  // loop over the elements recursively and map it to the result
  for(let key in input) {
    result[key] = typeof input[key] === "object" ? deepClone(input[key]): input[key];
  }
  return result;
}

// console.log(deepClone(a));

// input fn


/**
 * PubSub
 * let channel = new PubSub()
 * channel.subscribe("some-event", cb1)
 * channel.subscribe("some-event", cb1)
 * channel.publish("some-event", data)
 * channel.subscribe("some-event3", cb)
 * channel.publish("some-event3", data)
 * 
 */

class PubSub {
  constructor() {
    this.map = {};
  }
  subscribe(event, callback) {
    if (this.map[event]) {
      this.map[event].push(callback);      
    } else {
      this.map[event] = [callback];
    }

  }
  unsubscribe(event, callback) {
    if(this.map[event]) {
      let callbackArray = this.map[event];
      //whether callback exist or not ?
      if(callbackArray.indexOf(callback) > -1) {
        // naive approach
        let idx = callbackArray.indexOf(callback);
        // swap with last value
        callbackArray[idx] = callbackArray[callbackArray.length-1];
        // remove that last value
        callbackArray.pop();
      }
    }
  }
  publish(event, data) {
    if(Object(this.map).hasOwnProperty(event)) {
      this.map[event].forEach((fnn) => {
        fnn(data);
      });
    }
  }
}

let channel = new PubSub();
channel.subscribe("some-event", console.log);
channel.subscribe("some-event", console.log);
channel.publish("some-event", 1);
