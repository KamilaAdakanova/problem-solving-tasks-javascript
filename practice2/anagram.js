const testStr1 = 'fried';
const testStr2 = 'fired'; // true;
// anagram('gainly', 'lying') //true;
// anagram('listen', 'bye')  // false;

const anagram = (str1, str2) => {
  //console.log(str1.length, console.log(str1.length));
  if (str1.length !== str2.length) {
    return false;
  } //edge Case
  const createHashTable = (word) => {
    const hash = {};
    for (let i = 0; i < word.length; i++) {
      //console.log(word[i]);
      if (!hash[word[i]]) {
        hash[word[i]] = 1;
      } else hash[word[i]]++;
    }
    return hash;
  };

  const hashTableForStr1 = createHashTable(str1);
  const hashTableForStr2 = createHashTable(str2);

  //   console.log('Str1', hashTableForStr1);
  //   console.log('Str2', hashTableForStr2);
  //   console.log({ hashTableForStr1, hashTableForStr2 });
  for (let key in hashTableForStr1) {
    //console.log(hashTableForStr1[key]); //value

    if (hashTableForStr1[key] !== hashTableForStr2[key]) {
      return false;
    }
  }
  return true;
};
res = anagram(testStr1, testStr2);
console.log(res);
