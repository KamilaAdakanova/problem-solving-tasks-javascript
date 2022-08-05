const testArr = [
  [1, 6, 3, 3, 8],
  [2, 15, 6, 4, 6],
  [1, 7, 9, 8, 5],
  [3, 40, 2, 3, 4],
  [1, 3, 2, 4, 5],
];

const diagonalOfDifference = (arr) => {
  let countLeftToRigthDiagonal = 0;
  let countRightToLeftDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][i]);
    countLeftToRigthDiagonal += arr[i][i];
    countRightToLeftDiagonal += arr[i][arr.length - i - 1];
  }
  const finalRes = Math.abs(
    countLeftToRigthDiagonal - countRightToLeftDiagonal
  );
  return finalRes;
};
res = diagonalOfDifference(testArr);
console.log(res);
