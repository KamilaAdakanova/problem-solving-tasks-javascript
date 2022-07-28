const testStr = 'Kaylk';

const palindrome1 = (str) => {
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    let leftLetter = str[i].toLowerCase();
    let rigthLetter = str[str.length - 1 - i].toLowerCase();
    //console.log({ leftLetter, rigthLetter });
    if (leftLetter !== rigthLetter) {
      console.log(
        `This letter ${leftLetter} with index ${i} does not match with index ${rigthLetter} with ${
          str.length - 1 - i
        }`
      );
      return false;
    }
  }
  return true;
};
res = palindrome1(testStr);
console.log(res);
