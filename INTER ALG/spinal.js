
// TASK: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Solution from stackoverflow:
function spinalCase(str) {
  return str
    .replace(/(?!^)([A-Z])/g, ' $1')
    .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
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

// Given solution 2:
function spinalCase2(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join('-');
}

// Given solution 3:
function spinalCase3(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase3('This Is SpinalTap'));
