//https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript

/*const testArr = (1, 2, 3);
'A', 'B', 'C';
//args_count(1, 2, 3, 10) -> 4
*/
const args_count = (arg) => {
  let arr = arg;
  let count = 0;
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
    //count++;
  }
  // return count;
};

console.log(args_count('A', 'B', 'C'));
