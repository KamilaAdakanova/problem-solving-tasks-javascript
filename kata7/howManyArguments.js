//https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript

/*const testArr = (1, 2, 3);
'A', 'B', 'C';
//args_count(1, 2, 3, 10) -> 4
*/
function args_count() {
  return arguments.length;
}

console.log(args_count('A', 'B', 'C'));
