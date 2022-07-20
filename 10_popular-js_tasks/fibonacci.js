//Definition:- Fibonacci sequence is basically a sequence of number where every number in
//the sequence is the sum of the two previous one.
//A Fibonacci sequence is something look like this — 0,1,1,2,3,5,8,13,21,….

//PROBLEM:- write a function that returns the nth entry in the Fibonacci sequence,
//where n is a number you pass in as an argument to the function.

//Solution:- First we have to generate the sequence and then we have to
//find out the nth value of the sequence.

//3
const fibonacci = (num) => {
  const arr = [0, 1]; //1, 2

  for (let i = 2; i <= num; i++) {
    let newElement = arr[i - 2] + arr[i - 1];
    arr.push(newElement);
  }
  return arr[arr.length - 1];
};
console.log(fibonacci(7));
