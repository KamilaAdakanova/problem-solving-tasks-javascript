/*write a function where we need to return the index of “find” string in the “str” string. 
Return “-1” if the “find” string is not in the “str” string
Examples : 

String str ="My name is Kamila"
String find = "name"
index = 3


String str ="My n aa me is Kamila"
String find = "aa"
index = -1
*/

// let testStr = "My name is Kamila";
// let word1 = "name";
// let word2 = "aa";
// const findIndex = (s, f) => s.indexOf(f);

// const res1 = findIndex(testStr, word1);
// const res2 = findIndex(testStr, word2);
// console.log(res1, res2);

// const findIndexForLoop = (s, f) => {
//   console.log(`Привет это функция findIndexForLoop. Вы хотите протестировать стринг "${s}". Будем исать слово "${f}".`);
//   let current;
//   let counter = 0;
//   for (i = 0; i < s.length; i++) {
//     console.log(`\n new Itteration. current i = ${i}`);
//     current = s[i];
//     console.log(`current letter is  "${current}"`);
//     console.log(` ищем букву ${f[counter]}`);
//     if (current === f[counter]) {
//       console.log("найдено совпадение");
//       counter++;
//       console.log("найдено счетчик букв увеличенная на 1 и теперь равен", counter);
//       console.log(`Теперь ищем новую букву ${f[counter]}`);
//       if (counter === f.length) {
//         console.log(`решение задачи найдено, индекс равен  ${i - counter + 1}`);
//         return i - counter + 1;
//       }
//     } else {
//       console.log("в середине слова ошибка/не соответсвует слово");
//       counter = 0;
//     }
//   }
//   console.log("Решение не найдено возвращаем -1");
//   return -1;
// };
// findIndexForLoop(testStr, word1);

// const findIndexForLoop = (s, f) => {
//   let current;
//   let counter = 0;
//   for (i = 0; i < s.length; i++) {
//     current = s[i];
//     if (current === f[counter]) {
//       counter++;
//       if (counter === f.length) {
//         return i - counter + 1;
//       }
//     } else {
//       counter = 0;
//     }
//   }
//   return false;
// };
// console.log(findIndexForLoop(testStr, word2));
