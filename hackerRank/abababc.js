const str1 = ['ab', 'ab', 'abc'];
const str2 = ['ab', 'abc', 'bc'];

function matchingStrings(strings, queries) {
  // Write your code here
  let newArr = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    //console.log('Iteration for str2', queries[i]);
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count++;
      }
    }
    newArr.push(count);
    //console.log(newArr);
  }
  return newArr;
}

res = matchingStrings(str1, str2);
//console.log(res);

//
//function matchingStrings(strings, queries) {
// Write your code here
//   let newArr = [];

//   const checkingArr = (strings, queries) => {
//     let count = 0;
//     for (let i = 0; i < queries.length; i++) {
//       // console.log('Iteration for str2', queries[i]);
//       if (queries[i] === strings[j]) {
//         count++;
//       }
//       //console.log(count);
//       //arr.push(count);
//     }
//   };
// }

const testArr = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
  let hash = {};
  for (let i = 0; i < a.length; i++) {
    if (!hash[a[i]]) {
      hash[a[i]] = 1;
    } else {
      hash[a[i]]++;
    }
  }
  for (let key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
}
res = lonelyinteger(testArr);
console.log(res);
