const testArr = [[1, 1, 1]];
function inviteMoreWomen(L) {
  let countMen = 0;
  let countWoman = 0;
  for (let i = 0; i < L.length; i++) {
    if (L[i] < 0) {
      countWoman++;
    } else {
      countMen++;
    }
  }
  //console.log({ countWoman }, { countMen });
  return countWoman < countMen;
}
res = inviteMoreWomen(testArr);
console.log(res);
