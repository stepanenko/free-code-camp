
// The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

// TASK: Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  return arr.every(el => el > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));
