//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
testArr = [78, 56, 232, 12, 18];
const findSmallestInteger = (arr) => {
  let smallestInt = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestInt) {
      smallestInt = arr[i];
    }
  }
  return smallestInt;
};
res = findSmallestInteger(testArr);
console.log(res);
