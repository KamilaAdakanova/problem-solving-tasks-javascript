// задание с интервью Юли Л.

const countDistinctIntegers = (n) => {
  let arr = [n];
  for (let i = 1; i <= n; i++) {
    if (n % i == 1) {
      let dif = n - i;
      arr.unshift(dif);
      console.log(arr);
    }
  }
  return arr.length;
};

res = countDistinctIntegers(7);
console.log(res);
