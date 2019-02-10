
// TASK: We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
