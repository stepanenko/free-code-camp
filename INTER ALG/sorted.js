
// TASK: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// My solution 1:
function uniteUnique() {
  let arr = [];
  [...arguments].forEach(array => arr.push(...array));
  let resultArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (!resultArray.includes(arr[i])) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

// My solution 2:
function uniteUnique2() {
  let arr = [];
  [...arguments].forEach(array => arr.push(...array));
  let resultArray = [arr[0]];
  arr.forEach(e => !resultArray.includes(e) ? resultArray.push(e) : null);
  return resultArray;
}

let output = uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(output);
