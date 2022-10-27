//https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//solution
//https://www.youtube.com/watch?v=u8lniQS1ps8

function flippingBits(n) {
  return 2 ** 32 - 1 - n;
}
console.log(flippingBits(1));
