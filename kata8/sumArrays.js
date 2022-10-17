//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Sum Numbers
const testArr = [1, 5.2, 4, 0, -1];

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers === []) {
      return [];
    } else {
      sum += numbers[i];
    }
  }
  return sum;
}
res = sum(testArr);
console.log(res);

//
const sum = (n) => n.reduce((a, b) => a + b, 0);
