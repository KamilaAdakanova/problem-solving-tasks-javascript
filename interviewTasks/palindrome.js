// const testStr = "kayak";
// const palindrome = (str) => {
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     //Math.floor(str.length / 2) это деление длины строки на 2 для сокращения/упрощения проверки/повышения эффективности алгоритма
//     console.log("Current i = ", i);
//     console.log("Compare str[i]", str[i], "with str[str.length - 1]", str[str.length - 1 - i]);
//     if (str[i] !== str[str.length - 1 - i]) {
//       console.log("There are not equal");
//       return false;
//     }
//   }
//   return true;
// };
// console.log(palindrome(testStr));

// другой вариант с методом reverse

const testStr1 = "kayak";
const palindrome = (str) => str === str.split("").reverse().join("");

console.log(palindrome(testStr1));
