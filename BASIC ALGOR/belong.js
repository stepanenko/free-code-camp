
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr = [...arr, num];
  arr.sort((a, b) => a - b); // OR: arr.sort((a, b) => a > b);
  return arr.indexOf(num); // OR: return arr.findIndex(v => v === num);
}

console.log(getIndexToIns([40, 60], 50));

// Given advanced solution
function getIndexToIns2(arr, num) {
  return arr
    .concat(num)
    .sort((curr, next) => curr > next)
    .indexOf(num);
}

console.log(getIndexToIns2([10, 20, 30, 40, 50], 30));
