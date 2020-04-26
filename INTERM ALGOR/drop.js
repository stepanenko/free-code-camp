
// TASK: Given the array, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

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
function myDropElements2(arr, func) {   // 3.7ms
  let res = [];
  arr.forEach((el, i) => func(el) ? res = res.concat(i) : null);
  return res.length ? arr.slice(res[0]) : [];
}

// My solution 3 (not ready):
function myDropElements3(arr, func) {   // 3.7ms
  let index = arr.indexOf(arr.filter(func)[0]);
  return index !== -1 ? arr.slice(index) : [];
}

console.time('3');
console.log(myDropElements3([1, 2, 3, 4], function (n) { return n >= 3; }));  // should return [3, 4]
console.log(myDropElements3([0, 1, 0, 1], function (n) { return n === 1; }));  // should return [1, 0, 1]
console.log(myDropElements3([1, 2, 3], function (n) { return n > 0; }));  // should return [1, 2, 3]
console.log(myDropElements3([1, 2, 3, 4], function (n) { return n > 5; }));  // should return []
console.log(myDropElements3([1, 2, 3, 7, 4], function (n) { return n > 3; }));  // should return [7, 4]
console.log(myDropElements3([1, 2, 3, 9, 2], function (n) { return n > 2; }));  // should return [3, 9, 2]
console.timeEnd('3');
