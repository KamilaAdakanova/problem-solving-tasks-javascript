const testStr = 'Hello';

const reverse = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    newStr += str[i];
  }
  return newStr;
};
res = reverse(testStr);
console.log(res);
