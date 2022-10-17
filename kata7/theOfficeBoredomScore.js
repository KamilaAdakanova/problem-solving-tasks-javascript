//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

const testObj = {
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change',
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS',
  alex: 'trading',
  john: 'accounts',
  mr: 'finance',
};

function boredom(staff) {
  let obj = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  let count = 0;
  for (let key in obj) {
    for (let k in staff) {
      if (key == staff[k]) count += obj[key];
    }
  }
  return count <= 80
    ? 'kill me now'
    : count < 100 && count > 80
    ? 'i can handle this'
    : 'party time!!';
}

res = boredom(testObj);
console.log(res);
