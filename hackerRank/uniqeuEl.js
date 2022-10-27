const testArr = [1, 2, 3, 4, 3, 2, 1];

const uniqueNum = (arr) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else hash[arr[i]]++;
    //console.log(hash);
  }
  for (el in hash) {
    //console.log(hash[el]); //2221 value of el
    if (hash[el] === 1) {
      return el;
    }
  }
};

res = uniqueNum(testArr);
console.log(res);

// const testArr = [1, 2, 3, 4, 3, 2, 1];

// function lonelyinteger(a) {
//   let hash = {};
//   for (let i = 0; i < a.length; i++) {
//     if (!hash[a[i]]) {
//       hash[a[i]] = 1;
//     } else {
//       hash[a[i]]++;
//     }
//   }
//   for (let key in hash) {
//     if (hash[key] === 1) {
//       return key;
//     }
//   }
// }
// res = lonelyinteger(testArr);
// console.log(res);
