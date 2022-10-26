//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let firtsY = 15;
  let arr = [humanYears];
  let countCatY = 24;
  let countDogY = 24;
  if (humanYears === 1) {
    arr.push(firtsY, firtsY);
    return arr;
  } else if (humanYears === 2) {
    arr.push(countCatY, countDogY);
    return arr;
  }
  for (let i = 2; i < humanYears; i++) {
    countCatY += 4;
    countDogY += 5;
  }
  arr.push(countCatY, countDogY);
  return arr;
};
console.log(humanYearsCatYearsDogYears(10));
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10;

//another short way

var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

//

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};
//

const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
