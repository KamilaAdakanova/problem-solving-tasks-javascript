// result = 0,1,1,2,3,5,8,13,21,….

const fibonachi = (num) => {
  let arr = [2, 3];

  for (let i = 2; i < num; i++) {
    let nextNum = arr[i - 2] + arr[i - 1];
    arr.push(nextNum);
  }
  return arr[arr.length - 1];
  //arr[arr.length - 1];  or arr[num - 1] // it's last number of arr  - 55
};
res = fibonachi(8);
console.log(res); // 55 - last element in arr [2,3,5,8,13,21,34,55]
