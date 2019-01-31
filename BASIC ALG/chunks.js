
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// My solution
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Given solution
function chunkArrayInGroups2(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups2(["a", "b", "c", "d"], 2));
