//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

const testStr = '100*b/y';
function solve(eq) {
  revEq = '';
  currentWord = '';
  for (let i = 0; i < eq.length; i++) {
    if (eq[i] !== '+' && eq[i] !== '*' && eq[i] !== '/' && eq[i] !== '-') {
      currentWord += eq[i];
    } else {
      revEq = eq[i] + currentWord + revEq;
      currentWord = '';
    }
  }
  console.log({ currentWord }, { revEq });
  revEq = currentWord + revEq;
  return revEq;
}
res = solve(testStr);
console.log(res);

//function solve(eq){
// return eq.split(/([*\+\-\/])/).reverse().join(‘’);
// }

//other tasks -- need to find the link and create a new file

//     function solve(n){
//         return n == 0 ? ‘0’ : n == 1 ? ‘01’ : solve(n - 1) + solve(n - 2);
//         }

//         function solve(n){ let f0 = “0” let f1 = “01” let result = (n == 0) ? f0 : f1; for (let i = 2; i <= n; i++){ result = f1 + f0; f0 = f1; f1 = result } return result }
