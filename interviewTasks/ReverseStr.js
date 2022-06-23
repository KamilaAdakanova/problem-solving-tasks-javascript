//1 method LOOP for reverse word
const testWord = "Reverse";
const reverseStr = (str) => {
  str = str.toLowerCase();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};
//console.log(reverseStr(testWord));

//2 method with ARRAY (swapping first with last letter) for reverse word
// function reverseArrayInPlace(str1) {
//   console.log("TestString was", str1);
//   let arr = str1.split(""); // convert str to arr - разделяет стринг на элементы в аррэе
//   console.log("TeatSring is converted to array", arr);
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     console.log("Array before changing", arr);
//     console.log(`\nNew itteration, new i =  ${i}. Current left letter is ${arr[i]}. Current rigth letter is ${arr[arr.length - 1 - i]}`);
//     let num = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = num;
//     console.log("array after changing", arr);
//   }
//   let str = arr.join(""); //convert array to str - собирает вместе
//   return str;
// }
// console.log(reverseArrayInPlace("interview"));

//3 method Reverse short way
const reverseStr2 = (str1) => str1.split("").reverse().join("");
console.log(reverseStr2("hello"));
