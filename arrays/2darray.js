let arr2d = [
  [1, 2, 3, 4, 5, 6], 
  [7, 8, 9, 10, 11, 12], 
  [13, 14, 15, 16, 17, 18]
]; 
spiralTraversal(arr2d);
function spiralTraversal(arr2d) {
  const results = [];
  let rowLength = arr2d.length;
  let colLength = arr2d[0].length;
  let counter = 1;

  let startColumn = 0;
  let startRow = 0;
  let endColumn = colLength-1;
  let endRow = rowLength-1;
  console.log(startRow, startColumn, endRow, endColumn);
  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for(let i = startColumn; i <= endColumn; i++) {
      results.push(arr2d[startRow][i]);
    }
    startRow++;
    if(startRow > endRow) {
      console.log(results);
      return;
    }
    // last column
    for(let i = startRow; i <= endRow; i++) {
      results.push(arr2d[i][endColumn]);
    }
    endColumn--;
    // bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      results.push(arr2d[endRow][i]);
    }
    endRow--;
    // top column
    for(let i = endRow; i >= startRow; i--) {
      results.push(arr2d[i][startColumn]);
    }
    startColumn++;

    console.log(startRow, startColumn, endRow, endColumn);
  }
  console.log(results);
}
