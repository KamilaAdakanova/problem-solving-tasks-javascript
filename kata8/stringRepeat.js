//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  if (n < 0) return '';
  if (n === 1) return s;
  else return s + repeatStr(n - 1, s);
}
console.log(repeatStr(5, 'ha '));
