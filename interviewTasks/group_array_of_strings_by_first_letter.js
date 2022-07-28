// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const testData = ['Alf', 'Alice', 'Ben'];

const myFunction = (arr) => {
  const hash = {};
  for (let key of arr) {
    //console.log(key[0]);
    if (hash[key[0].toLowerCase()]) {
      hash[key[0].toLowerCase()].push(key);
    } else {
      hash[key[0].toLowerCase()] = [key];
    }
  }
  return hash;
};
res = myFunction(testData);
console.log(res);
