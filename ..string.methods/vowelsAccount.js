//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

////////////////////
function getCount(str) {
  let count = 0;
  let vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
