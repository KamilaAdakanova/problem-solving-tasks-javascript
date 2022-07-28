const testStr1 = ['Hello'];

// const removeDublicates = (arr) => {
//   let newArr = [''];

//   for (let i = 0; i < arr.length; i++) {
//     //console.log(arr[0][i]); //H
//     //console.log(arr[i]); // Hello
//     //console.log(arr[0][i].length); //1
//     // console.log(arr[0][i + 1]); //e
//    // console.log(arr[0][i + i]); //H

//         let nextLetter = arr[0][i + 1];

//         if (arr[0][i] !== nextLetter) {
//           newArr += arr[0][i];
//           console.log(newArr);
//         } else continue;
//   }
// };
// res = removeDublicates(testStr1);
// console.log(res);

//hashTable
const removeDublicates1 = (arr) => {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[0][i]); //H
    //console.log(arr[i]); // Hello
    //console.log(arr[0][i].length); //1
    // console.log(arr[0][i + 1]); //e
    // console.log(arr[0][i + i]); //H

    let nextLetter = arr[0][i + 1];

    if (arr[0][i] !== nextLetter) {
      newArr += arr[0][i];
      console.log(newArr);
    } else continue;
  }
};
res = removeDublicates1(testStr1);
console.log(res);
