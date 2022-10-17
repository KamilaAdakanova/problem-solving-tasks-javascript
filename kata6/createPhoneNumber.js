//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  //let newNum = numbers.toString()
  let str = '(';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == numbers[2]) {
      str += numbers[i] + ') ';
      //console.log(str);
    } else if (numbers[i] == numbers[5]) {
      str += numbers[i] + '-';
      //console.log(str);
    } else {
      str += numbers[i];
    }
  }
  return str;
}
// res = createPhoneNumber(testArr);
// console.log(res);

function howMuchILoveYou(nbPetals) {
  let arr = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];
  return arr[(nbPetals - 1) % 6];
}
res = howMuchILoveYou(420);
console.log(res);
