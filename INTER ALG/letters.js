
// TASK: Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

// My Solution 1:
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) !== (str.charCodeAt(i + 1) - 1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

// ===== working...
let str = 'abde';
let arr = [];
let first = str[0];
for(index in str) {
  arr.push(str.charCodeAt(index));
}
let missing;
for (let i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {

  missing = arr.includes(i) ? undefined : i;
}
// console.log(missing);
// includes
 // ===== end of working ====


// Given Solution 1:
function fearNotLetter2(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// const point = String.fromCodePoint(65, 66, 67, 68);   // ABCD
let output = fearNotLetter2("abcdeg");
console.log(output);
