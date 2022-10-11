const testArr = [5, 3, 9, 7, 11];

const findTwoMin = (arr) => {
  let minMin = arr[0];
  let minNext = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current < minMin) {
      minNext = minMin;
      minMin = current;
    } else if (current < minNext) {
      minNext = current;
      console.log('This is next after min', minNext);
    }
  }
  let newArr = [];
  for (let i = minMin; i <= minNext; i++) {
    newArr.push(i);
  }
  return newArr;
};
res = findTwoMin(testArr);
console.log(res);
