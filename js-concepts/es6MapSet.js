/**
 * Use Map and set features to get used to of them
 *
 */

// Merge two sets

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([6, 7]);

// This doesn't work as expected :(
// set1.add(...set2);
// console.log(set1);

// This works
// set2.forEach(set1.add, set1);
// console.log(set1);

// else create new set
set1 = new Set([...set1, ...set2]);
console.log(set1);
