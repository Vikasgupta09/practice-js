// nested callback hell is hard to debug
// to simplify this we use Promise
// 
// new Promise(function(resolve, reject))

class myPromise {
  // executor is function that will take 2 functions as params:
  // resolve and reject
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('executor must be a function');
    }

    this.STATES = {
      PENDING: 1,
      RESOLVED: 2,
      REJECTED: 3
    };

    this._currentState = this.STATES.PENDING;
    this._value = null;
    this._thenners = [];

    this._resolve = value => {
      setImmediate(() => {
        if (this._currentState === this.STATES.PENDING) {
          this._currentState = this.STATES.RESOLVED;
        }
        this._value = value;
        for (const { onResolved } of this._thenners) {
          onResolved(value);
        }
      });
    };

    this._reject = value => {
      if (this._currentState === this.STATES.PENDING) {
        this._currentState = this.STATES.REJECTED;
      }
      this._value = value;
      for (const { onRejected } of this._thenners) {
        onRejected(value);
      }
    };

    executor(this._resolve, this._reject);
  }
  // then takes 2 functions as params
  // onResolved, onRejected
  then(onResolved, onRejected) {
    return new myPromise((resolve, reject) => {
      const _onResolved = value => {
        try {
          let nextValue = onResolved(value);
          if (nextValue.then) {
            return nextValue.then(resolve, reject);
          } else {
            resolve(nextValue);
          }
        } catch (err) {
          reject(err);
        }
      };

      const _onRejected = value => {
        try {
          reject(onRejected(value));
        } catch (err) {
          reject(err);
        }
      };

      if (this._currentState === this.STATES.RESOLVED) {
        _onResolved(this._value);
      } else if (this._currentState === this.STATES.REJECTED) {
        _onRejected(this._value);
      } else {
        this._thenners.push({
          onResolved: _onResolved,
          onRejected: _onRejected
        });
      }
    });
    /**
     * if (this._currentState === this.STATES.RESOLVED) {
        _onResolved(this._value);
      } else if (this._currentState === this.STATES.REJECTED) {
        _onRejected(this._value);
      } else {
        this._thenners.push({
          onResolved,
          onRejected
        });
      }
     */
  }

  done(onResolved) {
    return this.then(onResolved);
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}

// let asyncFunction = function() {
//   return new myPromise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('async function resolved');
//     }, 2000);
//   });
// };

const timer = (time, doReject) => {
  const prom = new myPromise((resolve, reject) => {
    if (doReject) {
      reject(`Failed ${time}`);
      return;
    }
    resolve('value');
  });
  return prom;
};

const a = timer(10000);
a.then(val => {
  console.log(val);
});
a.then(val => {
  console.log(val + '1');
});
a.then(val => {
  console.log(val + '2');
});
a.then(val => {
  console.log(val + '3');
  return timer(5000);
})
  .then(val => {
    console.log(val + 'nested');
  })
  .then(val => {
    console.log(val);
  });
// console.log(a.then(() => {}));

console.log('Shoul be printed first');
