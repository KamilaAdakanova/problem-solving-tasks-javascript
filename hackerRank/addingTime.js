const testData = [
  { spec1: "spec.table", time: 7.01234567 },
  { spec1: "spec.table", time: 13.01234567 },
  { spec1: "spec.shelf", time: 20.01234567 },
  { spec1: "spec.shelf", time: 23.01234567 },
  { spec1: "spec.chair", time: 71.01234567 },
  { spec1: "spec.chair", time: 7.01234567 },
];

const testData1 = [
  { spec1: "spec.table", time: 7.01234567 },
  { spec1: "spec.chair", time: 71.01234567 },
  { spec1: "spec.shelf", time: 20.01234567 },
  { spec1: "spec.shelf", time: 23.01234567 },
  { spec1: "spec.chair", time: 7.01234567 },
  { spec1: "spec.shelf", time: 23.01234567 },
  { spec1: "spec.chair", time: 7.01234567 },
  { spec1: "spec.chair", time: 71.01234567 },
  { spec1: "spec.shelf", time: 20.01234567 },
  { spec1: "icecream", time: 0 },
  { spec1: "spec.table", time: 13.01234567 },
];

const inventory = (arr) => {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i += 2) {
    sum = arr[i]["time"] + arr[i + 1]["time"];
    sum = +sum.toFixed(2);
    ans.push({ spec1: arr[i]["spec1"], time: sum });
  }
  return ans;
};
//const finalRes = inventory(testData);
//console.log(finalRes);

const inventory1 = (arr) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    //console.log("New itteration", i);
    if (!hash[arr[i]["spec1"]]) {
      hash[arr[i]["spec1"]] = arr[i]["time"];
      //console.log("Creating a unique key", hash);
    } else {
      hash[arr[i]["spec1"]] += arr[i]["time"];
      //console.log("added to existing key", hash);
    }
  }
  let newArr = [];

  for (let key in hash) {
    hash[key] = hash[key].toFixed(2);
    newArr.push({ spec1: key, time: hash[key] });
  }
  return newArr;
};
const finalRes1 = inventory1(testData1);
console.log(finalRes1);
