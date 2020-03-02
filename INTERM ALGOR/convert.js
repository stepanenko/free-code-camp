
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

const str1 = "Dolce & Gabbana";
const str2 = "Hamburgers < Pizza < Tacos";
const str3 = 'Stuff in "quotation marks"';
const str4 = "Schindler's List";

const output = convertHTML(str3);
console.log(output);
