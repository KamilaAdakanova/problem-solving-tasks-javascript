// Example
//For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}
console.log(seatsInTheater(16, 11, 5, 3));
