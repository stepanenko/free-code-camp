
// The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

// TASK: Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  return arr.some(el => el > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));
