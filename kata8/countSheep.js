//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
const testNum = 5;
const countSheep = (num) => {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
res = countSheep(testNum);
console.log(res);
