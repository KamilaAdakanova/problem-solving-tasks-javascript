// #1 Palindrome
// definition:- Palindrome is a word, sentence or character sequence which reads the same as we reverse it.
//  Like- “mam”, “racecar” etc.

const testWord = "kayyak";
//1 with LOOP
const palindrome = (word) => {
  for (let i = 0; i <= word.length / 2 - 1; i++) {
    // this method (without Math.floor) is more effective
    //Math.floor(word.length / 2) is good too, but takes time for process
    console.log("check i", i);
    console.log("check letter", word[i]);
    console.log("Compare word[i]", word[i], "with word[word.length - 1]", word[word.length - 1 - i]);

    if (word[i] !== word[word.length - 1 - i]) {
      // console.log("There are not equal");

      return false;
    }
  }
  return true;
};
res = palindrome(testWord);
console.log(res);

// другой вариант с методом reverse
const testStr1 = "kayak";
const palindrome1 = (str) => str === str.split("").reverse().join("");
// console.log(palindrome(testStr1));

//как работает метод split
let str = "kayak";
let split = str.split("");
//console.log(split); //[ 'k', 'a', 'y', 'a', 'k' ]

//как работает метод reverse
let greeting = ["l", "a", "y", "a", "k"];
//console.log(greeting.reverse());

//3 Hash Table это решение задачи на то что если мы можем создать палиндром.
//ХэшТэйбл не считает порядок букв, он ведет учет уникальных букв
const testStr2 = "madam";
const palindrome2 = (str) => {
  str = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // console.log("Itteration ", str[i]);
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  //console.log(obj);
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 !== 0)
      //remainder
      count++;
    if (count > 1) return false;
  }
  //console.log(count);
  return true;
};
res = palindrome2(testStr2);

//console.log(res);
