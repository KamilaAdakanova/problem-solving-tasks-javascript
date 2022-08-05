// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
const testStr1 = '12:45:05PM'; //'12:01:00
const testStr2 = '12:01:00AM'; //'00:01:00

const timeConversion = (str) => {
  let firstAndSecondInteger = str[0] + str[1];
  let pmOrAm = str[str.length - 2];

  let convertToNumber = Number(str[0] + str[1]);

  if (firstAndSecondInteger === '12' && pmOrAm === 'P') {
    console.log(
      str[0] + str[1] + str[2] + str[3] + str[4] + str[5] + str[6] + str[7]
    );
  } else if (firstAndSecondInteger !== '12' && pmOrAm === 'P') {
    console.log(
      String(convertToNumber + 12) +
        str[2] +
        str[3] +
        str[4] +
        str[5] +
        str[6] +
        str[7]
    );
  } else if (firstAndSecondInteger === '12' && pmOrAm === 'A') {
    console.log(
      '0' + '0' + str[2] + str[3] + str[4] + str[5] + str[6] + str[7]
    );
  } else
    console.log(
      str[0] + str[1] + str[2] + str[3] + str[4] + str[5] + str[6] + str[7]
    );
};

res = timeConversion(testStr1);
//console.log(res);
