//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//String.prototype.substring()

//The substring() method returns the part of the string between the start and end indexes,
//or to the end of the string.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

// another js task kata 7

//https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

const str1 = 'versed'; //
const str2 = 'v5rsed'; //

var mispelled = function (word1, word2) {
  if (
    word1 === word2.substring(0, word2.length - 1) ||
    word2 === word1.substring(1, word1.length) ||
    word1 === word2.substring(1, word2.length) ||
    word2 === word1.substring(0, word2.length - 1)
  ) {
    return true;
  }

  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
  }
  return count <= 1 ? true : false;
};

//
function mispelled(word1, word2) {
  if (word1.length > word2.length) {
    return compareNotEqual(word1, word2);
  }
  if (word1.length < word2.length) {
    return compareNotEqual(word2, word1);
  }
  {
    return compareEqualStr(word1, word2);
  }
}
function compareNotEqual(longW, shortW) {
  return (
    shortW === longW.substring(0, longW.length - 1) ||
    shortW === longW.substring(1, longW.length)
  );
}
function compareEqualStr(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) {
      count++;
    }
  }
  return count > 1 ? false : true;
}

res = mispelled(str1, str2);
console.log(res);
