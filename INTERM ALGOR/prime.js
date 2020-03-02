
// TASK: Return the sum of all prime numbers that are less than or equal to num.

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.


// My solution:
function sumPrimes(num) {
  const arr = [];
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    arr.push(i);
    const temp = [];

    for (let j = 0; j <= arr.length; j++) {
      if (i % arr[j] === 0) {
        temp.push(i);
      }
    }

    if (temp.length === 1) sum += temp[0];
  }

  return sum;
}


const output = sumPrimes(977);
console.log(output);
