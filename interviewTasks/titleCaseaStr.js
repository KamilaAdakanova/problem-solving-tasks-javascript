const testStr = " hello world! ";

//1method LOOP for capitalize first letter of each word
const capitalizeWords1 = (str) => {
  str = str.trim();
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    console.log("");
    if (str[i] === " ") {
      newStr = newStr + str[i] + str[i + 1].toUpperCase();
      i++;
      console.log("newStr", newStr);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

//console.log(capitalizeWords1(testStr));

//2method with Array
const capitalizeWords2 = (str) => {
  //str = str.trim(); либо сразу в
  let arr = str.trim().split(" ");
  let str1 = "";
  let arr2 = [];
  console.log(arr);
  for (let el of arr) {
    console.log("before", el);
    str1 = el.charAt(0).toUpperCase() + el.slice(1);
    console.log("after", str1);
    arr2.push(str1);
  }
  console.log("arr after", arr2);
  return arr2.join(" ");
};
console.log(capitalizeWords2(testStr));
