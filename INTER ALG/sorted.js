
// TASK: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// My solution:
function uniteUnique(arr) {
  let uArray = [];
  [...arguments].forEach((array, index) => {
    uArray.push(...array);
  });
  let resultArray = [uArray[0]];
  for (let i = 1; i < uArray.length; i++) {
    if (!resultArray.includes(uArray[i])) {
      resultArray.push(uArray[i]);
    }
  }
  return resultArray;
}

let output = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(output);
