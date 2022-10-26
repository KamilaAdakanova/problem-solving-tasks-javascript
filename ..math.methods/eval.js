//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
eval();
//The eval() function evaluates JavaScript code represented as a string and returns
// its completion value. The source is parsed as a script

function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return 'unknown value';
  }
}
