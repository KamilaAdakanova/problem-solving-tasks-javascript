/*
arr.shift()  // remove first element in arr
arr.pop() // remove last el in arr

arr.unshift(0) // add el to begining
arr.push(6) // add el tlo the end
*/
//const testArr = [1, 2, 3, 4, 5];
const testArr = '1, 2, 3, 4, 5';
//const testArr = '';

function array1(arr) {
  let newArr = arr.shift();
  return newArr;
}

// another way to remove first and last el in arr and return arr
function removeChar(str) {
  return str.slice(1, -1);
}
// short way
//const removeChar = (str) => str.slice(1, -1);

function array2(arr) {
  if (arr === '') {
    return null;
  }
  let str = '';
  for (let i = 1; i < arr.length; i++) {
    console.log(arr.length);
    if (arr.length <= 3) {
      return null;
    } else if (arr[i] !== ',' && arr[i] !== arr[arr.length - 1]) {
      str += arr[i] + ' ';
    }
  }
  return str.slice(0, -1);
}

///////////////////

function array(arr) {
  return arr.split(',').slice(1, -1).join(' ') || null;
}

res = array(testArr);
console.log(res);
