const testStr = 'write a function which takes a string of';

const capitalize = (str) => {
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    //console.log('Current letter', str[i]);
    //console.log('Next letter', str[i + 1]);

    if (str[i] === ' ') {
      //console.log('this is space');
      newStr += str[i] + str[i + 1].toUpperCase();
      //console.log(newStr);
      i++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
res = capitalize(testStr);
console.log(res);
