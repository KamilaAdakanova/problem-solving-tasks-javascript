const testArrObj = [
  { spec: './spec/functional/features/table/inventory', time: 10.2203 },
  { spec: './spec/functional/features/shelf/inventory', time: 1.34446 },
  { spec: './spec/functional/features/shelf/inventory', time: 10.12359 },
  { spec: './spec/functional/features/chair/inventory', time: 20.10765 },
  { spec: './spec/functional/features/table/inventory', time: 8.00609 },
];

const convertingSpec = (arr) => {
  const newArr = [];
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]); //
    // { spec: './spec/functional/features/table/inventory', time: 10.223 }
    // { spec: './spec/functional/features/shelf/inventory', time: 01.34446 }
    // { spec: './spec/functional/features/shelf/inventory', time: 0.12569 }
    // { spec: './spec/functional/features/chair/inventory', time: 20.10765 }
    // { spec: './spec/functional/features/table/inventory', time: 8.005609 }
    //console.log(arr[i].spec); //
    //./spec/functional/features/table/inventory
    // ./spec/functional/features/shelf/inventory
    // ./spec/functional/features/shelf/inventory
    // ./spec/functional/features/chair/inventory
    // ./spec/functional/features/table/inventory
    let specPath = arr[i]['spec'];
    let specTime = arr[i]['time'];
    //console.log({ specPath, specTime });
    if (!hash[specPath]) {
      hash[specPath] = specTime;
      //console.log('New key', hash[specPath]);
    } else {
      hash[specPath] += specTime;
      // console.log('Added time', +hash[specPath].toFixed(2));
    }
  }
  for (let key in hash) {
    hash[key] = hash[key].toFixed(2);
    newArr.push({ spec: key, time: hash[key] });
  }
  return newArr;
};
res = convertingSpec(testArrObj);
console.log(res);
