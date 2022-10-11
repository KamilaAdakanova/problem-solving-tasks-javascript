//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
const testNum = 2;
function sc(floor) {
  let scriming = 'Aa~ ';
  let scriming2 = 'Pa! Aa!';
  let scriming3 = 'Pa!';
  let result = '';
  if (floor <= 1) return '';
  for (let i = 1; i <= floor; i++) {
    if (floor <= 6 && i == floor) {
      result += scriming2;
    } else if (floor > 6 && i == floor) {
      result += scriming3;
    } else result += scriming;
  }
  return result;
}
res = sc(testNum);
console.log(res);
