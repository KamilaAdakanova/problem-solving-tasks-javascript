const testTime = "11:01:00AM";
const testTime1 = "07:05:45PM";

const timeConversion = (s) => {
  let timeLetter = s[8];
  let hours = s[0] + s[1];
  let minSec = s.slice(2, 8);
  //console.log(minSec)
  if (timeLetter === "A") {
    if (hours === "12") {
      //console.log('00'+minSec)
      return "00" + minSec;
    } else {
      return hours + minSec;
    }
  } else {
    if (hours === "12") {
      return hours + minSec;
    } else {
      return +hours + 12 + minSec;
    }
  }
};
console.log(timeConversion(testTime1));
