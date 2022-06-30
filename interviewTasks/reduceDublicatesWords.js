let myArray = ["bar", "foo", "zorb", "bar", "baz", "fum", "baz"];
const reduceDublicateWords = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  console.log(obj);
  let res = [];
  for (let key in obj) {
    console.log(key);
    res.push(key);
    console.log(res);
  }
  return res;
};
reduceDublicateWords(myArray);
