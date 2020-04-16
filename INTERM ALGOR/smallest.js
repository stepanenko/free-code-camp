
// TASK: Find the smallest common multiple of the provided parameters that can be evenly divided
// by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let first = arr[0];
  let last = arr[1];
  if (arr[0] > arr[1]) {
    first = arr[1];
    last = arr[0];
  }

  let full = [];
  while (full.length < last) {
    full = full.concat(first++);
  }

  let storage = [];
  let i = last;
  while (storage.length !== full.length) {
    for (let j = 0; j < full.length; j++) {
      if (i % full[j] === 0) {
        storage = storage.concat(i);
      } else {
        storage = [];
        break;
      }
    }
    if (storage.length === full.length) return i;
    i++;
  }

}

let output = smallestCommons([1, 3]);

// smallestCommons([1, 5]) should return 60.  works well
// smallestCommons([2, 10]) should return 2520.   doesnt!
// smallestCommons([23, 18]) should return 6056820.   doesnt!

console.log(output);
