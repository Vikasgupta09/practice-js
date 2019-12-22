/**
 * Matrix Chain multiplication
 */

function MatrixChainOrder(arr, i, j) { 
    if(i === j) 
        return 0; 
    let min = Number.MAX_VALUE; 
  
    // place parenthesis at different places  
    // between first and last matrix, recursively  
    // calculate count of multiplications for  
    // each parenthesis placement and return  
    // the minimum count 
    for (let k = i; k < j; k++) { 
      let count = MatrixChainOrder(arr, i, k) + 
                MatrixChainOrder(arr, k + 1, j) + 
                arr[i - 1] * arr[k] * arr[j]; 
  
      if (count < min) {
        min = count; 
      }
    } 
    // Return minimum count 
    return min; 
} 
let arr = [40,20,30,10,30];
// console.log(arr,1,arr.length-1);
console.log(MatrixChainOrder(arr,1,arr.length-1));