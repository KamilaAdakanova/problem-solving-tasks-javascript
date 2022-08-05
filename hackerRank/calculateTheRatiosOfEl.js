// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
const testArr = [1, 1, 0, -1, -1];

const plusMinus = (arr) => {
  let countPositiveNum = 0;
  let countNegativeNum = 0;
  let count0 = 0;
  for (let i = 0; i < arr.length; i++) {
    //console.log('Current element of array', arr[i]);
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] < 0) {
      countNegativeNum++;
    } else countPositiveNum++;

    //console.log({ count0, countNegativeNum, countPositiveNum });
  }
  //console.log({ count0, countNegativeNum, countPositiveNum });

  // const ansForPositiveNum = +(countPositiveNum / arr.length).toFixed(6);
  // const ansForPNegativeNum = +(countNegativeNum / arr.length).toFixed(6);
  // const ansFor0 = +(count0 / arr.length).toFixed(6);

  console.log(parseFloat(countPositiveNum / arr.length).toFixed(6));
  console.log(parseFloat(countNegativeNum / arr.length).toFixed(6));
  console.log(parseFloat(count0 / arr.length).toFixed(6));
};
res = plusMinus(testArr);
console.log(res);
