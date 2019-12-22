function maxDiff(arr) {
  let maxDiff = arr[1]-arr[0];
  // Naive Approach
  // Time Complexity - O(n^2)
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i+1; j < arr.length - 1; j++) {
  //     let currentDiff = arr[j] - arr[i];
  //     if(currentDiff > maxDiff) {
  //       maxDiff = currentDiff;
  //     }
  //   }
  // }
  // Approach 2
  // Time Complexity - O(n)
  let low = arr[0];
  for (let i = 1; i < arr.length-1; i++) {
    let currentDiff = arr[i] - low;
    if(currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }
    if(arr[i] < low) {
      low = arr[i];
    }
  }
  return maxDiff;
}

console.log(maxDiff([2,3,10,6,4,8,1]));
console.log(maxDiff([30,10,8,2]));