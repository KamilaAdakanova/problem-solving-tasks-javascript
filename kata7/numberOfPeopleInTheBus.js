//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const testArr = [
  [10, 0],
  [3, 5],
  [5, 8],
];

const busStops = (arr) => {
  let peopleIn = 0;
  let peopleOut = 0;
  for (let i = 0; i < arr.length; i++) {
    peopleIn += arr[i][0];
    peopleOut += arr[i][1];
    console.log({ peopleIn }, { peopleOut });
  }
  return peopleIn - peopleOut;
};
res = busStops(testArr);
console.log(res);
