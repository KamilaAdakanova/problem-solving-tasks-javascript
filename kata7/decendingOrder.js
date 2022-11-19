//

const testArr = 42154; // 45124
function descendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
res = descendingOrder(testArr);
console.log(res);
////////

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}
/////////////
function descendingOrder(n) {
  n = [...n.toString()];

  return Number(n.sort().reverse().join(''));
}
