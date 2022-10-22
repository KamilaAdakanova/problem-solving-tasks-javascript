//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
const meet = {
  tim: 0,
  jim: 2,
  randy: 0,
  sandy: 7,
  andy: 0,
  katie: 5,
  laura: 1,
  saajid: 2,
  alex: 3,
  john: 2,
  mr: 0,
};
const boss = 'laura';

function outed(meet, boss) {
  let countPeople = 0;
  let commonRate = 0;
  for (let key in meet) {
    //console.log(Object.keys(meet).length); for
    if (key == boss) {
      commonRate += meet[key] * 2;
      // console.log('Boss', { commonRate });
    } else {
      commonRate += meet[key];
      //console.log({ commonRate });
    }
    countPeople++;
  }
  return commonRate / countPeople <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
res = outed(meet, boss);
console.log(res);
