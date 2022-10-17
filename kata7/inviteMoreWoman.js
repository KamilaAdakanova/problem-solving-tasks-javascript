const testArr = [1, -1, 1];
function inviteMoreWomen(L) {
  let countMen = 0;
  let countWoman = 0;
  for (let i = 0; i < L.length; i++) {
    console.log(L[i], 'element');
    if (L[i] < 0) {
      countWoman++;
    } else {
      countMen++;
    }
  }
  console.log({ countWoman }, { countMen });
  return countWoman < countMen;
}
res = inviteMoreWomen(testArr);
console.log(res);

//another way

function inviteMoreWomen(L) {
  var sum = 0;
  L.forEach((e) => (sum += e));
  return sum > 0;
}

// another one

function inviteMoreWomen(L) {
  let countMan = 0;
  let countWoman = 0;

  for (let elt of L) {
    elt > 0 ? countMan++ : countWoman++;
  }

  return countMan > countWoman ? true : false;
}
