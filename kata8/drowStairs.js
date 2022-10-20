const testNum = 5;

// function drawStairs(n) {
//   let letter = 'I';
//   let result = '';

//   for (let i = 2; i <= n; i++) {
//     if (n === 1) {
//       result += letter;
//     }
//     if (i == n) {
//       result += letter.repeat(n - 1);
//     } else {
//       result += letter + `\n `;
//     }
//   }
//   return result;
// }
// res = drawStairs(testNum);
// console.log(res);

function drawStairs(n) {
  let str = 'I';
  for (let i = 2; i <= n; i++) {
    str += '\n';

    for (let j = 1; j < i; j++) {
      str += ' ';
    }
    str += 'I';
  }
  return str;
}
console.log(drawStairs(5));

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ' '.repeat(n - i);

//     let str2 = '*'.repeat(i * 2 - 1);

//     console.log(str + str2 + str);
//   }
// }

//pyramid(5);
