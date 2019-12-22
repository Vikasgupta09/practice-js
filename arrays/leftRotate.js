/**
 * Function to left rotate a given array by k elements
 * @param {*} arr 
 * @param {*} k 
 * @returns arr - modified array
 */
function leftRotate(arr, k) {
  // Naive approach
  // Time Complexity - O(nk), Space Complexity - O(1)
  // for(let i = 0; i < k; i++) {
  //   leftRotateByOne(arr);
  // }

  // Approach 2
  // instead of O(1) aux space, use O(k) space to store k elements in temp
  // let temp = arr.slice(0,k);
  // for (let i = 0; i < arr.length-k; i++) {
  //   arr[i] = arr[i+k];
  // }
  // for (let i = 0; i < k; i++) {
  //   arr[arr.length-k+i] = temp[i];
  // }

  // Approach 3 - Reversal method
  // Time Compleity - O(n) , Space - O(1)
  reverse(arr, 0, k-1);
  reverse(arr, k, arr.length-1);
  reverse(arr, 0, arr.length-1);

  return arr;
}

// Time Compexity - O(n), Space Complexity - O(1)
function leftRotateByOne(arr) {
  let temp = arr[0], i;
  for (i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
  }
  arr[i-1] = temp;
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

function swap(arr, i , j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(leftRotate([1,2,3,4,5,6],5));