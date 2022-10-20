//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
const testArr = [-0, 1, 2, -3, 4, 5, -6];

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
  console.log({ max }, { min });
  return max - min;
}
res = maxDiff(testArr);
console.log(res);

////////
const maxDiff = (list) => {
  if (list.length <= 1) {
    return 0;
  }

  let min = list[0];
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    const current = list[i];
    min = Math.min(min, current);
    max = Math.max(max, current);
  }

  return max - min;
};
