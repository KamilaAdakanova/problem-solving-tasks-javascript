const testArr = [4, 6, 1, 3, 8, 6, 8];
const birthdayCakeCandles = (candles) => {
  let max = candles[0];
  let count = 1;
  for (let i = 1; i < candles.length; i++) {
    let current = candles[i];

    if (current > max) {
      max = current;
      count = 1;
      //console.log(count);
    } else if (current === max) {
      count++;
      //console.log(count);
    }
  }
  return count;
};
res = birthdayCakeCandles(testArr);
//console.log(res);

const birthdayCakeCandles1 = (candles) => {
  let hash = {};
  let max = candles[0];

  for (let i = 1; i < candles.length; i++) {
    let current = candles[i];
    //console.log(current);
    if (current > max) {
      max = current;
      // hash[current] = 1;

      // console.log(hash[candles[i]]);
    } else if (current === max) {
      hash[current] += 1;
    }
    // console.log(hash);
  }
  return hash;
};
res1 = birthdayCakeCandles1(testArr);
console.log(res1);
