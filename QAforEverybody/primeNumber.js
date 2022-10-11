function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % 1 == 0 && num > 1) {
        return false;
      }
    }
    return true;
  }
  return false;
}
//console.log(isPrime(7));

// function haveManyPrimes(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(isPrime(arr[i]))
//     }
// }

//  function sc(floor){
//      let result = "";
//      if (floor <= 1) return "";
//      for (let i = 1; i < floor; i++){
//          result += "Aa~ ";
//         }
//         result += "Pa!";
//         if (floor <= 6)
//         result += " Aa!"
//         return result;
//      }
//Jumping Dutch act
function sc(floor) {
  let eachFloor = 'Aa~ ';
  let floorMoreThan6 = 'Pa!';
  let floor6 = 'Pa! Aa!';
  let result = '';

  if (floor <= 1) return '';

  for (let i = 1; i < floor; i++) {
    result += eachFloor;
  }
  if (floor <= 6) return (result += floor6);
  else result += floorMoreThan6;

  return result;
}
console.log(sc(3));
