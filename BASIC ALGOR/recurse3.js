// Any recursion can be rewritten as a loop. The loop variant usually can be made more effective!

// TASK: The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.

// My solution:
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) return [startNum]; // or if(startNum - endNum === 0) ...
  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(endNum);
  return arr;
};

// Solution 2:
function rangeOfNumbers2(startNum, endNum) {
  return startNum == endNum 
    ? [startNum] 
    : rangeOfNumbers2(startNum, endNum - 1).concat(endNum);
};

// Solution 3:
function rangeOfNumbers3(startNum, endNum) {
  return startNum == endNum 
    ? [startNum] 
    : [...rangeOfNumbers3(startNum, endNum - 1), endNum];
};

const output = rangeOfNumbers3(2, 6);
console.log(output);
