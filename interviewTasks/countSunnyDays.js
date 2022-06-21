const sunnyDays = [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
const x = [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1];
const getSunnyDaysPerMonth = (sunnyDays) => {
  let numberOfDay;
  let numberOfMonth;
  let res = {};

  //Hash Table
  for (let i = 0; i < sunnyDays.length; i++) {
    numberOfDay = i % 30;
    numberOfMonth = Math.floor(i / 30);
    console.log(`\n Itteration i =  ${i}. Current month = ${numberOfMonth}, Current day = ${numberOfDay}`);
    if (sunnyDays[i] === 1) {
      console.log("Current day is sunny");
      console.log(`Lets check key ${numberOfMonth} in res object`);
      if (res[numberOfMonth]) {
        console.log(`Key ${numberOfMonth}  exists`);
        res[numberOfMonth]++;
        console.log("Current res", res);
      } else {
        res[numberOfMonth] = 1;
        console.log(`Key ${numberOfMonth} does not exist, we have to create it`);
        console.log("Current res", res);
      }
    }
  }
};
getSunnyDaysPerMonth(x);

// 2 решение методом LOOP
sunnyDaysLoop = (arr) => {
  let res = {};
  let currentMonth = 0;
  let tempMonth;
  let sunnyDaysCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`\ncurrent i=${i}`);
    console.log(`lets check if current day is sunny`);
    if (arr[i] === 1) {
      console.log(`this day is sunny`);
      console.log(`lets check month of this day`);
      tempMonth = Math.floor(i / 30);
      console.log(`this is a day from month ${tempMonth}`);
      console.log(`check if tempMonth === currentMonth`);
      if (tempMonth === currentMonth) {
        console.log("tempMonth===currentMonth - sunnuDayCounter ++");
        sunnyDaysCounter++;
      } else {
        res[currentMonth] = sunnyDaysCounter;
        sunnyDaysCounter = 1;
        currentMonth++;
      }
    } else {
      console.log(`this is not a sunny`);
    }
  }
  console.log(res);
};
