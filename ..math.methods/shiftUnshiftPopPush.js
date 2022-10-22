/*
arr.shift()  // remove first element in arr
arr.pop() // remove last el in arr

arr.unshift(0) // add el to begining
arr.push(6) // add el tlo the end
*/
const testArr = [1, 2, 3, 4, 5];

function array(arr) {
  let newArr = arr.shift();
  return newArr;
}

res = array(testArr);
console.log(res);

// another way to remove first and last el in arr and return arr
function removeChar(str) {
  return str.slice(1, -1);
}
// short way
const removeChar = (str) => str.slice(1, -1);
