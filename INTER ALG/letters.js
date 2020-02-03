
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

// Given Solution 2 (edited with ternary):
function fearNotLetter3(str) {
  let compare = str.charCodeAt(0);
  let missing;
  str.split('').map((letter, index) => {
    missing = (str.charCodeAt(index) == compare) ?
      ++compare : String.fromCharCode(compare);
  });
  return missing;
}

// Given from comments:
function fearNotLetter4(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var len = str.length;
  var start = alphabet.indexOf(str[0]);
  
  for(var i = start; i < start + len; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  }
  return undefined;
}

// const point = String.fromCodePoint(65, 66, 67, 68);   // ABCD
let output = fearNotLetter4("abdefgh");
console.log(output);
