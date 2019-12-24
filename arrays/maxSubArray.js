/**
 *  Find the maximum sum of all possible contiguous subarrays of the array.

Example:

[34, -50, 42, 14, -5, 86]

Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].

 */

// Function to find max sum of all possible contugous subarray
function maxSubArray(arr) {
  // input validation
  if(!arr) {
    return null;
  }

  let maxSum = arr[0];
  let currSum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum+arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArray([34, -50, 42, 14, -5, 86]));