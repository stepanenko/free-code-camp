
// TASK: Convert the characters &, <, >, ", and '
// in a string to their corresponding HTML entities.


// My solution 1:
function convertHTML(str) {
  const encoded = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return encoded;
}

let str1 = "Dolce & Gabbana";
let str2 = "Hamburgers < Pizza < Tacos";

const output = convertHTML(str2);
console.log(output);
