
// TASK: Given the array, iterate through and remove each element starting from the first element (the 0 index)
// until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise - empty array.

// My solution 1:
function myDropElements1(arr, func) {
  let res = [];
  arr.forEach((el, i) => {
    if (func(el)) {
      res = res.concat(i);
    }
  });
  return res.length ? arr.slice(res[0]) : [];
}

// My solution 2 (shortened 1):
function myDropElements2(arr, func) {   // 3.4ms
  let res = [];
  arr.forEach((el, i) => func(el) ? res = res.concat(i) : null);
  return res.length ? arr.slice(res[0]) : [];
}

// My solution 3:
function myDropElements3(arr, func) {   // 3.4ms
  let index = arr.indexOf(arr.filter(func)[0]);
  return index !== -1 ? arr.slice(index) : [];
}

// Given solution 1:
function dropElements(arr, func) {
  let times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// Given solution 2:
function dropElements2(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

console.time('3');
console.log(dropElements2([1, 2, 3, 4], function (n) { return n >= 3; }));  // should return [3, 4]
console.log(dropElements2([0, 1, 0, 1], function (n) { return n === 1; }));  // should return [1, 0, 1]
console.log(dropElements2([1, 2, 3], function (n) { return n > 0; }));  // should return [1, 2, 3]
console.log(dropElements2([1, 2, 3, 4], function (n) { return n > 5; }));  // should return []
console.log(dropElements2([1, 2, 3, 7, 4], function (n) { return n > 3; }));  // should return [7, 4]
console.log(dropElements2([1, 2, 3, 9, 2], function (n) { return n > 2; }));  // should return [3, 9, 2]
console.timeEnd('3');
