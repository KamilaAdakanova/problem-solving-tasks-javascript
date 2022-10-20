//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

const testArr = ['a', 'a', 'a', 'a', 'a'];

function checkThreeAndTwo(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }
  console.log(obj);
  let count3 = 0;
  let count2 = 0;
  for (let key in obj) {
    if (obj[key] == 5) {
      return false;
    } else if (obj[key] % 3 == 0) {
      count3++;
      console.log({ count3 });
    } else if (obj[key] % 2 == 0) {
      count2++;
      console.log({ count2 });
    }
  }

  return count3 === count2;
}

res = checkThreeAndTwo(testArr);
console.log(res);

// another way

function checkThreeAndTwo(array) {
  var item1 = 0,
    item2 = 0,
    item3 = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'a') {
      item1++;
    } else if (array[i] === 'b') {
      item2++;
    } else if (array[i] === 'c') {
      item3++;
    }
  }
  return (
    (item1 == 2 || item2 == 2 || item3 == 2) &&
    (item1 == 3 || item2 == 3 || item3 == 3)
  );
}

//another way
function checkThreeAndTwo(array) {
  let as = array.filter((x) => x === 'a').length;
  let bs = array.filter((x) => x === 'b').length;
  let cs = array.filter((x) => x === 'c').length;
  return (
    (as === 3 || bs === 3 || cs === 3) && (as === 2 || bs === 2 || cs === 2)
  );
}
