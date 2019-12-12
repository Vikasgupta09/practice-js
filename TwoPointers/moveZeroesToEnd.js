const moveZeroesToEnd = arr => {
  let i = 0,
    j = 0;

  if (!arr || !arr.length) {
    return -1;
  }
  while (i < arr.length && j < arr.length) {
    while (i < arr.length && arr[i] !== 0) {
      i++;
    }
    if (i + 1 > j) {
      j = i + 1;
    }
    while (j < arr.length && arr[j] === 0) {
      j++;
    }

    if (i !== j && j < arr.length) {
      // swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  return arr;
};

console.log(moveZeroesToEnd([1, 23, 0, 5, -1, 3, 0, 0, 0, 0, 5]));
console.log(moveZeroesToEnd([1, 23, 0, 0,0,0,0,5, -1, 3, 0, 0, 0, 0, 5]));