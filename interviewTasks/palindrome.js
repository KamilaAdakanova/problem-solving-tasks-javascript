const testStr = "kayak";
// const palindrome = (str) => {
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     //Math.floor(str.length / 2) это деление длины строки на 2 для сокращения/упрощения проверки/повышения эффективности алгоритма
//     //console.log("Current i = ", i);
//     //console.log("Compare str[i]", str[i], "with str[str.length - 1]", str[str.length - 1 - i]);
//     if (str[i] !== str[str.length - 1 - i]) {
//       //console.log("There are not equal");
//       return false;
//     }
//   }
//   return true;
// };
//console.log(palindrome(testStr));

// другой вариант с методом reverse
const testStr1 = "kayak";
const palindrome1 = (str) => str === str.split("").reverse().join("");
// console.log(palindrome(testStr1));

//hash table    'madam'
const checkPalindrome = (str) => {
  str = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      //!obj[str[i]] говорит если в объекте {} нет этой буквы, то obj[str[i]] = 1; создай ее. например в слове kayak, первая буква k ее еще нет в объекте, то записью obj[str[i]] = 1 - мы слъоздаем ее как k = 1
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++; // k = 2, a = 2 , то ксть он прибавляет одинаковые буквы
    }
  }
  console.log(obj);
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 !== 0)
      //remainder
      count++;
    if (count > 1) return false;
  }
  console.log(count);
  return true;
};
let result = checkPalindrome(testStr1);
console.log(result);
