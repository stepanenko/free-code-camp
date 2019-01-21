
// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if (typeof bool === 'boolean') return true;
  return false;
}

console.log(booWho('true'));

// Given solution

function booWho2(bool) {
  return typeof bool === 'boolean';
}
