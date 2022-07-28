const testStr = 'Hello';

const vowels = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (
      str[i] === 'a' ||
      str[i] === 'o' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'u'
    ) {
      count++;
    }
  }
  return count;
};
res = vowels(testStr);
console.log(res);
