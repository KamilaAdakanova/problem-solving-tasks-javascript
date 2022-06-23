const testStr = "Hillo IT World!";
let changeFrom = "l";
let changeTo = "X";

const replaceChar = (str, a, b) => str.replace(a, b);
//console.log(replaceChar(testStr, changeFrom, changeTo));

//2method with LOOP 8tasks for replacing letter
const replaceChar1 = (str, a, b) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === a) {
      res = res + b; //res+=b
    } else {
      res += str[i];
    }
  }
  return res;
};
const answer = replaceChar1(testStr, changeFrom, changeTo);
console.log(answer);
