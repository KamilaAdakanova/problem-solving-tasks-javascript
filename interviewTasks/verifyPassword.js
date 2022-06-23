testPassword = "ATYUIm1#23";
const verifyPassword = (password) => {
  let numCount = 0;
  let letterUpCount = 0;
  let letterLowerCount = 0;
  let symbCount = 0;
  if (password.length < 8 || password.length > 10) {
    return false;
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] === " ") {
      return false;
    }
    if (typeof (parseInt(password[i]) === "number")) {
      //if (typeof (parseInt(password[i]) === "number")) {
      //typeof (+password[i] === "number"),  example of '5' => 5 (из стринга в номер)  or use Math.floor(str), Number(str), parseInt(str)parseInt - (password[i]) === "number"
      numCount++;
    }
    if (password[i].toLowerCase() === password[i]) {
      letterLowerCount++;
    }
    if (password[i].toUpperCase() === password[i]) {
      letterUpCount++;
    }
    if (password[i] === "@" || password[i] === "#" || password[i] === "$" || password[i] === "%" || password[i] === "&") {
      symbCount++;
    }
  }
  if (numCount === 0 || letterLowerCount === 0 || letterUpCount === 0 || symbCount === 0) {
    return false;
  } else {
    return true;
  }
};
const res = verifyPassword(testPassword);
console.log(res);
