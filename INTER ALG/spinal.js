
// TASK: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Solution fron stackoverflow:
function spinalCase(str) {
  var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
                .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return spinal;
}

// Given solution 1:
function spinalCase1(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with '-'
  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase1('This Is Spinal Tap'));
