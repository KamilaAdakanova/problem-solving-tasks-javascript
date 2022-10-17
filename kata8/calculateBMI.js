//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  let res = weight / height ** 2;
  if (res <= 18.5) {
    return 'Underweight';
  }
  if (res <= 25.0) {
    return 'Normal';
  }
  if (res <= 30.0) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
res = bmi(80, 1.8);
console.log(res);
