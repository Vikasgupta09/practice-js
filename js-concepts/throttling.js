/**
 * Throttling
 * - Executing a function only once in a given time interval.
 * - useful to control # of events getting fired.
 */

const throttle = (fn, delay) => {
  if (timer) {
    return;
  }
  let timer = setTimeout(() => fn.apply(this, arguments), delay);
};
