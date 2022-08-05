const testArr = [5, 2, 1, 5, 3];
const multyAllArr = (arr) => {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(product / arr[i]);
    //console.log(res);
  }
  return res;
};
final = multyAllArr(testArr);
console.log(final);
