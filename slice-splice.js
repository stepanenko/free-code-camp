
// Use the array methods slice and splice to copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. The first array should remain the same after the function runs. The second array should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arr3 = [...arr2]; // or let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// Given solution

function frankenSplice2(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
