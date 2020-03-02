
// TASK: Given a positive integer num, return the sum
// of all odd Fibonacci numbers that are less than or equal to num.

// For example, sumFibs(10) should return 10 because
// all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


// My solution:
function sumFibs(num) {
  return num;
}


let fibArray = [1, 1];
let fibOdd = [1, 1];
const num = 75025;
const fibLen = 30;

for (let i = 0; i < fibLen; i++) {
  const current = fibArray[i] + fibArray[i + 1];
  fibArray.push(current);
  fibOdd = current % 2 === 0 ? [...fibOdd ] : [...fibOdd, current ];
}

const sum = fibArray.reduce((acc, el) => {
  return acc += el % 2 !== 0 ? el : 0;
})
console.log(fibOdd);

const output = sumFibs(4);
console.log(output);
