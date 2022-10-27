const testArr = [1, 5.2, 4, 0, -1];

for (let i = 0; i < newN.length; i++) {}

res = inviteMoreWomen(testArr);
console.log(res);

const hash = {};
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
  if (!hash[arr[i]]) {
    hash[arr[i]] = 1;
  } else hash[arr[i]]++;
  //console.log(hash);
}
for (el in hash) {
  //console.log(hash[el]); //2221 value of el
  if (hash[el] === 1) {
    return el;
  }
}
