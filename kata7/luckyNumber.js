//https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

function isLucky(n) {
  let newN = n.toString();
  let sum = 0;
  for (let i = 0; i < newN.length; i++) {
    console.log(newN[i]);
    sum = sum + +newN[i];
  }
  return sum % 9 == 0;
}
console.log(isLucky(189237));
