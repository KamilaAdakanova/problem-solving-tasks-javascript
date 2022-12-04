function reverseStr(str) {
  let word = '';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    // console.log(str[str.length - 1]);
    if (str[i] !== ' ') {
      word = str[i] + word;
      console.log(word);
    } else if (str[i] === ' ') {
      if (word !== '') {
        console.log(
          `Word '${word}' is not enthy, it means there is a space between words or at the end of sentence`
        );
        newStr += word + ' ';
      } else if (word === '') {
        console.log(
          `Word '${word}' is still enthy, it means there is a space at the beginning of the sentence`
        );
        newStr = ' ' + newStr;
      }
      word = '';
    }
    // if (str[i] === str[str.length - 1]) {
    //   newStr += word;
    // }
  }
  return newStr;
}
console.log(reverseStr(' Hello world! '));

// const testString = '   Reverse    this cool   seNteNce for me  please T     ';
// const reverseOnlyWords = (str) => {
//   console.clear();
//   console.log('   ===> START HERE <===');
//   console.log(
//     `You want to reverse all the letters of each word and leave the same word order in this sentence: "${str}"`
//   );
//   let word = '';
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     console.log(`\nNew iteration. Current i="${i}"`);
//     let letter = str[i];
//     console.log(`current letter is "${letter}"`);
//     if (letter === ' ') {
//       console.log('current letter is SPACE');
//       if (word === '') {
//         console.log(
//           'this is first SPACE of sentence or SPACE afret another SPACE - no need to do something'
//         );
//       } else {
//         console.log('this SPACE is a word separator');
//         if (result !== '') {
//           console.log(
//             `Current word is not the first one - I need to add additional SPACE`
//           );
//           word = ' ' + word;
//         }
//         result += word;
//         word = '';
//       }
//     } else {
//       console.log(
//         'current letter is not SPACE - add it to the beginig of the current word'
//       );
//       word = letter + word;
//     }
//     console.log(`Iteration is ended`, { i, letter, word, result });
//   }
//   return result;
// };
// const reversed = reverseOnlyWords(testString);
// console.log(`final result is "${reversed}"`);
