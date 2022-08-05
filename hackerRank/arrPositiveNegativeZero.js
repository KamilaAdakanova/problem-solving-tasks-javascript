const testArr = [1, 1, 0, -1, -1];
//1method LOOP найти отношение между полож и отриц и 0 (сначало находим количество кадлого, а потом делим на длину arr)
// const plusMinus = (arr) => {
//   let countForNeg = 0;
//   let countForPos = 0;
//   let count0 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       countForNeg++;
//     } else if (arr[i] > 0) {
//       countForPos++;
//     } else {
//       count0++;
//     }
//   }
//   let ratioNeg = (countForNeg / arr.length).toFixed(6);
//   let rationPos = (countForPos / arr.length).toFixed(6);
//   let ration0 = (count0 / arr.length).toFixed(6);
//   console.log(`${ratioNeg}\n${rationPos}\n${ration0}`);
// };

// let res = plusMinus(testArr);
// console.log(res);

const plusMinus1 = (arr) => {
  let countForNeg = 0;
  let countForPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countForNeg++;
    } else if (arr[i] > 0) {
      countForPos++;
    }
  }
  let rationNeg = (countForNeg / arr.length).toFixed(6);
  let rationPos = (countForPos / arr.length).toFixed(6);
  let ration0 = ((arr.length - countForNeg - countForPos) / arr.length).toFixed(
    6
  );
  return `${rationNeg}\n${rationPos}\n${ration0}`;
};
let res1 = plusMinus1(testArr);
console.log(res1);

// const plusMinus2 =(arr)=>{
//   let countNeg = 0;
//   let countPos = 0;
//   for(let el of arr){
//     (el < 0)? countNeg++ : countPos++
//   }
//   let ratioNeg = (countNeg/arr.length).toFixed(6);
//   let ratioPos = (countPos/arr.length).toFixed(6);
//   let ratioZero = ((arr.length - countNeg - countPos)/arr.length).toFixed(6);
//   console.log(`${ratioNeg}\n${ratioPos}\n${ratioZero}`)
//   }
