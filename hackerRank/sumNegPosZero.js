const testArr = [1, 1, 0, -1, -1];

const plusMinus = (arr) => {
  let countSumPositive = 0;
  let countSumNegative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i] > 0) {
      countSumPositive++;
      //console.log(countSumPositive);
    } else if (arr[i] < 0) {
      countSumNegative++;
    } else zero++;
  }
  const ansPos = parseFloat(countSumPositive / arr.length).toFixed(6);
  const ansNeg = parseFloat(countSumNegative / arr.length).toFixed(6);
  const ans0 = parseFloat(zero / arr.length).toFixed(6);
  console.log(ansPos);
  console.log(ansNeg);
  console.log(ans0);
};
res = plusMinus(testArr);
console.log(res);
