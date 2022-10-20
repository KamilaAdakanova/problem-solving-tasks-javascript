//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

// function numberToPower(number, power){
//     return number ** power
//    }

//
function numberToPower(number, power) {
  let a = 1;
  for (let i = 1; i <= power; i++) {
    a = a * number;
  }
  return a;
}
res = numberToPower(0, 3);
console.log(res);
