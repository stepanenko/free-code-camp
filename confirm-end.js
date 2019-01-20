
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(str.length - target.length) === target;
  // return str.slice(str.length - target.length) === target; // Given solution
}

console.log(confirmEnding("Bastian", "n"));
