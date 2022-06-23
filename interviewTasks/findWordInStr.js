// function countAba(str, f) {
//   let countLetters = 0; //для подсчета  количества совпавших букв подряд из искомого слова
//   let countWords = 0; //для подчета количества совпадений самого искомого слова
//   let current; //для сохранения буквы
//   for (i = 0; i < str.length; i++) {
//     current = str[i]; // текущая буква строки
//     console.log(`\n Сравниваем текущую букву  '${current}' с искомой буквы из слова '${f[countLetters]}'`);

//     if (current === f[countLetters]) {
//       //сравнение текущей буквы с буквой искомого слова
//       console.log("Текущая буква строки совпадает с искомой буквой слова");
//       countLetters++;
//       console.log("Изменили countLetters, его новое значение", countLetters);
//       if (countLetters === f.length) {
//         //сравнение длины слова с количеством совпавших букв
//         countWords++;
//         console.log("Полностью нашли слово");
//         console.log("Общее количество слов найденное в строке составляет", countWords);
//         countLetters = 0;
//       }
//     } else {
//       countLetters = 0;
//       console.log("Текущая буква строки не совпадает с буквой иского слова, начинаем посик с первой буквы искомого слова");
//     }
//   }
//   return countWords;
// }
// console.log(countAba("hjh4343abaeoeru4abсiu343abс", "abс"));

function countAba(str, f) {
  let countLetters = 0;
  let countWords = 0;
  let current;
  for (i = 0; i < str.length; i++) {
    current = str[i];
    if (current === f[countLetters]) {
      countLetters++;
      if (countLetters === f.length) {
        countWords++;
        countLetters = 0;
      }
    } else {
      countLetters = 0;
    }
  }
  return countWords;
}
console.log(countAba("hjh4343abaeoeru4abсiu343abс", "aba"));
