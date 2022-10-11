const testArray = [
  'notebook',
  'notebook',
  'mouse',
  'keyboard',
  'keyboard',
  'notebook',
  'printer',
];

const groupingIteam = (arr) => {
  arr = arr.sort();
  //console.log(arr);
  const newArr = [];
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else hash[arr[i]]++;
    //console.log(hash);
  }
  // console.log(hash);

  //console.log(hash);
  for (let key in hash) {
    // console.log(hash[key]);
    newArr.push(hash[key]);
    newArr.sort((a, b) => b - a);
  }
  console.log(newArr);
};

res = groupingIteam(testArray);
