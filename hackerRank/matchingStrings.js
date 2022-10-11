testString = ['ab', 'ab', 'abc'];
testQueries = ['ab', 'abc', 'bc'];
// function matchingStrings(strings, queries) {
//
//   for (let i = 0; i < queries.length; i++) {
// if(queries[i]===)
//     console.log('current i of queries = ', queries[i]);
//     //for (let j = 0; j < strings.length; i++) {
//     console.log('current j of strings = ', strings[j]);
//     //}
//   }
// }
// const res = matchingStrings(testString, testQueries);
// //console.log(res);

//function matchingStrings(strings, queries) {
const createHashTable = (test) => {
  let table = {};
  for (let i = 0; i < test.length; i++) {
    if (!table[test[i]]) {
      table[test[i]] = 1;
    } else {
      table[test[i]]++;
    }
  }
  return table;
};
resTable1 = createHashTable(testString);
resTable2 = createHashTable(testQueries);
console.log(resTable1, resTable2);


for (let key in resTable1) {
    if (resTable1[key] !== resTable2[key]) {
      return false;
    }
  }
  return true;
//}

//const res = matchingStrings(testString, testQueries);
//console.log(res);
S