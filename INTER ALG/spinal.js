
// TASK: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
                .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return spinal;
}

console.log(spinalCase('This Is Spinal Tap'));
