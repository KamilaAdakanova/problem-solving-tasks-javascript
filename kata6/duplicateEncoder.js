//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

const testStr = 'Success';

function duplicateEncode(word) {
  let w = word.toLowerCase();
  let result = '';

  for (let i = 0; i < w.length; i++) {
    let duplicates = 0;
    //console.log(w[i], 'Itteration i');
    for (let k = 0; k < w.length; k++) {
      console.log(w[k]);
      if (w[i] === w[k]) {
        console.log('w[i]', w[i], 'w[k]', w[k]);
        duplicates++;
      }
    }
    if (duplicates > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }
  return result;
}
res = duplicateEncode(testStr);
console.log(res);

//another way

function duplicateEncode(word) {
  var unique = '';
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    } else {
      unique += ')';
    }
  }
  return unique;
}
