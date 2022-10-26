//https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript

var ownedCatAndDog = function (catYears, dogYears) {
  let countCatY = 0;
  let countDogY = 0;

  if (catYears == 15) {
    countCatY = 1;
  }
  if (dogYears == 15) {
    countDogY = 1;
  }
  if (catYears == 24) {
    countCatY = 2;
  }
  if (dogYears == 24) {
    countDogY = 2;
  }
  if (catYears > 24) {
    countCatY = Math.floor((catYears - 24) / 4 + 2);
  }
  if (dogYears > 24) {
    countDogY = Math.floor((dogYears - 24) / 5 + 2);
  }
  return [countCatY, countDogY];
};

console.log(ownedCatAndDog(15, 73));
