const testarr = [8, 40, 5, 1, 3];
// testarr.sort(function (a, b) {
//   return a - b;
// });
// console.log(testarr);

const sortArrAndMiddleNumber = (arr) => {
  const sort = arr.sort((a, b) => a - b);
  const middleNum = sort.length / 2 - 0.5;
  console.log(arr[middleNum]);
};
res = sortArrAndMiddleNumber(testarr);
