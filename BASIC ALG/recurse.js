
// Example task: multiply the elements from 0 to n inclusive in an array to create the product of those elements. 

// Using a for loop:
function mult(arr, n) {
  let product = arr[0];
  for (let i = 1; i <= n; i++) {
    product = product * arr[i];
  }
  return product;
}

// Using a recursion:
function mul(arr, n) {
  if (n <= 0) return arr[0];
  return mul(arr, n - 1) * arr[n];
}

// TASK: Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.
function sum(arr, n) {
  if (n <= 0) return arr[0];
  return sum(arr, n - 1) + arr[n];
}


const output = sum([1], 0);
console.log(output);
