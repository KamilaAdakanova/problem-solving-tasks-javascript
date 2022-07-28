const testStr1 = 'Hello';

const replaceLetter = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l') {
      newStr += 'X';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
res = replaceLetter(testStr1);
console.log(res);

//if it's arr
const testStr2 = ['Hello'];

const replaceLetter1 = (str) => {
  let newStr = '';
  for (let i = 0; i < str[0].length; i++) {
    if (str[0][i] === 'l') {
      newStr += 'X';
    } else {
      newStr += str[0][i];
    }
  }
  return newStr;
};
res = replaceLetter1(testStr2);
console.log(res);
