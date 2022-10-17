//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLitre) {
  let pricePerLitre1 = pricePerLitre * 100;
  let discount = 5 * Math.floor(litres / 2);
  if (litres >= 2) {
    return (litres * (pricePerLitre1 - discount)) / 100;
  } else {
    return litres * pricePerLitre;
  }
}
res = fuelPrice(8, 2.5);
console.log(res);
