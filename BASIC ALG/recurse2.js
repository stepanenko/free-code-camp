// Any recursion can be rewritten as a loop. The loop variant usually can be made more effective!

// Example task: write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1:

function countUp(n) {
  if (n < 1) return [];
  const arr = countUp(n - 1);
  arr.push(n);

  return arr;
}
console.log(countUp(3));   // [ 1, 2, 3 ]

// TASK: create a function countdown(n), it should use recursion to return an array containing the integers n through 1. For example, if n = 5 -> array [5, 4, 3, 2, 1].

// Solution 1:
function countDown(n) {
  if (n < 1) return [];
  const arr = countDown(n - 1);
  arr.unshift(n);
  return arr;
}

// Solution 2:
function countDown2(n) {
  if (n < 1) return [];
  const arr = countDown2(n - 1);
  arr.splice(0, 0, n);
  return arr;
}

// Solution 3:
function countDown3(n) {
  return n < 1 ? [] : [n].concat(countDown3(n - 1));
}

// Solution 4:
function countDown4(n) {
  return n < 1 ? [] : [n, ...countDown3(n - 1)];
}

let output = countDown4(6);
console.log(output);
