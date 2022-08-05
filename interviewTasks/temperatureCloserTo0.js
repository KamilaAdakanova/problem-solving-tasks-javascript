// const testArr = [10, 4, 7, 8, 3, -3, -7, -6];

// const computeClosestToZero = (ts) => {
//   if (ts.length === 0) return 0;
//   let maxNumInArr = [];
//   let minNumInArr = [];

//   for (let i = 0; i < ts.length; i++) {
//     let current = ts[i];
//     //console.log(current);
//     if (current === 0) {
//       return 0;
//     }
//     if (current > 0) {
//       maxNumInArr.push(current);
//       // console.log(maxNumInArr);
//     }
//     if (current < 0) {
//       minNumInArr.push(current);
//       //console.log(minNumInArr);
//     }
//   }
//   let findNFromMaxArr = Math.abs(Math.min(maxNumInArr));
//   let findNFromMinArr = Math.abs(Math.max(minNumInArr));
//   console.log({ findNFromMaxArr, findNFromMinArr });
// };
// res = computeClosestToZero(testArr);
// console.log(res);

// //let arr = [5, 1, 9, -5, 7]; let min = Math.abs(Math.min(...arr)); console.log(min);

//chance2
const testArr = [10, -4, 7, 8, 3, -3, -7, -6];

const computeClosestToZero = (ts) => {
  if (ts.length === 0) return 0;

  let delta = Math.abs(ts[0]);
  let el = ts[0];

  for (let i = 1; i < ts.length; i++) {
    if (Math.abs(ts[i]) < delta) {
      delta = Math.abs(ts[i]);
      el = ts[i];
      console.log('Delta', delta);
      console.log('el', el);
    }
    if (ts[i] < 0 && el < 0 && Math.abs(ts[i]) === delta) {
      el = ts[i];
      console.log(ts[i]);
    }
  }
  return Math.abs(el);
};
res = computeClosestToZero(testArr);
//console.log(res);
// const computeClosestToZero = (ts) => { if (ts.length === 0) return 0;
//   let delta = Math.abs(ts[0]); let el = ts[0];
//   let currentDelta; for (let i = 1; i < ts.length; i++) {
//     currentDelta = Math.abs(ts[i])
//     if (currentDelta < delta) { delta = Math.abs(ts[i]); el = ts[i]; } else if (currentDelta === delta && currentDelta === ts[i]) { el = ts[i]; } } return el; };
