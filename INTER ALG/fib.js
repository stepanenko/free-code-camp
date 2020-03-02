
// TASK: Given a positive integer num, return the sum
// of all odd Fibonacci numbers that are less than or equal to num.

// For example, sumFibs(10) should return 10 because
// all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


// My solution:
function sumFibs(num) {
  'use strict';
  const fibArray = [1, 1];
  let next;
  let sum = 0;
  let i = 0;

  for ( ; i < fibArray.length ; ) {
    if (fibArray[i] > num) break;
    next = fibArray[i] + fibArray[i + 1];
    fibArray.push(next);
    if (fibArray[i] % 2 !== 0) {
      sum = sum + fibArray[i];
    }
    i++;
  }

  return sum;
}


const output = sumFibs(75024);
console.log(output);
