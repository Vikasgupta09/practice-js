function leaders(arr) {
  let n = arr.length-1;
  let result = [arr[n]];
  let currentMax = arr[n];
  for(let i = n-1; i >=0; i--) {
    if(arr[i] > currentMax) {
      result.unshift(arr[i]);
      currentMax = arr[i];
    }
  }
  return result;
}

console.log(leaders([7,10,4,3,6,5,2]));