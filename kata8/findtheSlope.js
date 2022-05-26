//https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
//Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points. For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

function slope(points) {
  let a = points[0];
  let b = points[1];
  let c = points[2];
  let d = points[3];
  let m = (d - b) / (c - a);
  if (c - a === 0) return "undefined";
  return m.toString();
}
console.log(slope([19, 3, 20, 3]));
