//https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
//

function twoArrays(k, A, B) {
  let newA = A.sort((a, b) => a - b);
  let newB = B.sort((a, b) => b - a);
  for (let i = 0; i < newA.length; i++) {
    if (newA[i] + newB[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}
res = twoArrays(10, [7, 6, 8, 4, 2], [5, 2, 6, 3, 1]);
console.log(res);
