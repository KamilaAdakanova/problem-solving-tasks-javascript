//https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

const testArr = [1, 1, 3, 2, 1];

const countingSort = (arr) => {
  const hash = {};
  let max = -Infinity;
  let current;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current > max) {
      max = current;
    }
    //console.log(current);
    if (!hash[current]) {
      hash[current] = 1;
    } else hash[current]++;
  }

  for (let j = 0; j <= max; j++) {
    if (!hash[j]) {
      result.push(0);
    } else {
      result.push(hash[j]);
    }
  }
  return result;
};
res = countingSort(testArr);
console.log(res);

//////////////////

const countingSort = (arr) => {
  const hash = {};
  let current;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];

    //console.log(current);
    if (!hash[current]) {
      hash[current] = 1;
    } else hash[current]++;
  }

  for (let j = 0; j < 100; j++) {
    if (!hash[j]) {
      result.push(0);
    } else {
      result.push(hash[j]);
    }
  }
  return result;
};
res = countingSort(testArr);
console.log(res);

////////////////

function countingSort(arr) {
  let frequencyArray = new Array(100).fill(0);
  for (let num of arr) {
    frequencyArray[num]++;
  }
  return frequencyArray;
}
