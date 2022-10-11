const testNum = 5;
function drawStairs(n) {
  let letter = 'I';
  let result = '';

  for (let i = 0; i < n; i++) {
    if (n === 1) {
      result += letter;
    }
    if (i == n) {
      result += letter.repeat(n - 1);
    } else {
      result += letter + `\n `;
    }
  }
  return result;
}
res = drawStairs(testNum);
console.log(res);

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ' '.repeat(n - i);

//     let str2 = '*'.repeat(i * 2 - 1);

//     console.log(str + str2 + str);
//   }
// }

//pyramid(5);
