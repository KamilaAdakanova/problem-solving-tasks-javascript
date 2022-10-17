//https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
const testArr = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];

function duckDuckGoose(players, goose) {
  for (let i = 0; i < players.length; i++) {
    if (goose > players.length) {
      let a = goose % players.length;
      console.log(a);
      if (a === 0) {
        return players[9];
      }
      return players[a - 1];
    } else {
      return players[goose - 1];
    }
  }
}
// res = duckDuckGoose(testArr, 20);
// console.log(res);

function duckDuckGoose1(players, goose) {
  return players[(goose - 1) % players.length];
}
res = duckDuckGoose1(testArr, 20);
console.log(res);
