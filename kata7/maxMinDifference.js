//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
const testArr = [0, 1, 2, 3, 4, 5, 6];

function maxDiff(list) {
  let max = list[0]; //2
  let min = list[0]; //-2

  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    if (current > min) {
      max = current;
    } else {
      min = current;
    }
  }
  return max - min;
}
res = maxDiff(testArr);
console.log(res);
