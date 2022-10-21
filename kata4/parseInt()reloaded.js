//https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
const testStr = 'two hundred forty-six';

function parseInt(string) {
  var map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eigthteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  var multiMap = { hundred: 100, thousand: 1000, million: 1000000 };
  var result = 0,
    result2 = 0,
    multiply = 0;

  function getNumber(string) {
    var nArr = string.split('-');
    console.log(nArr);
    if (nArr.length > 1) {
      //return map[nArr[0]] + map[nArr[1]];
      console.log('map[nArr[0]]', map[nArr[0]], 'map[nArr[1]]', map[nArr[1]]);
    }
    return map[string];
  }

  string.split(' ').map(function (number) {
    if (multiMap[number]) {
      result *= multiMap[number];
      if (result >= 1000) {
        result2 = result;
        result = 0;
      }
    } else if (number != 'and') {
      result += getNumber(number);
    }
  });
  return result + result2;
}

res = parseInt(testStr);
console.log(res);

//

function parseInt(string) {
  // numbers and vriations used in suffixes teen and ty
  var wordNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    twen: 2,
    three: 3,
    thir: 3,
    four: 4,
    for: 4,
    five: 5,
    fif: 5,
    six: 6,
    seven: 7,
    eight: 8,
    eigh: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
  };

  var number = 0; // number that will be built
  var total = 0; // partials at 10^3, ^6, ...

  var words = string.match(/\w+/g);

  for (var w = 0, l = words.length; w < l; w++) {
    var word = words[w];
    if (word == 'and') continue;
    if (word == 'thousand') {
      total += number * 1000;
      number = 0;
      continue;
    }
    if (word == 'million') {
      total += number * 1000000;
      number = 0;
      continue;
    }
    if (word == 'hundred') {
      number = number * 100;
      continue;
    }

    var ty = word.match(/(\w+)ty$/);
    if (ty) {
      number += wordNumbers[ty[1]] * 10;
      continue;
    }

    var teen = word.match(/(\w+)teen$/);
    if (teen) {
      number += wordNumbers[teen[1]] + 10;
      continue;
    }

    if (typeof wordNumbers[word] != 'undefined') {
      number += wordNumbers[word];
      continue;
    }

    console.error('unrecognized word: ', word);
  }
  return total + number;
}
