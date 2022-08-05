const testStr1 = 'fried';
const testStr2 = 'fired';

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const createHashTable = (worl) => {
    let hash = {};
    for (let i = 0; i < worl.length; i++) {
      //console.log(worl[i]);
      if (!hash[worl[i]]) {
        hash[worl[i]] = 1;
      } else hash[worl[i]]++;
    }
    return hash;
  };

  hashForStr1 = createHashTable(str1);
  hashForStr2 = createHashTable(str2);
  // console.log(hashForStr1, hashForStr2);
  for (let key in hashForStr1) {
    // console.log(hashForStr1[key]);
    if (hashForStr1[key] !== hashForStr2[key]) {
      return false;
    }
  }
  return true;
};
res = anagram(testStr1, testStr2);
console.log(res);
