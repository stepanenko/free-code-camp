
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(str.length - 1) === target.length) return true;
  return false;
}

console.log(confirmEnding("Bastian", "n"));
