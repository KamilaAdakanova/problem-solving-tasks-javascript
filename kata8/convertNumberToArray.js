// function digitize(n) {
//   let str = n.toString();
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr;
// }
// res = digitize(35231);
// console.log(res);
function digitize(n) {
  let str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(+str[i]);
  }
  return arr;
}
res = digitize(35231);
console.log(res);
