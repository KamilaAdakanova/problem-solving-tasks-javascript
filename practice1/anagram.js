const test = ['fried', 'fired'];

const anagram = (arr) => {
  if (arr[0].length !== arr[1].length) {
    return false;
  }
  //console.log(arr[0].length, arr[1]);
  const createHashTable = (str) => {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
      //console.log(arr[0][i]);
      let letterOf1Word = str[i];
      if (!hash[letterOf1Word]) {
        hash[letterOf1Word] = 1;
      } else hash[letterOf1Word]++;
    }
    return hash;
  };
  hashTableofWord1 = createHashTable(arr[0]);
  hashTableofWord2 = createHashTable(arr[1]);
  //console.log({ hashTableofWord1, hashTableofWord2 });

  for (let key in hashTableofWord1) {
    //console.log(hashTableofWord1[key]);
    if (hashTableofWord1[key] !== hashTableofWord2[key]) {
      return false;
    }
  }
  return true;
};
res = anagram(test);
console.log(res);
