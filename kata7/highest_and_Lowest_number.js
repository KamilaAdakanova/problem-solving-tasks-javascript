function highAndLow(numbers) {
  let min = null;
  let max = null;
  let current = '';
  for (let i = 0; i < numbers.length; i++) {
    console.log('Number or space ', numbers[i]);
    if (numbers[i] == ' ' || i == numbers.length - 1) {
      if (min == null && max == null) {
        min = +current;
        max = +current;

        console.log('If min and max are null', min, max, current);
      } else if (+current < min) {
        min = +current;

        console.log('Min', min, current);
      } else if (+current > max) {
        max = +current;

        console.log('Max', max, current);
      }
    } else {
      current += numbers[i];
    }
    current = '';
  }
  return `${max} ${min}`;
}
res = highAndLow('1 2 0 3 8');
console.log(res);

const highAndLow = (numbers) => {
  let arr = numbers.split(' ');
  let high = +arr[0];
  let low = +arr[0];
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (+arr[i] > high) {
      high = arr[i];
      //console.log(high);
    }
    if (+arr[i] < low) {
      low = arr[i];
    } // console.log(low);
  } // console.log(high, low);
  return high + ' ' + low;
};
console.log(highAndLow('34 3 15 7 21 2 0 -7'));
