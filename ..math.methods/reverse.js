//Array.prototype.reverse()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//The reverse() method reverses an array in place and returns the reference to the same array,
//the first array element now becoming the last, and the last array element becoming the first.

//Array.prototype.map()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}
console.log(digitize(54321)); // [12345]
