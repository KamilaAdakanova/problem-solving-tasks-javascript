//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#syntax
//The reduce() method executes on each element of the array, in order, passing in the return value from the calculation on the preceding element.

//ex:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

//another example
const testArr = [1, 5.2, 4, 0, -1];

const sum = (n) => n.reduce((a, b) => a + b, 0);

res = sum(testArr);
console.log(res); // 9.2
