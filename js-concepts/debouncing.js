/**
 * Debouncing
 * - Executing a function after a specified time.
 * - useful to control the no. of events getting fired like on tap of some button
 */

/**
 * This function will debounce a given function with a given delay.
 * @param {*} fn
 * @param {*} delay
 */
const debounce = (fn, delay) => {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
};
