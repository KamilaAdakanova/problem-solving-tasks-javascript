// A => B => C => ERROR

// A => C => B => no error
// C => B => A => no error
// A => B => C => A => no error

// Create a function that outputs all the userIds who experienced the error.

// Logs are in chronological order from when they occurred
const logs = [
  { action: 'A', userId: 1 }, // 1 - AAABBCB
  { action: 'A', userId: 1 }, // 2 - ABCA
  { action: 'A', userId: 2 }, // 3 - ABAC
  { action: 'A', userId: 3 }, // 4 - C
  { action: 'A', userId: 1 }, //
  { action: 'B', userId: 1 },
  { action: 'B', userId: 1 },
  { action: 'B', userId: 2 },
  { action: 'B', userId: 3 },
  { action: 'A', userId: 3 },
  { action: 'C', userId: 3 },
  { action: 'C', userId: 2 },
  { action: 'C', userId: 1 },
  { action: 'B', userId: 1 },
  { action: 'C', userId: 4 },
  { action: 'A', userId: 2 },
];

console.log('Hello Kamila!');

const userIdsErrors = (arr) => {
  let userId1 = [];
  let userId2 = [];
  let userId3 = [];
  let userId4 = [];

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i].userId)
    if (arr[i].userId == 1) {
      userId1.push(arr[i].action);
    } else if (arr[i].userId == 2) {
      userId2.push(arr[i].action);
    } else if (arr[i].userId == 3) {
      userId3.push(arr[i].action);
    } else {
      userId4.push(arr[i].action);
    }
  }
  console.log({ userId1 });
  console.log({ userId2 });
  console.log({ userId3 });
  console.log({ userId4 });

  let res = [];
  if (userId1.toString() !== ['A', 'B', 'C', 'A'].toString()) {
    res.push(1);
  }
  if (userId2.toString() !== ['A', 'B', 'C', 'A'].toString()) {
    res.push(2);
  }
  if (userId3.toString() !== ['A', 'B', 'C', 'A'].toString()) {
    res.push(3);
  }
  if (userId3.toString() !== ['A', 'B', 'C', 'A'].toString()) {
    res.push(4);
  }
  return res;
};
console.log(userIdsErrors(logs));
