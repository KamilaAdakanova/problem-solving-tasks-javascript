//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const testArr = 9119;

function squareDigits(num) {
  let str = num.toString();
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let newNum = +str[i];
    let newNum2 = (newNum ** 2).toString();
    res += newNum2;
    console.log(res);
  }
  return +res;
}
result = squareDigits(testArr);
console.log(result);
