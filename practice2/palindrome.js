const testStr = 'Kayak'; //

const palindrome = (word) => {
  if (typeof word !== 'string') return false; //just in case if testStr = null / undefined/ number
  let str = word.trim(); //just in case if testStr =  with spaces
  if (str === '') return false; //just in case if testStr = empty str
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    //console.log(str[str.length - 1 - i]);
    let leftSideLetter = str[i].toLowerCase();
    let rigthSideLetter = str[str.length - 1 - i].toLowerCase();
    if (leftSideLetter !== rigthSideLetter) {
      return false;
    }
  }
  return true;
};

res = palindrome(testStr);
console.log(res);
