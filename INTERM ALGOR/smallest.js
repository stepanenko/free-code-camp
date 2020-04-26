
// TASK: Find the smallest common multiple of the provided parameters that can be evenly divided
// by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// My solution 1
function mySmallestCommons(arr) {   // 37ms
  let first = arr[0];
  let last = arr[1];
  if (arr[0] > arr[1]) {
    first = arr[1];
    last = arr[0];
  }

  let filled = [];
  let filler = first;
  while (filled.length <= (last - first)) {
    filled = filled.concat(filler++);
  }

  let counter = 0;
  let smallest = last;
  while (true) {
    for (let j = 0; j < filled.length; j++) {
      if (smallest % filled[j] === 0) {
        counter++;
        if (counter === filled.length) return smallest;
      } else {
        smallest++;
        counter = 0;
        break;
      }
    }
  }
}

console.time('speed');
console.log(mySmallestCommons([5, 1])); // should return 60
console.log(mySmallestCommons([2, 10])); // should return 2520 
console.log(mySmallestCommons([1, 5])); // should return 60
console.log(mySmallestCommons([1, 13])); // should return 360360
console.log(mySmallestCommons([23, 18])); // should return 6056820
console.timeEnd('speed');


// ==== Solution 1 ====
function smallestCommons1(arr) {   // 5.5ms
  // Sort from greater to lowest
  arr.sort(function (a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the original array
  let newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    // newArr.push(i);
    newArr = newArr.concat(i);   // looks like concat() is fater than push()
  }

  let quot = 0;
  let loop = 1;
  let n;
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) break;
    }
    loop++;
  } while (n !== newArr.length);

  return quot;
}


// ==== Solution 2 ====
function smallestCommons2(arr) {   // 2.7ms
  let range = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  let lcm = range[0];
  // lcm = Least Common Multiple
  for (i = 1; i < range.length; i++) {
    let GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm; gcd = greatest common divisor
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}


// ==== Solution 3 ====
function smallestCommons3(arr) {   // 2.7ms
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}


// ==== Solution 4 ====
function smallestCommons4(arr) {   // 8ms
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};
