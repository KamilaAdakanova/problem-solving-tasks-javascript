const testArr = [1, 5.2, 4, 0, -1];

for (let i = 0; i < newN.length; i++) {}

res = inviteMoreWomen(testArr);
console.log(res);

/////////////////////////
const hash = {};
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
  if (!hash[arr[i]]) {
    hash[arr[i]] = 1;
  } else hash[arr[i]]++;
  //console.log(hash);
}
for (el in hash) {
  //console.log(hash[el]); //2221 value of el
  if (hash[el] === 1) {
    return el;
  }
}

///////////////////////////

const testString = '   Reverse    this cool   seNteNce for me  please T     ';
const nameOfFunction = (str) => {
  console.clear();
  console.log('   ===> START HERE <===');
  console.log(`This function will .....with "${str}"`);
  let word = '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    console.log(`\nNew iteration. Current i="${i}"`);
    let letter = str[i];
    console.log(`current letter is "${letter}"`);
    if (letter === ' ') {
      console.log('current letter is SPACE');
      if (word === '') {
        console.log(
          'this is first SPACE of sentence or SPACE afret another SPACE - no need to do something'
        );
      } else {
        console.log('this SPACE is a word separator');
        if (result !== '') {
          console.log(
            `Current word is not the first one - I need to add additional SPACE`
          );
          word = ' ' + word;
        }
        result += word;
        word = '';
      }
    } else {
      console.log(
        'current letter is not SPACE - add it to the beginig of the current word'
      );
      word = letter + word;
    }
    console.log(`Iteration is ended`, { i, letter, word, result });
  }
  return result;
};
const reversed = nameOfFunction(testString);
console.log(`final result is "${reversed}"`);
