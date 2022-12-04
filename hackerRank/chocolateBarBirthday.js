//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//hackerRank

const birthday = (s, d, m) => {
  console.log(
    `Segments  ${s}, \nday of birhday  ${d} (sum), \nmonth of birthday  ${m} (length)`
  );
  let countResult = 0;
  let sum = 0;
  let lengthOfNum = 0;
  for (let i = 0; i < s.length; i++) {
    sum = sum + s[i];
    lengthOfNum++;
    console.log(`we sum all numbers, we get ${sum}`);
    console.log(`the length is ${lengthOfNum}`);

    if (lengthOfNum === m) {
      if (sum === d) {
        countResult++;
        console.log(
          'CONGARULATE you, We get one match, total number of matches is',
          { countResult }
        );
      }
      sum = sum - s[i - 1];
      lengthOfNum--;
    }
  }
  return countResult;
};

const result = birthday([2, 2, 1, 3, 2], 4, 2);
console.log(
  `FINAL RESULT. Lily can divide the chocolate for "${result}" way(s)`
);
