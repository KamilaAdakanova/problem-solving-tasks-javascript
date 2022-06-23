//https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript

function iceBrickVolume(radius, bottleLength, rimLength) {
  return 2 * (bottleLength - rimLength) * radius ** 2;
}
console.log(iceBrickVolume(5, 30, 7));
