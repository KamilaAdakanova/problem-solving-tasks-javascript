//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const testArr = ['a', 'b', 'c'];
var number = function (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}`);
    console.log(newArr);
  }
  return newArr;
};
res = number(testArr);
console.log(res);

//const number = array => array.map((n, i) => `${i + 1}: ${n}`);
