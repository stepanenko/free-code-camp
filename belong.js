
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr = [...arr, num];
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
