
// TASK: Find the missing letter in the passed letter range and return it. 
// If all letters are present in the range, return undefined.

// My Solution 1:
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) !== (str.charCodeAt(i + 1) - 1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

// Given Solution 1:
function fearNotLetter1(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// Given Solution 2:
function fearNotLetter2(str) {
  let compare = str.charCodeAt(0);
  let missing;
  str.split('').map((letter, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

// const point = String.fromCodePoint(65, 66, 67, 68);   // ABCD
let output = fearNotLetter2("abcdeg");
console.log(output);
