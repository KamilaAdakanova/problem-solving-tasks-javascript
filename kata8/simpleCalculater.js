//https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

function calculator(a, b, sign) {
  if (typeof a != 'number' || typeof b != 'number') {
    return 'unknown value';
  }
  if (sign === '+') {
    return a + b;
  } else if (sign === '-') {
    return a - b;
  } else if (sign === '*') {
    return a * b;
  } else if (sign === '/') {
    return a / b;
  } else {
    return 'unknown value';
  }
}
console.log(calculator(6, '$', '/'));
//console.log(typeof 7);

//another way

function calculator(a, b, sign) {
  if (typeof a === 'number' && typeof b === 'number') {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  }
  return 'unknown value';
}

//another way
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
