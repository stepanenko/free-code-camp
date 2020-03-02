
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

// My solution
function findElement(arr, func) {
  return arr.filter(func)[0];
}

console.log(findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
}));


// Given solution
function findElement2(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}
