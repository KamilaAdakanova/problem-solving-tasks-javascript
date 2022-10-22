//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

//The flat() method creates a new array
//with all sub-array elements concatenated into it recursively up to the specified depth.

//const arr1 = [0, 1, 2, [3, 4]];
//console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
