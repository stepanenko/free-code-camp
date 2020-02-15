
// TASK: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// My solution 1:
function uniteUnique() {
  let arr = [];
  [...arguments].forEach(array => arr.push(...array));
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
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
  let resultArray = [];
  arr.forEach(e => !resultArray.includes(e) ? resultArray.push(e) : null);
  return resultArray;
}

// My solution 3:
function uniteUnique3() {
  let arr = [...arguments].reduce((acc, val) => acc.concat(val));
  let resultArray = [];
  arr.forEach(e => !resultArray.includes(e) ? resultArray.push(e) : null);
  return resultArray;
}

// My solution 4:
function uniteUnique4(...arrays) {
  let flat = arrays.reduce((acc, val) => acc.concat(val));
  return flat.filter((item, i) => flat.indexOf(item) === i);   // <- found at stackoverflow
  // this algorithm is not particularly efficient for large arrays (quadratic time)
}

// My solution 5:
function uniteUnique5(...arrays) {
  let flat = arrays.reduce((acc, val) => acc.concat(val));
  let seen = {};   // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
  return flat.filter(item => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = item)  // <- found at stackoverflow
  });
}

// Given solution 1:
function uniteUnique6(arr1, arr2, arr3) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

// Given solution 2:
function uniteUnique7(arr) {
  let args = [...arguments];
  let result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

// Given solution 3:
function uniteUnique8(arr1, arr2, arr3) {
  let newArr;
  //Convert the arguments object into an array
  let args = Array.prototype.slice.call(arguments);   // or [...arguments]
  //Use reduce function to flatten the array
  newArr = args.reduce((arrA, arrB) => {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter((i) => arrA.indexOf(i) === -1));
  });
  return newArr;
}

// Given solution 4:
function uniteUnique9() {
  let flat = [];
  let i = 0;
  while (arguments[i]) {
    flat = flat.concat(arguments[i]);
    i++;
  }
  return flat.filter((item, pos) => flat.indexOf(item) === pos);
}

// Given solution 5:
function uniteUnique10(...arrays) {
  const flat = [].concat(...arrays);
  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flat)];
}


let output = uniteUnique10([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(output);
