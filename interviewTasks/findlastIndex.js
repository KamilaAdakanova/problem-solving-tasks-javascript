let testStr = "My name is Kamila, what is your name?";
let word1 = "name";
let word2 = "aa";

const findLastIndex = (s, f) => s.lastIndexOf(f);

// const res1 = findLastIndex(testStr, word1);
// const res2 = findLastIndex(testStr, word2);
// console.log(res1, res2);

const findLastIndexForLoop = (s, f) => {
  console.log(`Привет это функция findLastIndexForLoop. Вы хотите протестировать стринг "${s}". Будем исать последнее слово "${f}".`);
  let current;
  let counter = 0;
  for (i = s.length - 1; i >= 0; i--) {
    console.log(`\n new Itteration. current i = ${i}`);
    current = s[i];
    console.log(`current letter is  "${current}"`);
    console.log(` ищем букву ${f[f.length - counter - 1]}`);
    if (current === f[f.length - counter - 1]) {
      console.log("найдено совпадение");
      counter++;
      console.log("найдено счетчик букв увеличенная на 1 и теперь равен", counter);
      console.log(`Теперь ищем новую букву ${f[f.length - counter - 1]}`);
      if (counter === f.length) {
        console.log(`решение задачи найдено, индекс равен  ${i - counter + f.length}`);
        return i - counter + f.length;
      }
    } else {
      console.log("в середине слова ошибка/не соответсвует слово");
      counter = 0;
    }
  }

  console.log("Решение не найдено возвращаем -1");
  return -1;
};
findLastIndexForLoop(testStr, word1);

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
