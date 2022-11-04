/* #4 Anagram
Definition:- A word is an anagram of another word if they are using the same letters with the same quantity, but arranged differently.

PROBLEM:- write a function that checks if two provided strings are anagrams of each other; 
letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation.
 For Example:

anagram('fried','fired') // true;
anagram('gainly', 'lying') //true;
anagram('listen', 'bye')  // false; */
const testStr1 = 'fried';
const testStr2 = 'fired';

const anagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  const createHashTable = (str) => {
    let table = {};
    for (let i = 0; i < str.length; i++) {
      if (!table[str[i]]) {
        table[str[i]] = 1;
      } else {
        table[str[i]]++;
      }
    }
    return table;
  };
  resTable1 = createHashTable(word1);
  resTable2 = createHashTable(word2);
  console.log(resTable1);
  for (let key in resTable1) {
    if (resTable1[key] !== resTable2[key]) {
      return false;
    }
  }
  return true;
};
console.log(anagram(testStr1, testStr2));
