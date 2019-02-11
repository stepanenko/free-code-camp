
// TASK: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Imperative solution:
function diffArray(arr1, arr2) {
  var newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

// Given solution (Declarative):
function diffArray2(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(
    item => !arr1.includes(item) || !arr2.includes(item)
    )
}
  
// Given solution 2:
function diffArray3(arr1, arr2) {
  return arr1
  .filter(el => !arr2.includes(el))
  .concat(
    arr2.filter(el => !arr1.includes(el))
  )
}

// Given solution 3:
function diffArray4(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(el => b.indexOf(el) === -1);
  }
}

console.log(diffArray4([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
