// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.

// Example

const testArr = [1, 2, 3, 4, 5];

const maxMinSum = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    sum += current;
  }
  const maxSum = sum - min;
  const minSum = sum - max;

  console.log(minSum + ' ' + maxSum);
};
res = maxMinSum(testArr);
