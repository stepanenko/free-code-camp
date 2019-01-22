
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  return str;
}

// titleCase("I'm a little tea pot");

let n = "I'm a little tea pot";
n = n.split(' ');

let r = n.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(...r)

for (let i = 0; i < n.length; i++) {
  let first = n[i][0].toUpperCase();
  n[i][0] = first;
  // console.log(n[i][0])
  // n[i][0] = first;
  // console.log(n[i][0])
}

let b = 'hello';
let t = b[0].toUpperCase();
// console.log(...n);
