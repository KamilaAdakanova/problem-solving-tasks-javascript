//https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript

function calculate(a, o, b) {
  if (o === '+') {
    return a + b;
  } else if (o === '-') {
    return a - b;
  }
  if (o === '/' && b !== 0) {
    return a / b;
  } else if (o === '*') {
    return a * b;
  } else return null;
}

console.log(calculate(4, '/', 0));
