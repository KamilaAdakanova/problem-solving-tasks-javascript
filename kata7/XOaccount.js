const testStr = 'xo';

function XO(str) {
  let newStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < newStr.length; i++) {
    console.log(newStr[i]);
    if (newStr[i] == 'x') {
      countX++;
    } else if (newStr[i] == 'o') {
      countO++;
    }
  }
  console.log({ countX }, { countO });
  return countO == countX;
}

console.log(XO(testStr));
